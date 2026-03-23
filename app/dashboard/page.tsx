"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Clock,
  CheckCircle,
  Users,
  Calendar,
  GraduationCap,
  BookOpen,
  Briefcase,
  MapPin,
  BookHeart,
  MessageSquare,
  TrendingUp,
  Activity,
  Eye,
} from "lucide-react";
import { useDashboard } from "./layout";

// ─── Types ────────────────────────────────────────────────────
interface Stats {
  totalSubmissions: number;
  pendingSubmissions: number;
  approvedSubmissions: number;
  totalUsers: number;
  byType?: Record<string, number>;
  recentSubmissions?: Submission[];
}

interface Submission {
  id: string;
  type: string;
  status: string;
  createdAt: string;
  submittedBy?: string;
  data?: Record<string, unknown>;
}

interface ActivityEntry {
  id: string;
  action: string;
  targetName?: string;
  createdAt: string;
  user?: { name: string };
}

// ─── Helpers ──────────────────────────────────────────────────
function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-PH", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatActionLabel(action: string): string {
  const map: Record<string, string> = {
    LOGIN: "Signed in",
    LOGOUT: "Signed out",
    APPROVED_SUBMISSION: "Approved submission",
    REJECTED_SUBMISSION: "Rejected submission",
    DELETED_SUBMISSION: "Deleted submission",
    VIEWED_SUBMISSION: "Viewed submission",
    APPROVED_USER: "Approved user",
    REJECTED_USER: "Rejected user",
    DELETED_USER: "Deleted user",
    UPDATED_PROFILE: "Updated profile",
    SENT_MESSAGE: "Sent a message",
  };
  return (
    map[action] ??
    action
      .toLowerCase()
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

const TYPE_META: Record<
  string,
  { label: string; icon: React.ElementType; href: string; color: string }
> = {
  EVENT: { label: "Events", icon: Calendar, href: "/dashboard/events", color: "from-violet-600 to-violet-800" },
  TRAINING: { label: "Trainings", icon: GraduationCap, href: "/dashboard/trainings", color: "from-pink-600 to-pink-800" },
  RESOURCE: { label: "Resources", icon: BookOpen, href: "/dashboard/resources", color: "from-blue-600 to-blue-800" },
  OPPORTUNITY: { label: "Opportunities", icon: Briefcase, href: "/dashboard/opportunities", color: "from-amber-600 to-amber-800" },
  DIRECTORY: { label: "Directory", icon: MapPin, href: "/dashboard/directory", color: "from-emerald-600 to-emerald-800" },
  STORY: { label: "Stories", icon: BookHeart, href: "/dashboard/stories", color: "from-rose-600 to-rose-800" },
  CONTACT: { label: "Contact", icon: MessageSquare, href: "/dashboard/contact", color: "from-indigo-600 to-indigo-800" },
};

// ─── Stat Card ────────────────────────────────────────────────
function StatCard({
  label,
  value,
  icon: Icon,
  color,
  delay,
}: {
  label: string;
  value: number | string;
  icon: React.ElementType;
  color: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay ?? 0 }}
      className="bg-[#1A1035] border border-[rgba(124,58,237,0.3)] rounded-2xl p-6"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[#6B7280] text-sm mb-1">{label}</p>
          <p className="text-white text-3xl font-bold">{value}</p>
        </div>
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
          <Icon size={22} className="text-white" />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Status Badge ─────────────────────────────────────────────
function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    PENDING: "bg-[#7C3AED]/20 text-[#A78BFA]",
    APPROVED: "bg-emerald-500/20 text-emerald-400",
    REJECTED: "bg-red-500/20 text-red-400",
  };
  return (
    <span
      className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${styles[status] ?? "bg-gray-500/20 text-gray-400"}`}
    >
      {status}
    </span>
  );
}

// ─── Type Badge ───────────────────────────────────────────────
function TypeBadge({ type }: { type: string }) {
  const meta = TYPE_META[type];
  const Icon = meta?.icon ?? LayoutDashboard;
  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-[#7C3AED]/10 text-[#C4B5FD]">
      <Icon size={11} />
      {meta?.label ?? type}
    </span>
  );
}

// ─── Loading Skeleton ─────────────────────────────────────────
function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded bg-[rgba(124,58,237,0.1)] ${className ?? ""}`} />
  );
}

