import RainbowBar from "../components/RainbowBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Heart, ExternalLink } from "lucide-react";

export default function DonatePage() {
  return (
    <main className="bg-white min-h-screen">
      <RainbowBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#F5F2FA] to-[#E8E2F5] py-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-[#C2BED8] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Heart size={30} className="text-[#3D3558]" />
          </div>
          <h1 className="font-serif text-5xl font-bold text-[#3D3558] mb-4">Donate</h1>
          <p className="text-[#52506A] text-xl leading-relaxed">
            Your help keeps this space free, safe, and community-led.
          </p>
        </div>
      </section>

      {/* Support the Movement */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#3D3558] mb-6">Support the Movement.</h2>
          <p className="text-[#52506A] leading-relaxed mb-4">
            EmpowerQueer Hub runs entirely on heart and community support. If you believe in what we do and want to help us reach more lives, you can make a donation via bank deposit. Every contribution—big or small—goes directly toward maintaining free resources, expanding our services, and uplifting LGBTQIA+ voices across Batangas and beyond. Bank details are available below.
          </p>
          <p className="text-[#52506A] leading-relaxed mb-4">
            Every peso makes a difference in keeping this hub alive, accessible, and truly ours.
          </p>
          <p className="font-serif text-lg italic text-[#3D3558] mb-10">
            Fuel the change you believe in.
          </p>

          {/* Bank Details */}
          <div className="bg-[#F2EFF8] border border-[#C2BED8] rounded-2xl p-8 mb-8">
            <h3 className="font-serif text-xl font-bold text-[#3D3558] mb-6">Bank Deposit</h3>
            <div className="space-y-4">
              {[
                { label: "Bank Name", value: "Bank of the Philippines Island" },
                { label: "Bank Address", value: "BPI Batangas main 47 P.Burgos st. 4200 Batangas City" },
                { label: "Account Name", value: "Wagayway Equality Association Inc." },
                { label: "Account Number", value: "0871-0155-11" },
                { label: "Swift Code", value: "BOPIPHMM" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-[#C2BED8]/50 pb-3 last:border-0 last:pb-0">
                  <span className="text-[#3D3558] font-semibold text-sm w-40 shrink-0">{item.label}</span>
                  <span className="text-[#52506A] text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* GoGetFunding */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-[#C2BED8] transition-all">
            <h3 className="font-serif text-xl font-bold text-[#3D3558] mb-3">Go Get Funding</h3>
            <p className="text-[#52506A] text-sm mb-5">
              You can also support us through our online fundraising campaign.
            </p>
            <a
              href="https://gogetfunding.com/invest-in-equality-fund-wagayways-advocacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C2BED8] text-[#3D3558] font-semibold px-8 py-3 rounded-full hover:bg-[#7B6E9E] hover:text-white transition-all"
            >
              Donate via GoGetFunding <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
