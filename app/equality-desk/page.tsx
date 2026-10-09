"use client";

import { useRef, useState } from "react";
import Script from "next/script";
import { AlertTriangle, CheckCircle, Clock, Send } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SUPPORT_AREAS = ["HIV, STI, PrEP, treatment, and sexual-health services", "Mental health and psychosocial support", "LGBTQIA+ and SOGIESC-related concerns", "Discrimination, bullying, harassment, and stigma", "Gender-based violence, abuse, safeguarding, and protection", "Legal aid and human-rights concerns", "Youth, education, livelihood, and skills-development referrals", "Food, shelter, financial, and emergency-support referrals", "Community education, training, and advocacy opportunities"];
const SERVICE_CATEGORIES = [
  ["Health and HIV Services", "Find referrals for HIV testing, STI screening, treatment, PrEP, condoms, lubricants, counseling, and other sexual-health services."],
  ["Mental Health and Crisis Support", "Find available counseling, psychosocial support, and crisis-service contacts. National Center for Mental Health Crisis Hotline: 1553."],
  ["Protection and Gender-Based Violence Support", "Find confidential support and referral options for violence, abuse, harassment, exploitation, and other protection concerns."],
  ["Legal Aid and Human Rights", "Find legal information, rights education, and referrals for discrimination or human-rights concerns."],
  ["Youth, Education, and Livelihood", "Explore youth-friendly support, training, education, employment, and livelihood opportunities."],
  ["Social Welfare and Emergency Assistance", "Find referral options for food, shelter, emergency assistance, and social-protection services."],
];

type FormState = { name: string; pronouns: string; ageRange: string; location: string; contact: string; safety: string; support: string; concern: string; preferredOption: string; consent: boolean };
const initialForm: FormState = { name: "", pronouns: "", ageRange: "", location: "", contact: "", safety: "", support: "", concern: "", preferredOption: "", consent: false };
const inputClass = "w-full bg-white border border-gray-200 text-[#3A3C51] placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]/20 transition-colors";
const labelClass = "block text-xs font-semibold text-[#3A3C51] uppercase tracking-wider mb-1.5";

function SupportForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [turnstileToken, setTurnstileToken] = useState("");
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetRendered = useRef(false);
  const update = (key: keyof FormState, value: string | boolean) => setForm(current => ({ ...current, [key]: value }));

  function initTurnstile() {
    if (widgetRef.current && !widgetRendered.current) {
      widgetRendered.current = true;
      (window as Window & { turnstile?: { render: (element: HTMLElement, options: Record<string, unknown>) => void } }).turnstile?.render(widgetRef.current, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "",
        callback: (token: string) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(""),
        "error-callback": () => setTurnstileToken(""),
      });
    }
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!form.ageRange || !form.safety || !form.support || !form.preferredOption || !form.consent || !turnstileToken) return setStatus("error");
    setStatus("sending");
    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "CONTACT",
          turnstileToken,
          submittedBy: form.contact || undefined,
          data: {
            subject: "Equality Desk Support Referral",
            name: form.name || "Anonymous",
            pronouns: form.pronouns,
            ageRange: form.ageRange,
            location: form.location,
            contact: form.contact,
            safety: form.safety,
            support: form.support,
            concern: form.concern,
            preferredOption: form.preferredOption,
          },
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch { setStatus("error"); }
  }

  if (status === "sent") return <div className="text-center py-12"><div className="w-16 h-16 bg-gradient-to-br from-[#7C3AED] to-[#EC4899] rounded-full flex items-center justify-center mx-auto mb-5"><CheckCircle size={28} className="text-white" /></div><h3 className="font-serif text-2xl font-bold text-[#3A3C51] mb-3">Your request has been received.</h3><p className="text-[#474747] text-sm leading-relaxed max-w-xs mx-auto">The Equality Desk will review your request and identify available support or referral options.</p></div>;

  return <form onSubmit={handleSubmit} className="space-y-5">
    <div><h3 className="font-serif text-xl font-bold text-[#3A3C51] mb-1">Support and Referral Form</h3><p className="text-gray-400 text-xs">Fields marked <span className="text-[#EC4899]">*</span> are required.</p></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div><label className={labelClass}>Name or preferred name</label><input value={form.name} onChange={e => update("name", e.target.value)} placeholder="Optional" className={inputClass} /></div>
      <div><label className={labelClass}>Pronouns</label><input value={form.pronouns} onChange={e => update("pronouns", e.target.value)} placeholder="Optional" className={inputClass} /></div>
      <div><label className={labelClass}>Age range <span className="text-[#EC4899]">*</span></label><select required value={form.ageRange} onChange={e => update("ageRange", e.target.value)} className={`${inputClass} bg-white`}><option value="">Select age range</option><option>Under 18</option><option>18-24</option><option>25-34</option><option>35-44</option><option>45 or older</option><option>Prefer not to say</option></select></div>
      <div><label className={labelClass}>Barangay / City or Municipality</label><input value={form.location} onChange={e => update("location", e.target.value)} className={inputClass} /></div>
    </div>
    <div><label className={labelClass}>Contact details</label><input value={form.contact} onChange={e => update("contact", e.target.value)} placeholder="Optional; only if you want a response" className={inputClass} /></div>
    <div><label className={labelClass}>Are you safe right now? <span className="text-[#EC4899]">*</span></label><select required value={form.safety} onChange={e => update("safety", e.target.value)} className={`${inputClass} bg-white`}><option value="">Select one</option><option>Yes</option><option>No</option><option>Not sure</option></select></div>
    <div><label className={labelClass}>What support do you need? <span className="text-[#EC4899]">*</span></label><select required value={form.support} onChange={e => update("support", e.target.value)} className={`${inputClass} bg-white`}><option value="">Select support</option>{SUPPORT_AREAS.map(area => <option key={area}>{area}</option>)}<option>Other concern</option></select></div>
    <div><label className={labelClass}>Briefly describe your concern or the support you need.</label><textarea value={form.concern} onChange={e => update("concern", e.target.value)} rows={4} className={`${inputClass} resize-none`} /></div>
    <div><label className={labelClass}>Preferred support option <span className="text-[#EC4899]">*</span></label><select required value={form.preferredOption} onChange={e => update("preferredOption", e.target.value)} className={`${inputClass} bg-white`}><option value="">Select one</option><option>Information only</option><option>Referral to a service provider</option><option>Follow-up from the Equality Desk</option><option>Anonymous feedback only</option></select></div>
    <label className="flex gap-3 text-sm text-[#474747] leading-relaxed normal-case tracking-normal font-normal"><input type="checkbox" checked={form.consent} onChange={e => update("consent", e.target.checked)} className="mt-1 accent-[#7C3AED]" />I understand that this form is for support and referral. My information will be handled confidentially and shared only when necessary, with my consent.</label>
    {status === "error" && <p className="text-red-500 text-sm">Please complete the required fields and verification, then try again.</p>}
    <div ref={widgetRef} className="flex justify-start" /><Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" onLoad={initTurnstile} />
    <button type="submit" disabled={status === "sending" || !turnstileToken} className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60">{status === "sending" ? "Submitting..." : <><Send size={16} /> Submit Confidentially</>}</button>
  </form>;
}

