"use client";

import { useState, useEffect } from "react";
import {
  Shield,
  BookOpen,
  Handshake,
  Menu,
  X,
  Heart,
  Facebook,
  Twitter,
  Youtube,
  ChevronRight,
  Mail,
  Linkedin,
  Phone,
  MapPin,
  Mic2,
  Users,
  FileText,
  Calendar,
} from "lucide-react";

// ─── Navigation ──────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Events", href: "/events/" },
  { label: "Trainings", href: "/trainings/" },
  { label: "Resources", href: "/resources/" },
  { label: "Opportunities", href: "/opportunities/" },
  { label: "Directory", href: "/directory/" },
  { label: "Kopisodes", href: "/kopisodes/" },
  { label: "Contact Us", href: "/contact/" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F0A1E]/95 backdrop-blur-md shadow-lg shadow-purple-900/20"
          : "bg-transparent"
      }`}
    >
      {/* Rainbow bar */}
      <div className="rainbow-bar h-1 w-full" />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full gradient-violet-pink flex items-center justify-center text-white font-bold text-sm shrink-0 group-hover:scale-105 transition-transform">
              EQ
            </div>
            <span className="font-bold text-white text-lg leading-tight hidden sm:block">
              Empower Queer Hub
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-purple-200 hover:text-white text-sm px-3 py-2 rounded-md hover:bg-white/10 transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="/donate/"
              className="hidden sm:inline-flex items-center gap-1.5 gradient-violet-pink text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-purple-900/30"
            >
              <Heart size={14} />
              Donate Now!
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="lg:hidden text-purple-200 hover:text-white p-2"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-[#1A1133] border border-purple-900/50 rounded-xl mb-4 overflow-hidden">
            <ul className="py-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-purple-200 hover:text-white hover:bg-white/10 px-5 py-3 text-sm transition-all"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-4 py-3">
                <a
                  href="/donate/"
                  className="block gradient-violet-pink text-white text-sm font-semibold px-4 py-2 rounded-full text-center"
                >
                  <Heart size={14} className="inline mr-1.5" />
                  Donate Now!
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/25 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline pill */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-purple-700/40 rounded-full px-5 py-2 mb-8">
          <span className="rainbow-text font-semibold text-sm tracking-wide">
            You Are Seen. You Are Valid. You Are Home.
          </span>
        </div>

        {/* H1 */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          One Safe Digital Space{" "}
          <span className="rainbow-text">for Every Queer</span> Filipino
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-purple-200 text-lg sm:text-xl leading-relaxed mb-10">
          Empower Queer Hub helps LGBTQIA+ individuals in the Philippines access
          mental health services, legal aid, safe spaces, livelihood support,
          and community events — all through one inclusive digital hub.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/about/"
            className="gradient-violet-pink text-white font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-purple-900/40 text-base"
          >
            Learn More
          </a>
          <a
            href="/contact/"
            className="bg-white/10 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/20 transition-all text-base"
          >
            Contact Us
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-purple-400/60 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────

const features = [
  {
    icon: Shield,
    title: "Central Resource Hub",
    description:
      "Access verified mental health services, legal assistance, HIV support resources, shelter and livelihood support, and a directory of LGBTQIA+-friendly providers — all in one place.",
    href: "/resources/",
    color: "from-violet-600 to-violet-800",
    glow: "shadow-violet-900/40",
  },
  {
    icon: BookOpen,
    title: "Learning Space",
    description:
      "Workshops, training modules, and downloadable guides for LGBTQIA+ individuals and allies. Explore SOGIESC 101, HIV 101, Human Rights 101, and more.",
    href: "/trainings/",
    color: "from-pink-600 to-pink-800",
    glow: "shadow-pink-900/40",
  },
  {
    icon: Handshake,
    title: "Networking & Collaboration",
    description:
      "Connect through our community events calendar, advocacy circles, and volunteer and livelihood opportunities directory. Build meaningful relationships.",
    href: "/events/",
    color: "from-purple-600 to-indigo-800",
    glow: "shadow-indigo-900/40",
  },
];

function Features() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-violet-400 font-semibold tracking-widest uppercase text-sm mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Everything You Need,{" "}
            <span className="rainbow-text">In One Hub</span>
          </h2>
          <p className="text-purple-300 max-w-xl mx-auto text-lg">
            Community-led support across mental health, education, and
            connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className={`bg-[#1A1133] border border-purple-900/40 rounded-2xl p-8 hover:border-purple-600/60 transition-all duration-300 group shadow-xl ${feat.glow}`}
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${feat.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  {feat.title}
                </h3>
                <p className="text-purple-300 text-sm leading-relaxed mb-6">
                  {feat.description}
                </p>
                <a
                  href={feat.href}
                  className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 text-sm font-semibold transition-colors group-hover:gap-2.5"
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

// ─── Kopisodes ────────────────────────────────────────────────────────────────

function Kopisodes() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 to-pink-900/10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Podcast card */}
          <div className="bg-[#1A1133] border border-purple-800/40 rounded-3xl p-10 shadow-2xl shadow-purple-900/30 animate-float">
            <div className="w-16 h-16 gradient-violet-pink rounded-2xl flex items-center justify-center mb-6">
              <Mic2 size={30} className="text-white" />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="rainbow-bar h-0.5 w-8 rounded-full inline-block" />
              <span className="text-pink-400 text-sm font-semibold tracking-wider uppercase">
                Now Live
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-3">
              Kopisodes
            </h3>
            <p className="text-purple-300 text-sm mb-6 leading-relaxed">
              Honest conversations over coffee. Real stories, lived experiences,
              and queer voices from the Philippines.
            </p>
            {/* Fake waveform */}
            <div className="flex items-end gap-1 h-10 mb-2">
              {[4, 7, 5, 9, 6, 11, 8, 5, 10, 7, 4, 8, 6, 9, 5].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-full gradient-violet-pink opacity-70"
                  style={{ height: `${h * 4}px` }}
                />
              ))}
            </div>
            <p className="text-purple-500 text-xs">
              Latest episode available on all platforms
            </p>
          </div>

          {/* Text side */}
          <div>
            <p className="text-violet-400 font-semibold tracking-widest uppercase text-sm mb-3">
              Our Podcast
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Kopisodes —{" "}
              <span className="rainbow-text">Honest Conversations</span> Over
              Coffee
            </h2>
            <p className="text-purple-300 text-lg leading-relaxed mb-6">
              Kopisodes is our audio series amplifying LGBTQIA+ voices through
              real stories and lived experiences — served in a relaxed,
              coffee-style dialogue format that makes every conversation feel
              like home.
            </p>
            <p className="text-purple-400 text-base leading-relaxed mb-8">
              Each episode dives into mental health, identity, advocacy, and
              community — honest, raw, and deeply human. No gatekeeping, just
              genuine connection.
            </p>
            <a
              href="/kopisodes/"
              className="inline-flex items-center gap-2 gradient-violet-pink text-white font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-purple-900/30"
            >
              Listen Now <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

