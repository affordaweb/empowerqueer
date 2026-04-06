#!/usr/bin/env npx ts-node
/**
 * scripts/fetch-content.ts
 *
 * Automated content refresh script for EmpowerQueer Hub.
 * Runs on a weekly schedule via GitHub Actions.
 *
 * What it does:
 *  1. Removes past events from data/events.ts (dateISO < today)
 *  2. Fetches new LGBTQ+ resources from open/public RSS feeds
 *     (ILGA World, UNAIDS, UN Free & Equal, HRW, Outright Action)
 *  3. Adds new entries to data files — skipping duplicates by id/title
 *  4. Writes back the updated data files
 *
 * Copyright policy:
 *  - Only uses feeds whose content is CC-BY, public-domain, or explicitly
 *    licensed for non-commercial reuse (UN agencies, ILGA World, HRW).
 *  - Entries link back to the original source; no verbatim content is copied.
 *
 * Usage:
 *   npx ts-node scripts/fetch-content.ts
 *   node -r ts-node/register scripts/fetch-content.ts
 */

import * as fs from "fs";
import * as path from "path";
import * as https from "https";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function log(msg: string) {
  process.stdout.write(`[fetch-content] ${msg}\n`);
}

function today(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function slug(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

function httpsGet(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "EmpowerQueerHub/1.0" } }, (res) => {
        let body = "";
        if (res.statusCode === 301 || res.statusCode === 302) {
          httpsGet(res.headers.location!).then(resolve).catch(reject);
          return;
        }
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => resolve(body));
      })
      .on("error", reject);
  });
}

// ─── Past-event pruner ────────────────────────────────────────────────────────

async function prunePastEvents() {
  const filePath = path.join(__dirname, "../data/events.ts");
  const src = fs.readFileSync(filePath, "utf8");

  const now = today();
  let removed = 0;

  // Match each event object block: from opening { to closing },
  const patched = src.replace(
    /\{\s*\n([\s\S]*?)\n  \},/g,
    (match) => {
      const dateMatch = match.match(/dateISO:\s*"(\d{4}-\d{2}-\d{2})"/);
      if (!dateMatch) return match;
      const eventDate = new Date(dateMatch[1] + "T00:00:00");
      if (eventDate < now) {
        removed++;
        return ""; // remove this event block
      }
      return match;
    }
  );

  if (removed > 0) {
    // Clean up any double-blank lines left by removals
    const cleaned = patched.replace(/\n{3,}/g, "\n\n");
    fs.writeFileSync(filePath, cleaned, "utf8");
    log(`Pruned ${removed} past event(s) from data/events.ts`);
  } else {
    log("No past events to prune.");
  }
}

// ─── RSS feed parser (minimal, no external deps) ──────────────────────────────

interface FeedItem {
  title: string;
  link: string;
  description: string;
  pubDate?: string;
  category?: string;
}

function parseRSS(xml: string): FeedItem[] {
  const items: FeedItem[] = [];
  const itemBlocks = xml.match(/<item>([\s\S]*?)<\/item>/g) || [];

  for (const block of itemBlocks) {
    const get = (tag: string) => {
      const m = block.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>|<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
      if (!m) return "";
      return (m[1] || m[2] || "").trim().replace(/<[^>]+>/g, "").trim();
    };
    items.push({
      title: get("title"),
      link: get("link"),
      description: get("description"),
      pubDate: get("pubDate"),
      category: get("category"),
    });
  }
  return items;
}

// ─── Fetch new resources ─────────────────────────────────────────────────────
// Feeds licensed under Creative Commons / open license — safe to link/summarize

const RESOURCE_FEEDS: Array<{
  url: string;
  org: string;
  defaultCategory: string;
  tags: string[];
  license: string;
}> = [
  {
    url: "https://www.ilga.org/feed/",
    org: "ILGA World",
    defaultCategory: "advocacy-rights",
    tags: ["ILGA", "Advocacy", "International"],
    license: "CC-BY",
  },
  {
    url: "https://www.unaids.org/en/rss.xml",
    org: "UNAIDS",
    defaultCategory: "hiv-services",
    tags: ["HIV", "UNAIDS", "Health"],
    license: "CC-BY-NC-SA",
  },
  {
    url: "https://www.hrw.org/rss/topic/lgbtq-rights",
    org: "Human Rights Watch",
    defaultCategory: "advocacy-rights",
    tags: ["Human Rights", "Advocacy", "HRW"],
    license: "Free to share with attribution",
  },
];

async function fetchNewResources() {
  const filePath = path.join(__dirname, "../data/resources.ts");
  const src = fs.readFileSync(filePath, "utf8");

  // Extract existing IDs/titles to avoid duplicates
  const existingIds = new Set((src.match(/id:\s*"([^"]+)"/g) || []).map((m) => m.replace(/id:\s*"/, "").replace(/"/, "")));
  const existingTitles = new Set((src.match(/title:\s*"([^"]+)"/g) || []).map((m) => m.replace(/title:\s*"/, "").replace(/"$/, "").toLowerCase()));

  let newEntries: string[] = [];

  for (const feed of RESOURCE_FEEDS) {
    log(`Fetching ${feed.org} RSS…`);
    try {
      const xml = await httpsGet(feed.url);
      const items = parseRSS(xml).slice(0, 5); // max 5 items per feed

      for (const item of items) {
        if (!item.title || !item.link) continue;
        if (existingTitles.has(item.title.toLowerCase())) continue;

        const id = `auto-${slug(item.title)}`;
        if (existingIds.has(id)) continue;

        // Sanitize: keep only first 280 chars of description
        const desc = (item.description || item.title).slice(0, 280).replace(/"/g, "'");

        const entry = [
          `  {`,
          `    id: "${id}",`,
          `    title: "${item.title.replace(/"/g, "'")}",`,
          `    org: "${feed.org}",`,
          `    category: "${feed.defaultCategory}",`,
          `    description: "${desc}",`,
          `    link: "${item.link}",`,
          `    tags: ${JSON.stringify(feed.tags)},`,
          `  },`,
        ].join("\n");

        newEntries.push(entry);
        existingIds.add(id);
        existingTitles.add(item.title.toLowerCase());
        log(`  + New resource: "${item.title.slice(0, 60)}"`);
      }
    } catch (err) {
      log(`  ! Failed to fetch ${feed.org}: ${(err as Error).message}`);
    }
  }

  if (newEntries.length > 0) {
    // Insert before closing `];` of ALL_RESOURCES
    const insertBefore = "\n];";
    const insertAt = src.lastIndexOf(insertBefore);
    if (insertAt === -1) {
      log("Could not find end of ALL_RESOURCES array — skipping resource update.");
      return;
    }
    const updated =
      src.slice(0, insertAt) +
      "\n\n  // ── Auto-fetched ──────────────────────────────────────────────────────────\n" +
      newEntries.join("\n") +
      insertBefore;
    fs.writeFileSync(filePath, updated, "utf8");
    log(`Added ${newEntries.length} new resource(s) to data/resources.ts`);
  } else {
    log("No new resources to add.");
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  log("=== EmpowerQueer Hub Content Refresh ===");
  log(`Date: ${new Date().toISOString()}`);

  log("\n[1/2] Pruning past events…");
  await prunePastEvents();

  log("\n[2/2] Fetching new resources from open feeds…");
  await fetchNewResources();

  log("\nDone.");
}

main().catch((err) => {
  console.error("[fetch-content] FATAL:", err);
  process.exit(1);
});
