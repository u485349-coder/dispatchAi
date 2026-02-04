"use client";

import { useRouter } from "next/navigation";

export default function SystemPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#0B0B0F] text-[#FFFFFF] px-6 py-24">
      <div className="max-w-4xl mx-auto space-y-16">
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold">System Overview</h1>
          <p className="text-[#9CA3AF] max-w-2xl">
            Clarion is built as a safety pipeline, not a social product or
            analytics dashboard.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-8">
          <div className="border border-[#9CA3AF]/30 rounded-2xl p-6">
            <h3 className="font-medium mb-2">1. Signal Collection</h3>
            <p className="text-sm text-[#9CA3AF]">
              Hardware triggers, motion, silence, and location are captured
              deterministically on-device.
            </p>
          </div>

          <div className="border border-[#9CA3AF]/30 rounded-2xl p-6">
            <h3 className="font-medium mb-2">2. Context Compression</h3>
            <p className="text-sm text-[#9CA3AF]">
              AI converts raw sensor data into a concise incident summary humans
              can act on instantly.
            </p>
          </div>

          <div className="border border-[#9CA3AF]/30 rounded-2xl p-6">
            <h3 className="font-medium mb-2">3. Escalation</h3>
            <p className="text-sm text-[#9CA3AF]">
              SMS, monitoring, or response flows trigger automatically when the
              user can’t explain what’s happening.
            </p>
          </div>
        </section>

        <button
          onClick={() => router.push("/")}
          className="mt-12 text-sm text-[#9CA3AF] underline hover:text-white"
        >
          ← Back to Home
        </button>
      </div>
    </main>
  );
}
