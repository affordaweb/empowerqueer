import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AccessibilityPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#F0EBF5] to-[#E8F4EC] pb-20 pt-[164px] px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold text-[#3A3C51] mb-4">Accessibility Statement</h1>
          <p className="text-[#474747] text-xl leading-relaxed">
            Creating a space that welcomes every identity, body, and ability.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-4">EmpowerQueer Hub is for Everyone</h2>
            <p className="text-[#474747] leading-relaxed">
              EmpowerQueer Hub is committed to ensuring that all visitors—regardless of ability—can access, use, and benefit from the content, tools, and services we provide. We believe accessibility is a fundamental part of inclusion, and we strive to create an online space where everyone in the LGBTQIA+ community and beyond can navigate with ease, dignity, and independence.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-4">Accessibility Features We Use</h2>
            <p className="text-[#474747] leading-relaxed mb-4">
              To support an inclusive experience, we&rsquo;ve integrated the OneTap – Easy One-Click Accessibility Toolbar into our website. This widget helps users customize their experience quickly with features such as:
            </p>
            <ul className="space-y-2 text-[#474747] text-sm list-disc pl-5">
              <li>Font size adjustment</li>
              <li>High contrast and grayscale modes</li>
              <li>Keyboard navigation support</li>
              <li>Cursor enhancements</li>
              <li>Screen reading options</li>
              <li>Dyslexia-friendly font toggle</li>
              <li>Highlight links and focus areas</li>
            </ul>
            <p className="text-[#474747] leading-relaxed mt-4">
              You&rsquo;ll find the accessibility icon in the corner of your screen on every page. With just one click, you can choose the adjustments that work best for you.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-4">Design Considerations</h2>
            <p className="text-[#474747] leading-relaxed mb-4">
              In addition to using OneTap, we&rsquo;ve built the site using accessible design principles wherever possible, including:
            </p>
            <ul className="space-y-2 text-[#474747] text-sm list-disc pl-5">
              <li>Clear and consistent navigation</li>
              <li>Text alternatives for images (alt tags)</li>
              <li>Mobile responsiveness across all devices</li>
              <li>Proper heading structure for screen readers</li>
              <li>Color contrast that supports visibility</li>
              <li>Descriptive link text and form labels</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-4">Ongoing Improvements</h2>
            <p className="text-[#474747] leading-relaxed">
              We understand that accessibility is an ongoing commitment. As the site continues to grow, we will regularly review pages and features to improve compatibility with assistive technologies, fix any potential issues, and ensure compliance with current accessibility standards.
            </p>
            <p className="text-[#474747] leading-relaxed mt-3">
              If you&rsquo;re using a screen reader or other assistive device and experience any difficulty on the site, we want to know.
            </p>
          </div>

          <div className="bg-[#F3F3F3] border border-[#A9D6B6] rounded-2xl p-8">
            <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-4">Feedback &amp; Support</h2>
            <p className="text-[#474747] leading-relaxed mb-3">
              If you encounter an accessibility issue or have suggestions for improvement, please reach out to us:
            </p>
            <ul className="space-y-2 text-[#474747] text-sm list-disc pl-5">
              <li>Email: <a href="mailto:support@empowerqueerhub.org" className="text-[#3A3C51] hover:underline font-medium">support@empowerqueerhub.org</a></li>
              <li>Or use our <a href="/contact/" className="text-[#3A3C51] hover:underline font-medium">Contact Us</a> page to submit your feedback.</li>
            </ul>
            <p className="text-[#474747] text-sm mt-4">
              We aim to respond to all accessibility-related messages within 3–5 business days.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#3A3C51] mb-4">Third-Party Tools &amp; Content</h2>
            <p className="text-[#474747] leading-relaxed">
              While we strive to make all core areas of the website accessible, some third-party tools or external links may not yet meet the same accessibility standards. If you come across something that&rsquo;s difficult to access, please notify us and we will try to provide an alternative solution.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-[#474747] text-sm mb-4"><strong>Last Updated:</strong> June 2025</p>
            <p className="text-[#474747] leading-relaxed text-sm italic">
              EmpowerQueer Hub is proud to be part of a movement toward a more equitable internet. Accessibility isn&rsquo;t just a feature—it&rsquo;s a necessity. We&rsquo;re listening, learning, and building a better web for everyone.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
