"use client";

import { useState } from "react";
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
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#F0EBF5] to-[#E8F4EC] pb-[130px] pt-[164px] px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-12 icon-bg-lavender rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mic2 size={22} className="icon-lavender icon-anim" />
          </div>
          <h1 className="font-serif text-5xl font-bold text-[#3A3C51] mb-4">Voices Among Us</h1>
          <p className="text-[#474747] text-xl leading-relaxed">
            Share Your Story. Speak Your Truth.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#474747] leading-relaxed mb-10">
            Got a story to share? Whether it&rsquo;s a moment of joy, a challenge you&rsquo;ve overcome, or a truth that needs to be heard—we want to hear it. Use the form below to submit your story. In the Message section, please mention if you&rsquo;d like to be credited by your full name, a nickname, or remain anonymous.
          </p>

          {submitted ? (
            <div className="bg-[#A9D6B6]/20 border border-[#A9D6B6] rounded-2xl p-10 text-center">
              <div className="w-12 h-12 icon-bg-lavender rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic2 size={22} className="icon-lavender icon-anim" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#3A3C51] mb-2">Story Received</h3>
              <p className="text-[#474747]">
                Thank you for sharing your voice. Your story will be reviewed with care.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                  Your Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name or nickname"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all"
                />
              </div>
              <div>
                <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                  Post Title <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Give your story a title"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all"
                />
              </div>
              <div>
                <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                  Post Content <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  rows={10}
                  placeholder="Share your story here..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all resize-none"
                />
              </div>
              <div>
                <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                  Featured Image (Optional)
                </label>
                <div className="border-2 border-dashed border-[#A9D6B6] rounded-xl p-6 text-center hover:border-[#D7C4E3] transition-colors">
                  <p className="text-[#474747] text-sm mb-2">No image selected</p>
                  <input type="file" accept="image/*" className="hidden" id="voice-image" />
                  <label
                    htmlFor="voice-image"
                    className="btn-p btn-p-lavender inline-flex items-center gap-2 text-sm px-5 py-2 cursor-pointer"
                  >
                    Add Image
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="btn-p btn-p-lavender flex w-full items-center justify-center gap-2 px-8 py-3.5 text-base"
              >
                Submit
              </button>
              <p className="text-[#474747] text-xs text-center">
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
