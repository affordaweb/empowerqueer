"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Heart, MessageCircle, Share2, X, Mic2, MoreHorizontal, Pencil } from "lucide-react";

/* ─── Types ──────────────────────────────────────────────────────────────── */

interface Story {
  id: string;
  name: string;
  avatar: string;
  date: string;
  title: string;
  content: string;
  image?: string;
  likes: number;
  tags: string[];
}

/* ─── Approved stories ───────────────────────────────────────────────────── */

const stories: Story[] = [
  {
    id: "1",
    name: "Mariz A.",
    avatar: "MA",
    date: "March 18, 2026",
    title: "Finding My Voice at 27",
    content: `I spent most of my twenties convincing myself that something was wrong with me. Growing up in a conservative household in Batangas, being queer wasn't just invisible — it was unthinkable. Every Sunday felt like a silent verdict.\n\nWhen I first walked into Espasyo, I wasn't sure what I was looking for. Maybe proof that people like me existed. Maybe just a room where I didn't have to shrink myself.\n\nWhat I found was a community. People who laughed loudly, who held each other's stories gently, who never once made me feel like I needed to explain my existence.\n\nI am still unlearning the shame. But for the first time in 27 years, I am doing it out loud. And that makes all the difference.`,
    image: "/images/gallery/EmpQueer-Image-120.jpg",
    likes: 84,
    tags: ["Coming Out", "Community", "Healing"],
  },
  {
    id: "2",
    name: "Anonymous",
    avatar: "AN",
    date: "March 10, 2026",
    title: "The Day I Stopped Apologizing",
    content: `My mom used to say, "Baka naman magbago pa yan." Maybe it will change. I heard that sentence so many times that I started to believe that who I was — was a phase to be waited out.\n\nI am 32 now. Nothing has changed, except this: I stopped waiting for her approval to live my life.\n\nIt wasn't one dramatic moment. It was slow — like learning to breathe again after years of holding it in. A support group here. An honest conversation there. One morning I woke up and realized I hadn't apologized for existing in three whole weeks.\n\nI don't know if my family will ever fully understand. But I understand myself now. And that is enough to begin.`,
    image: "/images/gallery/EmpQueer-Image-194.jpg",
    likes: 112,
    tags: ["Family", "Self-Acceptance", "Pride"],
  },
  {
    id: "3",
    name: "Kael R.",
    avatar: "KR",
    date: "February 28, 2026",
    title: "Trans and Proud in Batangas",
    content: `People ask me when I knew. I say: always. I just didn't have the language for it yet.\n\nTransitioning in a small city is not easy. Every government office, every form, every stranger's eyes — it can feel like the world was designed without you in mind. And for a long time, it was.\n\nBut Wagayway gave me something I didn't know I was allowed to have: a community that calls me by my name. That sees me not as a problem to solve but as a person worth celebrating.\n\nI've cried at every Pride Month since 2022. Not from sadness. From the overwhelming, chest-filling feeling of being seen by hundreds of people who know exactly what it cost you to show up.`,
    image: "/images/gallery/EmpQueer-Image-180.jpg",
    likes: 156,
    tags: ["Trans", "Pride", "Identity"],
  },
  {
    id: "4",
    name: "Diane L.",
    avatar: "DL",
    date: "February 14, 2026",
    title: "Love, Eventually",
    content: `I used to think love was something I had to earn by being less of who I am.\n\nI dated people who wanted me quieter, smaller, more palatable. And I tried. I really tried. I cut my hair a certain way. I laughed at the right times. I never held my girlfriend's hand in public.\n\nThen I met someone at a community event who looked at me like I wasn't too much. Like I was just right.\n\nWe've been together two years now. We hold hands everywhere. And every time I do, I think of the version of me who believed she didn't deserve this.\n\nShe did. She always did.`,
    image: "/images/gallery/EmpQueer-Image-165.jpg",
    likes: 98,
    tags: ["Love", "Relationships", "Queer Joy"],
  },
  {
    id: "5",
    name: "Paolo M.",
    avatar: "PM",
    date: "January 30, 2026",
    title: "Mental Health Saved My Life",
    content: `There were nights I didn't think I'd make it to morning. Not because life was simply hard — but because being queer in a space that constantly told me I was wrong wore me down to nothing.\n\nA friend referred me to a counselor through the Hub's directory. I almost didn't go. I'm Filipino — we don't talk about these things.\n\nBut I went. And I kept going. Slowly, the weight started lifting. I started sleeping. I started laughing again.\n\nI'm sharing this because someone out there might be where I was. And I want you to know: help exists. You are allowed to reach for it. You are allowed to stay.`,
    image: "/images/gallery/EmpQueer-Image-206.jpg",
    likes: 203,
    tags: ["Mental Health", "Healing", "Survival"],
  },
  {
    id: "6",
    name: "Sam G.",
    avatar: "SG",
    date: "January 15, 2026",
    title: "My First Pride March",
    content: `I watched Pride marches on YouTube for years before I ever attended one. It looked like another world — one I wanted desperately but couldn't quite believe was real or reachable.\n\nIn 2024, I finally went. My heart was pounding the entire jeepney ride there. I almost turned back twice.\n\nThen I saw the crowd. Rainbow flags. Chants. Elders and children and everyone in between. People crying, people dancing, people holding signs for the ones who couldn't be there.\n\nI stood in the middle of it and thought: this is real. This is mine. We did this.\n\nI've been to every march since. And I will keep going — for the younger version of me who watched on a screen and wondered if there was a place for her.`,
    image: "/images/gallery/EmpQueer-Image-118.jpg",
    likes: 175,
    tags: ["Pride", "Community", "First Times"],
  },
];

