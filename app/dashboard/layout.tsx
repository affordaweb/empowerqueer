"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
  useMemo,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Calendar,
  GraduationCap,
  BookOpen,
  Briefcase,
  MapPin,
  BookHeart,
  MessageSquare,
  Users,
  Activity,
  Bell,
  LogOut,
  Menu,
  X,
  ChevronRight,
  User,
  Rss,
  MessagesSquare,
  FileEdit,
} from "lucide-react";
import ChatPanel from "./components/ChatPanel";

// ─── Types ───────────────────────────────────────────────────
export interface DashboardUser {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "USER";
  status: string;
  photoUrl?: string | null;
}

interface DashboardContextType {
  user: DashboardUser | null;
  setUser: (u: DashboardUser | null) => void;
  unread: Record<string, number>;
}

// ─── Context ─────────────────────────────────────────────────
export const DashboardContext = createContext<DashboardContextType>({
  user: null,
  setUser: () => {},
  unread: {},
});

export function useDashboard() {
  return useContext(DashboardContext);
}

// ─── Nav Items ───────────────────────────────────────────────
const NAV_ITEMS = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard", key: null, adminOnly: false },
  { label: "Activity Feed", icon: Rss, href: "/dashboard/feed", key: null, adminOnly: false },
  { label: "Events", icon: Calendar, href: "/dashboard/events", key: "EVENT", adminOnly: false },
  { label: "Trainings", icon: GraduationCap, href: "/dashboard/trainings", key: "TRAINING", adminOnly: false },
  { label: "Resources", icon: BookOpen, href: "/dashboard/resources", key: "RESOURCE", adminOnly: false },
  { label: "Opportunities", icon: Briefcase, href: "/dashboard/opportunities", key: "OPPORTUNITY", adminOnly: false },
  { label: "Directory", icon: MapPin, href: "/dashboard/directory", key: "DIRECTORY", adminOnly: false },
  { label: "Stories", icon: BookHeart, href: "/dashboard/stories", key: "STORY", adminOnly: false },
  { label: "Contact", icon: MessageSquare, href: "/dashboard/contact", key: "CONTACT", adminOnly: false },
  { label: "Chat", icon: MessagesSquare, href: "/dashboard/chat", key: "VISITOR_CHAT", adminOnly: true },
  { label: "Content Manager", icon: FileEdit, href: "/dashboard/content", key: null, adminOnly: true },
  { label: "Users", icon: Users, href: "/dashboard/users", key: null, adminOnly: true },
  { label: "Activity", icon: Activity, href: "/dashboard/activity", key: null, adminOnly: true },
];

// ─── Page title map ──────────────────────────────────────────
function getPageTitle(pathname: string): string {
  const map: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/dashboard/feed": "Activity Feed",
    "/dashboard/events": "Events",
    "/dashboard/trainings": "Trainings",
    "/dashboard/resources": "Resources",
    "/dashboard/opportunities": "Opportunities",
    "/dashboard/directory": "Directory",
    "/dashboard/stories": "Stories",
    "/dashboard/contact": "Contact",
    "/dashboard/chat": "Chat",
    "/dashboard/content": "Content Manager",
    "/dashboard/users": "Users Management",
    "/dashboard/activity": "Activity Log",
    "/dashboard/profile": "My Profile",
  };
  return map[pathname] ?? "Dashboard";
}

