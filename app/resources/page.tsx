"use client";

import { useState, useEffect, useRef } from "react";
import Script from 'next/script';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ExternalLink, FileText, X, BookOpen, Heart, Shield, Users, Mic2, Activity, Scale, Star, Upload, CheckCircle, Send } from "lucide-react";

import { ALL_RESOURCES, Resource } from "@/data/resources";

/* ─── Categories ─────────────────────────────────────────────────────────── */

const CATEGORIES = [
  { id: "mental-health", label: "Mental Health", icon: Heart, color: "text-[#7C3AED]", bg: "bg-[#F5F0FF]", border: "border-[#E9D5FF]" },
  { id: "hiv-services", label: "HIV Services", icon: Activity, color: "text-[#EC4899]", bg: "bg-[#FDF2F8]", border: "border-[#FBCFE8]" },
  { id: "advocacy-rights", label: "Advocacy & Rights", icon: Scale, color: "text-[#2563EB]", bg: "bg-[#EFF6FF]", border: "border-[#BFDBFE]" },
  { id: "youth-services", label: "Youth Services", icon: Star, color: "text-[#D97706]", bg: "bg-[#FFFBEB]", border: "border-[#FDE68A]" },
  { id: "sexual-health", label: "Sexual Health", icon: Shield, color: "text-[#059669]", bg: "bg-[#F0FDF4]", border: "border-[#BBF7D0]" },
  { id: "support-resources", label: "Support Resources", icon: Users, color: "text-[#7C3AED]", bg: "bg-[#F5F0FF]", border: "border-[#E9D5FF]" },
  { id: "community-voices", label: "Community Voices", icon: Mic2, color: "text-[#EC4899]", bg: "bg-[#FDF2F8]", border: "border-[#FBCFE8]" },
  { id: "education", label: "Education & Guides", icon: BookOpen, color: "text-[#0891B2]", bg: "bg-[#ECFEFF]", border: "border-[#A5F3FC]" },
];


/* ─── Resource Card ──────────────────────────────────────────────────────── */

