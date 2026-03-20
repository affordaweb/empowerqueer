"use client";

import { useEffect, useRef } from "react";
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
  Heart,
  Facebook,
  Twitter,
  Youtube,
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
    <section className="bg-[#0F0E17] overflow-hidden">

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
            <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl shadow-black/60" style={{ aspectRatio: "9/16" }}>
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
    <section className="relative py-24 overflow-hidden bg-[#0F0A1E]">
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
