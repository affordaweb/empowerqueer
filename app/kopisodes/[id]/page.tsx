"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ChevronLeft, Heart, Activity, Scale, Users, Mic, BookOpen, Star, Calendar, Tag } from "lucide-react";

const CATEGORY_MAP: Record<string, { label: string; icon: React.ElementType; color: string }> = {
  "lgbtq-issues":      { label: "LGBTQ+ Issues",       icon: Heart,     color: "text-[#EC4899]" },
  "hiv-aids":          { label: "HIV & AIDS",           icon: Activity,  color: "text-[#DC2626]" },
  "advocacy-rights":   { label: "Advocacy & Rights",    icon: Scale,     color: "text-[#2563EB]" },
  "support-resources": { label: "Support Resources",    icon: Users,     color: "text-[#7C3AED]" },
  "community-voices":  { label: "Community Voices",     icon: Mic,       color: "text-[#D97706]" },
  "youth-services":    { label: "Youth Services",       icon: Star,      color: "text-[#059669]" },
  "education":         { label: "Education",            icon: BookOpen,  color: "text-[#0891B2]" },
};

interface Episode {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  categoryIds: string[];
  date: string;
  img: string | null;
  published: boolean;
}

export default function KopisodeArticlePage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [related, setRelated] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`/api/kopisodes/${id}`)
      .then((r) => { if (!r.ok) { setNotFound(true); setLoading(false); return null; } return r.json(); })
      .then((d) => { if (!d) return; setEpisode(d.kopisode); setLoading(false); })
      .catch(() => { setNotFound(true); setLoading(false); });
  }, [id]);

  useEffect(() => {
    if (!episode) return;
    fetch("/api/kopisodes")
      .then((r) => r.json())
      .then((d) => {
        const others = (d.kopisodes ?? []).filter((ep: Episode) => ep.id !== episode.id);
        const sorted = others.sort((a: Episode, b: Episode) => {
          const aMatch = a.categoryIds.some((c) => episode.categoryIds.includes(c)) ? 1 : 0;
          const bMatch = b.categoryIds.some((c) => episode.categoryIds.includes(c)) ? 1 : 0;
          return bMatch - aMatch;
        });
        setRelated(sorted.slice(0, 3));
      });
  }, [episode]);

  if (loading) {
    return (
      <main className="bg-white min-h-screen">
        <Navbar />
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="w-8 h-8 border-2 border-[#7C3AED] border-t-transparent rounded-full animate-spin" />
        </div>
        <Footer />
      </main>
    );
  }

  if (notFound || !episode) {
    return (
      <main className="bg-white min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <p className="text-gray-400 text-lg mb-6">Episode not found.</p>
          <button onClick={() => router.push("/kopisodes")} className="inline-flex items-center gap-2 text-[#7C3AED] font-semibold hover:underline">
            <ChevronLeft size={16} /> Back to Kopisodes
          </button>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Article — two-column layout */}
      <section className="py-[100px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back link */}
          <button
            onClick={() => router.push("/kopisodes")}
            className="inline-flex items-center gap-1.5 text-[#7C3AED] text-sm font-semibold hover:underline mb-10"
          >
            <ChevronLeft size={15} /> Back to Kopisodes
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left — sticky featured image */}
            {episode.img && (
              <div className="lg:sticky lg:top-28">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={episode.img}
                  alt={episode.title}
                  className="w-full rounded-2xl object-cover shadow-md"
                />
              </div>
            )}

            {/* Right — article content */}
            <article>
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 text-[#474747] text-sm">
                  <Calendar size={14} className="text-gray-400" /> {episode.date}
                </span>
                {episode.categoryIds.map((cid) => {
                  const cat = CATEGORY_MAP[cid];
                  if (!cat) return null;
                  const Icon = cat.icon;
                  return (
                    <span key={cid} className={`inline-flex items-center gap-1.5 text-xs font-semibold ${cat.color}`}>
                      <Icon size={13} /> {cat.label}
                    </span>
                  );
                })}
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#3A3C51] mb-6 leading-snug">
                {episode.title}
              </h1>

              {/* Body */}
              <p className="text-[#474747] text-lg leading-relaxed mb-10">{episode.desc}</p>

              {/* Tags */}
              {episode.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
                  <Tag size={14} className="text-gray-400 mt-0.5" />
                  {episode.tags.map((tag) => (
                    <span key={tag} className="bg-[#A9D6B6]/30 border border-[#A9D6B6] text-[#3A3C51] text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>

          </div>
        </div>
      </section>

      {/* More from Kopisodes */}
      {related.length > 0 && (
        <section className="bg-[#F9F7FF] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-8">More from Kopisodes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((ep) => (
                <button
                  key={ep.id}
                  onClick={() => router.push(`/kopisodes/${ep.id}`)}
                  className="text-left bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#7C3AED]/40 hover:shadow-sm transition-all"
                >
                  {ep.img && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={ep.img} alt={ep.title} className="w-full h-44 object-cover" />
                  )}
                  <div className="p-5">
                    <p className="text-[#474747] text-xs mb-2">{ep.date}</p>
                    <p className="font-serif font-bold text-[#3A3C51] leading-snug mb-2">{ep.title}</p>
                    <p className="text-[#474747] text-xs line-clamp-2">{ep.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
