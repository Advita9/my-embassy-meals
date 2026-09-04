"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase-browser";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <p className="font-sacramento text-5xl text-[#9b8cd6]">
            my little cookbook
          </p>

          <h1 className="font-newsreader text-5xl font-semibold text-[#3e3e4b] mt-2">
            admin login
          </h1>

          <p className="font-caveat text-xl text-zinc-500 mt-3">
            welcome back ♡
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="bg-white/80 rounded-2xl shadow-lg p-8 space-y-5"
        >
          <div>
            <label className="block font-inter text-sm text-zinc-600 mb-2">
              email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-[#9b8cd6]"
              placeholder="your email"
            />
          </div>

          <div>
            <label className="block font-inter text-sm text-zinc-600 mb-2">
              password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-[#9b8cd6]"
              placeholder="your password"
            />
          </div>

          {error && (
            <p className="text-sm text-red-400 font-inter">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#9b8cd6] text-white py-3 font-inter transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "logging in..." : "log in ♡"}
          </button>
        </form>
      </div>
    </main>
  );
}