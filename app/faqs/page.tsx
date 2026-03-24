"use client";

import { useState, type ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronDown, HelpCircle, BookOpen, FolderOpen, MapPin, Calendar, Lock, Users } from "lucide-react";

/* ─── Data ───────────────────────────────────────────────────────────────── */

const categories = [
  { id: "general",     label: "General",         icon: HelpCircle, color: "text-[#7C3AED]", bg: "bg-[#F5F0FF]", border: "border-[#DDD6FE]", activeBg: "bg-[#7C3AED]" },
  { id: "submissions", label: "Submissions",      icon: FolderOpen, color: "text-[#EC4899]", bg: "bg-[#FDF2F8]", border: "border-[#FBCFE8]", activeBg: "bg-[#EC4899]" },
  { id: "directory",   label: "Directory",        icon: MapPin,     color: "text-[#059669]", bg: "bg-[#F0FDF4]", border: "border-[#BBF7D0]", activeBg: "bg-[#059669]" },
  { id: "events",      label: "Events & Training",icon: Calendar,   color: "text-[#D97706]", bg: "bg-[#FFF7ED]", border: "border-[#FDE68A]", activeBg: "bg-[#D97706]" },
  { id: "privacy",     label: "Privacy & Access", icon: Lock,       color: "text-[#0EA5E9]", bg: "bg-[#F0F9FF]", border: "border-[#BAE6FD]", activeBg: "bg-[#0EA5E9]" },
  { id: "community",   label: "Community",        icon: Users,      color: "text-[#7C3AED]", bg: "bg-[#F5F0FF]", border: "border-[#DDD6FE]", activeBg: "bg-[#7C3AED]" },
];

