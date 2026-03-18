import RainbowBar from "../components/RainbowBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, ExternalLink, Briefcase } from "lucide-react";

const listings = [
  {
    type: "Fellowship Programs",
    date: "January 3, 2026",
    title: "The Equity Catalyst Fellowship",
    description:
      "A fellowship for mid-career LGBTQIA+ individuals pursuing nonprofit leadership, social impact consulting, or policy advocacy. Provides mentorship, funding, and professional development.",
    tags: ["Fellowship", "Leadership", "Policy"],
  },
  {
    type: "Advisory & Governance Roles",
    date: "October 21, 2025",
    title: "Empower Queer Leadership Council",
    description:
      "Open seats on the Board of Directors and Advisory Councils of EmpowerQueer Hub. For experienced advocates, professionals, and community leaders.",
    tags: ["Governance", "Advisory", "Board"],
  },
  {
    type: "Career Resources",
    date: "October 21, 2025",
    title: "Career Support for LGBTQIA+ Professionals",
    description:
      "Free resources to support career growth and professional resilience of LGBTQIA+ individuals — including resume support, job boards, and mentorship connections.",
    tags: ["Career", "Livelihood", "Free"],
  },
];

const externalResources = [
  {
    name: "TESDA",
    desc: "Free skills training & certifications for Filipinos",
    href: "https://www.tesda.gov.ph",
  },
  {
    name: "DOLE",
    desc: "Employment & livelihood assistance programs",
    href: "https://www.dole.gov.ph",
  },
  {
    name: "Opportunity Desk Facebook Group",
    desc: "Community-curated opportunities for growth",
    href: "https://facebook.com",
  },
];

export default function OpportunitiesPage() {
  return (
    <main className="bg-white min-h-screen">
      <RainbowBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-white py-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold text-[#3A3C51] mb-4">
            Opportunities Desk
          </h1>
          <p className="text-[#474747] text-xl leading-relaxed mb-4">
            Curates free and accessible learning, certification, and livelihood opportunities available in the Philippines.
          </p>
          <p className="font-serif text-lg italic text-[#3A3C51]">
            &ldquo;Growth is not a race — it&rsquo;s a process. Take what serves you. Leave what doesn&rsquo;t.&rdquo;
          </p>
        </div>
      </section>

      {/* Listings */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {listings.map((listing) => (
            <div
              key={listing.title}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#D7C4E3] hover:shadow-md transition-all"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#D7C4E3] text-[#3A3C51] text-xs px-3 py-1 rounded-full font-semibold">
                  {listing.type}
                </span>
                {listing.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#D7C4E3]/30 border border-[#D7C4E3] text-[#3A3C51] text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-[#474747] text-sm mb-3">
                <Calendar size={14} className="text-[#3A3C51]" />
                <span>Posted: {listing.date}</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-4">
                {listing.title}
              </h2>
              <p className="text-[#474747] leading-relaxed mb-6">
                {listing.description}
              </p>
              <a
                href="mailto:contact@empowerqueerhub.com"
                className="inline-flex items-center gap-2 bg-[#D7C4E3] text-[#3A3C51] font-semibold px-6 py-2.5 rounded-full hover:bg-[#3A3C51] hover:text-white transition-all text-sm"
              >
                <Briefcase size={14} />
                Apply / Inquire
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* External Resources */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-8">
            Additional Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {externalResources.map((res) => (
              <a
                key={res.name}
                href={res.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#D7C4E3] hover:shadow-sm transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-[#3A3C51] text-sm">{res.name}</h3>
                  <ExternalLink size={13} className="text-[#3A3C51] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-[#474747] text-xs">{res.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Submit */}
      <section className="py-16 px-4 bg-[#D7C4E3]/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-4">
            Have an Opportunity to Share?
          </h2>
          <p className="text-[#474747] mb-6">
            Submit fellowships, trainings, grants, or job opportunities to be featured on the Opportunities Desk.
          </p>
          <a
            href="mailto:contact@empowerqueerhub.com"
            className="inline-flex items-center gap-2 bg-[#D7C4E3] text-[#3A3C51] font-semibold px-8 py-3 rounded-full hover:bg-[#3A3C51] hover:text-white transition-all"
          >
            Submit via Email
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
