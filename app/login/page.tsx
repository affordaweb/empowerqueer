"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isPending = searchParams.get("pending") === "1";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed. Please try again.");
        return;
      }

      router.push("/dashboard");
    } catch {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0A1E] flex items-center justify-center p-4">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#7C3AED]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#EC4899]/8 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-md"
      >
        <div className="bg-[#1A1035] border border-[rgba(124,58,237,0.3)] rounded-2xl p-8 shadow-2xl shadow-[#7C3AED]/10">
          {/* Logo + Title */}
          <div className="flex flex-col items-center mb-8">
            <img
              src="/empower-queer-logo.png"
              alt="Empower Queer Hub"
              className="w-16 h-16 rounded-xl object-cover mb-4 shadow-lg shadow-[#7C3AED]/30"
            />
            <h1 className="font-serif text-3xl font-bold text-white mb-1">
              Welcome Back
            </h1>
            <p className="text-[#A78BFA] text-sm">Sign in to your dashboard</p>
          </div>

          {/* Pending banner */}
          {isPending && (
            <div className="mb-6 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
              <p className="text-amber-400 text-sm text-center">
                Your account is pending admin approval. You'll receive an email once approved.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[#A78BFA] text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.3)] text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] transition placeholder:text-[#4B4568]"
              />
            </div>

            <div>
              <label className="block text-[#A78BFA] text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
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

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold rounded-xl px-6 py-3 hover:opacity-90 transition disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Signing in…
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <p className="text-center text-[#6B7280] text-sm mt-6">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-[#A78BFA] hover:text-[#7C3AED] transition font-medium"
            >
              Request Access
            </Link>
          </p>
        </div>

        <p className="text-center text-[#6B7280] text-xs mt-4">
          Empower Queer Hub · Batangas, Philippines
        </p>
      </motion.div>
    </div>
  );
}
