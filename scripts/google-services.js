require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') });
const { google } = require('googleapis');
const path = require('path');

const KEY_PATH = process.env.GOOGLE_SERVICE_ACCOUNT_KEY ||
  path.join(__dirname, '..', 'service-account-key.json');

const SITES = {
  'empowerqueer': {
    domain: 'https://www.empowerqueerhub.com',
    ga4PropertyId: null,
  },
};

async function getAuthClient() {
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_PATH,
    scopes: [
      'https://www.googleapis.com/auth/webmasters',
      'https://www.googleapis.com/auth/webmasters.readonly',
      'https://www.googleapis.com/auth/analytics.readonly',
      'https://www.googleapis.com/auth/indexing',
      'https://www.googleapis.com/auth/cloud-platform',
    ],
  });
  return await auth.getClient();
}

async function getSearchConsoleData(auth, siteUrl) {
  try {
    const webmasters = google.webmasters({ version: 'v3', auth });
    const res = await webmasters.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate: getDaysAgo(28),
        endDate: getDaysAgo(0),
        dimensions: ['query'],
        rowLimit: 10,
      },
    });
    return res.data.rows || [];
  } catch (e) {
    return { error: e.message };
  }
}

async function getPageSpeedData(siteUrl) {
  const apiKey = process.env.PAGESPEED_API_KEY;
  if (!apiKey) return { error: 'PAGESPEED_API_KEY not set in .env.local or environment' };
  try {
    const apiUrl = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed' +
      `?url=${encodeURIComponent(siteUrl)}` +
      '&category=PERFORMANCE&category=ACCESSIBILITY&category=SEO&category=BEST_PRACTICES' +
      `&key=${apiKey}`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    if (data.error) return { error: data.error.message || JSON.stringify(data.error) };
    const categories = data.lighthouseResult?.categories || {};
    return {
      performance: categories.performance?.score != null ? Math.round(categories.performance.score * 100) : null,
      accessibility: categories.accessibility?.score != null ? Math.round(categories.accessibility.score * 100) : null,
      seo: categories.seo?.score != null ? Math.round(categories.seo.score * 100) : null,
      bestPractices: categories['best-practices']?.score != null ? Math.round(categories['best-practices'].score * 100) : null,
    };
  } catch (e) {
    return { error: e.message };
  }
}

async function submitUrlForIndexing(auth, url) {
  try {
    const indexing = google.indexing({ version: 'v3', auth });
    const res = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        notificationType: 'URL_UPDATED',
      },
    });
    return res.data;
  } catch (e) {
    return { error: e.message };
  }
}

async function inspectUrl(auth, siteUrl, urlToInspect) {
  try {
    const token = await auth.getAccessToken();
    const res = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        siteUrl: siteUrl,
        inspectionUrl: urlToInspect,
        languageCode: 'en-US',
      }),
    });
    const data = await res.json();
    if (data.error) return { error: data.error.message };
    return data.inspectionResult;
  } catch (e) {
    return { error: e.message };
  }
}

async function submitSitemap(auth, siteUrl, sitemapUrl) {
  try {
    const webmasters = google.webmasters({ version: 'v3', auth });
    await webmasters.sitemaps.submit({
      siteUrl: siteUrl,
      feedpath: sitemapUrl,
    });
    return { success: true, sitemapUrl };
  } catch (e) {
    return { error: e.message };
  }
}

async function listSitemaps(auth, siteUrl) {
  try {
    const webmasters = google.webmasters({ version: 'v3', auth });
    const res = await webmasters.sitemaps.list({
      siteUrl: siteUrl,
    });
    return res.data.sitemap || [];
  } catch (e) {
    return { error: e.message };
  }
}

async function getQueryErrors(auth, siteUrl) {
  try {
    const webmasters = google.webmasters({ version: 'v3', auth });
    const res = await webmasters.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate: getDaysAgo(28),
        endDate: getDaysAgo(0),
        dimensions: ['query'],
        rowLimit: 20,
      },
    });
    const rows = res.data.rows || [];
    const errors = rows.filter(r => r.position > 10 && r.impressions > 50);
    return {
      totalQueries: rows.length,
      poorPerforming: errors.length,
      queries: errors.slice(0, 10).map(r => ({
        query: r.keys?.[0],
        clicks: r.clicks,
        impressions: r.impressions,
        position: r.position,
      })),
    };
  } catch (e) {
    return { error: e.message };
  }
}

