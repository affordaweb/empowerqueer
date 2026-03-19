import RainbowBar from "../../components/RainbowBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CategoryCommunityCenterPage() {
  return (
    <main className="bg-white min-h-screen">
      <RainbowBar />
      <Navbar />

      <section className="bg-gradient-to-br from-[#EDE8F5] to-[#E4EDE0] py-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#6B8F63] font-semibold text-sm uppercase tracking-widest mb-3">Category</p>
          <h1 className="font-serif text-5xl font-bold text-[#4A3F6B] mb-4">Community Center</h1>
          <p className="text-[#5C576E] text-xl leading-relaxed">
            Spaces and programs that build LGBTQIA+ community.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#5C576E] text-lg mb-6">No posts in this category yet.</p>
          <a
            href="/directory/"
            className="inline-flex items-center gap-2 bg-[#B5C4AE] text-[#4A3F6B] font-semibold px-8 py-3 rounded-full hover:bg-[#6B8F63] hover:text-white transition-all"
          >
            Browse the Service Directory
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
