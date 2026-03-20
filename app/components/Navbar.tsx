"use client";

import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/15 backdrop-blur-sm"
      }`}
    >
      {/* Rainbow bar */}
      <div className="rainbow-bar h-[5px] w-full" />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/empower-queer-logo.png" alt="Empower Queer Hub" className="h-10 w-auto" />
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm px-3 py-2 rounded-md transition-all ${
                    scrolled
                      ? "text-[#474747] hover:text-[#3A3C51] hover:bg-[#A9D6B6]/30"
                      : "text-white/90 hover:text-white hover:bg-white/20"
                  }`}
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
              className="btn-p btn-p-pink hidden sm:inline-flex items-center gap-2 text-sm px-4 py-2"
            >
              <Heart size={14} className="icon-pink icon-anim" />
              Donate Now!
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className={`lg:hidden p-2 transition-colors ${
                scrolled ? "text-[#3A3C51]" : "text-white"
              }`}
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
                    className="block text-[#474747] hover:text-[#3A3C51] hover:bg-[#A9D6B6]/20 px-5 py-3 text-sm transition-all"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-4 py-3">
                <a
                  href="/donate/"
                  className="btn-p btn-p-pink flex w-full items-center justify-center gap-2 text-sm px-4 py-2"
                >
                  <Heart size={14} className="icon-pink icon-anim" />
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
