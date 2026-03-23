import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions — Empower Queer Hub",
  description: "Read the terms and conditions governing your use of the Empower Queer Hub platform.",
  alternates: { canonical: "https://www.empowerqueerhub.com/terms" },
};

const LAST_UPDATED = "March 22, 2026";
const ORG = "Wagayway Equality Inc. (Empower Queer Hub)";
const EMAIL = "empowerqueerhub@gmail.com";
const SITE = "https://www.empowerqueerhub.com";

export default function TermsPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#F5F0FF] to-[#EBF9F1] py-16 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rainbow-bar h-1.5 w-16 rounded-full mb-6" />
          <h1 className="font-serif text-4xl font-bold text-[#3A3C51] mb-3">Terms &amp; Conditions</h1>
          <p className="text-[#474747]">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-[#474747] leading-relaxed">

            <div>
              <h2 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Empower Queer Hub website at <a href={SITE} className="text-[#7C3AED] hover:underline">{SITE}</a>, you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use the site.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">2. About the Platform</h2>
              <p>
                Empower Queer Hub is operated by {ORG}, a community organization in Batangas, Philippines. The platform provides LGBTQIA+ community resources, events, stories, directories, and related content for educational and community purposes.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">3. User Accounts</h2>
              <p>Dashboard accounts are available by approval only. By registering, you agree to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide accurate and truthful information</li>
                <li>Keep your login credentials confidential</li>
                <li>Not share your account with others</li>
                <li>Notify us immediately if you suspect unauthorized access</li>
              </ul>
              <p className="mt-3">We reserve the right to suspend or revoke accounts that violate these terms or misuse the platform.</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">4. Community Submissions</h2>
              <p>When you submit content (events, resources, stories, etc.), you agree that:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>The content is accurate and not misleading</li>
                <li>You have the right to submit the content</li>
                <li>The content respects the dignity and safety of all LGBTQIA+ individuals</li>
                <li>Content may be reviewed and approved or rejected by our team before publication</li>
                <li>We may edit submissions for clarity or formatting</li>
              </ul>
              <p className="mt-3">We do not accept content that is discriminatory, harmful, sexually explicit, or violates any applicable law.</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">5. Intellectual Property</h2>
              <p>
                All original content on Empower Queer Hub — including text, graphics, logos, and design — is owned by {ORG} or its contributors. You may share or reference content with proper attribution. You may not reproduce, sell, or redistribute content without written permission.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">6. Safe Space Policy</h2>
              <p>
                Empower Queer Hub is committed to being a safe and affirming space. Users must not engage in harassment, hate speech, discrimination, or any behavior that threatens the safety of LGBTQIA+ individuals. Violations may result in removal from the platform and may be reported to appropriate authorities.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">7. Third-Party Links</h2>
              <p>
                Our platform may link to external websites. We are not responsible for the content, privacy practices, or accuracy of third-party sites. Links do not constitute endorsement.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">8. Disclaimer of Warranties</h2>
              <p>
                The platform is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the site will be uninterrupted, error-free, or free of harmful components. Resources listed on the site are for informational purposes only and do not constitute professional medical, legal, or mental health advice.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">9. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, {ORG} shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">10. Governing Law</h2>
              <p>
                These terms are governed by the laws of the Republic of the Philippines. Any disputes shall be subject to the jurisdiction of the courts of Batangas City.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">11. Changes to These Terms</h2>
              <p>
                We may update these Terms &amp; Conditions at any time. Continued use of the platform after changes are posted constitutes acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">12. Contact</h2>
              <p>
                Questions about these Terms? Contact us at:<br />
                <strong>{ORG}</strong><br />
                Email: <a href={`mailto:${EMAIL}`} className="text-[#7C3AED] hover:underline">{EMAIL}</a><br />
                Batangas, Philippines
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
