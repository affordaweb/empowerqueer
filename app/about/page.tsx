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
      <section className="py-20 px-4 relative overflow-hidden bg-white">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8F0FF]/60 to-[#FFF0F7]/60" />
        {/* Subtle bg glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7C3AED]/8 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#EC4899]/8 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
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
      <section className="relative overflow-hidden bg-[#0F0A1E]">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#7C3AED]/20 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#EC4899]/15 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="rainbow-bar h-[3px] w-full" />

        <div className="relative max-w-7xl mx-auto px-4 py-20">
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
      <section className="relative py-24 px-4 overflow-hidden bg-[#0F0A1E]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/gallery/EmpQueer-Image-140.jpg')" }}
        />
        {/* Gradient overlay — soft dark blend */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F0A1E]/90 via-[#1A0D2E]/85 to-[#0F0A1E]/90" />
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#7C3AED]/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#EC4899]/15 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          {/* Section label */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#7C3AED]" />
            <span className="text-[#A78BFA] text-xs uppercase tracking-[0.25em] font-semibold">Get Involved</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#EC4899]" />
          </div>

          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-5">
              Volunteer With Us
            </h2>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto">
              Whether you have hours or expertise to spare, there&rsquo;s a place for you here. Join 950+ members building a more inclusive Philippines.
            </p>
          </div>

          {/* Role cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            {[
              {
                icon: <BookOpen size={22} />,
                color: "#A78BFA",
                bg: "#7C3AED",
                title: "Educator",
                desc: "Facilitate workshops, create learning content, and lead SOGIESC training sessions for communities.",
              },
              {
                icon: <Megaphone size={22} />,
                color: "#F9A8D4",
                bg: "#EC4899",
                title: "Advocate",
                desc: "Amplify queer voices, support policy campaigns, and help shape a more just and inclusive society.",
              },
              {
                icon: <Users size={22} />,
                color: "#6EE7B7",
                bg: "#059669",
                title: "Community Builder",
                desc: "Organize events, run outreach programs, and create safe spaces for LGBTQIA+ individuals to connect.",
              },
            ].map(({ icon, color, bg, title, desc }) => (
              <div
                key={title}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${bg}22`, color }}
                >
                  {icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-3">{title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:opacity-90 text-white font-semibold px-8 py-3.5 rounded-full transition-opacity shadow-lg shadow-[#7C3AED]/30"
            >
              Join the Community
              <ArrowRight size={16} />
            </a>
            <a
              href="/contact/"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm px-6 py-3.5 rounded-full transition-colors"
            >
              Learn more about volunteering
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
