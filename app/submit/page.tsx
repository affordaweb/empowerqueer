"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Upload } from "lucide-react";

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submissionType, setSubmissionType] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1A0A2E] to-[#292733] min-h-[600px] pt-[164px] border-b border-white/10 flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-[#EC4899]/10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Submit</span>
          <h1 className="font-serif text-5xl font-bold text-white mb-4">
            Submit a Resource or Event
          </h1>
          <p className="text-white/75 text-xl leading-relaxed max-w-2xl">
            Your knowledge can support someone&rsquo;s journey—let&rsquo;s make it accessible.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#474747] leading-relaxed mb-10">
            EmpowerQueer Hub is built by the community, for the community—with every submission, story, and resource helping to create a stronger, more supportive space for LGBTQIA+ individuals and allies. Whether it&rsquo;s a mental health guide, a legal aid checklist, an event flyer, or a peer-led workshop, what you share can guide someone toward understanding, relief, or the courage to take their next step. Upload your file using the form, choose the appropriate tags so others can find it easily, and let us know how you&rsquo;d like to be credited—by full name, nickname, or anonymously. Every contribution is reviewed with care, and once approved, it becomes part of a growing hub of community-powered support.
          </p>

          {submitted ? (
            <div className="bg-[#A9D6B6]/20 border border-[#A9D6B6] rounded-2xl p-10 text-center">
              <div className="w-12 h-12 icon-bg-peach rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload size={22} className="icon-peach icon-anim" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#3A3C51] mb-2">Submission Received</h3>
              <p className="text-[#474747]">
                Thank you for contributing. Our team will review your submission within 3–5 working days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                  Title of Submission <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Title of your resource or event"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all"
                />
              </div>

              <div>
                <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                  Type of Submission <span className="text-red-400">*</span>
                </label>
                <select
                  required
                  onChange={(e) => setSubmissionType(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all"
                >
                  <option value="">Select type...</option>
                  <option value="resource">Resource (PDF, Toolkit, Infographic, etc.)</option>
                  <option value="event">Event (Workshop, Webinar, Training)</option>
                  <option value="publication">Publication</option>
                  <option value="research">Research</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {submissionType === "other" && (
                <div>
                  <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                    If &ldquo;Other,&rdquo; please specify
                  </label>
                  <input
                    type="text"
                    placeholder="Please describe the type"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all"
                  />
                </div>
              )}

              <div>
                <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                  Short Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Briefly describe what this resource or event is about..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-[#3A3C51] text-sm font-medium mb-2">
                  Category / Tags
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {["Mental Health", "HIV Awareness", "Legal Aid", "Economic Inclusion", "Youth-Focused", "Trans/Nonbinary", "Disability Inclusion", "General Support"].map((tag) => (
                    <label key={tag} className="flex items-center gap-2 text-[#474747] text-sm cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-[#D7C4E3] focus:ring-[#A9D6B6]" />
                      {tag}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                  Upload File <span className="text-red-400">*</span>
                </label>
                <div className="border-2 border-dashed border-[#A9D6B6] rounded-xl p-6 text-center hover:border-[#D7C4E3] transition-colors">
                  <Upload size={22} className="icon-peach icon-anim mx-auto mb-2" />
                  <p className="text-[#474747] text-sm mb-1">DOC or PDF only</p>
                  <input type="file" accept=".doc,.docx,.pdf" className="hidden" id="file-upload" />
                  <label
                    htmlFor="file-upload"
                    className="btn-p btn-p-peach inline-flex items-center gap-2 text-sm px-5 py-2 cursor-pointer mt-1"
                  >
                    Choose File
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                  Link (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all"
                />
              </div>

              {submissionType === "event" && (
                <div className="bg-[#F3F3F3] border border-[#A9D6B6] rounded-xl p-6 space-y-4">
                  <h3 className="font-semibold text-[#3A3C51] text-sm">Event-Specific Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">Event Date <span className="text-red-400">*</span></label>
                      <input type="date" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all" />
                    </div>
                    <div>
                      <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">Event Time <span className="text-red-400">*</span></label>
                      <input type="time" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">Location / Platform <span className="text-red-400">*</span></label>
                    <input type="text" placeholder="Venue address or online platform" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all" />
                  </div>
                  <div>
                    <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">Registration Link or Contact Info</label>
                    <input type="text" placeholder="Link or contact details" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all" />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
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
                    required
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                  Organization (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Your organization or affiliation"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all"
                />
              </div>

              <div>
                <label className="block text-[#3A3C51] text-sm font-medium mb-2">
                  How should we credit you?
                </label>
                <div className="flex flex-wrap gap-4">
                  {["Full Name", "Nickname", "Anonymous"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-[#474747] text-sm cursor-pointer">
                      <input type="radio" name="credit" value={opt} className="text-[#D7C4E3] focus:ring-[#A9D6B6]" />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                  Additional Message or Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Anything else you'd like us to know..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  id="consent"
                  className="mt-0.5 rounded border-gray-300 text-[#D7C4E3] focus:ring-[#A9D6B6]"
                />
                <label htmlFor="consent" className="text-[#474747] text-sm leading-relaxed">
                  I confirm that I have the right to submit this content and agree to EmpowerQueer Hub&rsquo;s submission guidelines.
                </label>
              </div>

              <button
                type="submit"
                className="btn-p btn-p-peach flex w-full items-center justify-center gap-2 px-8 py-3.5 text-base"
              >
                Submit
              </button>
              <p className="text-[#474747] text-xs text-center">
                All submissions are reviewed with care before publishing.
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
