"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { X, ZoomIn } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  tags: string[];
}

const FILTER_TAGS = ["All", "Community", "Events", "Pride", "Advocacy", "Training"];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function GalleryPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  useEffect(() => {
    fetch("/api/gallery")
      .then((r) => r.json())
      .then((d) => { setImages(d.images ?? []); setLoading(false); });
  }, []);

  const filtered = activeTag === "All" ? images : images.filter((img) => img.tags.includes(activeTag));

  // Distribute images into columns evenly (round-robin) so all columns are filled
  const numCols = 4;
  const cols = Array.from({ length: numCols }, (_, c) =>
    filtered.filter((_, idx) => idx % numCols === c)
  );

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[600px] flex flex-col justify-end border-b border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/gallery/EmpQueer-Image-120.jpg"
          alt="Gallery"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A2E]/90 via-[#1A0A2E]/55 to-[#1A0A2E]/25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Photo Gallery</span>
          <h1 className="font-serif text-5xl font-bold text-white mb-4">Our Community in Photos</h1>
          <p className="text-white/75 text-xl leading-relaxed max-w-2xl">
            Moments of pride, advocacy, community, and love — captured and shared.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[72px] z-20 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[#3A3C51] text-sm font-medium mr-2 shrink-0">Filter:</span>
            {FILTER_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                  activeTag === tag
                    ? "bg-[#7C3AED] text-white border-[#7C3AED]"
                    : "bg-white text-[#474747] border-gray-200 hover:border-[#7C3AED] hover:text-[#7C3AED]"
                }`}
              >
                {tag}
                {tag === "All" ? ` (${images.length})` : ` (${images.filter((i) => i.tags.includes(tag)).length})`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex justify-center py-24"><div className="w-8 h-8 border-2 border-[#7C3AED] border-t-transparent rounded-full animate-spin" /></div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-24 text-[#474747]">No photos in this category yet.</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {cols.map((col, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-3">
                  {col.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setLightbox(img)}
                      className="group relative w-full block overflow-hidden rounded-xl bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#1A0A2E]/0 group-hover:bg-[#1A0A2E]/40 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <span className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm text-[#3A3C51] text-[10px] font-semibold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        {img.tags[0]}
                      </span>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div
            className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain"
            />
            <p className="text-white/70 text-sm mt-4 text-center">{lightbox.alt}</p>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
