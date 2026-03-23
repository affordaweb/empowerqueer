"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";

const contactFaqs = [
  {
    q: "Who can use EmpowerQueer Hub?",
    a: "Anyone can access the Hub — whether you're part of the LGBTQIA+ community, an ally, educator, peer leader, or just seeking reliable information. The platform is free and open to all, especially those looking for safe, inclusive support.",
  },
  {
    q: "Can I submit a resource or event to be featured?",
    a: "Yes. Use the Submit a Resource or Event page to upload PDFs, flyers, or event details. You can add tags, choose categories, and submit supporting materials. All entries are reviewed by our team before being published.",
  },
  {
    q: "I want to share my story — can I remain anonymous?",
    a: "Absolutely. When submitting a story, you can choose to be credited by your full name, nickname, or remain completely anonymous. Just let us know your preference in the Message section of the submission form.",
  },
  {
    q: "How do I find LGBTQIA+-affirming services in my area?",
    a: "Visit the Service Directory page. You'll find a filterable list of clinics, shelters, legal aid providers, and more — tagged for specific services like gender-affirming care or free HIV testing.",
  },
  {
    q: "Is the Hub mobile-friendly and accessible?",
    a: "Yes. EmpowerQueer Hub is designed to be mobile-first, screen-reader friendly, and compliant with accessibility standards. Text resizing, alt tags, and clean navigation help make the site usable for everyone.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    await fetch("/api/submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "CONTACT",
        data: {
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          subject: fd.get("subject"),
          message: fd.get("message"),
        },
        submittedBy: fd.get("email"),
      }),
    });
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[600px] flex flex-col justify-end border-b border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/gallery/Equality-Desk-Hero.jpg" alt="Contact" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A2E]/90 via-[#1A0A2E]/55 to-[#1A0A2E]/25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Contact Us</span>
          <h1 className="font-serif text-5xl font-bold text-white mb-4">
            Reach Out Anytime
          </h1>
          <p className="text-white/75 text-xl leading-relaxed max-w-2xl">
            We&rsquo;re here to listen, support, and collaborate.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-6">
                Contact Information
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-4">
                  <div className="w-10 h-10 icon-bg-sky rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={22} className="icon-sky icon-anim" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#3A3C51] text-sm mb-1">Address</p>
                    <p className="text-[#474747] text-sm leading-relaxed">
                      EmpowerQueer Hub at Espasyo by Wagayway Equality<br />
                      National Highway, Alangilan<br />
                      Batangas City, 4200
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4">
                  <div className="w-10 h-10 icon-bg-mint rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={22} className="icon-mint icon-anim" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#3A3C51] text-sm mb-1">Phone</p>
                    <a href="tel:+639297414738" className="text-[#474747] text-sm hover:text-[#3A3C51] transition-colors">
                      +63.929.741.4738
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4">
                  <div className="w-10 h-10 icon-bg-peach rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={22} className="icon-peach icon-anim" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#3A3C51] text-sm mb-1">Email</p>
                    <a href="mailto:contact@empowerqueerhub.com" className="text-[#474747] text-sm hover:text-[#3A3C51] transition-colors">
                      contact@empowerqueerhub.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#A9D6B6]/10 border border-[#A9D6B6] rounded-xl p-6">
                <h3 className="font-semibold text-[#3A3C51] mb-3">Support, Trainings &amp; Collaboration Inquiries</h3>
                <p className="text-[#474747] text-sm mb-3">EmpowerQueer Hub also welcomes messages related to:</p>
                <ul className="space-y-2 text-[#474747] text-sm list-disc pl-4">
                  <li>Training requests (mental health, SOGIESC, leadership, advocacy, community care)</li>
                  <li>Workshops and learning sessions for schools, LGUs, organizations, and community groups</li>
                  <li>Partnerships and collaborations for events, programs, or advocacy initiatives</li>
                  <li>Resource sharing or co-creation of guides, toolkits, and learning materials</li>
                </ul>
                <p className="text-[#474747] text-xs mt-4 italic">
                  You don&rsquo;t need to have everything figured out before reaching out. Whether your message is big or small, urgent or exploratory, we&rsquo;ll receive it with respect and care. All messages are handled with care and confidentiality.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-6">
                Send Us a Message
              </h2>
              {submitted ? (
                <div className="bg-[#A9D6B6]/20 border border-[#A9D6B6] rounded-2xl p-10 text-center">
                  <div className="w-12 h-12 icon-bg-mint rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail size={22} className="icon-mint icon-anim" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#3A3C51] mb-2">
                    Message Received
                  </h3>
                  <p className="text-[#474747]">
                    Thank you for reaching out. We&rsquo;ll get back to you with care.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+63 XXX XXX XXXX"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                        Subject <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        placeholder="How can we help?"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={6}
                      placeholder="Tell us more..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-p btn-p-mint flex w-full items-center justify-center gap-2 px-8 py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                  <p className="text-[#474747] text-xs text-center">
                    All messages are handled with care and confidentiality.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F0520] via-[#1A0A2E] to-[#1E0D38] py-20">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#EC4899]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#7C3AED]/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block bg-white/10 border border-white/20 text-white/70 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">FAQs</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
              Got questions?<br />We&rsquo;ve got answers.
            </h2>
            <p className="text-white/50 text-lg">
              Quick answers to help you navigate EmpowerQueer Hub with confidence.
            </p>
          </div>
          <div className="space-y-3">
            {contactFaqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openFaq === i
                    ? "bg-white/10 border-white/20"
                    : "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/15"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-white text-base leading-snug">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-white/50 transition-transform duration-300 ${openFaq === i ? "rotate-180 text-[#A78BFA]" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-white/65 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
