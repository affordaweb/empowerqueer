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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/empower-queer-logo.png" alt="Empower Queer Hub" className="h-10 w-auto" />
          </a>
          <ul className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#5C576E] hover:text-[#4A3F6B] text-sm px-3 py-2 rounded-md hover:bg-[#B5C4AE]/30 transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href="/donate/"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#6B8F63] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#4E6B47] transition-colors"
            >
              <Heart size={14} />
              Donate Now!
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="lg:hidden text-[#4A3F6B] p-2"
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
                    className="block text-[#5C576E] hover:text-[#4A3F6B] hover:bg-[#B5C4AE]/20 px-5 py-3 text-sm transition-all"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-4 py-3">
                <a
                  href="/donate/"
                  className="block bg-[#6B8F63] text-white text-sm font-semibold px-4 py-2 rounded-full text-center"
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
    <section className="bg-gradient-to-br from-[#EDE8F5] to-[#E4EDE0] py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-serif text-2xl sm:text-3xl italic text-[#6B8F63] mb-6">
          You Are Seen. You Are Valid. You Are Home.
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4A3F6B] leading-tight mb-6">
          Empower Queer Hub | LGBTQIA+ Support, Events &amp; Inclusive Resources
        </h1>
        <p className="max-w-2xl mx-auto text-[#5C576E] text-lg leading-relaxed mb-10">
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
            className="bg-[#B5C4AE] text-[#4A3F6B] font-semibold px-8 py-3.5 rounded-full hover:bg-[#6B8F63] hover:text-white transition-all text-base"
          >
            Learn More
          </a>
          <a
            href="/contact/"
            className="bg-[#B5C4AE] text-[#4A3F6B] font-semibold px-8 py-3.5 rounded-full hover:bg-[#6B8F63] hover:text-white transition-all text-base"
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
    <section className="py-20 bg-[#EEEAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#4A3F6B] font-semibold tracking-widest uppercase text-sm mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#4A3F6B] mb-4">
            Everything You Need, In One Hub
          </h2>
          <p className="text-[#5C576E] max-w-xl mx-auto text-lg">
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
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md hover:border-[#B5C4AE] transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#B5C4AE] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#6B8F63] transition-colors">
                  <Icon size={26} className="text-[#4A3F6B] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#4A3F6B] mb-3">
                  {feat.title}
                </h3>
                <p className="text-[#5C576E] text-sm leading-relaxed mb-6">
                  {feat.description}
                </p>
                <a
                  href={feat.href}
                  className="inline-flex items-center gap-1.5 text-[#4A3F6B] hover:text-[#4E6B47] text-sm font-semibold transition-colors"
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
          <div className="bg-[#B5C4AE]/20 border border-[#B5C4AE] rounded-3xl p-10">
            <div className="w-16 h-16 bg-[#B5C4AE] rounded-2xl flex items-center justify-center mb-6">
              <Mic2 size={30} className="text-[#4A3F6B]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#4A3F6B] mb-3">
              Kopisodes
            </h3>
            <p className="text-[#5C576E] text-sm mb-6 leading-relaxed">
              Kopisodes is a podcast that blends real stories, shared experiences, and meaningful dialogue—just like a good conversation over coffee. Each episode creates space for open talks, fresh ideas, and voices that deserve to be heard, making every listen both relatable and thought-provoking.
            </p>
            <a
              href="/kopisodes/"
              className="inline-flex items-center gap-2 bg-[#B5C4AE] text-[#4A3F6B] font-semibold px-6 py-3 rounded-full hover:bg-[#6B8F63] hover:text-white transition-all text-sm"
            >
              Listen Now <ChevronRight size={16} />
            </a>
          </div>

          {/* Text side */}
          <div>
            <p className="text-[#4A3F6B] font-semibold tracking-widest uppercase text-sm mb-3">
              Our Podcast
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#4A3F6B] mb-6 leading-tight">
              Kopisodes — Honest Conversations Over Coffee
            </h2>
            <p className="text-[#5C576E] text-lg leading-relaxed mb-6">
              Listen in as we unpack real experiences, spark needed conversations, and celebrate the courage of youth who choose to lead, uplift, and inspire. Sip with us, learn with us, grow with us.
            </p>
            <p className="text-[#5C576E] text-base leading-relaxed mb-8">
              Kopisodes is the flagship podcast and video advocacy platform of Wagayway Equality Inc., created to amplify LGBTQIA+ voices, community stories, and rights-based conversations that inspire healing, solidarity, and collective action. Through relaxed, coffee-style conversations and creative video content, Kopisodes makes advocacy accessible, relatable, and deeply human.
            </p>
            <a
              href="/kopisodes/"
              className="inline-flex items-center gap-2 bg-[#B5C4AE] text-[#4A3F6B] font-semibold px-7 py-3 rounded-full hover:bg-[#6B8F63] hover:text-white transition-all"
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
    title: "A central access point for support services",
    desc: "A community hub for learning, empowerment, and events. A referral gateway to mental health, legal aid, HIV services, and livelihood opportunities.",
  },
  {
    title: "A safe digital space",
    desc: "Where every identity is respected and uplifted. EmpowerQueer brings together the heart of grassroots organizing and the power of community-led solutions — all in one accessible online home.",
  },
  {
    title: "Born from Urgency, Built with Purpose",
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
    <section className="py-20 bg-[#EEEAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#4A3F6B] font-semibold tracking-widest uppercase text-sm mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#4A3F6B] mb-8 leading-tight">
              Born from Urgency, Built with Purpose
            </h2>
            <div className="space-y-5">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#B5C4AE] hover:shadow-sm transition-all"
                >
                  <h4 className="font-semibold text-[#4A3F6B] mb-1">{p.title}</h4>
                  <p className="text-[#5C576E] text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Wagayway box */}
          <div className="bg-white border border-[#B5C4AE] rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#B5C4AE] rounded-xl flex items-center justify-center">
                <Heart size={22} className="text-[#4A3F6B]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#4A3F6B]">
                  Wagayway Equality
                </h3>
                <p className="text-[#5C576E] text-sm">
                  Founded 2018 · Batangas, Philippines
                </p>
              </div>
            </div>
            <p className="text-[#5C576E] text-sm leading-relaxed mb-6">
              Wagayway Equality, Community of Volunteers, Inc. is a grassroots LGBTQIA+ human rights and community development organization based in Batangas. Founded in 2018, Wagayway Equality champions gender equality &amp; LGBTQIA+ inclusion, community-based health &amp; HIV services, socio-economic empowerment for LGBTQIA+ families, safe spaces &amp; mental health support, and volunteerism, leadership, and youth engagement.
            </p>
            <div>
              <p className="text-[#4A3F6B] text-xs uppercase tracking-widest font-semibold mb-3">
                Focus Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="bg-[#B5C4AE]/30 border border-[#B5C4AE] text-[#4A3F6B] text-xs px-3 py-1.5 rounded-full"
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
        <div className="mx-auto w-24 h-24 rounded-full overflow-hidden mb-8 border-4 border-[#B5C4AE]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/aivan-profile-pic.png" alt="Aivan Castillo Alvarez" className="w-full h-full object-cover" />
        </div>
        <div className="rainbow-bar h-[3px] w-12 mx-auto rounded-full mb-8" />
        <blockquote className="font-serif text-lg sm:text-xl text-[#4A3F6B] leading-relaxed mb-8 italic text-left max-w-3xl mx-auto">
          &ldquo;When we started Wagayway Equality, it wasn&rsquo;t built from abundance— it was built from urgency. From stories of discrimination that were never reported. From young LGBTQIA+ people who had nowhere safe to turn. From community members who walked alone with their fears, questions, and pain. From the quiet truth we witnessed every day: our people deserved more than the silence they were left with.&rdquo;
          <br /><br />
          &ldquo;As we grow, this platform will evolve with you. Because EmpowerQueer is not mine alone; it belongs to the community it serves. On behalf of Wagayway Equality and everyone who made this possible, I welcome you—with pride, hope, and unwavering purpose. Padayon. The fight continues, and so does our love for one another.&rdquo;
        </blockquote>
        <div className="mb-8">
          <p className="text-[#4A3F6B] font-bold text-lg">Aivan Castillo Alvarez</p>
          <p className="text-[#5C576E] text-sm">
            Founder / Executive Director — Empower Queer Hub
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="mailto:aivan.c.alvarez@gmail.com"
            className="flex items-center gap-2 text-[#5C576E] hover:text-[#4A3F6B] text-sm transition-colors bg-[#B5C4AE]/20 border border-[#B5C4AE] px-4 py-2 rounded-full hover:border-[#6B8F63]"
          >
            <Mail size={15} />
            Email Aivan
          </a>
          <a
            href="https://www.linkedin.com/in/aivanalvarez"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#5C576E] hover:text-[#4A3F6B] text-sm transition-colors bg-[#B5C4AE]/20 border border-[#B5C4AE] px-4 py-2 rounded-full hover:border-[#6B8F63]"
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
    <section className="py-16 bg-[#EEEAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#B5C4AE] rounded-3xl px-8 py-12 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="group">
                  <div className="w-12 h-12 bg-[#B5C4AE] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#6B8F63] transition-colors">
                    <Icon size={20} className="text-[#4A3F6B] group-hover:text-white transition-colors" />
                  </div>
                  <div className="font-serif text-4xl font-bold text-[#4A3F6B] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[#5C576E] text-sm font-medium">
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
  { src: "/images/gallery/EmpQueer-Image-109.jpg", alt: "Community gathering" },
  { src: "/images/gallery/EmpQueer-Image-116.jpg", alt: "Pride event" },
  { src: "/images/gallery/EmpQueer-Image-117.jpg", alt: "Training workshop" },
  { src: "/images/gallery/EmpQueer-Image-118.jpg", alt: "Community support" },
  { src: "/images/gallery/EmpQueer-Image-132.jpg", alt: "Kopisodes recording" },
  { src: "/images/gallery/EmpQueer-Image-133.jpg", alt: "Advocacy march" },
  { src: "/images/gallery/EmpQueer-Image-135.jpg", alt: "Safe space" },
  { src: "/images/gallery/EmpQueer-Image-140.jpg", alt: "Resource fair" },
];

