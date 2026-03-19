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
    description: "Espasyo is a vibrant and inclusive LGBTQIA+ community center established by Wagayway Equality to serve the queer community of Batangas.",
    contact: "09671382063",
    type: "phone",
  },
  {
    name: "Equality Desk – Batangas City Government",
    category: "Advocacy and Rights",
    description: "The Equality Desk is a dedicated in-office support hub developed by Wagayway Equality to serve LGBTQIA+ individuals within the Batangas City Government.",
    contact: "09763427850",
    type: "phone",
  },
  {
    name: "Batangas Medical Center – Wellness Zone",
    category: "Healthcare Resources",
    description: "The Wellness Zone is a confidential and inclusive health service hub designed to cater to the health and wellness needs of the community.",
    contact: "0437408307",
    type: "phone",
  },
  {
    name: "POPMH – Lipa Chapter",
    category: "Mental Health",
    description: "The Psychological Organization for the Promotion of Mental Health (POPMH) Lipa is a youth-driven initiative providing peer support and advocacy.",
    contact: null,
    type: null,
  },
  {
    name: "Batangas City Health Office – Social Hygiene Clinic",
    category: "HIV Services",
    description: "This local government initiative provides free, walk-in testing services for HIV and other sexually transmitted infections.",
    contact: "0437238890",
    type: "phone",
  },
  {
    name: "National Center for Mental Health – Crisis Hotline",
    category: "Mental Health",
    description: "A 24/7 hotline providing immediate support for people experiencing emotional distress or mental health crises.",
    contact: "1553",
    type: "hotline",
  },
  {
    name: "MindNation",
    category: "Mental Health",
    description: "Online mental health counseling platform connecting individuals to licensed therapists and mental wellness support.",
    contact: null,
    type: null,
  },
  {
    name: "MentalHealthPH",
    category: "Support Resources",
    description: "Mental health advocacy organization and peer support network focused on raising awareness and reducing stigma.",
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
    description: "Professional psychological services and teleconsultations for mental wellness and emotional health.",
    contact: null,
    type: null,
  },
  {
    name: "Ascend Development Solutions",
    category: "Professional Development",
    description: "ESG/SDG-aligned trainings and capacity-building programs supporting governance, compliance, and institutional growth.",
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
      <section className="bg-gradient-to-br from-[#EDE8F5] to-[#E4EDE0] py-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold text-[#4A3F6B] mb-4">Service Directory</h1>
          <p className="text-[#5C576E] text-xl leading-relaxed mb-4">
            Trusted LGBTQIA+ affirming services across Batangas Province
          </p>
          <p className="text-[#5C576E] max-w-2xl mx-auto">
            This directory is built with care—to help you find clinics, support groups, organizations, and services that truly see and respect who you are. Whether you&rsquo;re seeking mental health support, HIV testing, legal guidance, or a safe space to connect, every listing here is selected for its commitment to serving the LGBTQIA+ community with dignity and understanding.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24">
                <h3 className="font-semibold text-[#4A3F6B] mb-4 uppercase tracking-wider text-sm">
                  Categories
                </h3>
                <ul className="space-y-1">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <a
                        href="#"
                        className="block text-[#5C576E] hover:text-[#4A3F6B] hover:bg-[#B5C4AE]/20 text-sm px-3 py-1.5 rounded-md transition-all"
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
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#B5C4AE] hover:shadow-sm transition-all"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-[#B5C4AE]/30 border border-[#B5C4AE] text-[#4A3F6B] text-xs px-3 py-1 rounded-full">
                      {listing.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#4A3F6B] mb-2">
                    {listing.name}
                  </h3>
                  <p className="text-[#5C576E] text-sm leading-relaxed mb-3">
                    {listing.description}
                  </p>
                  {listing.contact && (
                    <div className="flex items-center gap-2 text-[#5C576E] text-sm">
                      {listing.type === "phone" || listing.type === "hotline" ? (
                        <Phone size={14} className="text-[#4A3F6B]" />
                      ) : (
                        <MapPin size={14} className="text-[#4A3F6B]" />
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
      <section className="py-16 px-4 bg-[#B5C4AE]/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-[#4A3F6B] mb-4">
            Know a Service We Should List?
          </h2>
          <p className="text-[#5C576E] mb-6">
            Help us grow this directory by submitting LGBTQIA+-friendly services in your area.
          </p>
          <a
            href="mailto:contact@empowerqueerhub.com"
            className="inline-flex items-center gap-2 bg-[#B5C4AE] text-[#4A3F6B] font-semibold px-8 py-3 rounded-full hover:bg-[#6B8F63] hover:text-white transition-all"
          >
            Submit a Listing
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
