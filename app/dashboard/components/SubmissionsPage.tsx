"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  CheckCircle,
  XCircle,
  Trash2,
  Eye,
  ChevronLeft,
  ChevronRight,
  X,
  Filter,
  LucideIcon,
  AlertCircle,
  Clock,
  Calendar,
  User,
  Info,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────
interface Submission {
  id: string;
  type: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  createdAt: string;
  updatedAt?: string;
  viewedAt?: string;
  submittedBy?: string;
  data: Record<string, unknown>;
}

interface PaginationMeta {
  page: number;
  totalPages: number;
  total: number;
  perPage: number;
}

interface Props {
  type: "EVENT" | "TRAINING" | "RESOURCE" | "OPPORTUNITY" | "DIRECTORY" | "STORY" | "CONTACT";
  title: string;
  description: string;
  icon: LucideIcon;
}

// ─── Helpers ──────────────────────────────────────────────────
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-PH", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatFieldLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

// ─── Status Badge ─────────────────────────────────────────────
function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    PENDING: "bg-[#7C3AED]/20 text-[#A78BFA]",
    APPROVED: "bg-emerald-500/20 text-emerald-400",
    REJECTED: "bg-red-500/20 text-red-400",
  };
  const icons: Record<string, React.ReactNode> = {
    PENDING: <Clock size={11} />,
    APPROVED: <CheckCircle size={11} />,
    REJECTED: <XCircle size={11} />,
  };
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${styles[status] ?? "bg-gray-500/20 text-gray-400"}`}
    >
      {icons[status]}
      {status}
    </span>
  );
}

// ─── Loading Skeleton ─────────────────────────────────────────
function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded bg-[rgba(124,58,237,0.08)] ${className ?? ""}`} />
  );
}

function TableSkeleton() {
  return (
    <div className="space-y-3">
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} className="h-16 rounded-xl" />
      ))}
    </div>
  );
}

