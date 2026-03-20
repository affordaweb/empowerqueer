import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ChevronRight } from "lucide-react";

const posts = [
  {
    title: "Human Rights 101 by Wagayway Equality",
    desc: "Human Rights 101 by Wagayway Equality offered participants a foundational understanding of their rights and freedoms, emphasizing equality, dignity, and protection under the law. The session explored key concepts, legal frameworks, and real-life applications, creating a safe and empowering space for learning.",
    date: "2025",
    img: "/images/gallery/HUMAN-RIGHTS-101-by-Wagayway-Equality.jpg",
  },
  {
    title: "HIV 101 by Wagayway Equality",
    desc: "HIV 101 by Wagayway Equality focused on building clear and accurate understanding of HIV, including prevention, testing, treatment, and care. The session addressed common myths and fears, helping participants gain reliable knowledge in a safe and supportive environment.",
    date: "2025",
    img: "/images/gallery/HIV-101-by-Wagayway-Equality.jpg",
  },
  {
    title: "SOGIESC 101 by Wagayway Equality Inc",
    desc: "SOGIESC 101 by Wagayway Equality Inc. provided a clear and safe space for learning about sexual orientation, gender identity, gender expression, and sex characteristics. The session helped participants better understand diversity through open discussion and affirming education.",
    date: "2025",
    img: "/images/gallery/SOGIESC-101-by-Wagayway-Equality-Inc.jpg",
  },
  {
    title: "Equality Desk by Wagayway Equality",
    desc: "The increasing prevalence of HIV in Batangas City is a major concern, especially among young key populations (YKP), Men having Sex with Men (MSM), transgender individuals, and other affected groups. Stigma and discrimination create barriers to accessing health services.",
    date: "2025",
    img: "/images/gallery/Equality-Desk-by-Wagayway-Equality.jpg",
  },
];

export default function CategorySupportResourcesPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <section className="bg-gradient-to-br from-[#F0EBF5] to-[#E8F4EC] pb-20 pt-[164px] px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#D7C4E3] font-semibold text-sm uppercase tracking-widest mb-3">Category</p>
          <h1 className="font-serif text-5xl font-bold text-[#3A3C51] mb-4">Support Resources</h1>
          <p className="text-[#474747] text-xl leading-relaxed">
            Guides, sessions, and tools supporting LGBTQIA+ wellbeing.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {posts.map((post) => (
            <div
              key={post.title}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#A9D6B6] hover:shadow-sm transition-all group"
            >
              <div className="flex flex-col sm:flex-row">
                {post.img && (
                  <div className="sm:w-48 h-40 sm:h-auto shrink-0 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex-1 p-6">
                  <p className="text-[#474747] text-xs mb-2">{post.date}</p>
                  <h3 className="font-serif text-lg font-bold text-[#3A3C51] mb-2">{post.title}</h3>
                  <p className="text-[#474747] text-sm leading-relaxed mb-3">{post.desc}</p>
                  <a href="/kopisodes/" className="inline-flex items-center gap-1.5 text-[#3A3C51] text-sm font-semibold hover:gap-2.5 transition-all">
                    Read More <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