async function getGeminiInsight(siteUrl) {
  try {
    const apiKey = process.env.GEMINI_API_KEY || process.env.PAGESPEED_API_KEY;
    if (!apiKey) return { error: 'No API key set for Gemini' };
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: `Give me 3 quick SEO improvement tips for the website ${siteUrl}. Keep it very brief, one sentence each.` }]
          }]
        }),
      }
    );
    const data = await res.json();
    if (data.error) return { error: data.error.message };
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from Gemini';
  } catch (e) {
    return { error: e.message };
  }
}

async function vercelDeploy(repoName) {
  const token = process.env.VERCEL_TOKEN;
  if (!token) return { error: 'VERCEL_TOKEN not set in .env.local' };
  try {
    const res = await fetch(`https://api.vercel.com/v1/deployments`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: repoName,
        gitSource: {
          type: 'github',
          repoId: repoName,
          ref: 'main',
        },
      }),
    });
    const data = await res.json();
    return data;
  } catch (e) {
    return { error: e.message };
  }
}

async function vercelListDeployments() {
  const token = process.env.VERCEL_TOKEN;
  if (!token) return { error: 'VERCEL_TOKEN not set' };
  try {
    const res = await fetch('https://api.vercel.com/v6/deployments?limit=20', {
      headers: { 'Authorization': `Bearer ${token}` },
    });
    const data = await res.json();
    return data.deployments || [];
  } catch (e) {
    return { error: e.message };
  }
}

async function vercelGetEnv(projectName) {
  const token = process.env.VERCEL_TOKEN;
  if (!token) return { error: 'VERCEL_TOKEN not set' };
  try {
    const res = await fetch(`https://api.vercel.com/v10/projects/${projectName}/env`, {
      headers: { 'Authorization': `Bearer ${token}` },
    });
    const data = await res.json();
    return data.envs || [];
  } catch (e) {
    return { error: e.message };
  }
}

function getDaysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().split('T')[0];
}