const pillars = [
  {
    emoji: "🌈",
    title: "Born from Urgency",
    desc: "Wagayway EmpowerQueer Project was built not from abundance, but from the urgent need to protect and support queer lives in the Philippines.",
  },
  {
    emoji: "🤝",
    title: "Grassroots & Community-Led",
    desc: "Every initiative is shaped by the lived experiences of LGBTQIA+ individuals — ensuring our work remains relevant, respectful, and real.",
  },
  {
    emoji: "🔒",
    title: "Safe & Accessible",
    desc: "We prioritize broad accessibility and a judgment-free digital space so every queer Filipino can find support without barriers.",
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
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Pillars */}
          <div>
            <p className="text-violet-400 font-semibold tracking-widest uppercase text-sm mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
              Born from Urgency,{" "}
              <span className="rainbow-text">Built with Purpose</span>
            </h2>
            <div className="space-y-6">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="flex gap-4 bg-[#1A1133] border border-purple-900/40 rounded-xl p-5 hover:border-purple-600/50 transition-all"
                >
                  <span className="text-2xl shrink-0 mt-0.5">{p.emoji}</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{p.title}</h4>
                    <p className="text-purple-300 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Wagayway box */}
          <div className="bg-[#1A1133] border border-purple-700/50 rounded-3xl p-8 shadow-xl shadow-purple-900/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 gradient-violet-pink rounded-xl flex items-center justify-center">
                <Heart size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Wagayway Equality
                </h3>
                <p className="text-purple-400 text-sm">
                  Founded 2018 · Batangas, Philippines
                </p>
              </div>
            </div>
            <p className="text-purple-300 text-sm leading-relaxed mb-6">
              The parent organization behind Empower Queer Hub. Wagayway
              Equality has championed LGBTQIA+ rights and community-led advocacy
              since 2018, serving as the grassroots foundation for everything we
              build.
            </p>
            <div>
              <p className="text-purple-400 text-xs uppercase tracking-widest font-semibold mb-3">
                Focus Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="bg-violet-900/50 border border-violet-700/40 text-violet-200 text-xs px-3 py-1.5 rounded-full"
                  >
                    {area}
                  </span>
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
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Photo placeholder */}
        <div className="mx-auto w-28 h-28 rounded-full gradient-violet-pink p-0.5 mb-8">
          <div className="w-full h-full rounded-full bg-[#1A1133] flex items-center justify-center overflow-hidden">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-3xl font-bold text-white">
              A
            </div>
          </div>
        </div>

        <div className="rainbow-bar h-0.5 w-12 mx-auto rounded-full mb-8" />

        {/* Blockquote */}
        <blockquote className="font-serif text-2xl sm:text-3xl text-white leading-relaxed mb-8 italic">
          &ldquo;When we started Wagayway Equality, it wasn&rsquo;t built from
          abundance — it was built from urgency.&rdquo;
        </blockquote>

        <div className="mb-8">
          <p className="text-white font-bold text-lg">Aivan Castillo Alvarez</p>
          <p className="text-violet-400 text-sm">
            Founder / Executive Director — Empower Queer Hub
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="mailto:aivan.c.alvarez@gmail.com"
            className="flex items-center gap-2 text-purple-300 hover:text-white text-sm transition-colors bg-[#1A1133] border border-purple-800/40 px-4 py-2 rounded-full hover:border-violet-600/50"
          >
            <Mail size={15} />
            Email Aivan
          </a>
          <a
            href="https://www.linkedin.com/in/aivanalvarez"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-300 hover:text-white text-sm transition-colors bg-[#1A1133] border border-purple-800/40 px-4 py-2 rounded-full hover:border-violet-600/50"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────

const stats = [
  { icon: Users, value: "950+", label: "Members" },
  { icon: Shield, value: "100%", label: "Verified Resources" },
  { icon: Calendar, value: "50+", label: "Community Events" },
  { icon: FileText, value: "100s", label: "Stories Shared" },
];

function Stats() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A1133] border border-purple-800/40 rounded-3xl px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="group">
                  <div className="w-12 h-12 gradient-violet-pink rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="font-serif text-4xl font-bold rainbow-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-purple-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Gallery ─────────────────────────────────────────────────────────────────

