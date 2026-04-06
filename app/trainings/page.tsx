"use client";

import { useState, useEffect, useRef } from "react";
import Script from 'next/script';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  BookOpen, Heart, Shield, Users, Mic, Scale, Activity, Star, Lightbulb,
  ExternalLink, X, Send, CheckCircle, Upload, FileText, Globe,
} from "lucide-react";

import { ALL_TRAININGS, Training } from "@/data/trainings";

/* ─── Categories ─────────────────────────────────────────────────────────── */

const CATEGORIES = [
  { id: "inclusion-diversity", label: "Inclusion & Diversity", icon: Heart, color: "text-[#EC4899]", bg: "bg-[#FDF2F8]", border: "border-[#FBCFE8]" },
  { id: "advocacy-rights", label: "Advocacy & Rights", icon: Scale, color: "text-[#2563EB]", bg: "bg-[#EFF6FF]", border: "border-[#BFDBFE]" },
  { id: "mental-health", label: "Mental Health & Wellness", icon: Lightbulb, color: "text-[#7C3AED]", bg: "bg-[#F5F0FF]", border: "border-[#E9D5FF]" },
  { id: "hiv-sexual-health", label: "HIV & Sexual Health", icon: Activity, color: "text-[#DC2626]", bg: "bg-[#FEF2F2]", border: "border-[#FECACA]" },
  { id: "youth-education", label: "Youth & Education", icon: Star, color: "text-[#D97706]", bg: "bg-[#FFFBEB]", border: "border-[#FDE68A]" },
  { id: "leadership", label: "Leadership & Capacity Building", icon: Users, color: "text-[#059669]", bg: "bg-[#F0FDF4]", border: "border-[#BBF7D0]" },
  { id: "community-organizing", label: "Community Organizing", icon: Mic, color: "text-[#0891B2]", bg: "bg-[#ECFEFF]", border: "border-[#A5F3FC]" },
  { id: "human-rights", label: "Human Rights Education", icon: Shield, color: "text-[#6366F1]", bg: "bg-[#EEF2FF]", border: "border-[#C7D2FE]" },
  { id: "digital-skills", label: "Digital Skills & Advocacy", icon: Globe, color: "text-[#0891B2]", bg: "bg-[#ECFEFF]", border: "border-[#A5F3FC]" },
  { id: "livelihood", label: "Livelihood & Empowerment", icon: BookOpen, color: "text-[#D97706]", bg: "bg-[#FFFBEB]", border: "border-[#FDE68A]" },
];


/* ─── Training Card ───────────────────────────────────────────────────────── */

