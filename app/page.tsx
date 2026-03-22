"use client";

import { useEffect, useRef, useState } from "react";
import {
  Shield,
  BookOpen,
  Handshake,
  ChevronRight,
  Mail,
  Linkedin,
  Phone,
  MapPin,
  Mic2,
  Users,
  FileText,
  Calendar,
  Clock,
  Heart,
  Facebook,
  Twitter,
  Youtube,
  Send,
  ArrowRight,
} from "lucide-react";
import Navbar from "./components/Navbar";

// ─── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center pt-[75px] pb-[50px]">
      {/* Background video — muted set via ref to avoid SSR hydration mismatch */}
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/empowerqueer-hero.mp4"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F0A1A]/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-24">
        <p className="font-serif text-2xl sm:text-3xl italic text-[#E9D5FF] mb-6">
          You Are Seen. You Are Valid. You Are Home.
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Empower Queer Hub | LGBTQIA+ Support, Events &amp; Inclusive Resources
        </h1>
        <p className="max-w-2xl mx-auto text-white/80 text-lg leading-relaxed mb-10">
          EmpowerQueer is your all-in-one LGBTQIA+ support hub. Whether you&rsquo;re
          searching for queer mental health services, legal help, safe spaces, livelihood
          support, or local LGBTQIA+ events—this is where connection starts.
          <br /><br />
          No more scattered info, no more closed doors. We built this for every queer
          story that deserves to be seen, heard, and supported.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/about/"
            className="btn-p btn-p-mint inline-flex items-center gap-2 px-8 py-3.5 text-base"
          >
            Learn More
          </a>
          <a
            href="/contact/"
            className="btn-p btn-p-sky inline-flex items-center gap-2 px-8 py-3.5 text-base"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────

const features = [
  {
    icon: Shield,
    title: "Your Central LGBTQIA+ Community Resource Hub",
    description:
      "Access trusted support and opportunities in one safe space—from mental health services, queer-safe care, shelters, HIV and legal assistance, to learning resources, trainings, and livelihood opportunities. EmpowerQueer connects you to verified, community-grounded tools that support your wellbeing, growth, and everyday life.",
    href: "/resources/",
  },
  {
    icon: BookOpen,
    title: "Learning Space for Skills, Rights & Personal Growth",
    description:
      "Explore workshops, guides, and learning modules built for LGBTQIA+ individuals and allies. From understanding your rights, to mental health literacy, livelihood skills, and SOGIESC education — we make learning accessible, empowering, and affirming for all queer journeys.",
    href: "/trainings/",
  },
  {
    icon: Handshake,
    title: "Networking & Collaboration for LGBTQIA+ Communities",
    description:
      "Find events, community groups, advocacy circles, and volunteer opportunities that help you grow your network. Whether you're looking to collaborate, join a support group, or attend inclusive events — EmpowerQueer creates a space where connections become community.",
    href: "/events/",
  },
];

