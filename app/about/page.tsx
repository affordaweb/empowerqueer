import RainbowBar from "../components/RainbowBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Heart, MapPin, Mail } from "lucide-react";

const team = [
  { name: "Aivan Alvarez", role: "Chairman" },
  { name: "Dré Santiago", role: "Vice Chair" },
  { name: "Camille Reyes", role: "Secretary" },
  { name: "Leo Villanueva", role: "Treasurer" },
  { name: "Ren Nakamura", role: "Director, Health & Wellness" },
  { name: "Marah Ocampo", role: "Director, Community Engagement" },
  { name: "Zion Pascual", role: "Director, Education & Training" },
  { name: "Khai Lim", role: "Director, Digital & Accessibility" },
  { name: "Dani Estrella", role: "Director, Advocacy & Policy" },
  { name: "Yani Cruz", role: "Director, Arts & Culture" },
];

const championed = [
  "LGBTQIA+ rights & inclusion",
  "HIV services",
  "Socio-economic empowerment",
  "Mental health support",
  "Leadership & advocacy",
  "Safe spaces",
];

const regions = [
  "Batangas",
  "Cavite",
  "Laguna",
  "Quezon",
  "Rizal",
  "MIMAROPA",
];

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <RainbowBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-white py-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold text-[#3A3C51] mb-6">
            About the Hub
          </h1>
          <p className="text-[#474747] text-xl leading-relaxed">
            Inspired by Wagayway&rsquo;s Living Advocacy. Powered by Community. Sustained by Expertise.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#3A3C51] mb-6">Our Mission</h2>
          <p className="text-[#474747] text-lg leading-relaxed mb-4">
            EmpowerQueer Hub emerged from Wagayway Equality&rsquo;s grassroots work, supported by Wellspring Philanthropic Fund via Humanis. It now operates as a nationwide digital platform backed by Ascend Development Solutions.
          </p>
          <p className="text-[#474747] text-lg leading-relaxed">
            We exist to connect LGBTQIA+ individuals across the Philippines to the resources, communities, and opportunities they deserve — without barriers, without judgment, and without compromise.
          </p>
        </div>
      </section>

      {/* Wagayway Equality */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#D7C4E3] rounded-xl flex items-center justify-center">
                  <Heart size={22} className="text-[#3A3C51]" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#3A3C51]">Wagayway Equality</h2>
                  <p className="text-[#474747] text-sm">Grassroots LGBTQIA+ Organization · Batangas, Region IV</p>
                </div>
              </div>
              <p className="text-[#474747] leading-relaxed mb-6">
                A grassroots LGBTQIA+ organization based in Batangas, Region IV, Wagayway Equality champions the rights and welfare of LGBTQIA+ communities through lived-experience-based advocacy and community-centered programs.
              </p>
              <div>
                <p className="text-[#3A3C51] text-xs uppercase tracking-widest font-semibold mb-3">
                  What We Champion
                </p>
                <div className="flex flex-wrap gap-2">
                  {championed.map((item) => (
                    <span
                      key={item}
                      className="bg-[#D7C4E3]/30 border border-[#D7C4E3] text-[#3A3C51] text-xs px-3 py-1.5 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#D7C4E3]/10 border border-[#D7C4E3] rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={18} className="text-[#3A3C51]" />
                <h3 className="font-semibold text-[#3A3C51]">Geographic Reach</h3>
              </div>
              <p className="text-[#474747] text-sm mb-4">
                Primary service area: <strong>Region IV-A &amp; IV-B</strong>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {regions.map((r) => (
                  <span key={r} className="bg-white border border-gray-200 text-[#474747] text-xs px-3 py-1.5 rounded-full">
                    {r}
                  </span>
                ))}
              </div>
              <p className="text-[#474747] text-sm">
                Also serving <strong>MIMAROPA</strong> region, with nationwide digital access to all programs and resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#3A3C51] mb-8 text-center">Our Founder</h2>
          <div className="bg-white border border-[#D7C4E3] rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-20 h-20 rounded-full bg-[#D7C4E3] flex items-center justify-center text-2xl font-bold text-[#3A3C51] shrink-0">
                A
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#3A3C51] mb-1">
                  Aivan Castillo Alvarez
                </h3>
                <p className="text-[#474747] text-sm mb-3">
                  Development practitioner · LGBTQIA+ rights advocate · Researcher · Trainer
                </p>
                <blockquote className="font-serif text-lg italic text-[#3A3C51] border-l-4 border-[#D7C4E3] pl-4 mb-4">
                  &ldquo;The community is the expert. My role is only to amplify what already exists within us.&rdquo;
                </blockquote>
                <a
                  href="mailto:contact@empowerqueerhub.com"
                  className="inline-flex items-center gap-2 text-[#474747] hover:text-[#3A3C51] text-sm"
                >
                  <Mail size={14} />
                  contact@empowerqueerhub.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#3A3C51] mb-10 text-center">
            Board of Directors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-[#D7C4E3] hover:shadow-sm transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#D7C4E3] flex items-center justify-center text-[#3A3C51] font-bold text-sm mx-auto mb-3">
                  {member.name.charAt(0)}
                </div>
                <p className="font-semibold text-[#3A3C51] text-sm">{member.name}</p>
                <p className="text-[#474747] text-xs mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section className="py-16 px-4 bg-[#D7C4E3]/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-[#3A3C51] mb-4">
            Volunteer With Us
          </h2>
          <p className="text-[#474747] text-lg leading-relaxed mb-8">
            Join our community of advocates, educators, and changemakers. Whether you have hours or expertise to spare, there&rsquo;s a place for you here.
          </p>
          <a
            href="/contact/"
            className="inline-flex items-center gap-2 bg-[#D7C4E3] text-[#3A3C51] font-semibold px-8 py-3.5 rounded-full hover:bg-[#3A3C51] hover:text-white transition-all"
          >
            Get Involved
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