const faqs: Array<{ category: string; q: string; a: ReactNode }> = [
  {
    category: "general",
    q: "What is EmpowerQueer Hub?",
    a: "EmpowerQueer Hub is a community-driven platform offering LGBTQIA+-affirming resources, directories, stories, and event listings. It's designed to be a safe, inclusive space where individuals can find support, share experiences, and connect with services across Batangas Province and beyond.",
  },
  {
    category: "general",
    q: "Is the Hub free to use?",
    a: "Yes, everything on EmpowerQueer Hub is completely free to access. No sign-up or payment is required to view resources, read articles, or use the directory.",
  },
  {
    category: "general",
    q: "Do I need an account to use the Hub?",
    a: "No, you don't need an account to access or submit anything on the site. It's open to all visitors without requiring sign-ins.",
  },
  {
    category: "general",
    q: "Is EmpowerQueer Hub mobile-friendly?",
    a: "Yes. The website is designed to work smoothly on all devices—phones, tablets, and desktops—so you can access it wherever you are.",
  },
  {
    category: "general",
    q: "Is the site accessible for users with disabilities?",
    a: <>We are committed to accessibility and aim to follow best practices, including screen reader compatibility, keyboard navigation, and clear contrast design. Learn more about <a href="/accessibility" className="text-[#7C3AED] hover:underline font-medium">our accessibility statement</a>. Let us know if you experience any issues—we&rsquo;ll do our best to improve.</>,
  },
  {
    category: "submissions",
    q: "Can I submit a resource, event, or story?",
    a: <>Absolutely! Anyone can contribute a file, event, or personal story through the <a href="/submit" className="text-[#7C3AED] hover:underline font-medium">Submit a Resource or Event page</a>. All submissions are reviewed by our team before being published.</>,
  },
  {
    category: "submissions",
    q: "What types of content can I submit?",
    a: "You can submit toolkits, guides, infographics, event posters, training materials, personal stories, or links to relevant external resources. All content should be respectful, safe, and supportive of the LGBTQIA+ community.",
  },
  {
    category: "submissions",
    q: "Can I stay anonymous when submitting?",
    a: "Yes. During submission, you can choose how you'd like to be credited—by full name, nickname, or anonymously. Just mention your preference in the Message section of the form.",
  },
  {
    category: "submissions",
    q: "How long does it take for my submission to be reviewed?",
    a: "We aim to review all submissions within 3–5 working days. You'll be contacted if any clarification is needed before publishing.",
  },
  {
    category: "submissions",
    q: "How are resources and services chosen for the site?",
    a: "All entries are manually reviewed to ensure they are relevant, LGBTQIA+-affirming, and aligned with the Hub's mission. We prioritize services that are inclusive, safe, and actively engaged in community support.",
  },
  {
    category: "directory",
    q: "Can I suggest a clinic, group, or organization to be added to the directory?",
    a: <>Yes, you can recommend new listings through our <a href="/contact" className="text-[#7C3AED] hover:underline font-medium">Contact page</a> or <a href="/submit" className="text-[#7C3AED] hover:underline font-medium">submission form</a>. Please include as much detail as possible, such as location, contact info, and services offered.</>,
  },
  {
    category: "directory",
    q: "How do I know if a clinic or service listed is LGBTQIA+-friendly?",
    a: "We do our best to feature only affirming spaces. Entries are tagged with terms like \"Trans-Inclusive,\" \"Free HIV Testing,\" or \"Youth Support\" so users can quickly identify safe services. We also welcome user feedback to keep listings accurate and accountable.",
  },
  {
    category: "events",
    q: "Where can I find upcoming LGBTQIA+ events?",
    a: <>Visit the <a href="/events" className="text-[#7C3AED] hover:underline font-medium">Events page</a> and <a href="/trainings" className="text-[#7C3AED] hover:underline font-medium">Trainings page</a> to see upcoming workshops, webinars, pride events, and trainings. You can also view past events and community photos.</>,
  },
  {
    category: "events",
    q: "Can I host or promote an event through the Hub?",
    a: <>Yes, if your event is LGBTQIA+ inclusive and relevant to the community, you can submit the details through the <a href="/submit" className="text-[#7C3AED] hover:underline font-medium">event submission form</a>.</>,
  },
  {
    category: "privacy",
    q: "How is my information used?",
    a: <>Any information you provide through forms is used solely to contact you regarding your submission. We do not share or sell your personal details. Read our full <a href="/privacy-policy" className="text-[#7C3AED] hover:underline font-medium">Privacy Policy</a> for more.</>,
  },
  {
    category: "community",
    q: "I want to help — how can I get involved?",
    a: <>You can contribute by <a href="/submit" className="text-[#7C3AED] hover:underline font-medium">submitting content</a>, sharing the site with your networks, or offering your time as a volunteer. We&rsquo;re always looking for community contributors, writers, and outreach supporters.</>,
  },
  {
    category: "community",
    q: "Can organizations partner with EmpowerQueer Hub?",
    a: <>Yes, we welcome partnerships with organizations that share our values. Use the <a href="/contact" className="text-[#7C3AED] hover:underline font-medium">Contact Us form</a> to start a conversation with our team.</>,
  },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeCat = categories.find((c) => c.id === activeCategory)!;
  const filtered = faqs.filter((f) => f.category === activeCategory);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[600px] flex flex-col justify-end border-b border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/6266316/pexels-photo-6266316.jpeg"
          alt="FAQs"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A2E]/90 via-[#1A0A2E]/55 to-[#1A0A2E]/25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Help &amp; FAQs</span>
          <h1 className="font-serif text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white/75 text-xl leading-relaxed max-w-2xl">
            Quick answers, honest guidance, and zero judgment — just what you need, when you need it.
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 items-start">

            {/* Left — sticky category nav */}
            <div className="lg:sticky lg:top-28">
              <p className="text-[#7C3AED] font-semibold tracking-widest uppercase text-sm mb-3">Browse by Topic</p>
              <h2 className="font-serif text-3xl font-bold text-[#3A3C51] leading-tight mb-4">
                What can we help you with?
              </h2>
              <p className="text-[#474747] text-sm leading-relaxed mb-8">
                Whether you&rsquo;re here to download resources, submit a story, or explore the Hub — pick a topic below and find your answer fast.
              </p>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="rounded-2xl overflow-hidden shadow-md mb-8">
                <img
                  src="https://images.pexels.com/photos/6266316/pexels-photo-6266316.jpeg"
                  alt="Community support"
                  className="w-full h-48 object-cover"
                />
              </div>

              <nav className="space-y-2">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id;
                  const count = faqs.filter((f) => f.category === cat.id).length;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => { setActiveCategory(cat.id); setOpenIndex(0); }}
                      className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl border text-left transition-all ${
                        isActive
                          ? `${cat.activeBg} border-transparent text-white`
                          : `${cat.bg} ${cat.border} ${cat.color} hover:opacity-80`
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <Icon size={16} />
                        <span className="font-semibold text-sm">{cat.label}</span>
                      </span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-white/80 text-[#3A3C51]"}`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </nav>

              <p className="text-[#474747] text-xs leading-relaxed mt-8">
                Can&rsquo;t find your answer? <a href="/contact/" className="text-[#7C3AED] hover:underline font-medium">Contact us</a> and we&rsquo;ll get back to you within 3–5 business days.
              </p>
            </div>

            {/* Right — FAQ accordion */}
            <div>
              {/* Category header */}
              <div className={`rounded-2xl border p-6 mb-6 flex items-center gap-4 ${activeCat.bg} ${activeCat.border}`}>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-white shadow-sm shrink-0`}>
                  <activeCat.icon size={20} className={activeCat.color} />
                </div>
                <div>
                  <p className={`font-bold text-base ${activeCat.color}`}>{activeCat.label}</p>
                  <p className="text-[#474747] text-xs">{filtered.length} question{filtered.length !== 1 ? "s" : ""} in this category</p>
                </div>
              </div>

              <div className="space-y-3">
                {filtered.map((faq, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                      openIndex === i
                        ? "border-[#7C3AED]/30 shadow-sm"
                        : "border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <button
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white"
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    >
                      <span className={`font-semibold text-sm leading-snug ${openIndex === i ? "text-[#7C3AED]" : "text-[#3A3C51]"}`}>
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={17}
                        className={`shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180 text-[#7C3AED]" : "text-gray-400"}`}
                      />
                    </button>
                    {openIndex === i && (
                      <div className="px-6 pb-6 bg-white border-t border-gray-50">
                        <p className="text-[#474747] text-sm leading-relaxed pt-3">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 bg-gradient-to-br from-[#1A0A2E] to-[#292733] rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#7C3AED]/20 pointer-events-none" />
                <div className="relative">
                  <BookOpen size={28} className="text-[#A78BFA] mb-4" />
                  <h3 className="font-serif text-xl font-bold text-white mb-2">Still have questions?</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">
                    Our team is here to help. Reach out anytime and we&rsquo;ll respond with care.
                  </p>
                  <a
                    href="/contact/"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
