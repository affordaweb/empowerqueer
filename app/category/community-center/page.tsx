import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CategoryCommunityCenterPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <section className="bg-gradient-to-br from-[#F0EBF5] to-[#E8F4EC] pb-20 min-h-[500px] pt-[164px] px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#D7C4E3] font-semibold text-sm uppercase tracking-widest mb-3">Category</p>
          <h1 className="font-serif text-5xl font-bold text-[#3A3C51] mb-4">Community Center</h1>
          <p className="text-[#474747] text-xl leading-relaxed">
            Spaces and programs that build LGBTQIA+ community.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#474747] text-lg mb-6">No posts in this category yet.</p>
          <a
            href="/directory/"
            className="btn-p btn-p-lavender inline-flex items-center gap-2 px-8 py-3"
          >
            Browse the Service Directory
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
