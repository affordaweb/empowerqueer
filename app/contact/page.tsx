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
      <section className="bg-white py-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold text-[#3A3C51] mb-4">
            Reach Out Anytime
          </h1>
          <p className="text-[#474747] text-xl leading-relaxed">
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
                  <div className="w-10 h-10 bg-[#D7C4E3] rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#3A3C51]" />
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
                  <div className="w-10 h-10 bg-[#D7C4E3] rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#3A3C51]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#3A3C51] text-sm mb-1">Phone</p>
                    <a href="tel:+639297414738" className="text-[#474747] text-sm hover:text-[#3A3C51] transition-colors">
                      +63.929.741.4738
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#D7C4E3] rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#3A3C51]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#3A3C51] text-sm mb-1">Email</p>
                    <a href="mailto:contact@empowerqueerhub.com" className="text-[#474747] text-sm hover:text-[#3A3C51] transition-colors">
                      contact@empowerqueerhub.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#D7C4E3]/10 border border-[#D7C4E3] rounded-xl p-6">
                <h3 className="font-semibold text-[#3A3C51] mb-3">We Can Help With:</h3>
                <ul className="space-y-2 text-[#474747] text-sm">
                  <li>Training requests and workshops for schools, LGUs, and organizations</li>
                  <li>Partnerships and collaborative programs</li>
                  <li>Resource sharing and referrals</li>
                  <li>General inquiries and community support</li>
                </ul>
                <p className="text-[#474747] text-xs mt-4 italic">
                  All messages are handled with care and confidentiality.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-6">
                Send Us a Message
              </h2>
              {submitted ? (
                <div className="bg-[#D7C4E3]/20 border border-[#D7C4E3] rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-[#D7C4E3] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail size={28} className="text-[#3A3C51]" />
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
                        required
                        placeholder="Your name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#D7C4E3] focus:ring-2 focus:ring-[#D7C4E3]/40 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#D7C4E3] focus:ring-2 focus:ring-[#D7C4E3]/40 transition-all"
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
                        placeholder="+63 XXX XXX XXXX"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#D7C4E3] focus:ring-2 focus:ring-[#D7C4E3]/40 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                        Subject <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="How can we help?"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#D7C4E3] focus:ring-2 focus:ring-[#D7C4E3]/40 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={6}
                      placeholder="Tell us more..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#D7C4E3] focus:ring-2 focus:ring-[#D7C4E3]/40 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#D7C4E3] text-[#3A3C51] font-semibold px-8 py-3.5 rounded-full hover:bg-[#3A3C51] hover:text-white transition-all text-base"
                  >
                    Send Message
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

      <Footer />
    </main>
  );
}
