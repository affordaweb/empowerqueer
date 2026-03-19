import RainbowBar from "../../components/RainbowBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CategoryDiagnosticTestingPage() {
  return (
    <main className="bg-white min-h-screen">
      <RainbowBar />
      <Navbar />

      <section className="bg-gradient-to-br from-[#F2F5EF] to-[#E2EBE0] py-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#6B8F63] font-semibold text-sm uppercase tracking-widest mb-3">Category</p>
          <h1 className="font-serif text-5xl font-bold text-[#4A3F6B] mb-4">Diagnostic &amp; Testing</h1>
          <p className="text-[#4E5A4A] text-xl leading-relaxed">
            HIV testing, STI clinics, and diagnostic services.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#4E5A4A] text-lg mb-6">No posts in this category yet.</p>
          <a
            href="/directory/"
            className="inline-flex items-center gap-2 bg-[#B5C4AE] text-[#4A3F6B] font-semibold px-8 py-3 rounded-full hover:bg-[#6B8F63] hover:text-white transition-all"
          >
            Find Testing Services in the Directory
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
