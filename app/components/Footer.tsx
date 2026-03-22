import { Facebook, Twitter, Youtube, ChevronRight, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Donate", href: "/donate/" },
  { label: "About the Hub", href: "/about/" },
  { label: "Accessibility Statement", href: "/accessibility/" },
  { label: "Submit Resource or Event", href: "/submit/" },
  { label: "FAQs", href: "/faqs/" },
  { label: "Voices Among Us", href: "/voices/" },
  { label: "Share Your Story", href: "/stories/" },
  { label: "Photo Gallery", href: "/gallery/" },
];

const categories = [
  { label: "Community Center", href: "/directory/#community-center" },
  { label: "Community Voices", href: "/kopisodes/#community-voices" },
  { label: "Diagnostic & Testing", href: "/directory/#diagnostic" },
  { label: "Mental Health", href: "/directory/#mental-health" },
  { label: "Support Resources", href: "/resources/#support-resources" },
  { label: "Sexual Health", href: "/resources/#sexual-health" },
  { label: "Youth Services", href: "/resources/#youth-services" },
];

const recentPosts = [
  {
    title: "2025 HIV & AIDS Surveillance Update: What the Data Tells Us",
    href: "/kopisodes/",
  },
  {
    title: "Human Rights 101 by Wagayway Equality",
    href: "/kopisodes/",
  },
  { title: "HIV 101 by Wagayway Equality", href: "/kopisodes/" },
  {
    title: "SOGIESC 101 by Wagayway Equality Inc",
    href: "/kopisodes/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#292733] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/empower-queer-logo.png" alt="Empower Queer Hub" className="h-10 w-auto" />
            </div>
            <p className="text-[#7A7A7A] text-sm leading-relaxed mb-5">
              EmpowerQueer Hub is a safe, community-built space offering resources, support, and visibility for LGBTQIA+ individuals across Batangas and beyond.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-[#7A7A7A] hover:bg-[#A9D6B6] hover:text-white hover:border-[#A9D6B6] transition-all"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-[#7A7A7A] hover:bg-[#A9D6B6] hover:text-white hover:border-[#A9D6B6] transition-all"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-[#7A7A7A] hover:bg-[#A9D6B6] hover:text-white hover:border-[#A9D6B6] transition-all"
              >
                <Youtube size={16} />
              </a>
            </div>
            <div className="space-y-1 text-[#7A7A7A] text-xs">
              <div className="flex items-center gap-2">
                <Phone size={12} />
                <span>+63.929.741.4738</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={12} />
                <span>Batangas, Philippines</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#7A7A7A] hover:text-white text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 shrink-0 text-white"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Categories
            </h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.href}>
                  <a
                    href={cat.href}
                    className="text-[#7A7A7A] hover:text-white text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 shrink-0 text-white"
                    />
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Recent Posts
            </h4>
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.title}>
                  <a
                    href={post.href}
                    className="text-[#7A7A7A] hover:text-white text-sm transition-colors leading-relaxed block"
                  >
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#9A9A9A] text-xs text-center sm:text-left">
            © 2026 EmpowerQueer Hub. All rights reserved.
          </p>
          <div className="rainbow-bar h-[3px] w-16 rounded-full" />
          <p className="text-[#9A9A9A] text-xs">
            Batangas, Philippines · Founded 2018 · Web Design by{" "}
            <a
              href="https://affordawebsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A9D6B6] hover:text-white transition-colors"
            >
              AffordaWeb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
