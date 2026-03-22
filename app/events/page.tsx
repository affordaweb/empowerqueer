"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, MapPin, Clock, X, ExternalLink, Star, Tag, Send, CheckCircle } from "lucide-react";

/* ─── Types ──────────────────────────────────────────────────────────────── */

type CategoryKey = "Pride" | "Health" | "Workshop" | "Advocacy" | "Cultural" | "Social";
type FilterKey = "All" | CategoryKey;

interface Event {
  id: string;
  title: string;
  /** ISO date "YYYY-MM-DD" — events past this date are automatically hidden */
  dateISO: string;
  dateDisplay: string;
  time: string;
  location: string;
  description: string;
  category: CategoryKey;
  tags: string[];
  image: string;
  link?: string;
  /** Featured events sort to the very top */
  featured?: boolean;
}

/* ─── Category Styles ────────────────────────────────────────────────────── */

const CAT: Record<CategoryKey, { cardBg: string; border: string; dot: string; pill: string }> = {
  Pride:    { cardBg: "bg-pink-50",    border: "border-pink-200",    dot: "bg-pink-400",    pill: "bg-pink-100 border-pink-300 text-pink-700" },
  Health:   { cardBg: "bg-emerald-50", border: "border-emerald-200", dot: "bg-emerald-400", pill: "bg-emerald-100 border-emerald-300 text-emerald-700" },
  Workshop: { cardBg: "bg-sky-50",     border: "border-sky-200",     dot: "bg-sky-400",     pill: "bg-sky-100 border-sky-300 text-sky-700" },
  Advocacy: { cardBg: "bg-violet-50",  border: "border-violet-200",  dot: "bg-violet-400",  pill: "bg-violet-100 border-violet-300 text-violet-700" },
  Cultural: { cardBg: "bg-orange-50",  border: "border-orange-200",  dot: "bg-orange-400",  pill: "bg-orange-100 border-orange-300 text-orange-700" },
  Social:   { cardBg: "bg-amber-50",   border: "border-amber-200",   dot: "bg-amber-400",   pill: "bg-amber-100 border-amber-300 text-amber-700" },
};

/* ─── Events Data ────────────────────────────────────────────────────────────
   HOW TO ADD AN EVENT:
   • Add a new object to ALL_EVENTS.
   • dateISO: "YYYY-MM-DD" — past events are auto-hidden on the page.
   • featured: true — pins the event to the very top.
   • Priority: Batangas City / Batangas Province events go first.
   ──────────────────────────────────────────────────────────────────────────── */

