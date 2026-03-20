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
    cover: "/resources/LGBTQMentalWellnessToolkit-1-pdf.jpg",
    pdf: "/resources/LGBTQMentalWellnessToolkit-1.pdf",
  },
  {
    title: "LGBTQI+ Mental Health Resource",
    org: "Anna Freud National Centre for Children and Families",
    category: "Mental Health",
    description:
      "Developed by the Anna Freud National Centre for Children and Families, this resource aims to support the mental health of LGBTQI+ individuals.",
    cover: "/resources/lgbtqi-mh-booklet-final-pdf.jpg",
    pdf: "/resources/lgbtqi-mh-booklet-final.pdf",
  },
  {
    title: "LGBTQIA2S+ Youth Mental Health and Suicide Prevention Resource Guide",
    org: "Suicide Prevention Resource Center in partnership with NORC at the University of Chicago",
    category: "Suicide Prevention",
    description:
      "Developed by the Suicide Prevention Resource Center in partnership with NORC at the University of Chicago, this guide addresses mental health and suicide prevention for LGBTQIA2S+ youth.",
    cover: "/resources/LGBTQIA2S-Resource-Guide-pdf.jpg",
    pdf: "/resources/LGBTQIA2S-Resource-Guide.pdf",
  },
  {
    title: "Coming Out Handbook for LGBTQ Young People",
    org: "The Trevor Project",
    category: "Youth Services",
    description:
      '"COMING OUT: A Handbook for LGBTQ Young People," published by The Trevor Project, serves as a supportive guide for LGBTQ young people navigating the coming out process.',
    cover: "/resources/Coming-Out-Handbook-pdf.jpg",
    pdf: "/resources/Coming-Out-Handbook.pdf",
  },
  {
    title: "2025 HIV & AIDS Surveillance Update: What the Data Tells Us",
    org: "HIV and AIDS Registry of the Philippines",
    category: "HIV Services",
    description:
      "The Q4 2025 HIV & AIDS Surveillance Report from the Philippines provides updated data on HIV transmission, demographics, and regional trends.",
    cover: "/resources/2025_Q4-HIV-AIDS-Surveillance-Report-of-the-Philippines-pdf.jpg",
    pdf: "/resources/2025_Q4-HIV-AIDS-Surveillance-Report-of-the-Philippines.pdf",
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#F0EBF5] to-[#E8F4EC] pb-[130px] pt-[164px] px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold text-[#3A3C51] mb-4">Resources</h1>
          <p className="text-[#474747] text-xl leading-relaxed mb-3">
            Immediate Support &amp; Crisis Hotlines (Philippines)
          </p>
          <p className="text-[#474747] max-w-2xl mx-auto">
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
                <h3 className="font-semibold text-[#3A3C51] mb-4 uppercase tracking-wider text-sm">
                  Categories
                </h3>
                <ul className="space-y-1">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <a
                        href="#"
                        className="block text-[#474747] hover:text-[#3A3C51] hover:bg-[#A9D6B6]/20 text-sm px-3 py-1.5 rounded-md transition-all"
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
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#A9D6B6] hover:shadow-sm transition-all"
                >
                  <div className="flex items-start gap-0">
                    <a href={res.pdf} target="_blank" rel="noopener noreferrer" className="shrink-0">
                      <img
                        src={res.cover}
                        alt={res.title}
                        className="w-28 h-full object-cover self-stretch"
                        style={{ minHeight: "140px" }}
                      />
                    </a>
                    <div className="flex-1 p-6">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="bg-[#A9D6B6]/30 border border-[#A9D6B6] text-[#3A3C51] text-xs px-3 py-1 rounded-full">
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
                        href={res.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#3A3C51] text-sm font-semibold hover:underline"
                      >
                        <FileText size={13} /> Download PDF <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Submit CTA */}
              <div className="bg-[#A9D6B6]/10 border border-[#A9D6B6] rounded-2xl p-8 text-center">
                <h3 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">
                  Submit a Resource or Event
                </h3>
                <p className="text-[#474747] text-sm mb-4">
                  Know of a resource that should be here? Help us grow this library.
                </p>
                <a
                  href="mailto:contact@empowerqueerhub.com"
                  className="btn-p btn-p-mint inline-flex items-center gap-2 px-6 py-2.5 text-sm"
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
