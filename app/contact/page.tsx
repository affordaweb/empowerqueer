"use client";

import { useState } from "react";
import RainbowBar from "../components/RainbowBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-white min-h-screen">
      <RainbowBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#FDF8EE] to-[#F5E6CE] py-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold text-[#5C3D2E] mb-4">
            Reach Out Anytime
          </h1>
          <p className="text-[#5C4A3A] text-xl leading-relaxed">
            We&rsquo;re here to listen, support, and collaborate.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-6">
                Contact Information
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#E8D5B0] rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#5C3D2E]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#5C3D2E] text-sm mb-1">Address</p>
                    <p className="text-[#5C4A3A] text-sm leading-relaxed">
                      EmpowerQueer Hub at Espasyo by Wagayway Equality<br />
                      National Highway, Alangilan<br />
                      Batangas City, 4200
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#E8D5B0] rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#5C3D2E]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#5C3D2E] text-sm mb-1">Phone</p>
                    <a href="tel:+639297414738" className="text-[#5C4A3A] text-sm hover:text-[#5C3D2E] transition-colors">
                      +63.929.741.4738
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#E8D5B0] rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#5C3D2E]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#5C3D2E] text-sm mb-1">Email</p>
                    <a href="mailto:contact@empowerqueerhub.com" className="text-[#5C4A3A] text-sm hover:text-[#5C3D2E] transition-colors">
                      contact@empowerqueerhub.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#E8D5B0]/10 border border-[#E8D5B0] rounded-xl p-6">
                <h3 className="font-semibold text-[#5C3D2E] mb-3">Support, Trainings &amp; Collaboration Inquiries</h3>
                <p className="text-[#5C4A3A] text-sm mb-3">EmpowerQueer Hub also welcomes messages related to:</p>
                <ul className="space-y-2 text-[#5C4A3A] text-sm list-disc pl-4">
                  <li>Training requests (mental health, SOGIESC, leadership, advocacy, community care)</li>
                  <li>Workshops and learning sessions for schools, LGUs, organizations, and community groups</li>
                  <li>Partnerships and collaborations for events, programs, or advocacy initiatives</li>
                  <li>Resource sharing or co-creation of guides, toolkits, and learning materials</li>
                </ul>
                <p className="text-[#5C4A3A] text-xs mt-4 italic">
                  You don&rsquo;t need to have everything figured out before reaching out. Whether your message is big or small, urgent or exploratory, we&rsquo;ll receive it with respect and care. All messages are handled with care and confidentiality.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-6">
                Send Us a Message
              </h2>
              {submitted ? (
                <div className="bg-[#E8D5B0]/20 border border-[#E8D5B0] rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-[#E8D5B0] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail size={28} className="text-[#5C3D2E]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#5C3D2E] mb-2">
                    Message Received
                  </h3>
                  <p className="text-[#5C4A3A]">
                    Thank you for reaching out. We&rsquo;ll get back to you with care.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#5C3D2E] text-sm font-medium mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#5C4A3A] text-sm focus:outline-none focus:border-[#E8D5B0] focus:ring-2 focus:ring-[#E8D5B0]/40 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[#5C3D2E] text-sm font-medium mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#5C4A3A] text-sm focus:outline-none focus:border-[#E8D5B0] focus:ring-2 focus:ring-[#E8D5B0]/40 transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#5C3D2E] text-sm font-medium mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+63 XXX XXX XXXX"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#5C4A3A] text-sm focus:outline-none focus:border-[#E8D5B0] focus:ring-2 focus:ring-[#E8D5B0]/40 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[#5C3D2E] text-sm font-medium mb-1.5">
                        Subject <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="How can we help?"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#5C4A3A] text-sm focus:outline-none focus:border-[#E8D5B0] focus:ring-2 focus:ring-[#E8D5B0]/40 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#5C3D2E] text-sm font-medium mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={6}
                      placeholder="Tell us more..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#5C4A3A] text-sm focus:outline-none focus:border-[#E8D5B0] focus:ring-2 focus:ring-[#E8D5B0]/40 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#E8D5B0] text-[#5C3D2E] font-semibold px-8 py-3.5 rounded-full hover:bg-[#C4784C] hover:text-white transition-all text-base"
                  >
                    Send Message
                  </button>
                  <p className="text-[#5C4A3A] text-xs text-center">
                    All messages are handled with care and confidentiality.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-[#FDF3E7]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-[#5C3D2E] mb-3">Frequently Asked Questions</h2>
            <p className="text-[#5C4A3A]">Quick answers to help you navigate the EmpowerQueer Hub with confidence.</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Who can use EmpowerQueer Hub?",
                a: "Anyone can access the Hub—whether you're part of the LGBTQIA+ community, an ally, educator, peer leader, or just seeking reliable information. The platform is free and open to all, especially those looking for safe, inclusive support.",
              },
              {
                q: "Can I submit a resource or event to be featured?",
                a: "Yes. Use the Submit a Resource or Event page to upload PDFs, flyers, or event details. You can add tags, choose categories, and submit supporting materials. All entries are reviewed by our team before being published.",
              },
              {
                q: "I want to share my story—can I remain anonymous?",
                a: "Absolutely. When submitting a story, you can choose to be credited by your full name, nickname, or remain completely anonymous. Just let us know your preference in the Message section of the submission form.",
              },
              {
                q: "How do I find LGBTQIA+ affirming services in my area?",
                a: "Visit the Service Directory page. You'll find a searchable map and filterable list of clinics, shelters, legal aid providers, and more—tagged for specific services like gender-affirming care or free HIV testing.",
              },
              {
                q: "Is the Hub mobile-friendly and accessible?",
                a: "Yes. EmpowerQueer Hub is designed to be mobile-first, screen-reader friendly, and compliant with accessibility standards. Text resizing, alt tags, and clean navigation help make the site usable for everyone.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#E8D5B0] transition-all">
                <h3 className="font-semibold text-[#5C3D2E] mb-2">{faq.q}</h3>
                <p className="text-[#5C4A3A] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
