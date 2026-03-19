import RainbowBar from "../components/RainbowBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  {
    q: "What is EmpowerQueer Hub?",
    a: "EmpowerQueer Hub is a community-driven platform offering LGBTQIA+-affirming resources, directories, stories, and event listings. It's designed to be a safe, inclusive space where individuals can find support, share experiences, and connect with services across Batangas Province and beyond.",
  },
  {
    q: "Is the Hub free to use?",
    a: "Yes, everything on EmpowerQueer Hub is completely free to access. No sign-up or payment is required to view resources, read articles, or use the directory.",
  },
  {
    q: "Can I submit a resource, event, or story?",
    a: "Absolutely! Anyone can contribute a file, event, or personal story through the Submit a Resource or Event page. All submissions are reviewed by our team before being published.",
  },
  {
    q: "What types of content can I submit?",
    a: "You can submit toolkits, guides, infographics, event posters, training materials, personal stories, or links to relevant external resources. All content should be respectful, safe, and supportive of the LGBTQIA+ community.",
  },
  {
    q: "Can I stay anonymous when submitting?",
    a: "Yes. During submission, you can choose how you'd like to be credited—by full name, nickname, or anonymously. Just mention your preference in the Message section of the form.",
  },
  {
    q: "How long does it take for my submission to be reviewed?",
    a: "We aim to review all submissions within 3–5 working days. You'll be contacted if any clarification is needed before publishing.",
  },
  {
    q: "How are resources and services chosen for the site?",
    a: "All entries are manually reviewed to ensure they are relevant, LGBTQIA+-affirming, and aligned with the Hub's mission. We prioritize services that are inclusive, safe, and actively engaged in community support.",
  },
  {
    q: "Can I suggest a clinic, group, or organization to be added to the directory?",
    a: "Yes, you can recommend new listings through our Contact page or submission form. Please include as much detail as possible, such as location, contact info, and services offered.",
  },
  {
    q: "How do I know if a clinic or service listed is LGBTQIA+-friendly?",
    a: "We do our best to feature only affirming spaces. Entries are tagged with terms like \"Trans-Inclusive,\" \"Free HIV Testing,\" or \"Youth Support\" so users can quickly identify safe services. We also welcome user feedback to keep listings accurate and accountable.",
  },
  {
    q: "Where can I find upcoming LGBTQIA+ events?",
    a: "Visit the Events & Trainings page to see upcoming workshops, webinars, pride events, and trainings. You can also view past events and community photos.",
  },
  {
    q: "Can I host or promote an event through the Hub?",
    a: "Yes, if your event is LGBTQIA+ inclusive and relevant to the community, you can submit the details through the event submission form.",
  },
  {
    q: "Do I need an account to use the Hub?",
    a: "No, you don't need an account to access or submit anything on the site. It's open to all visitors without requiring sign-ins.",
  },
  {
    q: "How is my information used?",
    a: "Any information you provide through forms is used solely to contact you regarding your submission. We do not share or sell your personal details. Read our full Privacy Policy for more.",
  },
  {
    q: "Is EmpowerQueer Hub mobile-friendly?",
    a: "Yes. The website is designed to work smoothly on all devices—phones, tablets, and desktops—so you can access it wherever you are.",
  },
  {
    q: "Is the site accessible for users with disabilities?",
    a: "We are committed to accessibility and aim to follow best practices, including screen reader compatibility, keyboard navigation, and clear contrast design. Let us know if you experience any issues—we'll do our best to improve.",
  },
  {
    q: "I want to help—how can I get involved?",
    a: "You can contribute by submitting content, sharing the site with your networks, or offering your time as a volunteer. We're always looking for community contributors, writers, and outreach supporters.",
  },
  {
    q: "Can organizations partner with EmpowerQueer Hub?",
    a: "Yes, we welcome partnerships with organizations that share our values. Use the Contact Us form to start a conversation with our team.",
  },
];

export default function FAQsPage() {
  return (
    <main className="bg-white min-h-screen">
      <RainbowBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#EDE8F5] to-[#E4EDE0] py-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold text-[#4A3F6B] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-[#5C576E] text-xl leading-relaxed mb-3">
            Everything you need to know about using the Hub, contributing, and finding support.
          </p>
          <p className="font-serif text-lg italic text-[#4A3F6B]">
            Quick answers, honest guidance, and zero judgment—just what you need, when you need it.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#5C576E] leading-relaxed mb-10">
            Whether you&rsquo;re here to download resources, submit a story, or just explore what EmpowerQueer Hub offers, this FAQ section covers the most common questions. From privacy concerns to contribution guidelines, we&rsquo;re here to make things clear, simple, and supportive.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#B5C4AE] transition-all"
              >
                <h3 className="font-semibold text-[#4A3F6B] mb-2">{faq.q}</h3>
                <p className="text-[#5C576E] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
