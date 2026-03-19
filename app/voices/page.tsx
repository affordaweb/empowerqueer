"use client";

import { useState } from "react";
import RainbowBar from "../components/RainbowBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mic2 } from "lucide-react";

export default function VoicesPage() {
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
      <section className="bg-gradient-to-br from-[#F0F7FF] to-[#DBEAFE] py-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-[#BFDBFE] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mic2 size={30} className="text-[#1E3A5F]" />
          </div>
          <h1 className="font-serif text-5xl font-bold text-[#1E3A5F] mb-4">Voices Among Us</h1>
          <p className="text-[#374151] text-xl leading-relaxed">
            Share Your Story. Speak Your Truth.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#374151] leading-relaxed mb-10">
            Got a story to share? Whether it&rsquo;s a moment of joy, a challenge you&rsquo;ve overcome, or a truth that needs to be heard—we want to hear it. Use the form below to submit your story. In the Message section, please mention if you&rsquo;d like to be credited by your full name, a nickname, or remain anonymous.
          </p>

          {submitted ? (
            <div className="bg-[#BFDBFE]/20 border border-[#BFDBFE] rounded-2xl p-10 text-center">
              <div className="w-16 h-16 bg-[#BFDBFE] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic2 size={28} className="text-[#1E3A5F]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1E3A5F] mb-2">Story Received</h3>
              <p className="text-[#374151]">
                Thank you for sharing your voice. Your story will be reviewed with care.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[#1E3A5F] text-sm font-medium mb-1.5">
                  Your Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name or nickname"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#374151] text-sm focus:outline-none focus:border-[#BFDBFE] focus:ring-2 focus:ring-[#BFDBFE]/40 transition-all"
                />
              </div>
              <div>
                <label className="block text-[#1E3A5F] text-sm font-medium mb-1.5">
                  Post Title <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Give your story a title"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#374151] text-sm focus:outline-none focus:border-[#BFDBFE] focus:ring-2 focus:ring-[#BFDBFE]/40 transition-all"
                />
              </div>
              <div>
                <label className="block text-[#1E3A5F] text-sm font-medium mb-1.5">
                  Post Content <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  rows={10}
                  placeholder="Share your story here..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#374151] text-sm focus:outline-none focus:border-[#BFDBFE] focus:ring-2 focus:ring-[#BFDBFE]/40 transition-all resize-none"
                />
              </div>
              <div>
                <label className="block text-[#1E3A5F] text-sm font-medium mb-1.5">
                  Featured Image (Optional)
                </label>
                <div className="border-2 border-dashed border-[#BFDBFE] rounded-xl p-6 text-center hover:border-[#2563EB] transition-colors">
                  <p className="text-[#374151] text-sm mb-2">No image selected</p>
                  <input type="file" accept="image/*" className="hidden" id="voice-image" />
                  <label
                    htmlFor="voice-image"
                    className="inline-block bg-[#BFDBFE] text-[#1E3A5F] text-sm font-semibold px-5 py-2 rounded-full cursor-pointer hover:bg-[#2563EB] hover:text-white transition-all"
                  >
                    Add Image
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#BFDBFE] text-[#1E3A5F] font-semibold px-8 py-3.5 rounded-full hover:bg-[#2563EB] hover:text-white transition-all text-base"
              >
                Submit
              </button>
              <p className="text-[#374151] text-xs text-center">
                Your story is handled with care and confidentiality.
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