// ─── Role badge ──────────────────────────────────────────────
function RoleBadge({ role }: { role: string }) {
  const styles: Record<string, string> = {
    ADMIN: "bg-[#7C3AED]/20 text-[#A78BFA]",
    MODERATOR: "bg-[#EC4899]/20 text-pink-300", // legacy, kept for safety
    USER: "bg-[#1A1035] text-[#6B7280]",
  };
  return (
    <span
      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider ${styles[role] ?? styles.USER}`}
    >
      {role}
    </span>
  );
}

// ─── Sidebar NavItem ─────────────────────────────────────────
function NavItem({
  item,
  isActive,
  unreadCount,
  onClick,
}: {
  item: (typeof NAV_ITEMS)[0];
  isActive: boolean;
  unreadCount: number;
  onClick?: () => void;
}) {
  const Icon = item.icon;
  return (
    <Link href={item.href} onClick={onClick}>
      <motion.div
        whileHover={{ x: 3 }}
        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all cursor-pointer relative group ${
          isActive
            ? "bg-gradient-to-r from-[#7C3AED]/30 to-[#EC4899]/10 border border-[rgba(124,58,237,0.4)] text-white"
            : "text-[#A78BFA] hover:text-white hover:bg-[rgba(124,58,237,0.1)]"
        }`}
      >
        {isActive && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-[#7C3AED] to-[#EC4899] rounded-r-full" />
        )}
        <Icon size={18} className={isActive ? "text-[#A78BFA]" : "text-[#6B7280] group-hover:text-[#A78BFA]"} />
        <span className="text-sm font-medium flex-1">{item.label}</span>
        {unreadCount > 0 && (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping" />
            <span className="relative inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-red-500 text-white text-[10px] font-bold">
              {unreadCount > 99 ? "99+" : unreadCount}
            </span>
          </span>
        )}
      </motion.div>
    </Link>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────
function Sidebar({
  user,
  unread,
  onClose,
  isMobile,
}: {
  user: DashboardUser | null;
  unread: Record<string, number>;
  onClose?: () => void;
  isMobile?: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  const visibleItems = NAV_ITEMS.filter(
    (item) => !item.adminOnly || user?.role === "ADMIN"
  );

  return (
    <div className="flex flex-col h-full bg-[#1A1035] border-r border-[rgba(124,58,237,0.2)]">
      {/* Logo + Site name */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-[rgba(124,58,237,0.15)]">
        <div className="relative w-10 h-10 flex-shrink-0">
          <Image
            src="/empower-queer-logo.png"
            alt="Empower Queer Hub"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <p className="text-white font-semibold text-sm leading-tight">Empower Queer Hub</p>
          <p className="text-[10px] text-[#A78BFA]">Admin Panel</p>
        </div>
        {isMobile && (
          <button onClick={onClose} className="ml-auto text-[#6B7280] hover:text-white">
            <X size={20} />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {visibleItems.map((item) => (
          <NavItem
            key={item.href}
            item={item}
            isActive={
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href)
            }
            unreadCount={item.key ? (unread[item.key] ?? 0) : 0}
            onClick={isMobile ? onClose : undefined}
          />
        ))}
      </nav>

      {/* Profile + Logout */}
      <div className="px-3 pb-4 border-t border-[rgba(124,58,237,0.15)] pt-3 space-y-2">
        <Link href="/dashboard/profile" onClick={isMobile ? onClose : undefined}>
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[rgba(124,58,237,0.1)] transition cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center flex-shrink-0 overflow-hidden">
              {user?.photoUrl ? (
                <Image src={user.photoUrl} alt={user.name} width={36} height={36} className="object-cover w-full h-full rounded-full" />
              ) : (
                <span className="text-white text-sm font-semibold">
                  {user?.name?.charAt(0).toUpperCase() ?? "U"}
                </span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">{user?.name ?? "User"}</p>
              <RoleBadge role={user?.role ?? "USER"} />
            </div>
            <User size={14} className="text-[#6B7280]" />
          </div>
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#6B7280] hover:text-red-400 hover:bg-red-500/10 transition text-sm font-medium"
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </div>
  );
}

// ─── Notification sound (Messenger-style) ────────────────────
function playNotificationSound() {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioCtx();

    function tone(freq: number, start: number, dur: number, vol: number) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
      gain.gain.setValueAtTime(0, ctx.currentTime + start);
      gain.gain.linearRampToValueAtTime(vol, ctx.currentTime + start + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + dur);
      osc.start(ctx.currentTime + start);
      osc.stop(ctx.currentTime + start + dur);
    }

    // Two-note Messenger "pop" — E5 then G5
    tone(659, 0, 0.18, 0.28);
    tone(784, 0.12, 0.22, 0.22);
  } catch {
    // AudioContext not available (e.g. SSR or blocked)
  }
}

// ─── Notification dropdown ────────────────────────────────────
const NOTIF_LABELS: Record<string, string> = {
  EVENT: "Events",
  TRAINING: "Trainings",
  RESOURCE: "Resources",
  OPPORTUNITY: "Opportunities",
  DIRECTORY: "Directory",
  STORY: "Stories",
  CONTACT: "Contact",
  VISITOR_CHAT: "Visitor Chat",
};
const NOTIF_HREFS: Record<string, string> = {
  EVENT: "/dashboard/events",
  TRAINING: "/dashboard/trainings",
  RESOURCE: "/dashboard/resources",
  OPPORTUNITY: "/dashboard/opportunities",
  DIRECTORY: "/dashboard/directory",
  STORY: "/dashboard/stories",
  CONTACT: "/dashboard/contact",
  VISITOR_CHAT: "/dashboard/chat",
};

function NotificationDropdown({
  unread,
  onClose,
}: {
  unread: Record<string, number>;
  onClose: () => void;
}) {
  const items = Object.entries(unread).filter(([, v]) => v > 0);
  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.95 }}
      transition={{ duration: 0.15 }}
      className="absolute right-0 top-11 w-80 bg-[#1A1035] border border-[rgba(124,58,237,0.3)] rounded-2xl shadow-2xl overflow-hidden z-50"
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-[rgba(124,58,237,0.15)] flex items-center justify-between">
        <span className="text-white font-bold text-base">Notifications</span>
        {items.length > 0 && (
          <span className="text-xs text-[#A78BFA] font-medium">{items.reduce((s, [, v]) => s + v, 0)} new</span>
        )}
      </div>

      {/* Items */}
      <div className="max-h-80 overflow-y-auto">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 gap-2">
            <Bell size={28} className="text-[#4B5563]" />
            <p className="text-[#6B7280] text-sm">You&apos;re all caught up!</p>
          </div>
        ) : (
          items.map(([key, count]) => (
            <Link key={key} href={NOTIF_HREFS[key] ?? "/dashboard"} onClick={onClose}>
              <div className="flex items-center gap-3 px-4 py-3 hover:bg-[rgba(124,58,237,0.1)] transition cursor-pointer group">
                {/* Blue dot (unread indicator) */}
                <div className="w-2.5 h-2.5 rounded-full bg-[#0084FF] flex-shrink-0" />
                {/* Avatar circle with initial */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{(NOTIF_LABELS[key] ?? key).charAt(0)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-semibold leading-tight">{NOTIF_LABELS[key] ?? key}</p>
                  <p className="text-[#A78BFA] text-xs mt-0.5">
                    {count} new submission{count > 1 ? "s" : ""} pending review
                  </p>
                </div>
                <span className="flex-shrink-0 bg-[#0084FF] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {count > 99 ? "99+" : count}
                </span>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-[rgba(124,58,237,0.15)] px-4 py-2.5">
        <Link href="/dashboard" onClick={onClose} className="block text-center text-[#0084FF] text-sm font-semibold hover:underline">
          See all in Dashboard
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Layout ───────────────────────────────────────────────────
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<DashboardUser | null>(null);
  const [unread, setUnread] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const unreadTimer = useRef<NodeJS.Timeout | null>(null);
  const prevUnreadTotalRef = useRef<number>(0);
  const notifRef = useRef<HTMLDivElement>(null);
  const isFirstFetch = useRef(true);

  // Close notification dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const totalUnread = useMemo(() => Object.values(unread).reduce((s, v) => s + v, 0), [unread]);

  // Fetch current user
  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => {
        if (r.status === 401) {
          router.push("/login");
          return null;
        }
        return r.json();
      })
      .then((data) => {
        if (data?.user) {
          setUser(data.user);
        } else if (data) {
          router.push("/login");
        }
      })
      .catch(() => router.push("/login"))
      .finally(() => setLoading(false));
  }, [router]);

  // Fetch unread counts
  const fetchUnread = useCallback(() => {
    Promise.all([
      fetch("/api/submissions/unread").then((r) => r.json()).catch(() => ({})),
      fetch("/api/admin/visitor-chat").then((r) => r.json()).catch(() => ({ conversations: [] })),
    ]).then(([submissions, chatData]) => {
      const unreadChat = (chatData.conversations ?? []).reduce(
        (sum: number, c: { _count: { messages: number } }) => sum + (c._count?.messages ?? 0),
        0
      );
      if (submissions && typeof submissions === "object") {
        const next = { ...submissions, VISITOR_CHAT: unreadChat };
        const nextTotal = Object.values(next).reduce((s: number, v) => s + (v as number), 0);
        if (!isFirstFetch.current && nextTotal > prevUnreadTotalRef.current) {
          playNotificationSound();
        }
        prevUnreadTotalRef.current = nextTotal;
        isFirstFetch.current = false;
        setUnread(next);
      }
    });
  }, []);

  useEffect(() => {
    fetchUnread();
    unreadTimer.current = setInterval(fetchUnread, 10_000);
    return () => {
      if (unreadTimer.current) clearInterval(unreadTimer.current);
    };
  }, [fetchUnread]);

  // Close mobile sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0F0A1E] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-[#7C3AED] border-t-transparent animate-spin" />
          <p className="text-[#A78BFA] text-sm">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <DashboardContext.Provider value={{ user, setUser, unread }}>
      <div className="min-h-screen bg-[#0F0A1E] flex font-sans">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex w-[280px] flex-shrink-0 h-screen sticky top-0">
          <div className="w-full">
            <Sidebar user={user} unread={unread} />
          </div>
        </aside>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSidebarOpen(false)}
                className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              />
              <motion.aside
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed left-0 top-0 bottom-0 w-[280px] z-50 lg:hidden"
              >
                <Sidebar
                  user={user}
                  unread={unread}
                  isMobile
                  onClose={() => setSidebarOpen(false)}
                />
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Bar */}
          <header className="sticky top-0 z-30 bg-[#0F0A1E]/80 backdrop-blur-md border-b border-[rgba(124,58,237,0.15)] px-4 lg:px-6 py-3 flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-[#A78BFA] hover:text-white transition"
            >
              <Menu size={22} />
            </button>
            <div className="flex-1">
              <h1 className="text-white font-semibold text-lg">{getPageTitle(pathname)}</h1>
            </div>
            <div className="flex items-center gap-3">
              {/* Notification Bell */}
              <div className="relative" ref={notifRef}>
                <button
                  onClick={() => setNotifOpen((o) => !o)}
                  className={`w-9 h-9 rounded-xl bg-[#1A1035] border flex items-center justify-center text-[#A78BFA] hover:border-[#7C3AED] transition ${notifOpen ? "border-[#7C3AED]" : "border-[rgba(124,58,237,0.3)]"}`}
                >
                  <Bell size={16} className={totalUnread > 0 ? "animate-[wiggle_0.5s_ease-in-out]" : ""} />
                </button>
                {totalUnread > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 bg-[#0084FF] text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-[#0F0A1E]">
                    {totalUnread > 99 ? "99+" : totalUnread}
                  </span>
                )}
                <AnimatePresence>
                  {notifOpen && (
                    <NotificationDropdown
                      unread={unread}
                      onClose={() => setNotifOpen(false)}
                    />
                  )}
                </AnimatePresence>
              </div>
              {/* User name (desktop) */}
              <div className="hidden sm:flex items-center gap-2 text-sm text-[#C4B5FD]">
                <span className="font-medium">{user?.name}</span>
                <ChevronRight size={14} className="text-[#6B7280]" />
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-4 lg:p-6">
            {children}
          </main>
        </div>

        {/* Floating Chat Panel */}
        <ChatPanel />
      </div>
    </DashboardContext.Provider>
  );
}