async function analyzeSite(siteKey) {
  const site = SITES[siteKey];
  if (!site) return { error: `Unknown site: ${siteKey}` };

  console.log(`\n========== ${siteKey} ==========`);
  console.log(`Domain: ${site.domain}`);

  const auth = await getAuthClient();

  const [gscData, speedData, geminiInsight] = await Promise.all([
    getSearchConsoleData(auth, site.domain),
    getPageSpeedData(site.displayUrl || site.domain),
    getGeminiInsight(site.displayUrl || site.domain),
  ]);

  const result = { site: siteKey, domain: site.domain };

  if (Array.isArray(gscData)) {
    result.searchConsole = {
      topQueries: gscData.slice(0, 5).map(r => ({
        query: r.keys?.[0],
        clicks: r.clicks,
        impressions: r.impressions,
        ctr: r.ctr,
        position: r.position,
      })),
    };
    console.log('Search Console: Top queries fetched');
  } else {
    result.searchConsole = gscData;
    console.log('Search Console error:', gscData.error || 'Site not verified in GSC');
  }

  if (speedData && !speedData.error) {
    result.pageSpeed = speedData;
    console.log('PageSpeed:', speedData);
  } else {
    result.pageSpeed = speedData;
    console.log('PageSpeed error:', speedData?.error);
  }

  if (geminiInsight && !geminiInsight.error) {
    result.geminiInsight = geminiInsight;
    console.log('Gemini insight:', geminiInsight);
  }

  return result;
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  const target = args[1];

  if (command === 'analyze') {
    if (target && target !== 'all') {
      await analyzeSite(target);
    } else {
      for (const key of Object.keys(SITES)) {
        await analyzeSite(key);
      }
    }
  } else if (command === 'index') {
    if (!target) {
      console.log('Usage: node google-services.js index <url>');
      return;
    }
    const auth = await getAuthClient();
    const result = await submitUrlForIndexing(auth, target);
    console.log('Indexing result:', result);
  } else if (command === 'sitemap') {
    const sub = args[1];
    const siteKey = args[2];
    const site = siteKey ? SITES[siteKey] : null;
    if (!site) {
      console.log('Usage:');
      console.log('  node scripts/google-services.js sitemap submit <siteKey>  - Submit sitemap to GSC');
      console.log('  node scripts/google-services.js sitemap list <siteKey>    - List submitted sitemaps');
      console.log(`Sites: ${Object.keys(SITES).join(', ')}`);
      return;
    }
    const auth = await getAuthClient();
    if (sub === 'submit') {
      const sitemapUrl = `${site.displayUrl || site.domain.replace('sc-domain:', 'https://')}/sitemap.xml`;
      const result = await submitSitemap(auth, site.domain, sitemapUrl);
      console.log('Sitemap submit result:', result);
    } else if (sub === 'list') {
      const result = await listSitemaps(auth, site.domain);
      console.log('Sitemaps:', JSON.stringify(result, null, 2));
    }
  } else if (command === 'inspect') {
    if (!target) {
      console.log('Usage: node scripts/google-services.js inspect <siteKey> <url>');
      return;
    }
    const urlToInspect = args[2];
    if (!urlToInspect) {
      console.log('Usage: node scripts/google-services.js inspect <siteKey> <full-url>');
      return;
    }
    const site = SITES[target];
    if (!site) {
      console.log(`Unknown site: ${target}. Sites: ${Object.keys(SITES).join(', ')}`);
      return;
    }
    const auth = await getAuthClient();
    const result = await inspectUrl(auth, site.domain, urlToInspect);
    console.log('URL Inspection:', JSON.stringify(result, null, 2));
  } else if (command === 'errors') {
    if (!target) {
      console.log('Usage: node scripts/google-services.js errors <siteKey>');
      console.log(`Sites: ${Object.keys(SITES).join(', ')}`);
      return;
    }
    const site = SITES[target];
    if (!site) {
      console.log(`Unknown site: ${target}`);
      return;
    }
    const auth = await getAuthClient();
    const result = await getQueryErrors(auth, site.domain);
    console.log('Query errors:', JSON.stringify(result, null, 2));
  } else if (command === 'vercel') {
    const sub = args[1];
    if (sub === 'deploy' && args[2]) {
      const result = await vercelDeploy(args[2]);
      console.log('Deploy result:', result);
    } else if (sub === 'list') {
      const result = await vercelListDeployments();
      console.log('Deployments:', JSON.stringify(result, null, 2));
    } else if (sub === 'env' && args[2]) {
      const result = await vercelGetEnv(args[2]);
      console.log('Env vars:', JSON.stringify(result, null, 2));
    } else {
      console.log(`
Usage:
  node scripts/google-services.js vercel list              - List deployments
  node scripts/google-services.js vercel deploy <project>  - Trigger deploy
  node scripts/google-services.js vercel env <project>     - List env vars
`);
    }
  } else {
    console.log(`
Usage:
  node scripts/google-services.js analyze [site|all]    - Get SEO/performance data
  node scripts/google-services.js index <url>            - Submit URL for indexing
  node scripts/google-services.js sitemap submit <key>   - Submit sitemap to GSC
  node scripts/google-services.js sitemap list <key>     - List submitted sitemaps
  node scripts/google-services.js inspect <key> <url>    - URL inspection
  node scripts/google-services.js errors <key>           - Poor performing queries
  node scripts/google-services.js vercel <sub> <...>     - Vercel management

Sites: ${Object.keys(SITES).join(', ')}
`);
  }
}


async function getAuthClient() {
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_PATH,
    scopes: [
      'https://www.googleapis.com/auth/webmasters',
      'https://www.googleapis.com/auth/webmasters.readonly',
      'https://www.googleapis.com/auth/analytics.readonly',
      'https://www.googleapis.com/auth/indexing',
      'https://www.googleapis.com/auth/cloud-platform',
    ],
  });
  return await auth.getClient();
}

async function getSearchConsoleData(auth, siteUrl) {
  try {
    const webmasters = google.webmasters({ version: 'v3', auth });
    const res = await webmasters.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate: getDaysAgo(28),
        endDate: getDaysAgo(0),
        dimensions: ['query'],
        rowLimit: 10,
      },
    });
    return res.data.rows || [];
  } catch (e) {
    return { error: e.message };
  }
}