const ALL_EVENTS: Event[] = [
  // ── FEATURED — BATANGAS PRIORITY ──────────────────────────────────────────
  {
    id: "batangas-city-pride-2026",
    title: "Batangas City Pride Month 2026",
    dateISO: "2026-06-11",
    dateDisplay: "June 11, 2026",
    time: "8:00 AM onwards",
    location: "Batangas City Convention Center (BCCC), Batangas City",
    description:
      "Batangas City's annual Pride Month celebration featuring the \"Rampa Na, Kahit Ano Ka, Love Ka!\" Pride Walk from the Provincial Capitol to BCCC. Includes the Bahaghari Awards honoring individuals, businesses, and institutions supporting LGBTQ+ advancement, fashion design competitions, hair and makeup showcases, and free services for PWDs and KALIPI members.",
    category: "Pride",
    tags: ["Batangas City", "Pride Walk", "Bahaghari Awards", "Annual"],
    image: "/images/gallery/Batangas-Pride-Month-Celebration-2023.jpg",
    link: "https://www.batangascity.gov.ph",
    featured: true,
  },
  {
    id: "batangas-province-lgbtqia-2026",
    title: "11th LGBTQIA+ Celebration — Province of Batangas",
    dateISO: "2026-11-05",
    dateDisplay: "November 5, 2026",
    time: "All Day",
    location: "Provincial DREAM Zone, Capitol Site, Batangas City",
    description:
      "The province-wide annual LGBTQIA+ celebration organized by the Provincial Government of Batangas (PSWDO) and PARINE Inc. Features a Grand Pride Parade symbolizing unity and support for LGBTQIA+ rights, a mental health presentation on stigma and resilience, Festival Queen & King Costume Competition, LGBTQIA+ Got Talent showcase, and recognition ceremonies.",
    category: "Advocacy",
    tags: ["Batangas Province", "Grand Parade", "Wagayway", "Annual"],
    image: "/images/gallery/EmpQueer-Image-116.jpg",
    link: "https://portal.batangas.gov.ph",
    featured: true,
  },
  {
    id: "kolorete-lpu-batangas-2026",
    title: "KOLORETE — LPU Batangas Pride 2026",
    dateISO: "2026-06-15",
    dateDisplay: "June 15, 2026",
    time: "TBA",
    location: "Lyceum of the Philippines University, Batangas",
    description:
      "Lyceum of the Philippines University Batangas' annual Pride celebration — a campus-wide explosion of color, identity, and community featuring performances, exhibits, advocacy talks, and a showcase of LGBTQIA+ student voices.",
    category: "Cultural",
    tags: ["Batangas", "LPU", "Campus Pride", "Annual"],
    image: "/images/gallery/EmpQueer-Image-117.jpg",
    link: "https://lpubatangas.edu.ph",
    featured: false,
  },

  // ── NATIONAL EVENTS ────────────────────────────────────────────────────────
  {
    id: "metro-manila-pride-2026",
    title: "Metro Manila Pride 2026",
    dateISO: "2026-06-27",
    dateDisplay: "June 27, 2026",
    time: "All Day",
    location: "Metro Manila, Philippines (Multiple Venues)",
    description:
      "Asia's first and largest Pride event — started in June 1984. Metro Manila Pride attracts over 100,000 participants each year with concerts, film screenings, art exhibitions, a massive Pride March, and discussions on LGBTQ+ rights, mental health, and HIV/AIDS awareness.",
    category: "Pride",
    tags: ["National", "Metro Manila", "Pride March", "Annual"],
    image: "/images/gallery/EmpQueer-Image-118.jpg",
    link: "https://mmpride.org/",
    featured: false,
  },
  {
    id: "pride-ph-festival-2026",
    title: "LOV3LABAN — Pride PH Festival 2026",
    dateISO: "2026-06-28",
    dateDisplay: "June 28, 2026",
    time: "All Day",
    location: "Quezon City, Metro Manila (Venue TBA)",
    description:
      "Pride PH Festival returns with the LOV3LABAN spirit — a national Pride March, Pride Expo, live performances from LGBTQIA+ artists and drag performers, and Pride Villages spread across Quezon City. Organized by the Pride PH Coalition.",
    category: "Pride",
    tags: ["National", "Quezon City", "Pride March", "Annual"],
    image: "/images/gallery/EmpQueer-Image-109.jpg",
    link: "https://www.facebook.com/tfpridePH/",
    featured: false,
  },
  {
    id: "cebu-pride-2026",
    title: "Cebu Pride Festival 2026",
    dateISO: "2026-06-28",
    dateDisplay: "June 28, 2026",
    time: "All Day",
    location: "Cebu City, Cebu",
    description:
      "A month-long celebration (theme: Stand Proudly, Love Loudly!) culminating in the main Cebu City Pride Parade. Events include art fairs at Ayala Malls, drag performances, Mandaue Pride March, pride runs, BL community gatherings, and a Pride Picnic.",
    category: "Pride",
    tags: ["Cebu", "Regional", "Pride Parade", "Annual"],
    image: "/images/gallery/EmpQueer-Image-133.jpg",
    link: "https://www.facebook.com/cebupridefestival/",
    featured: false,
  },
  {
    id: "surftown-pride-2026",
    title: "Surftown Pride 2026",
    dateISO: "2026-06-07",
    dateDisplay: "June 7–9, 2026",
    time: "12:00 NN – 9:00 PM",
    location: "San Juan, La Union",
    description:
      "A 3-day LGBTQIA+ celebration in the surf capital of the Philippines under the #MakiAgos theme. Features activist talks, drag performances, the House of Nak showcase, voguing battles, pop-up markets, and the iconic Surftown Ball.",
    category: "Social",
    tags: ["La Union", "Regional", "Drag", "Annual"],
    image: "/images/gallery/EmpQueer-Image-132.jpg",
    link: "https://www.instagram.com/surftownpride/",
    featured: false,
  },
];

