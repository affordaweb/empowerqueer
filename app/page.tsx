"use client";

import { useState } from "react";
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
  Menu,
  X,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";
import RainbowBar from "./components/RainbowBar";

// ─── Navigation ───────────────────────────────────────────────────────────────

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
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-[#D7C4E3] flex items-center justify-center text-[#3A3C51] font-bold text-sm shrink-0 group-hover:bg-[#3A3C51] group-hover:text-white transition-colors">
              EQ
            </div>
            <span className="font-bold text-[#3A3C51] text-lg leading-tight hidden sm:block">
              Empower Queer Hub
            </span>
          </a>
          <ul className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#474747] hover:text-[#3A3C51] text-sm px-3 py-2 rounded-md hover:bg-[#D7C4E3]/30 transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href="/donate/"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#3A3C51] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#2a2c3d] transition-colors"
            >
              <Heart size={14} />
              Donate Now!
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="lg:hidden text-[#3A3C51] p-2"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden bg-white border border-gray-200 rounded-xl mb-4 overflow-hidden shadow-md">
            <ul className="py-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-[#474747] hover:text-[#3A3C51] hover:bg-[#D7C4E3]/20 px-5 py-3 text-sm transition-all"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-4 py-3">
                <a
                  href="/donate/"
                  className="block bg-[#3A3C51] text-white text-sm font-semibold px-4 py-2 rounded-full text-center"
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

// ─── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-serif text-2xl sm:text-3xl italic text-[#3A3C51] mb-6">
          You Are Seen. You Are Valid. You Are Home.
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3A3C51] leading-tight mb-6">
          Empower Queer Hub | LGBTQIA+ Support, Events &amp; Inclusive Resources
        </h1>
        <p className="max-w-2xl mx-auto text-[#474747] text-lg leading-relaxed mb-10">
          Empower Queer Hub helps LGBTQIA+ individuals in the Philippines access
          mental health services, legal aid, safe spaces, livelihood support,
          and community events — all through one inclusive digital hub.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/about/"
            className="bg-[#D7C4E3] text-[#3A3C51] font-semibold px-8 py-3.5 rounded-full hover:bg-[#3A3C51] hover:text-white transition-all text-base"
          >
            Learn More
          </a>
          <a
            href="/contact/"
            className="bg-[#D7C4E3] text-[#3A3C51] font-semibold px-8 py-3.5 rounded-full hover:bg-[#3A3C51] hover:text-white transition-all text-base"
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
    title: "Central Resource Hub",
    description:
      "Access verified mental health services, legal assistance, HIV support resources, shelter and livelihood support, and a directory of LGBTQIA+-friendly providers — all in one place.",
    href: "/resources/",
  },
  {
    icon: BookOpen,
    title: "Learning Space",
    description:
      "Workshops, training modules, and downloadable guides for LGBTQIA+ individuals and allies. Explore SOGIESC 101, HIV 101, Human Rights 101, and more.",
    href: "/trainings/",
  },
  {
    icon: Handshake,
    title: "Networking & Collaboration",
    description:
      "Connect through our community events calendar, advocacy circles, and volunteer and livelihood opportunities directory. Build meaningful relationships.",
    href: "/events/",
  },
];

