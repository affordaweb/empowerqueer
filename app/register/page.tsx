"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Loader2, CheckCircle, Upload, X } from "lucide-react";
import Link from "next/link";
import Script from 'next/script';

function getPasswordStrength(password: string): { score: number; label: string; color: string } {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) return { score, label: "Weak", color: "#EF4444" };
  if (score === 2) return { score, label: "Fair", color: "#F59E0B" };
  if (score === 3) return { score, label: "Good", color: "#3B82F6" };
  return { score, label: "Strong", color: "#10B981" };
}

export default function RegisterPage() {
  const [capacity, setCapacity] = useState<{ isFull: boolean; count: number } | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [turnstileToken, setTurnstileToken] = useState('')
  const widgetRef = useRef<HTMLDivElement>(null)
  const widgetRendered = useRef(false)

  function initTurnstile() {
    if (widgetRef.current && !widgetRendered.current) {
      widgetRendered.current = true
      ;(window as any).turnstile?.render(widgetRef.current, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '',
        callback: (token: string) => setTurnstileToken(token),
        'expired-callback': () => setTurnstileToken(''),
        'error-callback': () => setTurnstileToken(''),
      })
    }
  }

  const strength = getPasswordStrength(password);

  useEffect(() => {
    fetch("/api/capacity")
      .then((r) => r.json())
      .then(setCapacity)
      .catch(console.error);
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Preview
    const reader = new FileReader();
    reader.onload = (ev) => setPhotoPreview(ev.target?.result as string);
    reader.readAsDataURL(file);

    // Upload
    setUploadingPhoto(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      if (res.ok) {
        const { url } = await res.json();
        setPhotoUrl(url);
      }
    } catch {
      // silently fail — photo is optional
    } finally {
      setUploadingPhoto(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (name.trim().length < 2) {
      setError("Name must be at least 2 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (strength.score < 4) {
      setError("Please use a stronger password (uppercase, lowercase, number, special character).");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, photoUrl, turnstileToken }),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.capacityFull) {
          setCapacity({ isFull: true, count: 10 });
          return;
        }
        setError(data.error || "Registration failed. Please try again.");
        return;
      }

      // Admin auto-login
      if (data.isAdmin) {
        window.location.href = "/dashboard";
        return;
      }

      setSuccess(true);
    } catch {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Capacity full screen
  if (capacity?.isFull) {
    return (
      <div className="min-h-screen bg-[#0F0A1E] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#1A1035] border border-[rgba(124,58,237,0.3)] rounded-2xl p-10 max-w-md w-full text-center shadow-2xl"
        >
          <img src="/empower-queer-logo.png" alt="Logo" className="w-16 h-16 rounded-xl mx-auto mb-6" />
          <h1 className="font-serif text-2xl font-bold text-white mb-3">Capacity Reached</h1>
          <p className="text-[#C4B5FD] text-sm leading-relaxed mb-6">
            User capacity has been reached. Please check back later.
          </p>
          <Link
            href="/"
            className="text-[#A78BFA] hover:text-[#7C3AED] transition text-sm font-medium"
          >
            ← Back to site
          </Link>
        </motion.div>
      </div>
    );
  }

  // Success screen
  if (success) {
    return (
      <div className="min-h-screen bg-[#0F0A1E] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#1A1035] border border-[rgba(124,58,237,0.3)] rounded-2xl p-10 max-w-md w-full text-center shadow-2xl"
        >
          <CheckCircle size={56} className="text-emerald-400 mx-auto mb-6" />
          <h1 className="font-serif text-2xl font-bold text-white mb-3">Request Submitted!</h1>
          <p className="text-[#C4B5FD] text-sm leading-relaxed mb-6">
            Your registration has been submitted successfully. You&apos;ll receive an email once your account is reviewed and approved by the admin.
          </p>
          <Link
            href="/login"
            className="text-[#A78BFA] hover:text-[#7C3AED] transition text-sm font-medium"
          >
            ← Back to Sign In
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F0A1E] flex items-center justify-center p-4">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#7C3AED]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#EC4899]/8 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-md"
      >
        <div className="bg-[#1A1035] border border-[rgba(124,58,237,0.3)] rounded-2xl p-8 shadow-2xl shadow-[#7C3AED]/10">
          <div className="flex flex-col items-center mb-8">
            <img
              src="/empower-queer-logo.png"
              alt="Empower Queer Hub"
              className="w-16 h-16 rounded-xl object-cover mb-4 shadow-lg shadow-[#7C3AED]/30"
            />
            <h1 className="font-serif text-3xl font-bold text-white mb-1">
              Request Access
            </h1>
            <p className="text-[#A78BFA] text-sm">Join the Empower Queer Hub team</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Profile Photo */}
            <div>
              <label className="block text-[#A78BFA] text-sm font-medium mb-2">
                Profile Photo <span className="text-[#6B7280] font-normal">(optional)</span>
              </label>
              <div className="flex items-center gap-4">
                <div
                  onClick={() => fileRef.current?.click()}
                  className="relative w-16 h-16 rounded-xl bg-[#0F0A1E] border-2 border-dashed border-[rgba(124,58,237,0.4)] flex items-center justify-center cursor-pointer hover:border-[#7C3AED] transition overflow-hidden flex-shrink-0"
                >
                  {photoPreview ? (
                    <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <Upload size={20} className="text-[#6B7280]" />
                  )}
                  {uploadingPhoto && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <Loader2 size={16} className="animate-spin text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-[#C4B5FD] text-xs mb-1">Click to upload</p>
                  <p className="text-[#6B7280] text-xs">JPG, PNG, WebP · Max 5MB</p>
                  {photoPreview && (
                    <button
                      type="button"
                      onClick={() => { setPhotoPreview(null); setPhotoUrl(null); }}
                      className="text-red-400 text-xs mt-1 flex items-center gap-1 hover:text-red-300 transition"
                    >
                      <X size={12} /> Remove
                    </button>
                  )}
                </div>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-[#A78BFA] text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                required
                className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.3)] text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] transition placeholder:text-[#4B4568]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[#A78BFA] text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.3)] text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] transition placeholder:text-[#4B4568]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-[#A78BFA] text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min 8 chars, upper, lower, number, special"
                  required
                  className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.3)] text-white rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:border-[#7C3AED] transition placeholder:text-[#4B4568]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#A78BFA] transition"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {password && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="flex-1 h-1 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor:
                            strength.score >= i + 1 ? strength.color : "#1E1B4B",
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-xs" style={{ color: strength.color }}>
                    {strength.label}
                  </p>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-[#A78BFA] text-sm font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repeat your password"
                required
                className={`w-full bg-[#0F0A1E] border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] transition placeholder:text-[#4B4568] text-white ${
                  confirmPassword && confirmPassword !== password
                    ? "border-red-500/50"
                    : "border-[rgba(124,58,237,0.3)]"
                }`}
              />
              {confirmPassword && confirmPassword !== password && (
                <p className="text-red-400 text-xs mt-1">Passwords do not match</p>
              )}
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
              >
                {error}
              </motion.p>
            )}

            <div ref={widgetRef} className="flex justify-center" />
            <Script
              src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
              onLoad={initTurnstile}
            />
            <button
              type="submit"
              disabled={loading || uploadingPhoto || !turnstileToken}
              className="w-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold rounded-xl px-6 py-3 hover:opacity-90 transition disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Submitting…
                </>
              ) : (
                "Submit Request"
              )}
            </button>
          </form>

          <p className="text-center text-[#6B7280] text-sm mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#A78BFA] hover:text-[#7C3AED] transition font-medium"
            >
              Sign In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