function Features() {
  return (
    <section className="py-20 bg-[#F3F3F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#3A3C51] font-semibold tracking-widest uppercase text-sm mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#3A3C51] mb-4">
            Everything You Need, In One Hub
          </h2>
          <p className="text-[#474747] max-w-xl mx-auto text-lg">
            Community-led support across mental health, education, and
            connection.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-[#3A3C51] hover:bg-[#A9D6B6] hover:text-white hover:border-[#A9D6B6] transition-all"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-9 h-9 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-[#3A3C51] hover:bg-[#A9D6B6] hover:text-white hover:border-[#A9D6B6] transition-all"
            >
              <Twitter size={16} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-[#3A3C51] hover:bg-[#A9D6B6] hover:text-white hover:border-[#A9D6B6] transition-all"
            >
              <Youtube size={16} />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md hover:border-[#A9D6B6] transition-all duration-300 group"
              >
                <div className="w-12 h-12 icon-bg-mint rounded-xl flex items-center justify-center mb-6">
                  <Icon size={22} className="icon-mint icon-anim" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">
                  {feat.title}
                </h3>
                <p className="text-[#474747] text-sm leading-relaxed mb-6">
                  {feat.description}
                </p>
                <a
                  href={feat.href}
                  className="inline-flex items-center gap-1.5 text-[#3A3C51] hover:text-[#3A3C51] text-sm font-semibold transition-colors"
                >
                  Explore <ChevronRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Hub Intro ────────────────────────────────────────────────────────────────

function HubIntro() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#7C3AED] font-semibold tracking-widest uppercase text-sm mb-3">About the Hub</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#3A3C51] leading-tight mb-6">
              Empower Queer Online Hub:<br className="hidden sm:block" />
              <span className="text-[#EC4899]"> A Home for LGBTQIA+ Empowerment</span>
            </h2>
            <p className="text-[#474747] text-lg leading-relaxed mb-6">
              The Empower Queer Online Hub is a community-driven platform designed to meet the real needs of LGBTQIA+ individuals. Born from the Wagayway EmpowerQueer Project, this hub offers a safe digital space for learning, events, and empowerment.
            </p>
            <p className="text-[#474747] text-base leading-relaxed mb-8">
              From mental health and legal support to livelihood opportunities and community connections, EmpowerQueer unites grassroots solutions and online accessibility to create a welcoming home for every queer identity.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/about/" className="btn-p btn-p-mint inline-flex items-center gap-2 px-6 py-3 text-sm">
                Learn More <ArrowRight size={15} />
              </a>
              <a href="/contact/" className="btn-p btn-p-sky inline-flex items-center gap-2 px-6 py-3 text-sm">
                Contact Us
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Mental Health & Legal Support", desc: "Queer-safe care referrals, legal assistance, and HIV support resources all in one place." },
              { title: "Livelihood & Opportunities", desc: "Shelter, livelihood programs, and community-grounded tools for everyday life." },
              { title: "Learning & Education", desc: "SOGIESC 101, HIV 101, Human Rights 101 — free modules for all." },
              { title: "Safe Digital Space", desc: "A permanent, accessible, and trustworthy online home where every identity is respected." },
            ].map((item) => (
              <div key={item.title} className="bg-gradient-to-br from-[#F5F0FF] to-white border border-[#E9D5FF] rounded-2xl p-5 hover:shadow-md transition-all">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] mb-3" />
                <h4 className="font-serif text-sm font-bold text-[#3A3C51] mb-2 leading-snug">{item.title}</h4>
                <p className="text-[#474747] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Events & Trainings ───────────────────────────────────────────────────────

function EventsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#F5F0FF] to-[#FDF2F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#EC4899] font-semibold tracking-widest uppercase text-sm mb-3">Get Involved</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#3A3C51] leading-tight mb-6">
              Upcoming Events<br />&amp; Trainings
            </h2>
            <p className="text-[#474747] text-lg leading-relaxed mb-4">
              Stay informed and get involved with events that center LGBTQIA+ voices, needs, and experiences. From workshops to story nights and advocacy sessions, each gathering is built to connect, educate, and empower—one moment at a time.
            </p>
            <p className="text-[#474747] text-base leading-relaxed mb-8">
              Stay in the loop with the latest happenings at EmpowerQueer! Visit our Facebook page to catch updates on upcoming events, trainings, and community programs designed to inspire, empower, and connect. Don&rsquo;t miss out—your next opportunity to learn, engage, and grow with the LGBTQIA+ community is just a click away, or you can even submit an event to share with the community.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/submit/" className="btn-p btn-p-rose inline-flex items-center gap-2 px-6 py-3 text-sm">
                Submit an Event <ArrowRight size={15} />
              </a>
              <a
                href="https://www.facebook.com/wagayway.equality"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#1565C0] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <Facebook size={15} />
                Visit our Facebook Page
              </a>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { tag: "Workshop", title: "SOGIESC 101 — Understanding Gender & Sexuality", date: "Ongoing", color: "bg-[#F5F0FF] border-[#E9D5FF]" },
              { tag: "Training", title: "HIV 101 — Prevention, Testing & Community Care", date: "Ongoing", color: "bg-[#FDF2F8] border-[#FBCFE8]" },
              { tag: "Advocacy", title: "Human Rights 101 by Wagayway Equality", date: "Ongoing", color: "bg-[#F0FDF4] border-[#BBF7D0]" },
              { tag: "Community", title: "Equality Desk — Know Your Rights", date: "Ongoing", color: "bg-[#FFF7ED] border-[#FED7AA]" },
            ].map((ev) => (
              <div key={ev.title} className={`${ev.color} border rounded-2xl p-5 flex items-center gap-4 hover:shadow-md transition-all`}>
                <div className="shrink-0">
                  <span className="bg-white border border-gray-200 text-[#3A3C51] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {ev.tag}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#3A3C51] text-sm font-semibold leading-snug line-clamp-2">{ev.title}</p>
                  <p className="text-[#474747]/50 text-xs mt-1">{ev.date}</p>
                </div>
                <ChevronRight size={16} className="text-[#3A3C51]/30 shrink-0" />
              </div>
            ))}
            <a href="/events/" className="flex items-center justify-center gap-2 text-[#7C3AED] hover:text-[#EC4899] text-sm font-semibold pt-2 transition-colors">
              View all events <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Collaboration Hub ────────────────────────────────────────────────────────

function Collaboration() {
  return (
    <section className="py-24 bg-[#292733] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#EC4899]/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">
          <div>
            <p className="text-[#A78BFA] font-semibold tracking-widest uppercase text-sm mb-3">Community First</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Built by the Community,<br />
              <span className="text-white/50">for the Community</span>
            </h2>
            <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-4">Your Collaboration Hub for Events, Trainings &amp; Partnerships</p>
            <p className="text-white/70 text-lg leading-relaxed mb-5">
              The Empower Queer Community Resource Hub is more than a directory—it&rsquo;s a shared space where LGBTQIA+ individuals, advocates, groups, and allies can co-create events, trainings, and collaborative projects that uplift our community.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-5">
              Whether you&rsquo;re organizing a workshop, launching a support circle, hosting a Pride event, or looking for partners to strengthen your advocacy, this hub offers a safe and inclusive environment to connect, share, and build together.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-5">
              Independent from any single organization, EmpowerQueer thrives on collaboration, transparency, and community leadership. Here, every posted event, training, partnership request, or shared experience becomes part of a growing network of care shaped by the people it serves.
            </p>
            <p className="text-white/80 text-base font-semibold italic mb-8">
              This is where collective growth begins. This is where healing, learning, and collaboration meet.
            </p>
            <a href="/about/" className="btn-p btn-p-mint inline-flex items-center gap-2 px-6 py-3 text-sm">
              Learn More <ArrowRight size={15} />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center w-full">
              <div className="font-serif text-7xl font-bold bg-gradient-to-br from-[#A78BFA] to-[#EC4899] bg-clip-text text-transparent mb-3">950+</div>
              <p className="text-white font-semibold text-lg mb-2">Happy Members</p>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Active members across the Philippines who call this hub home.
              </p>
              <div className="rainbow-bar h-[3px] w-16 mx-auto rounded-full mb-8" />
              <div className="grid grid-cols-3 gap-4 text-center">
                {[["50+", "Events"], ["100%", "Verified"], ["8yrs", "Advocacy"]].map(([val, label]) => (
                  <div key={label}>
                    <p className="font-serif text-2xl font-bold text-white">{val}</p>
                    <p className="text-white/40 text-xs mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Kopisodes ────────────────────────────────────────────────────────────────

function Kopisodes() {
  const episodes = [
    { img: "/images/gallery/HIV-and-Aids-Surveillance.jpg", tag: "LGBTQ+ Issues", title: "2025 HIV & AIDS Surveillance Update: What the Data Tells Us", date: "2025" },
    { img: "/images/gallery/SOGIESC-101-by-Wagayway-Equality-Inc.jpg", tag: "Support Resources", title: "SOGIESC 101 by Wagayway Equality Inc.", date: "2025" },
    { img: "/images/gallery/HIV-101-by-Wagayway-Equality.jpg", tag: "Support Resources", title: "HIV 101 — Prevention, Testing & Care", date: "2025" },
    { img: "/images/gallery/HUMAN-RIGHTS-101-by-Wagayway-Equality.jpg", tag: "Youth Services", title: "Human Rights 101 by Wagayway Equality", date: "2025" },
    { img: "/images/gallery/Equality-Desk-by-Wagayway-Equality.jpg", tag: "LGBTQIA2S+", title: "Equality Desk — Know Your Rights", date: "2025" },
  ];

  return (
    <section className="bg-[#292733] overflow-hidden">

      {/* ── Top band: headline + meta ── */}
      <div className="border-b border-white/6 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FED7AA]/10 border border-[#FED7AA]/20 rounded-full px-4 py-1.5 mb-5">
              <Mic2 size={12} className="text-[#FED7AA]" />
              <span className="text-[#FED7AA] text-[10px] font-bold uppercase tracking-[0.2em]">Our Podcast</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight max-w-xl">
              Kopisodes —<br />
              <span className="text-white/50">Honest Conversations</span><br />
              <span className="text-white/50">Over Coffee</span>
            </h2>
          </div>
          <div className="sm:text-right max-w-xs">
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Real voices. Real stories. Advocacy made human — through coffee-style conversations that inspire healing and collective action.
            </p>
            <div className="flex sm:justify-end items-center gap-3 flex-wrap">
              <a
                href="https://www.facebook.com/wagayway.equality"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#1565C0] text-white text-[11px] font-bold px-4 py-2 rounded-full transition-colors"
              >
                <Facebook size={12} />
                Follow on Facebook
              </a>
              <a href="/kopisodes/" className="inline-flex items-center gap-1.5 text-[#FED7AA] text-sm font-semibold hover:gap-3 transition-all">
                All Episodes <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">

          {/* Left — Featured video */}
          <div className="flex flex-col gap-4">
            {/* Video embed */}
            <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl shadow-black/60" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F4236780889893025%2F&show_text=false&width=600"
                width="100%"
                height="100%"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                title="Kopisodes featured reel"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#FED7AA] text-[#7C2D12] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Featured
                </span>
              </div>
            </div>

            {/* Watch on Facebook CTA */}
            <a
              href="https://www.facebook.com/reel/4236780889893025/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/25 hover:border-[#1877F2]/50 text-[#74AADF] hover:text-[#93C5FD] rounded-xl py-3 text-sm font-semibold transition-all"
            >
              <Facebook size={15} />
              Watch on Facebook
            </a>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[["10+", "Episodes"], ["4", "Seasons"], ["100%", "Community-led"]].map(([val, label]) => (
                <div key={label} className="bg-white/4 border border-white/6 rounded-xl px-4 py-3 text-center">
                  <p className="font-serif text-xl font-bold text-white">{val}</p>
                  <p className="text-white/35 text-[11px] mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Episode list + about */}
          <div className="flex flex-col">
            {/* About blurb */}
            <div className="bg-white/3 border border-white/8 rounded-xl p-5 mb-6">
              <p className="text-white/60 text-xs leading-relaxed">
                Kopisodes is the flagship podcast and video advocacy platform of{" "}
                <span className="text-white/80 font-semibold">Wagayway Equality Inc.</span> — amplifying LGBTQIA+ voices through relaxed, coffee-style conversations that inspire healing, solidarity, and collective action.
              </p>
              <a
                href="https://www.facebook.com/wagayway.equality"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-[#74AADF] hover:text-[#93C5FD] text-[11px] font-semibold transition-colors"
              >
                <Facebook size={11} />
                Follow Kopisodes on Facebook
              </a>
            </div>

            <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 px-1">Latest Episodes</p>
            <div className="flex flex-col divide-y divide-white/5">
              {episodes.map((ep, i) => (
                <a
                  key={ep.title}
                  href="/kopisodes/"
                  className="flex gap-3 py-4 group hover:bg-white/3 -mx-3 px-3 rounded-xl transition-colors"
                >
                  <div className="relative shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ep.img} alt={ep.title} className="w-20 h-[52px] rounded-lg object-cover group-hover:brightness-110 transition-all" />
                    <div className="absolute inset-0 rounded-lg bg-black/20 group-hover:bg-black/0 transition-all" />
                    <span className="absolute bottom-1.5 right-1.5 bg-black/70 text-white text-[8px] font-bold px-1.5 py-0.5 rounded">
                      {i === 0 ? "NEW" : ep.date}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <span className="text-[#FED7AA]/70 text-[9px] font-semibold uppercase tracking-widest mb-1">{ep.tag}</span>
                    <p className="text-white/80 text-xs font-medium leading-snug line-clamp-2 group-hover:text-white transition-colors">{ep.title}</p>
                  </div>
                  <ChevronRight size={14} className="text-white/20 group-hover:text-white/50 shrink-0 self-center transition-colors" />
                </a>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-6 pt-6 border-t border-white/6">
              {["LGBTQIA+", "HIV Awareness", "Community", "Youth", "Mental Health", "Rights"].map((tag) => (
                <span key={tag} className="bg-white/5 border border-white/8 text-white/40 text-[10px] px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Upcoming Events ──────────────────────────────────────────────────────────

const upcomingEvents = [
  {
    id: "batangas-city-pride-2026",
    title: "Batangas City Pride Month 2026",
    dateDisplay: "June 11, 2026",
    time: "8:00 AM onwards",
    location: "Batangas City Convention Center, Batangas City",
    description:
      "Annual Pride Month celebration featuring the \"Rampa Na, Kahit Ano Ka, Love Ka!\" Pride Walk, Bahaghari Awards honoring LGBTQ+ champions, fashion design competitions, and free services for KALIPI members.",
    category: "Pride",
    tags: ["Batangas City", "Pride Walk", "Annual"],
    image: "/images/gallery/Batangas-Pride-Month-Celebration-2023.jpg",
    link: "https://www.batangascity.gov.ph",
    cardBg: "bg-pink-50",
    border: "border-pink-200",
    dot: "bg-pink-400",
    pill: "bg-pink-100 border-pink-300 text-pink-700",
  },
  {
    id: "batangas-province-lgbtqia-2026",
    title: "11th LGBTQIA+ Celebration — Province of Batangas",
    dateDisplay: "November 5, 2026",
    time: "All Day",
    location: "Provincial DREAM Zone, Capitol Site, Batangas City",
    description:
      "Province-wide LGBTQIA+ celebration with a Grand Pride Parade, mental health presentations, Festival Queen & King Costume Competition, LGBTQIA+ Got Talent showcase, and community recognition ceremonies.",
    category: "Advocacy",
    tags: ["Batangas Province", "Grand Parade", "Annual"],
    image: "/images/gallery/EmpQueer-Image-116.jpg",
    link: "https://portal.batangas.gov.ph",
    cardBg: "bg-violet-50",
    border: "border-violet-200",
    dot: "bg-violet-400",
    pill: "bg-violet-100 border-violet-300 text-violet-700",
  },
  {
    id: "metro-manila-pride-2026",
    title: "Metro Manila Pride 2026",
    dateDisplay: "June 27, 2026",
    time: "All Day",
    location: "Metro Manila, Philippines (Multiple Venues)",
    description:
      "Asia's first and largest Pride event attracting 100,000+ participants — concerts, film screenings, art exhibitions, a massive Pride March, and discussions on LGBTQ+ rights, mental health, and HIV/AIDS awareness.",
    category: "Pride",
    tags: ["National", "Metro Manila", "Pride March"],
    image: "/images/gallery/EmpQueer-Image-118.jpg",
    link: "https://mmpride.org/",
    cardBg: "bg-pink-50",
    border: "border-pink-200",
    dot: "bg-pink-400",
    pill: "bg-pink-100 border-pink-300 text-pink-700",
  },
];

function UpcomingEvents() {
  return (
    <section className="py-24 bg-[#F3F3F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#7C3AED] font-semibold tracking-widest uppercase text-sm mb-3">Get Involved</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#3A3C51] mb-4">
            Upcoming Events
          </h2>
          <p className="text-[#474747] max-w-xl mx-auto text-lg">
            Stay connected with LGBTQIA+ events across Batangas and the Philippines. From Pride celebrations to advocacy workshops—every gathering matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {upcomingEvents.map((event) => (
            <a
              key={event.id}
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-left rounded-2xl border overflow-hidden hover:shadow-lg transition-all duration-300 group ${event.cardBg} ${event.border}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-44">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2.5 right-2.5">
                  <span className={`inline-flex items-center gap-1.5 border text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm backdrop-blur-sm ${event.pill}`}>
                    <span className={`w-2 h-2 rounded-full ${event.dot} animate-pulse shrink-0`} />
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="font-serif text-base font-bold text-[#3A3C51] mb-3 leading-snug line-clamp-2 group-hover:text-[#5A4B8A] transition-colors">
                  {event.title}
                </h3>
                <div className="space-y-1.5 text-xs text-[#474747] mb-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="shrink-0 text-[#3A3C51]" />
                    <span>{event.dateDisplay}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} className="shrink-0 text-[#3A3C51]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <MapPin size={12} className="shrink-0 text-[#3A3C51] mt-0.5" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                </div>
                <p className="text-xs text-[#474747] leading-relaxed line-clamp-2 mb-4">
                  {event.description}
                </p>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex gap-1 flex-wrap">
                    {event.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="bg-white/70 border border-gray-200 text-gray-400 text-[10px] px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#5A4B8A] whitespace-nowrap shrink-0">
                    Learn more →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a href="/events/" className="btn-p btn-p-mint inline-flex items-center gap-2 px-8 py-3.5 text-base">
            View All Events <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

const pillars = [
  {
    num: "01",
    icon: Users,
    iconBg: "icon-bg-sky",
    iconColor: "icon-sky",
    title: "A Central Access Point",
    desc: "A community hub for learning, empowerment, and events. A referral gateway to mental health, legal aid, HIV services, and livelihood opportunities.",
  },
  {
    num: "02",
    icon: Shield,
    iconBg: "icon-bg-lavender",
    iconColor: "icon-lavender",
    title: "A Safe Digital Space",
    desc: "Where every identity is respected and uplifted. EmpowerQueer brings together the heart of grassroots organizing and the power of community-led solutions — all in one accessible online home.",
  },
  {
    num: "03",
    icon: Heart,
    iconBg: "icon-bg-rose",
    iconColor: "icon-rose",
    title: "Built with Purpose",
    desc: "The EmpowerQueer Hub is an innovation born from the Wagayway EmpowerQueer Project, a community-led initiative funded by the Wellspring Philanthropic Fund and managed by Humanis.",
  },
];

const focusAreas = [
  "Mental Health",
  "Legal Aid",
  "HIV Services",
  "Livelihood",
  "Youth Engagement",
  "Community Events",
];

function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F5F0FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#D7C4E3] font-semibold tracking-widest uppercase text-sm mb-3">Our Story</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#3A3C51] leading-tight mb-4">
            Born from Urgency,<br className="hidden sm:block" /> Built with Purpose
          </h2>
          <p className="text-[#474747] max-w-xl mx-auto text-lg leading-relaxed">
            What started as a response to silence became a nationwide platform for queer lives.
          </p>
          <div className="rainbow-bar h-[3px] w-16 mx-auto rounded-full mt-8" />
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.num}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-[#E9D5FF] transition-all duration-300 group relative overflow-hidden"
              >
                {/* Large decorative number */}
                <span className="absolute top-4 right-5 font-serif text-7xl font-bold text-gray-100 group-hover:text-[#E9D5FF] transition-colors leading-none select-none">
                  {p.num}
                </span>
                <div className={`w-12 h-12 ${p.iconBg} rounded-xl flex items-center justify-center mb-6 relative z-10`}>
                  <Icon size={22} className={`${p.iconColor} icon-anim`} />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#3A3C51] mb-3 leading-snug relative z-10">
                  {p.title}
                </h3>
                <p className="text-[#474747] text-sm leading-relaxed relative z-10">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Wagayway full-width dark card */}
        <div className="bg-[#3A3C51] rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-10 sm:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 icon-bg-rose rounded-xl flex items-center justify-center shrink-0">
                  <Heart size={22} className="icon-rose icon-anim" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">Wagayway Equality</h3>
                  <p className="text-white/50 text-sm">Founded 2018 · Batangas, Philippines</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Wagayway Equality, Community of Volunteers, Inc. is a grassroots LGBTQIA+ human rights and community development organization based in Batangas. Founded in 2018, it champions gender equality &amp; LGBTQIA+ inclusion, community-based health &amp; HIV services, socio-economic empowerment, safe spaces, and youth leadership.
              </p>
            </div>
            <div className="p-10 sm:p-12">
              <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-5">Focus Areas</p>
              <div className="flex flex-wrap gap-2.5">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="bg-white/10 border border-white/20 text-white/80 text-xs px-4 py-2 rounded-full hover:bg-white/20 hover:text-white transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                {[["2018", "Founded"], ["950+", "Members"], ["100%", "Verified"]].map(([val, label]) => (
                  <div key={label}>
                    <p className="font-serif text-2xl font-bold text-white">{val}</p>
                    <p className="text-white/40 text-xs mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── Founder ─────────────────────────────────────────────────────────────────

function Founder() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr]">
        {/* Image — left */}
        <div className="flex items-center justify-center py-12 px-8 lg:py-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/aivan-profile-pic.jpg"
            alt="Aivan Castillo Alvarez"
            className="w-full max-w-[260px] rounded-2xl object-cover object-top shadow-lg"
          />
        </div>

        {/* Text — right */}
        <div className="flex flex-col justify-center px-10 py-16 lg:px-16">
          <div className="rainbow-bar h-[3px] w-12 rounded-full mb-8" />
          <blockquote className="font-serif text-lg sm:text-xl text-[#3A3C51] leading-relaxed mb-8 italic">
            &ldquo;When we started Wagayway Equality, it wasn&rsquo;t built from abundance— it was built from urgency. From stories of discrimination that were never reported. From young LGBTQIA+ people who had nowhere safe to turn. From community members who walked alone with their fears, questions, and pain. From the quiet truth we witnessed every day: our people deserved more than the silence they were left with.&rdquo;
            <br /><br />
            &ldquo;As we grow, this platform will evolve with you. Because EmpowerQueer is not mine alone; it belongs to the community it serves. On behalf of Wagayway Equality and everyone who made this possible, I welcome you—with pride, hope, and unwavering purpose. Padayon. The fight continues, and so does our love for one another.&rdquo;
          </blockquote>
          <div className="mb-8">
            <p className="text-[#3A3C51] font-bold text-lg">Aivan Castillo Alvarez</p>
            <p className="text-[#474747] text-sm">
              Founder / Executive Director — Empower Queer Hub
            </p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="mailto:aivan.c.alvarez@gmail.com"
              className="btn-p btn-p-yellow inline-flex items-center gap-2 text-sm px-4 py-2"
            >
              <Mail size={15} className="icon-yellow icon-anim" />
              Email Aivan
            </a>
            <a
              href="https://www.linkedin.com/in/aivanalvarez"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-p btn-p-yellow inline-flex items-center gap-2 text-sm px-4 py-2"
            >
              <Linkedin size={15} className="icon-yellow icon-anim" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Mission CTA ─────────────────────────────────────────────────────────────

function Mission() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#F5F0FF] to-[#FDF2F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#7C3AED] font-semibold tracking-widest uppercase text-sm mb-3">Our Purpose</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#3A3C51] leading-tight mb-6">
            Every LGBTQIA+ action at Empower Queer Hub starts with community
          </h2>
          <p className="text-[#474747] text-lg leading-relaxed mb-4">
            We believe that everything we build is a living response to inequality, exclusion, and invisibility. Every tool we offer, every story we uplift, and every event we host is designed to foster belonging, healing, and empowerment.
          </p>
          <p className="text-[#474747] text-base leading-relaxed">
            We stand with the LGBTQIA+ community by creating accessible, people-first spaces—both online and offline—that spark real change in emotional, mental, and social well-being.
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#7C3AED] to-[#EC4899] rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 rounded-3xl" />
          <div className="relative">
            <p className="text-white/80 text-sm uppercase tracking-widest font-semibold mb-4">Be Part of the Movement</p>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              Your voice, your action, your presence—it matters here.
            </h3>
            <p className="text-white/80 text-base leading-relaxed max-w-xl mx-auto mb-8">
              Whether you&rsquo;re ready to share your story, suggest a resource, or simply explore, EmpowerQueer Hub is open to you. Take a step forward—start with connection.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact/" className="bg-white text-[#7C3AED] hover:bg-white/90 font-bold px-8 py-3.5 rounded-xl transition-colors inline-flex items-center gap-2">
                Contact Us <ArrowRight size={16} />
              </a>
              <a href="/submit/" className="border border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-xl transition-colors inline-flex items-center gap-2">
                Share Your Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────

const stats = [
  {
    icon: Users,
    value: "950+",
    label: "Community Members",
    description: "Active members across the Philippines who call this hub home",
    gradient: "from-[#A78BFA] to-[#7C3AED]",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Verified Resources",
    description: "Every resource is vetted and community-reviewed before it goes live",
    gradient: "from-[#EC4899] to-[#BE185D]",
  },
  {
    icon: Calendar,
    value: "50+",
    label: "Events Hosted",
    description: "Workshops, trainings, and advocacy gatherings organized since 2018",
    gradient: "from-[#A78BFA] to-[#EC4899]",
  },
  {
    icon: FileText,
    value: "100s",
    label: "Voices Shared",
    description: "Real lived experiences published through Voices Among Us",
    gradient: "from-[#7C3AED] to-[#A78BFA]",
  },
  {
    icon: Heart,
    value: "8",
    label: "Years of Advocacy",
    description: "Grassroots LGBTQIA+ advocacy since Wagayway Equality was founded in 2018",
    gradient: "from-[#EC4899] to-[#A78BFA]",
  },
];

function Stats() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#292733]">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#7C3AED]/15 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#EC4899]/10 rounded-full blur-[90px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#7C3AED]" />
            <span className="text-[#A78BFA] text-xs uppercase tracking-[0.25em] font-semibold">Impact By The Numbers</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#EC4899]" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-white mb-3">
            Built From Community,<br />
            <span className="bg-gradient-to-r from-[#A78BFA] to-[#EC4899] bg-clip-text text-transparent">Measured In Lives</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
            Every number here represents a real person, a real need met, and a community that showed up for one another.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 text-center transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-4 opacity-90`}>
                  <Icon size={18} className="text-white" />
                </div>
                {/* Value */}
                <div className={`font-serif text-5xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-1 leading-none`}>
                  {stat.value}
                </div>
                {/* Label */}
                <p className="text-white font-semibold text-sm mt-2 mb-2">{stat.label}</p>
                {/* Description */}
                <p className="text-white/40 text-xs leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Gallery ─────────────────────────────────────────────────────────────────

const galleryItems = [
  { src: "/images/gallery/EmpQueer-Image-109.jpg", alt: "Community gathering" },
  { src: "/images/gallery/EmpQueer-Image-116.jpg", alt: "Pride event" },
  { src: "/images/gallery/EmpQueer-Image-117.jpg", alt: "Training workshop" },
  { src: "/images/gallery/EmpQueer-Image-118.jpg", alt: "Community support" },
  { src: "/images/gallery/EmpQueer-Image-132.jpg", alt: "Kopisodes recording" },
  { src: "/images/gallery/EmpQueer-Image-133.jpg", alt: "Advocacy march" },
  { src: "/images/gallery/EmpQueer-Image-135.jpg", alt: "Safe space" },
  { src: "/images/gallery/EmpQueer-Image-140.jpg", alt: "Resource fair" },
  { src: "/images/gallery/EmpQueer-Image-113.jpg", alt: "Community event" },
];

function Gallery() {
  const layouts = [
    "col-span-2 row-span-2",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#D7C4E3]" />
            <span className="text-[#9B72CF] text-xs uppercase tracking-[0.25em] font-semibold">Community in Action</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#A9D6B6]" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-[#3A3C51]">Our Moments</h2>
          <p className="text-[#474747]/60 text-sm mt-3 max-w-md mx-auto">
            Snapshots of the people, events, and energy that make this community real.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-3 auto-rows-[220px] gap-3">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${layouts[i]}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                <span className="text-white text-sm font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.alt}
                </span>
              </div>
              {/* Subtle always-on bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Newsletter ───────────────────────────────────────────────────────────────

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const apiUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL ?? "https://contact-form-gamma-seven.vercel.app";
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: email,
          email,
          message: `Newsletter signup from empowerqueerhub.com\n\nEmail: ${email}`,
          website: "empowerqueerhub.com",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-20 bg-[#292733] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#7C3AED]/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#EC4899]/10 rounded-full blur-[90px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rainbow-bar h-[3px] w-16 mx-auto rounded-full mb-8" />
        <p className="text-[#A78BFA] font-semibold tracking-widest uppercase text-sm mb-3">Stay Connected</p>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
          Stay connected with the community.
        </h2>
        <p className="text-white/60 text-base leading-relaxed max-w-lg mx-auto mb-2">
          Join the EmpowerQueer Hub mailing list and never miss a story, guide, or upcoming event. We&rsquo;ll only send meaningful updates—no spam, just support.
        </p>
        <p className="text-white/30 text-sm mb-8">Don&rsquo;t worry! We won&rsquo;t spam you!</p>
        {status === "success" ? (
          <p className="text-[#A9D6B6] font-semibold text-base">
            You&rsquo;re in! We&rsquo;ll keep you updated.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:opacity-90 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-xl transition-opacity inline-flex items-center gap-2 shrink-0"
            >
              <Send size={15} />
              {status === "loading" ? "Signing up..." : "Sign Up"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm mt-3">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
}

// ─── Sponsors ────────────────────────────────────────────────────────────────

const sponsors = [
  { name: "Humanis", logo: "/images/sponsors/humanis-logo.png" },
  { name: "Free to Be Me", logo: "/images/sponsors/free-to-be-me-logo.png" },
  { name: "Wagayway Equality", logo: "/images/sponsors/wagayway-equality-logo.png" },
  { name: "Wellspring Philanthropic Fund", logo: "/images/sponsors/wellspring-philanthropic-fund-logo.png" },
  { name: "Building Opportunities Summit", logo: "/images/sponsors/building-summit-logo.png" },
  { name: "AffordaWeb Solutions", logo: "/images/sponsors/affordaweb-solutions-logo.webp" },
];

function Sponsors() {
  return (
    <section className="py-16">
      <div className="text-center mb-10 px-4">
        <p className="text-[#3A3C51] text-sm uppercase tracking-widest font-semibold">
          We are grateful to our awesome sponsors. Thank you!
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="marquee-track">
          {[...sponsors, ...sponsors].map((s, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-8 shrink-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.logo} alt={s.name} className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Donate", href: "/donate/" },
  { label: "About the Hub", href: "/about/" },
  { label: "Accessibility Statement", href: "/accessibility/" },
  { label: "Submit Resource or Event", href: "/submit/" },
  { label: "FAQs", href: "/faqs/" },
  { label: "Voices Among Us", href: "/voices/" },
  { label: "Share Your Story", href: "/stories/" },
];

const footerCategories = [
  { label: "Community Center", href: "/category/community-center/" },
  { label: "Community Voices", href: "/category/community-voices/" },
  { label: "Diagnostic & Testing", href: "/category/diagnostic-testing/" },
  { label: "Mental Health", href: "/category/mental-health/" },
  { label: "Support Resources", href: "/category/support-resources/" },
  { label: "Sexual Health", href: "/category/sexual-health/" },
  { label: "Youth Services", href: "/category/youth-services/" },
];

const recentPosts = [
  { title: "2025 HIV & AIDS Surveillance Update", href: "/kopisodes/" },
  { title: "Human Rights 101 by Wagayway Equality", href: "/kopisodes/" },
  { title: "HIV 101 by Wagayway Equality", href: "/kopisodes/" },
  { title: "SOGIESC 101 by Wagayway Equality Inc", href: "/kopisodes/" },
];

function Footer() {
  return (
    <footer className="bg-[#292733] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/empower-queer-logo.png" alt="Empower Queer Hub" className="h-10 w-auto" />
            </div>
            <p className="text-[#7A7A7A] text-sm leading-relaxed mb-5">
              A safe, inclusive digital hub for LGBTQIA+ Filipinos — connecting
              communities to mental health, legal aid, and advocacy resources.
            </p>
            <div className="flex items-center gap-3 mb-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-[#7A7A7A] hover:bg-[#A9D6B6] hover:text-white hover:border-[#A9D6B6] transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="space-y-1 text-[#7A7A7A] text-xs">
              <div className="flex items-center gap-2"><Phone size={12} /><span>+63.929.741.4738</span></div>
              <div className="flex items-center gap-2"><MapPin size={12} /><span>Batangas, Philippines</span></div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[#7A7A7A] hover:text-white text-sm transition-colors flex items-center gap-1.5 group">
                    <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2">
              {footerCategories.map((cat) => (
                <li key={cat.href}>
                  <a href={cat.href} className="text-[#7A7A7A] hover:text-white text-sm transition-colors flex items-center gap-1.5 group">
                    <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 shrink-0" />
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Recent Posts</h4>
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.title}>
                  <a href={post.href} className="text-[#7A7A7A] hover:text-white text-sm transition-colors leading-relaxed block">
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#7A7A7A] text-xs">© 2026 EmpowerQueer Hub. All rights reserved.</p>
          <div className="rainbow-bar h-[3px] w-16 rounded-full" />
          <p className="text-[#7A7A7A] text-xs">
            Batangas, Philippines · Founded 2018 · Web Design by{" "}
            <a
              href="https://affordawebsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A9D6B6] hover:text-white transition-colors"
            >
              AffordaWeb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Kopisodes />
      <Features />
      <HubIntro />
      <EventsSection />
      <Collaboration />
      <UpcomingEvents />
      <About />
      <Founder />
      <Mission />
      <Stats />
      <Gallery />
      <Newsletter />
      <Sponsors />
      <Footer />
    </main>
  );
}