function TrainingCard({ training, onOpen }: { training: Training; onOpen: (t: Training) => void }) {
  const cat = CATEGORIES.find(c => c.id === training.category);
  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#A9D6B6] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      onClick={() => onOpen(training)}
    >
      <div className="flex items-start gap-0">
        <div className={`shrink-0 w-16 flex items-center justify-center ${cat?.bg ?? "bg-[#F5F0FF]"}`} style={{ minHeight: "140px" }}>
          {cat && <cat.icon size={22} className={cat.color} />}
        </div>
        <div className="flex-1 p-5">
          <div className="flex flex-wrap gap-2 mb-2">
            {training.featured && (
              <span className="bg-yellow-100 border border-yellow-300 text-yellow-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">Featured</span>
            )}
            {training.cost === "Free" || training.cost?.startsWith("Free") ? (
              <span className="bg-green-50 border border-green-200 text-green-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">Free</span>
            ) : null}
            <span className="bg-[#A9D6B6]/30 border border-[#A9D6B6] text-[#3A3C51] text-xs px-3 py-0.5 rounded-full">
              {cat?.label ?? training.category}
            </span>
          </div>
          <h3 className="font-serif text-base font-bold text-[#3A3C51] mb-1 leading-snug line-clamp-2 hover:text-[#7C3AED] transition-colors">
            {training.title}
          </h3>
          <p className="text-[#474747] text-xs mb-2 font-medium">
            {training.org}{training.format ? ` · ${training.format}` : ""}
          </p>
          <p className="text-[#474747] text-sm leading-relaxed line-clamp-2">{training.description}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Training Modal ──────────────────────────────────────────────────────── */

function TrainingModal({ training, onClose }: { training: Training; onClose: () => void }) {
  const cat = CATEGORIES.find(c => c.id === training.category);
  const href = training.link ?? "#";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
        >
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
            <p className="text-center font-semibold text-[#3A3C51] text-sm">{training.org}</p>
            <div className="flex flex-col gap-2 items-center">
              {training.format && (
                <span className="text-xs text-[#474747] bg-white/50 rounded-full px-3 py-1">{training.format}</span>
              )}
              {training.duration && (
                <span className="text-xs text-[#474747] bg-white/50 rounded-full px-3 py-1">{training.duration}</span>
              )}
              {(training.cost === "Free" || training.cost?.startsWith("Free")) && (
                <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1">Free</span>
              )}
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 p-7">
            <div className="flex flex-wrap gap-2 mb-4">
              {training.featured && (
                <span className="bg-yellow-100 border border-yellow-300 text-yellow-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">Featured</span>
              )}
              {cat && (
                <span className={`${cat.bg} border ${cat.border} ${cat.color} text-xs px-3 py-0.5 rounded-full font-medium`}>{cat.label}</span>
              )}
            </div>

            <h3 className="font-serif text-xl font-bold text-[#3A3C51] mb-2 pr-8">{training.title}</h3>
            <p className="text-[#7C3AED] text-xs font-semibold mb-4 uppercase tracking-wide">{training.org}</p>
            <p className="text-[#474747] text-sm leading-relaxed mb-5">{training.description}</p>

            {training.tags && training.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-6">
                {training.tags.map(t => (
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
              <ExternalLink size={15} /> Access Training
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Submit Form ────────────────────────────────────────────────────────── */

const CONTACT_API = process.env.NEXT_PUBLIC_CONTACT_API_URL ?? "";

function TrainingSubmitForm() {
  const [form, setForm] = useState({
    title: "", org: "", category: "", format: "", duration: "", cost: "", description: "",
    link: "", submitterName: "", submitterEmail: "",
  });
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [attachFile, setAttachFile] = useState<File | null>(null);
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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const body = {
        name: form.submitterName,
        email: form.submitterEmail,
        subject: `Training Submission: ${form.title}`,
        message: `
Training Title: ${form.title}
Organization: ${form.org}
Category: ${form.category}
Format: ${form.format}
Duration: ${form.duration}
Cost: ${form.cost}
Description: ${form.description}
Link: ${form.link}
Cover Image: ${coverFile ? coverFile.name : "None"}
Attachment: ${attachFile ? attachFile.name : "None"}

Submitted by: ${form.submitterName} (${form.submitterEmail})
        `.trim(),
      };
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "TRAINING",
          turnstileToken,
          data: {
            title: form.title,
            org: form.org,
            category: form.category,
            format: form.format,
            duration: form.duration,
            cost: form.cost,
            description: form.description,
            link: form.link || null,
            coverFile: coverFile ? coverFile.name : null,
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
        <p className="text-[#474747]">Your training submission has been received. We&apos;ll review and add it to the library.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Training / Workshop Title *</label>
          <input required type="text" placeholder="e.g. SOGIE Awareness Workshop"
            value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Organization / Provider *</label>
          <input required type="text" placeholder="e.g. Wagayway Equality Inc."
            value={form.org} onChange={e => setForm(p => ({ ...p, org: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Category *</label>
          <select required value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition bg-white">
            <option value="">Select a category</option>
            {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Format</label>
          <select value={form.format} onChange={e => setForm(p => ({ ...p, format: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition bg-white">
            <option value="">Select format</option>
            <option>Online / Self-Paced</option>
            <option>Online / Live</option>
            <option>In-Person</option>
            <option>Hybrid</option>
            <option>Downloadable</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Cost</label>
          <select value={form.cost} onChange={e => setForm(p => ({ ...p, cost: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition bg-white">
            <option value="">Select cost</option>
            <option>Free</option>
            <option>Free (Registration Required)</option>
            <option>Paid</option>
            <option>Subsidized</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Duration</label>
          <input type="text" placeholder="e.g. 3 hours / Self-paced / 2 days"
            value={form.duration} onChange={e => setForm(p => ({ ...p, duration: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Link / URL</label>
          <input type="url" placeholder="https://example.com/training"
            value={form.link} onChange={e => setForm(p => ({ ...p, link: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Description *</label>
        <textarea required rows={4} placeholder="Describe what this training covers, who it's for, and what participants will learn..."
          value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition resize-none" />
      </div>

      {/* File Uploads */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Cover / Banner Image</label>
          {coverPreview ? (
            <div className="relative rounded-xl overflow-hidden border border-gray-200" style={{ height: "140px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={coverPreview} alt="Cover preview" className="w-full h-full object-cover" />
              <button type="button" onClick={() => { setCoverFile(null); setCoverPreview(null); }}
                className="absolute top-2 right-2 w-6 h-6 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow">
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

        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">PDF / Attachment</label>
          {attachFile ? (
            <div className="flex items-center gap-3 border border-gray-200 rounded-xl p-4" style={{ height: "140px" }}>
              <div className="w-10 h-10 bg-[#F5F0FF] rounded-xl flex items-center justify-center shrink-0">
                <FileText size={18} className="text-[#7C3AED]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#3A3C51] truncate">{attachFile.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{(attachFile.size / 1024 / 1024).toFixed(1)} MB</p>
              </div>
              <button type="button" onClick={() => setAttachFile(null)}
                className="w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center shrink-0">
                <X size={12} />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-200 rounded-xl p-6 cursor-pointer hover:border-[#7C3AED] hover:bg-[#F5F0FF]/30 transition" style={{ height: "140px" }}>
              <Upload size={20} className="text-gray-400" />
              <span className="text-sm text-gray-400">Upload PDF or module</span>
              <span className="text-xs text-gray-300">PDF, DOC, PPTX</span>
              <input type="file" accept=".pdf,.doc,.docx,.ppt,.pptx" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) setAttachFile(f); }} />
            </label>
          )}
        </div>
      </div>

      {/* Submitter */}
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
        {sending ? "Submitting…" : <><Send size={16} /> Submit Training</>}
      </button>
    </form>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function TrainingsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTraining, setActiveTraining] = useState<Training | null>(null);
  const [communityTrainings, setCommunityTrainings] = useState<Array<{ id: string; data: Record<string, unknown>; submittedBy?: string }>>([]);

  useEffect(() => {
    fetch("/api/public/submissions?type=TRAINING")
      .then((r) => r.ok ? r.json() : { submissions: [] })
      .then((d) => setCommunityTrainings(d.submissions ?? []))
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
        <img src="/images/gallery/EmpQueer-Image-214.jpg" alt="Trainings" className="absolute inset-0 w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A2E]/90 via-[#1A0A2E]/55 to-[#1A0A2E]/25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Trainings & Workshops</span>
          <h1 className="font-serif text-5xl font-bold text-white mb-4">Learn, Grow & Lead</h1>
          <p className="text-white/75 text-xl leading-relaxed max-w-2xl">
            Free LGBTQIA+ trainings, workshops, and capacity-building programs — for advocates, educators, healthcare workers, and community members. Browse <a href="/resources" className="underline hover:text-white transition-colors">our resource library</a>, find <a href="/opportunities" className="underline hover:text-white transition-colors">livelihood opportunities</a>, or learn more through <a href="https://www.unfe.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">UN Free &amp; Equal</a>.
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
                      All Trainings
                      <span className={`ml-auto text-xs rounded-full px-2 py-0.5 ${!activeCategory ? "bg-white/20 text-white" : "bg-gray-100 text-gray-400"}`}>
                        {ALL_TRAININGS.length}
                      </span>
                    </button>
                  </li>
                  {CATEGORIES.map((cat) => {
                    const Icon = cat.icon;
                    const count = ALL_TRAININGS.filter(t => t.category === cat.id).length;
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
                  <p className="text-xs text-gray-400 mb-3 font-semibold uppercase tracking-wider">Submit a Training</p>
                  <p className="text-xs text-gray-400 leading-relaxed mb-3">Know a free LGBTQIA+ training that should be listed here?</p>
                  <a href="#submit-training"
                    className="block text-center bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity">
                    Submit Now
                  </a>
                </div>
              </div>
            </aside>

            {/* Trainings by Category */}
            <div className="lg:col-span-3 space-y-14">
              {visibleCategories.map((cat) => {
                const Icon = cat.icon;
                const items = ALL_TRAININGS.filter(t => t.category === cat.id);
                if (items.length === 0) return null;
                return (
                  <div key={cat.id} id={cat.id}>
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                      <div className={`w-9 h-9 ${cat.bg} border ${cat.border} rounded-xl flex items-center justify-center`}>
                        <Icon size={16} className={cat.color} />
                      </div>
                      <div>
                        <h2 className="font-serif text-xl font-bold text-[#3A3C51]">{cat.label}</h2>
                        <p className="text-gray-400 text-xs">{items.length} training{items.length !== 1 ? "s" : ""}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {items.map(t => <TrainingCard key={t.id} training={t} onOpen={setActiveTraining} />)}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Community Submissions */}
      {communityTrainings.length > 0 && (
        <section className="py-14 bg-[#F8F5FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-2">Community-Submitted Trainings</h2>
            <p className="text-[#474747] text-sm mb-8">Trainings and workshops shared by our community members and approved by the team.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityTrainings.map((sub) => {
                const d = sub.data;
                const title = (d.title ?? "Untitled Training") as string;
                const org = (d.organization ?? d.org ?? sub.submittedBy ?? "") as string;
                const description = (d.description ?? "") as string;
                const link = (d.link ?? "") as string;
                const format = (d.format ?? "") as string;
                const cost = (d.cost ?? "") as string;
                return (
                  <div key={sub.id} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <span className="inline-block bg-[#F5F0FF] text-[#7C3AED] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">Community</span>
                    <h3 className="font-serif text-base font-bold text-[#3A3C51] mb-1 leading-snug line-clamp-2">{title}</h3>
                    {org && <p className="text-xs text-[#7C3AED] font-medium mb-2">{org}</p>}
                    {(format || cost) && (
                      <div className="flex gap-2 mb-2">
                        {format && <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{format}</span>}
                        {cost && <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full">{cost}</span>}
                      </div>
                    )}
                    {description && <p className="text-xs text-[#474747] leading-relaxed line-clamp-3 mb-3">{description}</p>}
                    {link && (
                      <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-[#7C3AED] hover:underline">
                        <ExternalLink size={11} /> Learn more
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Submit Form */}
      <section id="submit-training" className="py-20 bg-gradient-to-br from-[#ECFEFF] to-[#F5F0FF] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_560px] gap-12 items-start">
            {/* Left */}
            <div className="lg:sticky lg:top-28">
              <p className="text-[#7C3AED] font-semibold tracking-widest uppercase text-sm mb-3">Community Training Library</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#3A3C51] leading-tight mb-4">Submit a Training or Workshop</h2>
              <p className="text-[#474747] text-lg leading-relaxed mb-8">Know a free LGBTQIA+ training, workshop, or e-learning module that belongs here? Share it with the community.</p>
              <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.pexels.com/photos/4005627/pexels-photo-4005627.jpeg" alt="Training and workshop submission" className="w-full h-72 object-cover" />
              </div>
              <p className="text-[#474747] text-sm leading-relaxed">We welcome free online courses, facilitation guides, downloadable toolkits, and in-person training programs focused on LGBTQIA+ inclusion, rights, and wellbeing.</p>
            </div>
            {/* Right */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <TrainingSubmitForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {activeTraining && <TrainingModal training={activeTraining} onClose={() => setActiveTraining(null)} />}
    </main>
  );
}
