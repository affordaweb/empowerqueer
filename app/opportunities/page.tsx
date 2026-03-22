"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Briefcase, Award, GraduationCap, Heart, BookOpen, Megaphone, Users, Shield,
  ExternalLink, X, Send, CheckCircle, Upload, FileText,
} from "lucide-react";

/* ─── Types ──────────────────────────────────────────────────────────────── */

interface Opportunity {
  id: string;
  title: string;
  org: string;
  category: string;
  description: string;
  location?: string;
  deadline?: string;
  cover?: string;
  link?: string;
  tags?: string[];
  featured?: boolean;
}

/* ─── Categories ─────────────────────────────────────────────────────────── */

const CATEGORIES = [
  { id: "jobs", label: "Jobs & Employment", icon: Briefcase, color: "text-[#2563EB]", bg: "bg-[#EFF6FF]", border: "border-[#BFDBFE]" },
  { id: "fellowships", label: "Fellowships & Programs", icon: Award, color: "text-[#7C3AED]", bg: "bg-[#F5F0FF]", border: "border-[#E9D5FF]" },
  { id: "scholarships", label: "Scholarships & Grants", icon: GraduationCap, color: "text-[#D97706]", bg: "bg-[#FFFBEB]", border: "border-[#FDE68A]" },
  { id: "volunteer", label: "Volunteer Opportunities", icon: Heart, color: "text-[#EC4899]", bg: "bg-[#FDF2F8]", border: "border-[#FBCFE8]" },
  { id: "trainings", label: "Trainings & Workshops", icon: BookOpen, color: "text-[#0891B2]", bg: "bg-[#ECFEFF]", border: "border-[#A5F3FC]" },
  { id: "advocacy", label: "Advocacy & Activism", icon: Megaphone, color: "text-[#DC2626]", bg: "bg-[#FEF2F2]", border: "border-[#FECACA]" },
  { id: "internships", label: "Internships", icon: Users, color: "text-[#059669]", bg: "bg-[#F0FDF4]", border: "border-[#BBF7D0]" },
  { id: "governance", label: "Advisory & Governance", icon: Shield, color: "text-[#6366F1]", bg: "bg-[#EEF2FF]", border: "border-[#C7D2FE]" },
];

/* ─── Opportunities Data ──────────────────────────────────────────────────── */