const AVATAR_PALETTE = ["bg-[#7C3AED]", "bg-[#EC4899]", "bg-[#059669]", "bg-[#D97706]", "bg-[#0EA5E9]", "bg-[#6366F1]"];

const avatarColors: Record<string, string> = {
  "1": "bg-[#7C3AED]",
  "2": "bg-[#EC4899]",
  "3": "bg-[#059669]",
  "4": "bg-[#D97706]",
  "5": "bg-[#0EA5E9]",
  "6": "bg-[#7C3AED]",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapSubmissionToStory(sub: any, index: number): Story {
  const d = sub.data ?? {};
  const name = d.name || "Anonymous";
  const initials = name === "Anonymous" ? "AN" : name.split(" ").map((w: string) => w[0]).join("").slice(0, 2).toUpperCase();
  const date = sub.publishedAt ? new Date(sub.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "";
  return {
    id: sub.id,
    name,
    avatar: initials,
    date,
    title: d.title || "Untitled",
    content: d.content || "",
    image: d.image || undefined,
    likes: 0,
    tags: Array.isArray(d.tags) ? d.tags : [],
    _color: AVATAR_PALETTE[index % AVATAR_PALETTE.length],
  } as Story & { _color: string };
}

/* ─── Read Modal ─────────────────────────────────────────────────────────── */

function StoryReadModal({ story, onClose }: { story: Story; onClose: () => void }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm" onClick={onClose}>
      <div
        className="relative w-full max-w-5xl max-h-[92vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-20 w-9 h-9 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors" aria-label="Close">
          <X size={18} />
        </button>

        {/* Left — image */}
        <div className="md:w-[45%] shrink-0 bg-[#1A0A2E] flex items-center justify-center min-h-[260px]">
          {story.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
          ) : (
            <div className="flex flex-col items-center gap-3 p-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7C3AED] to-[#EC4899] rounded-full flex items-center justify-center">
                <Mic2 size={28} className="text-white" />
              </div>
              <p className="text-white/40 text-sm">No featured image</p>
            </div>
          )}
        </div>

        {/* Right — content */}
        <div className="flex-1 overflow-y-auto flex flex-col">
          <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-gray-100">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 ${avatarColors[story.id] ?? "bg-[#7C3AED]"}`}>
              {story.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[#3A3C51] text-sm">{story.name}</p>
              <p className="text-gray-400 text-xs">{story.date} · Approved Story</p>
            </div>
            <span className="bg-[#F0FDF4] border border-[#BBF7D0] text-[#059669] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide shrink-0">✓ Approved</span>
          </div>

          <div className="flex-1 px-6 py-5">
            <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-4 leading-snug">{story.title}</h2>
            <div className="space-y-3">
              {story.content.split("\n\n").map((para, i) => (
                <p key={i} className="text-[#474747] text-sm leading-relaxed">{para}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5 mt-5">
              {story.tags.map((tag) => (
                <span key={tag} className="bg-[#F5F0FF] border border-[#DDD6FE] text-[#7C3AED] text-xs px-3 py-1 rounded-full">#{tag}</span>
              ))}
            </div>
          </div>

          <div className="px-6 py-4 border-t border-gray-100 flex items-center gap-5">
            <button onClick={() => setLiked((l) => !l)} className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${liked ? "text-[#EC4899]" : "text-gray-400 hover:text-[#EC4899]"}`}>
              <Heart size={17} className={liked ? "fill-[#EC4899]" : ""} />
              {story.likes + (liked ? 1 : 0)}
            </button>
            <button className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-[#7C3AED] transition-colors">
              <Share2 size={17} /> Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Feed Card ──────────────────────────────────────────────────────────── */

function StoryCard({ story, onOpen }: { story: Story; onOpen: (s: Story) => void }) {
  const [liked, setLiked] = useState(false);
  const preview = story.content.slice(0, 160).trim() + (story.content.length > 160 ? "…" : "");

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {/* Author row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 ${avatarColors[story.id] ?? "bg-[#7C3AED]"}`}>
            {story.avatar}
          </div>
          <div>
            <p className="font-semibold text-[#3A3C51] text-sm leading-tight">{story.name}</p>
            <p className="text-gray-400 text-xs">{story.date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-[#F0FDF4] border border-[#BBF7D0] text-[#059669] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">✓ Approved</span>
          <button className="text-gray-300 hover:text-gray-500 transition-colors"><MoreHorizontal size={18} /></button>
        </div>
      </div>

      {/* Text */}
      <div className="px-5 pb-3">
        <h3 className="font-serif text-lg font-bold text-[#3A3C51] mb-1.5 leading-snug">{story.title}</h3>
        <p className="text-[#474747] text-sm leading-relaxed">{preview}</p>
        <button onClick={() => onOpen(story)} className="text-[#7C3AED] text-sm font-semibold mt-1 hover:underline">Read more</button>
      </div>

      {/* Featured image */}
      {story.image && (
        <button onClick={() => onOpen(story)} className="w-full block mt-1 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={story.image} alt={story.title} className="w-full h-52 object-cover hover:scale-[1.02] transition-transform duration-500" />
        </button>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 px-5 pt-3 pb-2">
        {story.tags.map((tag) => (
          <span key={tag} className="bg-[#F5F0FF] text-[#7C3AED] text-[11px] px-2.5 py-0.5 rounded-full">#{tag}</span>
        ))}
      </div>

      {/* Action bar */}
      <div className="border-t border-gray-100 flex items-center divide-x divide-gray-100">
        <button onClick={() => setLiked((l) => !l)} className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-sm font-medium transition-colors ${liked ? "text-[#EC4899]" : "text-gray-400 hover:text-[#EC4899] hover:bg-pink-50"}`}>
          <Heart size={16} className={liked ? "fill-[#EC4899]" : ""} />
          {story.likes + (liked ? 1 : 0)}
        </button>
        <button onClick={() => onOpen(story)} className="flex-1 flex items-center justify-center gap-1.5 py-3 text-sm font-medium text-gray-400 hover:text-[#7C3AED] hover:bg-purple-50 transition-colors">
          <MessageCircle size={16} /> Read
        </button>
        <button className="flex-1 flex items-center justify-center gap-1.5 py-3 text-sm font-medium text-gray-400 hover:text-[#059669] hover:bg-green-50 transition-colors">
          <Share2 size={16} /> Share
        </button>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function VoicesPage() {
  const [active, setActive] = useState<Story | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [allStories, setAllStories] = useState<Story[]>(stories);

  useEffect(() => {
    fetch("/api/public/submissions?type=STORY")
      .then((r) => r.ok ? r.json() : { submissions: [] })
      .then((d) => {
        const dbStories = (d.submissions ?? []).map(mapSubmissionToStory);
        if (dbStories.length > 0) setAllStories((prev) => [...prev, ...dbStories]);
      })
      .catch(() => {});
  }, []);

  const allTags = Array.from(new Set(allStories.flatMap((s) => s.tags)));
  const filtered = activeTag ? allStories.filter((s) => s.tags.includes(activeTag)) : allStories;

  return (
    <main className="bg-[#F3F3F3] min-h-screen">
      <Navbar />

      {active && <StoryReadModal story={active} onClose={() => setActive(null)} />}

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[600px] flex flex-col justify-end border-b border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.pexels.com/photos/1044990/pexels-photo-1044990.jpeg" alt="Voices Among Us" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A2E]/90 via-[#1A0A2E]/55 to-[#1A0A2E]/25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Community Stories</span>
          <h1 className="font-serif text-5xl font-bold text-white mb-4">Voices Among Us</h1>
          <p className="text-white/75 text-xl leading-relaxed max-w-2xl">Share your story. Speak your truth. Your voice matters here. Browse <a href="/kopisodes" className="underline hover:text-white transition-colors">Kopisodes</a> for real conversations from the community.</p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 items-start">

            {/* ── Left sticky panel ── */}
            <div className="lg:sticky lg:top-28 space-y-5">

              {/* Submit CTA card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F0520] via-[#1A0A2E] to-[#1E0D38] p-7">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#EC4899]/20 rounded-full blur-[60px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#7C3AED]/25 rounded-full blur-[50px] pointer-events-none" />
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#7C3AED] to-[#EC4899] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Mic2 size={22} className="text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2 leading-tight">Have a story to share?</h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-5">
                    Your experience can inspire someone who needs it. You can remain anonymous. All submissions are reviewed with care. Find <a href="/resources" className="underline hover:text-white/90 transition-colors">support resources</a> or explore <a href="/events" className="underline hover:text-white/90 transition-colors">community events</a> while you&rsquo;re here.
                  </p>
                  <button
                    data-story-trigger
                    onClick={() => {
                      const btn = document.querySelector<HTMLButtonElement>("[data-footer-story-btn]");
                      btn?.click();
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity text-sm"
                  >
                    <Pencil size={15} />
                    Share Your Story
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h4 className="font-semibold text-[#3A3C51] text-sm mb-4 uppercase tracking-wider">Community Stats</h4>
                <div className="space-y-3">
                  {[
                    { label: "Stories Published", value: allStories.length.toString() },
                    { label: "Total Likes", value: allStories.reduce((a, s) => a + s.likes, 0).toLocaleString() },
                    { label: "Unique Tags", value: allTags.length.toString() },
                    { label: "Voices Heard", value: "Growing" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between">
                      <span className="text-[#474747] text-sm">{stat.label}</span>
                      <span className="font-bold text-[#3A3C51] text-sm">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag filter */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h4 className="font-semibold text-[#3A3C51] text-sm mb-4 uppercase tracking-wider">Browse by Tag</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveTag(null)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${!activeTag ? "bg-[#7C3AED] text-white border-[#7C3AED]" : "bg-white text-[#474747] border-gray-200 hover:border-[#7C3AED] hover:text-[#7C3AED]"}`}
                  >
                    All
                  </button>
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${activeTag === tag ? "bg-[#7C3AED] text-white border-[#7C3AED]" : "bg-[#F5F0FF] text-[#7C3AED] border-[#DDD6FE] hover:bg-[#7C3AED] hover:text-white hover:border-[#7C3AED]"}`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guidelines */}
              <div className="bg-[#FDF2F8] border border-[#FBCFE8] rounded-2xl p-6">
                <h4 className="font-semibold text-[#EC4899] text-sm mb-3">Submission Guidelines</h4>
                <ul className="space-y-2">
                  {["Be honest — your truth is enough.", "You may remain fully anonymous.", "Stories are reviewed within 3–5 days.", "Respectful, affirming content only."].map((g) => (
                    <li key={g} className="flex items-start gap-2 text-[#474747] text-xs leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] mt-1.5 shrink-0" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Right feed ── */}
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-[#7C3AED] font-semibold tracking-widest uppercase text-xs mb-0.5">Community Feed</p>
                  <h2 className="font-serif text-2xl font-bold text-[#3A3C51]">
                    {activeTag ? `#${activeTag}` : "Approved Stories"}
                  </h2>
                </div>
                <span className="bg-white border border-gray-200 text-[#474747] text-xs px-3 py-1.5 rounded-full shadow-sm">
                  {filtered.length} {filtered.length === 1 ? "story" : "stories"}
                </span>
              </div>

              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {filtered.map((story) => (
                    <StoryCard key={story.id} story={story} onOpen={setActive} />
                  ))}
                </div>
              ) : (
                /* Empty state */
                <div className="bg-white border border-gray-100 rounded-2xl p-14 text-center shadow-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#7C3AED]/10 to-[#EC4899]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Mic2 size={28} className="text-[#7C3AED]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#3A3C51] mb-2">No stories yet</h3>
                  <p className="text-[#474747] text-sm leading-relaxed max-w-xs mx-auto mb-6">
                    Be the first to share your voice. Your story could be the one that someone needs to read today.
                  </p>
                  <button
                    onClick={() => {
                      const btn = document.querySelector<HTMLButtonElement>("[data-footer-story-btn]");
                      btn?.click();
                    }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-bold px-7 py-3 rounded-xl hover:opacity-90 transition-opacity text-sm"
                  >
                    <Pencil size={15} />
                    Submit the First Story
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
