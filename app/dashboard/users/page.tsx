"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  CheckCircle,
  XCircle,
  Trash2,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  ShieldCheck,
  UserX,
  RotateCcw,
  Lock,
} from "lucide-react";
import { useDashboard } from "../layout";

// ─── Types ────────────────────────────────────────────────────
interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "MODERATOR" | "USER";
  status: "PENDING" | "APPROVED" | "REJECTED";
  createdAt: string;
  photo?: string | null;
}

interface PaginationMeta {
  page: number;
  totalPages: number;
  total: number;
  perPage: number;
  approvedCount?: number;
  maxApproved?: number;
}

// ─── Helpers ──────────────────────────────────────────────────
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-PH", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded bg-[rgba(124,58,237,0.08)] ${className ?? ""}`} />
  );
}

// ─── Badges ───────────────────────────────────────────────────
function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    PENDING: "bg-[#7C3AED]/20 text-[#A78BFA]",
    APPROVED: "bg-emerald-500/20 text-emerald-400",
    REJECTED: "bg-red-500/20 text-red-400",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${styles[status] ?? "bg-gray-500/20 text-gray-400"}`}
    >
      {status}
    </span>
  );
}

function RoleBadge({ role }: { role: string }) {
  const styles: Record<string, string> = {
    ADMIN: "bg-[#7C3AED]/20 text-[#A78BFA]",
    MODERATOR: "bg-[#EC4899]/20 text-pink-300",
    USER: "bg-white/10 text-[#6B7280]",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${styles[role] ?? styles.USER}`}
    >
      {role === "ADMIN" && <ShieldCheck size={9} />}
      {role}
    </span>
  );
}

