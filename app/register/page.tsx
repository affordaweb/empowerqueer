"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, Loader2, CheckCircle2, Upload, X } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Password strength helpers                                                   */
/* -------------------------------------------------------------------------- */

type StrengthLevel = 0 | 1 | 2 | 3 | 4;

function getPasswordStrength(pw: string): StrengthLevel {
  if (!pw) return 0;
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[a-z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  if (score <= 1) return 1;
  if (score === 2) return 2;
  if (score === 3) return 3;
  return 4;
}

const strengthLabels: Record<StrengthLevel, string> = {
  0: "",
  1: "Weak",
  2: "Fair",
  3: "Good",
  4: "Strong",
};

const strengthColors: Record<StrengthLevel, string> = {
  0: "bg-white/10",
  1: "bg-red-500",
  2: "bg-yellow-500",
  3: "bg-blue-400",
  4: "bg-green-500",
};

/* -------------------------------------------------------------------------- */
/*  Turnstile types                                                             */
/* -------------------------------------------------------------------------- */

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: { sitekey: string; callback: (token: string) => void }
      ) => string;
      reset: (widgetId: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                   */
/* -------------------------------------------------------------------------- */

export default function RegisterPage() {
  const [capacityFull, setCapacityFull] = useState(false);
  const [capacityLoading, setCapacityLoading] = useState(true);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Photo state
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [photoUploading, setPhotoUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Captcha
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const turnstileContainerRef = useRef<HTMLDivElement>(null);

  // Submission
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const strength = getPasswordStrength(password) as StrengthLevel;

  /* ---------------------------------------------------------------------- */
  /*  Check capacity on mount                                                 */
  /* ---------------------------------------------------------------------- */
  useEffect(() => {
    async function checkCapacity() {
      try {
        const res = await fetch("/api/capacity");
        const data = await res.json();
        if (data.isFull) setCapacityFull(true);
      } catch {
        // Non-blocking — allow registration if capacity check fails
      } finally {
        setCapacityLoading(false);
      }
    }
    checkCapacity();
  }, []);

  /* ---------------------------------------------------------------------- */
  /*  Cloudflare Turnstile                                                    */
  /* ---------------------------------------------------------------------- */
  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!siteKey) return;

    function renderWidget() {
      if (!turnstileContainerRef.current || !window.turnstile) return;
      turnstileWidgetId.current = window.turnstile.render(
        turnstileContainerRef.current,
        {
          sitekey: siteKey!,
          callback: (token: string) => setCaptchaToken(token),
        }
      );
    }

    if (window.turnstile) {
      renderWidget();
    } else {
      window.onTurnstileLoad = renderWidget;
      const script = document.createElement("script");
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  /* ---------------------------------------------------------------------- */
  /*  Photo upload                                                            */
  /* ---------------------------------------------------------------------- */
  async function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    // Preview
    const reader = new FileReader();
    reader.onload = () => setPhotoPreview(reader.result as string);
    reader.readAsDataURL(file);

    // Upload immediately
    setPhotoUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.url) {
        setPhotoUrl(data.url);
      }
    } catch {
      // Non-blocking — photo is optional
    } finally {
      setPhotoUploading(false);
    }
  }

  function removePhoto() {
    setPhotoPreview(null);
    setPhotoUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  /* ---------------------------------------------------------------------- */
  /*  Client-side validation                                                  */
  /* ---------------------------------------------------------------------- */
  function validate(): string | null {
    if (name.trim().length < 2) return "Full name must be at least 2 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Please enter a valid email address.";
    if (password.length < 8) return "Password must be at least 8 characters.";
    if (!/[A-Z]/.test(password)) return "Password must include an uppercase letter.";
    if (!/[a-z]/.test(password)) return "Password must include a lowercase letter.";
    if (!/[0-9]/.test(password)) return "Password must include a number.";
    if (!/[^A-Za-z0-9]/.test(password))
      return "Password must include a special character.";
    if (password !== confirmPassword) return "Passwords do not match.";
    return null;
  }

  /* ---------------------------------------------------------------------- */
  /*  Submit                                                                  */
  /* ---------------------------------------------------------------------- */
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (siteKey && !captchaToken) {
      setError("Please complete the CAPTCHA verification.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          password,
          photoUrl,
          captchaToken,
        }),
      });

      const data = await res.json();

      if (res.status === 403) {
        setCapacityFull(true);
        return;
      }

      if (res.status === 409) {
        setError("An account with this email already exists.");
        return;
      }

      if (!res.ok) {
        setError(data.message || "Something went wrong. Please try again.");
        // Reset turnstile on error
        if (
          window.turnstile &&
          turnstileWidgetId.current
        ) {
          window.turnstile.reset(turnstileWidgetId.current);
          setCaptchaToken(null);
        }
        return;
      }

      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  /* ---------------------------------------------------------------------- */
  /*  Render: capacity check loading                                          */
  /* ---------------------------------------------------------------------- */
  if (capacityLoading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#0F0A1E" }}
      >
        <Loader2 size={32} className="animate-spin" style={{ color: "#7C3AED" }} />
      </div>
    );
  }

  /* ---------------------------------------------------------------------- */
  /*  Render: capacity full                                                   */
  /* ---------------------------------------------------------------------- */
  if (capacityFull) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ backgroundColor: "#0F0A1E" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-md"
        >
          <div className="text-6xl mb-6">🚫</div>
          <h1
            className="font-serif text-3xl text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Capacity Reached
          </h1>
          <p className="text-base" style={{ color: "#C4B5FD" }}>
            User capacity has been reached. Please check back later.
          </p>
          <Link
            href="/"
            className="inline-block mt-8 text-sm font-semibold hover:underline"
            style={{ color: "#A78BFA" }}
          >
            Return to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  /* ---------------------------------------------------------------------- */
  /*  Render: success                                                         */
  /* ---------------------------------------------------------------------- */
  if (success) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4 py-12"
        style={{ backgroundColor: "#0F0A1E" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md text-center rounded-2xl border px-8 py-12"
          style={{
            backgroundColor: "#1A1035",
            borderColor: "rgba(124,58,237,0.3)",
          }}
        >
          <CheckCircle2
            size={56}
            className="mx-auto mb-5"
            style={{ color: "#A78BFA" }}
          />
          <h2
            className="font-serif text-2xl text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Request Submitted!
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#C4B5FD" }}>
            Your request has been submitted! You&apos;ll receive an email once
            your account is approved.
          </p>
          <Link
            href="/login"
            className="inline-block mt-8 text-sm font-semibold hover:underline"
            style={{ color: "#A78BFA" }}
          >
            Back to Sign In
          </Link>
        </motion.div>
      </div>
    );
  }

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  /* ---------------------------------------------------------------------- */
  /*  Render: main form                                                       */
  /* ---------------------------------------------------------------------- */
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ backgroundColor: "#0F0A1E" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <div
          className="rounded-2xl border px-8 py-10"
          style={{
            backgroundColor: "#1A1035",
            borderColor: "rgba(124,58,237,0.3)",
          }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/empower-queer-logo.png"
              alt="Empower Queer Hub"
              className="w-16 h-16 rounded-xl object-cover"
            />
          </div>

          {/* Heading */}
          <h1
            className="font-serif text-3xl text-white text-center mb-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Request Access
          </h1>
          <p className="text-center text-sm mb-8" style={{ color: "#A78BFA" }}>
            Join the Empower Queer Hub team
          </p>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1"
                style={{ color: "#A78BFA" }}
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none transition"
                style={{
                  backgroundColor: "#0F0A1E",
                  border: "1px solid rgba(124,58,237,0.3)",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#7C3AED")}
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(124,58,237,0.3)")
                }
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1"
                style={{ color: "#A78BFA" }}
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none transition"
                style={{
                  backgroundColor: "#0F0A1E",
                  border: "1px solid rgba(124,58,237,0.3)",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#7C3AED")}
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(124,58,237,0.3)")
                }
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
                style={{ color: "#A78BFA" }}
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  className="w-full rounded-xl px-4 py-3 pr-12 text-white placeholder-white/30 focus:outline-none transition"
                  style={{
                    backgroundColor: "#0F0A1E",
                    border: "1px solid rgba(124,58,237,0.3)",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#7C3AED")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(124,58,237,0.3)")
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Strength indicator */}
              {password && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-1">
                    {([1, 2, 3, 4] as StrengthLevel[]).map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                          strength >= level
                            ? strengthColors[strength]
                            : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                  <p
                    className="text-xs"
                    style={{
                      color:
                        strength === 4
                          ? "#4ade80"
                          : strength === 3
                          ? "#60a5fa"
                          : strength === 2
                          ? "#eab308"
                          : "#f87171",
                    }}
                  >
                    {strengthLabels[strength]}
                  </p>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium mb-1"
                style={{ color: "#A78BFA" }}
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repeat your password"
                  className="w-full rounded-xl px-4 py-3 pr-12 text-white placeholder-white/30 focus:outline-none transition"
                  style={{
                    backgroundColor: "#0F0A1E",
                    border: "1px solid rgba(124,58,237,0.3)",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#7C3AED")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(124,58,237,0.3)")
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition"
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {confirmPassword && password !== confirmPassword && (
                <p className="text-red-400 text-xs mt-1">
                  Passwords do not match.
                </p>
              )}
            </div>

            {/* Profile Photo */}
            <div>
              <label
                className="block text-sm font-medium mb-1"
                style={{ color: "#A78BFA" }}
              >
                Profile Photo{" "}
                <span className="font-normal opacity-60">(optional)</span>
              </label>

              {photoPreview ? (
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-[rgba(124,58,237,0.3)] flex-shrink-0">
                    <img
                      src={photoPreview}
                      alt="Profile preview"
                      className="w-full h-full object-cover"
                    />
                    {photoUploading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <Loader2
                          size={16}
                          className="animate-spin text-white"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white/70 truncate">
                      {photoUploading ? "Uploading…" : "Photo ready"}
                    </p>
                    {!photoUploading && photoUrl && (
                      <p className="text-xs mt-0.5" style={{ color: "#4ade80" }}>
                        Uploaded successfully
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={removePhoto}
                    className="text-white/40 hover:text-white/70 transition flex-shrink-0"
                    aria-label="Remove photo"
                  >
                    <X size={18} />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm transition"
                  style={{
                    backgroundColor: "#0F0A1E",
                    border: "1px dashed rgba(124,58,237,0.4)",
                    color: "#A78BFA",
                  }}
                >
                  <Upload size={16} />
                  Choose a photo
                </button>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoChange}
              />
            </div>

            {/* Turnstile */}
            {siteKey && (
              <div>
                <div ref={turnstileContainerRef} id="turnstile-container" />
              </div>
            )}

            {/* Error */}
            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || photoUploading}
              className="w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(to right, #7C3AED, #EC4899)",
              }}
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Submitting…
                </>
              ) : (
                "Request Access"
              )}
            </button>
          </form>

          {/* Login link */}
          <p className="mt-6 text-center text-sm" style={{ color: "#C4B5FD" }}>
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold hover:underline"
              style={{ color: "#A78BFA" }}
            >
              Sign In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
