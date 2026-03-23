import Link from "next/link";
import { CheckCircle, Globe, Search, ShieldCheck, Mail, RefreshCw } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$69",
    desc: "Perfect for getting online fast.",
    features: ["1–5 pages", "Mobile-first design", "SSL included", "1 monthly update"],
  },
  {
    name: "Standard",
    price: "$99",
    desc: "Most popular for growing businesses.",
    features: ["Up to 10 pages", "Full SEO optimization", "Unlimited updates", "Business email"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "$149",
    desc: "For businesses ready to sell online.",
    features: ["Unlimited pages", "E-commerce (up to 30 products)", "Priority support", "Everything in Standard"],
  },
];

const services = [
  { icon: Globe, label: "Custom Website Design" },
  { icon: Search, label: "SEO Optimization" },
  { icon: ShieldCheck, label: "Managed Hosting & SSL" },
  { icon: Mail, label: "Free Business Email" },
  { icon: RefreshCw, label: "Ongoing Maintenance" },
];

const perks = [
  "No setup fees — ever",
  "No long-term contracts",
  "10–15 business day launch",
  "24-hour support response",
  "99.9% uptime guarantee",
  "One flat monthly price",
];

export default function AffordaWebPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0F0F1A", color: "#fff" }}>
      {/* Hero */}
      <section className="px-6 py-20 text-center max-w-3xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#06B6D4" }}>
          Affordable Website Design Services
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          Want a Website{" "}
          <span style={{ color: "#5636D1" }}>Like This One?</span>
        </h1>
        <p className="text-lg text-white/70 mb-8 leading-relaxed">
          This site was designed and built by{" "}
          <strong style={{ color: "#E2498A" }}>AffordaWeb Solutions</strong> — a web design agency
          specializing in professional, affordable websites for small businesses and nonprofits.
          Starting at just <strong>$69/month</strong>, all-inclusive.
        </p>
        <a
          href="https://affordawebsolutions.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-full font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #5636D1, #06B6D4)" }}
        >
          Get a Free Quote
        </a>
      </section>

      {/* Services */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">What&rsquo;s Included</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl text-center"
              style={{ background: "#1A1A2E" }}
            >
              <Icon size={28} style={{ color: "#06B6D4" }} />
              <span className="text-sm font-medium text-white/80">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Perks */}
      <section className="px-6 py-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">No Surprises. No Hassle.</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {perks.map((perk) => (
            <li key={perk} className="flex items-center gap-3 text-white/80">
              <CheckCircle size={20} style={{ color: "#5636D1", flexShrink: 0 }} />
              {perk}
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2">Simple, Transparent Pricing</h2>
        <p className="text-center text-white/50 mb-10 text-sm">Month-to-month. Cancel anytime with 30 days notice.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl p-7 flex flex-col gap-4"
              style={{
                background: plan.highlight ? "linear-gradient(135deg, #5636D1 0%, #3b1fa8 100%)" : "#1A1A2E",
                border: plan.highlight ? "none" : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div>
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <p className="text-white/60 text-sm mt-1">{plan.desc}</p>
              </div>
              <p className="text-4xl font-bold">
                {plan.price}
                <span className="text-base font-normal text-white/50">/mo</span>
              </p>
              <ul className="flex flex-col gap-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle size={15} style={{ color: "#06B6D4", flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-white/60 mb-8">
          Reach out to AffordaWeb Solutions and get your professional website live in as little as 10 business days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://affordawebsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #5636D1, #06B6D4)" }}
          >
            Visit AffordaWeb Solutions
          </a>
          <a
            href="mailto:hello@affordawebsolutions.com"
            className="inline-block px-8 py-4 rounded-full font-semibold border border-white/20 text-white/80 hover:border-white/40 transition-colors"
          >
            hello@affordawebsolutions.com
          </a>
        </div>
      </section>

      {/* Back link */}
      <div className="text-center pb-12">
        <Link href="/" className="text-xs text-white/30 hover:text-white/60 transition-colors">
          ← Back to EmpowerQueer Hub
        </Link>
      </div>
    </main>
  );
}
