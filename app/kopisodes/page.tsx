import RainbowBar from "../components/RainbowBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mic2, Facebook, ChevronRight } from "lucide-react";

const episodes = [
  {
    title: "2025 HIV & AIDS Surveillance Update: What the Data Tells Us",
    desc: "The latest HIV & AIDS Surveillance of the Philippines (Oct–Dec 2025) report highlights both progress and urgent gaps in our national response. By the end of 2025, an estimated 252,800 Filipinos are living with HIV, yet only 61% have been reached.",
    tags: ["LGBTQ+ Issues"],
    date: "2025",
    img: "/images/gallery/HIV-and-Aids-Surveillance.jpg",
  },
  {
    title: "Human Rights 101 by Wagayway Equality",
    desc: "Human Rights 101 by Wagayway Equality offered participants a foundational understanding of their rights and freedoms, emphasizing equality, dignity, and protection under the law. The session explored key concepts, legal frameworks, and real-life applications, creating a safe and empowering space for learning.",
    tags: ["Youth Services"],
    date: "2025",
    img: "/images/gallery/HUMAN-RIGHTS-101-by-Wagayway-Equality.jpg",
  },
  {
    title: "HIV 101 by Wagayway Equality",
    desc: "HIV 101 by Wagayway Equality focused on building clear and accurate understanding of HIV, including prevention, testing, treatment, and care. The session addressed common myths and fears, helping participants gain reliable knowledge in a safe and supportive environment.",
    tags: ["Support Resources"],
    date: "2025",
    img: "/images/gallery/HIV-101-by-Wagayway-Equality.jpg",
  },
  {
    title: "SOGIESC 101 by Wagayway Equality Inc",
    desc: "SOGIESC 101 by Wagayway Equality Inc. provided a clear and safe space for learning about sexual orientation, gender identity, gender expression, and sex characteristics. The session helped participants better understand diversity through open discussion and affirming education.",
    tags: ["Support Resources"],
    date: "2025",
    img: "/images/gallery/SOGIESC-101-by-Wagayway-Equality-Inc.jpg",
  },
  {
    title: "Wagayway Equality Join Sublian Festival",
    desc: "Wagayway Equality proudly joined the Sublian Festival, taking part in one of Batangas' most cherished cultural celebrations. Their presence highlighted the importance of inclusion, respect, and equal representation within traditional community events.",
    tags: ["Advocacy and Rights"],
    date: "2025",
    img: "/images/gallery/Wagayway-Equality-Join-in-Sublian-Festival.jpg",
  },
  {
    title: "Batangas Pride Month Celebration 2023",
    desc: "The Batangas Pride Month Celebration 2023, led by Wagayway Equality, brought together diverse voices from the community in a joyful and welcoming space. During the 8th Batangan Pride Celebration held on June 27, 2023, participants joined in solidarity and celebration.",
    tags: ["Community Voices"],
    date: "2023",
    img: "/images/gallery/Batangas-Pride-Month-Celebration-2023.jpg",
  },
  {
    title: "Equality Desk by Wagayway Equality",
    desc: "The increasing prevalence of HIV in Batangas City is a major concern, especially among young key populations (YKP), Men having Sex with Men (MSM), transgender individuals, and other affected groups. Stigma and discrimination create barriers to accessing health services.",
    tags: ["LGBTQIA2S+"],
    date: "2025",
    img: "/images/gallery/Equality-Desk-by-Wagayway-Equality.jpg",
  },
];

export default function KopsodesPage() {
  return (
    <main className="bg-white min-h-screen">
      <RainbowBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#F2F5EF] to-[#E2EBE0] py-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-[#B5C4AE] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mic2 size={30} className="text-[#4A3F6B]" />
          </div>
          <h1 className="font-serif text-5xl font-bold text-[#4A3F6B] mb-4">Kopisodes</h1>
          <p className="text-[#4E5A4A] text-xl font-medium mb-3">Stories That Speak Truth</p>
          <p className="text-[#4E5A4A] max-w-2xl mx-auto leading-relaxed">
            A collection of voices shaping visibility, healing, and change. Raw, real, and unapologetic.
          </p>
        </div>
      </section>

      {/* About the podcast */}
      <section className="py-16 px-4 bg-[#B5C4AE]/10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-[#B5C4AE] rounded-2xl p-8">
            <h2 className="font-serif text-2xl font-bold text-[#4A3F6B] mb-4">
              Honest Conversations Over Coffee
            </h2>
            <p className="text-[#4E5A4A] leading-relaxed mb-4">
              The EmpowerQueer Hub Blog brings together personal stories, reflections, and resources from across the LGBTQIA+ spectrum. Each post is a window into lived experience—raw, real, and unapologetic. Whether you&rsquo;re here to learn, relate, or be inspired, this space is yours.
            </p>
            <p className="text-[#4E5A4A] leading-relaxed mb-6">
              Kopisodes is the flagship podcast and video advocacy platform of Wagayway Equality Inc., created to amplify LGBTQIA+ voices, community stories, and rights-based conversations that inspire healing, solidarity, and collective action. Through relaxed, coffee-style conversations and creative video content, Kopisodes makes advocacy accessible, relatable, and deeply human.
            </p>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B5C4AE] text-[#4A3F6B] font-semibold px-6 py-2.5 rounded-full hover:bg-[#6B8F63] hover:text-white transition-all text-sm"
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
          <h2 className="font-serif text-2xl font-bold text-[#4A3F6B] mb-8">
            Episodes &amp; Posts
          </h2>
          <div className="space-y-6">
            {episodes.map((ep) => (
              <div
                key={ep.title}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#B5C4AE] hover:shadow-sm transition-all group"
              >
                <div className="flex flex-col sm:flex-row">
                  {ep.img && (
                    <div className="sm:w-48 h-40 sm:h-auto shrink-0 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={ep.img} alt={ep.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="flex-1 p-6">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {ep.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#B5C4AE]/30 border border-[#B5C4AE] text-[#4A3F6B] text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#4A3F6B] mb-2">
                      {ep.title}
                    </h3>
                    <p className="text-[#4E5A4A] text-sm leading-relaxed mb-3">
                      {ep.desc}
                    </p>
                    <a
                      href="/kopisodes/"
                      className="inline-flex items-center gap-1.5 text-[#4A3F6B] text-sm font-semibold hover:gap-2.5 transition-all"
                    >
                      Read More <ChevronRight size={14} />
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
