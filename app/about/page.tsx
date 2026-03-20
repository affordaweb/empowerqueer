import RainbowBar from "../components/RainbowBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Heart, MapPin, Mail, Linkedin } from "lucide-react";

const team = [
  { name: "Aivan Alvarez", role: "Chairman", bio: "Aivan brings over a decade of experience in community organizing and LGBTQIA+ advocacy. His leadership centers on inclusion, compassion, and integrity.", photo: "/images/team/memb09.jpg" },
  { name: "Dré Santiago", role: "Vice Chair", bio: "Dré is a youth development advocate with roots in education and public health. They champion safe spaces for queer youth and marginalized voices.", photo: null },
  { name: "Camille Reyes", role: "Secretary", bio: "Dré is a youth development advocate with roots in education and public health. They champion safe spaces for queer youth and marginalized voices.", photo: "/images/team/memb08.jpg" },
  { name: "Leo Villanueva", role: "Treasurer", bio: "With a background in nonprofit finance, Leo manages resources with care and accountability. His work supports sustainable and accessible programming.", photo: null },
  { name: "Ren Nakamura", role: "Director, Health & Wellness", bio: "Ren is a licensed mental health counselor who advocates for trauma-informed, identity-affirming care across all services the Hub offers.", photo: null },
  { name: "Marah Ocampo", role: "Director, Community Engagement", bio: "Marah leads with heart and strategy, ensuring local voices are heard through community events, outreach programs, and lived-experience storytelling.", photo: null },
  { name: "Zion Pascual", role: "Director, Education & Training", bio: "Zion designs inclusive learning modules and peer training sessions, with a focus on SOGIE education, allyship, and anti-discrimination practices.", photo: null },
  { name: "Khai Lim", role: "Director, Digital & Accessibility", bio: "", photo: null },
  { name: "Dani Estrella", role: "Director, Advocacy & Policy", bio: "", photo: null },
  { name: "Yani Cruz", role: "Director, Arts & Culture", bio: "", photo: null },
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
      <section className="bg-gradient-to-br from-[#F0EBF5] to-[#E8F4EC] py-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold text-[#3A3C51] mb-6">
            About the Hub
          </h1>
          <p className="text-[#474747] text-xl leading-relaxed mb-6">
            Inspired by Wagayway&rsquo;s Living Advocacy. Powered by Community. Sustained by Expertise.
          </p>
          <p className="text-[#474747] max-w-3xl mx-auto leading-relaxed">
            The EmpowerQueer Hub was born from the heart of Wagayway Equality&rsquo;s community work—years of listening, responding, and standing alongside LGBTQIA+ individuals who needed safe, accessible, and affirming support. What began as the Wagayway EmpowerQueer Project, supported by the Wellspring Philanthropic Fund through Humanis, has grown into a nationwide digital platform designed to uplift queer lives with dignity and care.
          </p>
          <p className="text-[#474747] max-w-3xl mx-auto leading-relaxed mt-4">
            Today, the hub continues to expand with the support of Ascend Development Solutions, our expert partner in personal and organizational development, sustainability systems, and transformative learning. Ascend brings forward inclusive training models, human-centered design, and development frameworks that strengthen how this platform serves the LGBTQIA+ community—ensuring that EmpowerQueer remains sustainable, strategic, and community-led.
          </p>
        </div>
      </section>

      {/* About Banner */}
      <section className="w-full">
        <img
          src="/images/gallery/EmpQueer-Image-142.jpg"
          alt="About the Hub"
          className="w-full h-72 object-cover object-center"
        />
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-[#F3F3F3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#3A3C51] mb-6">Our Mission</h2>
          <p className="text-[#474747] text-lg leading-relaxed mb-4">
            A platform shaped by LGBTQIA+ voices and lived experience. Wagayway Equality, Community of Volunteers, Inc. is a grassroots LGBTQIA+ organization based in Batangas and serving Region IV, with growing footprints nationwide. Built on volunteerism and collective action, Wagayway champions LGBTQIA+ rights &amp; inclusion, community-based HIV services, socio-economic empowerment, mental health support, leadership &amp; advocacy training, safe spaces, solidarity networks, and intergenerational learning.
          </p>
          <p className="text-[#474747] text-lg leading-relaxed mb-4">
            From small gatherings to city-wide campaigns, Wagayway has become a trusted anchor for queer voices—responding to real struggles through programs shaped by lived experience, compassion, and evidence-based practice. The EmpowerQueer Hub extends this mission, making Wagayway&rsquo;s spirit of service accessible to anyone in the Philippines, wherever they may be.
          </p>
          <p className="text-[#474747] text-lg leading-relaxed">
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
                <div className="w-12 h-12 icon-bg-rose rounded-xl flex items-center justify-center">
                  <Heart size={22} className="icon-rose icon-anim" />
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
                      className="bg-[#A9D6B6]/30 border border-[#A9D6B6] text-[#3A3C51] text-xs px-3 py-1.5 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#A9D6B6]/10 border border-[#A9D6B6] rounded-2xl p-8">
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
      <section className="relative py-24 px-4 overflow-hidden bg-[#0F0A1E]">
        {/* Background decorative blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#7C3AED]/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#EC4899]/15 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-[#A78BFA]/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          {/* Section label */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#7C3AED]" />
            <span className="text-[#A78BFA] text-xs uppercase tracking-[0.25em] font-semibold">Our Founder</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#EC4899]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Photo column */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7C3AED] via-[#EC4899] to-[#A78BFA] blur-[20px] opacity-40 scale-105" />
                {/* Gradient border frame */}
                <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-[#7C3AED] via-[#EC4899] to-[#A78BFA]">
                  <img
                    src="/aivan-profile-pic.png"
                    alt="Aivan Castillo Alvarez"
                    className="w-72 h-80 object-cover object-top rounded-2xl block"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-[#7C3AED] to-[#EC4899] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                  Founder &amp; Executive Director
                </div>
              </div>
            </div>

            {/* Content column */}
            <div className="text-white">
              {/* Big decorative quote mark */}
              <div className="font-serif text-[7rem] leading-none text-[#7C3AED]/40 select-none mb-[-1.5rem]">&ldquo;</div>

              {/* Pull quote */}
              <blockquote className="font-serif text-2xl lg:text-3xl italic leading-snug text-white mb-8">
                When we started Wagayway Equality, it wasn&rsquo;t built from abundance &mdash; it was built from urgency.
              </blockquote>

              {/* Name + title */}
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold bg-gradient-to-r from-[#A78BFA] to-[#EC4899] bg-clip-text text-transparent mb-1">
                  Aivan Castillo Alvarez
                </h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Development Practitioner", "LGBTQIA+ Advocate", "Researcher", "Trainer"].map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold text-[#A78BFA] border border-[#A78BFA]/40 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <p className="text-white/70 leading-relaxed mb-8">
                Aivan is a development practitioner, LGBTQIA+ rights advocate, researcher, and trainer committed to building community-led solutions for equality. With experience spanning human rights work, SOGIESC advocacy, socio-economic inclusion, and organizational development, he believes the community is always the expert — his role is only to amplify what already exists within us.
              </p>

              {/* CTA links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:aivan.c.alvarez@gmail.com"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm px-4 py-2.5 rounded-full transition-colors"
                >
                  <Mail size={14} />
                  Email Aivan
                </a>
                <a
                  href="https://www.linkedin.com/in/aivanalvarez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#7C3AED]/30 hover:bg-[#7C3AED]/50 border border-[#7C3AED]/50 text-white text-sm px-4 py-2.5 rounded-full transition-colors"
                >
                  <Linkedin size={14} />
                  LinkedIn
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#A9D6B6] hover:shadow-sm transition-all"
              >
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover mb-3"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#A9D6B6] flex items-center justify-center text-[#3A3C51] font-bold text-sm mb-3">
                    {member.name.charAt(0)}
                  </div>
                )}
                <p className="font-semibold text-[#3A3C51] text-sm">{member.name}</p>
                <p className="text-[#474747] text-xs mt-1 mb-2 font-medium">{member.role}</p>
                {member.bio && <p className="text-[#474747] text-xs leading-relaxed">{member.bio}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section className="py-16 px-4 bg-[#A9D6B6]/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-[#3A3C51] mb-4">
            Volunteer With Us
          </h2>
          <p className="text-[#474747] text-lg leading-relaxed mb-8">
            Join our community of advocates, educators, and changemakers. Whether you have hours or expertise to spare, there&rsquo;s a place for you here.
          </p>
          <a
            href="/contact/"
            className="btn-p btn-p-lavender inline-flex items-center gap-2 px-8 py-3.5"
          >
            Get Involved
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
