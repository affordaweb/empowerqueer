import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ChevronRight } from "lucide-react";

const posts = [
  {
    title: "Wagayway Equality Join Sublian Festival",
    desc: "Wagayway Equality proudly joined the Sublian Festival, taking part in one of Batangas' most cherished cultural celebrations. Their presence highlighted the importance of inclusion, respect, and equal representation within traditional community events.",
    date: "2025",
    img: "/images/gallery/Wagayway-Equality-Join-in-Sublian-Festival.jpg",
  },
  {
    title: "Batangas Pride Month Celebration 2023",
    desc: "The Batangas Pride Month Celebration 2023, led by Wagayway Equality, brought together diverse voices from the community in a joyful and welcoming space. During the 8th Batangan Pride Celebration held on June 27, 2023, participants joined in solidarity and celebration.",
    date: "2023",
    img: "/images/gallery/Batangas-Pride-Month-Celebration-2023.jpg",
  },
];

export default function CategoryCommunityVoicesPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <section className="bg-gradient-to-br from-[#F0EBF5] to-[#E8F4EC] pb-20 pt-[89px] px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#D7C4E3] font-semibold text-sm uppercase tracking-widest mb-3">Category</p>
          <h1 className="font-serif text-5xl font-bold text-[#3A3C51] mb-4">Community Voices</h1>
          <p className="text-[#474747] text-xl leading-relaxed">
            Stories and moments from across the LGBTQIA+ community.
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