// ─── Main Dashboard Page ──────────────────────────────────────
export default function DashboardPage() {
  const { user } = useDashboard();
  const router = useRouter();
  const [stats, setStats] = useState<Stats | null>(null);
  const [activity, setActivity] = useState<ActivityEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const loadStats = useCallback(async () => {
    try {
      const [statsRes, actRes] = await Promise.all([
        fetch("/api/stats"),
        fetch("/api/activity"),
      ]);

      const statsData = statsRes.ok ? await statsRes.json() : null;
      const actData = actRes.ok ? await actRes.json() : null;

      if (statsData) {
        setStats({
          totalSubmissions: statsData?.submissions?.total ?? 0,
          pendingSubmissions: statsData?.submissions?.pending ?? 0,
          approvedSubmissions: statsData?.submissions?.approved ?? 0,
          totalUsers: statsData?.users?.approved ?? 0,
          byType: statsData?.submissions?.byType
            ? Object.fromEntries(
                Object.entries(statsData.submissions.byType).map(
                  ([k, v]) => [k, (v as { pending: number }).pending]
                )
              )
            : {},
          recentSubmissions: statsData?.recentSubmissions ?? [],
        });
      }
      setActivity(Array.isArray(actData?.logs) ? actData.logs.slice(0, 5) : []);
    } catch {
      // non-critical, keep showing last loaded data
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial load + poll every 15 seconds
  useEffect(() => {
    loadStats();
    const interval = setInterval(loadStats, 15_000);
    return () => clearInterval(interval);
  }, [loadStats]);

  const pendingByType = stats?.byType ?? {};

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-[#A78BFA] text-sm mb-1">
          {getGreeting()}, <span className="text-white font-semibold">{user?.name ?? "Admin"}</span> 👋
        </p>
        <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
      </motion.div>

      {/* Stat Cards */}
      {loading ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-32 rounded-2xl" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Total Submissions"
            value={stats?.totalSubmissions ?? 0}
            icon={TrendingUp}
            color="from-[#7C3AED] to-[#5B21B6]"
            delay={0}
          />
          <StatCard
            label="Pending Review"
            value={stats?.pendingSubmissions ?? 0}
            icon={Clock}
            color="from-amber-500 to-amber-700"
            delay={0.05}
          />
          <StatCard
            label="Approved"
            value={stats?.approvedSubmissions ?? 0}
            icon={CheckCircle}
            color="from-emerald-500 to-emerald-700"
            delay={0.1}
          />
          <StatCard
            label="Total Users"
            value={stats?.totalUsers ?? 0}
            icon={Users}
            color="from-blue-500 to-indigo-700"
            delay={0.15}
          />
        </div>
      )}

      {/* Category Mini Cards */}
      <div>
        <h2 className="text-white font-semibold mb-3 flex items-center gap-2">
          <Clock size={16} className="text-amber-400" />
          Pending by Category
        </h2>
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {[...Array(7)].map((_, i) => (
              <Skeleton key={i} className="h-20 rounded-2xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {Object.entries(TYPE_META).map(([key, meta]) => {
              const Icon = meta.icon;
              const count = pendingByType[key] ?? 0;
              return (
                <motion.button
                  key={key}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => router.push(meta.href)}
                  className="bg-[#1A1035] border border-[rgba(124,58,237,0.3)] rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-[#7C3AED] transition"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${meta.color} flex items-center justify-center`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <p className="text-[#C4B5FD] text-xs font-medium text-center leading-tight">{meta.label}</p>
                  <span
                    className={`text-lg font-bold ${count > 0 ? "text-amber-400" : "text-[#6B7280]"}`}
                  >
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom grid: Recent Submissions + Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Submissions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#1A1035] border border-[rgba(124,58,237,0.3)] rounded-2xl p-6"
        >
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Eye size={16} className="text-[#A78BFA]" />
            Recent Submissions
          </h2>
          {loading ? (
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-10 rounded-xl" />
              ))}
            </div>
          ) : stats?.recentSubmissions?.length ? (
            <div className="space-y-2">
              {stats.recentSubmissions.map((sub) => (
                <div
                  key={sub.id}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-[rgba(124,58,237,0.05)] transition"
                >
                  <TypeBadge type={sub.type} />
                  <div className="flex-1 min-w-0">
                    <p className="text-[#C4B5FD] text-xs truncate">
                      {sub.submittedBy ?? "Anonymous"}
                    </p>
                  </div>
                  <StatusBadge status={sub.status} />
                  <span className="text-[#6B7280] text-xs whitespace-nowrap">
                    {formatDate(sub.createdAt)}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[#6B7280] text-sm text-center py-6">No submissions yet</p>
          )}
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-[#1A1035] border border-[rgba(124,58,237,0.3)] rounded-2xl p-6"
        >
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Activity size={16} className="text-[#A78BFA]" />
            Recent Activity
          </h2>
          {loading ? (
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-10 rounded-xl" />
              ))}
            </div>
          ) : activity.length ? (
            <div className="space-y-2">
              {activity.map((act) => (
                <div
                  key={act.id}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-[rgba(124,58,237,0.05)] transition"
                >
                  <div className="w-2 h-2 rounded-full bg-[#7C3AED] mt-1.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[#C4B5FD] text-sm">
                      <span className="text-white font-medium">{act.user?.name ?? "System"}</span>{" "}
                      {formatActionLabel(act.action)}
                      {act.targetName && (
                        <span className="text-[#A78BFA]"> · {act.targetName}</span>
                      )}
                    </p>
                    <p className="text-[#6B7280] text-xs mt-0.5">{formatDate(act.createdAt)}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[#6B7280] text-sm text-center py-6">No recent activity</p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
