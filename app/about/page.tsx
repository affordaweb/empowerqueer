import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Heart, MapPin, Mail, Linkedin, BookOpen, Megaphone, Users, ArrowRight } from "lucide-react";

const championed = [
  "LGBTQIA+ rights & inclusion",
  "HIV services",
  "Socio-economic empowerment",
  "Mental health support",
  "Leadership & advocacy",
  "Safe spaces",
];

const regions = [
  "Batangas",
  "Cavite",
  "Laguna",
  "Quezon",
  "Rizal",
  "MIMAROPA",
];

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center px-4 pt-[144px] pb-[50px] overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/gallery/EmpQueer-Image-142.jpg')" }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0A1E]/75 via-[#0F0A1E]/60 to-[#0F0A1E]/80" />
        {/* Purple/pink accent glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7C3AED]/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#7C3AED]" />
            <span className="text-[#A78BFA] text-xs uppercase tracking-[0.25em] font-semibold">Our Story</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#EC4899]" />
          </div>

          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            About the Hub
          </h1>
          <p className="text-white/80 text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            Inspired by Wagayway&rsquo;s Living Advocacy. Powered by Community. Sustained by Expertise.
          </p>
          <p className="text-white/65 max-w-3xl mx-auto leading-relaxed text-base">
            The EmpowerQueer Hub was born from the heart of Wagayway Equality&rsquo;s community work—years of listening, responding, and standing alongside LGBTQIA+ individuals who needed safe, accessible, and affirming support. What began as the Wagayway EmpowerQueer Project, supported by the Wellspring Philanthropic Fund through Humanis, has grown into a nationwide digital platform designed to uplift queer lives with dignity and care.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 relative overflow-hidden bg-white">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8F0FF]/60 to-[#FFF0F7]/60" />
        {/* Subtle bg glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7C3AED]/8 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#EC4899]/8 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-12">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#7C3AED]" />
            <span className="text-[#7C3AED] text-xs uppercase tracking-[0.25em] font-semibold">Our Mission</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#EC4899]" />
          </div>

          {/* Large mission statement */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-[#3A3C51] leading-tight mb-6">
              Every LGBTQIA+ person in the Philippines deserves help, knowledge, and connection &mdash;{" "}
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">
                no gatekeeping, no judgment, no fear.
              </span>
            </h2>
            <p className="text-[#474747] text-lg leading-relaxed">
              A platform shaped by LGBTQIA+ voices and lived experience — born from Wagayway Equality&rsquo;s years of listening, responding, and standing alongside communities who needed safe, accessible, and affirming support.
            </p>
          </div>

          {/* Two-column: context + what we champion */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <p className="text-[#474747] leading-relaxed">
                Built on volunteerism and collective action, Wagayway Equality, Community of Volunteers, Inc. is a grassroots organization based in Batangas, serving Region IV and growing nationwide. From small gatherings to city-wide campaigns, it has become a trusted anchor for queer voices.
              </p>
              <p className="text-[#474747] leading-relaxed">
                Programs are shaped by lived experience, compassion, and evidence-based practice — responding to real struggles with care and community power. The EmpowerQueer Hub extends this mission digitally, making Wagayway&rsquo;s spirit of service accessible to anyone in the Philippines, wherever they may be.
              </p>
            </div>

            {/* What we champion card */}
            <div className="bg-gradient-to-br from-[#F8F0FF] to-[#FFF0F7] border border-[#E9D5FF] rounded-2xl p-8">
              <p className="text-[#5B21B6] text-xs uppercase tracking-widest font-semibold mb-5">What We Champion</p>
              <div className="flex flex-wrap gap-2">
                {championed.map((item) => (
                  <span
                    key={item}
                    className="bg-white border border-[#E9D5FF] text-[#5B21B6] text-sm px-4 py-2 rounded-full font-medium shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wagayway Equality */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 icon-bg-rose rounded-xl flex items-center justify-center">
                  <Heart size={22} className="icon-rose icon-anim" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#3A3C51]">Wagayway Equality</h2>
                  <p className="text-[#474747] text-sm">Grassroots LGBTQIA+ Organization · Batangas, Region IV</p>
                </div>
              </div>
              <p className="text-[#474747] leading-relaxed mb-6">
                A grassroots LGBTQIA+ organization based in Batangas, Region IV, Wagayway Equality champions the rights and welfare of LGBTQIA+ communities through lived-experience-based advocacy and community-centered programs.
              </p>
              <div>
                <p className="text-[#3A3C51] text-xs uppercase tracking-widest font-semibold mb-3">
                  What We Champion
                </p>
                <div className="flex flex-wrap gap-2">
                  {championed.map((item) => (
                    <span
                      key={item}
                      className="bg-[#A9D6B6]/30 border border-[#A9D6B6] text-[#3A3C51] text-xs px-3 py-1.5 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#A9D6B6]/10 border border-[#A9D6B6] rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={18} className="text-[#3A3C51]" />
                <h3 className="font-semibold text-[#3A3C51]">Geographic Reach</h3>
              </div>
              <p className="text-[#474747] text-sm mb-4">
                Primary service area: <strong>Region IV-A &amp; IV-B</strong>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {regions.map((r) => (
                  <span key={r} className="bg-white border border-gray-200 text-[#474747] text-xs px-3 py-1.5 rounded-full">
                    {r}
                  </span>
                ))}
              </div>
              <p className="text-[#474747] text-sm">
                Also serving <strong>MIMAROPA</strong> region, with nationwide digital access to all programs and resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="relative overflow-hidden bg-[#292733]">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#7C3AED]/20 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#EC4899]/15 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="rainbow-bar h-[3px] w-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Section label */}
          <div className="flex items-center justify-center gap-3 mb-16">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#7C3AED]" />
            <span className="text-[#A78BFA] text-xs uppercase tracking-[0.3em] font-semibold">Our Founder</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#EC4899]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-16 items-start">

            {/* ── Photo column ── */}
            <div className="flex flex-col items-center lg:items-start gap-7">
              {/* Photo frame */}
              <div className="relative self-center">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7C3AED] via-[#EC4899] to-[#A78BFA] blur-[20px] opacity-40 scale-105" />
                <div className="relative p-[3px] rounded-2xl bg-gradient-to-br from-[#7C3AED] via-[#EC4899] to-[#A78BFA] shadow-[0_20px_60px_rgba(124,58,237,0.4)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/aivan-profile-pic.jpg"
                    alt="Aivan Castillo Alvarez"
                    className="w-56 h-72 object-cover object-top rounded-2xl block"
                  />
                </div>
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-xs font-semibold px-5 py-2 rounded-full shadow-xl shadow-[#7C3AED]/30">
                  Founder &amp; Executive Director
                </div>
              </div>

              {/* Role tags */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-3">
                {["Development Practitioner", "LGBTQIA+ Advocate", "Researcher", "Trainer"].map((tag) => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold text-[#A78BFA] border border-[#A78BFA]/30 bg-[#A78BFA]/10 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Contact links */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <a
                  href="mailto:aivan.c.alvarez@gmail.com"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white text-sm px-4 py-2.5 rounded-full transition-all"
                >
                  <Mail size={14} />
                  Email Aivan
                </a>
                <a
                  href="https://www.linkedin.com/in/aivanalvarez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#7C3AED]/20 hover:bg-[#7C3AED]/40 border border-[#7C3AED]/40 text-white text-sm px-4 py-2.5 rounded-full transition-all"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* ── Content column ── */}
            <div className="text-white">
              <h3 className="font-serif text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#A78BFA] via-white to-[#EC4899] bg-clip-text text-transparent mb-2 leading-tight">
                Aivan Castillo Alvarez
              </h3>
              <p className="text-white/40 text-sm uppercase tracking-widest font-medium mb-10">
                Batangas, Philippines &middot; Founded Wagayway Equality, 2018
              </p>

              {/* Pull quote */}
              <div className="relative mb-10">
                <div className="font-serif text-[6rem] leading-none text-[#7C3AED]/30 select-none absolute -top-6 -left-2">&ldquo;</div>
                <blockquote className="font-serif text-xl lg:text-2xl italic leading-relaxed text-white/90 pl-6 border-l-2 border-[#7C3AED]/60">
                  When we started Wagayway Equality, it wasn&rsquo;t built from abundance — it was built from urgency. From stories of discrimination that were never reported. From young LGBTQIA+ people who had nowhere safe to turn.
                </blockquote>
              </div>

              {/* Bio */}
              <p className="text-white/65 leading-relaxed mb-5 text-[15px]">
                Aivan is a development practitioner, LGBTQIA+ rights advocate, researcher, and trainer committed to building community-led solutions for equality. With experience spanning human rights work, SOGIESC advocacy, socio-economic inclusion, and organizational development, he believes the community is always the expert — his role is only to amplify what already exists within us.
              </p>
              <p className="text-white/45 leading-relaxed mb-10 text-[15px] italic">
                &ldquo;As we grow, this platform will evolve with you. Because EmpowerQueer is not mine alone; it belongs to the community it serves. On behalf of Wagayway Equality and everyone who made this possible, I welcome you — with pride, hope, and unwavering purpose. Padayon.&rdquo;
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                {[
                  { val: "2018", label: "Founded Wagayway" },
                  { val: "950+", label: "Community Members" },
                  { val: "8+", label: "Years of Advocacy" },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <p className="font-serif text-3xl font-bold bg-gradient-to-br from-[#A78BFA] to-[#EC4899] bg-clip-text text-transparent leading-none mb-1">{val}</p>
                    <p className="text-white/40 text-xs uppercase tracking-wider">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rainbow-bar h-[3px] w-full" />
      </section>

      {/* Volunteer */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section label */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#7C3AED]" />
            <span className="text-[#7C3AED] text-xs uppercase tracking-[0.25em] font-semibold">Get Involved</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#EC4899]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-start mb-16">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#3A3C51] mb-5">
                Volunteer With Us
              </h2>
              <p className="text-[#474747] text-lg leading-relaxed mb-6">
                Whether you have hours or expertise to spare, there&rsquo;s a place for you here. Join 950+ members building a more inclusive Philippines — one community at a time.
              </p>
              <p className="text-[#474747]/70 text-base leading-relaxed mb-8">
                Volunteers at EmpowerQueer don&rsquo;t just show up — they shape the movement. From running training sessions to amplifying community voices, every role makes a real difference in the lives of LGBTQIA+ Filipinos.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "950+", label: "Community Members", bg: "bg-[#F5F0FF]", border: "border-[#E9D5FF]", text: "text-[#7C3AED]" },
                  { val: "50+", label: "Events Organized", bg: "bg-[#FDF2F8]", border: "border-[#FBCFE8]", text: "text-[#EC4899]" },
                  { val: "8yrs", label: "Of Grassroots Work", bg: "bg-[#F0FDF4]", border: "border-[#BBF7D0]", text: "text-[#059669]" },
                  { val: "100%", label: "Community-Led", bg: "bg-[#FFF7ED]", border: "border-[#FED7AA]", text: "text-[#D97706]" },
                ].map(({ val, label, bg, border, text }) => (
                  <div key={label} className={`${bg} border ${border} rounded-xl px-5 py-4`}>
                    <p className={`font-serif text-2xl font-bold ${text}`}>{val}</p>
                    <p className="text-[#474747]/60 text-xs mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What volunteers do */}
            <div className="bg-[#F5F0FF] border border-[#E9D5FF] rounded-3xl p-8">
              <p className="text-[#7C3AED] text-xs uppercase tracking-widest font-semibold mb-6">What Volunteers Do</p>
              <ul className="space-y-4">
                {[
                  "Facilitate SOGIESC, HIV 101, and Human Rights workshops",
                  "Support community events and advocacy campaigns",
                  "Create and curate educational content and resources",
                  "Run outreach to marginalized LGBTQIA+ communities",
                  "Provide peer support and safe space facilitation",
                  "Help document and amplify lived LGBTQIA+ stories",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span className="text-[#474747] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Role cards — pastel */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            {[
              {
                icon: <BookOpen size={22} />,
                iconColor: "text-[#7C3AED]",
                iconBg: "bg-[#EDE9FE]",
                cardBg: "bg-[#F5F0FF]",
                border: "border-[#DDD6FE]",
                commitBg: "bg-[#EDE9FE] text-[#5B21B6]",
                skillBg: "bg-[#EDE9FE] border-[#DDD6FE] text-[#5B21B6]",
                title: "Educator",
                commitment: "4–8 hrs/month",
                desc: "Facilitate workshops, create learning content, and lead SOGIESC, HIV 101, and Human Rights training sessions for communities and allies.",
                skills: ["Public speaking", "Content creation", "Community education"],
              },
              {
                icon: <Megaphone size={22} />,
                iconColor: "text-[#EC4899]",
                iconBg: "bg-[#FCE7F3]",
                cardBg: "bg-[#FDF2F8]",
                border: "border-[#FBCFE8]",
                commitBg: "bg-[#FCE7F3] text-[#9D174D]",
                skillBg: "bg-[#FCE7F3] border-[#FBCFE8] text-[#9D174D]",
                title: "Advocate",
                commitment: "Flexible",
                desc: "Amplify queer voices, support policy campaigns, assist in documentation, and help shape a more just and inclusive Philippine society.",
                skills: ["Advocacy", "Social media", "Campaigning"],
              },
              {
                icon: <Users size={22} />,
                iconColor: "text-[#059669]",
                iconBg: "bg-[#D1FAE5]",
                cardBg: "bg-[#F0FDF4]",
                border: "border-[#BBF7D0]",
                commitBg: "bg-[#D1FAE5] text-[#065F46]",
                skillBg: "bg-[#D1FAE5] border-[#BBF7D0] text-[#065F46]",
                title: "Community Builder",
                commitment: "6–10 hrs/month",
                desc: "Organize events, run outreach programs, and create safe spaces for LGBTQIA+ individuals to connect, heal, and grow together.",
                skills: ["Event planning", "Peer support", "Outreach"],
              },
            ].map(({ icon, iconColor, iconBg, cardBg, border, commitBg, skillBg, title, commitment, desc, skills }) => (
              <div
                key={title}
                className={`${cardBg} border ${border} rounded-2xl p-7 hover:shadow-md transition-all flex flex-col`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-11 h-11 ${iconBg} rounded-xl flex items-center justify-center ${iconColor}`}>
                    {icon}
                  </div>
                  <span className={`${commitBg} text-xs px-2.5 py-1 rounded-full font-medium`}>{commitment}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#3A3C51] mb-3">{title}</h3>
                <p className="text-[#474747] text-sm leading-relaxed mb-5 flex-1">{desc}</p>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/5">
                  {skills.map((s) => (
                    <span key={s} className={`${skillBg} border text-[10px] px-2.5 py-1 rounded-full`}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#F5F0FF] to-[#FDF2F8] border border-[#E9D5FF] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[#3A3C51] font-semibold text-lg mb-1">Ready to make an impact?</p>
              <p className="text-[#474747]/60 text-sm">Send us a message and we&rsquo;ll match you with the right volunteer opportunity.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="/contact/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:opacity-90 text-white font-semibold px-8 py-3.5 rounded-full transition-opacity shadow-lg shadow-[#7C3AED]/20 whitespace-nowrap"
              >
                Join the Community
                <ArrowRight size={16} />
              </a>
              <a
                href="/opportunities/"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-[#3A3C51] text-sm px-6 py-3.5 rounded-full transition-colors whitespace-nowrap"
              >
                View Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
