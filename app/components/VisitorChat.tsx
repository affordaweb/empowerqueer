"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { getRecaptchaToken } from "@/lib/recaptcha";

interface Message {
  id: string;
  senderType: "VISITOR" | "ADMIN";
  message: string;
  createdAt: string;
}

function getSessionId(): string {
  if (typeof window === "undefined") return "";
  let sid = localStorage.getItem("eq_chat_session");
  if (!sid) {
    sid = Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem("eq_chat_session", sid);
  }
  return sid;
}

function getVisitorName(): string {
  return localStorage.getItem("eq_chat_name") || "";
}

export default function VisitorChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [started, setStarted] = useState(false);
  const [name, setName] = useState("");
  const [nameInput, setNameInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const pollRef = useRef<NodeJS.Timeout | null>(null);

  const sessionId = typeof window !== "undefined" ? getSessionId() : "";

  const fetchMessages = useCallback(async () => {
    if (!sessionId) return;
    try {
      const r = await fetch(`/api/visitor-chat?sessionId=${sessionId}`);
      const d = await r.json();
      if (d.messages) setMessages(d.messages);
    } catch {}
  }, [sessionId]);

  useEffect(() => {
    if (!open) return;
    fetchMessages();
    pollRef.current = setInterval(fetchMessages, 3000);
    return () => { if (pollRef.current) clearInterval(pollRef.current); };
  }, [open, fetchMessages]);

  useEffect(() => {
    const savedName = getVisitorName();
    if (savedName) { setName(savedName); setStarted(true); }
  }, []);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function handleStartChat(e: React.FormEvent) {
    e.preventDefault();
    const n = nameInput.trim() || "Guest";
    localStorage.setItem("eq_chat_name", n);
    setName(n);
    setStarted(true);
  }

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || sending) return;
    setSending(true);
    try {
      const recaptchaToken = await getRecaptchaToken("chat").catch(() => "");
      await fetch("/api/visitor-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, visitorName: name, message: input.trim(), recaptchaToken }),
      });
      setInput("");
      fetchMessages();
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Chat popup — renders above the button */}
      {open && (
        <div className="mb-4 w-[340px] rounded-2xl shadow-2xl overflow-hidden border border-[rgba(124,58,237,0.4)] bg-[#1A0A2E] flex flex-col" style={{ height: "460px" }}>
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#7C3AED] to-[#EC4899]">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle size={16} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold text-sm">Chat with Us</p>
              <p className="text-white/70 text-xs">EmpowerQueer Hub Support</p>
            </div>
          </div>

          {/* Body */}
          {!started ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED]/30 to-[#EC4899]/30 flex items-center justify-center">
                <MessageCircle size={26} className="text-[#A78BFA]" />
              </div>
              <div className="text-center">
                <p className="text-white font-semibold mb-1">Hello! 👋</p>
                <p className="text-[#9CA3AF] text-sm">What&apos;s your name? (optional)</p>
              </div>
              <form onSubmit={handleStartChat} className="w-full space-y-3">
                <input
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder="Your name or leave blank"
                  className="w-full bg-[rgba(124,58,237,0.15)] border border-[rgba(124,58,237,0.3)] text-white placeholder-[#6B7280] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#7C3AED] transition"
                  maxLength={50}
                />
                <button type="submit" className="w-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold py-2.5 rounded-xl text-sm hover:opacity-90 transition">
                  Start Chat
                </button>
              </form>
            </div>
          ) : (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2.5">
                {messages.length === 0 && (
                  <div className="text-center py-6">
                    <p className="text-[#6B7280] text-sm">Hi {name}! 👋</p>
                    <p className="text-[#4B5563] text-xs mt-1">Send a message to start the conversation.</p>
                  </div>
                )}
                {messages.map((msg) => {
                  const isAdmin = msg.senderType === "ADMIN";
                  return (
                    <div key={msg.id} className={`flex ${isAdmin ? "justify-start" : "justify-end"}`}>
                      <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                        isAdmin
                          ? "bg-[rgba(124,58,237,0.2)] text-[#E2D9F3] rounded-bl-sm"
                          : "bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white rounded-br-sm"
                      }`}>
                        {isAdmin && <p className="text-[#A78BFA] text-[10px] font-semibold mb-0.5">Support</p>}
                        <p className="leading-relaxed">{msg.message}</p>
                      </div>
                    </div>
                  );
                })}
                <div ref={bottomRef} />
              </div>

              {/* Input */}
              <div className="px-4 py-3 border-t border-[rgba(124,58,237,0.2)]">
                <form onSubmit={handleSend} className="flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 bg-[rgba(124,58,237,0.15)] border border-[rgba(124,58,237,0.3)] text-white placeholder-[#6B7280] rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#7C3AED] transition"
                    maxLength={1000}
                  />
                  <button type="submit" disabled={!input.trim() || sending} className="w-9 h-9 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] rounded-xl flex items-center justify-center text-white disabled:opacity-40 transition flex-shrink-0">
                    {sending ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      )}

      {/* Floating button — always visible, toggles open/close */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-14 h-14 bg-gradient-to-br from-[#7C3AED] to-[#EC4899] rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
        aria-label="Chat with us"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
