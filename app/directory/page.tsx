"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Phone, MapPin, ExternalLink, Globe, Heart, Activity, Shield, Users, Star,
  Stethoscope, Building2, Scale, X, Send, CheckCircle, Upload,
} from "lucide-react";

/* ─── Types ──────────────────────────────────────────────────────────────── */

interface Listing {
  id: string;
  name: string;
  category: string;
  description: string;
  address?: string;
  phone?: string;
  hotline?: string;
  website?: string;
  tags?: string[];
  featured?: boolean;
}

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

/* ─── Listings Data ───────────────────────────────────────────────────────── */

const ALL_LISTINGS: Listing[] = [

  // ── Community Center ──────────────────────────────────────────────────────
  {
    id: "cc-1",
    name: "Espasyo Community Center by Wagayway Equality",
    category: "community-center",
    description: "Espasyo is a vibrant and inclusive LGBTQIA+ community center established by Wagayway Equality to serve the queer community of Batangas. Offers safe space, peer support, education, and community events.",
    address: "Batangas City, Batangas, Philippines",
    phone: "09671382063",
    tags: ["Safe Space", "Batangas", "Peer Support"],
    featured: true,
  },
  {
    id: "cc-2",
    name: "Rainbow Rights Philippines",
    category: "community-center",
    description: "A Manila-based LGBTQIA+ rights advocacy organization providing legal assistance, paralegal training, and community organizing support for Filipino LGBT individuals.",
    address: "Quezon City, Metro Manila, Philippines",
    website: "https://rainbowrights.ph",
    tags: ["Manila", "Legal Aid", "Advocacy"],
  },

  // ── Advocacy & Rights ──────────────────────────────────────────────────────
  {
    id: "ar-1",
    name: "Equality Desk – Batangas City Government",
    category: "advocacy-rights",
    description: "The Equality Desk is a dedicated in-office support hub developed by Wagayway Equality to serve LGBTQIA+ individuals within the Batangas City Government, providing referrals, support, and anti-discrimination resources.",
    address: "Batangas City Hall, Batangas City, Philippines",
    phone: "09763427850",
    tags: ["Government", "Anti-Discrimination", "Referrals"],
    featured: true,
  },
  {
    id: "ar-2",
    name: "Commission on Human Rights – Philippines (CHR)",
    category: "advocacy-rights",
    description: "The CHR is the national human rights institution in the Philippines. Accepts complaints of human rights violations including discrimination based on sexual orientation and gender identity.",
    address: "Commonwealth Avenue, Quezon City, Philippines",
    phone: "(02) 294-8704",
    website: "https://chr.gov.ph",
    tags: ["National", "Human Rights", "Complaints"],
  },
  {
    id: "ar-3",
    name: "Bahaghari (LGBTQ+ Alliance of the Philippines)",
    category: "advocacy-rights",
    description: "Bahaghari is a national alliance of LGBTQ+ organizations in the Philippines advocating for the passage of the SOGIE Equality Bill and anti-discrimination protections.",
    address: "Metro Manila, Philippines",
    website: "https://www.facebook.com/bahaghariph",
    tags: ["National", "SOGIE Bill", "Alliance"],
  },

  // ── Mental Health ──────────────────────────────────────────────────────────
  {
    id: "mh-1",
    name: "National Center for Mental Health – Crisis Hotline",
    category: "mental-health",
    description: "A 24/7 hotline providing immediate psychological first aid and support for people experiencing emotional distress, mental health crises, or suicidal ideation.",
    hotline: "1553",
    phone: "(02) 8531-9001",
    tags: ["24/7", "Crisis", "Hotline"],
    featured: true,
  },
  {
    id: "mh-2",
    name: "POPMH – Lipa Chapter",
    category: "mental-health",
    description: "The Psychological Organization for the Promotion of Mental Health (POPMH) Lipa is a youth-driven initiative providing peer support, mental health advocacy, and community wellness programs.",
    address: "Lipa City, Batangas, Philippines",
    tags: ["Youth", "Peer Support", "Batangas"],
  },
  {
    id: "mh-3",
    name: "MindNation",
    category: "mental-health",
    description: "Online mental health platform connecting Filipinos to licensed therapists, coaches, and peer support. Offers accessible and affordable teleconsultations.",
    website: "https://mindnation.com",
    tags: ["Online", "Therapy", "Teleconsultation"],
  },
  {
    id: "mh-4",
    name: "MentalHealthPH",
    category: "mental-health",
    description: "Mental health advocacy organization and peer support network focused on raising awareness and reducing stigma. Maintains a directory of mental health professionals and free support groups.",
    website: "https://mentalhealthph.org",
    phone: "0917-899-8727",
    tags: ["Advocacy", "Peer Support", "Directory"],
  },
  {
    id: "mh-5",
    name: "RecoveryHub Philippines",
    category: "mental-health",
    description: "Licensed therapy services and recovery support for individuals facing mental health challenges, trauma, and substance use. Offers individual, group, and family therapy.",
    address: "Makati City, Metro Manila, Philippines",
    website: "https://recoveryhub.ph",
    tags: ["Therapy", "Recovery", "Trauma"],
  },
  {
    id: "mh-6",
    name: "In Touch Community Services",
    category: "mental-health",
    description: "Provides free mental health crisis intervention and counseling services to Filipinos in need. LGBTQIA+-affirming professionals available.",
    phone: "(02) 893-7603",
    hotline: "1-800-1888-1553",
    website: "https://www.in-touch.org",
    tags: ["Free", "Crisis", "Counseling"],
  },

  // ── HIV Services ───────────────────────────────────────────────────────────
  {
    id: "hiv-1",
    name: "Batangas City Health Office – Social Hygiene Clinic",
    category: "hiv-services",
    description: "This local government initiative provides free, walk-in testing services for HIV and other sexually transmitted infections. Confidential results and referrals to treatment hubs.",
    address: "Batangas City Health Office, Batangas City, Philippines",
    phone: "0437238890",
    tags: ["Free Testing", "Batangas", "Walk-in"],
    featured: true,
  },
  {
    id: "hiv-2",
    name: "Batangas Regional Hospital – HIV Treatment Hub",
    category: "hiv-services",
    description: "Accredited HIV treatment hub offering ART (antiretroviral therapy), CD4 count monitoring, viral load testing, and psychosocial support for PLHIV.",
    address: "Kumintang Ibaba, Batangas City, Philippines",
    phone: "(043) 300-8899",
    tags: ["ART", "Treatment", "Batangas"],
    featured: true,
  },
  {
    id: "hiv-3",
    name: "LoveYourself Inc.",
    category: "hiv-services",
    description: "Philippines-based HIV testing, prevention, treatment, and advocacy organization. Operates community-based sexual health clinics with LGBTQIA+-affirming staff.",
    address: "San Juan City and Makati City, Metro Manila, Philippines",
    phone: "0917-888-LOVE",
    website: "https://loveyourself.ph",
    tags: ["Manila", "Testing", "Community"],
  },
  {
    id: "hiv-4",
    name: "TLF Share Collective",
    category: "hiv-services",
    description: "A health and human rights organization for Filipino sexual and gender minorities, offering HIV testing, counseling, treatment support, and legal aid.",
    address: "Malate, Manila, Philippines",
    phone: "(02) 8524-0779",
    website: "https://tlfshare.com",
    tags: ["Manila", "Testing", "Legal Aid"],
  },
  {
    id: "hiv-5",
    name: "Remedios AIDS Foundation",
    category: "hiv-services",
    description: "One of the first AIDS service organizations in the Philippines, providing HIV counseling, testing, treatment facilitation, home-based care, and community education.",
    address: "Malate, Manila, Philippines",
    phone: "(02) 8525-5622",
    tags: ["Manila", "Counseling", "Testing"],
  },

  // ── Sexual Health ──────────────────────────────────────────────────────────
  {
    id: "sh-1",
    name: "LoveYourself Anglo – Sexual Health Clinic",
    category: "sexual-health",
    description: "LGBTQIA+-affirming sexual health clinic offering free HIV rapid testing, STI testing and treatment, condom distribution, and PrEP consultations.",
    address: "Makati City, Metro Manila, Philippines",
    phone: "0917-888-LOVE",
    website: "https://loveyourself.ph",
    tags: ["PrEP", "STI", "Free Testing"],
    featured: true,
  },
  {
    id: "sh-2",
    name: "Planned Parenthood – Philippines Partners",
    category: "sexual-health",
    description: "Affiliate clinics offering comprehensive sexual and reproductive health services, inclusive of LGBTQIA+ clients. Services include contraception, STI screening, and counseling.",
    address: "Multiple locations, Metro Manila",
    website: "https://www.ippf.org/about-us/member-associations/philippines",
    tags: ["Reproductive Health", "STI", "Contraception"],
  },

  // ── Healthcare Resources ───────────────────────────────────────────────────
  {
    id: "hc-1",
    name: "Batangas Medical Center – Wellness Zone",
    category: "healthcare",
    description: "The Wellness Zone is a confidential and inclusive health service hub designed to cater to the health and wellness needs of the community, including LGBTQIA+ individuals.",
    address: "Kumintang Ibaba, Batangas City, Philippines",
    phone: "0437408307",
    tags: ["Batangas", "Inclusive", "Wellness"],
    featured: true,
  },
  {
    id: "hc-2",
    name: "Philippine General Hospital – HIV/AIDS Clinic",
    category: "healthcare",
    description: "PGH's HIV/AIDS clinic provides comprehensive care for PLHIV including ART, laboratory services, and psychological support. One of the largest treatment hubs in the Philippines.",
    address: "Taft Avenue, Manila, Philippines",
    phone: "(02) 8554-8400",
    website: "https://pgh.gov.ph",
    tags: ["Manila", "ART", "Laboratory"],
  },
  {
    id: "hc-3",
    name: "Department of Health – Philippines",
    category: "healthcare",
    description: "The Philippine DOH provides national health programs including HIV/AIDS prevention, mental health initiatives, and community health services. Hotline for health-related queries.",
    hotline: "1555",
    phone: "(02) 8651-7800",
    website: "https://doh.gov.ph",
    tags: ["National", "Health Programs", "Hotline"],
  },

  // ── Diagnostic & Testing ──────────────────────────────────────────────────
  {
    id: "diag-1",
    name: "HIV Self-Testing – LoveYourself Kit",
    category: "diagnostic",
    description: "Discreet HIV self-testing kits available for purchase or free distribution through partner organizations. Results in 20 minutes. Available online and at select clinics.",
    phone: "0917-888-LOVE",
    website: "https://loveyourself.ph",
    tags: ["Self-Test", "Discreet", "Online"],
    featured: true,
  },
  {
    id: "diag-2",
    name: "Batangas City – Community-Based HIV Testing",
    category: "diagnostic",
    description: "Community-based HIV testing and counseling available through Wagayway Equality and the Batangas City Health Office. Free, confidential, and walk-in friendly.",
    address: "Batangas City, Philippines",
    phone: "09671382063",
    tags: ["Free", "Walk-in", "Batangas"],
    featured: true,
  },
  {
    id: "diag-3",
    name: "Philippine Red Cross – HIV Testing Services",
    category: "diagnostic",
    description: "The Philippine Red Cross operates HIV testing and counseling centers across the country, open to all individuals including LGBTQIA+ community members.",
    phone: "(02) 8790-2300",
    website: "https://redcross.org.ph",
    tags: ["Nationwide", "Red Cross", "Counseling"],
  },

  // ── Youth Services ─────────────────────────────────────────────────────────
  {
    id: "ys-1",
    name: "STRAP (Society of Transsexual Women of the Philippines)",
    category: "youth-services",
    description: "STRAP provides peer support, advocacy, and community services specifically for trans women in the Philippines, including youth outreach and health referrals.",
    address: "Metro Manila, Philippines",
    website: "https://www.facebook.com/STRAPHILIPPINES",
    tags: ["Trans Women", "Youth", "Peer Support"],
    featured: true,
  },
  {
    id: "ys-2",
    name: "Young LBQT+ Philippines",
    category: "youth-services",
    description: "A youth-led organization for young lesbians, bisexuals, queers, and transsexuals in the Philippines, providing safe spaces, education, and advocacy opportunities.",
    address: "Metro Manila, Philippines",
    tags: ["Youth", "Women", "Safe Space"],
  },

  // ── Support Resources ──────────────────────────────────────────────────────
  {
    id: "sr-1",
    name: "Tahanan – LGBTQIA+ Crisis Shelter",
    category: "support-resources",
    description: "Crisis shelter and temporary safe housing for LGBTQIA+ individuals facing homelessness, domestic violence, or family rejection. Provides psychosocial support and referrals.",
    address: "Metro Manila, Philippines",
    phone: "0917-111-0000",
    tags: ["Shelter", "Crisis", "Safe Housing"],
    featured: true,
  },
  {
    id: "sr-2",
    name: "GrayMatters Psychological Services",
    category: "support-resources",
    description: "Professional psychological services and teleconsultations for mental wellness, emotional health, and identity-affirmative therapy. LGBTQIA+-affirming practitioners.",
    address: "Quezon City, Metro Manila, Philippines",
    website: "https://graymatters.ph",
    tags: ["Therapy", "Affirming", "Teleconsultation"],
  },
  {
    id: "sr-3",
    name: "Ascend Development Solutions",
    category: "support-resources",
    description: "ESG/SDG-aligned trainings and capacity-building programs supporting governance, compliance, and institutional growth for organizations serving LGBTQIA+ communities.",
    address: "Metro Manila, Philippines",
    tags: ["Training", "Governance", "Capacity Building"],
  },
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

      <button type="submit" disabled={sending}
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

  const visibleCategories = activeCategory
    ? CATEGORIES.filter(c => c.id === activeCategory)
    : CATEGORIES;

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[600px] flex flex-col justify-end border-b border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/gallery/EmpQueer-Image-151.jpg" alt="Directory" className="absolute inset-0 w-full h-full object-cover object-bottom" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A2E]/90 via-[#1A0A2E]/55 to-[#1A0A2E]/25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Service Directory</span>
          <h1 className="font-serif text-5xl font-bold text-white mb-4">Find LGBTQIA+ Services Near You</h1>
          <p className="text-white/75 text-xl leading-relaxed max-w-2xl">
            Trusted LGBTQIA+-affirming clinics, hotlines, community centers, and support organizations across Batangas Province and the Philippines.
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

      <Footer />

      {activeListing && <ListingModal listing={activeListing} onClose={() => setActiveListing(null)} />}
    </main>
  );
}
