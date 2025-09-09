"use client";

import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("admin@site.com");
  const [password, setPassword] = useState("admin123");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const router = useRouter();
  const search = useSearchParams();
  const from = search.get("from") || "/admin";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Login failed");

      // Save token in cookies for 7 days
      Cookies.set("token", data.token, { expires: 7, sameSite: "lax" });

      router.replace(from);
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl shadow-lg bg-white dark:bg-gray-800 p-6 space-y-4"
      >
        <h1 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100">
          Admin Login
        </h1>

        {err && (
          <p className="text-sm text-red-600 bg-red-50 p-2 rounded text-center">
            {err}
          </p>
        )}

        <label className="block">
          <span className="text-sm text-gray-700 dark:text-gray-200">Email</span>
          <input
            className="mt-1 w-full border rounded-lg p-2 bg-gray-50 dark:bg-gray-700 dark:text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>

        <label className="block">
          <span className="text-sm text-gray-700 dark:text-gray-200">Password</span>
          <input
            className="mt-1 w-full border rounded-lg p-2 bg-gray-50 dark:bg-gray-700 dark:text-white"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </label>

        <button
          disabled={loading}
          className="w-full rounded-lg p-2 font-medium shadow bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </main>
  );
}
