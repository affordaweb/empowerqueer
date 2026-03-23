"use client";

import { useState } from "react";
import { Facebook, Twitter, Youtube, ChevronRight, Phone, MapPin, X, Mic2, Upload, ImageIcon } from "lucide-react";

/* ─── Story Modal ─────────────────────────────────────────────────────────── */

export function StoryModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageName, setImageName] = useState("");

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageName(file.name);
    setImagePreview(URL.createObjectURL(file));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] rounded-3xl shadow-2xl flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Left — branding panel */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#0F0520] via-[#1A0A2E] to-[#1E0D38] lg:w-[42%] shrink-0 p-10 flex flex-col">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#EC4899]/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#7C3AED]/25 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-[#7C3AED] to-[#EC4899] rounded-2xl flex items-center justify-center mb-8 shadow-lg">
              <Mic2 size={22} className="text-white" />
            </div>
            <span className="inline-block bg-white/10 border border-white/20 text-white/70 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-5">Community Stories</span>
            <h2 className="font-serif text-3xl font-bold text-white leading-tight mb-4">
              Voices Among Us
            </h2>
            <p className="text-white/65 text-base leading-relaxed">
              Share your story. Speak your truth. Your voice matters here.
            </p>
          </div>

          <div className="relative mt-10 space-y-4">
            {[
              "Every story shared creates a ripple of courage.",
              "You can remain anonymous — your comfort comes first.",
              "All submissions are reviewed with care and confidentiality.",
            ].map((line, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] mt-2 shrink-0" />
                <p className="text-white/50 text-sm leading-relaxed">{line}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-white lg:flex-1 p-8 lg:p-10 overflow-y-auto max-h-[92vh]">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full py-16 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7C3AED] to-[#EC4899] rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
                <Mic2 size={26} className="text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#3A3C51] mb-2">Story Received</h3>
              <p className="text-[#474747] text-sm leading-relaxed max-w-xs">
                Thank you for sharing your voice. Your story will be reviewed with care and published soon.
              </p>
              <button
                onClick={onClose}
                className="mt-8 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold text-sm px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h3 className="font-serif text-2xl font-bold text-[#3A3C51] mb-1">Submit Your Story</h3>
              <p className="text-[#474747] text-sm mb-7">Your story can guide someone toward understanding, relief, or courage.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name or nickname"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all"
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
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                    Post Content <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Share your story here..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all resize-none"
                  />
                </div>

                <div>
                  <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                    Featured Image <span className="text-[#9CA3AF] font-normal">(Optional)</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl overflow-hidden hover:border-[#7C3AED]/50 transition-colors">
                    {imagePreview ? (
                      <div className="relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={imagePreview} alt="Preview" className="w-full h-36 object-cover" />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <label htmlFor="story-image-footer" className="cursor-pointer text-white text-xs font-semibold bg-black/50 px-3 py-1.5 rounded-lg">
                            Change Image
                          </label>
                        </div>
                      </div>
                    ) : (
                      <label htmlFor="story-image-footer" className="flex flex-col items-center justify-center gap-2 py-7 cursor-pointer">
                        <ImageIcon size={24} className="text-gray-300" />
                        <span className="text-[#474747] text-sm">Click to upload a featured image</span>
                        <span className="text-gray-400 text-xs">JPG, PNG, WEBP accepted</span>
                      </label>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      id="story-image-footer"
                      className="hidden"
                      onChange={handleFile}
                    />
                  </div>
                  {imageName && (
                    <p className="text-[#474747] text-xs mt-1.5 flex items-center gap-1.5">
                      <Upload size={11} /> {imageName}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition-opacity text-sm"
                >
                  Submit My Story
                </button>
                <p className="text-[#9CA3AF] text-xs text-center">
                  Your story is handled with care and confidentiality.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Footer data ─────────────────────────────────────────────────────────── */

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Donate", href: "/donate/" },
  { label: "About the Hub", href: "/about/" },
  { label: "Accessibility Statement", href: "/accessibility/" },
  { label: "Submit Resource or Event", href: "/submit/" },
  { label: "FAQs", href: "/faqs/" },
  { label: "Voices Among Us", href: "/voices/" },
  { label: "Photo Gallery", href: "/gallery/" },
];

const supportLines = [
  { label: "NCMH Crisis Hotline", value: "1553", href: "tel:1553" },
  { label: "LoveYourself Support", value: "+63 922 536 6462", href: "tel:+639225366462" },
  { label: "Wagayway Equality", value: "+63 929 741 4738", href: "tel:+639297414738" },
  { label: "DOH Health Line", value: "1800-10-0800-3", href: "tel:180010008003" },
  { label: "In Crisis? Find Help", value: "View Directory →", href: "/directory/" },
];

const recentPosts = [
  { title: "2025 HIV & AIDS Surveillance Update: What the Data Tells Us", href: "/kopisodes/" },
  { title: "Human Rights 101 by Wagayway Equality", href: "/kopisodes/" },
  { title: "HIV 101 by Wagayway Equality", href: "/kopisodes/" },
  { title: "SOGIESC 101 by Wagayway Equality Inc", href: "/kopisodes/" },
];

/* ─── Footer ──────────────────────────────────────────────────────────────── */

export default function Footer() {
  const [storyOpen, setStoryOpen] = useState(false);

  return (
    <>
      {storyOpen && <StoryModal onClose={() => setStoryOpen(false)} />}

      <footer className="bg-[#292733] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/empower-queer-logo.png" alt="Empower Queer Hub" className="h-10 w-auto" />
              </div>
              <p className="text-[#7A7A7A] text-sm leading-relaxed mb-5">
                EmpowerQueer Hub is a safe, community-built space offering resources, support, and visibility for LGBTQIA+ individuals across Batangas and beyond.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  className="w-9 h-9 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-[#7A7A7A] hover:bg-[#A9D6B6] hover:text-white hover:border-[#A9D6B6] transition-all">
                  <Facebook size={16} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                  className="w-9 h-9 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-[#7A7A7A] hover:bg-[#A9D6B6] hover:text-white hover:border-[#A9D6B6] transition-all">
                  <Twitter size={16} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                  className="w-9 h-9 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-[#7A7A7A] hover:bg-[#A9D6B6] hover:text-white hover:border-[#A9D6B6] transition-all">
                  <Youtube size={16} />
                </a>
              </div>
              <div className="space-y-1 text-[#7A7A7A] text-xs">
                <div className="flex items-center gap-2"><Phone size={12} /><span>+63.929.741.4738</span></div>
                <div className="flex items-center gap-2"><MapPin size={12} /><span>Batangas, Philippines</span></div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-[#7A7A7A] hover:text-white text-sm transition-colors flex items-center gap-1.5 group">
                      <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 shrink-0 text-white" />
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    data-footer-story-btn
                    onClick={() => setStoryOpen(true)}
                    className="text-[#7A7A7A] hover:text-white text-sm transition-colors flex items-center gap-1.5 group w-full text-left"
                  >
                    <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 shrink-0 text-white" />
                    Share Your Story
                  </button>
                </li>
              </ul>
            </div>

            {/* Get Help Now */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-1 uppercase tracking-wider">Get Help Now</h4>
              <p className="text-[#7A7A7A] text-xs mb-4 leading-relaxed">You are not alone. Reach out anytime.</p>
              <ul className="space-y-3">
                {supportLines.map((line) => (
                  <li key={line.label}>
                    <a href={line.href} className="group block">
                      <p className="text-[#7A7A7A] text-xs group-hover:text-white transition-colors">{line.label}</p>
                      <p className="text-white font-semibold text-sm group-hover:text-[#A9D6B6] transition-colors">{line.value}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Recent Posts</h4>
              <ul className="space-y-4">
                {recentPosts.map((post) => (
                  <li key={post.title}>
                    <a href={post.href} className="text-[#7A7A7A] hover:text-white text-sm transition-colors leading-relaxed block">
                      {post.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[#9A9A9A] text-xs text-center sm:text-left">
              © 2026 EmpowerQueer Hub. All rights reserved.
            </p>
            <div className="rainbow-bar h-[3px] w-16 rounded-full" />
            <p className="text-[#9A9A9A] text-xs">
              Batangas, Philippines · Founded 2018 · Crafted by:{" "}
              <a href="https://affordawebsolutions.com/" target="_blank" rel="noopener noreferrer"
                className="text-[#A9D6B6] hover:text-white transition-colors">
                AffordaWeb Solutions
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
