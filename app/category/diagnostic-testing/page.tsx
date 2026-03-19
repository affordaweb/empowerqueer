import RainbowBar from "../../components/RainbowBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CategoryDiagnosticTestingPage() {
  return (
    <main className="bg-white min-h-screen">
      <RainbowBar />
      <Navbar />

      <section className="bg-gradient-to-br from-[#FDF8EE] to-[#F5E6CE] py-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C4784C] font-semibold text-sm uppercase tracking-widest mb-3">Category</p>
          <h1 className="font-serif text-5xl font-bold text-[#5C3D2E] mb-4">Diagnostic &amp; Testing</h1>
          <p className="text-[#5C4A3A] text-xl leading-relaxed">
            HIV testing, STI clinics, and diagnostic services.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#5C4A3A] text-lg mb-6">No posts in this category yet.</p>
          <a
            href="/directory/"
            className="inline-flex items-center gap-2 bg-[#E8D5B0] text-[#5C3D2E] font-semibold px-8 py-3 rounded-full hover:bg-[#C4784C] hover:text-white transition-all"
          >
            Find Testing Services in the Directory
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
