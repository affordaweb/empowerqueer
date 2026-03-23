"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart, MessageCircle, ChevronLeft, ChevronRight,
  Send, Trash2, Calendar, GraduationCap, BookOpen,
  Briefcase, MapPin, BookHeart, MessageSquare, Rss, Users,
} from "lucide-react";
import { useDashboard } from "../layout";

interface Comment {
  id: string;
  content: string;
  createdAt: string;
  user: { id: string; name: string; photoUrl: string | null };
}

interface FeedItem {
  id: string;
  type: string;
  data: Record<string, unknown>;
  publishedAt: string;
  approvedBy?: string;
  likeCount: number;
  likedByMe: boolean;
  commentCount: number;
  comments: Comment[];
  postedBy?: { id: string; name: string; photoUrl: string | null };
}

const TYPE_META: Record<string, { label: string; icon: React.ElementType; color: string; bg: string }> = {
  EVENT:       { label: "Event",       icon: Calendar,      color: "text-violet-400",  bg: "bg-violet-500/15" },
  TRAINING:    { label: "Training",    icon: GraduationCap, color: "text-pink-400",    bg: "bg-pink-500/15" },
  RESOURCE:    { label: "Resource",    icon: BookOpen,      color: "text-blue-400",    bg: "bg-blue-500/15" },
  OPPORTUNITY: { label: "Opportunity", icon: Briefcase,     color: "text-amber-400",   bg: "bg-amber-500/15" },
  DIRECTORY:   { label: "Directory",   icon: MapPin,        color: "text-emerald-400", bg: "bg-emerald-500/15" },
  STORY:       { label: "Story",       icon: BookHeart,     color: "text-rose-400",    bg: "bg-rose-500/15" },
  CONTACT:     { label: "Contact",     icon: MessageSquare, color: "text-cyan-400",    bg: "bg-cyan-500/15" },
  STATUS:      { label: "Status",      icon: Users,         color: "text-fuchsia-400", bg: "bg-fuchsia-500/15" },
};

function getTitle(item: FeedItem): string {
  const d = item.data;
  return (d.title || d.name || d.subject || d.eventName || `${item.type.charAt(0) + item.type.slice(1).toLowerCase()} Submission`) as string;
}

function getDescription(item: FeedItem): string {
  const d = item.data;
  return (d.description || d.message || d.content || d.details || d.summary || "") as string;
}

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