/* ─── Helpers ────────────────────────────────────────────────────────────── */

function isUpcoming(dateISO: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(dateISO) >= today;
}

const FILTERS: FilterKey[] = ["All", "Pride", "Advocacy", "Cultural", "Health", "Workshop", "Social"];

/* ─── Modal ──────────────────────────────────────────────────────────────── */

function EventModal({ event, onClose }: { event: Event; onClose: () => void }) {
  const cat = CAT[event.category];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl flex flex-col sm:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left — Image */}
        <div className="sm:w-5/12 shrink-0 relative min-h-[220px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover absolute inset-0"
          />
          {event.featured && (
            <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow">
              <Star size={11} fill="currentColor" /> Featured
            </div>
          )}
        </div>

        {/* Right — Content */}
        <div className="flex-1 overflow-y-auto p-7 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>

          <span className={`inline-flex items-center gap-1.5 border text-xs font-semibold px-3 py-1 rounded-full mb-4 ${cat.pill}`}>
            <span className={`w-2 h-2 rounded-full ${cat.dot} animate-pulse`} />
            {event.category}
          </span>

          <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-5 leading-snug pr-8">
            {event.title}
          </h2>

          <div className="space-y-2.5 mb-5 text-sm text-[#474747]">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-[#3A3C51] shrink-0" />
              <span>{event.dateDisplay}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[#3A3C51] shrink-0" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="text-[#3A3C51] shrink-0 mt-0.5" />
              <span>{event.location}</span>
            </div>
          </div>

          <p className="text-[#474747] text-sm leading-relaxed mb-6">
            {event.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-7">
            {event.tags.map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {event.link && (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 border font-semibold text-sm px-6 py-2.5 rounded-xl transition-opacity hover:opacity-80 ${cat.pill}`}
            >
              Learn More <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Event Card ─────────────────────────────────────────────────────────── */

function EventCard({ event, onClick }: { event: Event; onClick: () => void }) {
  const cat = CAT[event.category];

  return (
    <button
      onClick={onClick}
      className={`text-left w-full rounded-2xl border overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer ${cat.cardBg} ${cat.border}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-44">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {event.featured && (
          <div className="absolute top-2.5 left-2.5 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
            <Star size={9} fill="currentColor" /> Featured
          </div>
        )}
        {/* Category pill — top right with pulsing dot */}
        <div className="absolute top-2.5 right-2.5">
          <span className={`inline-flex items-center gap-1.5 border text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm backdrop-blur-sm ${cat.pill}`}>
            <span className={`w-2 h-2 rounded-full ${cat.dot} animate-pulse shrink-0`} />
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
            View details →
          </span>
        </div>
      </div>
    </button>
  );
}

/* ─── Event Submit Form ──────────────────────────────────────────────────── */

const CATEGORIES: CategoryKey[] = ["Pride", "Health", "Workshop", "Advocacy", "Cultural", "Social"];

function EventSubmitForm() {
  const [form, setForm] = useState({
    eventTitle: "",
    eventDate: "",
    eventTime: "",
    location: "",
    category: "" as CategoryKey | "",
    description: "",
    tags: "",
    imageUrl: "",
    eventLink: "",
    organizerName: "",
    organizerEmail: "",
    organizerPhone: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const apiUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL ?? "https://contact-form-gamma-seven.vercel.app";
      const message = [
        `EVENT SUBMISSION`,
        ``,
        `Event Title: ${form.eventTitle}`,
        `Date: ${form.eventDate}`,
        `Time: ${form.eventTime}`,
        `Location: ${form.location}`,
        `Category: ${form.category}`,
        `Tags: ${form.tags}`,
        `Image URL: ${form.imageUrl || "Not provided"}`,
        `Event Link: ${form.eventLink || "Not provided"}`,
        ``,
        `Description:`,
        form.description,
        ``,
        `Organizer: ${form.organizerName}`,
        `Phone: ${form.organizerPhone || "Not provided"}`,
      ].join("\n");

      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.organizerName,
          email: form.organizerEmail,
          message,
          website: "empowerqueerhub.com — Event Submission",
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputCls = "w-full bg-white border border-gray-200 text-[#3A3C51] placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]/20 transition-colors";
  const labelCls = "block text-xs font-semibold text-[#3A3C51] uppercase tracking-wider mb-1.5";

  return (
    <section className="py-20 bg-[#F3F3F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_560px] gap-12 items-start">

          {/* ── Left ── */}
          <div className="lg:sticky lg:top-28">
            <p className="text-[#7C3AED] font-semibold tracking-widest uppercase text-sm mb-3">Community Submissions</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#3A3C51] leading-tight mb-4">
              Submit an Event
            </h2>
            <p className="text-[#474747] text-lg leading-relaxed mb-8">
              Share your community event, workshop, or advocacy activity with the EmpowerQueer Hub network — and reach LGBTQIA+ Filipinos across Batangas and beyond.
            </p>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/3802075/pexels-photo-3802075.jpeg"
                alt="Community gathering"
                className="w-full h-72 object-cover"
              />
            </div>

            <p className="text-[#474747] text-sm leading-relaxed">
              Every event submitted to EmpowerQueer Hub goes through a quick review to ensure it aligns with our community values of inclusion, safety, and dignity. Once approved, your event will be visible to our 950+ members and featured across our network. We welcome Pride celebrations, health workshops, advocacy sessions, livelihood trainings, and any gathering that uplifts LGBTQIA+ voices.
            </p>
          </div>

          {/* ── Right — Form ── */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7C3AED] to-[#EC4899] rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={28} className="text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#3A3C51] mb-3">Event Submitted!</h3>
                <p className="text-[#474747] text-sm leading-relaxed max-w-xs mx-auto">
                  Thank you for sharing with the community. We&rsquo;ll review your submission and get back to you within 24–48 hours.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ eventTitle: "", eventDate: "", eventTime: "", location: "", category: "", description: "", tags: "", imageUrl: "", eventLink: "", organizerName: "", organizerEmail: "", organizerPhone: "" }); }}
                  className="mt-6 text-[#7C3AED] text-sm font-semibold hover:underline"
                >
                  Submit another event
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#3A3C51] mb-1">Event Details</h3>
                  <p className="text-gray-400 text-xs mb-5">Fields marked <span className="text-[#EC4899]">*</span> are required.</p>
                </div>

                {/* Event Title */}
                <div>
                  <label className={labelCls}>Event Title <span className="text-[#EC4899]">*</span></label>
                  <input name="eventTitle" value={form.eventTitle} onChange={handleChange} required placeholder="e.g. Batangas City Pride Month 2026" className={inputCls} />
                </div>

                {/* Date + Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Date <span className="text-[#EC4899]">*</span></label>
                    <input type="date" name="eventDate" value={form.eventDate} onChange={handleChange} required className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Time <span className="text-[#EC4899]">*</span></label>
                    <input name="eventTime" value={form.eventTime} onChange={handleChange} required placeholder="e.g. 9:00 AM onwards" className={inputCls} />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className={labelCls}>Location / Venue <span className="text-[#EC4899]">*</span></label>
                  <input name="location" value={form.location} onChange={handleChange} required placeholder="e.g. Batangas City Convention Center" className={inputCls} />
                </div>

                {/* Category */}
                <div>
                  <label className={labelCls}>Category <span className="text-[#EC4899]">*</span></label>
                  <select name="category" value={form.category} onChange={handleChange} required className={inputCls}>
                    <option value="" disabled>Select a category</option>
                    {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className={labelCls}>Description <span className="text-[#EC4899]">*</span></label>
                  <textarea name="description" value={form.description} onChange={handleChange} required rows={4} placeholder="Describe your event — what it is, who it's for, and what attendees can expect." className={`${inputCls} resize-none`} />
                </div>

                {/* Tags */}
                <div>
                  <label className={labelCls}>Tags</label>
                  <input name="tags" value={form.tags} onChange={handleChange} placeholder="e.g. Batangas, Pride Walk, Annual (comma-separated)" className={inputCls} />
                  <p className="text-gray-400 text-xs mt-1">Separate tags with commas. These help members discover your event.</p>
                </div>

                {/* Image URL */}
                <div>
                  <label className={labelCls}>Event Image URL</label>
                  <input type="url" name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="https://example.com/event-image.jpg" className={inputCls} />
                  <p className="text-gray-400 text-xs mt-1">Optional. Paste a direct link to an event banner or photo.</p>
                </div>

                {/* Event Link */}
                <div>
                  <label className={labelCls}>Event Page / Registration Link</label>
                  <input type="url" name="eventLink" value={form.eventLink} onChange={handleChange} placeholder="https://facebook.com/events/..." className={inputCls} />
                </div>

                <div className="border-t border-gray-100 pt-5">
                  <h4 className="font-serif text-base font-bold text-[#3A3C51] mb-4">Your Contact Info</h4>

                  {/* Organizer Name */}
                  <div className="mb-4">
                    <label className={labelCls}>Your Name / Organization <span className="text-[#EC4899]">*</span></label>
                    <input name="organizerName" value={form.organizerName} onChange={handleChange} required placeholder="e.g. Wagayway Equality Inc." className={inputCls} />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Email <span className="text-[#EC4899]">*</span></label>
                      <input type="email" name="organizerEmail" value={form.organizerEmail} onChange={handleChange} required placeholder="you@example.com" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Phone</label>
                      <input name="organizerPhone" value={form.organizerPhone} onChange={handleChange} placeholder="+63 9XX XXX XXXX" className={inputCls} />
                    </div>
                  </div>
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again or email us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:opacity-90 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-opacity inline-flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  {status === "loading" ? "Submitting..." : "Submit Event"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function EventsPage() {
  const [filter, setFilter] = useState<FilterKey>("All");
  const [selected, setSelected] = useState<Event | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  const upcoming = ALL_EVENTS.filter((e) => isUpcoming(e.dateISO)).sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(a.dateISO).getTime() - new Date(b.dateISO).getTime();
  });

  const filtered = filter === "All" ? upcoming : upcoming.filter((e) => e.category === filter);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[400px] flex items-end pt-[75px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/gallery/Batangas-Pride-Month-Celebration-2023.jpg"
          alt="Events"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A2E]/85 via-[#1A0A2E]/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-5">
            <Tag size={13} className="text-[#A9D6B6]" />
            <span className="text-white/90 text-xs font-semibold uppercase tracking-widest">Community Events</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-3 leading-tight">
            Events
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            LGBTQIA+ gatherings, advocacy events, and celebrations — with priority on Batangas City and Batangas Province.
          </p>
        </div>
      </section>

      {/* ── Category Filter + Grid ─────────────────────────────────────────── */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map((f) => {
              const isActive = filter === f;
              const catStyle = f !== "All" ? CAT[f as CategoryKey] : null;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`inline-flex items-center gap-1.5 border text-sm font-semibold px-4 py-2 rounded-full transition-all ${
                    isActive
                      ? catStyle
                        ? `${catStyle.pill} shadow-sm`
                        : "bg-[#3A3C51] border-[#3A3C51] text-white shadow-sm"
                      : "bg-white border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {catStyle && (
                    <span className={`w-2 h-2 rounded-full ${catStyle.dot} ${isActive ? "animate-pulse" : "opacity-40"}`} />
                  )}
                  {f}
                </button>
              );
            })}
          </div>

          {/* Events grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-[#474747] text-lg font-serif mb-2">No upcoming events in this category.</p>
              <p className="text-gray-400 text-sm">Check back soon — new events are added regularly.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((event) => (
                <EventCard key={event.id} event={event} onClick={() => setSelected(event)} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Submit Event Form ──────────────────────────────────────────────── */}
      <EventSubmitForm />

      <Footer />

      {/* ── Modal ─────────────────────────────────────────────────────────── */}
      {selected && <EventModal event={selected} onClose={closeModal} />}
    </main>
  );
}
