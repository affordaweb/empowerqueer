import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BookOpen, ChevronRight } from "lucide-react";

const programs = [
  {
    org: "Wagayway Equality Volunteers Academy",
    tagline: "Leadership, volunteer, and community systems development grounded in lived experience.",
    featured: {
      title: "Volunteers Orientation",
      desc: "Introduction to Wagayway Equality's programs, values, and volunteer pathways.",
    },
    tags: ["Leadership", "Volunteer", "Community"],
  },
  {
    org: "Ascend Development Solutions",
    tagline: "Expert-led trainings supporting governance, compliance, and institutional growth.",
    featured: {
      title: "SDG Training",
      desc: "Applying the Sustainable Development Goals to organizational work and community advocacy.",
    },
    tags: ["Governance", "SDGs", "Institutional"],
  },
  {
    org: "EmpowerQueer Hub",
    tagline: "Community-centered trainings focused on inclusion, livelihood, and empowerment.",
    featured: {
      title: "Financial Empowerment Training",
      desc: "Practical sessions on budgeting, saving, and financial planning for LGBTQIA+ individuals.",
    },
    tags: ["Inclusion", "Livelihood", "Empowerment"],
  },
];

export default function TrainingsPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#F0EBF5] to-[#E8F4EC] pb-20 pt-[164px] px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold text-[#3A3C51] mb-4">
            Trainings &amp; Capacity-Building Programs
          </h1>
          <p className="text-[#474747] text-xl leading-relaxed">
            Community-Led Learning for Inclusion, Leadership, and Sustainable Growth
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.org}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#A9D6B6] hover:shadow-md transition-all flex flex-col"
              >
                <div className="w-12 h-12 icon-bg-pink rounded-xl flex items-center justify-center mb-6">
                  <BookOpen size={22} className="icon-pink icon-anim" />
                </div>
                <h2 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">
                  {program.org}
                </h2>
                <p className="text-[#474747] text-sm leading-relaxed mb-4">
                  {program.tagline}
                </p>

                {/* Featured program */}
                <div className="bg-[#A9D6B6]/10 border border-[#A9D6B6] rounded-xl p-4 mb-6 flex-1">
                  <p className="text-[#3A3C51] text-xs uppercase tracking-widest font-semibold mb-2">
                    Featured Program
                  </p>
                  <h3 className="font-semibold text-[#3A3C51] mb-1">{program.featured.title}</h3>
                  <p className="text-[#474747] text-sm">{program.featured.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {program.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#A9D6B6]/30 border border-[#A9D6B6] text-[#3A3C51] text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="/contact/"
                  className="inline-flex items-center gap-1.5 text-[#3A3C51] text-sm font-semibold hover:gap-2.5 transition-all"
                >
                  Learn More <ChevronRight size={15} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#A9D6B6]/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-4">
            Request a Training or Workshop
          </h2>
          <p className="text-[#474747] mb-6">
            We offer customized trainings for schools, LGUs, organizations, and communities. Reach out to discuss your needs.
          </p>
          <a
            href="/contact/"
            className="btn-p btn-p-pink inline-flex items-center gap-2 px-8 py-3"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
