"use client";

import { useState, useEffect, useRef } from "react";
import Script from 'next/script';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Phone, MapPin, ExternalLink, Globe, Heart, Activity, Shield, Users, Star,
  Stethoscope, Building2, Scale, X, Send, CheckCircle, Upload,
} from "lucide-react";

import { ALL_LISTINGS, Listing } from "@/data/directory";

/* ─── Categories ─────────────────────────────────────────────────────────── */

const CATEGORIES = [
  { id: "community-center", label: "Community Center", icon: Building2, color: "text-[#7C3AED]", bg: "bg-[#F5F0FF]", border: "border-[#E9D5FF]" },
  { id: "advocacy-rights", label: "Advocacy & Rights", icon: Scale, color: "text-[#2563EB]", bg: "bg-[#EFF6FF]", border: "border-[#BFDBFE]" },
  { id: "mental-health", label: "Mental Health", icon: Heart, color: "text-[#EC4899]", bg: "bg-[#FDF2F8]", border: "border-[#FBCFE8]" },
  { id: "hiv-services", label: "HIV Services", icon: Activity, color: "text-[#DC2626]", bg: "bg-[#FEF2F2]", border: "border-[#FECACA]" },
  { id: "sexual-health", label: "Sexual Health", icon: Shield, color: "text-[#059669]", bg: "bg-[#F0FDF4]", border: "border-[#BBF7D0]" },
  { id: "healthcare", label: "Healthcare Resources", icon: Stethoscope, color: "text-[#0891B2]", bg: "bg-[#ECFEFF]", border: "border-[#A5F3FC]" },
  { id: "diagnostic", label: "Diagnostic & Testing", icon: Star, color: "text-[#D97706]", bg: "bg-[#FFFBEB]", border: "border-[#FDE68A]" },
  { id: "youth-services", label: "Youth Services", icon: Users, color: "text-[#7C3AED]", bg: "bg-[#F5F0FF]", border: "border-[#E9D5FF]" },
  { id: "support-resources", label: "Support Resources", icon: Heart, color: "text-[#059669]", bg: "bg-[#F0FDF4]", border: "border-[#BBF7D0]" },
];


/* ─── Listing Card ────────────────────────────────────────────────────────── */

