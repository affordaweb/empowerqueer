import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Empower Queer Hub",
  description: "Learn how Empower Queer Hub collects, uses, and protects your personal information.",
  alternates: { canonical: "https://www.empowerqueerhub.com/privacy-policy" },
};

const LAST_UPDATED = "March 22, 2026";
const ORG = "Wagayway Equality Inc. (Empower Queer Hub)";
const EMAIL = "empowerqueerhub@gmail.com";
const SITE = "https://www.empowerqueerhub.com";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#F5F0FF] to-[#EBF9F1] py-16 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rainbow-bar h-1.5 w-16 rounded-full mb-6" />
          <h1 className="font-serif text-4xl font-bold text-[#3A3C51] mb-3">Privacy Policy</h1>
          <p className="text-[#474747]">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">

          <div className="space-y-10 text-[#474747] leading-relaxed">

            <div>
              <h2 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">1. Who We Are</h2>
              <p>
                {ORG} operates the Empower Queer Hub website at <a href={SITE} className="text-[#7C3AED] hover:underline">{SITE}</a>. We are an LGBTQIA+ community organization based in Batangas, Philippines, dedicated to providing safe, inclusive digital resources.
              </p>
              <p className="mt-2">
                For any privacy-related concerns, contact us at: <a href={`mailto:${EMAIL}`} className="text-[#7C3AED] hover:underline">{EMAIL}</a>
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">2. Information We Collect</h2>
              <p>We collect information you provide directly, including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Name and email address when you register for a dashboard account</li>
                <li>Content you submit through our forms (events, resources, trainings, stories, etc.)</li>
                <li>Messages sent through our visitor chat or contact form</li>
                <li>Profile photos you upload voluntarily</li>
              </ul>
              <p className="mt-3">We also collect usage data automatically, including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Pages visited, time on site, and interactions (via Google Analytics)</li>
                <li>Browser type, device type, and approximate location (country/region)</li>
                <li>IP address (anonymized in our analytics configuration)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>To operate and improve our platform and services</li>
                <li>To review and publish community-submitted content (events, resources, etc.)</li>
                <li>To send account-related emails (registration approval, rejection notices)</li>
                <li>To respond to your messages and chat inquiries</li>
                <li>To analyze site usage and improve the user experience</li>
              </ul>
              <p className="mt-3">We do <strong>not</strong> sell your personal information to third parties.</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">4. Data Storage and Security</h2>
              <p>
                Your data is stored in a secure cloud database. We use industry-standard encryption (HTTPS/TLS) for all data in transit. Dashboard accounts are password-protected and access is restricted to approved members only.
              </p>
              <p className="mt-2">
                While we take reasonable precautions, no online platform can guarantee absolute security. We encourage you to use a strong password and not share your login credentials.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">5. Cookies and Tracking</h2>
              <p>
                We use Google Analytics (GA4) and Google Tag to understand how visitors use our site. These tools use cookies. Analytics data is anonymized and not tied to personally identifiable information.
              </p>
              <p className="mt-2">You may opt out of Google Analytics tracking via the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#7C3AED] hover:underline">Google Analytics Opt-out Browser Add-on</a>.</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">6. Third-Party Services</h2>
              <p>We use the following third-party services, each with their own privacy policies:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Vercel</strong> — website hosting</li>
                <li><strong>Resend</strong> — transactional email delivery</li>
                <li><strong>Google Analytics / Tag Manager</strong> — usage analytics</li>
                <li><strong>Supabase</strong> — file storage (uploaded images)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Request access to the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent for data processing at any time</li>
                <li>Request that we stop using your information for communications</li>
              </ul>
              <p className="mt-3">To exercise any of these rights, email us at <a href={`mailto:${EMAIL}`} className="text-[#7C3AED] hover:underline">{EMAIL}</a>.</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">8. Children&apos;s Privacy</h2>
              <p>
                Our platform is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has submitted information to us, please contact us immediately.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated date. Continued use of the site after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#3A3C51] mb-3">10. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact:<br />
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
