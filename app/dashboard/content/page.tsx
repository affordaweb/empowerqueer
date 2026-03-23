"use client";

import { useEffect, useState, useCallback } from "react";
import { Mic2, ImageIcon, Plus, Pencil, Trash2, Save, X, Check } from "lucide-react";
import { useDashboard } from "../layout";

/* ─── Types ───────────────────────────────────────────────── */
interface Kopisode {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  categoryIds: string[];
  date: string;
  img: string | null;
  published: boolean;
  order: number;
}

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  tags: string[];
  order: number;
}

const CATEGORY_OPTIONS = [
  { id: "lgbtq-issues", label: "LGBTQ+ Issues" },
  { id: "hiv-aids", label: "HIV & AIDS" },
  { id: "advocacy-rights", label: "Advocacy & Rights" },
  { id: "support-resources", label: "Support Resources" },
  { id: "community-voices", label: "Community Voices" },
  { id: "youth-services", label: "Youth Services" },
  { id: "education", label: "Education" },
];

const GALLERY_TAGS = ["Community", "Events", "Pride", "Advocacy", "Training"];

/* ─── Kopisodes Manager ───────────────────────────────────── */
function KopisodesManager({ isAdmin }: { isAdmin: boolean }) {
  const [kopisodes, setKopisodes] = useState<Kopisode[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Kopisode | null>(null);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "", desc: "", tags: "", date: new Date().getFullYear().toString(),
    img: "", categoryIds: [] as string[], published: true,
  });

  const fetch_ = useCallback(async () => {
    const r = await fetch("/api/admin/kopisodes");
    const d = await r.json();
    setKopisodes(d.kopisodes ?? []);
    setLoading(false);
  }, []);

  useEffect(() => { fetch_(); }, [fetch_]);

  function openNew() {
    setEditing(null);
    setForm({ title: "", desc: "", tags: "", date: new Date().getFullYear().toString(), img: "", categoryIds: [], published: true });
    setShowForm(true);
  }

  function openEdit(k: Kopisode) {
    setEditing(k);
    setForm({ title: k.title, desc: k.desc, tags: k.tags.join(", "), date: k.date, img: k.img ?? "", categoryIds: k.categoryIds, published: k.published });
    setShowForm(true);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const body = {
      title: form.title,
      desc: form.desc,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      categoryIds: form.categoryIds,
      date: form.date,
      img: form.img || null,
      published: form.published,
    };
    try {
      if (editing) {
        await fetch(`/api/admin/kopisodes/${editing.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      } else {
        await fetch("/api/admin/kopisodes", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      }
      setShowForm(false);
      fetch_();
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this kopisode?")) return;
    setDeleting(id);
    await fetch(`/api/admin/kopisodes/${id}`, { method: "DELETE" });
    setDeleting(null);
    fetch_();
  }

  async function togglePublished(k: Kopisode) {
    await fetch(`/api/admin/kopisodes/${k.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ published: !k.published }) });
    fetch_();
  }

  const inputCls = "w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.3)] text-white placeholder-[#4B5563] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#7C3AED] transition";

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-white font-semibold">Kopisodes</p>
          <p className="text-[#6B7280] text-xs mt-0.5">{kopisodes.length} episodes</p>
        </div>
        {isAdmin && (
          <button onClick={openNew} className="flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:opacity-90 transition">
            <Plus size={15} /> Add Episode
          </button>
        )}
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-[#0F0A1E] border border-[rgba(124,58,237,0.3)] rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">{editing ? "Edit Episode" : "New Episode"}</h3>
            <button onClick={() => setShowForm(false)} className="text-[#6B7280] hover:text-white"><X size={18} /></button>
          </div>
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-1.5">Title *</label>
              <input required value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} placeholder="Episode title" className={inputCls} />
            </div>
            <div>
              <label className="block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-1.5">Description *</label>
              <textarea required rows={4} value={form.desc} onChange={(e) => setForm((f) => ({ ...f, desc: e.target.value }))} placeholder="Episode description" className={inputCls + " resize-none"} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-1.5">Year</label>
                <input value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} placeholder="2025" className={inputCls} />
              </div>
              <div>
                <label className="block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-1.5">Image Path</label>
                <input value={form.img} onChange={(e) => setForm((f) => ({ ...f, img: e.target.value }))} placeholder="/images/gallery/..." className={inputCls} />
              </div>
            </div>
            <div>
              <label className="block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-1.5">Tags (comma-separated)</label>
              <input value={form.tags} onChange={(e) => setForm((f) => ({ ...f, tags: e.target.value }))} placeholder="HIV & AIDS, Community Voices" className={inputCls} />
            </div>
            <div>
              <label className="block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-2">Categories</label>
              <div className="flex flex-wrap gap-2">
                {CATEGORY_OPTIONS.map((cat) => {
                  const selected = form.categoryIds.includes(cat.id);
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, categoryIds: selected ? f.categoryIds.filter((c) => c !== cat.id) : [...f.categoryIds, cat.id] }))}
                      className={`text-xs px-3 py-1.5 rounded-full border transition ${selected ? "bg-[#7C3AED] text-white border-[#7C3AED]" : "bg-transparent text-[#A78BFA] border-[rgba(124,58,237,0.3)] hover:border-[#7C3AED]"}`}
                    >
                      {selected && <Check size={10} className="inline mr-1" />}{cat.label}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.published} onChange={(e) => setForm((f) => ({ ...f, published: e.target.checked }))} className="w-4 h-4 rounded" />
                <span className="text-[#A78BFA] text-sm">Published</span>
              </label>
            </div>
            <div className="flex gap-3 pt-2">
              <button type="submit" disabled={saving} className="flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 disabled:opacity-50 transition">
                <Save size={14} /> {saving ? "Saving..." : "Save Episode"}
              </button>
              <button type="button" onClick={() => setShowForm(false)} className="text-[#6B7280] hover:text-white text-sm px-4 py-2.5 transition">Cancel</button>
            </div>
          </form>
        </div>
      )}

      {/* List */}
      {loading ? (
        <div className="flex justify-center py-12"><div className="w-8 h-8 border-2 border-[#7C3AED] border-t-transparent rounded-full animate-spin" /></div>
      ) : kopisodes.length === 0 ? (
        <div className="text-center py-16 text-[#6B7280]">
          <Mic2 size={36} className="mx-auto mb-3 opacity-40" />
          <p>No episodes yet. Add your first one above.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {kopisodes.map((k) => (
            <div key={k.id} className="flex items-start gap-4 bg-[#0F0A1E] border border-[rgba(124,58,237,0.2)] rounded-2xl p-4 hover:border-[rgba(124,58,237,0.4)] transition">
              {k.img && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={k.img} alt={k.title} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-white font-semibold text-sm leading-tight">{k.title}</p>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button onClick={() => togglePublished(k)} title={k.published ? "Unpublish" : "Publish"} className={`w-7 h-7 rounded-lg flex items-center justify-center transition ${k.published ? "bg-green-500/20 text-green-400 hover:bg-red-500/20 hover:text-red-400" : "bg-[rgba(124,58,237,0.1)] text-[#6B7280] hover:bg-green-500/20 hover:text-green-400"}`}>
                      {k.published ? <Check size={13} /> : <X size={13} />}
                    </button>
                    <button onClick={() => openEdit(k)} className="w-7 h-7 rounded-lg bg-[rgba(124,58,237,0.1)] text-[#A78BFA] hover:bg-[rgba(124,58,237,0.3)] flex items-center justify-center transition">
                      <Pencil size={13} />
                    </button>
                    <button onClick={() => handleDelete(k.id)} disabled={deleting === k.id} className="w-7 h-7 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 flex items-center justify-center transition disabled:opacity-50">
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
                <p className="text-[#6B7280] text-xs mt-1 line-clamp-2">{k.desc}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[#4B5563] text-[10px]">{k.date}</span>
                  {k.tags.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-[rgba(124,58,237,0.15)] text-[#A78BFA]">{t}</span>
                  ))}
                  {!k.published && <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-400">Unpublished</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Gallery Manager ─────────────────────────────────────── */
function GalleryManager({ isAdmin }: { isAdmin: boolean }) {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [form, setForm] = useState({ src: "", alt: "", tags: [] as string[] });

  const fetch_ = useCallback(async () => {
    const r = await fetch("/api/admin/gallery");
    const d = await r.json();
    setImages(d.images ?? []);
    setLoading(false);
  }, []);

  useEffect(() => { fetch_(); }, [fetch_]);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    await fetch("/api/admin/gallery", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setSaving(false);
    setShowForm(false);
    setForm({ src: "", alt: "", tags: [] });
    fetch_();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this image?")) return;
    setDeleting(id);
    await fetch(`/api/admin/gallery/${id}`, { method: "DELETE" });
    setDeleting(null);
    fetch_();
  }

  const inputCls = "w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.3)] text-white placeholder-[#4B5563] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#7C3AED] transition";

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-white font-semibold">Gallery Images</p>
          <p className="text-[#6B7280] text-xs mt-0.5">{images.length} images in database</p>
        </div>
        {isAdmin && (
          <button onClick={() => setShowForm((s) => !s)} className="flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:opacity-90 transition">
            <Plus size={15} /> Add Image
          </button>
        )}
      </div>

      {showForm && (
        <div className="bg-[#0F0A1E] border border-[rgba(124,58,237,0.3)] rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Add Gallery Image</h3>
            <button onClick={() => setShowForm(false)} className="text-[#6B7280] hover:text-white"><X size={18} /></button>
          </div>
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className="block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-1.5">Image Path *</label>
              <input required value={form.src} onChange={(e) => setForm((f) => ({ ...f, src: e.target.value }))} placeholder="/images/gallery/filename.jpg" className={inputCls} />
            </div>
            <div>
              <label className="block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-1.5">Alt Text</label>
              <input value={form.alt} onChange={(e) => setForm((f) => ({ ...f, alt: e.target.value }))} placeholder="EmpowerQueer Community Moment" className={inputCls} />
            </div>
            <div>
              <label className="block text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-2">Tags</label>
              <div className="flex flex-wrap gap-2">
                {GALLERY_TAGS.map((tag) => {
                  const selected = form.tags.includes(tag);
                  return (
                    <button key={tag} type="button"
                      onClick={() => setForm((f) => ({ ...f, tags: selected ? f.tags.filter((t) => t !== tag) : [...f.tags, tag] }))}
                      className={`text-xs px-3 py-1.5 rounded-full border transition ${selected ? "bg-[#7C3AED] text-white border-[#7C3AED]" : "bg-transparent text-[#A78BFA] border-[rgba(124,58,237,0.3)] hover:border-[#7C3AED]"}`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-3">
              <button type="submit" disabled={saving} className="flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 disabled:opacity-50 transition">
                <Save size={14} /> {saving ? "Saving..." : "Add Image"}
              </button>
              <button type="button" onClick={() => setShowForm(false)} className="text-[#6B7280] hover:text-white text-sm px-4 transition">Cancel</button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-12"><div className="w-8 h-8 border-2 border-[#7C3AED] border-t-transparent rounded-full animate-spin" /></div>
      ) : images.length === 0 ? (
        <div className="text-center py-16 text-[#6B7280]">
          <ImageIcon size={36} className="mx-auto mb-3 opacity-40" />
          <p>No images in database yet.</p>
          <p className="text-xs mt-1">Images added here appear in the gallery page.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((img) => (
            <div key={img.id} className="relative group rounded-xl overflow-hidden border border-[rgba(124,58,237,0.2)] bg-[#0F0A1E]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} className="w-full h-32 object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button onClick={() => handleDelete(img.id)} disabled={deleting === img.id} className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition disabled:opacity-50">
                  <Trash2 size={14} />
                </button>
              </div>
              <div className="p-2">
                <p className="text-[#6B7280] text-[10px] truncate">{img.src.split("/").pop()}</p>
                {img.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {img.tags.map((t) => <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-[rgba(124,58,237,0.2)] text-[#A78BFA]">{t}</span>)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function ContentManagerPage() {
  const { user } = useDashboard();
  const [tab, setTab] = useState<"kopisodes" | "gallery">("kopisodes");

  if (user?.role !== "ADMIN") {
    return (
      <div className="flex items-center justify-center h-64 text-[#6B7280]">
        <p>Admin access required.</p>
      </div>
    );
  }

  const tabs = [
    { id: "kopisodes", label: "Kopisodes", icon: Mic2 },
    { id: "gallery", label: "Gallery", icon: ImageIcon },
  ] as const;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Tabs */}
      <div className="flex gap-2 bg-[#1A1035] border border-[rgba(124,58,237,0.2)] rounded-2xl p-1.5">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              tab === id
                ? "bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white shadow"
                : "text-[#A78BFA] hover:text-white hover:bg-[rgba(124,58,237,0.1)]"
            }`}
          >
            <Icon size={16} /> {label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-[#1A1035] border border-[rgba(124,58,237,0.2)] rounded-2xl p-6">
        {tab === "kopisodes" && <KopisodesManager isAdmin={user.role === "ADMIN"} />}
        {tab === "gallery" && <GalleryManager isAdmin={user.role === "ADMIN"} />}
      </div>
    </div>
  );
}