function ListingCard({ listing, onOpen }: { listing: Listing; onOpen: (l: Listing) => void }) {
  const cat = CATEGORIES.find(c => c.id === listing.category);
  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#A9D6B6] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      onClick={() => onOpen(listing)}
    >
      <div className="flex items-start gap-0">
        <div className={`shrink-0 w-16 flex items-center justify-center ${cat?.bg ?? "bg-[#F5F0FF]"}`} style={{ minHeight: "140px" }}>
          {cat && <cat.icon size={22} className={cat.color} />}
        </div>
        <div className="flex-1 p-5">
          <div className="flex flex-wrap gap-2 mb-2">
            {listing.featured && (
              <span className="bg-yellow-100 border border-yellow-300 text-yellow-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">Featured</span>
            )}
            <span className="bg-[#A9D6B6]/30 border border-[#A9D6B6] text-[#3A3C51] text-xs px-3 py-0.5 rounded-full">
              {cat?.label ?? listing.category}
            </span>
          </div>
          <h3 className="font-serif text-base font-bold text-[#3A3C51] mb-1 leading-snug line-clamp-2 hover:text-[#7C3AED] transition-colors">
            {listing.name}
          </h3>
          <p className="text-[#474747] text-sm leading-relaxed line-clamp-2 mb-2">{listing.description}</p>
          <div className="flex flex-wrap gap-3 text-xs text-[#474747]">
            {listing.phone && (
              <span className="flex items-center gap-1"><Phone size={11} className="text-[#7C3AED]" />{listing.phone}</span>
            )}
            {listing.address && (
              <span className="flex items-center gap-1"><MapPin size={11} className="text-[#EC4899]" />{listing.address}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Listing Modal ───────────────────────────────────────────────────────── */

function ListingModal({ listing, onClose }: { listing: Listing; onClose: () => void }) {
  const cat = CATEGORIES.find(c => c.id === listing.category);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
          <X size={15} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left */}
          <div className={`md:w-2/5 shrink-0 ${cat?.bg ?? "bg-[#F5F0FF]"} rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none flex flex-col items-center justify-center gap-4 p-10`} style={{ minHeight: "260px" }}>
            {cat && (
              <div className="w-20 h-20 bg-white/60 rounded-2xl flex items-center justify-center">
                <cat.icon size={36} className={cat.color} />
              </div>
            )}
            <p className="text-center font-semibold text-[#3A3C51] text-sm">{listing.name}</p>
            {listing.address && (
              <p className="text-center text-xs text-[#474747] bg-white/50 rounded-lg px-3 py-1.5 flex items-start gap-1.5">
                <MapPin size={11} className="text-[#EC4899] mt-0.5 shrink-0" />
                {listing.address}
              </p>
            )}
          </div>

          {/* Right */}
          <div className="flex-1 p-7">
            <div className="flex flex-wrap gap-2 mb-4">
              {listing.featured && (
                <span className="bg-yellow-100 border border-yellow-300 text-yellow-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">Featured</span>
              )}
              {cat && (
                <span className={`${cat.bg} border ${cat.border} ${cat.color} text-xs px-3 py-0.5 rounded-full font-medium`}>{cat.label}</span>
              )}
            </div>

            <h3 className="font-serif text-xl font-bold text-[#3A3C51] mb-4 pr-8">{listing.name}</h3>
            <p className="text-[#474747] text-sm leading-relaxed mb-5">{listing.description}</p>

            {/* Contact details */}
            <div className="space-y-3 mb-5">
              {listing.hotline && (
                <a href={`tel:${listing.hotline}`} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={14} className="text-red-500" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide font-semibold">Hotline</p>
                    <p className="text-[#3A3C51] font-bold text-sm group-hover:text-[#7C3AED] transition-colors">{listing.hotline}</p>
                  </div>
                </a>
              )}
              {listing.phone && (
                <a href={`tel:${listing.phone}`} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-[#F5F0FF] rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={14} className="text-[#7C3AED]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide font-semibold">Phone</p>
                    <p className="text-[#3A3C51] font-bold text-sm group-hover:text-[#7C3AED] transition-colors">{listing.phone}</p>
                  </div>
                </a>
              )}
              {listing.address && (
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(listing.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 bg-[#FDF2F8] rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={14} className="text-[#EC4899]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide font-semibold">Address</p>
                    <p className="text-[#3A3C51] text-sm group-hover:text-[#7C3AED] transition-colors leading-snug">{listing.address}</p>
                  </div>
                </a>
              )}
              {listing.website && (
                <a href={listing.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-[#ECFEFF] rounded-lg flex items-center justify-center shrink-0">
                    <Globe size={14} className="text-[#0891B2]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide font-semibold">Website</p>
                    <p className="text-[#0891B2] text-sm group-hover:text-[#7C3AED] transition-colors truncate">{listing.website}</p>
                  </div>
                </a>
              )}
            </div>

            {listing.tags && listing.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-5">
                {listing.tags.map(t => (
                  <span key={t} className="bg-gray-100 text-gray-500 text-[10px] px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
            )}

            {listing.website && (
              <a href={listing.website} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
                <ExternalLink size={15} /> Visit Website
              </a>
            )}
            {!listing.website && listing.phone && (
              <a href={`tel:${listing.phone}`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
                <Phone size={15} /> Call Now
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Submit Form ────────────────────────────────────────────────────────── */

const CONTACT_API = process.env.NEXT_PUBLIC_CONTACT_API_URL ?? "";

function DirectorySubmitForm() {
  const [form, setForm] = useState({
    name: "", category: "", description: "", address: "", phone: "", website: "",
    submitterName: "", submitterEmail: "",
  });
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState('')
  const widgetRef = useRef<HTMLDivElement>(null)
  const widgetRendered = useRef(false)

  function initTurnstile() {
    if (widgetRef.current && !widgetRendered.current) {
      widgetRendered.current = true
      ;(window as any).turnstile?.render(widgetRef.current, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '',
        callback: (token: string) => setTurnstileToken(token),
        'expired-callback': () => setTurnstileToken(''),
        'error-callback': () => setTurnstileToken(''),
      })
    }
  }

  function handleLogoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setLogoFile(file);
    setLogoPreview(URL.createObjectURL(file));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const body = {
        name: form.submitterName,
        email: form.submitterEmail,
        subject: `Directory Submission: ${form.name}`,
        message: `
Service / Organization Name: ${form.name}
Category: ${form.category}
Description: ${form.description}
Address: ${form.address}
Phone: ${form.phone}
Website: ${form.website}
Logo / Image: ${logoFile ? logoFile.name : "None"}

Submitted by: ${form.submitterName} (${form.submitterEmail})
        `.trim(),
      };
      const res = await fetch(`${CONTACT_API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Failed");
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-500" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#3A3C51] mb-2">Thank You!</h3>
        <p className="text-[#474747]">Your listing has been received. We&apos;ll review it and add it to the directory.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Service / Organization Name *</label>
          <input required type="text" placeholder="e.g. Batangas HIV Testing Center"
            value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Category *</label>
          <select required value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition bg-white">
            <option value="">Select a category</option>
            {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Description *</label>
        <textarea required rows={3} placeholder="Briefly describe the services offered and who they serve..."
          value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition resize-none" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Address</label>
          <input type="text" placeholder="Street, City, Province, Philippines"
            value={form.address} onChange={e => setForm(p => ({ ...p, address: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Phone Number</label>
          <input type="text" placeholder="e.g. 09171234567 or (02) 8123-4567"
            value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Website</label>
          <input type="url" placeholder="https://example.com"
            value={form.website} onChange={e => setForm(p => ({ ...p, website: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Logo / Image</label>
          {logoPreview ? (
            <div className="relative rounded-xl overflow-hidden border border-gray-200 h-[52px] flex items-center px-3 gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logoPreview} alt="Logo preview" className="h-9 w-9 object-cover rounded-lg" />
              <span className="text-sm text-[#3A3C51] truncate flex-1">{logoFile?.name}</span>
              <button type="button" onClick={() => { setLogoFile(null); setLogoPreview(null); }}
                className="w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center shrink-0">
                <X size={12} />
              </button>
            </div>
          ) : (
            <label className="flex items-center gap-3 border-2 border-dashed border-gray-200 rounded-xl px-4 py-3.5 cursor-pointer hover:border-[#7C3AED] hover:bg-[#F5F0FF]/30 transition">
              <Upload size={16} className="text-gray-400 shrink-0" />
              <span className="text-sm text-gray-400">Upload logo or image</span>
              <input type="file" accept="image/*" className="hidden" onChange={handleLogoChange} />
            </label>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Your Name *</label>
          <input required type="text" placeholder="Full name"
            value={form.submitterName} onChange={e => setForm(p => ({ ...p, submitterName: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Your Email *</label>
          <input required type="email" placeholder="you@example.com"
            value={form.submitterEmail} onChange={e => setForm(p => ({ ...p, submitterEmail: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition" />
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div ref={widgetRef} className="flex justify-center" />
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        onLoad={initTurnstile}
      />
      <button type="submit" disabled={sending || !turnstileToken}
        className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60">
        {sending ? "Submitting…" : <><Send size={16} /> Submit Listing</>}
      </button>
    </form>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function DirectoryPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeListing, setActiveListing] = useState<Listing | null>(null);
  const [communityListings, setCommunityListings] = useState<Array<{ id: string; data: Record<string, unknown>; submittedBy?: string }>>([]);

  useEffect(() => {
    fetch("/api/public/submissions?type=DIRECTORY")
      .then((r) => r.ok ? r.json() : { submissions: [] })
      .then((d) => setCommunityListings(d.submissions ?? []))
      .catch(() => {});
  }, []);

  const visibleCategories = activeCategory
    ? CATEGORIES.filter(c => c.id === activeCategory)
    : CATEGORIES;

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[600px] flex flex-col justify-end border-b border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/gallery/EmpQueer-Image-151.jpg" alt="Directory" className="absolute inset-0 w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A2E]/90 via-[#1A0A2E]/55 to-[#1A0A2E]/25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Service Directory</span>
          <h1 className="font-serif text-5xl font-bold text-white mb-4">Find LGBTQIA+ Services Near You</h1>
          <p className="text-white/75 text-xl leading-relaxed max-w-2xl">
            Trusted LGBTQIA+-affirming clinics, hotlines, community centers, and support organizations across Batangas Province and the Philippines. Also explore <a href="/resources" className="underline hover:text-white transition-colors">our resource library</a> or <a href="/submit" className="underline hover:text-white transition-colors">submit a new listing</a>. For global HIV data, see <a href="https://www.unaids.org/en/resources/fact-sheet" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">UNAIDS</a>.
          </p>
        </div>
      </section>

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
                      All Listings
                      <span className={`ml-auto text-xs rounded-full px-2 py-0.5 ${!activeCategory ? "bg-white/20 text-white" : "bg-gray-100 text-gray-400"}`}>
                        {ALL_LISTINGS.length}
                      </span>
                    </button>
                  </li>
                  {CATEGORIES.map((cat) => {
                    const Icon = cat.icon;
                    const count = ALL_LISTINGS.filter(l => l.category === cat.id).length;
                    const isActive = activeCategory === cat.id;
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

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-400 mb-3 font-semibold uppercase tracking-wider">Add a Listing</p>
                  <p className="text-xs text-gray-400 leading-relaxed mb-3">Know an LGBTQIA+-affirming service that should be here?</p>
                  <a href="#submit-listing"
                    className="block text-center bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity">
                    Submit Now
                  </a>
                </div>
              </div>
            </aside>

            {/* Listings by Category */}
            <div className="lg:col-span-3 space-y-14">
              {visibleCategories.map((cat) => {
                const Icon = cat.icon;
                const items = ALL_LISTINGS.filter(l => l.category === cat.id);
                if (items.length === 0) return null;
                return (
                  <div key={cat.id} id={cat.id}>
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                      <div className={`w-9 h-9 ${cat.bg} border ${cat.border} rounded-xl flex items-center justify-center`}>
                        <Icon size={16} className={cat.color} />
                      </div>
                      <div>
                        <h2 className="font-serif text-xl font-bold text-[#3A3C51]">{cat.label}</h2>
                        <p className="text-gray-400 text-xs">{items.length} listing{items.length !== 1 ? "s" : ""}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {items.map(listing => <ListingCard key={listing.id} listing={listing} onOpen={setActiveListing} />)}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Submit Form */}
      <section id="submit-listing" className="py-20 bg-gradient-to-br from-[#F5F0FF] to-[#FDF2F8] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_560px] gap-12 items-start">
            {/* Left */}
            <div className="lg:sticky lg:top-28">
              <p className="text-[#7C3AED] font-semibold tracking-widest uppercase text-sm mb-3">Community Directory</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#3A3C51] leading-tight mb-4">Submit a Service Listing</h2>
              <p className="text-[#474747] text-lg leading-relaxed mb-8">Know an LGBTQIA+-affirming clinic, support group, hotline, or organization that should be listed here? Help us grow this directory.</p>
              <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.pexels.com/photos/12633781/pexels-photo-12633781.jpeg" alt="Community directory listing" className="w-full h-72 object-cover" />
              </div>
              <p className="text-[#474747] text-sm leading-relaxed">All listings are verified before being added. We list healthcare providers, community centers, support organizations, hotlines, and advocacy groups that affirm LGBTQIA+ dignity.</p>
            </div>
            {/* Right */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <DirectorySubmitForm />
            </div>
          </div>
        </div>
      </section>

      {communityListings.length > 0 && (
        <section className="py-14 bg-[#F8F5FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-2">Community-Submitted Listings</h2>
            <p className="text-[#474747] text-sm mb-8">Service listings shared by community members and approved by the team.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityListings.map((sub) => {
                const d = sub.data;
                const name = (d.name ?? d.title ?? "Unnamed Service") as string;
                const org = (d.org ?? d.organization ?? sub.submittedBy ?? "") as string;
                const description = (d.description ?? "") as string;
                const phone = (d.phone ?? "") as string;
                const website = (d.website ?? d.link ?? "") as string;
                const tags = Array.isArray(d.tags) ? (d.tags as string[]) : typeof d.tags === "string" ? [d.tags] : [];
                return (
                  <div key={sub.id} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <span className="inline-block bg-[#F5F0FF] text-[#7C3AED] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">Community</span>
                    <h3 className="font-serif text-base font-bold text-[#3A3C51] mb-1 leading-snug line-clamp-2">{name}</h3>
                    {org && <p className="text-xs text-[#7C3AED] font-medium mb-2">{org}</p>}
                    {description && <p className="text-xs text-[#474747] leading-relaxed line-clamp-3 mb-3">{description}</p>}
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {tags.slice(0, 3).map((t) => (
                          <span key={t} className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{t}</span>
                        ))}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-3">
                      {phone && (
                        <a href={`tel:${phone}`} className="inline-flex items-center gap-1 text-xs font-semibold text-[#059669] hover:underline">
                          <Phone size={11} /> {phone}
                        </a>
                      )}
                      {website && (
                        <a href={website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-[#7C3AED] hover:underline">
                          <ExternalLink size={11} /> Visit website
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />

      {activeListing && <ListingModal listing={activeListing} onClose={() => setActiveListing(null)} />}
    </main>
  );
}
