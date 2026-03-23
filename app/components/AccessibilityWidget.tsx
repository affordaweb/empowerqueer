"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

interface Prefs {
  fontSize: number;       // multiplier: 1 | 1.15 | 1.3
  highContrast: boolean;
  grayscale: boolean;
  dyslexia: boolean;
  highlightLinks: boolean;
  bigCursor: boolean;
}

const DEFAULT: Prefs = {
  fontSize: 1,
  highContrast: false,
  grayscale: false,
  dyslexia: false,
  highlightLinks: false,
  bigCursor: false,
};

export default function AccessibilityWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT);

  if (pathname?.startsWith("/dashboard") || pathname === "/login" || pathname === "/register") {
    return null;
  }

  /* Apply preferences to <html> element */
  useEffect(() => {
    const html = document.documentElement;

    // Font size
    html.style.fontSize = prefs.fontSize === 1 ? "" : `${prefs.fontSize * 100}%`;

    // Filters
    const filters: string[] = [];
    if (prefs.highContrast) filters.push("contrast(1.6)");
    if (prefs.grayscale) filters.push("grayscale(1)");
    html.style.filter = filters.join(" ");

    // Dyslexia font
    if (prefs.dyslexia) {
      html.style.fontFamily = "'Comic Sans MS', 'Arial', sans-serif";
      html.style.letterSpacing = "0.05em";
      html.style.wordSpacing = "0.1em";
    } else {
      html.style.fontFamily = "";
      html.style.letterSpacing = "";
      html.style.wordSpacing = "";
    }

    // Highlight links
    if (prefs.highlightLinks) {
      let style = document.getElementById("a11y-links-style");
      if (!style) {
        style = document.createElement("style");
        style.id = "a11y-links-style";
        document.head.appendChild(style);
      }
      style.textContent = "a { outline: 2px solid #F59E0B !important; outline-offset: 2px !important; background: #FEF3C7 !important; color: #92400E !important; border-radius: 3px; }";
    } else {
      document.getElementById("a11y-links-style")?.remove();
    }

    // Big cursor
    html.style.cursor = prefs.bigCursor ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 0 L0 30 L8 22 L14 36 L18 34 L12 20 L22 20 Z' fill='black' stroke='white' stroke-width='2'/%3E%3C/svg%3E\") 0 0, auto" : "";
  }, [prefs]);

  function toggle<K extends keyof Prefs>(key: K) {
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  }

  function reset() {
    setPrefs(DEFAULT);
  }

  const buttons = [
    {
      label: "Increase Text",
      icon: "A+",
      active: prefs.fontSize >= 1.15,
      action: () => setPrefs((p) => ({ ...p, fontSize: p.fontSize >= 1.3 ? 1 : p.fontSize + 0.15 })),
    },
    {
      label: "Decrease Text",
      icon: "A-",
      active: prefs.fontSize < 1,
      action: () => setPrefs((p) => ({ ...p, fontSize: p.fontSize <= 0.85 ? 1 : p.fontSize - 0.15 })),
    },
    { label: "High Contrast",   icon: "◑", active: prefs.highContrast,   action: () => toggle("highContrast") },
    { label: "Grayscale",       icon: "◎", active: prefs.grayscale,       action: () => toggle("grayscale") },
    { label: "Dyslexia Font",   icon: "Aa", active: prefs.dyslexia,       action: () => toggle("dyslexia") },
    { label: "Highlight Links", icon: "🔗", active: prefs.highlightLinks, action: () => toggle("highlightLinks") },
    { label: "Big Cursor",      icon: "↖", active: prefs.bigCursor,       action: () => toggle("bigCursor") },
  ];

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open accessibility toolbar"
        className="fixed bottom-6 left-6 z-[55] w-13 h-13 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#7C3AED]/40"
        style={{ width: 52, height: 52 }}
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="4" r="1.5" fill="currentColor" stroke="none" />
          <path d="M9 9h6M12 9v10M9 19l3-4 3 4" />
          <path d="M7 9a5 5 0 0 0 3 4.5M17 9a5 5 0 0 1-3 4.5" />
        </svg>
      </button>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Accessibility toolbar"
          className="fixed bottom-20 left-6 z-[55] w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#7C3AED]">
            <p className="text-white font-bold text-sm">Accessibility</p>
            <button onClick={() => setOpen(false)} aria-label="Close accessibility toolbar" className="text-white/70 hover:text-white transition-colors">
              <X size={16} />
            </button>
          </div>

          {/* Options */}
          <div className="p-3 grid grid-cols-2 gap-2">
            {buttons.map((btn) => (
              <button
                key={btn.label}
                onClick={btn.action}
                className={`flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border text-xs font-semibold transition-all ${
                  btn.active
                    ? "bg-[#7C3AED] text-white border-[#7C3AED]"
                    : "bg-gray-50 text-[#3A3C51] border-gray-100 hover:border-[#7C3AED] hover:text-[#7C3AED]"
                }`}
              >
                <span className="text-base leading-none">{btn.icon}</span>
                {btn.label}
              </button>
            ))}
          </div>

          {/* Reset */}
          <div className="px-3 pb-3">
            <button
              onClick={reset}
              className="w-full py-2.5 text-xs font-semibold text-[#474747] bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-xl transition-colors"
            >
              Reset All
            </button>
          </div>

          <p className="text-[#9CA3AF] text-[10px] text-center pb-3 px-3">
            Powered by OneTap Accessibility
          </p>
        </div>
      )}
    </>
  );
}