export default function EqualityDeskPage() {
  return <main className="bg-white min-h-screen"><Navbar />
    <section className="relative overflow-hidden min-h-[600px] flex flex-col justify-end border-b border-white/10"><img src="/images/gallery/EmpQueer-Image-151.jpg" alt="Batangas City Equality Desk community support" className="absolute inset-0 w-full h-full object-cover object-top" /><div className="absolute inset-0 bg-gradient-to-t from-[#1A0A2E]/90 via-[#1A0A2E]/55 to-[#1A0A2E]/25" /><div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full"><span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Equality Desk</span><h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">Batangas City Equality Desk</h1><p className="text-white/75 text-xl leading-relaxed max-w-2xl">Safe support. Equal access. Stronger community. A welcoming place to find information, support, protection, and referrals.</p><div className="flex flex-wrap gap-3 mt-7"><a href="#support-form" className="btn-p btn-p-pink inline-flex px-5 py-3">Get Support</a><a href="#support-form" className="border border-white/40 text-white font-semibold px-5 py-3 rounded-xl">Share a Concern</a><a href="#services" className="border border-white/40 text-white font-semibold px-5 py-3 rounded-xl">Find a Service</a></div></div></section>
    <section className="py-20 relative overflow-hidden bg-white"><div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8F0FF]/60 to-[#FFF0F7]/60" /><div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex items-center gap-3 mb-12"><span className="h-px w-10 bg-gradient-to-r from-transparent to-[#7C3AED]" /><span className="text-[#7C3AED] text-xs uppercase tracking-[0.25em] font-semibold">Welcome</span><span className="h-px w-10 bg-gradient-to-l from-transparent to-[#EC4899]" /></div><div className="max-w-4xl"><h2 className="font-serif text-3xl font-bold text-[#3A3C51] leading-tight mb-6">A welcoming place to start</h2><p className="text-[#474747] text-lg leading-relaxed mb-5">The Batangas City Equality Desk is a safe, affirming, and community-linked access point for LGBTQIA+ people, young key populations, people living with HIV, women, youth, and all community members who need information, support, protection, and referral services.</p><p className="text-[#474747] text-lg leading-relaxed">The Desk helps people connect with available health, psychosocial, legal, protection, education, livelihood, and social-welfare services without judgment, discrimination, or unnecessary barriers. Whether you are experiencing stigma, need a health referral, want to understand your rights, or simply need someone to help identify the right service, the Equality Desk is a welcoming place to start.</p></div></div></section>
    <section className="py-16 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12"><div><p className="text-[#EC4899] font-semibold tracking-widest uppercase text-sm mb-3">About the Equality Desk</p><h2 className="font-serif text-3xl font-bold text-[#3A3C51] mb-5">Community-led support, connected to care</h2><div className="space-y-5 text-[#474747] leading-relaxed"><p>The Wagayway Equality Desk grew from local advocacy, community organizing, and direct-support work in Batangas City.</p><p>The City Government of Batangas credits the support of Congresswoman Beverley Rose Dimacuha and Mayor Marvey Mariño in strengthening this safe and accessible service for LGBTQIA+ people and other community members.</p><p>Today, the Desk helps connect people with government offices, health providers, civil-society organizations, and other referral partners. Contact the Desk before visiting to confirm its current location and operating hours.</p></div></div><div id="services" className="bg-gradient-to-br from-[#F8F0FF] to-[#FFF0F7] border border-[#E9D5FF] rounded-2xl p-8"><p className="text-[#5B21B6] text-xs uppercase tracking-widest font-semibold mb-5">What Can We Help You With?</p><ul className="space-y-3">{SUPPORT_AREAS.map(area => <li key={area} className="flex gap-3 text-[#474747] text-sm leading-relaxed"><CheckCircle size={17} className="text-[#7C3AED] mt-0.5 shrink-0" />{area}</li>)}</ul></div></div></section>
    <section className="py-20 bg-[#F3F3F3]" id="support-form"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-[1fr_560px] gap-12 items-start"><div className="lg:sticky lg:top-28"><p className="text-[#7C3AED] font-semibold tracking-widest uppercase text-sm mb-3">Confidential Support</p><h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#3A3C51] leading-tight mb-4">What Is Your Concern?</h2><p className="text-[#474747] text-lg leading-relaxed mb-8">Share your concern confidentially so we can help identify the most appropriate available support or referral. You may choose to remain anonymous.</p><div className="rounded-2xl overflow-hidden shadow-lg mb-8"><img src="/images/gallery/Equality-Desk-Hero.jpg" alt="Equality Desk community support" className="w-full h-72 object-cover" /></div><p className="text-[#474747] text-sm leading-relaxed">The Equality Desk is here to listen, connect, and help you find available support. Reaching out is a strong first step.</p></div><div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm"><SupportForm /></div></div></div></section>
    <section className="py-16 bg-[#F8F5FF]"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><p className="text-[#7C3AED] font-semibold tracking-widest uppercase text-sm mb-3">Service Directory</p><h2 className="font-serif text-4xl font-bold text-[#3A3C51] mb-3">Explore available services and referral partners</h2><p className="text-[#474747] leading-relaxed max-w-3xl mb-8">Start with the Equality Desk for confidential guidance, or browse the provider directory for health, legal, mental-health, protection, and community services.</p><div className="bg-white border border-[#E9D5FF] rounded-2xl p-6 mb-8"><h3 className="font-serif text-2xl font-bold text-[#3A3C51] mb-2">Community support and referrals</h3><p className="text-[#7C3AED] font-semibold mb-2">EmpowerQueer Hub and Wagayway Equality</p><p className="text-[#474747] text-sm leading-relaxed mb-3">LGBTQIA+ community support, rights education, referral, and advocacy in Batangas City.</p><p className="text-[#474747] text-sm mb-4">Contact us first to confirm the appropriate service, current hours, and location.</p><div className="flex flex-wrap gap-3"><a href="/contact" className="bg-[#7C3AED] text-white text-sm font-semibold px-4 py-2 rounded-lg">Contact the Hub</a><a href="/directory" className="border border-[#7C3AED] text-[#7C3AED] text-sm font-semibold px-4 py-2 rounded-lg">Browse Directory</a></div></div><div className="grid grid-cols-1 md:grid-cols-2 gap-5">{SERVICE_CATEGORIES.map(([title, description]) => <div key={title} className="bg-white border border-gray-200 rounded-2xl p-6"><h3 className="font-serif text-xl font-bold text-[#3A3C51] mb-2">{title}</h3><p className="text-[#474747] text-sm leading-relaxed">{description}</p><p className="text-gray-400 text-xs mt-4">Contact the Equality Desk to confirm current hours, eligibility, and referral availability.</p></div>)}</div><a href="/directory" className="inline-block mt-8 text-[#7C3AED] font-semibold hover:underline">Browse the full service directory</a></div></section>
    <section className="py-[130px] bg-[#0F0A1E] text-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,0.8fr)_1.2fr] gap-12 items-center"><div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl"><img src="https://images.pexels.com/photos/28891515/pexels-photo-28891515.jpeg" alt="Community support and connection" className="w-full h-[360px] lg:h-[460px] object-cover" /></div><div className="text-left"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-xl bg-[#A78BFA]/15 flex items-center justify-center"><AlertTriangle size={20} className="text-[#A78BFA]" /></div><p className="text-[#A78BFA] text-xs uppercase tracking-[0.25em] font-semibold">Please Read Before Reaching Out</p></div><h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">Important Disclaimer</h2><p className="text-white/70 leading-relaxed mb-8">The Equality Desk provides information, initial support, and referral assistance in good faith. We want you to know what to expect when you request support.</p><div className="grid grid-cols-1 md:grid-cols-2 gap-5"><div className="rounded-2xl border border-white/10 bg-white/5 p-6"><h3 className="font-semibold text-white mb-3">What this means</h3><p className="text-white/70 text-sm leading-relaxed">Services, schedules, partner organizations, financial support, and referral options may have limited capacity or change without prior notice. Assistance depends on available resources, eligibility requirements, partner capacity, and applicable confidentiality and safeguarding procedures.</p></div><div className="rounded-2xl border border-white/10 bg-white/5 p-6"><h3 className="font-semibold text-white mb-3">What is not guaranteed</h3><p className="text-white/70 text-sm leading-relaxed">Submitting a form or requesting support does not guarantee immediate service, financial assistance, an appointment, case acceptance, or a specific outcome.</p></div></div><div className="mt-6 rounded-2xl border border-[#EC4899]/30 bg-[#EC4899]/10 p-6 flex gap-4 items-start"><Clock size={20} className="text-[#EC4899] shrink-0 mt-0.5" /><div><h3 className="font-semibold text-white mb-2">For urgent concerns</h3><p className="text-white/75 text-sm leading-relaxed">The Equality Desk is not a 24/7 emergency-response service. For urgent medical, safety, violence, or emergency concerns, contact the appropriate emergency hotline, health facility, police station, or crisis service immediately.</p></div></div></div></div></div></section>
    <section className="py-16 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-center"><div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-serif text-4xl font-bold mb-4">You are not alone.</h2><p className="text-white/85 text-lg leading-relaxed mb-7">Reaching out is a strong first step. The Batangas City Equality Desk is here to listen, connect, and help you find available support.</p><div className="flex flex-wrap justify-center gap-3"><a href="#support-form" className="bg-white text-[#7C3AED] font-semibold px-5 py-3 rounded-xl">Get Support Now</a><a href="/directory" className="border border-white/50 text-white font-semibold px-5 py-3 rounded-xl">Browse Services</a><a href="/contact" className="border border-white/50 text-white font-semibold px-5 py-3 rounded-xl">Contact Wagayway Equality</a></div></div></section><Footer />
  </main>;
}
