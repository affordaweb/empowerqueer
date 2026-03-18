import RainbowBar from "../components/RainbowBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Phone, MapPin } from "lucide-react";

const categories = [
  "Advocacy and Rights",
  "Community Center",
  "Mental Health",
  "Sexual Health",
  "Healthcare Resources",
  "HIV Services",
  "Youth Services",
  "Support Resources",
  "Diagnostic & Testing",
];

const listings = [
  {
    name: "Espasyo Community Center by Wagayway Equality",
    category: "Community Center",
    description: "A vibrant, inclusive LGBTQIA+ community center providing safe spaces, programs, and services.",
    contact: "09671382063",
    type: "phone",
  },
  {
    name: "Equality Desk – Batangas City Government",
    category: "Advocacy and Rights",
    description: "An in-office support hub within the Batangas City Government offering LGBTQIA+ assistance and services.",
    contact: "09763427850",
    type: "phone",
  },
  {
    name: "Batangas Medical Center – Wellness Zone",
    category: "Healthcare Resources",
    description: "A confidential health service hub offering wellness consultations and referrals.",
    contact: "0437408307",
    type: "phone",
  },
  {
    name: "POPMH – Lipa Chapter",
    category: "Mental Health",
    description: "A youth-driven mental health initiative providing peer support and advocacy in Lipa City.",
    contact: null,
    type: null,
  },
  {
    name: "Batangas City Health Office – Social Hygiene Clinic",
    category: "HIV Services",
    description: "Free walk-in HIV/STI testing and confidential health services.",
    contact: "0437238890",
    type: "phone",
  },
  {
    name: "National Center for Mental Health – Crisis Hotline",
    category: "Mental Health",
    description: "24/7 mental health crisis hotline providing immediate support and referrals nationwide.",
    contact: "1553",
    type: "hotline",
  },
  {
    name: "MindNation",
    category: "Mental Health",
    description: "Online counseling and mental wellness platform connecting individuals to licensed therapists.",
    contact: null,
    type: null,
  },
  {
    name: "MentalHealthPH",
    category: "Support Resources",
    description: "Advocacy organization and peer support network focused on mental health awareness.",
    contact: null,
    type: null,
  },
  {
    name: "RecoveryHub Philippines",
    category: "Mental Health",
    description: "Licensed therapy services and recovery support for individuals facing mental health challenges.",
    contact: null,
    type: null,
  },
  {
    name: "GrayMatters Psychological Services",
    category: "Mental Health",
    description: "Professional psychological services and teleconsultations for mental wellness.",
    contact: null,
    type: null,
  },
];

export default function DirectoryPage() {
  return (
    <main className="bg-white min-h-screen">
      <RainbowBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-white py-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold text-[#3A3C51] mb-4">Directory</h1>
          <p className="text-[#474747] text-xl leading-relaxed">
            LGBTQIA+-friendly organizations, clinics, and services across the Philippines.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24">
                <h3 className="font-semibold text-[#3A3C51] mb-4 uppercase tracking-wider text-sm">
                  Categories
                </h3>
                <ul className="space-y-1">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <a
                        href="#"
                        className="block text-[#474747] hover:text-[#3A3C51] hover:bg-[#D7C4E3]/20 text-sm px-3 py-1.5 rounded-md transition-all"
                      >
                        {cat}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Listings */}
            <div className="lg:col-span-3 space-y-5">
              {listings.map((listing) => (
                <div
                  key={listing.name}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#D7C4E3] hover:shadow-sm transition-all"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-[#D7C4E3]/30 border border-[#D7C4E3] text-[#3A3C51] text-xs px-3 py-1 rounded-full">
                      {listing.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#3A3C51] mb-2">
                    {listing.name}
                  </h3>
                  <p className="text-[#474747] text-sm leading-relaxed mb-3">
                    {listing.description}
                  </p>
                  {listing.contact && (
                    <div className="flex items-center gap-2 text-[#474747] text-sm">
                      {listing.type === "phone" || listing.type === "hotline" ? (
                        <Phone size={14} className="text-[#3A3C51]" />
                      ) : (
                        <MapPin size={14} className="text-[#3A3C51]" />
                      )}
                      <span>
                        {listing.type === "hotline" ? "Hotline: " : "Contact: "}
                        <strong>{listing.contact}</strong>
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#D7C4E3]/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-4">
            Know a Service We Should List?
          </h2>
          <p className="text-[#474747] mb-6">
            Help us grow this directory by submitting LGBTQIA+-friendly services in your area.
          </p>
          <a
            href="mailto:contact@empowerqueerhub.com"
            className="inline-flex items-center gap-2 bg-[#D7C4E3] text-[#3A3C51] font-semibold px-8 py-3 rounded-full hover:bg-[#3A3C51] hover:text-white transition-all"
          >
            Submit a Listing
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
