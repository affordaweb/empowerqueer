import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ExternalLink } from "lucide-react";

export default function DonatePage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[600px] flex flex-col justify-end border-b border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/gallery/DSC_0096.jpg" alt="Donate" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A2E]/90 via-[#1A0A2E]/55 to-[#1A0A2E]/25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Support the Hub</span>
          <h1 className="font-serif text-5xl font-bold text-white mb-4">Donate</h1>
          <p className="text-white/75 text-xl leading-relaxed max-w-2xl">
            Your help keeps this space free, safe, and community-led.
          </p>
        </div>
      </section>

      {/* Donate — Two Column */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_560px] gap-12 items-start">

            {/* Left */}
            <div className="lg:sticky lg:top-28">
              <p className="text-[#7C3AED] font-semibold tracking-widest uppercase text-sm mb-3">Support the Movement</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#3A3C51] leading-tight mb-4">
                Fuel the Change You Believe In
              </h2>
              <p className="text-[#474747] text-lg leading-relaxed mb-8">
                EmpowerQueer Hub runs entirely on heart and community support. Every contribution — big or small — goes directly toward maintaining free resources, expanding services, and uplifting LGBTQIA+ voices across Batangas and beyond.
              </p>

              <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.pexels.com/photos/3736756/pexels-photo-3736756.jpeg"
                  alt="Community support"
                  className="w-full h-72 object-cover"
                />
              </div>

              <p className="text-[#474747] text-sm leading-relaxed">
                Every peso makes a difference in keeping this hub alive, accessible, and truly ours. Whether you give once or regularly, you become part of a community that believes every LGBTQIA+ Filipino deserves to be seen, supported, and celebrated.
              </p>
            </div>

            {/* Right — Donation Info */}
            <div className="space-y-6">

              {/* Bank Deposit */}
              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#F5F0FF] rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-lg">🏦</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#3A3C51]">Bank Deposit</h3>
                    <p className="text-gray-400 text-xs">Direct bank transfer</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Bank Name", value: "Bank of the Philippines Island (BPI)" },
                    { label: "Bank Address", value: "BPI Batangas Main, 47 P. Burgos St., 4200 Batangas City" },
                    { label: "Account Name", value: "Wagayway Equality Association Inc." },
                    { label: "Account Number", value: "0871-0155-11" },
                    { label: "Swift Code", value: "BOPIPHMM" },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 border-b border-gray-100 pb-3.5 last:border-0 last:pb-0">
                      <span className="text-[#3A3C51] font-semibold text-sm w-36 shrink-0">{item.label}</span>
                      <span className="text-[#474747] text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-5 leading-relaxed">
                  After transferring, please send a screenshot of your transaction to <a href="mailto:contact@empowerqueerhub.com" className="text-[#7C3AED] hover:underline">contact@empowerqueerhub.com</a> so we can acknowledge your support.
                </p>
              </div>

              {/* GoGetFunding */}
              <div className="bg-gradient-to-br from-[#F5F0FF] to-[#FDF2F8] border border-[#E9D5FF] rounded-3xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <span className="text-lg">💜</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#3A3C51]">GoGetFunding</h3>
                    <p className="text-gray-400 text-xs">Online fundraising campaign</p>
                  </div>
                </div>
                <p className="text-[#474747] text-sm leading-relaxed mb-6">
                  You can also support us through our online fundraising campaign. Donate securely with a credit/debit card or e-wallet — every contribution directly funds our community advocacy programs.
                </p>
                <a
                  href="https://gogetfunding.com/invest-in-equality-fund-wagayways-advocacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
                >
                  Donate via GoGetFunding <ExternalLink size={14} />
                </a>
              </div>

              {/* Thank you note */}
              <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-6">
                <p className="font-serif text-base italic text-[#3A3C51] leading-relaxed">
                  &ldquo;Your generosity is not just a donation — it&rsquo;s a declaration that every queer Filipino life has value, dignity, and a community behind them.&rdquo;
                </p>
                <p className="text-[#059669] text-xs font-semibold mt-3">— EmpowerQueer Hub Team</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
