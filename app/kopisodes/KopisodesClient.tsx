"use client";

import { useState } from "react";
import { ChevronRight, Heart, Activity, Scale, Users, Mic, BookOpen, Star } from "lucide-react";

const CATEGORIES = [
  { id: "lgbtq-issues", label: "LGBTQ+ Issues", icon: Heart, color: "text-[#EC4899]", bg: "bg-[#FDF2F8]", border: "border-[#FBCFE8]" },
  { id: "hiv-aids", label: "HIV & AIDS", icon: Activity, color: "text-[#DC2626]", bg: "bg-[#FEF2F2]", border: "border-[#FECACA]" },
  { id: "advocacy-rights", label: "Advocacy & Rights", icon: Scale, color: "text-[#2563EB]", bg: "bg-[#EFF6FF]", border: "border-[#BFDBFE]" },
  { id: "support-resources", label: "Support Resources", icon: Users, color: "text-[#7C3AED]", bg: "bg-[#F5F0FF]", border: "border-[#E9D5FF]" },
  { id: "community-voices", label: "Community Voices", icon: Mic, color: "text-[#D97706]", bg: "bg-[#FFFBEB]", border: "border-[#FDE68A]" },
  { id: "youth-services", label: "Youth Services", icon: Star, color: "text-[#059669]", bg: "bg-[#F0FDF4]", border: "border-[#BBF7D0]" },
  { id: "education", label: "Education", icon: BookOpen, color: "text-[#0891B2]", bg: "bg-[#ECFEFF]", border: "border-[#A5F3FC]" },
];

interface Episode {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  categoryIds: string[];
  date: string;
  img: string | null;
}

export default function KopisodesClient({ episodes }: { episodes: Episode[] }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const visible = activeCategory
    ? episodes.filter(ep => ep.categoryIds.includes(activeCategory))
    : episodes;

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24">
              <h3 className="font-semibold text-[#3A3C51] mb-4 uppercase tracking-wider text-sm">Categories</h3>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setActiveCategory(null)}
                    className={`w-full text-left text-sm px-3 py-2 rounded-xl transition-all flex items-center gap-2 ${!activeCategory ? "bg-[#7C3AED] text-white font-semibold" : "text-[#474747] hover:bg-[#F5F0FF] hover:text-[#7C3AED]"}`}
                  >
                    All Episodes
                    <span className={`ml-auto text-xs rounded-full px-2 py-0.5 ${!activeCategory ? "bg-white/20 text-white" : "bg-gray-100 text-gray-400"}`}>
                      {episodes.length}
                    </span>
                  </button>
                </li>
                {CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const count = episodes.filter(ep => ep.categoryIds.includes(cat.id)).length;
                  const isActive = activeCategory === cat.id;
                  if (count === 0) return null;
                  return (
                    <li key={cat.id}>
                      <button
                        onClick={() => setActiveCategory(isActive ? null : cat.id)}
                        className={`w-full text-left text-sm px-3 py-2 rounded-xl transition-all flex items-center gap-2 ${isActive ? `${cat.bg} ${cat.border} border ${cat.color} font-semibold` : "text-[#474747] hover:bg-[#F5F0FF] hover:text-[#7C3AED]"}`}
                      >
                        <Icon size={14} className={isActive ? cat.color : "text-gray-400"} />
                        {cat.label}
                        <span className={`ml-auto text-xs rounded-full px-2 py-0.5 ${isActive ? `${cat.bg} ${cat.color}` : "bg-gray-100 text-gray-400"}`}>
                          {count}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Episodes */}
          <div className="lg:col-span-3">
            {visible.length === 0 ? (
              <div className="text-center py-16 text-gray-400">No episodes in this category yet.</div>
            ) : (
              <div className="space-y-6">
                {visible.map((ep) => (
                  <div
                    key={ep.id}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#A9D6B6] hover:shadow-sm transition-all group"
                  >
                    <div className="flex flex-col sm:flex-row">
                      {ep.img && (
                        <div className="sm:w-48 h-40 sm:h-auto shrink-0 overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={ep.img} alt={ep.title} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="flex-1 p-6">
                        <div className="flex flex-wrap gap-2 mb-2">
                          {ep.tags.map((tag) => (
                            <span key={tag} className="bg-[#A9D6B6]/30 border border-[#A9D6B6] text-[#3A3C51] text-xs px-3 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                          <span className="text-[#474747] text-xs ml-auto">{ep.date}</span>
                        </div>
                        <h3 className="font-serif text-lg font-bold text-[#3A3C51] mb-2">{ep.title}</h3>
                        <p className="text-[#474747] text-sm leading-relaxed mb-3">{ep.desc}</p>
                        <a href={`/kopisodes/${ep.id}`} className="inline-flex items-center gap-1.5 text-[#3A3C51] text-sm font-semibold hover:gap-2.5 transition-all">
                          Read More <ChevronRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
