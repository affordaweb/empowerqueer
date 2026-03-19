import RainbowBar from "../components/RainbowBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Heart, MapPin, Mail } from "lucide-react";

const team = [
  { name: "Aivan Alvarez", role: "Chairman", bio: "Aivan brings over a decade of experience in community organizing and LGBTQIA+ advocacy. His leadership centers on inclusion, compassion, and integrity." },
  { name: "Dré Santiago", role: "Vice Chair", bio: "Dré is a youth development advocate with roots in education and public health. They champion safe spaces for queer youth and marginalized voices." },
  { name: "Camille Reyes", role: "Secretary", bio: "Dré is a youth development advocate with roots in education and public health. They champion safe spaces for queer youth and marginalized voices." },
  { name: "Leo Villanueva", role: "Treasurer", bio: "With a background in nonprofit finance, Leo manages resources with care and accountability. His work supports sustainable and accessible programming." },
  { name: "Ren Nakamura", role: "Director, Health & Wellness", bio: "Ren is a licensed mental health counselor who advocates for trauma-informed, identity-affirming care across all services the Hub offers." },
  { name: "Marah Ocampo", role: "Director, Community Engagement", bio: "Marah leads with heart and strategy, ensuring local voices are heard through community events, outreach programs, and lived-experience storytelling." },
  { name: "Zion Pascual", role: "Director, Education & Training", bio: "Zion designs inclusive learning modules and peer training sessions, with a focus on SOGIE education, allyship, and anti-discrimination practices." },
  { name: "Khai Lim", role: "Director, Digital & Accessibility", bio: "" },
  { name: "Dani Estrella", role: "Director, Advocacy & Policy", bio: "" },
  { name: "Yani Cruz", role: "Director, Arts & Culture", bio: "" },
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
      <section className="bg-gradient-to-br from-[#F2F5EF] to-[#E2EBE0] py-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold text-[#4A3F6B] mb-6">
            About the Hub
          </h1>
          <p className="text-[#4E5A4A] text-xl leading-relaxed mb-6">
            Inspired by Wagayway&rsquo;s Living Advocacy. Powered by Community. Sustained by Expertise.
          </p>
          <p className="text-[#4E5A4A] max-w-3xl mx-auto leading-relaxed">
            The EmpowerQueer Hub was born from the heart of Wagayway Equality&rsquo;s community work—years of listening, responding, and standing alongside LGBTQIA+ individuals who needed safe, accessible, and affirming support. What began as the Wagayway EmpowerQueer Project, supported by the Wellspring Philanthropic Fund through Humanis, has grown into a nationwide digital platform designed to uplift queer lives with dignity and care.
          </p>
          <p className="text-[#4E5A4A] max-w-3xl mx-auto leading-relaxed mt-4">
            Today, the hub continues to expand with the support of Ascend Development Solutions, our expert partner in personal and organizational development, sustainability systems, and transformative learning. Ascend brings forward inclusive training models, human-centered design, and development frameworks that strengthen how this platform serves the LGBTQIA+ community—ensuring that EmpowerQueer remains sustainable, strategic, and community-led.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-[#EFF3EC]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#4A3F6B] mb-6">Our Mission</h2>
          <p className="text-[#4E5A4A] text-lg leading-relaxed mb-4">
            A platform shaped by LGBTQIA+ voices and lived experience. Wagayway Equality, Community of Volunteers, Inc. is a grassroots LGBTQIA+ organization based in Batangas and serving Region IV, with growing footprints nationwide. Built on volunteerism and collective action, Wagayway champions LGBTQIA+ rights &amp; inclusion, community-based HIV services, socio-economic empowerment, mental health support, leadership &amp; advocacy training, safe spaces, solidarity networks, and intergenerational learning.
          </p>
          <p className="text-[#4E5A4A] text-lg leading-relaxed mb-4">
            From small gatherings to city-wide campaigns, Wagayway has become a trusted anchor for queer voices—responding to real struggles through programs shaped by lived experience, compassion, and evidence-based practice. The EmpowerQueer Hub extends this mission, making Wagayway&rsquo;s spirit of service accessible to anyone in the Philippines, wherever they may be.
          </p>
          <p className="text-[#4E5A4A] text-lg leading-relaxed">
            Our goal is to ensure that every LGBTQIA+ person in the Philippines can find the help, knowledge, and connection they deserve—no gatekeeping, no judgment, no fear.
          </p>
        </div>
      </section>

      {/* Wagayway Equality */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#B5C4AE] rounded-xl flex items-center justify-center">
                  <Heart size={22} className="text-[#4A3F6B]" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#4A3F6B]">Wagayway Equality</h2>
                  <p className="text-[#4E5A4A] text-sm">Grassroots LGBTQIA+ Organization · Batangas, Region IV</p>
                </div>
              </div>
              <p className="text-[#4E5A4A] leading-relaxed mb-6">
                A grassroots LGBTQIA+ organization based in Batangas, Region IV, Wagayway Equality champions the rights and welfare of LGBTQIA+ communities through lived-experience-based advocacy and community-centered programs.
              </p>
              <div>
                <p className="text-[#4A3F6B] text-xs uppercase tracking-widest font-semibold mb-3">
                  What We Champion
                </p>
                <div className="flex flex-wrap gap-2">
                  {championed.map((item) => (
                    <span
                      key={item}
                      className="bg-[#B5C4AE]/30 border border-[#B5C4AE] text-[#4A3F6B] text-xs px-3 py-1.5 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#B5C4AE]/10 border border-[#B5C4AE] rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={18} className="text-[#4A3F6B]" />
                <h3 className="font-semibold text-[#4A3F6B]">Geographic Reach</h3>
              </div>
              <p className="text-[#4E5A4A] text-sm mb-4">
                Primary service area: <strong>Region IV-A &amp; IV-B</strong>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {regions.map((r) => (
                  <span key={r} className="bg-white border border-gray-200 text-[#4E5A4A] text-xs px-3 py-1.5 rounded-full">
                    {r}
                  </span>
                ))}
              </div>
              <p className="text-[#4E5A4A] text-sm">
                Also serving <strong>MIMAROPA</strong> region, with nationwide digital access to all programs and resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 px-4 bg-[#EFF3EC]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#4A3F6B] mb-8 text-center">Our Founder</h2>
          <div className="bg-white border border-[#B5C4AE] rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-20 h-20 rounded-full bg-[#B5C4AE] flex items-center justify-center text-2xl font-bold text-[#4A3F6B] shrink-0">
                A
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#4A3F6B] mb-1">
                  Aivan Castillo Alvarez
                </h3>
                <p className="text-[#4E5A4A] text-sm mb-3">
                  Development practitioner · LGBTQIA+ rights advocate · Researcher · Trainer
                </p>
                <p className="text-[#4E5A4A] text-sm leading-relaxed mb-3">
                  Aivan is a development practitioner, LGBTQIA+ rights advocate, researcher, and trainer committed to building community-led solutions for equality. With experience spanning human rights work, SOGIESC advocacy, socio-economic inclusion, and organizational development, Aivan believes in one simple truth:
                </p>
                <blockquote className="font-serif text-lg italic text-[#4A3F6B] border-l-4 border-[#B5C4AE] pl-4 mb-4">
                  &ldquo;The community is the expert. My role is only to amplify what already exists within us.&rdquo;
                </blockquote>
                <a
                  href="mailto:contact@empowerqueerhub.com"
                  className="inline-flex items-center gap-2 text-[#4E5A4A] hover:text-[#4A3F6B] text-sm"
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
          <h2 className="font-serif text-3xl font-bold text-[#4A3F6B] mb-10 text-center">
            Board of Directors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#B5C4AE] hover:shadow-sm transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#B5C4AE] flex items-center justify-center text-[#4A3F6B] font-bold text-sm mb-3">
                  {member.name.charAt(0)}
                </div>
                <p className="font-semibold text-[#4A3F6B] text-sm">{member.name}</p>
                <p className="text-[#4E5A4A] text-xs mt-1 mb-2 font-medium">{member.role}</p>
                {member.bio && <p className="text-[#4E5A4A] text-xs leading-relaxed">{member.bio}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section className="py-16 px-4 bg-[#B5C4AE]/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-[#4A3F6B] mb-4">
            Volunteer With Us
          </h2>
          <p className="text-[#4E5A4A] text-lg leading-relaxed mb-8">
            Join our community of advocates, educators, and changemakers. Whether you have hours or expertise to spare, there&rsquo;s a place for you here.
          </p>
          <a
            href="/contact/"
            className="inline-flex items-center gap-2 bg-[#B5C4AE] text-[#4A3F6B] font-semibold px-8 py-3.5 rounded-full hover:bg-[#6B8F63] hover:text-white transition-all"
          >
            Get Involved
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