function ResourceCard({ res, onOpen }: { res: Resource; onOpen: (r: Resource) => void }) {
  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#A9D6B6] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      onClick={() => onOpen(res)}
    >
      <div className="flex items-start gap-0">
        {res.cover ? (
          <div className="shrink-0 w-28" style={{ minHeight: "140px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={res.cover} alt={res.title} className="w-full h-full object-cover" style={{ minHeight: "140px" }} />
          </div>
        ) : (
          <div className="shrink-0 w-16 flex items-center justify-center bg-gradient-to-br from-[#F5F0FF] to-[#FDF2F8]" style={{ minHeight: "140px" }}>
            <FileText size={24} className="text-[#7C3AED]/40" />
          </div>
        )}
        <div className="flex-1 p-5">
          <div className="flex flex-wrap gap-2 mb-2">
            {res.featured && (
              <span className="bg-yellow-100 border border-yellow-300 text-yellow-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">Featured</span>
            )}
            <span className="bg-[#A9D6B6]/30 border border-[#A9D6B6] text-[#3A3C51] text-xs px-3 py-0.5 rounded-full">
              {CATEGORIES.find(c => c.id === res.category)?.label ?? res.category}
            </span>
          </div>
          <h3 className="font-serif text-base font-bold text-[#3A3C51] mb-1 leading-snug line-clamp-2 hover:text-[#7C3AED] transition-colors">
            {res.title}
          </h3>
          <p className="text-[#474747] text-xs mb-2 font-medium">Source: {res.org}</p>
          <p className="text-[#474747] text-sm leading-relaxed line-clamp-2">{res.description}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Resource Modal ─────────────────────────────────────────────────────── */

function ResourceModal({ res, onClose }: { res: Resource; onClose: () => void }) {
  const href = res.pdf ?? res.link ?? "#";
  const cat = CATEGORIES.find(c => c.id === res.category);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
        >
          <X size={15} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left — Image */}
          <div className="md:w-2/5 shrink-0 bg-gradient-to-br from-[#F5F0FF] to-[#FDF2F8] rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden" style={{ minHeight: "260px" }}>
            {res.cover ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={res.cover} alt={res.title} className="w-full h-full object-cover" style={{ minHeight: "260px" }} />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-8" style={{ minHeight: "260px" }}>
                <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center">
                  <FileText size={32} className="text-[#7C3AED]/50" />
                </div>
                <p className="text-[#7C3AED]/60 text-sm text-center font-medium">{res.org}</p>
              </div>
            )}
          </div>

          {/* Right — Details */}
          <div className="flex-1 p-7">
            <div className="flex flex-wrap gap-2 mb-4">
              {res.featured && (
                <span className="bg-yellow-100 border border-yellow-300 text-yellow-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">Featured</span>
              )}
              {cat && (
                <span className={`${cat.bg} border ${cat.border} ${cat.color} text-xs px-3 py-0.5 rounded-full font-medium`}>
                  {cat.label}
                </span>
              )}
            </div>

            <h3 className="font-serif text-xl font-bold text-[#3A3C51] mb-2 leading-snug pr-8">{res.title}</h3>
            <p className="text-[#7C3AED] text-xs font-semibold mb-4 uppercase tracking-wide">Source: {res.org}</p>
            <p className="text-[#474747] text-sm leading-relaxed mb-5">{res.description}</p>

            {res.tags && res.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-6">
                {res.tags.map(t => (
                  <span key={t} className="bg-gray-100 text-gray-500 text-[10px] px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
            )}

            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              {res.pdf ? <><FileText size={15} /> Download PDF</> : <><ExternalLink size={15} /> Visit Resource</>}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Submit Form ────────────────────────────────────────────────────────── */

const CONTACT_API = process.env.NEXT_PUBLIC_CONTACT_API_URL ?? "";

function ResourceSubmitForm() {
  const [form, setForm] = useState({
    title: "", org: "", category: "", description: "", link: "", submitterName: "", submitterEmail: "",
  });
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
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

  function handleCoverChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setCoverFile(file);
    setCoverPreview(URL.createObjectURL(file));
  }

  function handlePdfChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setPdfFile(file);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const body = {
        name: form.submitterName,
        email: form.submitterEmail,
        subject: `Resource Submission: ${form.title}`,
        message: `
Resource Title: ${form.title}
Organization / Source: ${form.org}
Category: ${form.category}
Description: ${form.description}
Link: ${form.link}
Cover Image: ${coverFile ? coverFile.name : "None"}
PDF / File: ${pdfFile ? pdfFile.name : "None"}

Submitted by: ${form.submitterName} (${form.submitterEmail})
        `.trim(),
      };
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "RESOURCE",
          turnstileToken,
          data: {
            title: form.title,
            org: form.org,
            category: form.category,
            description: form.description,
            link: form.link || null,
            coverFile: coverFile ? coverFile.name : null,
            pdfFile: pdfFile ? pdfFile.name : null,
            submitterName: form.submitterName,
          },
          submittedBy: form.submitterEmail,
        }),
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
        <p className="text-[#474747]">Your resource submission has been received. We&apos;ll review it and add it to the library soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Resource Title *</label>
          <input
            required
            type="text"
            placeholder="e.g. LGBTQ+ Mental Health Toolkit"
            value={form.title}
            onChange={e => setForm(p => ({ ...p, title: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Organization / Source *</label>
          <input
            required
            type="text"
            placeholder="e.g. WHO, Trevor Project, Wagayway Equality"
            value={form.org}
            onChange={e => setForm(p => ({ ...p, org: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Category *</label>
          <select
            required
            value={form.category}
            onChange={e => setForm(p => ({ ...p, category: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition bg-white"
          >
            <option value="">Select a category</option>
            {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Link / URL</label>
          <input
            type="url"
            placeholder="https://example.com/resource"
            value={form.link}
            onChange={e => setForm(p => ({ ...p, link: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Description *</label>
        <textarea
          required
          rows={4}
          placeholder="Briefly describe what this resource covers and who it's for..."
          value={form.description}
          onChange={e => setForm(p => ({ ...p, description: e.target.value }))}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition resize-none"
        />
      </div>

      {/* File Uploads */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cover Image */}
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Cover Image</label>
          {coverPreview ? (
            <div className="relative rounded-xl overflow-hidden border border-gray-200" style={{ height: "140px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={coverPreview} alt="Cover preview" className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => { setCoverFile(null); setCoverPreview(null); }}
                className="absolute top-2 right-2 w-6 h-6 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow"
              >
                <X size={12} />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-200 rounded-xl p-6 cursor-pointer hover:border-[#7C3AED] hover:bg-[#F5F0FF]/30 transition" style={{ height: "140px" }}>
              <Upload size={20} className="text-gray-400" />
              <span className="text-sm text-gray-400">Upload cover image</span>
              <span className="text-xs text-gray-300">JPG, PNG, WebP</span>
              <input type="file" accept="image/*" className="hidden" onChange={handleCoverChange} />
            </label>
          )}
        </div>

        {/* PDF Upload */}
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">PDF / Document</label>
          {pdfFile ? (
            <div className="flex items-center gap-3 border border-gray-200 rounded-xl p-4" style={{ height: "140px" }}>
              <div className="w-10 h-10 bg-[#F5F0FF] rounded-xl flex items-center justify-center shrink-0">
                <FileText size={18} className="text-[#7C3AED]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#3A3C51] truncate">{pdfFile.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{(pdfFile.size / 1024 / 1024).toFixed(1)} MB</p>
              </div>
              <button type="button" onClick={() => setPdfFile(null)} className="w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center shrink-0">
                <X size={12} />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-200 rounded-xl p-6 cursor-pointer hover:border-[#7C3AED] hover:bg-[#F5F0FF]/30 transition" style={{ height: "140px" }}>
              <Upload size={20} className="text-gray-400" />
              <span className="text-sm text-gray-400">Upload PDF or document</span>
              <span className="text-xs text-gray-300">PDF, DOC, DOCX</span>
              <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handlePdfChange} />
            </label>
          )}
        </div>
      </div>

      {/* Submitter Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Your Name *</label>
          <input
            required
            type="text"
            placeholder="Full name"
            value={form.submitterName}
            onChange={e => setForm(p => ({ ...p, submitterName: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Your Email *</label>
          <input
            required
            type="email"
            placeholder="you@example.com"
            value={form.submitterEmail}
            onChange={e => setForm(p => ({ ...p, submitterEmail: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition"
          />
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div ref={widgetRef} className="flex justify-center" />
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        onLoad={initTurnstile}
      />
      <button
        type="submit"
        disabled={sending || !turnstileToken}
        className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {sending ? "Submitting…" : <><Send size={16} /> Submit Resource</>}
      </button>
    </form>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeResource, setActiveResource] = useState<Resource | null>(null);
  const [communityResources, setCommunityResources] = useState<Array<{ id: string; data: Record<string, unknown>; submittedBy?: string }>>([]);

  useEffect(() => {
    fetch("/api/public/submissions?type=RESOURCE")
      .then((r) => r.ok ? r.json() : { submissions: [] })
      .then((d) => setCommunityResources(d.submissions ?? []))
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
        <img src="/images/gallery/EmpQueer-Image-218.jpg" alt="Resources" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A2E]/90 via-[#1A0A2E]/55 to-[#1A0A2E]/25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Resource Library</span>
          <h1 className="font-serif text-5xl font-bold text-white mb-4">Resources</h1>
          <p className="text-white/75 text-xl leading-relaxed max-w-2xl">
            Guides, toolkits, and research for LGBTQIA+ wellbeing, safety, and advocacy — curated for LGBTQIA+ Filipinos and their allies. Explore our <a href="/directory" className="underline hover:text-white transition-colors">service directory</a> or <a href="/trainings" className="underline hover:text-white transition-colors">free trainings</a>, and check <a href="https://www.who.int/health-topics/mental-health" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">WHO mental health guidance</a> for additional support.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* ── Sidebar ── */}
            <aside className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24">
                <h3 className="font-semibold text-[#3A3C51] mb-4 uppercase tracking-wider text-sm">Categories</h3>
                <ul className="space-y-1">
                  <li>
                    <button
                      onClick={() => setActiveCategory(null)}
                      className={`w-full text-left text-sm px-3 py-2 rounded-xl transition-all flex items-center gap-2 ${!activeCategory ? "bg-[#7C3AED] text-white font-semibold" : "text-[#474747] hover:bg-[#F5F0FF] hover:text-[#7C3AED]"}`}
                    >
                      All Resources
                      <span className={`ml-auto text-xs rounded-full px-2 py-0.5 ${!activeCategory ? "bg-white/20 text-white" : "bg-gray-100 text-gray-400"}`}>
                        {ALL_RESOURCES.length}
                      </span>
                    </button>
                  </li>
                  {CATEGORIES.map((cat) => {
                    const Icon = cat.icon;
                    const count = ALL_RESOURCES.filter(r => r.category === cat.id).length;
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
                  <p className="text-xs text-gray-400 mb-3 font-semibold uppercase tracking-wider">Submit a Resource</p>
                  <p className="text-xs text-gray-400 leading-relaxed mb-3">Know a resource that should be here? Help us grow this library.</p>
                  <a
                    href="#submit-resource"
                    className="block text-center bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
                  >
                    Submit Now
                  </a>
                </div>
              </div>
            </aside>

            {/* ── Resources by Category ── */}
            <div className="lg:col-span-3 space-y-14">
              {visibleCategories.map((cat) => {
                const Icon = cat.icon;
                const items = ALL_RESOURCES.filter(r => r.category === cat.id);
                if (items.length === 0) return null;
                return (
                  <div key={cat.id} id={cat.id}>
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                      <div className={`w-9 h-9 ${cat.bg} border ${cat.border} rounded-xl flex items-center justify-center`}>
                        <Icon size={16} className={cat.color} />
                      </div>
                      <div>
                        <h2 className="font-serif text-xl font-bold text-[#3A3C51]">{cat.label}</h2>
                        <p className="text-gray-400 text-xs">{items.length} resource{items.length !== 1 ? "s" : ""}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {items.map(res => <ResourceCard key={res.id} res={res} onOpen={setActiveResource} />)}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Community Submissions */}
      {communityResources.length > 0 && (
        <section className="py-14 bg-[#F8F5FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-2">Community-Submitted Resources</h2>
            <p className="text-[#474747] text-sm mb-8">Resources shared by community members and approved by the team.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityResources.map((sub) => {
                const d = sub.data;
                const title = (d.title ?? "Untitled Resource") as string;
                const org = (d.organization ?? d.org ?? d.credit ?? sub.submittedBy ?? "") as string;
                const description = (d.description ?? "") as string;
                const link = (d.link ?? "") as string;
                const tags = Array.isArray(d.tags) ? (d.tags as string[]) : typeof d.tags === "string" ? [d.tags] : [];
                return (
                  <div key={sub.id} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <span className="inline-block bg-[#F5F0FF] text-[#7C3AED] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">Community</span>
                    <h3 className="font-serif text-base font-bold text-[#3A3C51] mb-1 leading-snug line-clamp-2">{title}</h3>
                    {org && <p className="text-xs text-[#7C3AED] font-medium mb-2">{org}</p>}
                    {description && <p className="text-xs text-[#474747] leading-relaxed line-clamp-3 mb-3">{description}</p>}
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {tags.slice(0, 3).map((t) => (
                          <span key={t} className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{t}</span>
                        ))}
                      </div>
                    )}
                    {link && (
                      <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-[#7C3AED] hover:underline">
                        <ExternalLink size={11} /> View resource
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Submit Resource Form ── */}
      <section id="submit-resource" className="py-20 bg-gradient-to-br from-[#F5F0FF] to-[#FDF2F8] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_560px] gap-12 items-start">
            {/* Left */}
            <div className="lg:sticky lg:top-28">
              <p className="text-[#7C3AED] font-semibold tracking-widest uppercase text-sm mb-3">Community Library</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#3A3C51] leading-tight mb-4">Submit a Resource</h2>
              <p className="text-[#474747] text-lg leading-relaxed mb-8">Know a free-copyright guide, article, or toolkit that would help our community? Share it here and help us grow this library.</p>
              <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.pexels.com/photos/4219312/pexels-photo-4219312.jpeg" alt="Community library resources" className="w-full h-72 object-cover" />
              </div>
              <p className="text-[#474747] text-sm leading-relaxed">All submissions are reviewed for copyright compliance before being added to the library.</p>
            </div>
            {/* Right */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <ResourceSubmitForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal */}
      {activeResource && (
        <ResourceModal res={activeResource} onClose={() => setActiveResource(null)} />
      )}
    </main>
  );
}
