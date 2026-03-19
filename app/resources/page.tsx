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
    org: "CVS Health and Accenture",
    category: "Mental Health",
    description:
      "This toolkit, developed by CVS Health and Accenture, aims to provide insights and resources to support LGBTQ+ mental wellness.",
  },
  {
    title: "LGBTQI+ Mental Health Resource",
    org: "Anna Freud National Centre for Children and Families",
    category: "Mental Health",
    description:
      "Developed by the Anna Freud National Centre for Children and Families, this resource aims to support the mental health of LGBTQI+ individuals.",
  },
  {
    title: "LGBTQIA2S+ Youth Mental Health and Suicide Prevention Resource Guide",
    org: "Suicide Prevention Resource Center in partnership with NORC at the University of Chicago",
    category: "Suicide Prevention",
    description:
      "Developed by the Suicide Prevention Resource Center in partnership with NORC at the University of Chicago, this guide addresses mental health and suicide prevention for LGBTQIA2S+ youth.",
  },
  {
    title: "Coming Out Handbook for LGBTQ Young People",
    org: "The Trevor Project",
    category: "Youth Services",
    description:
      '"COMING OUT: A Handbook for LGBTQ Young People," published by The Trevor Project, serves as a supportive guide for LGBTQ young people navigating the coming out process.',
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-white min-h-screen">
      <RainbowBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#FDF8EE] to-[#F5E6CE] py-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold text-[#5C3D2E] mb-4">Resources</h1>
          <p className="text-[#5C4A3A] text-xl leading-relaxed mb-3">
            Immediate Support &amp; Crisis Hotlines (Philippines)
          </p>
          <p className="text-[#5C4A3A] max-w-2xl mx-auto">
            Verified tools, guides, and downloads for LGBTQIA+ wellbeing, safety, and support. The EmpowerQueer Hub Resource Library is your go-to space for trusted, accessible, and community-reviewed materials. From health and legal guides to toolkits on safety, wellbeing, and advocacy, each resource is here to inform, support, and uplift.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24">
                <h3 className="font-semibold text-[#5C3D2E] mb-4 uppercase tracking-wider text-sm">
                  Categories
                </h3>
                <ul className="space-y-1">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <a
                        href="#"
                        className="block text-[#5C4A3A] hover:text-[#5C3D2E] hover:bg-[#E8D5B0]/20 text-sm px-3 py-1.5 rounded-md transition-all"
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
              <h2 className="font-serif text-2xl font-bold text-[#5C3D2E] mb-6">
                Featured Resources
              </h2>
              {resources.map((res) => (
                <div
                  key={res.title}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#E8D5B0] hover:shadow-sm transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#E8D5B0] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <FileText size={18} className="text-[#5C3D2E]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="bg-[#E8D5B0]/30 border border-[#E8D5B0] text-[#5C3D2E] text-xs px-3 py-1 rounded-full">
                          {res.category}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-[#5C3D2E] mb-1">
                        {res.title}
                      </h3>
                      <p className="text-[#5C4A3A] text-xs mb-3 font-medium">
                        Source: {res.org}
                      </p>
                      <p className="text-[#5C4A3A] text-sm leading-relaxed mb-4">
                        {res.description}
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 text-[#5C3D2E] text-sm font-semibold hover:underline"
                      >
                        View Resource <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Submit CTA */}
              <div className="bg-[#E8D5B0]/10 border border-[#E8D5B0] rounded-2xl p-8 text-center">
                <h3 className="font-serif text-xl font-bold text-[#5C3D2E] mb-3">
                  Submit a Resource or Event
                </h3>
                <p className="text-[#5C4A3A] text-sm mb-4">
                  Know of a resource that should be here? Help us grow this library.
                </p>
                <a
                  href="mailto:contact@empowerqueerhub.com"
                  className="inline-flex items-center gap-2 bg-[#E8D5B0] text-[#5C3D2E] font-semibold px-6 py-2.5 rounded-full hover:bg-[#C4784C] hover:text-white transition-all text-sm"
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
