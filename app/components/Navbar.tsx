"use client";

import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Events", href: "/events/" },
  { label: "Trainings", href: "/trainings/" },
  { label: "Resources", href: "/resources/" },
  { label: "Opportunities", href: "/opportunities/" },
  { label: "Directory", href: "/directory/" },
  { label: "Kopisodes", href: "/kopisodes/" },
  { label: "Contact Us", href: "/contact/" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-[#D7C4E3] flex items-center justify-center text-[#3A3C51] font-bold text-sm shrink-0 group-hover:bg-[#3A3C51] group-hover:text-white transition-colors">
              EQ
            </div>
            <span className="font-bold text-[#3A3C51] text-lg leading-tight hidden sm:block">
              Empower Queer Hub
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#474747] hover:text-[#3A3C51] text-sm px-3 py-2 rounded-md hover:bg-[#D7C4E3]/30 transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="/donate/"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#3A3C51] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#2a2c3d] transition-colors"
            >
              <Heart size={14} />
              Donate Now!
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="lg:hidden text-[#3A3C51] hover:text-[#474747] p-2"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-white border border-gray-200 rounded-xl mb-4 overflow-hidden shadow-md">
            <ul className="py-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-[#474747] hover:text-[#3A3C51] hover:bg-[#D7C4E3]/20 px-5 py-3 text-sm transition-all"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-4 py-3">
                <a
                  href="/donate/"
                  className="block bg-[#3A3C51] text-white text-sm font-semibold px-4 py-2 rounded-full text-center hover:bg-[#2a2c3d] transition-colors"
                >
                  <Heart size={14} className="inline mr-1.5" />
                  Donate Now!
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
