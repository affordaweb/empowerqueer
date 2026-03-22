"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Save,
  Camera,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useDashboard } from "../layout";

// ─── Toast ────────────────────────────────────────────────────
interface ToastState {
  type: "success" | "error";
  msg: string;
}

function InlineToast({ toast }: { toast: ToastState | null }) {
  if (!toast) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium ${
        toast.type === "success"
          ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-400"
          : "bg-red-500/15 border border-red-500/30 text-red-400"
      }`}
    >
      {toast.type === "success" ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
      {toast.msg}
    </motion.div>
  );
}

// ─── Input field ──────────────────────────────────────────────
function Field({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="flex items-center gap-2 text-[#A78BFA] text-sm font-medium">
        <Icon size={14} />
        {label}
      </label>
      {children}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────
export default function ProfilePage() {
  const { user, setUser } = useDashboard();
  const fileRef = useRef<HTMLInputElement>(null);

  // Profile state
  const [name, setName] = useState(user?.name ?? "");
  const [note, setNote] = useState("");
  const [photoPreview, setPhotoPreview] = useState<string | null>(user?.photoUrl ?? null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);

  // Password state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // UI state
  const [savingProfile, setSavingProfile] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);
  const [profileToast, setProfileToast] = useState<ToastState | null>(null);
  const [passwordToast, setPasswordToast] = useState<ToastState | null>(null);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setPhotoPreview(user.photoUrl ?? null);
    }
  }, [user]);

  function showProfileToast(t: ToastState) {
    setProfileToast(t);
    setTimeout(() => setProfileToast(null), 4000);
  }

  function showPasswordToast(t: ToastState) {
    setPasswordToast(t);
    setTimeout(() => setPasswordToast(null), 4000);
  }

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      showProfileToast({ type: "error", msg: "Photo must be under 5MB" });
      return;
    }
    setPhotoFile(file);
    const reader = new FileReader();
    reader.onload = () => setPhotoPreview(reader.result as string);
    reader.readAsDataURL(file);
  }

  async function handleSaveProfile(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      showProfileToast({ type: "error", msg: "Name cannot be empty" });
      return;
    }
    setSavingProfile(true);
    try {
      let photoUrl = user?.photoUrl;

      // Upload photo if changed
      if (photoFile) {
        const form = new FormData();
        form.append("file", photoFile);
        const uploadRes = await fetch("/api/upload", { method: "POST", body: form });
        if (!uploadRes.ok) throw new Error("Photo upload failed");
        const uploadData = await uploadRes.json();
        photoUrl = uploadData.url;
      }

      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), note, photo: photoUrl }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error ?? "Failed to save");
      }
      const data = await res.json();
      if (data.user && setUser) {
        setUser(data.user);
      }
      setPhotoFile(null);
      showProfileToast({ type: "success", msg: "Profile updated successfully" });
    } catch (err: unknown) {
      showProfileToast({
        type: "error",
        msg: err instanceof Error ? err.message : "Failed to save profile",
      });
    } finally {
      setSavingProfile(false);
    }
  }

  async function handleSavePassword(e: React.FormEvent) {
    e.preventDefault();
    if (!currentPassword || !newPassword || !confirmPassword) {
      showPasswordToast({ type: "error", msg: "All password fields are required" });
      return;
    }
    if (newPassword !== confirmPassword) {
      showPasswordToast({ type: "error", msg: "New passwords do not match" });
      return;
    }
    if (newPassword.length < 8) {
      showPasswordToast({ type: "error", msg: "Password must be at least 8 characters" });
      return;
    }
    setSavingPassword(true);
    try {
      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error ?? "Failed to update password");
      }
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      showPasswordToast({ type: "success", msg: "Password updated successfully" });
    } catch (err: unknown) {
      showPasswordToast({
        type: "error",
        msg: err instanceof Error ? err.message : "Failed to update password",
      });
    } finally {
      setSavingPassword(false);
    }
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center">
          <User size={22} className="text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">My Profile</h1>
          <p className="text-[#A78BFA] text-sm mt-0.5">Manage your account information</p>
        </div>
      </div>

      {/* Profile Form */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1A1035] border border-[rgba(124,58,237,0.3)] rounded-2xl p-6"
      >
        <h2 className="text-white font-semibold mb-5">Profile Information</h2>

        <form onSubmit={handleSaveProfile} className="space-y-5">
          {/* Avatar Upload */}
          <div className="flex items-center gap-5">
            <div className="relative group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center overflow-hidden">
                {photoPreview ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={photoPreview}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-white text-2xl font-bold">
                    {user?.name?.charAt(0).toUpperCase() ?? "U"}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="absolute inset-0 rounded-2xl bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center"
              >
                <Camera size={20} className="text-white" />
              </button>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoChange}
              />
            </div>
            <div>
              <p className="text-white text-sm font-medium">{user?.name}</p>
              <p className="text-[#6B7280] text-xs">{user?.email}</p>
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="mt-2 text-xs text-[#A78BFA] hover:text-white transition flex items-center gap-1"
              >
                <Camera size={12} /> Change photo
              </button>
            </div>
          </div>

          {/* Name */}
          <Field label="Full Name" icon={User}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#0F0A1E] border border-[rgba(124,58,237,0.3)] text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#7C3AED] w-full text-sm"
              placeholder="Your full name"
            />
          </Field>

          {/* Email (read-only) */}
          <Field label="Email Address" icon={Mail}>
            <div className="relative">
              <input
                type="email"
                value={user?.email ?? ""}
                readOnly
                className="bg-[#0F0A1E] border border-[rgba(124,58,237,0.15)] text-[#6B7280] rounded-xl px-4 py-3 w-full text-sm cursor-not-allowed"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] bg-[#7C3AED]/20 text-[#A78BFA] px-2 py-0.5 rounded-full">
                Read-only
              </span>
            </div>
          </Field>

          {/* Note */}
          <Field label="Status / Note" icon={User}>
            <div className="relative">
              <textarea
                value={note}
                onChange={(e) => {
                  if (e.target.value.length <= 200) setNote(e.target.value);
                }}
                rows={3}
                placeholder="Add a short status or note about yourself..."
                className="bg-[#0F0A1E] border border-[rgba(124,58,237,0.3)] text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#7C3AED] w-full text-sm resize-none"
              />
              <span className={`absolute bottom-2 right-3 text-[10px] ${note.length > 180 ? "text-amber-400" : "text-[#6B7280]"}`}>
                {note.length}/200
              </span>
            </div>
          </Field>

          {/* Toast */}
          <InlineToast toast={profileToast} />

          {/* Save button */}
          <button
            type="submit"
            disabled={savingProfile}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold rounded-xl px-4 py-3 hover:opacity-90 transition disabled:opacity-60 text-sm"
          >
            {savingProfile ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Save size={16} />
            )}
            {savingProfile ? "Saving..." : "Save Profile"}
          </button>
        </form>
      </motion.div>

      {/* Password Form */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-[#1A1035] border border-[rgba(124,58,237,0.3)] rounded-2xl p-6"
      >
        <h2 className="text-white font-semibold mb-5 flex items-center gap-2">
          <Lock size={16} className="text-[#A78BFA]" />
          Change Password
        </h2>

        <form onSubmit={handleSavePassword} className="space-y-4">
          {/* Current Password */}
          <Field label="Current Password" icon={Lock}>
            <div className="relative">
              <input
                type={showCurrent ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="bg-[#0F0A1E] border border-[rgba(124,58,237,0.3)] text-white rounded-xl px-4 py-3 pr-10 focus:outline-none focus:border-[#7C3AED] w-full text-sm"
                placeholder="Enter current password"
              />
              <button
                type="button"
                onClick={() => setShowCurrent((p) => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-white transition"
              >
                {showCurrent ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </Field>

          {/* New Password */}
          <Field label="New Password" icon={Lock}>
            <div className="relative">
              <input
                type={showNew ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="bg-[#0F0A1E] border border-[rgba(124,58,237,0.3)] text-white rounded-xl px-4 py-3 pr-10 focus:outline-none focus:border-[#7C3AED] w-full text-sm"
                placeholder="At least 8 characters"
              />
              <button
                type="button"
                onClick={() => setShowNew((p) => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-white transition"
              >
                {showNew ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </Field>

          {/* Confirm Password */}
          <Field label="Confirm New Password" icon={Lock}>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`bg-[#0F0A1E] border text-white rounded-xl px-4 py-3 pr-10 focus:outline-none w-full text-sm ${
                  confirmPassword && newPassword !== confirmPassword
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-[rgba(124,58,237,0.3)] focus:border-[#7C3AED]"
                }`}
                placeholder="Repeat new password"
              />
              <button
                type="button"
                onClick={() => setShowConfirm((p) => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-white transition"
              >
                {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {confirmPassword && newPassword !== confirmPassword && (
              <p className="text-red-400 text-xs mt-1">Passwords do not match</p>
            )}
          </Field>

          {/* Toast */}
          <InlineToast toast={passwordToast} />

          <button
            type="submit"
            disabled={savingPassword}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold rounded-xl px-4 py-3 hover:opacity-90 transition disabled:opacity-60 text-sm"
          >
            {savingPassword ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Lock size={16} />
            )}
            {savingPassword ? "Updating..." : "Update Password"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
