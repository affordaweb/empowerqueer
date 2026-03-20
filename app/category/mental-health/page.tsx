import RainbowBar from "../../components/RainbowBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CategoryMentalHealthPage() {
  return (
    <main className="bg-white min-h-screen">
      <RainbowBar />
      <Navbar />

      <section className="bg-gradient-to-br from-[#F0EBF5] to-[#E8F4EC] py-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#D7C4E3] font-semibold text-sm uppercase tracking-widest mb-3">Category</p>
          <h1 className="font-serif text-5xl font-bold text-[#3A3C51] mb-4">Mental Health</h1>
          <p className="text-[#474747] text-xl leading-relaxed">
            Resources and support for LGBTQIA+ mental wellness.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#474747] text-lg mb-6">No posts in this category yet.</p>
          <a
            href="/resources/"
            className="btn-p btn-p-mint inline-flex items-center gap-2 px-8 py-3"
          >
            Browse Mental Health Resources
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