function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#4A3F6B] font-semibold tracking-widest uppercase text-sm mb-3">
            Community in Action
          </p>
          <h2 className="font-serif text-4xl font-bold text-[#4A3F6B]">
            Our Moments
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`relative bg-[#B5C4AE]/20 border border-[#B5C4AE] rounded-xl overflow-hidden group hover:border-[#6B8F63] hover:shadow-sm transition-all ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
              style={{ aspectRatio: i === 0 ? "1/1" : "4/3" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
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
];

function Sponsors() {
  return (
    <section className="py-16 bg-[#EEEAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[#4A3F6B] text-sm uppercase tracking-widest font-semibold">
            We are grateful to our awesome sponsors. Thank you!
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {sponsors.map((s) => (
            <div
              key={s.name}
              className="bg-white border border-gray-200 rounded-xl px-6 py-4 hover:border-[#B5C4AE] hover:bg-[#B5C4AE]/10 transition-all shadow-sm flex items-center justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.logo} alt={s.name} className="h-12 w-auto object-contain" />
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/empower-queer-logo.png" alt="Empower Queer Hub" className="h-10 w-auto" />
            </div>
            <p className="text-[#5C576E] text-sm leading-relaxed mb-5">
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
                  className="w-9 h-9 bg-[#B5C4AE]/30 border border-[#B5C4AE] rounded-lg flex items-center justify-center text-[#4A3F6B] hover:bg-[#6B8F63] hover:text-white hover:border-[#6B8F63] transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="space-y-1 text-[#5C576E] text-xs">
              <div className="flex items-center gap-2"><Phone size={12} /><span>+63.929.741.4738</span></div>
              <div className="flex items-center gap-2"><MapPin size={12} /><span>Batangas, Philippines</span></div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[#4A3F6B] text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[#5C576E] hover:text-[#4A3F6B] text-sm transition-colors flex items-center gap-1.5 group">
                    <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#4A3F6B] text-sm mb-4 uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2">
              {footerCategories.map((cat) => (
                <li key={cat.href}>
                  <a href={cat.href} className="text-[#5C576E] hover:text-[#4A3F6B] text-sm transition-colors flex items-center gap-1.5 group">
                    <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 shrink-0" />
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#4A3F6B] text-sm mb-4 uppercase tracking-wider">Recent Posts</h4>
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.title}>
                  <a href={post.href} className="text-[#5C576E] hover:text-[#4A3F6B] text-sm transition-colors leading-relaxed block">
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#5C576E] text-xs">© 2026 EmpowerQueer Hub. All rights reserved.</p>
          <div className="rainbow-bar h-[3px] w-16 rounded-full" />
          <p className="text-[#5C576E] text-xs">Batangas, Philippines · Founded 2018</p>
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
