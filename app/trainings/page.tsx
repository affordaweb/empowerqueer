import RainbowBar from "../components/RainbowBar";
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
      <RainbowBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#EDE8F5] to-[#E4EDE0] py-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold text-[#4A3F6B] mb-4">
            Trainings &amp; Capacity-Building Programs
          </h1>
          <p className="text-[#5C576E] text-xl leading-relaxed">
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
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#B5C4AE] hover:shadow-md transition-all flex flex-col"
              >
                <div className="w-12 h-12 bg-[#B5C4AE] rounded-xl flex items-center justify-center mb-6">
                  <BookOpen size={22} className="text-[#4A3F6B]" />
                </div>
                <h2 className="font-serif text-xl font-bold text-[#4A3F6B] mb-3">
                  {program.org}
                </h2>
                <p className="text-[#5C576E] text-sm leading-relaxed mb-4">
                  {program.tagline}
                </p>

                {/* Featured program */}
                <div className="bg-[#B5C4AE]/10 border border-[#B5C4AE] rounded-xl p-4 mb-6 flex-1">
                  <p className="text-[#4A3F6B] text-xs uppercase tracking-widest font-semibold mb-2">
                    Featured Program
                  </p>
                  <h3 className="font-semibold text-[#4A3F6B] mb-1">{program.featured.title}</h3>
                  <p className="text-[#5C576E] text-sm">{program.featured.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {program.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#B5C4AE]/30 border border-[#B5C4AE] text-[#4A3F6B] text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="/contact/"
                  className="inline-flex items-center gap-1.5 text-[#4A3F6B] text-sm font-semibold hover:gap-2.5 transition-all"
                >
                  Learn More <ChevronRight size={15} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#B5C4AE]/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-[#4A3F6B] mb-4">
            Request a Training or Workshop
          </h2>
          <p className="text-[#5C576E] mb-6">
            We offer customized trainings for schools, LGUs, organizations, and communities. Reach out to discuss your needs.
          </p>
          <a
            href="/contact/"
            className="inline-flex items-center gap-2 bg-[#B5C4AE] text-[#4A3F6B] font-semibold px-8 py-3 rounded-full hover:bg-[#6B8F63] hover:text-white transition-all"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