function StatusCard({ item }: { item: FeedItem }) {
  const poster = item.postedBy;
  const note = item.data.note as string;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1A1035] border border-[rgba(236,72,153,0.25)] rounded-2xl overflow-hidden"
    >
      <div className="flex items-start gap-3 px-5 py-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center overflow-hidden flex-shrink-0">
          {poster?.photoUrl ? (
            <img src={poster.photoUrl} alt={poster.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-white text-sm font-bold">{initials(poster?.name ?? "U")}</span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <p className="text-white font-semibold text-sm">{poster?.name ?? "Team Member"}</p>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-fuchsia-500/15 text-fuchsia-400">Status</span>
            <span className="text-[#6B7280] text-[11px]">{timeAgo(item.publishedAt)}</span>
          </div>
          <p className="text-[#C4B5FD] text-sm leading-relaxed">{note}</p>
        </div>
      </div>
    </motion.div>
  );
}

function FeedCard({ item, currentUserId, onLike, onComment, onDeleteComment }: {
  item: FeedItem;
  currentUserId: string;
  onLike: (id: string) => void;
  onComment: (id: string, text: string) => void;
  onDeleteComment: (submissionId: string, commentId: string) => void;
}) {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const meta = TYPE_META[item.type] || TYPE_META.EVENT;
  const Icon = meta.icon;
  const title = getTitle(item);
  const desc = getDescription(item);

  const handleComment = async () => {
    if (!commentText.trim() || submitting) return;
    setSubmitting(true);
    await onComment(item.id, commentText.trim());
    setCommentText("");
    setSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1A1035] border border-[rgba(124,58,237,0.25)] rounded-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-5 pt-4 pb-3">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${meta.bg}`}>
          <Icon size={17} className={meta.color} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm truncate">{title}</p>
          <div className="flex items-center gap-2 mt-0.5">
            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${meta.bg} ${meta.color}`}>
              {meta.label}
            </span>
            <span className="text-[#6B7280] text-[11px]">
              {item.publishedAt ? timeAgo(item.publishedAt) : ""}
            </span>
          </div>
        </div>
        <span className="flex-shrink-0 text-[11px] bg-emerald-500/15 text-emerald-400 px-2 py-0.5 rounded-full font-semibold">
          ✓ Approved
        </span>
      </div>

      {/* Body */}
      {desc && (
        <div className="px-5 pb-3">
          <p className="text-[#C4B5FD] text-sm leading-relaxed line-clamp-3">{desc}</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-4 px-5 py-3 border-t border-[rgba(124,58,237,0.12)]">
        <button
          onClick={() => onLike(item.id)}
          className={`flex items-center gap-1.5 text-sm font-medium transition ${
            item.likedByMe ? "text-pink-400" : "text-[#6B7280] hover:text-pink-400"
          }`}
        >
          <Heart size={16} className={item.likedByMe ? "fill-pink-400" : ""} />
          <span>{item.likeCount}</span>
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-1.5 text-sm font-medium text-[#6B7280] hover:text-[#A78BFA] transition"
        >
          <MessageCircle size={16} />
          <span>{item.commentCount}</span>
        </button>
      </div>

      {/* Comments */}
      <AnimatePresence>
        {showComments && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-[rgba(124,58,237,0.12)]"
          >
            <div className="px-5 py-3 space-y-3 max-h-64 overflow-y-auto">
              {item.comments.length === 0 && (
                <p className="text-[#6B7280] text-xs text-center py-2">No comments yet. Be the first!</p>
              )}
              {item.comments.map((c) => (
                <div key={c.id} className="flex gap-2.5 group">
                  <div className="w-7 h-7 rounded-full bg-[#7C3AED]/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {c.user.photoUrl ? (
                      <img src={c.user.photoUrl} alt={c.user.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-[#A78BFA] text-[10px] font-bold">{initials(c.user.name)}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="bg-[#0F0A1E] rounded-xl px-3 py-2 border border-[rgba(124,58,237,0.15)]">
                      <p className="text-[#A78BFA] text-[11px] font-semibold mb-0.5">{c.user.name}</p>
                      <p className="text-[#C4B5FD] text-sm">{c.content}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-1 px-1">
                      <span className="text-[#4B4568] text-[10px]">{timeAgo(c.createdAt)}</span>
                      {(c.user.id === currentUserId) && (
                        <button
                          onClick={() => onDeleteComment(item.id, c.id)}
                          className="text-[#4B4568] hover:text-red-400 transition opacity-0 group-hover:opacity-100"
                        >
                          <Trash2 size={11} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Comment input */}
            <div className="flex items-center gap-2 px-5 pb-4 pt-1">
              <input
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleComment()}
                placeholder="Write a comment…"
                maxLength={500}
                className="flex-1 bg-[#0F0A1E] border border-[rgba(124,58,237,0.3)] text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#7C3AED] transition placeholder:text-[#4B4568]"
              />
              <button
                onClick={handleComment}
                disabled={!commentText.trim() || submitting}
                className="w-8 h-8 bg-gradient-to-br from-[#7C3AED] to-[#EC4899] rounded-xl flex items-center justify-center flex-shrink-0 disabled:opacity-40 hover:opacity-90 transition"
              >
                <Send size={13} className="text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FeedPage() {
  const { user } = useDashboard();
  const [feed, setFeed] = useState<FeedItem[]>([]);
  const [statusPosts, setStatusPosts] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchFeed = useCallback(async (p = 1) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/feed?page=${p}`);
      const data = await res.json();
      setFeed(data.feed || []);
      setStatusPosts(data.statusPosts || []);
      setPages(data.pagination?.pages || 1);
      setTotal(data.pagination?.total || 0);
    } catch { /* ignore */ }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchFeed(page); }, [page, fetchFeed]);

  const handleLike = async (id: string) => {
    const res = await fetch("/api/feed/like", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ submissionId: id }),
    });
    if (!res.ok) return;
    const { liked, likeCount } = await res.json();
    setFeed((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, likedByMe: liked, likeCount } : item
      )
    );
  };

  const handleComment = async (id: string, content: string) => {
    const res = await fetch("/api/feed/comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ submissionId: id, content }),
    });
    if (!res.ok) return;
    const { comment } = await res.json();
    setFeed((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, comments: [...item.comments, comment], commentCount: item.commentCount + 1 }
          : item
      )
    );
  };

  const handleDeleteComment = async (submissionId: string, commentId: string) => {
    const res = await fetch(`/api/feed/comment/${commentId}`, { method: "DELETE" });
    if (!res.ok) return;
    setFeed((prev) =>
      prev.map((item) =>
        item.id === submissionId
          ? {
              ...item,
              comments: item.comments.filter((c) => c.id !== commentId),
              commentCount: item.commentCount - 1,
            }
          : item
      )
    );
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED]/30 to-[#EC4899]/20 flex items-center justify-center">
          <Rss size={20} className="text-[#A78BFA]" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Activity Feed</h1>
          <p className="text-[#A78BFA] text-sm">{total} approved items · Like and comment on content</p>
        </div>
      </div>

      {/* Feed */}
      {loading ? (
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-[#1A1035] border border-[rgba(124,58,237,0.2)] rounded-2xl p-5 space-y-3 animate-pulse">
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#7C3AED]/10" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-[#7C3AED]/10 rounded w-2/3" />
                  <div className="h-3 bg-[#7C3AED]/10 rounded w-1/3" />
                </div>
              </div>
              <div className="h-3 bg-[#7C3AED]/10 rounded w-full" />
              <div className="h-3 bg-[#7C3AED]/10 rounded w-4/5" />
            </div>
          ))}
        </div>
      ) : feed.length === 0 && statusPosts.length === 0 ? (
        <div className="bg-[#1A1035] border border-[rgba(124,58,237,0.2)] rounded-2xl p-12 text-center">
          <Rss size={40} className="text-[#4B4568] mx-auto mb-3" />
          <p className="text-[#C4B5FD] font-semibold">No approved content yet</p>
          <p className="text-[#6B7280] text-sm mt-1">Content will appear here once submissions are approved.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {[...feed, ...statusPosts]
            .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
            .map((item) =>
              item.type === "STATUS" ? (
                <StatusCard key={item.id} item={item} />
              ) : (
                <FeedCard
                  key={item.id}
                  item={item}
                  currentUserId={user?.id || ""}
                  onLike={handleLike}
                  onComment={handleComment}
                  onDeleteComment={handleDeleteComment}
                />
              )
            )}
        </div>
      )}

      {/* Pagination */}
      {pages > 1 && (
        <div className="flex items-center justify-between py-2">
          <button
            onClick={() => { setPage((p) => Math.max(1, p - 1)); }}
            disabled={page === 1}
            className="flex items-center gap-1 text-[#A78BFA] text-sm disabled:opacity-40 hover:text-white transition"
          >
            <ChevronLeft size={16} /> Previous
          </button>
          <span className="text-[#6B7280] text-sm">Page {page} of {pages}</span>
          <button
            onClick={() => { setPage((p) => Math.min(pages, p + 1)); }}
            disabled={page === pages}
            className="flex items-center gap-1 text-[#A78BFA] text-sm disabled:opacity-40 hover:text-white transition"
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
