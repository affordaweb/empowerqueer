import RainbowBar from "../../components/RainbowBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CategoryMentalHealthPage() {
  return (
    <main className="bg-white min-h-screen">
      <RainbowBar />
      <Navbar />

      <section className="bg-gradient-to-br from-[#F5F2FA] to-[#E8E2F5] py-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#7B6E9E] font-semibold text-sm uppercase tracking-widest mb-3">Category</p>
          <h1 className="font-serif text-5xl font-bold text-[#3D3558] mb-4">Mental Health</h1>
          <p className="text-[#52506A] text-xl leading-relaxed">
            Resources and support for LGBTQIA+ mental wellness.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#52506A] text-lg mb-6">No posts in this category yet.</p>
          <a
            href="/resources/"
            className="inline-flex items-center gap-2 bg-[#C2BED8] text-[#3D3558] font-semibold px-8 py-3 rounded-full hover:bg-[#7B6E9E] hover:text-white transition-all"
          >
            Browse Mental Health Resources
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
