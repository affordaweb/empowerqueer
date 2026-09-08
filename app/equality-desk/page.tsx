"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle, Clock, Send } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CONTACT_API = process.env.NEXT_PUBLIC_CONTACT_API_URL ?? "";
const SUPPORT_AREAS = [
  "HIV, STI, PrEP, treatment, and sexual-health services",
  "Mental health and psychosocial support",
  "LGBTQIA+ and SOGIESC-related concerns",
  "Discrimination, bullying, harassment, and stigma",
  "Gender-based violence, abuse, safeguarding, and protection",
  "Legal aid and human-rights concerns",
  "Youth, education, livelihood, and skills-development referrals",
  "Food, shelter, financial, and emergency-support referrals",
  "Community education, training, and advocacy opportunities",
];

type FormState = {
  name: string; pronouns: string; ageRange: string; location: string; contact: string;
  safety: string; support: string; concern: string; preferredOption: string; consent: boolean;
};

function SupportForm() {
  const [form, setForm] = useState<FormState>({ name: "", pronouns: "", ageRange: "", location: "", contact: "", safety: "", support: "", concern: "", preferredOption: "", consent: false });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const update = (key: keyof FormState, value: string | boolean) => setForm(current => ({ ...current, [key]: value }));

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!form.ageRange || !form.safety || !form.support || !form.preferredOption || !form.consent) return setStatus("error");
    setStatus("sending");
    try {
      const response = await fetch(`${CONTACT_API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name || "Anonymous",
          email: form.contact.includes("@") ? form.contact : "",
          subject: "Equality Desk Support Referral",
          message: Object.entries(form).filter(([key]) => key !== "consent").map(([key, value]) => `${key}: ${value}`).join("\n"),
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch { setStatus("error"); }
  }

  if (status === "sent") return <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-emerald-800"><CheckCircle size={24} className="mb-3" /><h3 className="font-serif text-xl font-bold mb-2">Your request has been received.</h3><p className="text-sm leading-relaxed">The Equality Desk will review your request and identify available support or referral options.</p></div>;

  return <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <label className="text-sm text-[#3A3C51]">Name or preferred name (optional)<input value={form.name} onChange={e => update("name", e.target.value)} className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3" /></label>
      <label className="text-sm text-[#3A3C51]">Pronouns (optional)<input value={form.pronouns} onChange={e => update("pronouns", e.target.value)} className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3" /></label>
      <label className="text-sm text-[#3A3C51]">Age range<select required value={form.ageRange} onChange={e => update("ageRange", e.target.value)} className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3"><option value="">Select age range</option><option>Under 18</option><option>18-24</option><option>25-34</option><option>35-44</option><option>45 or older</option><option>Prefer not to say</option></select></label>
      <label className="text-sm text-[#3A3C51]">Barangay / City or Municipality<input value={form.location} onChange={e => update("location", e.target.value)} className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3" /></label>
    </div>
    <label className="block text-sm text-[#3A3C51]">Contact details (optional; only if you want a response)<input value={form.contact} onChange={e => update("contact", e.target.value)} className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3" /></label>
    <label className="block text-sm text-[#3A3C51]">Are you safe right now?<select required value={form.safety} onChange={e => update("safety", e.target.value)} className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3"><option value="">Select one</option><option>Yes</option><option>No</option><option>Not sure</option></select></label>
    <label className="block text-sm text-[#3A3C51]">What support do you need?<select required value={form.support} onChange={e => update("support", e.target.value)} className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3"><option value="">Select support</option>{SUPPORT_AREAS.map(area => <option key={area}>{area}</option>)}<option>Other concern</option></select></label>
    <label className="block text-sm text-[#3A3C51]">Briefly describe your concern or the support you need.<textarea value={form.concern} onChange={e => update("concern", e.target.value)} rows={4} className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3" /></label>
    <label className="block text-sm text-[#3A3C51]">Preferred support option<select required value={form.preferredOption} onChange={e => update("preferredOption", e.target.value)} className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3"><option value="">Select one</option><option>Information only</option><option>Referral to a service provider</option><option>Follow-up from the Equality Desk</option><option>Anonymous feedback only</option></select></label>
    <label className="flex gap-3 text-sm text-[#474747] leading-relaxed"><input type="checkbox" checked={form.consent} onChange={e => update("consent", e.target.checked)} className="mt-1" />I understand that this form is for support and referral. My information will be handled confidentially and shared only when necessary, with my consent.</label>
    {status === "error" && <p className="text-sm text-red-600">Please complete the required fields and try again. If sending fails, contact Wagayway Equality directly.</p>}
    <button type="submit" disabled={status === "sending"} className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold px-6 py-3 rounded-xl disabled:opacity-60"><Send size={15} />{status === "sending" ? "Sending..." : "Submit Confidentially"}</button>
  </form>;
}

export default function EqualityDeskPage() {
  return <main className="bg-white min-h-screen"><Navbar />
    <section className="relative overflow-hidden min-h-[560px] flex flex-col justify-end border-b border-white/10"><span className="sr-only">Equality Desk hero</span>{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/gallery/EmpQueer-Image-151.jpg" alt="Batangas City Equality Desk community support" className="absolute inset-0 w-full h-full object-cover object-top" /><div className="absolute inset-0 bg-gradient-to-t from-[#1A0A2E]/95 via-[#1A0A2E]/60 to-[#1A0A2E]/25" /><div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full"><span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Equality Desk</span><h1 className="font-serif text-5xl font-bold text-white mb-4">Batangas City Equality Desk</h1><p className="text-white/80 text-xl leading-relaxed max-w-2xl">Safe support. Equal access. Stronger community. A welcoming place to find information, support, protection, and referrals.</p><div className="flex flex-wrap gap-3 mt-7"><a href="#support-form" className="bg-white text-[#7C3AED] font-semibold px-5 py-3 rounded-xl">Get Support</a><a href="#support-form" className="border border-white/40 text-white font-semibold px-5 py-3 rounded-xl">Share a Concern</a><a href="#services" className="border border-white/40 text-white font-semibold px-5 py-3 rounded-xl">Find a Service</a></div></div></section>
    <section className="py-16 bg-[#F8F5FF]"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><p className="text-[#7C3AED] font-semibold tracking-widest uppercase text-sm mb-3">Welcome</p><h2 className="font-serif text-4xl font-bold text-[#3A3C51] mb-5">A welcoming place to start</h2><p className="text-[#474747] text-lg leading-relaxed mb-5">The Batangas City Equality Desk is a safe, affirming, and community-linked access point for LGBTQIA+ people, young key populations, people living with HIV, women, youth, and all community members who need information, support, protection, and referral services.</p><p className="text-[#474747] text-lg leading-relaxed">The Desk helps people connect with available health, psychosocial, legal, protection, education, livelihood, and social-welfare services without judgment, discrimination, or unnecessary barriers.</p></div></section>
    <section className="py-16"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12"><div><p className="text-[#EC4899] font-semibold tracking-widest uppercase text-sm mb-3">About the Equality Desk</p><h2 className="font-serif text-3xl font-bold text-[#3A3C51] mb-5">Community-led support, connected to care</h2><div className="space-y-4 text-[#474747] leading-relaxed"><p>The Batangas City Equality Desk was developed through the advocacy, community organizing, and direct-support work of Wagayway Equality Inc.</p><p>It was established in partnership with and through the support of Congresswoman Beverly Rose Dimacuha. The Desk was later institutionalized by the City Government of Batangas through an ordinance principally authored by Councilor Claudette Ambida.</p><p>Today, the Equality Desk serves as a bridge between community members, government offices, health providers, civil-society organizations, and other referral partners.</p></div></div><div id="services" className="bg-white border border-gray-200 rounded-3xl p-7 shadow-sm"><h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-5">What can we help you with?</h2><ul className="space-y-3">{SUPPORT_AREAS.map(area => <li key={area} className="flex gap-3 text-[#474747] text-sm leading-relaxed"><CheckCircle size={17} className="text-[#7C3AED] mt-0.5 shrink-0" />{area}</li>)}</ul></div></div></section>
    <section id="support-form" className="py-16 bg-gradient-to-br from-[#F5F0FF] to-[#FDF2F8] border-y border-gray-100"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"><p className="text-[#7C3AED] font-semibold tracking-widest uppercase text-sm mb-3">Confidential Support</p><h2 className="font-serif text-4xl font-bold text-[#3A3C51] mb-3">Share your concern</h2><p className="text-[#474747] leading-relaxed mb-8">Share your concern confidentially so we can help identify the most appropriate available support or referral. You may choose to remain anonymous.</p><SupportForm /></div></section>
    <section className="py-14 bg-[#0F0A1E] text-white"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex gap-4 items-start mb-6"><AlertTriangle size={24} className="text-[#A78BFA] shrink-0 mt-1" /><div><h2 className="font-serif text-2xl font-bold mb-3">Important Disclaimer</h2><p className="text-white/75 leading-relaxed">The Equality Desk provides information, initial support, and referral assistance in good faith. Services, schedules, partner organizations, financial support, and referral options may have limited capacity or change without prior notice.</p></div></div><p className="text-white/75 leading-relaxed mb-5">Submitting a form or requesting support does not guarantee immediate service, financial assistance, an appointment, case acceptance, or a specific outcome. Assistance depends on available resources, eligibility requirements, partner capacity, and applicable confidentiality and safeguarding procedures.</p><div className="flex gap-3 items-start border-t border-white/15 pt-5"><Clock size={18} className="text-[#EC4899] shrink-0 mt-1" /><p className="text-white/75 text-sm leading-relaxed">The Equality Desk is not a 24/7 emergency-response service. For urgent medical, safety, violence, or emergency concerns, contact the appropriate emergency hotline, health facility, police station, or crisis service immediately.</p></div></div></section>
    <section className="py-16 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-center"><div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-serif text-4xl font-bold mb-4">You are not alone.</h2><p className="text-white/85 text-lg leading-relaxed mb-7">Reaching out is a strong first step. The Batangas City Equality Desk is here to listen, connect, and help you find available support.</p><div className="flex flex-wrap justify-center gap-3"><a href="#support-form" className="bg-white text-[#7C3AED] font-semibold px-5 py-3 rounded-xl">Get Support Now</a><a href="/directory" className="border border-white/50 text-white font-semibold px-5 py-3 rounded-xl">Browse Services</a><a href="/contact" className="border border-white/50 text-white font-semibold px-5 py-3 rounded-xl">Contact Wagayway Equality</a></div></div></section><Footer /></main>;
}