const galleryItems = [
  { alt: "Community gathering", fallback: "🌈" },
  { alt: "Pride event", fallback: "🏳️‍🌈" },
  { alt: "Training workshop", fallback: "📚" },
  { alt: "Community support", fallback: "🤝" },
  { alt: "Kopisodes recording", fallback: "🎙️" },
  { alt: "Advocacy march", fallback: "✊" },
  { alt: "Safe space", fallback: "💜" },
  { alt: "Resource fair", fallback: "🌟" },
];

const galleryBgs = [
  "from-violet-900/60 to-purple-900/40",
  "from-pink-900/60 to-violet-900/40",
  "from-indigo-900/60 to-purple-900/40",
  "from-purple-900/60 to-pink-900/40",
  "from-violet-800/60 to-indigo-900/40",
  "from-fuchsia-900/60 to-violet-900/40",
  "from-purple-800/60 to-pink-900/40",
  "from-indigo-800/60 to-violet-900/40",
];

function Gallery() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-violet-400 font-semibold tracking-widest uppercase text-sm mb-3">
            Community in Action
          </p>
          <h2 className="font-serif text-4xl font-bold text-white">
            Our <span className="rainbow-text">Moments</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`relative bg-[#1A1133] border border-purple-900/40 rounded-xl overflow-hidden group hover:border-violet-600/60 transition-all ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
              style={{ aspectRatio: i === 0 ? "1/1" : "4/3" }}
            >
              <div
                className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${galleryBgs[i]} group-hover:scale-105 transition-transform duration-500`}
              >
                <span
                  className={`${i === 0 ? "text-6xl" : "text-4xl"} select-none`}
                >
                  {item.fallback}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A1E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-white text-xs font-medium">
                  {item.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Sponsors ────────────────────────────────────────────────────────────────

const sponsors = [
  "Humanis",
  "Free to Be Me",
  "Wagayway Equality",
  "Wellspring Philanthropic Fund",
  "Building Opportunities Summit",
];

function Sponsors() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-purple-500 text-sm uppercase tracking-widest font-semibold">
            Our Partners &amp; Sponsors
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {sponsors.map((name) => (
            <div
              key={name}
              className="bg-[#1A1133] border border-purple-900/40 rounded-xl px-6 py-4 text-purple-300 text-sm font-semibold hover:border-violet-600/50 hover:text-white transition-all whitespace-nowrap"
            >
              {name}
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

const categories = [
  { label: "Community Center", href: "/category/community-center/" },
  { label: "Community Voices", href: "/category/community-voices/" },
  { label: "Diagnostic & Testing", href: "/category/diagnostic-testing/" },
  { label: "Mental Health", href: "/category/mental-health/" },
  { label: "Support Resources", href: "/category/support-resources/" },
  { label: "Sexual Health", href: "/category/sexual-health/" },
  { label: "Youth Services", href: "/category/youth-services/" },
];

const recentPosts = [
  {
    title: "2025 HIV & AIDS Surveillance Update: What the Data Tells Us",
    href: "/hiv-aids-surveillance-2025/",
  },
  {
    title: "Human Rights 101 by Wagayway Equality",
    href: "/human-rights-101/",
  },
  { title: "HIV 101 by Wagayway Equality", href: "/hiv-101/" },
  {
    title: "SOGIESC 101 by Wagayway Equality Inc",
    href: "/sogiesc-101/",
  },
];

function Footer() {
  return (
    <footer className="bg-[#080614] border-t border-purple-900/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full gradient-violet-pink flex items-center justify-center text-white font-bold text-sm shrink-0">
                EQ
              </div>
              <span className="font-bold text-white text-base">
                Empower Queer Hub
              </span>
            </div>
            <p className="text-purple-400 text-sm leading-relaxed mb-5">
              A safe, inclusive digital hub for LGBTQIA+ Filipinos — connecting
              communities to mental health, legal aid, and advocacy resources
              since 2018.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-[#1A1133] border border-purple-800/40 rounded-lg flex items-center justify-center text-purple-400 hover:text-white hover:border-violet-600 transition-all"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 bg-[#1A1133] border border-purple-800/40 rounded-lg flex items-center justify-center text-purple-400 hover:text-white hover:border-violet-600 transition-all"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 bg-[#1A1133] border border-purple-800/40 rounded-lg flex items-center justify-center text-purple-400 hover:text-white hover:border-violet-600 transition-all"
              >
                <Youtube size={16} />
              </a>
            </div>
            <div className="space-y-1 text-purple-500 text-xs">
              <div className="flex items-center gap-2">
                <Phone size={12} />
                <span>+63 917 705 0413</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={12} />
                <span>Batangas, Philippines</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-purple-400 hover:text-violet-300 text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 shrink-0"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Categories
            </h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.href}>
                  <a
                    href={cat.href}
                    className="text-purple-400 hover:text-violet-300 text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 shrink-0"
                    />
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Recent Posts
            </h4>
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.href}>
                  <a
                    href={post.href}
                    className="text-purple-400 hover:text-violet-300 text-sm transition-colors leading-relaxed block"
                  >
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-purple-900/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-purple-600 text-xs text-center sm:text-left">
            © 2026 EmpowerQueer Hub. All rights reserved.
          </p>
          <div className="rainbow-bar h-0.5 w-16 rounded-full" />
          <p className="text-purple-600 text-xs">
            Batangas, Philippines · Founded 2018
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="bg-[#0F0A1E] min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Kopisodes />
      <About />
      <Founder />
      <Stats />
      <Gallery />
      <Sponsors />
      <Footer />
    </main>
  );
}
