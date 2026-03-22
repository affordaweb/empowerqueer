"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { X, ZoomIn } from "lucide-react";

/* ─── Image data ─────────────────────────────────────────────────────────── */

const images = [
  { src: "/images/gallery/EmpQueer-Image-220.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/EmpQueer-Image-221.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/EmpQueer-Image-217.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/EmpQueer-Image-216.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/EmpQueer-Image-210.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/EmpQueer-Image-208.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/EmpQueer-Image-206.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/EmpQueer-Image-202.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/EmpQueer-Image-194.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/EmpQueer-Image-193.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/EmpQueer-Image-192.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/EmpQueer-Image-190.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/EmpQueer-Image-189.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/EmpQueer-Image-187.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/EmpQueer-Image-184.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/EmpQueer-Image-180.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/EmpQueer-Image-177.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/EmpQueer-Image-176.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/EmpQueer-Image-175.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/EmpQueer-Image-173.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/EmpQueer-Image-170.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/EmpQueer-Image-165.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"] },
  { src: "/images/gallery/EmpQueer-Image-164.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"] },
  { src: "/images/gallery/EmpQueer-Image-162.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"] },
  { src: "/images/gallery/EmpQueer-Image-160.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"] },
  { src: "/images/gallery/EmpQueer-Image-149.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"] },
  { src: "/images/gallery/EmpQueer-Image-148.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"] },
  { src: "/images/gallery/EmpQueer-Image-147.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"] },
  { src: "/images/gallery/EmpQueer-Image-146.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"] },
  { src: "/images/gallery/EmpQueer-Image-142.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"] },
  { src: "/images/gallery/EmpQueer-Image-141.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"] },
  { src: "/images/gallery/EmpQueer-Image-140.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"] },
  { src: "/images/gallery/EmpQueer-Image-139.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"] },
  { src: "/images/gallery/EmpQueer-Image-138.jpg", alt: "EmpowerQueer Community Moment", tags: ["Events"] },
  { src: "/images/gallery/EmpQueer-Image-136.jpg", alt: "EmpowerQueer Community Moment", tags: ["Advocacy"] },
  { src: "/images/gallery/EmpQueer-Image-135.jpg", alt: "EmpowerQueer Community Moment", tags: ["Advocacy"] },
  { src: "/images/gallery/EmpQueer-Image-134.jpg", alt: "EmpowerQueer Community Moment", tags: ["Advocacy"] },
  { src: "/images/gallery/EmpQueer-Image-133.jpg", alt: "EmpowerQueer Community Moment", tags: ["Advocacy"] },
  { src: "/images/gallery/EmpQueer-Image-132.jpg", alt: "EmpowerQueer Community Moment", tags: ["Advocacy"] },
  { src: "/images/gallery/EmpQueer-Image-130.jpg", alt: "EmpowerQueer Community Moment", tags: ["Advocacy"] },
  { src: "/images/gallery/EmpQueer-Image-120.jpg", alt: "EmpowerQueer Community Moment", tags: ["Pride"] },
  { src: "/images/gallery/EmpQueer-Image-118.jpg", alt: "Metro Manila Pride", tags: ["Pride"] },
  { src: "/images/gallery/EmpQueer-Image-117.jpg", alt: "EmpowerQueer Community Moment", tags: ["Pride"] },
  { src: "/images/gallery/EmpQueer-Image-116.jpg", alt: "EmpowerQueer Community Moment", tags: ["Pride"] },
  { src: "/images/gallery/EmpQueer-Image-115.jpg", alt: "EmpowerQueer Community Moment", tags: ["Pride"] },
  { src: "/images/gallery/EmpQueer-Image-113.jpg", alt: "EmpowerQueer Community Moment", tags: ["Pride"] },
  { src: "/images/gallery/EmpQueer-Image-109.jpg", alt: "EmpowerQueer Community Moment", tags: ["Pride"] },
  { src: "/images/gallery/EmpQueer-Image-102.jpg", alt: "EmpowerQueer Community Moment", tags: ["Training"] },
  { src: "/images/gallery/EmpQueer-Image-101.jpg", alt: "EmpowerQueer Community Moment", tags: ["Training"] },
  { src: "/images/gallery/DSC_0800.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/DSC_0735.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/DSC_0664.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/DSC_0639.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/DSC_0136.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/DSC_0101.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/DSC_0096.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/DSC_0028.jpg", alt: "EmpowerQueer Community Moment", tags: ["Community"] },
  { src: "/images/gallery/Batangas-Pride-Month-Celebration-2023.jpg", alt: "Batangas Pride Month Celebration 2023", tags: ["Pride"] },
  { src: "/images/gallery/Equality-Desk-by-Wagayway-Equality.jpg", alt: "Equality Desk by Wagayway Equality", tags: ["Advocacy"] },
  { src: "/images/gallery/Equality-Desk-Hero.jpg", alt: "Equality Desk", tags: ["Advocacy"] },
  { src: "/images/gallery/HIV-101-by-Wagayway-Equality.jpg", alt: "HIV 101 by Wagayway Equality", tags: ["Training"] },
  { src: "/images/gallery/HIV-and-Aids-Surveillance.jpg", alt: "HIV and AIDS Surveillance", tags: ["Training"] },
  { src: "/images/gallery/HUMAN-RIGHTS-101-by-Wagayway-Equality.jpg", alt: "Human Rights 101 by Wagayway Equality", tags: ["Training"] },
  { src: "/images/gallery/SOGIESC-101-by-Wagayway-Equality-Inc.jpg", alt: "SOGIESC 101 by Wagayway Equality Inc", tags: ["Training"] },
];

const FILTER_TAGS = ["All", "Community", "Events", "Pride", "Advocacy", "Training"];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function GalleryPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [lightbox, setLightbox] = useState<(typeof images)[0] | null>(null);

  const filtered = activeTag === "All" ? images : images.filter((img) => img.tags.includes(activeTag));

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
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {filtered.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(img)}
                className="group relative w-full break-inside-avoid block overflow-hidden rounded-xl bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
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
                {/* Tag pill */}
                <span className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm text-[#3A3C51] text-[10px] font-semibold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.tags[0]}
                </span>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-[#474747]">No photos in this category yet.</div>
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
