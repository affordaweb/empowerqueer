import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24">
        <div className="max-w-lg mx-auto">
          <div className="rainbow-bar h-1.5 w-24 rounded-full mx-auto mb-8" />
          <h1 className="font-serif text-8xl font-bold text-[#7C3AED] mb-4">404</h1>
          <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-4">
            Page Not Found
          </h2>
          <p className="text-[#474747] leading-relaxed mb-10">
            This page doesn&apos;t exist — but you are still seen, valid, and home.
            Let&apos;s get you back to somewhere safe.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#7C3AED] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#6D28D9] transition"
            >
              Back to Home
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center gap-2 border border-[#A9D6B6] text-[#3A3C51] font-semibold px-6 py-3 rounded-full hover:bg-[#A9D6B6]/10 transition"
            >
              Browse Resources
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
