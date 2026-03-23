"use client";

import { useState, useEffect } from "react";
import { X, Share } from "lucide-react";

export default function IOSInstallBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
    const dismissed = sessionStorage.getItem("ios-banner-dismissed");
    if (isIOS && !isStandalone && !dismissed) setShow(true);
  }, []);

  function dismiss() {
    sessionStorage.setItem("ios-banner-dismissed", "1");
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pointer-events-none">
      <div className="bg-[#1A0A2E] border border-[#7C3AED]/40 rounded-2xl shadow-2xl px-5 py-4 flex items-start gap-4 pointer-events-auto max-w-sm mx-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/icon-72x72.png" alt="EmpowerQueer Hub" className="w-12 h-12 rounded-xl shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-semibold mb-0.5">Install EmpowerQueer Hub</p>
          <p className="text-white/60 text-xs leading-relaxed">
            Tap <Share size={11} className="inline mx-0.5 text-white/60" /> then <strong className="text-white/80">&ldquo;Add to Home Screen&rdquo;</strong> to install.
          </p>
        </div>
        <button onClick={dismiss} className="text-white/40 hover:text-white/80 transition-colors shrink-0 mt-0.5">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
