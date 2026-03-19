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
      "The Equity Catalyst Fellowship (ECF) is a highly competitive, intensive professional development program designed for mid-career LGBTQIA+ individuals who are looking to pivot into non-profit leadership, social impact consulting, or policy advocacy.",
    tags: ["Fellowship", "Leadership", "Policy"],
  },
  {
    type: "Advisory & Governance Roles",
    date: "October 21, 2025",
    title: "Empower Queer Leadership Council",
    description:
      "The long-term success and ethical governance of Empower Queer are championed by our Board of Directors and specialized Advisory Councils.",
    tags: ["Governance", "Advisory", "Board"],
  },
  {
    type: "Career Resources",
    date: "October 21, 2025",
    title: "Career Support for LGBTQIA+ Professionals",
    description:
      "While the sections above detail opportunities to support Empower Queer's mission, we also provide a comprehensive suite of free, readily available resources specifically designed to support the career growth and professional resilience of LGBTQIA+ individuals.",
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
    desc: "Community-curated opportunities: free trainings, scholarships, fellowships, webinars, calls for participation",
    href: "https://www.facebook.com/groups/159675867428915",
  },
];

export default function OpportunitiesPage() {
  return (
    <main className="bg-white min-h-screen">
      <RainbowBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#FDF8EE] to-[#F5E6CE] py-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold text-[#5C3D2E] mb-4">
            Opportunities Desk
          </h1>
          <p className="text-[#5C4A3A] text-xl leading-relaxed mb-4">
            Training, certifications, opportunities—shared for the community.
          </p>
          <p className="text-[#5C4A3A] max-w-2xl mx-auto mb-6">
            The Opportunities Desk curates free and accessible learning, certification, and livelihood opportunities available in the Philippines. This space is designed to quietly support LGBTQIA+ individuals and allies who are looking to build skills, gain credentials, or explore new pathways—at their own pace.
          </p>
          <p className="font-serif text-lg italic text-[#5C3D2E]">
            &ldquo;Growth is not a race—it&rsquo;s a process.&rdquo;
          </p>
        </div>
      </section>

      {/* Listings */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {listings.map((listing) => (
            <div
              key={listing.title}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#E8D5B0] hover:shadow-md transition-all"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#E8D5B0] text-[#5C3D2E] text-xs px-3 py-1 rounded-full font-semibold">
                  {listing.type}
                </span>
                {listing.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#E8D5B0]/30 border border-[#E8D5B0] text-[#5C3D2E] text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-[#5C4A3A] text-sm mb-3">
                <Calendar size={14} className="text-[#5C3D2E]" />
                <span>Posted: {listing.date}</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
                {listing.title}
              </h2>
              <p className="text-[#5C4A3A] leading-relaxed mb-6">
                {listing.description}
              </p>
              <a
                href="mailto:contact@empowerqueerhub.com"
                className="inline-flex items-center gap-2 bg-[#E8D5B0] text-[#5C3D2E] font-semibold px-6 py-2.5 rounded-full hover:bg-[#C4784C] hover:text-white transition-all text-sm"
              >
                <Briefcase size={14} />
                Apply / Inquire
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* External Resources */}
      <section className="py-16 px-4 bg-[#FDF3E7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-8">
            Additional Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {externalResources.map((res) => (
              <a
                key={res.name}
                href={res.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#E8D5B0] hover:shadow-sm transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-[#5C3D2E] text-sm">{res.name}</h3>
                  <ExternalLink size={13} className="text-[#5C3D2E] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-[#5C4A3A] text-xs">{res.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Submit */}
      <section className="py-16 px-4 bg-[#E8D5B0]/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-4">
            Have an Opportunity to Share?
          </h2>
          <p className="text-[#5C4A3A] mb-6">
            Submit fellowships, trainings, grants, or job opportunities to be featured on the Opportunities Desk.
          </p>
          <a
            href="mailto:contact@empowerqueerhub.com"
            className="inline-flex items-center gap-2 bg-[#E8D5B0] text-[#5C3D2E] font-semibold px-8 py-3 rounded-full hover:bg-[#C4784C] hover:text-white transition-all"
          >
            Submit via Email
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
