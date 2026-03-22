"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, ChevronLeft, ChevronRight } from "lucide-react";
import { useDashboard } from "../layout";

interface Log {
  id: string;
  action: string;
  targetType: string | null;
  targetId: string | null;
  details: Record<string, unknown> | null;
  createdAt: string;
  user: { id: string; name: string; email: string; photoUrl: string | null };
}

const ACTION_LABELS: Record<string, string> = {
  LOGIN: "Signed in",
  UPDATED_PROFILE: "Updated profile",
  APPROVED_USER: "Approved user",
  REJECTED_USER: "Rejected user",
  DELETED_USER: "Deleted user",
  APPROVED_SUBMISSION: "Approved submission",
  REJECTED_SUBMISSION: "Rejected submission",
  DELETED_SUBMISSION: "Deleted submission",
};

function formatAction(action: string, details: Record<string, unknown> | null) {
  const label = ACTION_LABELS[action] || action;
  if (details?.userName) return `${label}: ${details.userName}`;
  if (details?.type) return `${label} (${(details.type as string).toLowerCase()})`;
  return label;
}

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

export default function ActivityPage() {
  const { user } = useDashboard();
  const [logs, setLogs] = useState<Log[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  if (user?.role !== "ADMIN") {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <p className="text-2xl mb-2">🔒</p>
          <p className="text-[#C4B5FD] font-semibold">Admin access required</p>
          <p className="text-[#6B7280] text-sm mt-1">Only administrators can view the activity log.</p>
        </div>
      </div>
    );
  }

  useEffect(() => {
    setLoading(true);
    fetch(`/api/activity?page=${page}&limit=20`)
      .then((r) => r.json())
      .then((data) => {
        setLogs(data.logs || []);
        setPages(data.pagination?.pages || 1);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/20 flex items-center justify-center">
          <Activity size={20} className="text-[#A78BFA]" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Activity Log</h1>
          <p className="text-[#A78BFA] text-sm">All system actions and events</p>
        </div>
      </div>

      <div className="bg-[#1A1035] border border-[rgba(124,58,237,0.3)] rounded-2xl overflow-hidden">
        {loading ? (
          <div className="space-y-0 divide-y divide-[rgba(124,58,237,0.1)]">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-4">
                <div className="w-9 h-9 rounded-full bg-[#7C3AED]/10 animate-pulse flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-[#7C3AED]/10 rounded animate-pulse w-1/2" />
                  <div className="h-3 bg-[#7C3AED]/10 rounded animate-pulse w-1/3" />
                </div>
                <div className="h-3 bg-[#7C3AED]/10 rounded animate-pulse w-24" />
              </div>
            ))}
          </div>
        ) : logs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <Activity size={40} className="text-[#4B4568] mb-3" />
            <p className="text-[#C4B5FD] font-medium">No activity yet</p>
            <p className="text-[#6B7280] text-sm">Actions will appear here as they happen.</p>
          </div>
        ) : (
          <div className="divide-y divide-[rgba(124,58,237,0.1)]">
            {logs.map((log, i) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-4 px-6 py-4 hover:bg-[#7C3AED]/5 transition"
              >
                <div className="w-9 h-9 rounded-full bg-[#7C3AED]/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {log.user.photoUrl ? (
                    <img src={log.user.photoUrl} alt={log.user.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-[#A78BFA] text-xs font-bold">{initials(log.user.name)}</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium">
                    {log.user.name}
                  </p>
                  <p className="text-[#A78BFA] text-xs truncate">
                    {formatAction(log.action, log.details)}
                  </p>
                </div>
                <p className="text-[#6B7280] text-xs flex-shrink-0">
                  {new Date(log.createdAt).toLocaleString("en-PH", {
                    month: "short", day: "numeric",
                    hour: "2-digit", minute: "2-digit",
                  })}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {pages > 1 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-[rgba(124,58,237,0.2)]">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex items-center gap-1 text-[#A78BFA] text-sm disabled:opacity-40 hover:text-white transition"
            >
              <ChevronLeft size={16} /> Previous
            </button>
            <span className="text-[#6B7280] text-sm">Page {page} of {pages}</span>
            <button
              onClick={() => setPage((p) => Math.min(pages, p + 1))}
              disabled={page === pages}
              className="flex items-center gap-1 text-[#A78BFA] text-sm disabled:opacity-40 hover:text-white transition"
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