function Features() {
  return (
    <section className="py-20 bg-gray-50">
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#D7C4E3] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3A3C51] transition-colors">
                  <Icon size={26} className="text-[#3A3C51] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">
                  {feat.title}
                </h3>
                <p className="text-[#474747] text-sm leading-relaxed mb-6">
                  {feat.description}
                </p>
                <a
                  href={feat.href}
                  className="inline-flex items-center gap-1.5 text-[#3A3C51] hover:text-[#2a2c3d] text-sm font-semibold transition-colors"
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Podcast card */}
          <div className="bg-[#D7C4E3]/20 border border-[#D7C4E3] rounded-3xl p-10">
            <div className="w-16 h-16 bg-[#D7C4E3] rounded-2xl flex items-center justify-center mb-6">
              <Mic2 size={30} className="text-[#3A3C51]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#3A3C51] mb-3">
              Kopisodes
            </h3>
            <p className="text-[#474747] text-sm mb-6 leading-relaxed">
              Honest conversations over coffee. Real stories, lived experiences,
              and queer voices from the Philippines.
            </p>
            <a
              href="/kopisodes/"
              className="inline-flex items-center gap-2 bg-[#D7C4E3] text-[#3A3C51] font-semibold px-6 py-3 rounded-full hover:bg-[#3A3C51] hover:text-white transition-all text-sm"
            >
              Listen Now <ChevronRight size={16} />
            </a>
          </div>

          {/* Text side */}
          <div>
            <p className="text-[#3A3C51] font-semibold tracking-widest uppercase text-sm mb-3">
              Our Podcast
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#3A3C51] mb-6 leading-tight">
              Kopisodes — Honest Conversations Over Coffee
            </h2>
            <p className="text-[#474747] text-lg leading-relaxed mb-6">
              Kopisodes is our audio series amplifying LGBTQIA+ voices through
              real stories and lived experiences — served in a relaxed,
              coffee-style dialogue format that makes every conversation feel
              like home.
            </p>
            <p className="text-[#474747] text-base leading-relaxed mb-8">
              Each episode dives into mental health, identity, advocacy, and
              community — honest, raw, and deeply human.
            </p>
            <a
              href="/kopisodes/"
              className="inline-flex items-center gap-2 bg-[#D7C4E3] text-[#3A3C51] font-semibold px-7 py-3 rounded-full hover:bg-[#3A3C51] hover:text-white transition-all"
            >
              Explore Kopisodes <ChevronRight size={16} />
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
    title: "Born from Urgency",
    desc: "Wagayway EmpowerQueer Project was built not from abundance, but from the urgent need to protect and support queer lives in the Philippines.",
  },
  {
    title: "Grassroots & Community-Led",
    desc: "Every initiative is shaped by the lived experiences of LGBTQIA+ individuals — ensuring our work remains relevant, respectful, and real.",
  },
  {
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#3A3C51] font-semibold tracking-widest uppercase text-sm mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#3A3C51] mb-8 leading-tight">
              Born from Urgency, Built with Purpose
            </h2>
            <div className="space-y-5">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#D7C4E3] hover:shadow-sm transition-all"
                >
                  <h4 className="font-semibold text-[#3A3C51] mb-1">{p.title}</h4>
                  <p className="text-[#474747] text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Wagayway box */}
          <div className="bg-white border border-[#D7C4E3] rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#D7C4E3] rounded-xl flex items-center justify-center">
                <Heart size={22} className="text-[#3A3C51]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#3A3C51]">
                  Wagayway Equality
                </h3>
                <p className="text-[#474747] text-sm">
                  Founded 2018 · Batangas, Philippines
                </p>
              </div>
            </div>
            <p className="text-[#474747] text-sm leading-relaxed mb-6">
              The parent organization behind Empower Queer Hub. Wagayway
              Equality has championed LGBTQIA+ rights and community-led advocacy
              since 2018, serving as the grassroots foundation for everything we
              build.
            </p>
            <div>
              <p className="text-[#3A3C51] text-xs uppercase tracking-widest font-semibold mb-3">
                Focus Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="bg-[#D7C4E3]/30 border border-[#D7C4E3] text-[#3A3C51] text-xs px-3 py-1.5 rounded-full"
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
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto w-24 h-24 rounded-full bg-[#D7C4E3] flex items-center justify-center text-3xl font-bold text-[#3A3C51] mb-8">
          A
        </div>
        <div className="rainbow-bar h-[3px] w-12 mx-auto rounded-full mb-8" />
        <blockquote className="font-serif text-2xl sm:text-3xl text-[#3A3C51] leading-relaxed mb-8 italic">
          &ldquo;When we started Wagayway Equality, it wasn&rsquo;t built from
          abundance — it was built from urgency.&rdquo;
        </blockquote>
        <div className="mb-8">
          <p className="text-[#3A3C51] font-bold text-lg">Aivan Castillo Alvarez</p>
          <p className="text-[#474747] text-sm">
            Founder / Executive Director — Empower Queer Hub
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="mailto:aivan.c.alvarez@gmail.com"
            className="flex items-center gap-2 text-[#474747] hover:text-[#3A3C51] text-sm transition-colors bg-[#D7C4E3]/20 border border-[#D7C4E3] px-4 py-2 rounded-full hover:border-[#3A3C51]"
          >
            <Mail size={15} />
            Email Aivan
          </a>
          <a
            href="https://www.linkedin.com/in/aivanalvarez"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#474747] hover:text-[#3A3C51] text-sm transition-colors bg-[#D7C4E3]/20 border border-[#D7C4E3] px-4 py-2 rounded-full hover:border-[#3A3C51]"
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
  { icon: Calendar, value: "50+", label: "Events" },
  { icon: FileText, value: "100s", label: "Stories" },
];

function Stats() {
  return (
    <section className="py-16 bg-[#D7C4E3]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#D7C4E3] rounded-3xl px-8 py-12 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="group">
                  <div className="w-12 h-12 bg-[#D7C4E3] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#3A3C51] transition-colors">
                    <Icon size={20} className="text-[#3A3C51] group-hover:text-white transition-colors" />
                  </div>
                  <div className="font-serif text-4xl font-bold text-[#3A3C51] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[#474747] text-sm font-medium">
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
  { alt: "Community gathering" },
  { alt: "Pride event" },
  { alt: "Training workshop" },
  { alt: "Community support" },
  { alt: "Kopisodes recording" },
  { alt: "Advocacy march" },
  { alt: "Safe space" },
  { alt: "Resource fair" },
];

function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#3A3C51] font-semibold tracking-widest uppercase text-sm mb-3">
            Community in Action
          </p>
          <h2 className="font-serif text-4xl font-bold text-[#3A3C51]">
            Our Moments
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`relative bg-[#D7C4E3]/20 border border-[#D7C4E3] rounded-xl overflow-hidden group hover:border-[#3A3C51] hover:shadow-sm transition-all ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
              style={{ aspectRatio: i === 0 ? "1/1" : "4/3" }}
            >
              <div className="w-full h-full flex items-center justify-center min-h-[120px]">
                <span className="text-[#3A3C51]/40 text-sm font-medium px-2 text-center">
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[#3A3C51] text-sm uppercase tracking-widest font-semibold">
            Our Partners &amp; Sponsors
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {sponsors.map((name) => (
            <div
              key={name}
              className="bg-white border border-gray-200 rounded-xl px-6 py-4 text-[#3A3C51] text-sm font-semibold hover:border-[#D7C4E3] hover:bg-[#D7C4E3]/10 transition-all whitespace-nowrap shadow-sm"
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
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#D7C4E3] flex items-center justify-center text-[#3A3C51] font-bold text-sm shrink-0">
                EQ
              </div>
              <span className="font-bold text-[#3A3C51] text-base">
                Empower Queer Hub
              </span>
            </div>
            <p className="text-[#474747] text-sm leading-relaxed mb-5">
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
                  className="w-9 h-9 bg-[#D7C4E3]/30 border border-[#D7C4E3] rounded-lg flex items-center justify-center text-[#3A3C51] hover:bg-[#3A3C51] hover:text-white hover:border-[#3A3C51] transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="space-y-1 text-[#474747] text-xs">
              <div className="flex items-center gap-2"><Phone size={12} /><span>+63.929.741.4738</span></div>
              <div className="flex items-center gap-2"><MapPin size={12} /><span>Batangas, Philippines</span></div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[#3A3C51] text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[#474747] hover:text-[#3A3C51] text-sm transition-colors flex items-center gap-1.5 group">
                    <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#3A3C51] text-sm mb-4 uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2">
              {footerCategories.map((cat) => (
                <li key={cat.href}>
                  <a href={cat.href} className="text-[#474747] hover:text-[#3A3C51] text-sm transition-colors flex items-center gap-1.5 group">
                    <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 shrink-0" />
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#3A3C51] text-sm mb-4 uppercase tracking-wider">Recent Posts</h4>
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.title}>
                  <a href={post.href} className="text-[#474747] hover:text-[#3A3C51] text-sm transition-colors leading-relaxed block">
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#474747] text-xs">© 2026 EmpowerQueer Hub. All rights reserved.</p>
          <div className="rainbow-bar h-[3px] w-16 rounded-full" />
          <p className="text-[#474747] text-xs">Batangas, Philippines · Founded 2018</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <RainbowBar />
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