async function getPageSpeedData(siteUrl) {
  const apiKey = process.env.PAGESPEED_API_KEY;
  if (!apiKey) return { error: 'PAGESPEED_API_KEY not set in .env.local or environment' };
  try {
    const apiUrl = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed' +
      `?url=${encodeURIComponent(siteUrl)}` +
      '&category=PERFORMANCE&category=ACCESSIBILITY&category=SEO&category=BEST_PRACTICES' +
      `&key=${apiKey}`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    if (data.error) return { error: data.error.message || JSON.stringify(data.error) };
    const categories = data.lighthouseResult?.categories || {};
    return {
      performance: categories.performance?.score != null ? Math.round(categories.performance.score * 100) : null,
      accessibility: categories.accessibility?.score != null ? Math.round(categories.accessibility.score * 100) : null,
      seo: categories.seo?.score != null ? Math.round(categories.seo.score * 100) : null,
      bestPractices: categories['best-practices']?.score != null ? Math.round(categories['best-practices'].score * 100) : null,
    };
  } catch (e) {
    return { error: e.message };
  }
}

async function submitUrlForIndexing(auth, url) {
  try {
    const indexing = google.indexing({ version: 'v3', auth });
    const res = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        notificationType: 'URL_UPDATED',
      },
    });
    return res.data;
  } catch (e) {
    return { error: e.message };
  }
}

async function inspectUrl(auth, siteUrl, urlToInspect) {
  try {
    const token = await auth.getAccessToken();
    const res = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        siteUrl: siteUrl,
        inspectionUrl: urlToInspect,
        languageCode: 'en-US',
      }),
    });
    const data = await res.json();
    if (data.error) return { error: data.error.message };
    return data.inspectionResult;
  } catch (e) {
    return { error: e.message };
  }
}

async function submitSitemap(auth, siteUrl, sitemapUrl) {
  try {
    const webmasters = google.webmasters({ version: 'v3', auth });
    await webmasters.sitemaps.submit({
      siteUrl: siteUrl,
      feedpath: sitemapUrl,
    });
    return { success: true, sitemapUrl };
  } catch (e) {
    return { error: e.message };
  }
}

async function listSitemaps(auth, siteUrl) {
  try {
    const webmasters = google.webmasters({ version: 'v3', auth });
    const res = await webmasters.sitemaps.list({
      siteUrl: siteUrl,
    });
    return res.data.sitemap || [];
  } catch (e) {
    return { error: e.message };
  }
}

async function getQueryErrors(auth, siteUrl) {
  try {
    const webmasters = google.webmasters({ version: 'v3', auth });
    const res = await webmasters.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate: getDaysAgo(28),
        endDate: getDaysAgo(0),
        dimensions: ['query'],
        rowLimit: 20,
      },
    });
    const rows = res.data.rows || [];
    const errors = rows.filter(r => r.position > 10 && r.impressions > 50);
    return {
      totalQueries: rows.length,
      poorPerforming: errors.length,
      queries: errors.slice(0, 10).map(r => ({
        query: r.keys?.[0],
        clicks: r.clicks,
        impressions: r.impressions,
        position: r.position,
      })),
    };
  } catch (e) {
    return { error: e.message };
  }
}

async function getGeminiInsight(siteUrl) {
  try {
    const apiKey = process.env.GEMINI_API_KEY || process.env.PAGESPEED_API_KEY;
    if (!apiKey) return { error: 'No API key set for Gemini' };
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: `Give me 3 quick SEO improvement tips for the website ${siteUrl}. Keep it very brief, one sentence each.` }]
          }]
        }),
      }
    );
    const data = await res.json();
    if (data.error) return { error: data.error.message };
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from Gemini';
  } catch (e) {
    return { error: e.message };
  }
}

function getDaysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().split('T')[0];
}

