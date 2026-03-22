import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Heart, ExternalLink } from "lucide-react";

export default function DonatePage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#F0EBF5] to-[#E8F4EC] min-h-[600px] pt-[164px] border-b border-gray-100 flex flex-col justify-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="w-12 h-12 icon-bg-rose rounded-2xl flex items-center justify-center mb-6">
            <Heart size={22} className="icon-rose icon-anim" />
          </div>
          <span className="inline-block bg-[#EC4899]/10 text-[#EC4899] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Support the Hub</span>
          <h1 className="font-serif text-5xl font-bold text-[#3A3C51] mb-4">Donate</h1>
          <p className="text-[#474747] text-xl leading-relaxed max-w-2xl">
            Your help keeps this space free, safe, and community-led.
          </p>
        </div>
      </section>

      {/* Support the Movement */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#3A3C51] mb-6">Support the Movement.</h2>
          <p className="text-[#474747] leading-relaxed mb-4">
            EmpowerQueer Hub runs entirely on heart and community support. If you believe in what we do and want to help us reach more lives, you can make a donation via bank deposit. Every contribution—big or small—goes directly toward maintaining free resources, expanding our services, and uplifting LGBTQIA+ voices across Batangas and beyond. Bank details are available below.
          </p>
          <p className="text-[#474747] leading-relaxed mb-4">
            Every peso makes a difference in keeping this hub alive, accessible, and truly ours.
          </p>
          <p className="font-serif text-lg italic text-[#3A3C51] mb-10">
            Fuel the change you believe in.
          </p>

          {/* Bank Details */}
          <div className="bg-[#F3F3F3] border border-[#A9D6B6] rounded-2xl p-8 mb-8">
            <h3 className="font-serif text-xl font-bold text-[#3A3C51] mb-6">Bank Deposit</h3>
            <div className="space-y-4">
              {[
                { label: "Bank Name", value: "Bank of the Philippines Island" },
                { label: "Bank Address", value: "BPI Batangas main 47 P.Burgos st. 4200 Batangas City" },
                { label: "Account Name", value: "Wagayway Equality Association Inc." },
                { label: "Account Number", value: "0871-0155-11" },
                { label: "Swift Code", value: "BOPIPHMM" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-[#A9D6B6]/50 pb-3 last:border-0 last:pb-0">
                  <span className="text-[#3A3C51] font-semibold text-sm w-40 shrink-0">{item.label}</span>
                  <span className="text-[#474747] text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* GoGetFunding */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-[#A9D6B6] transition-all">
            <h3 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">Go Get Funding</h3>
            <p className="text-[#474747] text-sm mb-5">
              You can also support us through our online fundraising campaign.
            </p>
            <a
              href="https://gogetfunding.com/invest-in-equality-fund-wagayways-advocacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-p btn-p-rose inline-flex items-center gap-2 px-8 py-3"
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
