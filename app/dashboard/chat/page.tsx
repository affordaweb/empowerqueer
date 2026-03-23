"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { MessagesSquare, Send, User, Clock, Circle, Trash2 } from "lucide-react";
import { useDashboard } from "../layout";

interface VisitorMessage {
  id: string;
  senderType: "VISITOR" | "ADMIN";
  message: string;
  isRead: boolean;
  createdAt: string;
}

interface Conversation {
  id: string;
  sessionId: string;
  visitorName: string;
  createdAt: string;
  updatedAt: string;
  messages: VisitorMessage[];
  _count: { messages: number };
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

export default function ChatPage() {
  const { user } = useDashboard();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [messages, setMessages] = useState<VisitorMessage[]>([]);
  const [reply, setReply] = useState("");
  const [sending, setSending] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const pollRef = useRef<NodeJS.Timeout | null>(null);

  const fetchConversations = useCallback(async () => {
    try {
      const r = await fetch("/api/admin/visitor-chat");
      const data = await r.json();
      setConversations(data.conversations ?? []);
    } catch {}
    setLoading(false);
  }, []);

  const fetchMessages = useCallback(async (id: string) => {
    try {
      const r = await fetch(`/api/admin/visitor-chat/${id}`);
      const data = await r.json();
      if (data.conversation) {
        setMessages(data.conversation.messages ?? []);
        // update unread to 0 in conversation list
        setConversations((prev) =>
          prev.map((c) => (c.id === id ? { ...c, _count: { messages: 0 } } : c))
        );
      }
    } catch {}
  }, []);

  useEffect(() => {
    fetchConversations();
    pollRef.current = setInterval(fetchConversations, 5000);
    return () => { if (pollRef.current) clearInterval(pollRef.current); };
  }, [fetchConversations]);

  useEffect(() => {
    if (!activeId) return;
    fetchMessages(activeId);
    const t = setInterval(() => fetchMessages(activeId), 3000);
    return () => clearInterval(t);
  }, [activeId, fetchMessages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleReply(e: React.FormEvent) {
    e.preventDefault();
    if (!reply.trim() || !activeId || sending) return;
    setSending(true);
    try {
      const r = await fetch(`/api/admin/visitor-chat/${activeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: reply.trim() }),
      });
      if (r.ok) {
        setReply("");
        fetchMessages(activeId);
      }
    } finally {
      setSending(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this conversation and all messages? This cannot be undone.")) return;
    setDeleting(id);
    try {
      await fetch(`/api/admin/visitor-chat/${id}`, { method: "DELETE" });
      setConversations((prev) => prev.filter((c) => c.id !== id));
      if (activeId === id) { setActiveId(null); setMessages([]); }
    } finally {
      setDeleting(null);
    }
  }

  const activeConvo = conversations.find((c) => c.id === activeId);

  return (
    <div className="flex h-[calc(100vh-120px)] rounded-2xl overflow-hidden border border-[rgba(124,58,237,0.2)] bg-[#1A1035]">

      {/* Left — Conversation list */}
      <div className="w-[300px] flex-shrink-0 border-r border-[rgba(124,58,237,0.2)] flex flex-col">
        <div className="px-4 py-4 border-b border-[rgba(124,58,237,0.15)]">
          <p className="text-white font-semibold text-sm">Visitor Conversations</p>
          <p className="text-[#6B7280] text-xs mt-0.5">{conversations.length} total</p>
        </div>

        <div className="flex-1 overflow-y-auto">
          {loading ? (
            <div className="flex items-center justify-center h-32">
              <div className="w-6 h-6 border-2 border-[#7C3AED] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : conversations.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 gap-3 text-center px-4">
              <MessagesSquare size={32} className="text-[#6B7280]" />
              <p className="text-[#6B7280] text-sm">No visitor chats yet</p>
            </div>
          ) : (
            conversations.map((c) => {
              const lastMsg = c.messages[0];
              const isActive = c.id === activeId;
              return (
                <div
                  key={c.id}
                  className={`relative group border-b border-[rgba(124,58,237,0.1)] transition-all ${
                    isActive
                      ? "bg-[rgba(124,58,237,0.2)] border-l-2 border-l-[#7C3AED]"
                      : "hover:bg-[rgba(124,58,237,0.08)]"
                  }`}
                >
                  <button
                    onClick={() => setActiveId(c.id)}
                    className="w-full text-left px-4 py-3 pr-10"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center flex-shrink-0">
                        <User size={13} className="text-white" />
                      </div>
                      <span className="text-white text-sm font-medium truncate flex-1">{c.visitorName}</span>
                      {c._count.messages > 0 && (
                        <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                          {c._count.messages}
                        </span>
                      )}
                    </div>
                    {lastMsg && (
                      <p className="text-[#6B7280] text-xs truncate pl-9">
                        {lastMsg.senderType === "ADMIN" ? "You: " : ""}{lastMsg.message}
                      </p>
                    )}
                    <p className="text-[#4B5563] text-[10px] pl-9 mt-0.5 flex items-center gap-1">
                      <Clock size={9} /> {timeAgo(c.updatedAt)}
                    </p>
                  </button>
                  <button
                    onClick={() => handleDelete(c.id)}
                    disabled={deleting === c.id}
                    title="Delete conversation"
                    className="absolute top-3 right-2 w-6 h-6 rounded-lg bg-red-500/0 hover:bg-red-500/20 text-[#6B7280] hover:text-red-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition disabled:opacity-40"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Right — Chat window */}
      <div className="flex-1 flex flex-col min-w-0">
        {!activeId ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center p-8">
            <div className="w-16 h-16 rounded-2xl bg-[rgba(124,58,237,0.15)] flex items-center justify-center">
              <MessagesSquare size={30} className="text-[#7C3AED]" />
            </div>
            <p className="text-white font-semibold">Select a conversation</p>
            <p className="text-[#6B7280] text-sm max-w-xs">Choose a visitor conversation from the left to view messages and reply.</p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="px-5 py-4 border-b border-[rgba(124,58,237,0.15)] flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">{activeConvo?.visitorName ?? "Guest"}</p>
                <p className="text-[#6B7280] text-xs flex items-center gap-1">
                  <Circle size={7} className="fill-green-400 text-green-400" /> Active visitor
                </p>
              </div>
              <button
                onClick={() => handleDelete(activeId!)}
                disabled={deleting === activeId}
                title="Delete conversation"
                className="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 flex items-center justify-center transition disabled:opacity-40"
              >
                <Trash2 size={15} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
              {messages.length === 0 ? (
                <div className="text-center text-[#6B7280] text-sm py-8">No messages yet.</div>
              ) : (
                messages.map((msg) => {
                  const isAdmin = msg.senderType === "ADMIN";
                  return (
                    <div key={msg.id} className={`flex ${isAdmin ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[70%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                          isAdmin
                            ? "bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white rounded-br-sm"
                            : "bg-[rgba(124,58,237,0.15)] text-[#E2D9F3] rounded-bl-sm border border-[rgba(124,58,237,0.2)]"
                        }`}
                      >
                        {!isAdmin && (
                          <p className="text-[#A78BFA] text-[10px] font-semibold mb-1">{activeConvo?.visitorName}</p>
                        )}
                        <p>{msg.message}</p>
                        <p className={`text-[10px] mt-1 ${isAdmin ? "text-white/60" : "text-[#6B7280]"}`}>
                          {timeAgo(msg.createdAt)}
                        </p>
                      </div>
                    </div>
                  );
                })
              )}
              <div ref={bottomRef} />
            </div>

            {/* Reply input */}
            <div className="px-5 py-4 border-t border-[rgba(124,58,237,0.15)]">
              <form onSubmit={handleReply} className="flex gap-3">
                <input
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  placeholder="Type your reply..."
                  className="flex-1 bg-[rgba(124,58,237,0.1)] border border-[rgba(124,58,237,0.3)] text-white placeholder-[#6B7280] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#7C3AED] transition"
                  maxLength={1000}
                />
                <button
                  type="submit"
                  disabled={!reply.trim() || sending}
                  className="w-10 h-10 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] rounded-xl flex items-center justify-center text-white disabled:opacity-40 transition"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
