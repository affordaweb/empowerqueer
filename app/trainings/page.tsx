"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  BookOpen, Heart, Shield, Users, Mic, Scale, Activity, Star, Lightbulb,
  ExternalLink, X, Send, CheckCircle, Upload, FileText, Globe,
} from "lucide-react";

/* ─── Types ──────────────────────────────────────────────────────────────── */

interface Training {
  id: string;
  title: string;
  org: string;
  category: string;
  description: string;
  format?: string;       // Online / In-Person / Hybrid
  duration?: string;     // e.g. "Self-paced" / "3 hours"
  cost?: string;         // "Free" / "Paid"
  cover?: string;
  link?: string;
  tags?: string[];
  featured?: boolean;
}

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

/* ─── Trainings Data ──────────────────────────────────────────────────────── */

const ALL_TRAININGS: Training[] = [

  // ── Inclusion & Diversity ────────────────────────────────────────────────
  {
    id: "id-1",
    title: "Sexual Orientation, Gender Identity & Expression (SOGIE) 101",
    org: "Wagayway Equality Inc.",
    category: "inclusion-diversity",
    description: "A foundational training module on Sexual Orientation, Gender Identity, and Expression (SOGIE) developed by Wagayway Equality. Covers core concepts, terminology, and affirming language for individuals, families, and organizations.",
    format: "In-Person / Online",
    cost: "Free",
    link: "/kopisodes/",
    tags: ["SOGIE", "Foundational", "Philippines"],
    featured: true,
  },
  {
    id: "id-2",
    title: "LGBTQIA+ Inclusion in the Workplace",
    org: "Human Rights Campaign (HRC) Foundation",
    category: "inclusion-diversity",
    description: "Free e-learning modules from HRC's Workplace Equality Program covering LGBTQ+ inclusion policies, allyship best practices, and creating affirming workplace cultures. Downloadable facilitator guides included.",
    format: "Online / Self-Paced",
    duration: "Self-paced",
    cost: "Free",
    link: "https://www.hrc.org/resources/workplace",
    tags: ["Workplace", "Allyship", "HR"],
    featured: true,
  },
  {
    id: "id-3",
    title: "Inclusive Language Guide & Workshop",
    org: "PFLAG National",
    category: "inclusion-diversity",
    description: "A free, downloadable guide and facilitation toolkit on using inclusive, affirming language when communicating with and about LGBTQ+ individuals, families, and communities.",
    format: "Online / Downloadable",
    cost: "Free",
    link: "https://pflag.org/resource/",
    tags: ["Language", "Communication", "Allyship"],
  },
  {
    id: "id-4",
    title: "Building Safe Spaces: LGBTQ+ Inclusion Training",
    org: "GLSEN (Gay, Lesbian and Straight Education Network)",
    category: "inclusion-diversity",
    description: "GLSEN's widely-used training for educators and community workers on creating physically and emotionally safe environments for LGBTQ+ students and youth. Includes SafeZone certification pathway.",
    format: "Online / In-Person",
    duration: "3 hours",
    cost: "Free",
    link: "https://www.glsen.org/",
    tags: ["Schools", "Educators", "Safe Space"],
    featured: true,
  },

  // ── Advocacy & Rights ─────────────────────────────────────────────────────
  {
    id: "ar-1",
    title: "Human Rights 101",
    org: "Wagayway Equality Inc.",
    category: "advocacy-rights",
    description: "A community-level training on human rights frameworks, SOGIESC rights under Philippine and international law, and how to document and respond to rights violations.",
    format: "In-Person",
    cost: "Free",
    link: "/kopisodes/",
    tags: ["Philippines", "Legal Framework", "SOGIESC"],
    featured: true,
  },
  {
    id: "ar-2",
    title: "Advocating for LGBTQ+ Rights: Online Course",
    org: "Amnesty International",
    category: "advocacy-rights",
    description: "A free online course from Amnesty International covering international human rights law, advocacy strategies, and how to take effective action for LGBTQ+ rights at local and global levels.",
    format: "Online / Self-Paced",
    duration: "Self-paced",
    cost: "Free",
    link: "https://www.amnesty.org/en/what-we-do/discrimination/lgbti-rights/",
    tags: ["International Law", "Advocacy", "Action"],
  },
  {
    id: "ar-3",
    title: "SOGIE Equality Bill Advocacy Training",
    org: "Bahaghari / EmpowerQueer Hub",
    category: "advocacy-rights",
    description: "A training on the SOGIE Equality Bill — its history, provisions, and why it matters — equipping advocates to lobby for its passage in schools, communities, and local government units.",
    format: "In-Person / Online",
    cost: "Free",
    link: "mailto:contact@empowerqueerhub.com",
    tags: ["Philippines", "Legislative", "Lobbying"],
  },
  {
    id: "ar-4",
    title: "UN Human Rights Mechanisms: A Training for Civil Society",
    org: "Office of the High Commissioner for Human Rights (OHCHR)",
    category: "advocacy-rights",
    description: "OHCHR's free online training on how civil society organizations can engage with UN human rights mechanisms, including the UPR, treaty bodies, and special procedures.",
    format: "Online / Self-Paced",
    cost: "Free",
    link: "https://www.ohchr.org/en/training-and-capacity-building",
    tags: ["UN", "Civil Society", "International"],
  },

  // ── Mental Health & Wellness ───────────────────────────────────────────────
  {
    id: "mh-1",
    title: "Mental Health First Aid for LGBTQ+ Communities",
    org: "SAMHSA (Substance Abuse and Mental Health Services Administration)",
    category: "mental-health",
    description: "A free evidence-based training that teaches participants how to identify, understand, and respond to mental health and substance use crises specifically tailored for LGBTQ+ community members.",
    format: "Online / In-Person",
    duration: "8 hours",
    cost: "Free",
    link: "https://www.samhsa.gov/",
    tags: ["Mental Health", "First Aid", "Crisis"],
    featured: true,
  },
  {
    id: "mh-2",
    title: "Supporting LGBTQ+ Youth Mental Health",
    org: "The Trevor Project",
    category: "mental-health",
    description: "A training for educators, parents, and community workers on how to support the mental health of LGBTQ+ youth — covering risk factors, protective factors, and crisis intervention basics.",
    format: "Online / Self-Paced",
    cost: "Free",
    link: "https://www.thetrevorproject.org/resources/",
    tags: ["Youth", "Crisis Intervention", "Educators"],
    featured: true,
  },
  {
    id: "mh-3",
    title: "Psychological First Aid (PFA) Training",
    org: "World Health Organization (WHO)",
    category: "mental-health",
    description: "WHO's free Psychological First Aid guide and training materials — particularly useful for LGBTQ+ community workers responding to discrimination, family rejection, and crisis situations.",
    format: "Online / Downloadable",
    cost: "Free",
    link: "https://www.who.int/publications/i/item/9789241548205",
    tags: ["Crisis", "Community Workers", "WHO"],
  },

  // ── HIV & Sexual Health ───────────────────────────────────────────────────
  {
    id: "hsh-1",
    title: "HIV 101 by Wagayway Equality",
    org: "Wagayway Equality Inc.",
    category: "hiv-sexual-health",
    description: "A community-led training on HIV basics — transmission, prevention, testing, and living with HIV — designed for the Filipino LGBTQIA+ community. Conducted in Filipino and English.",
    format: "In-Person / Online",
    cost: "Free",
    link: "/kopisodes/",
    tags: ["Philippines", "HIV Basics", "Prevention"],
    featured: true,
  },
  {
    id: "hsh-2",
    title: "HIV Counseling and Testing Skills Training",
    org: "Department of Health – Philippines",
    category: "hiv-sexual-health",
    description: "DOH-accredited training for healthcare workers and community health volunteers on HIV counseling, rapid testing protocols, and referral pathways for key populations in the Philippines.",
    format: "In-Person",
    duration: "3 days",
    cost: "Free (DOH-accredited)",
    link: "https://doh.gov.ph",
    tags: ["Philippines", "Healthcare", "Accredited"],
  },
  {
    id: "hsh-3",
    title: "PrEP and U=U: Community Education Training",
    org: "LoveYourself Inc.",
    category: "hiv-sexual-health",
    description: "A free community education training on PrEP (pre-exposure prophylaxis) and U=U (Undetectable = Untransmittable) — covering eligibility, access, and destigmatizing HIV treatment.",
    format: "Online / In-Person",
    cost: "Free",
    link: "https://loveyourself.ph",
    tags: ["PrEP", "U=U", "Philippines"],
    featured: true,
  },
  {
    id: "hsh-4",
    title: "Sexual Health Education for LGBTQ+ Communities",
    org: "Planned Parenthood",
    category: "hiv-sexual-health",
    description: "Comprehensive sexual health education resources covering STI prevention, safer sex practices, and LGBTQ+-affirming healthcare access. Free educator and facilitator guides available.",
    format: "Online / Downloadable",
    cost: "Free",
    link: "https://www.plannedparenthood.org/learn/sexual-orientation-gender/lgbtq",
    tags: ["Sexual Health", "STI", "Educators"],
  },

  // ── Youth & Education ──────────────────────────────────────────────────────
  {
    id: "ye-1",
    title: "LGBTQ+-Inclusive Education: A Toolkit for Teachers",
    org: "UNESCO",
    category: "youth-education",
    description: "UNESCO's comprehensive toolkit for making classrooms and school systems more inclusive for LGBTQIA+ students — with lesson plans, facilitator guides, and policy recommendations. Free to download.",
    format: "Online / Downloadable",
    cost: "Free",
    link: "https://www.unesco.org/en/education/lgbtiq-inclusion",
    tags: ["Teachers", "Schools", "Curriculum"],
    featured: true,
  },
  {
    id: "ye-2",
    title: "Coming Out Support Training for School Counselors",
    org: "The Trevor Project",
    category: "youth-education",
    description: "A training for school counselors and social workers on how to provide affirming support to LGBTQ+ youth who are navigating coming out, including safety planning and family engagement.",
    format: "Online / Self-Paced",
    cost: "Free",
    link: "https://www.thetrevorproject.org/",
    tags: ["Counselors", "Coming Out", "Youth"],
  },
  {
    id: "ye-3",
    title: "Safe Space Kit Training for Educators",
    org: "GLSEN",
    category: "youth-education",
    description: "GLSEN's Safe Space Kit includes training materials, classroom resources, and facilitation guides to help educators support LGBTQ+ students and build more inclusive school environments.",
    format: "Online / Downloadable",
    cost: "Free",
    link: "https://www.glsen.org/activity/glsen-safe-space-kit",
    tags: ["Educators", "Safe Space", "Downloadable"],
  },
  {
    id: "ye-4",
    title: "Supporting LGBTQ+ Children and Adolescents",
    org: "UNICEF",
    category: "youth-education",
    description: "UNICEF guidance and training materials for parents, teachers, and community workers on how to support the wellbeing and rights of LGBTQ+ children and young people.",
    format: "Online / Downloadable",
    cost: "Free",
    link: "https://www.unicef.org/reports/transgender-children-adolescents",
    tags: ["Youth", "Parents", "Wellbeing"],
  },

  // ── Leadership & Capacity Building ────────────────────────────────────────
  {
    id: "lc-1",
    title: "Wagayway Equality Volunteers Academy",
    org: "Wagayway Equality Inc.",
    category: "leadership",
    description: "A leadership and volunteer development program grounded in lived LGBTQIA+ experience. Covers community systems, peer facilitation, advocacy planning, and inclusive leadership principles.",
    format: "In-Person",
    cost: "Free",
    link: "mailto:contact@empowerqueerhub.com",
    tags: ["Philippines", "Leadership", "Volunteer"],
    featured: true,
  },
  {
    id: "lc-2",
    title: "LGBTQ+ Nonprofit Leadership Essentials",
    org: "OutRight Action International",
    category: "leadership",
    description: "A capacity-building resource for emerging LGBTQ+ nonprofit leaders covering board governance, fundraising, communications, and strategic planning for social change organizations.",
    format: "Online / Downloadable",
    cost: "Free",
    link: "https://outrightinternational.org/our-work/research",
    tags: ["Nonprofit", "Governance", "Strategy"],
  },
  {
    id: "lc-3",
    title: "SDG Training for LGBTQIA+ Advocates",
    org: "Ascend Development Solutions",
    category: "leadership",
    description: "Expert-led training on applying the Sustainable Development Goals (SDGs) to organizational work and LGBTQIA+ community advocacy — connecting local advocacy to global frameworks.",
    format: "In-Person / Online",
    cost: "Free (Community Rate)",
    link: "mailto:contact@empowerqueerhub.com",
    tags: ["SDGs", "Governance", "Advocacy"],
  },

  // ── Community Organizing ──────────────────────────────────────────────────
  {
    id: "co-1",
    title: "Community Organizing for LGBTQ+ Rights",
    org: "ILGA World",
    category: "community-organizing",
    description: "ILGA World's guide and training materials on grassroots community organizing for LGBTQ+ rights — covering coalition building, mobilization, messaging, and movement sustainability.",
    format: "Online / Downloadable",
    cost: "Free",
    link: "https://ilga.org/",
    tags: ["Grassroots", "Coalition", "Mobilization"],
    featured: true,
  },
  {
    id: "co-2",
    title: "Equality Desk Training: Community-Based Support",
    org: "Wagayway Equality Inc.",
    category: "community-organizing",
    description: "Training on how to establish and operate a community-based Equality Desk — a local hub providing LGBTQIA+ support, referrals, and anti-discrimination resources in barangays and LGUs.",
    format: "In-Person",
    cost: "Free",
    link: "mailto:contact@empowerqueerhub.com",
    tags: ["Philippines", "Barangay", "LGU"],
  },
  {
    id: "co-3",
    title: "Peer Support Group Facilitation Training",
    org: "EmpowerQueer Hub",
    category: "community-organizing",
    description: "A training for community volunteers on how to facilitate LGBTQIA+ peer support groups — covering active listening, group dynamics, crisis response, and self-care for facilitators.",
    format: "In-Person / Online",
    cost: "Free",
    link: "mailto:contact@empowerqueerhub.com",
    tags: ["Peer Support", "Facilitation", "Volunteer"],
  },

  // ── Human Rights Education ─────────────────────────────────────────────────
  {
    id: "hr-1",
    title: "Born Free and Equal: Human Rights Education",
    org: "OHCHR",
    category: "human-rights",
    description: "A training resource based on the landmark OHCHR publication 'Born Free and Equal', covering state obligations to protect LGBTQ+ rights under international human rights law.",
    format: "Online / Downloadable",
    cost: "Free",
    link: "https://www.ohchr.org/en/publications/special-issue-publications/born-free-and-equal-sexual-orientation-gender-identity-and",
    tags: ["International Law", "OHCHR", "Free PDF"],
    featured: true,
  },
  {
    id: "hr-2",
    title: "Human Rights Documentation Training",
    org: "OHCHR / Frontline Defenders",
    category: "human-rights",
    description: "Free online modules on documenting human rights violations, including how to record and report discrimination and violence against LGBTQ+ individuals — for advocates and community paralegals.",
    format: "Online / Self-Paced",
    cost: "Free",
    link: "https://www.ohchr.org/en/training-and-capacity-building",
    tags: ["Documentation", "Legal", "Defenders"],
  },
  {
    id: "hr-3",
    title: "Intersectionality and LGBTQ+ Rights: A Training Guide",
    org: "Amnesty International",
    category: "human-rights",
    description: "A training guide on intersectionality — how race, class, disability, gender, and ethnicity intersect with LGBTQ+ identities — and what this means for rights-based advocacy approaches.",
    format: "Online / Downloadable",
    cost: "Free",
    link: "https://www.amnesty.org/en/what-we-do/discrimination/lgbti-rights/",
    tags: ["Intersectionality", "Advocacy", "Race"],
  },

  // ── Digital Skills & Advocacy ──────────────────────────────────────────────
  {
    id: "ds-1",
    title: "Digital Security for LGBTQ+ Activists",
    org: "Front Line Defenders",
    category: "digital-skills",
    description: "A free training on digital security practices — protecting personal data, secure communication tools, and online safety — specifically designed for LGBTQ+ human rights defenders.",
    format: "Online / Self-Paced",
    cost: "Free",
    link: "https://www.frontlinedefenders.org/en/programme/digital-protection",
    tags: ["Digital Safety", "Security", "Defenders"],
    featured: true,
  },
  {
    id: "ds-2",
    title: "Social Media Advocacy for LGBTQ+ Organizations",
    org: "HRC Foundation",
    category: "digital-skills",
    description: "A practical guide and training for LGBTQ+ organizations on using social media platforms effectively for advocacy, storytelling, and community mobilization.",
    format: "Online / Downloadable",
    cost: "Free",
    link: "https://www.hrc.org/resources",
    tags: ["Social Media", "Storytelling", "Campaigns"],
  },
  {
    id: "ds-3",
    title: "Online Platforms for Community Organizing",
    org: "EmpowerQueer Hub",
    category: "digital-skills",
    description: "A practical workshop on using digital tools — Facebook Groups, Canva, Google Forms, and messaging apps — for LGBTQIA+ community organizing, event coordination, and peer support.",
    format: "Online / Workshop",
    cost: "Free",
    link: "mailto:contact@empowerqueerhub.com",
    tags: ["Philippines", "Tools", "Organizing"],
  },

  // ── Livelihood & Empowerment ───────────────────────────────────────────────
  {
    id: "liv-1",
    title: "Financial Empowerment Training for LGBTQIA+ Individuals",
    org: "EmpowerQueer Hub",
    category: "livelihood",
    description: "Practical sessions on budgeting, saving, and financial planning tailored for LGBTQIA+ individuals in the Philippines — covering livelihood options, emergency funds, and navigating financial discrimination.",
    format: "In-Person / Online",
    cost: "Free",
    link: "mailto:contact@empowerqueerhub.com",
    tags: ["Finance", "Livelihood", "Philippines"],
    featured: true,
  },
  {
    id: "liv-2",
    title: "TESDA Free Skills Training – Open to LGBTQIA+",
    org: "TESDA (Technical Education and Skills Development Authority)",
    category: "livelihood",
    description: "TESDA offers free vocational and technical training programs for all Filipinos, including LGBTQIA+ individuals. Programs range from culinary arts and beauty care to IT and health services.",
    format: "In-Person",
    cost: "Free",
    link: "https://www.tesda.gov.ph",
    tags: ["Philippines", "Vocational", "Certification"],
    featured: true,
  },
  {
    id: "liv-3",
    title: "Entrepreneurship for LGBTQ+ Professionals",
    org: "DOLE (Department of Labor and Employment)",
    category: "livelihood",
    description: "DOLE's livelihood assistance and entrepreneurship training programs, open to LGBTQIA+ Filipinos — covering business planning, microenterprise development, and employment assistance.",
    format: "In-Person",
    cost: "Free",
    link: "https://www.dole.gov.ph",
    tags: ["Entrepreneurship", "Business", "Philippines"],
  },
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

      <button type="submit" disabled={sending}
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

  const visibleCategories = activeCategory
    ? CATEGORIES.filter(c => c.id === activeCategory)
    : CATEGORIES;

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[600px] flex flex-col justify-end border-b border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/gallery/EmpQueer-Image-214.jpg" alt="Trainings" className="absolute inset-0 w-full h-full object-cover object-bottom" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A2E]/90 via-[#1A0A2E]/55 to-[#1A0A2E]/25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Trainings & Workshops</span>
          <h1 className="font-serif text-5xl font-bold text-white mb-4">Learn, Grow & Lead</h1>
          <p className="text-white/75 text-xl leading-relaxed max-w-2xl">
            Free LGBTQIA+ trainings, workshops, and capacity-building programs — for advocates, educators, healthcare workers, and community members.
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
