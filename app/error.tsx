"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24">
        <div className="max-w-lg mx-auto">
          <div className="rainbow-bar h-1.5 w-24 rounded-full mx-auto mb-8" />
          <h1 className="font-serif text-6xl font-bold text-[#7C3AED] mb-4">Oops</h1>
          <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-4">
            Something went wrong
          </h2>
          <p className="text-[#474747] leading-relaxed mb-10">
            An unexpected error occurred. You are still seen, valid, and home —
            let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 bg-[#7C3AED] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#6D28D9] transition"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border border-[#A9D6B6] text-[#3A3C51] font-semibold px-6 py-3 rounded-full hover:bg-[#A9D6B6]/10 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