async function analyzeSite(siteKey) {
  const site = SITES[siteKey];
  if (!site) return { error: `Unknown site: ${siteKey}` };

  console.log(`\n========== ${siteKey} ==========`);
  console.log(`Domain: ${site.domain}`);

  const auth = await getAuthClient();

  const [gscData, speedData, geminiInsight] = await Promise.all([
    getSearchConsoleData(auth, site.domain),
    getPageSpeedData(site.displayUrl || site.domain),
    getGeminiInsight(site.displayUrl || site.domain),
  ]);

  const result = { site: siteKey, domain: site.domain };

  if (Array.isArray(gscData)) {
    result.searchConsole = {
      topQueries: gscData.slice(0, 5).map(r => ({
        query: r.keys?.[0],
        clicks: r.clicks,
        impressions: r.impressions,
        ctr: r.ctr,
        position: r.position,
      })),
    };
    console.log('Search Console: Top queries fetched');
  } else {
    result.searchConsole = gscData;
    console.log('Search Console error:', gscData.error || 'Site not verified in GSC');
  }

  if (speedData && !speedData.error) {
    result.pageSpeed = speedData;
    console.log('PageSpeed:', speedData);
  } else {
    result.pageSpeed = speedData;
    console.log('PageSpeed error:', speedData?.error);
  }

  if (geminiInsight && !geminiInsight.error) {
    result.geminiInsight = geminiInsight;
    console.log('Gemini insight:', geminiInsight);
  }

  return result;
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  const target = args[1];

  if (command === 'analyze') {
    if (target && target !== 'all') {
      await analyzeSite(target);
    } else {
      for (const key of Object.keys(SITES)) {
        await analyzeSite(key);
      }
    }
  } else if (command === 'index') {
    if (!target) {
      console.log('Usage: node google-services.js index <url>');
      return;
    }
    const auth = await getAuthClient();
    const result = await submitUrlForIndexing(auth, target);
    console.log('Indexing result:', result);
  } else if (command === 'sitemap') {
    const sub = args[1];
    const siteKey = args[2];
    const site = siteKey ? SITES[siteKey] : null;
    if (!site) {
      console.log('Usage:');
      console.log('  node scripts/google-services.js sitemap submit <siteKey>  - Submit sitemap to GSC');
      console.log('  node scripts/google-services.js sitemap list <siteKey>    - List submitted sitemaps');
      console.log(`Sites: ${Object.keys(SITES).join(', ')}`);
      return;
    }
    const auth = await getAuthClient();
    if (sub === 'submit') {
      const sitemapUrl = `${site.displayUrl || site.domain.replace('sc-domain:', 'https://')}/sitemap.xml`;
      const result = await submitSitemap(auth, site.domain, sitemapUrl);
      console.log('Sitemap submit result:', result);
    } else if (sub === 'list') {
      const result = await listSitemaps(auth, site.domain);
      console.log('Sitemaps:', JSON.stringify(result, null, 2));
    }
  } else if (command === 'inspect') {
    if (!target) {
      console.log('Usage: node scripts/google-services.js inspect <siteKey> <url>');
      return;
    }
    const urlToInspect = args[2];
    if (!urlToInspect) {
      console.log('Usage: node scripts/google-services.js inspect <siteKey> <full-url>');
      return;
    }
    const site = SITES[target];
    if (!site) {
      console.log(`Unknown site: ${target}. Sites: ${Object.keys(SITES).join(', ')}`);
      return;
    }
    const auth = await getAuthClient();
    const result = await inspectUrl(auth, site.domain, urlToInspect);
    console.log('URL Inspection:', JSON.stringify(result, null, 2));
  } else if (command === 'errors') {
    if (!target) {
      console.log('Usage: node scripts/google-services.js errors <siteKey>');
      console.log(`Sites: ${Object.keys(SITES).join(', ')}`);
      return;
    }
    const site = SITES[target];
    if (!site) {
      console.log(`Unknown site: ${target}`);
      return;
    }
    const auth = await getAuthClient();
    const result = await getQueryErrors(auth, site.domain);
    console.log('Query errors:', JSON.stringify(result, null, 2));
  } else {
    console.log(`
Usage:
  node scripts/google-services.js analyze [site|all]    - Get SEO/performance data
  node scripts/google-services.js index <url>            - Submit URL for indexing
  node scripts/google-services.js sitemap submit <key>   - Submit sitemap to GSC
  node scripts/google-services.js sitemap list <key>     - List submitted sitemaps
  node scripts/google-services.js inspect <key> <url>    - URL inspection
  node scripts/google-services.js errors <key>           - Poor performing queries

Sites: ${Object.keys(SITES).join(', ')}
`);
  }
}

main().catch(console.error);
