"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Loader2 } from "lucide-react";
import { useDashboard } from "../layout";

interface ChatMessage {
  id: string;
  message: string;
  createdAt: string;
  user: { id: string; name: string; photoUrl: string | null };
}

export default function ChatPanel() {
  const { user } = useDashboard();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [lastOpenedAt, setLastOpenedAt] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchMessages = useCallback(async () => {
    try {
      const res = await fetch("/api/chat");
      if (!res.ok) return;
      const data = await res.json();
      setMessages(data.messages || []);
    } catch {
      // ignore
    }
  }, []);

  // Poll for new messages when open
  useEffect(() => {
    if (open) {
      fetchMessages();
      pollRef.current = setInterval(fetchMessages, 3000);
      // Reset unread count on open
      const now = new Date().toISOString();
      setLastOpenedAt(now);
      localStorage.setItem("chat_last_opened", now);
      setUnreadCount(0);
    } else {
      if (pollRef.current) clearInterval(pollRef.current);
    }
    return () => { if (pollRef.current) clearInterval(pollRef.current); };
  }, [open, fetchMessages]);

  // Calculate unread count when closed
  useEffect(() => {
    if (!open) {
      const saved = localStorage.getItem("chat_last_opened");
      if (saved && messages.length > 0) {
        const count = messages.filter(
          (m) => m.user.id !== user?.id && m.createdAt > saved
        ).length;
        setUnreadCount(count);
      }
    }
  }, [messages, open, user]);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const sendMessage = async () => {
    if (!text.trim() || sending) return;
    setSending(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text.trim() }),
      });
      if (res.ok) {
        setText("");
        await fetchMessages();
      }
    } catch {
      // ignore
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  function initials(name: string) {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  }

  function formatTime(iso: string) {
    return new Date(iso).toLocaleTimeString("en-PH", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-[#7C3AED] to-[#EC4899] rounded-full flex items-center justify-center shadow-lg shadow-[#7C3AED]/30 hover:opacity-90 transition z-50"
        aria-label="Open chat"
      >
        <MessageSquare size={22} className="text-white" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs font-bold flex items-center justify-center">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 h-[420px] bg-[#1A1035] border border-[rgba(124,58,237,0.3)] rounded-2xl shadow-2xl shadow-black/50 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(124,58,237,0.2)] bg-gradient-to-r from-[#7C3AED]/20 to-[#EC4899]/10">
              <div>
                <p className="text-white text-sm font-semibold">Team Chat</p>
                <p className="text-[#A78BFA] text-xs">{messages.length} messages</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-[#6B7280] hover:text-white transition p-1 rounded-lg hover:bg-white/10"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {messages.length === 0 && (
                <div className="flex items-center justify-center h-full">
                  <p className="text-[#6B7280] text-sm text-center">
                    No messages yet.<br />Start the conversation!
                  </p>
                </div>
              )}
              {messages.map((msg) => {
                const isOwn = msg.user.id === user?.id;
                return (
                  <div key={msg.id} className={`flex gap-2 ${isOwn ? "flex-row-reverse" : "flex-row"}`}>
                    {/* Avatar */}
                    <div className="flex-shrink-0 w-7 h-7 rounded-full overflow-hidden bg-[#7C3AED]/30 flex items-center justify-center">
                      {msg.user.photoUrl ? (
                        <img src={msg.user.photoUrl} alt={msg.user.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-[#A78BFA] text-[10px] font-bold">{initials(msg.user.name)}</span>
                      )}
                    </div>
                    {/* Bubble */}
                    <div className={`max-w-[200px] ${isOwn ? "items-end" : "items-start"} flex flex-col gap-0.5`}>
                      {!isOwn && (
                        <span className="text-[#6B7280] text-[10px] px-1">{msg.user.name}</span>
                      )}
                      <div className={`px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                        isOwn
                          ? "bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] text-white rounded-tr-sm"
                          : "bg-[#0F0A1E] text-[#C4B5FD] rounded-tl-sm border border-[rgba(124,58,237,0.2)]"
                      }`}>
                        {msg.message}
                      </div>
                      <span className="text-[#4B4568] text-[10px] px-1">{formatTime(msg.createdAt)}</span>
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 px-3 py-3 border-t border-[rgba(124,58,237,0.2)]">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message…"
                maxLength={500}
                className="flex-1 bg-[#0F0A1E] border border-[rgba(124,58,237,0.3)] text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#7C3AED] transition placeholder:text-[#4B4568]"
              />
              <button
                onClick={sendMessage}
                disabled={sending || !text.trim()}
                className="w-9 h-9 bg-gradient-to-br from-[#7C3AED] to-[#EC4899] rounded-xl flex items-center justify-center flex-shrink-0 disabled:opacity-50 hover:opacity-90 transition"
              >
                {sending ? (
                  <Loader2 size={14} className="animate-spin text-white" />
                ) : (
                  <Send size={14} className="text-white" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
