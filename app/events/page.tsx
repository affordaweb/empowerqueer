import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const events = [
  {
    title: "Gender-Affirming Care 101: A Community Workshop",
    date: "November 18, 2025",
    time: "2:00–4:30 PM",
    location: "EmpowerQueer Hub, National Highway, Batangas City",
    price: "Free",
    description:
      "Learn the basics of gender-affirming care, access pathways, patient rights, and safe provider referrals. Includes an open Q&A with a licensed LGBTQIA+ healthcare advocate.",
    tags: ["Health", "Workshop", "In-Person"],
    image: "/images/gallery/EmpQueer-Image-217.jpg",
  },
  {
    title: "Queer Youth Speak: A Virtual Storytelling Night",
    date: "November 15, 2025",
    time: "6:00–8:00 PM",
    location: "Online / Virtual",
    price: "Free",
    description:
      "A safe and empowering space where LGBTQIA+ youth share personal stories of resilience, identity, and connection. Every voice is honored here.",
    tags: ["Youth", "Virtual", "Storytelling"],
    image: "/images/gallery/DSC_0735.jpg",
  },
  {
    title: "Know Your Rights: Legal Aid for LGBTQIA+ Communities",
    date: "November 10, 2025",
    time: "All Day",
    location: "In-Person",
    price: "Free",
    description:
      "An in-person legal training covering SOGIE-based protections, filing discrimination cases, and navigating government services. Free legal kits provided to all attendees.",
    tags: ["Legal", "Advocacy", "In-Person"],
    image: "/images/gallery/EmpQueer-Image-180.jpg",
  },
];

export default function EventsPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#F0EBF5] to-[#E8F4EC] pb-[130px] pt-[164px] px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold text-[#3A3C51] mb-4">Events</h1>
          <p className="text-[#474747] text-xl leading-relaxed">
            Community gatherings, workshops, and advocacy events for LGBTQIA+ individuals.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#A9D6B6] hover:shadow-md transition-all"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#A9D6B6]/30 border border-[#A9D6B6] text-[#3A3C51] text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                <span className="bg-green-50 border border-green-200 text-green-700 text-xs px-3 py-1 rounded-full">
                  {event.price}
                </span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-4">
                {event.title}
              </h2>
              <div className="flex flex-wrap gap-6 mb-4 text-[#474747] text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={15} className="text-[#3A3C51]" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-[#3A3C51]" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={15} className="text-[#3A3C51]" />
                  <span>{event.location}</span>
                </div>
              </div>
              <p className="text-[#474747] leading-relaxed mb-6">
                {event.description}
              </p>
              <a
                href="/contact/"
                className="btn-p btn-p-sky inline-flex items-center gap-2 px-6 py-2.5 text-sm"
              >
                Register / Inquire
              </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#A9D6B6]/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-4">
            Want to Submit an Event?
          </h2>
          <p className="text-[#474747] mb-6">
            Share your community event, workshop, or advocacy activity with the EmpowerQueer Hub network.
          </p>
          <a
            href="mailto:contact@empowerqueerhub.com"
            className="btn-p btn-p-peach inline-flex items-center gap-2 px-8 py-3"
          >
            Submit an Event
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
