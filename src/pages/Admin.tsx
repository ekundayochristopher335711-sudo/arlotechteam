import React, { useState, useEffect, useRef } from "react";
import { useSEO } from "../lib/useSEO";
import { categories } from "../data/posts";
import {
  Trash2, Edit3, Plus, LogOut, Save, X, Eye,
  Upload, Image as ImageIcon, Copy, ExternalLink,
  FileText, Star, Tag,
} from "lucide-react";

const API = "/api/posts.php";
const AUTH_API = "/api/auth.php";
const UPLOAD_API = "/api/upload.php";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  featured: boolean;
  image?: string;
  content: string[];
};

const emptyPost: Post = {
  slug: "",
  title: "",
  excerpt: "",
  category: "Web Design",
  date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
  readTime: "5 min read",
  author: "Christopher S.",
  featured: false,
  image: "",
  content: [""],
};

export default function Admin() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [token, setToken] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [editing, setEditing] = useState<Post | null>(null);
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState<Post>(emptyPost);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useSEO({ title: "Admin", description: "Blog admin panel", path: "/admin" });

  const headers = { "Content-Type": "application/json", Authorization: `Bearer ${token}` };

  async function fetchPosts() {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setPosts(Array.isArray(data) ? data : []);
    } catch {
      setPosts([]);
    }
  }

  useEffect(() => {
    if (authed) fetchPosts();
  }, [authed]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");
    setLoading(true);
    try {
      const res = await fetch(AUTH_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        setToken(password);
        setAuthed(true);
      } else {
        setLoginError("Wrong password. Try again.");
      }
    } catch {
      setLoginError("Can't connect to server. Make sure you're on arlotech.com.ng.");
    }
    setLoading(false);
  }

  function logout() {
    setAuthed(false);
    setToken("");
    setPassword("");
  }

  function startCreate() {
    setEditing(null);
    setCreating(true);
    setForm({ ...emptyPost, date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) });
    setStatus("");
    window.scrollTo(0, 0);
  }

  function startEdit(post: Post) {
    setCreating(false);
    setEditing(post);
    setForm({ ...post });
    setStatus("");
    window.scrollTo(0, 0);
  }

  function duplicatePost(post: Post) {
    setCreating(true);
    setEditing(null);
    setForm({
      ...post,
      slug: "",
      title: `${post.title} (Copy)`,
      featured: false,
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    });
    setStatus("");
    window.scrollTo(0, 0);
  }

  function cancel() {
    setCreating(false);
    setEditing(null);
    setStatus("");
  }

  function updateContent(index: number, value: string) {
    const updated = [...form.content];
    updated[index] = value;
    setForm({ ...form, content: updated });
  }

  function addParagraph() {
    setForm({ ...form, content: [...form.content, ""] });
  }

  function removeParagraph(index: number) {
    if (form.content.length <= 1) return;
    setForm({ ...form, content: form.content.filter((_, i) => i !== index) });
  }

  function wordCount(paragraphs: string[]) {
    return paragraphs.join(" ").split(/\s+/).filter(Boolean).length;
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { setStatus("Image must be under 5MB."); return; }
    setUploading(true);
    setStatus("Uploading image...");
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await fetch(UPLOAD_API, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      if (res.ok) {
        const data = await res.json();
        setForm((prev) => ({ ...prev, image: data.url }));
        setStatus("Image uploaded!");
      } else {
        const err = await res.json();
        setStatus(err.error || "Upload failed.");
      }
    } catch {
      setStatus("Upload failed — check your connection.");
    }
    setUploading(false);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim() || form.content.every((p) => !p.trim())) {
      setStatus("Title and at least one paragraph are required.");
      return;
    }
    setLoading(true);
    try {
      const cleanContent = form.content.filter((p) => p.trim());
      const payload = { ...form, content: cleanContent };
      if (creating) {
        const res = await fetch(API, { method: "POST", headers, body: JSON.stringify(payload) });
        if (res.status === 401) { setStatus("Wrong password."); setLoading(false); return; }
        if (!res.ok) { setStatus("Failed to create post."); setLoading(false); return; }
        setStatus("Post published!");
      } else if (editing) {
        const res = await fetch(API, { method: "PUT", headers, body: JSON.stringify(payload) });
        if (res.status === 401) { setStatus("Wrong password."); setLoading(false); return; }
        if (!res.ok) { setStatus("Failed to update."); setLoading(false); return; }
        setStatus("Post updated!");
      }
      await fetchPosts();
      setCreating(false);
      setEditing(null);
    } catch {
      setStatus("Network error.");
    }
    setLoading(false);
  }

  async function handleDelete(slug: string) {
    try {
      await fetch(API, { method: "DELETE", headers, body: JSON.stringify({ slug }) });
      await fetchPosts();
      setDeleteConfirm(null);
      setStatus("Post deleted.");
    } catch {
      setStatus("Failed to delete.");
    }
  }

  // ─── Login ───
  if (!authed) {
    return (
      <div className="min-h-screen bg-[#07120C] flex items-center justify-center px-6">
        <form onSubmit={handleLogin} className="w-full max-w-sm space-y-6">
          <div className="text-center">
            <div className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <FileText size={24} className="text-emerald-400" />
            </div>
            <h1 className="text-3xl font-black text-white">Arlotech Admin</h1>
            <p className="mt-2 text-sm text-zinc-400">Enter your admin password to continue.</p>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3.5 text-sm text-white outline-none focus:border-emerald-400"
          />
          {loginError && <p className="text-sm text-red-400 text-center">{loginError}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-linear-to-r from-emerald-400 to-yellow-300 py-3.5 text-sm font-bold text-[#07100f] hover:scale-[1.02] transition disabled:opacity-50"
          >
            {loading ? "Checking..." : "Log In"}
          </button>
          <p className="text-xs text-zinc-600 text-center">Admin only works on arlotech.com.ng (requires PHP)</p>
        </form>
      </div>
    );
  }

  // ─── Editor ───
  if (creating || editing) {
    const words = wordCount(form.content);
    const estimatedReadTime = Math.max(1, Math.round(words / 200));

    return (
      <div className="min-h-screen bg-[#07120C] text-white pb-28 sm:pb-0">
        {/* Sticky header */}
        <div className="sticky top-0 z-10 border-b border-zinc-800 bg-[#07120C]/95 backdrop-blur-md px-4 sm:px-6 py-4">
          <div className="mx-auto max-w-3xl flex items-center justify-between gap-4">
            <h1 className="text-lg sm:text-2xl font-bold truncate">
              {creating ? "New Post" : "Edit Post"}
            </h1>
            <div className="flex items-center gap-2 shrink-0">
              <span className="hidden sm:block text-xs text-zinc-500">{words} words · ~{estimatedReadTime} min</span>
              <button onClick={cancel} className="flex items-center gap-1.5 rounded-lg border border-zinc-700 px-3 py-2 text-sm text-zinc-400 hover:text-white transition">
                <X size={14} /> Cancel
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8">
          {/* Word count for mobile */}
          <p className="sm:hidden text-xs text-zinc-500 mb-6">{words} words · ~{estimatedReadTime} min read</p>

          <form onSubmit={handleSave} className="space-y-5">
            {/* Title */}
            <div>
              <label className="block text-xs font-semibold text-zinc-400 mb-2">Title *</label>
              <input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                placeholder="Your post title"
              />
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-xs font-semibold text-zinc-400 mb-2">Excerpt (short summary shown in the blog grid)</label>
              <input
                value={form.excerpt}
                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                placeholder="One sentence that makes people want to read more"
              />
            </div>

            {/* Image upload */}
            <div>
              <label className="block text-xs font-semibold text-zinc-400 mb-2">Cover Image</label>
              <div className="space-y-3">
                {form.image && (
                  <div className="relative rounded-xl overflow-hidden border border-zinc-700">
                    <img src={form.image} alt="Cover" className="w-full h-44 object-cover" />
                    <button
                      type="button"
                      onClick={() => setForm({ ...form, image: "" })}
                      className="absolute top-2 right-2 rounded-full bg-black/60 p-1.5 text-white hover:bg-red-500 transition"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    disabled={uploading}
                    className="flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-300 hover:border-emerald-400 hover:text-emerald-400 transition disabled:opacity-50"
                  >
                    <Upload size={14} /> {uploading ? "Uploading..." : "Upload Image"}
                  </button>
                  <input ref={fileRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  <input
                    value={form.image || ""}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                    placeholder="Or paste image URL"
                  />
                </div>
              </div>
            </div>

            {/* Category + Author — stacked on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-2">Category</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                >
                  {categories.filter((c) => c !== "All").map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-2">Author</label>
                <input
                  value={form.author}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                />
              </div>
            </div>

            {/* Read time + Date — stacked on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-2">
                  Read Time
                  <span className="ml-2 text-zinc-600 font-normal">(suggested: {estimatedReadTime} min read)</span>
                </label>
                <input
                  value={form.readTime}
                  onChange={(e) => setForm({ ...form, readTime: e.target.value })}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                  placeholder="5 min read"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-2">Date</label>
                <input
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                  placeholder="July 3, 2026"
                />
              </div>
            </div>

            {/* Featured */}
            <label className="flex items-center gap-3 cursor-pointer rounded-xl border border-zinc-700 bg-zinc-900/50 px-4 py-3">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                className="h-4 w-4 accent-emerald-400"
              />
              <span className="text-sm text-zinc-300">
                Featured article <span className="text-zinc-500">(shows at top of blog page)</span>
              </span>
            </label>

            {/* Content */}
            <div>
              <label className="block text-xs font-semibold text-zinc-400 mb-2">
                Content — each box is one paragraph
              </label>
              <div className="space-y-3">
                {form.content.map((para, i) => (
                  <div key={i} className="flex gap-2">
                    <textarea
                      value={para}
                      onChange={(e) => updateContent(i, e.target.value)}
                      rows={4}
                      className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400 resize-y"
                      placeholder={`Paragraph ${i + 1}`}
                    />
                    <button
                      type="button"
                      onClick={() => removeParagraph(i)}
                      className="self-start rounded-lg border border-zinc-700 p-3 text-zinc-500 hover:text-red-400 hover:border-red-400/50 transition"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={addParagraph}
                className="mt-3 flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition"
              >
                <Plus size={14} /> Add paragraph
              </button>
            </div>

            {status && (
              <p className={`text-sm ${status.includes("!") ? "text-emerald-400" : "text-yellow-400"}`}>
                {status}
              </p>
            )}

            {/* Desktop save button */}
            <div className="hidden sm:block">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 rounded-xl bg-linear-to-r from-emerald-400 to-yellow-300 px-8 py-3.5 text-sm font-bold text-[#07100f] hover:scale-[1.02] transition disabled:opacity-50"
              >
                <Save size={16} /> {loading ? "Saving..." : creating ? "Publish Post" : "Save Changes"}
              </button>
            </div>
          </form>
        </div>

        {/* Mobile sticky save bar */}
        <div className="sm:hidden fixed bottom-0 left-0 right-0 border-t border-zinc-800 bg-[#07120C]/95 backdrop-blur-md p-4">
          {status && (
            <p className={`text-xs text-center mb-2 ${status.includes("!") ? "text-emerald-400" : "text-yellow-400"}`}>
              {status}
            </p>
          )}
          <div className="flex gap-3">
            <button
              onClick={cancel}
              className="flex-1 rounded-xl border border-zinc-700 py-3.5 text-sm text-zinc-400"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={loading}
              className="flex-[2] flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-emerald-400 to-yellow-300 py-3.5 text-sm font-bold text-[#07100f] disabled:opacity-50"
            >
              <Save size={16} /> {loading ? "Saving..." : creating ? "Publish" : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Stats ───
  const featuredCount = posts.filter((p) => p.featured).length;
  const usedCategories = [...new Set(posts.map((p) => p.category))].length;

  // ─── Post list ───
  return (
    <div className="min-h-screen bg-[#07120C] text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">

        {/* Header */}
        <div className="flex items-start sm:items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black">Blog Admin</h1>
            <p className="mt-1 text-sm text-zinc-400">{posts.length} posts</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 rounded-xl border border-zinc-700 px-4 py-3 text-sm text-zinc-400 hover:text-white hover:border-zinc-500 transition"
            >
              <ExternalLink size={15} /> View Site
            </a>
            <button
              onClick={startCreate}
              className="flex items-center gap-2 rounded-xl bg-linear-to-r from-emerald-400 to-yellow-300 px-4 sm:px-6 py-3 text-sm font-bold text-[#07100f] hover:scale-105 transition"
            >
              <Plus size={16} /> <span className="hidden xs:inline">New Post</span><span className="xs:hidden">New</span>
            </button>
            <button
              onClick={logout}
              title="Log out"
              className="flex items-center gap-2 rounded-xl border border-zinc-700 px-3 py-3 text-sm text-zinc-400 hover:text-white hover:border-zinc-500 transition"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <FileText size={14} className="text-emerald-400" />
              <span className="text-xs text-zinc-500">Total Posts</span>
            </div>
            <p className="text-2xl font-black text-white">{posts.length}</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <Star size={14} className="text-yellow-400" />
              <span className="text-xs text-zinc-500">Featured</span>
            </div>
            <p className="text-2xl font-black text-white">{featuredCount}</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <Tag size={14} className="text-emerald-400" />
              <span className="text-xs text-zinc-500">Categories</span>
            </div>
            <p className="text-2xl font-black text-white">{usedCategories}</p>
          </div>
        </div>

        {/* Mobile: View Site link */}
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="sm:hidden mb-4 flex items-center justify-center gap-2 rounded-xl border border-zinc-700 py-3 text-sm text-zinc-400 hover:text-white transition"
        >
          <ExternalLink size={14} /> View Live Site
        </a>

        {status && <p className="mb-4 text-sm text-yellow-400">{status}</p>}

        {/* Delete confirm overlay */}
        {deleteConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6">
            <div className="w-full max-w-sm rounded-2xl border border-zinc-700 bg-zinc-900 p-6 space-y-4">
              <h3 className="text-lg font-bold text-white">Delete this post?</h3>
              <p className="text-sm text-zinc-400">This cannot be undone.</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="flex-1 rounded-xl border border-zinc-700 py-3 text-sm text-zinc-400"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(deleteConfirm)}
                  className="flex-1 rounded-xl bg-red-500 py-3 text-sm font-bold text-white hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Post list */}
        <div className="space-y-3">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden transition hover:border-zinc-700"
            >
              {/* Main row — tap to edit on mobile */}
              <button
                onClick={() => startEdit(post)}
                className="w-full flex items-center gap-3 sm:gap-4 p-4 text-left"
              >
                {/* Thumbnail */}
                <div className="shrink-0 h-14 w-14 sm:h-16 sm:w-16 rounded-xl overflow-hidden bg-zinc-800">
                  {post.image ? (
                    <img src={post.image} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-zinc-600">
                      <ImageIcon size={18} />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex flex-wrap items-center gap-1.5 mb-1">
                    <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-xs text-emerald-400">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="rounded-full bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 text-xs text-yellow-400">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-white text-sm leading-snug line-clamp-2 sm:truncate">
                    {post.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">{post.date} · {post.readTime}</p>
                </div>

                {/* Desktop edit hint */}
                <div className="hidden sm:flex items-center gap-2 shrink-0">
                  <Edit3 size={14} className="text-zinc-600" />
                </div>
              </button>

              {/* Action bar */}
              <div className="flex border-t border-zinc-800/60">
                <a
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-3 text-xs text-zinc-500 hover:text-white hover:bg-zinc-800/40 transition"
                >
                  <Eye size={13} /> View
                </a>
                <button
                  onClick={() => startEdit(post)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-3 text-xs text-zinc-500 hover:text-emerald-400 hover:bg-zinc-800/40 transition border-l border-zinc-800/60"
                >
                  <Edit3 size={13} /> Edit
                </button>
                <button
                  onClick={() => duplicatePost(post)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-3 text-xs text-zinc-500 hover:text-yellow-400 hover:bg-zinc-800/40 transition border-l border-zinc-800/60"
                >
                  <Copy size={13} /> Duplicate
                </button>
                <button
                  onClick={() => setDeleteConfirm(post.slug)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-3 text-xs text-zinc-500 hover:text-red-400 hover:bg-zinc-800/40 transition border-l border-zinc-800/60"
                >
                  <Trash2 size={13} /> Delete
                </button>
              </div>
            </div>
          ))}

          {posts.length === 0 && (
            <div className="text-center py-16">
              <FileText size={32} className="mx-auto text-zinc-700 mb-3" />
              <p className="text-zinc-500 text-sm">No posts yet.</p>
              <button onClick={startCreate} className="mt-4 text-sm text-emerald-400 hover:underline">
                Create your first post
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
