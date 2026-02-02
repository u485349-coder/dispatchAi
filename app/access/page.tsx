"use client";

import { useRouter } from "next/navigation";

export default function AccessPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0B0B0F] text-[#FFFFFF] px-6">
      <div className="max-w-md space-y-6 text-center">
        <h1 className="text-3xl font-semibold">Request Early Access</h1>
        <p className="text-sm text-[#9CA3AF]">
          DispatchAI is currently invite-only while we validate real-world safety
          scenarios.
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-xl bg-[#0B0B0F] border border-[#9CA3AF]/50 px-4 py-3 text-sm text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#2563EB]"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-[#2563EB] text-white py-3 text-sm font-medium hover:bg-blue-600 transition"
          >
            Join Waitlist
          </button>
        </form>

        <p className="text-xs text-[#9CA3AF]">
          No spam. No marketing blasts. Safety systems only.
        </p>

        <button
          onClick={() => router.push("/")}
          className="mt-6 text-sm text-[#9CA3AF] underline hover:text-white"
        >
          ← Back to Home
        </button>
      </div>
    </main>
  );
}