// ─── Avatar ───────────────────────────────────────────────────
function Avatar({ user }: { user: AdminUser }) {
  return (
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center flex-shrink-0 overflow-hidden">
      {user.photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={user.photo} alt={user.name} className="w-full h-full object-cover" />
      ) : (
        <span className="text-white text-sm font-semibold">
          {user.name.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────
export default function UsersPage() {
  const { user: currentUser } = useDashboard();
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [meta, setMeta] = useState<PaginationMeta>({
    page: 1,
    totalPages: 1,
    total: 0,
    perPage: 12,
    approvedCount: 0,
    maxApproved: 10,
  });
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [page, setPage] = useState(1);
  const [actioning, setActioning] = useState<string | null>(null);
  const [toast, setToast] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  // ─── Access Control ───────────────────────────────────────
  if (currentUser && currentUser.role !== "ADMIN") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center">
          <Lock size={28} className="text-red-400" />
        </div>
        <h1 className="text-white text-xl font-bold">Access Denied</h1>
        <p className="text-[#6B7280] text-sm text-center max-w-xs">
          You do not have permission to view this page. Admin access is required.
        </p>
      </div>
    );
  }

  // ─── Fetch ────────────────────────────────────────────────
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const fetchUsers = useCallback(
    async (p = 1, f = statusFilter) => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          page: String(p),
          ...(f !== "ALL" && { status: f }),
        });
        const res = await fetch(`/api/admin/users?${params}`);
        const data = await res.json();
        setUsers(data.users ?? []);
        setMeta(data.meta ?? { page: 1, totalPages: 1, total: 0, perPage: 12 });
      } catch {
        showToast("error", "Failed to load users");
      } finally {
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [statusFilter]
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchUsers(page, statusFilter);
  }, [page, statusFilter, fetchUsers]);

  function showToast(type: "success" | "error", msg: string) {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 3500);
  }

  async function updateUserStatus(id: string, status: string) {
    setActioning(id);
    try {
      const res = await fetch(`/api/admin/users`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error ?? "Failed");
      }
      showToast("success", `User ${status.toLowerCase()}`);
      fetchUsers(page, statusFilter);
    } catch (e: unknown) {
      showToast("error", e instanceof Error ? e.message : "Action failed");
    } finally {
      setActioning(null);
    }
  }

  async function deleteUser(id: string) {
    if (!confirm("Are you sure you want to permanently delete this user?")) return;
    setActioning(id);
    try {
      const res = await fetch(`/api/admin/users/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      showToast("success", "User deleted");
      fetchUsers(page, statusFilter);
    } catch {
      showToast("error", "Failed to delete user");
    } finally {
      setActioning(null);
    }
  }

  const statusTabs = ["ALL", "PENDING", "APPROVED", "REJECTED"];

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg text-sm font-medium ${
              toast.type === "success"
                ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-400"
                : "bg-red-500/20 border border-red-500/40 text-red-400"
            }`}
          >
            {toast.type === "success" ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center flex-shrink-0">
          <Users size={22} className="text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Users Management</h1>
          <p className="text-[#A78BFA] text-sm mt-0.5">
            Approve, reject, and manage platform users
          </p>
        </div>
      </div>

      {/* Capacity bar */}
      <div className="bg-[#1A1035] border border-[rgba(124,58,237,0.3)] rounded-2xl p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[#C4B5FD] text-sm font-medium">Approved Users Capacity</p>
          <p className="text-white text-sm font-semibold">
            {meta.approvedCount ?? 0} / {meta.maxApproved ?? 10}
          </p>
        </div>
        <div className="w-full bg-[#0F0A1E] rounded-full h-2.5">
          <div
            className="h-2.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] transition-all"
            style={{
              width: `${Math.min(100, ((meta.approvedCount ?? 0) / (meta.maxApproved ?? 10)) * 100)}%`,
            }}
          />
        </div>
        <p className="text-[#6B7280] text-xs mt-1.5">
          {(meta.maxApproved ?? 10) - (meta.approvedCount ?? 0)} slots remaining
        </p>
      </div>

      {/* Status Filter Tabs */}
      <div className="flex items-center gap-2 flex-wrap">
        {statusTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => { setStatusFilter(tab); setPage(1); }}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
              statusFilter === tab
                ? "bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white"
                : "bg-[#1A1035] border border-[rgba(124,58,237,0.3)] text-[#A78BFA] hover:border-[#7C3AED]"
            }`}
          >
            {tab === "ALL" ? "All Users" : tab.charAt(0) + tab.slice(1).toLowerCase()}
            {!loading && tab === "ALL" && (
              <span className="ml-2 text-xs opacity-70">({meta.total})</span>
            )}
          </button>
        ))}
      </div>

      {/* Users Grid */}
      {loading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-48 rounded-2xl" />
          ))}
        </div>
      ) : users.length === 0 ? (
        <div className="bg-[#1A1035] border border-[rgba(124,58,237,0.3)] rounded-2xl flex flex-col items-center justify-center py-16 gap-3">
          <div className="w-16 h-16 rounded-2xl bg-[rgba(124,58,237,0.1)] flex items-center justify-center">
            <UserX size={28} className="text-[#6B7280]" />
          </div>
          <p className="text-white font-medium">No users found</p>
          <p className="text-[#6B7280] text-sm">
            {statusFilter !== "ALL"
              ? `No ${statusFilter.toLowerCase()} users`
              : "No users have registered yet"}
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((u, i) => {
            const isSelf = u.id === currentUser?.id;
            const isActioning = actioning === u.id;
            return (
              <motion.div
                key={u.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="bg-[#1A1035] border border-[rgba(124,58,237,0.3)] rounded-2xl p-5 flex flex-col gap-4"
              >
                {/* User Info */}
                <div className="flex items-start gap-3">
                  <Avatar user={u} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-white font-semibold text-sm truncate">{u.name}</p>
                      {isSelf && (
                        <span className="text-[10px] bg-[#7C3AED]/20 text-[#A78BFA] px-1.5 py-0.5 rounded-full">
                          You
                        </span>
                      )}
                    </div>
                    <p className="text-[#6B7280] text-xs truncate mt-0.5">{u.email}</p>
                    <p className="text-[#6B7280] text-xs mt-1">
                      Joined {formatDate(u.createdAt)}
                    </p>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-2 flex-wrap">
                  <RoleBadge role={u.role} />
                  <StatusBadge status={u.status} />
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 pt-1 border-t border-[rgba(124,58,237,0.1)]">
                  {u.status === "PENDING" && (
                    <>
                      <button
                        onClick={() => updateUserStatus(u.id, "APPROVED")}
                        disabled={isActioning}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl text-xs font-medium hover:bg-emerald-500/20 transition disabled:opacity-50"
                      >
                        <CheckCircle size={13} /> Approve
                      </button>
                      <button
                        onClick={() => updateUserStatus(u.id, "REJECTED")}
                        disabled={isActioning}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl text-xs font-medium hover:bg-red-500/20 transition disabled:opacity-50"
                      >
                        <XCircle size={13} /> Reject
                      </button>
                    </>
                  )}
                  {u.status === "APPROVED" && !isSelf && (
                    <button
                      onClick={() => updateUserStatus(u.id, "REJECTED")}
                      disabled={isActioning}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-xl text-xs font-medium hover:bg-amber-500/20 transition disabled:opacity-50"
                    >
                      <RotateCcw size={13} /> Revoke Access
                    </button>
                  )}
                  {u.status === "REJECTED" && (
                    <button
                      onClick={() => updateUserStatus(u.id, "APPROVED")}
                      disabled={isActioning}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl text-xs font-medium hover:bg-emerald-500/20 transition disabled:opacity-50"
                    >
                      <CheckCircle size={13} /> Re-approve
                    </button>
                  )}
                  {!isSelf && (
                    <button
                      onClick={() => deleteUser(u.id)}
                      disabled={isActioning}
                      className="p-2 bg-red-900/20 text-red-500 border border-red-500/10 rounded-xl hover:bg-red-900/40 transition disabled:opacity-50"
                      title="Delete user permanently"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                  {isSelf && (
                    <div className="flex-1 text-center text-[#6B7280] text-xs py-1">
                      This is your account
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Pagination */}
      {!loading && meta.totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-[#6B7280] text-sm">
            Page {page} of {meta.totalPages} · {meta.total} users
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex items-center gap-1 px-3 py-2 bg-[#1A1035] border border-[rgba(124,58,237,0.3)] text-[#A78BFA] rounded-xl text-sm hover:border-[#7C3AED] transition disabled:opacity-40"
            >
              <ChevronLeft size={15} /> Prev
            </button>
            <button
              onClick={() => setPage((p) => Math.min(meta.totalPages, p + 1))}
              disabled={page === meta.totalPages}
              className="flex items-center gap-1 px-3 py-2 bg-[#1A1035] border border-[rgba(124,58,237,0.3)] text-[#A78BFA] rounded-xl text-sm hover:border-[#7C3AED] transition disabled:opacity-40"
            >
              Next <ChevronRight size={15} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
