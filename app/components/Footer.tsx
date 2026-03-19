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
];

const categories = [
  { label: "Community Center", href: "/category/community-center/" },
  { label: "Community Voices", href: "/category/community-voices/" },
  { label: "Diagnostic & Testing", href: "/category/diagnostic-testing/" },
  { label: "Mental Health", href: "/category/mental-health/" },
  { label: "Support Resources", href: "/category/support-resources/" },
  { label: "Sexual Health", href: "/category/sexual-health/" },
  { label: "Youth Services", href: "/category/youth-services/" },
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
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/empower-queer-logo.png" alt="Empower Queer Hub" className="h-10 w-auto" />
            </div>
            <p className="text-[#5C576E] text-sm leading-relaxed mb-5">
              EmpowerQueer Hub is a safe, community-built space offering resources, support, and visibility for LGBTQIA+ individuals across Batangas and beyond.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-[#B5C4AE]/30 border border-[#B5C4AE] rounded-lg flex items-center justify-center text-[#4A3F6B] hover:bg-[#6B8F63] hover:text-white hover:border-[#6B8F63] transition-all"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 bg-[#B5C4AE]/30 border border-[#B5C4AE] rounded-lg flex items-center justify-center text-[#4A3F6B] hover:bg-[#6B8F63] hover:text-white hover:border-[#6B8F63] transition-all"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 bg-[#B5C4AE]/30 border border-[#B5C4AE] rounded-lg flex items-center justify-center text-[#4A3F6B] hover:bg-[#6B8F63] hover:text-white hover:border-[#6B8F63] transition-all"
              >
                <Youtube size={16} />
              </a>
            </div>
            <div className="space-y-1 text-[#5C576E] text-xs">
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
            <h4 className="font-semibold text-[#4A3F6B] text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#5C576E] hover:text-[#4A3F6B] text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 shrink-0 text-[#4A3F6B]"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-[#4A3F6B] text-sm mb-4 uppercase tracking-wider">
              Categories
            </h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.href}>
                  <a
                    href={cat.href}
                    className="text-[#5C576E] hover:text-[#4A3F6B] text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 shrink-0 text-[#4A3F6B]"
                    />
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h4 className="font-semibold text-[#4A3F6B] text-sm mb-4 uppercase tracking-wider">
              Recent Posts
            </h4>
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.title}>
                  <a
                    href={post.href}
                    className="text-[#5C576E] hover:text-[#4A3F6B] text-sm transition-colors leading-relaxed block"
                  >
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#5C576E] text-xs text-center sm:text-left">
            © 2026 EmpowerQueer Hub. All rights reserved.
          </p>
          <div className="rainbow-bar h-[3px] w-16 rounded-full" />
          <p className="text-[#5C576E] text-xs">
            Batangas, Philippines · Founded 2018
          </p>
        </div>
      </div>
    </footer>
  );
}
