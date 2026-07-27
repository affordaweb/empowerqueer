import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Facebook, Youtube } from "lucide-react";
import { prisma } from "@/lib/prisma";
import KopisodesClient from "./KopisodesClient";

export default async function KopsodesPage() {
  const episodes = await prisma.kopisode.findMany({
    where: { published: true },
    orderBy: [{ order: "asc" }, { createdAt: "desc" }],
  });

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[600px] flex flex-col justify-end border-b border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/gallery/Wagayway-Equality-Sublian-Festival.jpg" alt="Kopisodes" className="absolute inset-0 w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A2E]/90 via-[#1A0A2E]/55 to-[#1A0A2E]/25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Kopisodes</span>
          <h1 className="font-serif text-5xl font-bold text-white mb-4">Stories That Speak Truth</h1>
          <p className="text-white/75 text-xl leading-relaxed max-w-2xl">
            A collection of voices shaping visibility, healing, and change. Raw, real, and unapologetic.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-[#A9D6B6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#A9D6B6] rounded-2xl p-8">
            <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-4">
              Honest Conversations Over Coffee
            </h2>
            <p className="text-[#474747] leading-relaxed mb-4">
              The EmpowerQueer Hub Blog brings together <a href="/voices" className="text-[#7C3AED] hover:underline">personal stories</a>, reflections, and <a href="/resources" className="text-[#7C3AED] hover:underline">resources</a> from across the LGBTQIA+ spectrum. Each post is a window into lived experience—raw, real, and unapologetic. Whether you&rsquo;re here to learn, relate, or be inspired, this space is yours.
            </p>
            <p className="text-[#474747] leading-relaxed mb-6">
              Kopisodes is the flagship podcast and video advocacy platform of Wagayway Equality Inc., created to amplify LGBTQIA+ voices, <a href="/voices" className="text-[#7C3AED] hover:underline">community stories</a>, and <a href="/resources" className="text-[#7C3AED] hover:underline">rights-based conversations</a> that inspire healing, solidarity, and <a href="/events" className="text-[#7C3AED] hover:underline">collective action</a>. Through relaxed, coffee-style conversations and creative video content, Kopisodes makes advocacy accessible, relatable, and deeply human.
            </p>
            <a
              href="https://www.facebook.com/wagaywayequality"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-p btn-p-sky inline-flex items-center gap-2 px-6 py-2.5 text-sm"
            >
              <Facebook size={15} />
              Follow on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Official YouTube playlist */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <p className="text-[#7C3AED] text-xs font-bold uppercase tracking-[0.18em] mb-2">Watch & Listen</p>
              <h2 className="font-serif text-3xl font-bold text-[#3A3C51]">Kopisodes on YouTube</h2>
            </div>
            <a
              href="https://www.youtube.com/@Kopisodes/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#7C3AED] font-semibold hover:underline"
            >
              <Youtube size={18} />
              Open the YouTube channel
            </a>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-black shadow-xl" style={{ aspectRatio: "16/9" }}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/videoseries?list=UUpv-kH_W9qhpnoNYP9FoaXg"
              title="Kopisodes YouTube playlist"
              width="100%"
              height="100%"
              className="absolute inset-0 border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Episodes */}
      <KopisodesClient episodes={episodes} />

      <Footer />
    </main>
  );
}
