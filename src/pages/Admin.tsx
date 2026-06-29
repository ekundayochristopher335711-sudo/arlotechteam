import React, { useState, useEffect, useRef } from "react";
import { useSEO } from "../lib/useSEO";
import { categories } from "../data/posts";
import { Trash2, Edit3, Plus, LogOut, Save, X, Eye, Upload, Image as ImageIcon } from "lucide-react";

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
      setLoginError("Can't connect to server. Make sure you're on arlotech.com.ng, not Vercel.");
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
  }

  function startEdit(post: Post) {
    setCreating(false);
    setEditing(post);
    setForm({ ...post });
    setStatus("");
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

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setStatus("Image must be under 5MB.");
      return;
    }

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
    if (!confirm("Delete this post permanently?")) return;
    try {
      await fetch(API, { method: "DELETE", headers, body: JSON.stringify({ slug }) });
      await fetchPosts();
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
          <p className="text-xs text-zinc-600 text-center">Admin panel only works on arlotech.com.ng (requires PHP)</p>
        </form>
      </div>
    );
  }

  // ─── Editor ───
  if (creating || editing) {
    return (
      <div className="min-h-screen bg-[#07120C] text-white">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">{creating ? "New Post" : "Edit Post"}</h1>
            <button onClick={cancel} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition">
              <X size={16} /> Cancel
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-xs font-semibold text-zinc-400 mb-2">Title</label>
              <input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                placeholder="Your post title"
              />
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-xs font-semibold text-zinc-400 mb-2">Excerpt (short summary)</label>
              <input
                value={form.excerpt}
                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                placeholder="A one-line summary for the blog grid"
              />
            </div>

            {/* Image upload */}
            <div>
              <label className="block text-xs font-semibold text-zinc-400 mb-2">Cover Image</label>
              <div className="space-y-3">
                {form.image && (
                  <div className="relative rounded-xl overflow-hidden border border-zinc-700">
                    <img src={form.image} alt="Cover" className="w-full h-48 object-cover" />
                    <button
                      type="button"
                      onClick={() => setForm({ ...form, image: "" })}
                      className="absolute top-2 right-2 rounded-full bg-black/60 p-1.5 text-white hover:bg-red-500 transition"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    disabled={uploading}
                    className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-300 hover:border-emerald-400 hover:text-emerald-400 transition disabled:opacity-50"
                  >
                    <Upload size={14} /> {uploading ? "Uploading..." : "Upload Image"}
                  </button>
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <input
                    value={form.image || ""}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-white outline-none focus:border-emerald-400"
                    placeholder="Or paste image URL"
                  />
                </div>
              </div>
            </div>

            {/* Category + Author */}
            <div className="grid grid-cols-2 gap-4">
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

            {/* Read time + Date */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-2">Read Time</label>
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
                  placeholder="June 29, 2026"
                />
              </div>
            </div>

            {/* Featured */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="featured"
                checked={form.featured}
                onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                className="h-4 w-4 accent-emerald-400"
              />
              <label htmlFor="featured" className="text-sm text-zinc-300">Featured article</label>
            </div>

            {/* Content */}
            <div>
              <label className="block text-xs font-semibold text-zinc-400 mb-2">Content — each box is one paragraph</label>
              <div className="space-y-3">
                {form.content.map((para, i) => (
                  <div key={i} className="flex gap-2">
                    <textarea
                      value={para}
                      onChange={(e) => updateContent(i, e.target.value)}
                      rows={3}
                      className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400 resize-y"
                      placeholder={`Paragraph ${i + 1}`}
                    />
                    <button
                      type="button"
                      onClick={() => removeParagraph(i)}
                      className="self-start rounded-lg border border-zinc-700 p-2.5 text-zinc-500 hover:text-red-400 hover:border-red-400/50 transition"
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

            {status && <p className="text-sm text-yellow-400">{status}</p>}

            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 rounded-xl bg-linear-to-r from-emerald-400 to-yellow-300 px-8 py-3.5 text-sm font-bold text-[#07100f] hover:scale-[1.02] transition disabled:opacity-50"
            >
              <Save size={16} /> {loading ? "Saving..." : creating ? "Publish Post" : "Save Changes"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ─── Post list ───
  return (
    <div className="min-h-screen bg-[#07120C] text-white">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-black">Blog Admin</h1>
            <p className="mt-1 text-sm text-zinc-400">{posts.length} posts</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={startCreate}
              className="flex items-center gap-2 rounded-xl bg-linear-to-r from-emerald-400 to-yellow-300 px-6 py-3 text-sm font-bold text-[#07100f] hover:scale-105 transition"
            >
              <Plus size={16} /> New Post
            </button>
            <button
              onClick={logout}
              className="flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-3 text-sm text-zinc-400 hover:text-white hover:border-zinc-500 transition"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>

        {status && <p className="mb-6 text-sm text-yellow-400">{status}</p>}

        <div className="space-y-3">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 transition hover:border-zinc-700"
            >
              {/* Thumbnail */}
              <div className="shrink-0 h-16 w-16 rounded-xl overflow-hidden bg-zinc-800">
                {post.image ? (
                  <img src={post.image} alt="" className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-zinc-600">
                    <ImageIcon size={20} />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-xs text-emerald-400">
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="rounded-full bg-yellow-500/10 border border-yellow-500/20 px-2.5 py-0.5 text-xs text-yellow-400">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-white truncate">{post.title}</h3>
                <p className="text-xs text-zinc-500 mt-1">{post.date} · {post.readTime} · {post.author}</p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0">
                <a href={`/blog/${post.slug}`} target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-700 p-2.5 text-zinc-400 hover:text-white hover:border-zinc-500 transition">
                  <Eye size={15} />
                </a>
                <button onClick={() => startEdit(post)} className="rounded-lg border border-zinc-700 p-2.5 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 transition">
                  <Edit3 size={15} />
                </button>
                <button onClick={() => handleDelete(post.slug)} className="rounded-lg border border-zinc-700 p-2.5 text-zinc-400 hover:text-red-400 hover:border-red-500/30 transition">
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
