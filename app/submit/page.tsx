"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Upload } from "lucide-react";
import { getRecaptchaToken } from "@/lib/recaptcha";

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submissionType, setSubmissionType] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");
    try {
      const form = e.currentTarget;
      let recaptchaToken: string | undefined;
      try { recaptchaToken = await getRecaptchaToken("submit"); } catch { /* proceed without token */ }
      const fd = new FormData(form);
      const typeMap: Record<string, string> = {
        resource: "RESOURCE",
        event: "EVENT",
        publication: "RESOURCE",
        research: "RESOURCE",
        other: "RESOURCE",
      };
      const apiType = typeMap[submissionType] || "RESOURCE";
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: apiType,
          recaptchaToken,
          data: {
            title: fd.get("title"),
            submissionType,
            submissionTypeOther: fd.get("typeOther") || null,
            description: fd.get("description"),
            tags: Array.from(e.currentTarget.querySelectorAll<HTMLInputElement>("input[type=checkbox]:checked")).map((cb) => cb.value),
            link: fd.get("link") || null,
            eventDate: fd.get("eventDate") || null,
            eventTime: fd.get("eventTime") || null,
            eventLocation: fd.get("eventLocation") || null,
            eventRegLink: fd.get("eventRegLink") || null,
            organization: fd.get("organization") || null,
            credit: fd.get("credit") || null,
            notes: fd.get("notes") || null,
          },
          submittedBy: fd.get("email") as string,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[600px] border-b border-white/10 flex flex-col justify-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.pexels.com/photos/2027059/pexels-photo-2027059.jpeg" alt="Submit" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A2E]/90 via-[#1A0A2E]/55 to-[#1A0A2E]/25" />
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

      <section className="py-20 bg-[#F3F3F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_560px] gap-12 items-start">

            {/* ── Left ── */}
            <div className="lg:sticky lg:top-28">
              <p className="text-[#7C3AED] font-semibold tracking-widest uppercase text-sm mb-3">Community Submissions</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#3A3C51] leading-tight mb-4">
                Submit a Resource or Event
              </h2>
              <p className="text-[#474747] text-lg leading-relaxed mb-8">
                Share your knowledge, resources, or events with the EmpowerQueer Hub network — and reach LGBTQIA+ Filipinos across Batangas and beyond.
              </p>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.pexels.com/photos/2027059/pexels-photo-2027059.jpeg"
                  alt="Community gathering"
                  className="w-full h-72 object-cover"
                />
              </div>

              <p className="text-[#474747] text-sm leading-relaxed">
                EmpowerQueer Hub is built by the community, for the community — with every submission helping to create a stronger, more supportive space for LGBTQIA+ individuals and allies. Whether it&rsquo;s a <a href="/resources" className="text-[#7C3AED] hover:underline">mental health guide</a>, a legal aid checklist, an <a href="/events" className="text-[#7C3AED] hover:underline">event flyer</a>, or a <a href="/trainings" className="text-[#7C3AED] hover:underline">peer-led workshop</a>, what you share can guide someone toward understanding, relief, or the courage to take their next step. Every contribution is reviewed with care, and once approved, it becomes part of a growing <a href="/directory" className="text-[#7C3AED] hover:underline">hub of community-powered support</a>.
              </p>
            </div>

            {/* ── Right — Form ── */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 icon-bg-peach rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload size={22} className="icon-peach icon-anim" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#3A3C51] mb-2">Submission Received</h3>
              <p className="text-[#474747] text-sm">
                Thank you for contributing. Our team will review your submission within 3–5 working days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#3A3C51] mb-1">Submission Details</h3>
                <p className="text-gray-400 text-xs mb-5">Fields marked <span className="text-red-400">*</span> are required.</p>
              </div>
              <div>
                <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                  Title of Submission <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="title"
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
                    name="typeOther"
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
                  name="description"
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
                  Upload File <span className="text-[#9CA3AF] font-normal">(Optional — attach link below if available)</span>
                </label>
                <div className="border-2 border-dashed border-[#A9D6B6] rounded-xl p-6 text-center hover:border-[#D7C4E3] transition-colors">
                  <Upload size={22} className="icon-peach icon-anim mx-auto mb-2" />
                  <p className="text-[#474747] text-sm mb-1">DOC or PDF only</p>
                  <input type="file" accept=".doc,.docx,.pdf" className="hidden" id="file-upload" name="file" />
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
                  name="link"
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
                      <input type="date" name="eventDate" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all" />
                    </div>
                    <div>
                      <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">Event Time <span className="text-red-400">*</span></label>
                      <input type="time" name="eventTime" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">Location / Platform <span className="text-red-400">*</span></label>
                    <input type="text" name="eventLocation" placeholder="Venue address or online platform" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all" />
                  </div>
                  <div>
                    <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">Registration Link or Contact Info</label>
                    <input type="text" name="eventRegLink" placeholder="Link or contact details" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#474747] text-sm focus:outline-none focus:border-[#A9D6B6] focus:ring-2 focus:ring-[#A9D6B6]/40 transition-all" />
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
                    name="submitterName"
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

              <div>
                <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
                  Organization (Optional)
                </label>
                <input
                  type="text"
                  name="organization"
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
                  name="notes"
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

              {submitError && <p className="text-red-500 text-xs text-center">{submitError}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="btn-p btn-p-peach flex w-full items-center justify-center gap-2 px-8 py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting…" : "Submit"}
              </button>
              <p className="text-[#474747] text-xs text-center">
                All submissions are reviewed with care before publishing.
              </p>
              <p className="text-gray-400 text-[11px] text-center">
                Protected by reCAPTCHA —{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Privacy</a>{" "}
                &amp;{" "}
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">Terms</a> apply.
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