// ─── Submission Detail Modal ──────────────────────────────────
function SubmissionModal({
  submission,
  onClose,
  onApprove,
  onReject,
  onDelete,
  actioning,
}: {
  submission: Submission;
  onClose: () => void;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  onDelete: (id: string) => void;
  actioning: string | null;
}) {
  const isActioning = actioning === submission.id;

  // Flatten data for display
  const dataEntries = Object.entries(submission.data ?? {}).filter(
    ([k]) => !["id", "createdAt", "updatedAt", "userId"].includes(k)
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        className="bg-[#1A1035] border border-[rgba(124,58,237,0.4)] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(124,58,237,0.2)]">
          <div>
            <h2 className="text-white font-semibold text-lg">Submission Details</h2>
            <p className="text-[#6B7280] text-xs mt-0.5">ID: {submission.id}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[rgba(124,58,237,0.1)] flex items-center justify-center text-[#A78BFA] hover:text-white hover:bg-[rgba(124,58,237,0.3)] transition"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {/* Meta row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-[#0F0A1E] rounded-xl p-3">
              <p className="text-[#6B7280] text-xs mb-1 flex items-center gap-1">
                <Info size={10} /> Status
              </p>
              <StatusBadge status={submission.status} />
            </div>
            <div className="bg-[#0F0A1E] rounded-xl p-3">
              <p className="text-[#6B7280] text-xs mb-1 flex items-center gap-1">
                <User size={10} /> Submitted By
              </p>
              <p className="text-white text-xs font-medium truncate">
                {submission.submittedBy ?? "Anonymous"}
              </p>
            </div>
            <div className="bg-[#0F0A1E] rounded-xl p-3">
              <p className="text-[#6B7280] text-xs mb-1 flex items-center gap-1">
                <Calendar size={10} /> Submitted
              </p>
              <p className="text-white text-xs">{formatDate(submission.createdAt)}</p>
            </div>
            <div className="bg-[#0F0A1E] rounded-xl p-3">
              <p className="text-[#6B7280] text-xs mb-1 flex items-center gap-1">
                <Eye size={10} /> Viewed
              </p>
              <p className="text-white text-xs">
                {submission.viewedAt ? formatDate(submission.viewedAt) : "Not yet"}
              </p>
            </div>
          </div>

          {/* Data fields */}
          {dataEntries.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-[#A78BFA] text-sm font-semibold uppercase tracking-wider">
                Submission Data
              </h3>
              <div className="grid gap-3">
                {dataEntries.map(([key, value]) => {
                  const isLong =
                    typeof value === "string" && value.length > 100;
                  return (
                    <div key={key} className="bg-[#0F0A1E] rounded-xl p-3">
                      <p className="text-[#6B7280] text-xs mb-1">{formatFieldLabel(key)}</p>
                      {isLong ? (
                        <p className="text-[#C4B5FD] text-sm leading-relaxed whitespace-pre-wrap">
                          {String(value)}
                        </p>
                      ) : (
                        <p className="text-white text-sm font-medium">
                          {value === null || value === undefined
                            ? "—"
                            : typeof value === "object"
                            ? JSON.stringify(value)
                            : String(value)}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[rgba(124,58,237,0.2)] flex items-center gap-3 flex-wrap">
          {submission.status !== "APPROVED" && (
            <button
              onClick={() => onApprove(submission.id)}
              disabled={isActioning}
              className="flex items-center gap-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30 rounded-xl px-4 py-2 text-sm font-medium transition disabled:opacity-50"
            >
              <CheckCircle size={15} />
              Approve
            </button>
          )}
          {submission.status !== "REJECTED" && (
            <button
              onClick={() => onReject(submission.id)}
              disabled={isActioning}
              className="flex items-center gap-2 bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 rounded-xl px-4 py-2 text-sm font-medium transition disabled:opacity-50"
            >
              <XCircle size={15} />
              Reject
            </button>
          )}
          <button
            onClick={() => onDelete(submission.id)}
            disabled={isActioning}
            className="flex items-center gap-2 bg-red-900/30 text-red-400 border border-red-500/20 hover:bg-red-900/50 rounded-xl px-4 py-2 text-sm font-medium transition disabled:opacity-50 ml-auto"
          >
            <Trash2 size={15} />
            Delete
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────
export default function SubmissionsPage({ type, title, description, icon: Icon }: Props) {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [meta, setMeta] = useState<PaginationMeta>({ page: 1, totalPages: 1, total: 0, perPage: 10 });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Submission | null>(null);
  const [actioning, setActioning] = useState<string | null>(null);
  const [toast, setToast] = useState<{ type: "success" | "error"; msg: string } | null>(null);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  // Fetch submissions
  const fetchSubmissions = useCallback(
    async (p = 1, s = search, f = statusFilter) => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          type,
          page: String(p),
          ...(f !== "ALL" && { status: f }),
          ...(s && { search: s }),
        });
        const res = await fetch(`/api/submissions?${params}`);
        if (!res.ok) throw new Error(`${res.status}`);
        const data = await res.json();
        setSubmissions(data.submissions ?? []);
        setMeta(
          data.meta ?? {
            page: data.pagination?.page ?? 1,
            totalPages: data.pagination?.pages ?? 1,
            total: data.pagination?.total ?? 0,
            perPage: data.pagination?.limit ?? 20,
          }
        );
      } catch {
        showToast("error", "Failed to load submissions");
      } finally {
        setLoading(false);
      }
    },
    [type, search, statusFilter]
  );

  // Debounced search
  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      setPage(1);
      fetchSubmissions(1, search, statusFilter);
    }, 300);
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // Fetch on filter/page change
  useEffect(() => {
    fetchSubmissions(page, search, statusFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, statusFilter]);

  // Poll every 10 seconds for new submissions
  useEffect(() => {
    const interval = setInterval(() => {
      fetchSubmissions(page, search, statusFilter);
    }, 10_000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search, statusFilter]);

  function showToast(type: "success" | "error", msg: string) {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 3500);
  }

  async function handleView(sub: Submission) {
    setSelected(sub);
    // Mark viewed
    if (!sub.viewedAt) {
      await fetch(`/api/submissions/${sub.id}/view`, { method: "POST" }).catch(() => {});
      setSubmissions((prev) =>
        prev.map((s) => (s.id === sub.id ? { ...s, viewedAt: new Date().toISOString() } : s))
      );
    }
  }

  async function handleApprove(id: string) {
    setActioning(id);
    try {
      const res = await fetch(`/api/submissions/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "APPROVED" }),
      });
      if (!res.ok) throw new Error();
      setSubmissions((prev) =>
        prev.map((s) => (s.id === id ? { ...s, status: "APPROVED" } : s))
      );
      setSelected(null);
      showToast("success", "Submission approved");
    } catch {
      showToast("error", "Failed to approve");
    } finally {
      setActioning(null);
    }
  }

  async function handleReject(id: string) {
    setActioning(id);
    try {
      const res = await fetch(`/api/submissions/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "REJECTED" }),
      });
      if (!res.ok) throw new Error();
      setSubmissions((prev) =>
        prev.map((s) => (s.id === id ? { ...s, status: "REJECTED" } : s))
      );
      setSelected(null);
      showToast("success", "Submission rejected");
    } catch {
      showToast("error", "Failed to reject");
    } finally {
      setActioning(null);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this submission?")) return;
    setActioning(id);
    try {
      const res = await fetch(`/api/submissions/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      setSubmissions((prev) => prev.filter((s) => s.id !== id));
      if (selected?.id === id) setSelected(null);
      showToast("success", "Submission deleted");
      fetchSubmissions(page, search, statusFilter);
    } catch {
      showToast("error", "Failed to delete");
    } finally {
      setActioning(null);
    }
  }

  const statusOptions = ["ALL", "PENDING", "APPROVED", "REJECTED"];

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
          <Icon size={22} className="text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          <p className="text-[#A78BFA] text-sm mt-0.5">{description}</p>
        </div>
        <div className="ml-auto bg-[#1A1035] border border-[rgba(124,58,237,0.3)] rounded-xl px-4 py-2 text-center min-w-[80px]">
          <p className="text-2xl font-bold text-white">{meta.total}</p>
          <p className="text-[#6B7280] text-xs">total</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-[#1A1035] border border-[rgba(124,58,237,0.3)] rounded-2xl p-4 flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B7280]" />
          <input
            type="text"
            placeholder="Search submissions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#0F0A1E] border border-[rgba(124,58,237,0.3)] text-white rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#7C3AED] w-full text-sm"
          />
        </div>
        {/* Status Filter */}
        <div className="flex items-center gap-2 flex-wrap">
          <Filter size={14} className="text-[#6B7280]" />
          {statusOptions.map((s) => (
            <button
              key={s}
              onClick={() => { setStatusFilter(s); setPage(1); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                statusFilter === s
                  ? "bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white"
                  : "bg-[#0F0A1E] border border-[rgba(124,58,237,0.3)] text-[#A78BFA] hover:border-[#7C3AED]"
              }`}
            >
              {s === "ALL" ? "All" : s.charAt(0) + s.slice(1).toLowerCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#1A1035] border border-[rgba(124,58,237,0.3)] rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-6">
            <TableSkeleton />
          </div>
        ) : submissions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <div className="w-16 h-16 rounded-2xl bg-[rgba(124,58,237,0.1)] flex items-center justify-center">
              <Icon size={28} className="text-[#6B7280]" />
            </div>
            <p className="text-white font-medium">No submissions found</p>
            <p className="text-[#6B7280] text-sm">
              {search || statusFilter !== "ALL"
                ? "Try adjusting your filters"
                : "No submissions have been made yet"}
            </p>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[rgba(124,58,237,0.15)]">
                    <th className="text-left px-5 py-3 text-[#6B7280] text-xs font-semibold uppercase tracking-wider">
                      Submitted By
                    </th>
                    <th className="text-left px-5 py-3 text-[#6B7280] text-xs font-semibold uppercase tracking-wider">
                      Status
                    </th>
                    <th className="text-left px-5 py-3 text-[#6B7280] text-xs font-semibold uppercase tracking-wider">
                      Date
                    </th>
                    <th className="text-right px-5 py-3 text-[#6B7280] text-xs font-semibold uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((sub, i) => (
                    <motion.tr
                      key={sub.id}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="border-b border-[rgba(124,58,237,0.08)] hover:bg-[rgba(124,58,237,0.04)] transition"
                    >
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-semibold">
                              {(sub.submittedBy ?? "A").charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <span className="text-[#C4B5FD] text-sm">
                            {sub.submittedBy ?? "Anonymous"}
                          </span>
                          {!sub.viewedAt && (
                            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                          )}
                        </div>
                      </td>
                      <td className="px-5 py-3.5">
                        <StatusBadge status={sub.status} />
                      </td>
                      <td className="px-5 py-3.5 text-[#6B7280] text-xs">
                        {formatDate(sub.createdAt)}
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleView(sub)}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#7C3AED]/10 text-[#A78BFA] rounded-lg text-xs font-medium hover:bg-[#7C3AED]/20 transition"
                          >
                            <Eye size={13} /> View
                          </button>
                          {sub.status !== "APPROVED" && (
                            <button
                              onClick={() => handleApprove(sub.id)}
                              disabled={actioning === sub.id}
                              className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition disabled:opacity-50"
                              title="Approve"
                            >
                              <CheckCircle size={15} />
                            </button>
                          )}
                          {sub.status !== "REJECTED" && (
                            <button
                              onClick={() => handleReject(sub.id)}
                              disabled={actioning === sub.id}
                              className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition disabled:opacity-50"
                              title="Reject"
                            >
                              <XCircle size={15} />
                            </button>
                          )}
                          <button
                            onClick={() => handleDelete(sub.id)}
                            disabled={actioning === sub.id}
                            className="p-1.5 rounded-lg bg-red-900/20 text-red-500 hover:bg-red-900/40 transition disabled:opacity-50"
                            title="Delete"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card List */}
            <div className="md:hidden divide-y divide-[rgba(124,58,237,0.08)]">
              {submissions.map((sub, i) => (
                <motion.div
                  key={sub.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  className="p-4 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">
                          {(sub.submittedBy ?? "A").charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="text-[#C4B5FD] text-sm font-medium">
                          {sub.submittedBy ?? "Anonymous"}
                        </p>
                        <p className="text-[#6B7280] text-xs">{formatDate(sub.createdAt)}</p>
                      </div>
                    </div>
                    <StatusBadge status={sub.status} />
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleView(sub)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#7C3AED]/10 text-[#A78BFA] rounded-xl text-xs font-medium hover:bg-[#7C3AED]/20 transition"
                    >
                      <Eye size={13} /> View
                    </button>
                    {sub.status !== "APPROVED" && (
                      <button
                        onClick={() => handleApprove(sub.id)}
                        disabled={actioning === sub.id}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-emerald-500/10 text-emerald-400 rounded-xl text-xs font-medium hover:bg-emerald-500/20 transition disabled:opacity-50"
                      >
                        <CheckCircle size={13} /> Approve
                      </button>
                    )}
                    {sub.status !== "REJECTED" && (
                      <button
                        onClick={() => handleReject(sub.id)}
                        disabled={actioning === sub.id}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-red-500/10 text-red-400 rounded-xl text-xs font-medium hover:bg-red-500/20 transition disabled:opacity-50"
                      >
                        <XCircle size={13} /> Reject
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(sub.id)}
                      disabled={actioning === sub.id}
                      className="p-2 bg-red-900/20 text-red-500 rounded-xl hover:bg-red-900/40 transition disabled:opacity-50"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Pagination */}
      {!loading && meta.totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-[#6B7280] text-sm">
            Showing {((page - 1) * meta.perPage) + 1}–{Math.min(page * meta.perPage, meta.total)} of {meta.total}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex items-center gap-1 px-3 py-2 bg-[#1A1035] border border-[rgba(124,58,237,0.3)] text-[#A78BFA] rounded-xl text-sm hover:border-[#7C3AED] transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={15} /> Prev
            </button>
            {Array.from({ length: Math.min(5, meta.totalPages) }, (_, i) => {
              let p: number;
              if (meta.totalPages <= 5) {
                p = i + 1;
              } else if (page <= 3) {
                p = i + 1;
              } else if (page >= meta.totalPages - 2) {
                p = meta.totalPages - 4 + i;
              } else {
                p = page - 2 + i;
              }
              return (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-9 h-9 rounded-xl text-sm font-medium transition ${
                    page === p
                      ? "bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white"
                      : "bg-[#1A1035] border border-[rgba(124,58,237,0.3)] text-[#A78BFA] hover:border-[#7C3AED]"
                  }`}
                >
                  {p}
                </button>
              );
            })}
            <button
              onClick={() => setPage((p) => Math.min(meta.totalPages, p + 1))}
              disabled={page === meta.totalPages}
              className="flex items-center gap-1 px-3 py-2 bg-[#1A1035] border border-[rgba(124,58,237,0.3)] text-[#A78BFA] rounded-xl text-sm hover:border-[#7C3AED] transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next <ChevronRight size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <SubmissionModal
            submission={selected}
            onClose={() => setSelected(null)}
            onApprove={handleApprove}
            onReject={handleReject}
            onDelete={handleDelete}
            actioning={actioning}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
