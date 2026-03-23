"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Loader2, Users, Circle, Plus, ArrowLeft, Hash } from "lucide-react";
import { useDashboard } from "../layout";

interface ChatMessage {
  id: string;
  message: string;
  createdAt: string;
  user: { id: string; name: string; photoUrl: string | null };
}

interface OnlineUser {
  id: string;
  name: string;
  photoUrl: string | null;
  role: string;
  note: string | null;
  lastSeen: string;
}

interface ChatGroup {
  id: string;
  name: string;
  createdBy: string;
  createdAt: string;
  memberCount: number;
  isMember: boolean;
  messageCount: number;
}

interface GroupMessage {
  id: string;
  message: string;
  createdAt: string;
  user: { id: string; name: string; photoUrl: string | null };
}

type Tab = "chat" | "online" | "groups";

export default function ChatPanel() {
  const { user } = useDashboard();
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("chat");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<OnlineUser[]>([]);
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatPollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const presencePollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Groups state
  const [groups, setGroups] = useState<ChatGroup[]>([]);
  const [activeGroup, setActiveGroup] = useState<ChatGroup | null>(null);
  const [groupMessages, setGroupMessages] = useState<GroupMessage[]>([]);
  const [groupText, setGroupText] = useState("");
  const [groupSending, setGroupSending] = useState(false);
  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [creatingGroup, setCreatingGroup] = useState(false);
  const groupMessagesEndRef = useRef<HTMLDivElement>(null);
  const groupPollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchMessages = useCallback(async () => {
    try {
      const res = await fetch("/api/chat");
      if (!res.ok) return;
      const data = await res.json();
      setMessages(data.messages || []);
    } catch { /* ignore */ }
  }, []);

  const fetchPresence = useCallback(async () => {
    try {
      const res = await fetch("/api/presence");
      if (!res.ok) return;
      const data = await res.json();
      setOnlineUsers(data.users || []);
    } catch { /* ignore */ }
  }, []);

  const fetchGroups = useCallback(async () => {
    try {
      const res = await fetch("/api/groups");
      if (!res.ok) return;
      const data = await res.json();
      setGroups(data.groups || []);
    } catch { /* ignore */ }
  }, []);

  const fetchGroupMessages = useCallback(async (groupId: string) => {
    try {
      const res = await fetch(`/api/groups/${groupId}/messages`);
      if (!res.ok) return;
      const data = await res.json();
      setGroupMessages(data.messages || []);
    } catch { /* ignore */ }
  }, []);

  // Ping presence every 2 minutes even when panel is closed
  useEffect(() => {
    fetchPresence();
    const t = setInterval(fetchPresence, 120_000);
    return () => clearInterval(t);
  }, [fetchPresence]);

  // When panel opens
  useEffect(() => {
    if (open) {
      fetchMessages();
      fetchPresence();
      fetchGroups();
      chatPollRef.current = setInterval(fetchMessages, 3000);
      presencePollRef.current = setInterval(fetchPresence, 30_000);
      const now = new Date().toISOString();
      localStorage.setItem("chat_last_opened", now);
      setUnreadCount(0);
    } else {
      if (chatPollRef.current) clearInterval(chatPollRef.current);
      if (presencePollRef.current) clearInterval(presencePollRef.current);
    }
    return () => {
      if (chatPollRef.current) clearInterval(chatPollRef.current);
      if (presencePollRef.current) clearInterval(presencePollRef.current);
    };
  }, [open, fetchMessages, fetchPresence, fetchGroups]);

  // Poll active group messages
  useEffect(() => {
    if (open && activeGroup) {
      fetchGroupMessages(activeGroup.id);
      groupPollRef.current = setInterval(() => fetchGroupMessages(activeGroup.id), 3000);
    } else {
      if (groupPollRef.current) clearInterval(groupPollRef.current);
    }
    return () => {
      if (groupPollRef.current) clearInterval(groupPollRef.current);
    };
  }, [open, activeGroup, fetchGroupMessages]);

  // Scroll group messages to bottom
  useEffect(() => {
    if (activeGroup) {
      groupMessagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [groupMessages, activeGroup]);

  // Track unread when closed
  useEffect(() => {
    if (!open && messages.length > 0) {
      const saved = localStorage.getItem("chat_last_opened");
      if (saved) {
        const count = messages.filter(
          (m) => m.user.id !== user?.id && m.createdAt > saved
        ).length;
        setUnreadCount(count);
      }
    }
  }, [messages, open, user]);

  // Scroll to bottom
  useEffect(() => {
    if (open && tab === "chat") {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open, tab]);

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
    } catch { /* ignore */ }
    finally { setSending(false); }
  };

  const sendGroupMessage = async () => {
    if (!groupText.trim() || groupSending || !activeGroup) return;
    setGroupSending(true);
    try {
      const res = await fetch(`/api/groups/${activeGroup.id}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: groupText.trim() }),
      });
      if (res.ok) {
        setGroupText("");
        await fetchGroupMessages(activeGroup.id);
      }
    } catch { /* ignore */ }
    finally { setGroupSending(false); }
  };

  const createGroup = async () => {
    if (!newGroupName.trim() || creatingGroup) return;
    setCreatingGroup(true);
    try {
      const res = await fetch("/api/groups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newGroupName.trim() }),
      });
      if (res.ok) {
        const data = await res.json();
        setNewGroupName("");
        setShowCreateGroup(false);
        await fetchGroups();
        setActiveGroup({ ...data.group, memberCount: 1, isMember: true, messageCount: 0 });
      }
    } catch { /* ignore */ }
    finally { setCreatingGroup(false); }
  };

  const joinGroup = async (group: ChatGroup) => {
    await fetch(`/api/groups/${group.id}/join`, { method: "POST" });
    await fetchGroups();
    setActiveGroup({ ...group, isMember: true });
  };

  function initials(name: string) {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  }

  function formatTime(iso: string) {
    return new Date(iso).toLocaleTimeString("en-PH", { hour: "2-digit", minute: "2-digit" });
  }

  function lastSeenLabel(iso: string) {
    const diff = Date.now() - new Date(iso).getTime();
    const m = Math.floor(diff / 60000);
    if (m < 1) return "Active now";
    if (m < 5) return `Active ${m}m ago`;
    return `Active ${m}m ago`;
  }

  const otherOnline = onlineUsers.filter((u) => u.id !== user?.id);

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
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs font-bold flex items-center justify-center border-2 border-[#0F0A1E]">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
        {/* Online indicator */}
        {onlineUsers.length > 1 && (
          <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#0F0A1E] flex items-center justify-center">
            <span className="text-white text-[8px] font-bold">{onlineUsers.length}</span>
          </span>
        )}
      </button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 h-[460px] bg-[#1A1035] border border-[rgba(124,58,237,0.3)] rounded-2xl shadow-2xl shadow-black/50 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(124,58,237,0.2)] bg-gradient-to-r from-[#7C3AED]/20 to-[#EC4899]/10 flex-shrink-0">
              <div className="flex gap-1">
                <button
                  onClick={() => setTab("chat")}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                    tab === "chat"
                      ? "bg-[#7C3AED]/30 text-white"
                      : "text-[#6B7280] hover:text-[#A78BFA]"
                  }`}
                >
                  <MessageSquare size={13} /> Chat
                  {unreadCount > 0 && tab !== "chat" && (
                    <span className="w-4 h-4 bg-red-500 rounded-full text-white text-[9px] font-bold flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => { setTab("groups"); setActiveGroup(null); setShowCreateGroup(false); }}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                    tab === "groups"
                      ? "bg-[#7C3AED]/30 text-white"
                      : "text-[#6B7280] hover:text-[#A78BFA]"
                  }`}
                >
                  <Hash size={13} /> Groups
                  {groups.length > 0 && (
                    <span className="w-4 h-4 bg-[#7C3AED]/60 rounded-full text-white text-[9px] font-bold flex items-center justify-center">
                      {groups.length}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setTab("online")}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                    tab === "online"
                      ? "bg-[#7C3AED]/30 text-white"
                      : "text-[#6B7280] hover:text-[#A78BFA]"
                  }`}
                >
                  <Users size={13} />
                  <span className="w-4 h-4 bg-emerald-500/80 rounded-full text-white text-[9px] font-bold flex items-center justify-center">
                    {onlineUsers.length}
                  </span>
                </button>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-[#6B7280] hover:text-white transition p-1 rounded-lg hover:bg-white/10"
              >
                <X size={15} />
              </button>
            </div>

            {/* Chat Tab */}
            {tab === "chat" && (
              <>
                <div className="flex-1 overflow-y-auto p-3 space-y-3">
                  {messages.length === 0 && (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-[#6B7280] text-sm text-center">No messages yet.<br />Start the conversation!</p>
                    </div>
                  )}
                  {messages.map((msg) => {
                    const isOwn = msg.user.id === user?.id;
                    return (
                      <div key={msg.id} className={`flex gap-2 ${isOwn ? "flex-row-reverse" : "flex-row"}`}>
                        <div className="flex-shrink-0 w-7 h-7 rounded-full overflow-hidden bg-[#7C3AED]/30 flex items-center justify-center">
                          {msg.user.photoUrl ? (
                            <img src={msg.user.photoUrl} alt={msg.user.name} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-[#A78BFA] text-[10px] font-bold">{initials(msg.user.name)}</span>
                          )}
                        </div>
                        <div className={`max-w-[200px] flex flex-col gap-0.5 ${isOwn ? "items-end" : "items-start"}`}>
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

                <div className="flex items-center gap-2 px-3 py-3 border-t border-[rgba(124,58,237,0.2)] flex-shrink-0">
                  <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
                    placeholder="Type a message…"
                    maxLength={500}
                    className="flex-1 bg-[#0F0A1E] border border-[rgba(124,58,237,0.3)] text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#7C3AED] transition placeholder:text-[#4B4568]"
                  />
                  <button
                    onClick={sendMessage}
                    disabled={sending || !text.trim()}
                    className="w-9 h-9 bg-gradient-to-br from-[#7C3AED] to-[#EC4899] rounded-xl flex items-center justify-center flex-shrink-0 disabled:opacity-50 hover:opacity-90 transition"
                  >
                    {sending ? <Loader2 size={14} className="animate-spin text-white" /> : <Send size={14} className="text-white" />}
                  </button>
                </div>
              </>
            )}

            {/* Groups Tab */}
            {tab === "groups" && !activeGroup && !showCreateGroup && (
              <div className="flex-1 overflow-y-auto p-3 space-y-2 flex flex-col">
                <div className="flex items-center justify-between px-1 pb-1">
                  <p className="text-[#6B7280] text-[11px]">{groups.length} group{groups.length !== 1 ? "s" : ""}</p>
                  <button
                    onClick={() => setShowCreateGroup(true)}
                    className="flex items-center gap-1 text-[#A78BFA] hover:text-white text-xs font-semibold transition"
                  >
                    <Plus size={12} /> New Group
                  </button>
                </div>
                {groups.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center gap-3 py-8">
                    <Hash size={32} className="text-[#4B4568]" />
                    <p className="text-[#6B7280] text-sm text-center">No groups yet.<br />Create one to get started!</p>
                    <button
                      onClick={() => setShowCreateGroup(true)}
                      className="flex items-center gap-1.5 bg-[#7C3AED]/20 hover:bg-[#7C3AED]/30 text-[#A78BFA] text-xs font-semibold px-3 py-2 rounded-xl transition"
                    >
                      <Plus size={13} /> Create Group
                    </button>
                  </div>
                ) : (
                  groups.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => setActiveGroup(g)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#0F0A1E] border border-[rgba(124,58,237,0.15)] hover:border-[rgba(124,58,237,0.3)] transition text-left"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#7C3AED]/20 flex items-center justify-center flex-shrink-0">
                        <Hash size={16} className="text-[#A78BFA]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">{g.name}</p>
                        <p className="text-[#6B7280] text-[11px]">{g.memberCount} member{g.memberCount !== 1 ? "s" : ""} · {g.messageCount} message{g.messageCount !== 1 ? "s" : ""}</p>
                      </div>
                      {!g.isMember && (
                        <span className="text-[9px] bg-[#7C3AED]/20 text-[#A78BFA] px-1.5 py-0.5 rounded-full font-semibold flex-shrink-0">Join</span>
                      )}
                    </button>
                  ))
                )}
              </div>
            )}

            {/* Create Group Form */}
            {tab === "groups" && showCreateGroup && (
              <div className="flex-1 p-4 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <button onClick={() => setShowCreateGroup(false)} className="text-[#6B7280] hover:text-white transition">
                    <ArrowLeft size={16} />
                  </button>
                  <p className="text-white font-semibold text-sm">Create Group</p>
                </div>
                <div className="space-y-3">
                  <input
                    value={newGroupName}
                    onChange={(e) => setNewGroupName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && createGroup()}
                    placeholder="Group name…"
                    maxLength={50}
                    className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.3)] text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#7C3AED] transition placeholder:text-[#4B4568]"
                  />
                  <button
                    onClick={createGroup}
                    disabled={!newGroupName.trim() || creatingGroup}
                    className="w-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] text-white text-sm font-semibold rounded-xl py-2.5 flex items-center justify-center gap-2 disabled:opacity-50 hover:opacity-90 transition"
                  >
                    {creatingGroup ? <Loader2 size={14} className="animate-spin" /> : <Plus size={14} />}
                    Create Group
                  </button>
                </div>
              </div>
            )}

            {/* Group Chat View */}
            {tab === "groups" && activeGroup && (
              <>
                <div className="flex items-center gap-2 px-3 py-2 border-b border-[rgba(124,58,237,0.15)] flex-shrink-0">
                  <button onClick={() => { setActiveGroup(null); fetchGroups(); }} className="text-[#6B7280] hover:text-white transition">
                    <ArrowLeft size={15} />
                  </button>
                  <Hash size={13} className="text-[#A78BFA]" />
                  <p className="text-white text-sm font-semibold truncate flex-1">{activeGroup.name}</p>
                  {!activeGroup.isMember && (
                    <button
                      onClick={() => joinGroup(activeGroup)}
                      className="text-[9px] bg-[#7C3AED]/30 text-[#A78BFA] px-2 py-1 rounded-full font-semibold hover:bg-[#7C3AED]/50 transition flex-shrink-0"
                    >
                      Join
                    </button>
                  )}
                </div>
                <div className="flex-1 overflow-y-auto p-3 space-y-3">
                  {groupMessages.length === 0 && (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-[#6B7280] text-sm text-center">No messages yet.<br />Say hello!</p>
                    </div>
                  )}
                  {groupMessages.map((msg) => {
                    const isOwn = msg.user.id === user?.id;
                    return (
                      <div key={msg.id} className={`flex gap-2 ${isOwn ? "flex-row-reverse" : "flex-row"}`}>
                        <div className="flex-shrink-0 w-7 h-7 rounded-full overflow-hidden bg-[#7C3AED]/30 flex items-center justify-center">
                          {msg.user.photoUrl ? (
                            <img src={msg.user.photoUrl} alt={msg.user.name} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-[#A78BFA] text-[10px] font-bold">{initials(msg.user.name)}</span>
                          )}
                        </div>
                        <div className={`max-w-[190px] flex flex-col gap-0.5 ${isOwn ? "items-end" : "items-start"}`}>
                          {!isOwn && <span className="text-[#6B7280] text-[10px] px-1">{msg.user.name}</span>}
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
                  <div ref={groupMessagesEndRef} />
                </div>
                <div className="flex items-center gap-2 px-3 py-3 border-t border-[rgba(124,58,237,0.2)] flex-shrink-0">
                  <input
                    type="text"
                    value={groupText}
                    onChange={(e) => setGroupText(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendGroupMessage(); } }}
                    placeholder="Message group…"
                    maxLength={500}
                    className="flex-1 bg-[#0F0A1E] border border-[rgba(124,58,237,0.3)] text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#7C3AED] transition placeholder:text-[#4B4568]"
                  />
                  <button
                    onClick={sendGroupMessage}
                    disabled={groupSending || !groupText.trim()}
                    className="w-9 h-9 bg-gradient-to-br from-[#7C3AED] to-[#EC4899] rounded-xl flex items-center justify-center flex-shrink-0 disabled:opacity-50 hover:opacity-90 transition"
                  >
                    {groupSending ? <Loader2 size={14} className="animate-spin text-white" /> : <Send size={14} className="text-white" />}
                  </button>
                </div>
              </>
            )}

            {/* Online Tab */}
            {tab === "online" && (
              <div className="flex-1 overflow-y-auto p-3 space-y-2">
                {onlineUsers.length === 0 ? (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-[#6B7280] text-sm text-center">No one is online right now.</p>
                  </div>
                ) : (
                  <>
                    <p className="text-[#6B7280] text-[11px] px-1 pb-1">{onlineUsers.length} member{onlineUsers.length !== 1 ? "s" : ""} online</p>
                    {onlineUsers.map((u) => {
                      const isMe = u.id === user?.id;
                      return (
                        <div
                          key={u.id}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#0F0A1E] border border-[rgba(124,58,237,0.15)] hover:border-[rgba(124,58,237,0.3)] transition"
                        >
                          <div className="relative flex-shrink-0">
                            <div className="w-9 h-9 rounded-full overflow-hidden bg-[#7C3AED]/20 flex items-center justify-center">
                              {u.photoUrl ? (
                                <img src={u.photoUrl} alt={u.name} className="w-full h-full object-cover" />
                              ) : (
                                <span className="text-[#A78BFA] text-sm font-bold">{initials(u.name)}</span>
                              )}
                            </div>
                            <Circle
                              size={10}
                              className="absolute -bottom-0.5 -right-0.5 fill-emerald-400 text-emerald-400"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <p className="text-white text-sm font-medium truncate">
                                {u.name} {isMe && <span className="text-[#6B7280] font-normal">(you)</span>}
                              </p>
                              {u.role === "ADMIN" && (
                                <span className="text-[9px] bg-[#7C3AED]/30 text-[#A78BFA] px-1.5 py-0.5 rounded-full font-semibold flex-shrink-0">
                                  ADMIN
                                </span>
                              )}
                            </div>
                            {u.note ? (
                              <p className="text-[#6B7280] text-[11px] truncate">{u.note}</p>
                            ) : (
                              <p className="text-emerald-500/70 text-[11px]">{lastSeenLabel(u.lastSeen!)}</p>
                            )}
                          </div>
                          {!isMe && (
                            <button
                              onClick={() => setTab("chat")}
                              title="Open chat"
                              className="text-[#6B7280] hover:text-[#A78BFA] transition flex-shrink-0"
                            >
                              <MessageSquare size={15} />
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
