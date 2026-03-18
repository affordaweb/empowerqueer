import RainbowBar from "../components/RainbowBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ExternalLink, FileText } from "lucide-react";

const categories = [
  "Advocacy and Rights",
  "Child and Adolescent Psychology",
  "Community Center",
  "Community Voices",
  "Consultancy Development",
  "Diagnostic & Testing",
  "Government Service",
  "Health and Wellbeing",
  "HIV Services",
  "Identity Development",
  "LGBTQ+ Issues",
  "Mental Health",
  "Peer Education",
  "Professional Development",
  "Sexual Health",
  "STI Testing",
  "Suicide Prevention",
  "Support Resources",
  "Youth Services",
];

const resources = [
  {
    title: "LGBTQ+ Mental Wellness Care Toolkit",
    org: "CVS Health / Accenture",
    category: "Mental Health",
    description:
      "A comprehensive toolkit providing mental wellness resources, support strategies, and self-care guides tailored for LGBTQ+ individuals.",
  },
  {
    title: "LGBTQI+ Mental Health Resource",
    org: "Anna Freud National Centre",
    category: "Mental Health",
    description:
      "Evidence-based mental health resources and support materials developed specifically for LGBTQI+ communities.",
  },
  {
    title: "LGBTQIA2S+ Youth Mental Health and Suicide Prevention Resource Guide",
    org: "NORC",
    category: "Suicide Prevention",
    description:
      "A dedicated resource guide addressing mental health and suicide prevention for LGBTQIA2S+ youth, with data and practical tools.",
  },
  {
    title: "Coming Out Handbook for LGBTQ Young People",
    org: "The Trevor Project",
    category: "Youth Services",
    description:
      "A supportive, affirming handbook to guide LGBTQ young people through the coming out process with safety and confidence.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-white min-h-screen">
      <RainbowBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-white py-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold text-[#3A3C51] mb-4">Resources</h1>
          <p className="text-[#474747] text-xl leading-relaxed mb-3">
            Trusted, accessible, and community-reviewed materials
          </p>
          <p className="text-[#474747] max-w-2xl mx-auto">
            Covering health guides, legal resources, safety toolkits, and advocacy materials for LGBTQIA+ individuals across the Philippines.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24">
                <h3 className="font-semibold text-[#3A3C51] mb-4 uppercase tracking-wider text-sm">
                  Categories
                </h3>
                <ul className="space-y-1">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <a
                        href="#"
                        className="block text-[#474747] hover:text-[#3A3C51] hover:bg-[#D7C4E3]/20 text-sm px-3 py-1.5 rounded-md transition-all"
                      >
                        {cat}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Resources */}
            <div className="lg:col-span-3 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-6">
                Featured Resources
              </h2>
              {resources.map((res) => (
                <div
                  key={res.title}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#D7C4E3] hover:shadow-sm transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#D7C4E3] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <FileText size={18} className="text-[#3A3C51]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="bg-[#D7C4E3]/30 border border-[#D7C4E3] text-[#3A3C51] text-xs px-3 py-1 rounded-full">
                          {res.category}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-[#3A3C51] mb-1">
                        {res.title}
                      </h3>
                      <p className="text-[#474747] text-xs mb-3 font-medium">
                        Source: {res.org}
                      </p>
                      <p className="text-[#474747] text-sm leading-relaxed mb-4">
                        {res.description}
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 text-[#3A3C51] text-sm font-semibold hover:underline"
                      >
                        View Resource <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Submit CTA */}
              <div className="bg-[#D7C4E3]/10 border border-[#D7C4E3] rounded-2xl p-8 text-center">
                <h3 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">
                  Submit a Resource or Event
                </h3>
                <p className="text-[#474747] text-sm mb-4">
                  Know of a resource that should be here? Help us grow this library.
                </p>
                <a
                  href="mailto:contact@empowerqueerhub.com"
                  className="inline-flex items-center gap-2 bg-[#D7C4E3] text-[#3A3C51] font-semibold px-6 py-2.5 rounded-full hover:bg-[#3A3C51] hover:text-white transition-all text-sm"
                >
                  Submit Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