const ALL_OPPORTUNITIES: Opportunity[] = [

  // ── Jobs & Employment ──────────────────────────────────────────────────────
  {
    id: "job-1",
    title: "Program Officer – LGBTQ+ Inclusion",
    org: "OutRight Action International",
    category: "jobs",
    description: "OutRight Action International is hiring a Program Officer to support its global LGBTIQ+ human rights programs, focusing on documentation, advocacy, and coalition-building across Asia-Pacific.",
    location: "Remote / Global",
    link: "https://outrightinternational.org/our-work",
    tags: ["Program Management", "Human Rights", "Asia-Pacific"],
    featured: true,
  },
  {
    id: "job-2",
    title: "Community Organizer – Batangas LGBTQIA+ Services",
    org: "Wagayway Equality Inc.",
    category: "jobs",
    description: "Wagayway Equality Inc. is looking for a dedicated community organizer to lead outreach programs, peer support groups, and community education initiatives across Batangas Province.",
    location: "Batangas, Philippines",
    link: "mailto:contact@empowerqueerhub.com",
    tags: ["Philippines", "Community", "Outreach"],
    featured: true,
  },
  {
    id: "job-3",
    title: "Communications & Social Media Coordinator",
    org: "ILGA World",
    category: "jobs",
    description: "ILGA World seeks a Communications Coordinator to manage digital campaigns, content creation, and media relations in support of LGBTQ+ advocacy across 193 member states.",
    location: "Remote / Geneva",
    link: "https://ilga.org/",
    tags: ["Communications", "Social Media", "Global"],
  },
  {
    id: "job-4",
    title: "HIV Program Coordinator",
    org: "Philippine National AIDS Council (PNAC)",
    category: "jobs",
    description: "PNAC is recruiting a program coordinator to support national HIV prevention and treatment programs, with specific focus on key populations including MSM and transgender individuals.",
    location: "Manila, Philippines",
    link: "https://pnac.doh.gov.ph",
    tags: ["HIV", "Philippines", "Health"],
  },

  // ── Fellowships & Programs ──────────────────────────────────────────────────
  {
    id: "fellow-1",
    title: "The Equity Catalyst Fellowship",
    org: "EmpowerQueer Hub",
    category: "fellowships",
    description: "The Equity Catalyst Fellowship (ECF) is a highly competitive, intensive professional development program designed for mid-career LGBTQIA+ individuals who are looking to pivot into non-profit leadership, social impact consulting, or policy advocacy.",
    location: "Philippines (Hybrid)",
    tags: ["Leadership", "Policy", "Advocacy"],
    featured: true,
  },
  {
    id: "fellow-2",
    title: "ILGA World Fellowship for LGBTQ+ Activists",
    org: "ILGA World",
    category: "fellowships",
    description: "A capacity-building fellowship for emerging LGBTQ+ advocates from the Global South, covering international human rights mechanisms, advocacy strategy, and coalition building.",
    location: "International",
    link: "https://ilga.org/",
    tags: ["International", "Advocacy", "Global South"],
    featured: true,
  },
  {
    id: "fellow-3",
    title: "UNDP LGBTIQ+ Inclusion Programme Fellowship",
    org: "UNDP (United Nations Development Programme)",
    category: "fellowships",
    description: "UNDP's fellowship for professionals working at the intersection of LGBTIQ+ rights and sustainable development, supporting evidence-based policy and programming across Asia-Pacific.",
    location: "Asia-Pacific",
    link: "https://www.undp.org/",
    tags: ["UN", "Development", "Policy"],
  },
  {
    id: "fellow-4",
    title: "Trevor Project Clinical Fellowship",
    org: "The Trevor Project",
    category: "fellowships",
    description: "A specialized clinical training fellowship for mental health professionals to develop expertise in crisis intervention and suicide prevention for LGBTQ+ youth.",
    location: "Remote / USA",
    link: "https://www.thetrevorproject.org/",
    tags: ["Mental Health", "Youth", "Clinical"],
  },

  // ── Scholarships & Grants ─────────────────────────────────────────────────
  {
    id: "scholar-1",
    title: "PFLAG Foundation Scholarship Program",
    org: "PFLAG National",
    category: "scholarships",
    description: "Annual scholarships for LGBTQ+ students and straight-ally students who demonstrate academic excellence and a commitment to fostering LGBTQ+ acceptance and inclusion in their communities.",
    location: "USA (Open to international)",
    link: "https://pflag.org/scholarship/",
    tags: ["Education", "Student", "Annual"],
    featured: true,
  },
  {
    id: "scholar-2",
    title: "GLSEN Research Grant",
    org: "GLSEN (Gay, Lesbian and Straight Education Network)",
    category: "scholarships",
    description: "Research grants supporting original study on LGBTQ+ youth in K–12 educational settings — open to graduate students, academics, and community researchers worldwide.",
    location: "Open Internationally",
    link: "https://www.glsen.org/research",
    tags: ["Research", "Youth", "Education"],
  },
  {
    id: "scholar-3",
    title: "Community Foundation for LGBTQ+ Filipinos Grant",
    org: "EmpowerQueer Hub",
    category: "scholarships",
    description: "Micro-grants available for LGBTQIA+ Filipinos pursuing higher education, vocational training, or community-based livelihood projects. Apply via email with a brief project proposal.",
    location: "Batangas, Philippines",
    link: "mailto:contact@empowerqueerhub.com",
    tags: ["Philippines", "Education", "Livelihood"],
    featured: true,
  },
  {
    id: "scholar-4",
    title: "TESDA Scholarship for LGBTQIA+ Learners",
    org: "TESDA (Technical Education and Skills Development Authority)",
    category: "scholarships",
    description: "Free skills training and certification programs available to all Filipinos, including LGBTQIA+ individuals. Covers a wide range of vocational tracks from culinary arts to IT.",
    location: "Philippines",
    link: "https://www.tesda.gov.ph",
    tags: ["Philippines", "Vocational", "Free"],
  },

  // ── Volunteer Opportunities ────────────────────────────────────────────────
  {
    id: "vol-1",
    title: "Crisis Counselor Volunteer – TrevorLifeline",
    org: "The Trevor Project",
    category: "volunteer",
    description: "Volunteer crisis counselors provide life-saving support to LGBTQ+ youth in crisis via phone, text, and chat. Comprehensive training is provided. Open to international volunteers for digital programs.",
    location: "Remote",
    link: "https://www.thetrevorproject.org/get-involved/volunteer/",
    tags: ["Crisis Support", "Youth", "Remote"],
    featured: true,
  },
  {
    id: "vol-2",
    title: "Community Peer Support Volunteer",
    org: "Wagayway Equality Inc.",
    category: "volunteer",
    description: "Join the Wagayway Equality peer support team to provide emotional support, information, and connection to fellow LGBTQIA+ community members across Batangas.",
    location: "Batangas, Philippines",
    link: "mailto:contact@empowerqueerhub.com",
    tags: ["Philippines", "Peer Support", "Community"],
    featured: true,
  },
  {
    id: "vol-3",
    title: "Volunteer Educator – SOGIESC Trainings",
    org: "EmpowerQueer Hub",
    category: "volunteer",
    description: "Help facilitate SOGIESC awareness sessions in schools, barangays, and workplaces across Batangas Province. Training and materials provided.",
    location: "Batangas, Philippines",
    link: "mailto:contact@empowerqueerhub.com",
    tags: ["Education", "Facilitation", "Philippines"],
  },
  {
    id: "vol-4",
    title: "PFLAG Chapter Volunteer",
    org: "PFLAG National",
    category: "volunteer",
    description: "PFLAG chapters across the Philippines and internationally welcome volunteers to support family education, support groups, and advocacy campaigns for LGBTQ+ acceptance.",
    location: "Philippines / International",
    link: "https://pflag.org/get-involved/",
    tags: ["Family", "Support", "Advocacy"],
  },

  // ── Trainings & Workshops ──────────────────────────────────────────────────
  {
    id: "train-1",
    title: "SafeZone Training for Allies and Educators",
    org: "GLSEN",
    category: "trainings",
    description: "Free online and in-person training on how to create safer, more inclusive environments for LGBTQ+ students and colleagues. Widely recognized certification for educators and HR professionals.",
    location: "Online / Worldwide",
    link: "https://www.glsen.org/",
    tags: ["Free", "Certification", "Educators"],
    featured: true,
  },
  {
    id: "train-2",
    title: "HIV Counseling and Testing Training",
    org: "Department of Health – Philippines",
    category: "trainings",
    description: "DOH-accredited training for healthcare workers and community health volunteers on HIV counseling, testing protocols, and referral systems for key populations in the Philippines.",
    location: "Philippines",
    link: "https://doh.gov.ph",
    tags: ["HIV", "Healthcare", "Philippines"],
    featured: true,
  },
  {
    id: "train-3",
    title: "Human Rights Documentation Training",
    org: "OHCHR (Office of the High Commissioner for Human Rights)",
    category: "trainings",
    description: "Free online training modules on documenting human rights violations, available in multiple languages. Valuable for LGBTQ+ advocates and paralegals.",
    location: "Online / Free",
    link: "https://www.ohchr.org/en/training-and-capacity-building",
    tags: ["Human Rights", "Free", "Online"],
  },
  {
    id: "train-4",
    title: "Mental Health First Aid for LGBTQ+ Communities",
    org: "SAMHSA",
    category: "trainings",
    description: "Evidence-based mental health first aid training adapted for LGBTQ+ communities, helping participants identify, understand, and respond to mental health and substance use crises.",
    location: "Online / Worldwide",
    link: "https://www.samhsa.gov/",
    tags: ["Mental Health", "First Aid", "Community"],
  },

  // ── Advocacy & Activism ────────────────────────────────────────────────────
  {
    id: "adv-1",
    title: "SOGIE Equality Bill Campaign",
    org: "Wagayway Equality Inc.",
    category: "advocacy",
    description: "Join the national campaign for the passage of the SOGIE Equality Bill in the Philippines — advocating for anti-discrimination protections for LGBTQIA+ Filipinos in workplaces, schools, and public spaces.",
    location: "Philippines",
    link: "mailto:contact@empowerqueerhub.com",
    tags: ["Philippines", "Policy", "Legislative"],
    featured: true,
  },
  {
    id: "adv-2",
    title: "UPR Submission – LGBTQ+ Rights in the Philippines",
    org: "ILGA World / Philippine Civil Society",
    category: "advocacy",
    description: "Participate in the Universal Periodic Review (UPR) process by contributing testimonies, data, and recommendations to the UN Human Rights Council on the status of LGBTQ+ rights in the Philippines.",
    location: "Philippines / UN Geneva",
    link: "https://ilga.org/",
    tags: ["UN", "Human Rights", "Policy"],
    featured: true,
  },
  {
    id: "adv-3",
    title: "Pride Month Community Campaign – Batangas",
    org: "EmpowerQueer Hub",
    category: "advocacy",
    description: "Join our annual Pride Month advocacy campaign in Batangas Province, featuring community marches, educational forums, art installations, and social media activations.",
    location: "Batangas, Philippines",
    link: "mailto:contact@empowerqueerhub.com",
    tags: ["Pride", "Community", "Philippines"],
  },

  // ── Internships ────────────────────────────────────────────────────────────
  {
    id: "intern-1",
    title: "EmpowerQueer Hub Communications Intern",
    org: "EmpowerQueer Hub",
    category: "internships",
    description: "A paid internship for LGBTQIA+ students and recent graduates to support content creation, social media management, event coordination, and community outreach programs.",
    location: "Batangas, Philippines (Hybrid)",
    link: "mailto:contact@empowerqueerhub.com",
    tags: ["Philippines", "Communications", "Paid"],
    featured: true,
  },
  {
    id: "intern-2",
    title: "UNDP Human Rights Intern – Asia-Pacific",
    org: "UNDP",
    category: "internships",
    description: "UNDP's Asia-Pacific internship program places students with LGBTIQ+ inclusion portfolios, providing hands-on experience in human rights programming and policy analysis.",
    location: "Bangkok / Remote",
    link: "https://www.undp.org/",
    tags: ["UN", "Human Rights", "Asia-Pacific"],
  },
  {
    id: "intern-3",
    title: "HRC Digital Advocacy Internship",
    org: "Human Rights Campaign (HRC)",
    category: "internships",
    description: "Work with HRC's digital team on advocacy campaigns, email communications, social media strategy, and online organizing for LGBTQ+ equality.",
    location: "Remote",
    link: "https://www.hrc.org/",
    tags: ["Digital", "Advocacy", "Remote"],
  },

  // ── Advisory & Governance ──────────────────────────────────────────────────
  {
    id: "gov-1",
    title: "EmpowerQueer Hub Leadership Council",
    org: "EmpowerQueer Hub",
    category: "governance",
    description: "The long-term success and ethical governance of EmpowerQueer Hub are championed by our Board of Directors and Advisory Councils. We are seeking community leaders, legal experts, healthcare professionals, and lived-experience advocates.",
    location: "Batangas, Philippines",
    link: "mailto:contact@empowerqueerhub.com",
    tags: ["Governance", "Leadership", "Board"],
    featured: true,
  },
  {
    id: "gov-2",
    title: "Youth Advisory Board Member",
    org: "The Trevor Project",
    category: "governance",
    description: "The Trevor Project's Youth Advisory Board gives LGBTQ+ young people a direct voice in shaping programs, policies, and communications that affect their communities.",
    location: "Remote",
    link: "https://www.thetrevorproject.org/",
    tags: ["Youth", "Advisory", "Policy"],
    featured: true,
  },
  {
    id: "gov-3",
    title: "Community Review Panel – ILGA World",
    org: "ILGA World",
    category: "governance",
    description: "ILGA World invites experienced LGBTQ+ advocates to join its regional review panels, providing feedback on global reports, policy submissions, and advocacy priorities.",
    location: "International",
    link: "https://ilga.org/",
    tags: ["International", "Review", "Policy"],
  },
];

