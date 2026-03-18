import RainbowBar from "../components/RainbowBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mic2, Facebook, ChevronRight } from "lucide-react";

const episodes = [
  {
    title: "2025 HIV & AIDS Surveillance Update",
    desc: "A deep dive into the latest data, trends, and national response gaps in the Philippines' HIV and AIDS landscape.",
    tags: ["HIV", "Data", "Health"],
    date: "2025",
  },
  {
    title: "Human Rights 101 by Wagayway Equality",
    desc: "An accessible introduction to human rights frameworks, equality principles, and legal protections relevant to LGBTQIA+ communities.",
    tags: ["Human Rights", "Education", "Advocacy"],
    date: "2025",
  },
  {
    title: "HIV 101 by Wagayway Equality",
    desc: "Everything you need to know about HIV prevention, testing, treatment, and care — presented with compassion and clarity.",
    tags: ["HIV", "Prevention", "Education"],
    date: "2025",
  },
  {
    title: "SOGIESC 101",
    desc: "Understanding sexual orientation, gender identity, expression, and sex characteristics — and why it matters for equality and inclusion.",
    tags: ["SOGIESC", "Identity", "Education"],
    date: "2025",
  },
];

export default function KopsodesPage() {
  return (
    <main className="bg-white min-h-screen">
      <RainbowBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-white py-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-[#D7C4E3] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mic2 size={30} className="text-[#3A3C51]" />
          </div>
          <h1 className="font-serif text-5xl font-bold text-[#3A3C51] mb-4">Kopisodes</h1>
          <p className="text-[#474747] text-xl font-medium mb-3">Stories That Speak Truth</p>
          <p className="text-[#474747] max-w-2xl mx-auto leading-relaxed">
            A collection of voices shaping visibility, healing, and change. Raw, real, and unapologetic.
          </p>
        </div>
      </section>

      {/* About the podcast */}
      <section className="py-16 px-4 bg-[#D7C4E3]/10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-[#D7C4E3] rounded-2xl p-8">
            <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-4">
              Honest Conversations Over Coffee
            </h2>
            <p className="text-[#474747] leading-relaxed mb-4">
              Kopisodes is our audio series dedicated to amplifying LGBTQIA+ voices through honest, unfiltered conversation. We bring together community members, advocates, and experts for dialogues that feel as warm and real as sharing coffee with a friend.
            </p>
            <p className="text-[#474747] leading-relaxed mb-6">
              Topics range from mental health and identity to advocacy, HIV awareness, and human rights — always grounded in lived experience and community knowledge.
            </p>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D7C4E3] text-[#3A3C51] font-semibold px-6 py-2.5 rounded-full hover:bg-[#3A3C51] hover:text-white transition-all text-sm"
            >
              <Facebook size={15} />
              Follow on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-8">
            Episodes &amp; Posts
          </h2>
          <div className="space-y-6">
            {episodes.map((ep) => (
              <div
                key={ep.title}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#D7C4E3] hover:shadow-sm transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D7C4E3] rounded-xl flex items-center justify-center shrink-0">
                    <Mic2 size={20} className="text-[#3A3C51]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {ep.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#D7C4E3]/30 border border-[#D7C4E3] text-[#3A3C51] text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#3A3C51] mb-2">
                      {ep.title}
                    </h3>
                    <p className="text-[#474747] text-sm leading-relaxed mb-3">
                      {ep.desc}
                    </p>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#3A3C51] text-sm font-semibold hover:gap-2.5 transition-all"
                    >
                      Listen Now <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