/* ─── Opportunity Card ────────────────────────────────────────────────────── */

function OpportunityCard({ opp, onOpen }: { opp: Opportunity; onOpen: (o: Opportunity) => void }) {
  const cat = CATEGORIES.find(c => c.id === opp.category);
  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#A9D6B6] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      onClick={() => onOpen(opp)}
    >
      <div className="flex items-start gap-0">
        <div className={`shrink-0 w-16 flex items-center justify-center ${cat?.bg ?? "bg-[#F5F0FF]"}`} style={{ minHeight: "140px" }}>
          {cat && <cat.icon size={22} className={cat.color} />}
        </div>
        <div className="flex-1 p-5">
          <div className="flex flex-wrap gap-2 mb-2">
            {opp.featured && (
              <span className="bg-yellow-100 border border-yellow-300 text-yellow-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">Featured</span>
            )}
            <span className="bg-[#A9D6B6]/30 border border-[#A9D6B6] text-[#3A3C51] text-xs px-3 py-0.5 rounded-full">
              {cat?.label ?? opp.category}
            </span>
          </div>
          <h3 className="font-serif text-base font-bold text-[#3A3C51] mb-1 leading-snug line-clamp-2 hover:text-[#7C3AED] transition-colors">
            {opp.title}
          </h3>
          <p className="text-[#474747] text-xs mb-2 font-medium">{opp.org}{opp.location ? ` · ${opp.location}` : ""}</p>
          <p className="text-[#474747] text-sm leading-relaxed line-clamp-2">{opp.description}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Opportunity Modal ───────────────────────────────────────────────────── */

function OpportunityModal({ opp, onClose }: { opp: Opportunity; onClose: () => void }) {
  const cat = CATEGORIES.find(c => c.id === opp.category);
  const href = opp.link ?? "#";

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
              <div className={`w-20 h-20 bg-white/60 rounded-2xl flex items-center justify-center`}>
                <cat.icon size={36} className={cat.color} />
              </div>
            )}
            <p className="text-center font-semibold text-[#3A3C51] text-sm">{opp.org}</p>
            {opp.location && (
              <p className="text-center text-xs text-[#474747] bg-white/50 rounded-full px-3 py-1">{opp.location}</p>
            )}
            {opp.deadline && (
              <p className="text-center text-xs font-bold text-red-600 bg-red-50 rounded-full px-3 py-1">Deadline: {opp.deadline}</p>
            )}
          </div>

          {/* Right */}
          <div className="flex-1 p-7">
            <div className="flex flex-wrap gap-2 mb-4">
              {opp.featured && (
                <span className="bg-yellow-100 border border-yellow-300 text-yellow-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">Featured</span>
              )}
              {cat && (
                <span className={`${cat.bg} border ${cat.border} ${cat.color} text-xs px-3 py-0.5 rounded-full font-medium`}>{cat.label}</span>
              )}
            </div>
            <h3 className="font-serif text-xl font-bold text-[#3A3C51] mb-2 pr-8">{opp.title}</h3>
            <p className="text-[#7C3AED] text-xs font-semibold mb-4 uppercase tracking-wide">{opp.org}</p>
            <p className="text-[#474747] text-sm leading-relaxed mb-5">{opp.description}</p>
            {opp.tags && opp.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-6">
                {opp.tags.map(t => (
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
              <ExternalLink size={15} /> Apply / Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Submit Form ────────────────────────────────────────────────────────── */

const CONTACT_API = process.env.NEXT_PUBLIC_CONTACT_API_URL ?? "";

function OpportunitySubmitForm() {
  const [form, setForm] = useState({
    title: "", org: "", category: "", location: "", deadline: "", description: "",
    link: "", submitterName: "", submitterEmail: "",
  });
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [attachFile, setAttachFile] = useState<File | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

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
        subject: `Opportunity Submission: ${form.title}`,
        message: `
Opportunity Title: ${form.title}
Organization: ${form.org}
Category: ${form.category}
Location: ${form.location}
Deadline: ${form.deadline}
Description: ${form.description}
Link: ${form.link}
Cover Image: ${coverFile ? coverFile.name : "None"}
Attachment: ${attachFile ? attachFile.name : "None"}

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
        <p className="text-[#474747]">Your opportunity submission has been received. We&apos;ll review it and list it shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Opportunity Title *</label>
          <input required type="text" placeholder="e.g. Communications Intern – Quezon City NGO"
            value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Organization *</label>
          <input required type="text" placeholder="e.g. Wagayway Equality Inc."
            value={form.org} onChange={e => setForm(p => ({ ...p, org: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Category *</label>
          <select required value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition bg-white">
            <option value="">Select a category</option>
            {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Location</label>
          <input type="text" placeholder="e.g. Batangas, Philippines / Remote"
            value={form.location} onChange={e => setForm(p => ({ ...p, location: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Application Deadline</label>
          <input type="text" placeholder="e.g. April 30, 2026"
            value={form.deadline} onChange={e => setForm(p => ({ ...p, deadline: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Application Link / URL</label>
          <input type="url" placeholder="https://example.com/apply"
            value={form.link} onChange={e => setForm(p => ({ ...p, link: e.target.value }))}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Description *</label>
        <textarea required rows={4} placeholder="Describe the opportunity, eligibility requirements, and any key details..."
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
              <span className="text-sm text-gray-400">Upload image</span>
              <span className="text-xs text-gray-300">JPG, PNG, WebP</span>
              <input type="file" accept="image/*" className="hidden" onChange={handleCoverChange} />
            </label>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#3A3C51] mb-1.5">Attachment (Flyer / PDF)</label>
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
              <span className="text-sm text-gray-400">Upload flyer or PDF</span>
              <span className="text-xs text-gray-300">PDF, JPG, PNG</span>
              <input type="file" accept=".pdf,image/*" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) setAttachFile(f); }} />
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

      <button type="submit" disabled={sending}
        className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60">
        {sending ? "Submitting…" : <><Send size={16} /> Submit Opportunity</>}
      </button>
    </form>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function OpportunitiesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeOpp, setActiveOpp] = useState<Opportunity | null>(null);

  const visibleCategories = activeCategory
    ? CATEGORIES.filter(c => c.id === activeCategory)
    : CATEGORIES;

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#F0EBF5] to-[#E8F4EC] min-h-[600px] pt-[164px] border-b border-gray-100 flex flex-col justify-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <span className="inline-block bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Opportunities Desk</span>
          <h1 className="font-serif text-5xl font-bold text-[#3A3C51] mb-4">Grow, Lead & Make an Impact</h1>
          <p className="text-[#474747] text-xl leading-relaxed max-w-2xl">
            Jobs, fellowships, trainings, and volunteer roles — curated for LGBTQIA+ Filipinos who are ready to build skills and lead change.
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
                      All Opportunities
                      <span className={`ml-auto text-xs rounded-full px-2 py-0.5 ${!activeCategory ? "bg-white/20 text-white" : "bg-gray-100 text-gray-400"}`}>
                        {ALL_OPPORTUNITIES.length}
                      </span>
                    </button>
                  </li>
                  {CATEGORIES.map((cat) => {
                    const Icon = cat.icon;
                    const count = ALL_OPPORTUNITIES.filter(o => o.category === cat.id).length;
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
                  <p className="text-xs text-gray-400 mb-3 font-semibold uppercase tracking-wider">Post an Opportunity</p>
                  <p className="text-xs text-gray-400 leading-relaxed mb-3">Have a job, fellowship, or volunteer role to share?</p>
                  <a href="#submit-opportunity"
                    className="block text-center bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity">
                    Submit Now
                  </a>
                </div>
              </div>
            </aside>

            {/* Opportunities by Category */}
            <div className="lg:col-span-3 space-y-14">
              {visibleCategories.map((cat) => {
                const Icon = cat.icon;
                const items = ALL_OPPORTUNITIES.filter(o => o.category === cat.id);
                if (items.length === 0) return null;
                return (
                  <div key={cat.id} id={cat.id}>
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                      <div className={`w-9 h-9 ${cat.bg} border ${cat.border} rounded-xl flex items-center justify-center`}>
                        <Icon size={16} className={cat.color} />
                      </div>
                      <div>
                        <h2 className="font-serif text-xl font-bold text-[#3A3C51]">{cat.label}</h2>
                        <p className="text-gray-400 text-xs">{items.length} opportunit{items.length !== 1 ? "ies" : "y"}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {items.map(opp => <OpportunityCard key={opp.id} opp={opp} onOpen={setActiveOpp} />)}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Submit Form */}
      <section id="submit-opportunity" className="py-20 bg-gradient-to-br from-[#EFF6FF] to-[#F5F0FF] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Post an Opportunity</span>
              <h2 className="font-serif text-3xl font-bold text-[#3A3C51] mb-3">Share an Opportunity</h2>
              <p className="text-[#474747] text-lg leading-relaxed">
                Have a job opening, fellowship, scholarship, or volunteer role that could benefit our community? Submit it here.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <OpportunitySubmitForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {activeOpp && <OpportunityModal opp={activeOpp} onClose={() => setActiveOpp(null)} />}
    </main>
  );
}
