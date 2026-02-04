export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-[#FFFFFF] px-6">
      <section className="max-w-6xl mx-auto py-24">
        {/* Hero */}
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
            Clarion
          </h1>
          <p className="text-[#9CA3AF] text-lg md:text-xl">
            An intelligent safety dispatch system that detects risk, compresses
            context, and escalates incidents automatically — when seconds
            matter.
          </p>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-6">
            <a
              href="/access"
              className="rounded-full bg-[#2563EB] text-white px-8 py-3 text-sm font-medium shadow-sm hover:bg-blue-600 transition"
            >
              Request Early Access
            </a>
            <a
              href="/system"
              className="rounded-full border border-[#9CA3AF] bg-[#0B0B0F]/40 px-8 py-3 text-sm font-medium text-white hover:border-white hover:bg-[#0B0B0F]/60 transition"
            >
              View System Overview
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-20 h-px bg-[#9CA3AF]/20" />

        {/* What it does */}
        <div className="grid md:grid-cols-3 gap-10">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Signal Collection</h3>
            <p className="text-sm text-[#9CA3AF]">
              Hardware triggers, motion state, silence detection, and location
              snapshots — captured deterministically on-device.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-medium">Context Compression</h3>
            <p className="text-sm text-[#9CA3AF]">
              AI reduces raw signals into a high-signal incident summary that
              humans can act on immediately.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-medium">Automated Escalation</h3>
            <p className="text-sm text-[#9CA3AF]">
              Clarion logic triggers SMS, monitoring, or live response without
              requiring the user to explain what’s happening.
            </p>
          </div>
        </div>

        {/* Use cases */}
        <div className="mt-24">
          <h2 className="text-2xl font-semibold mb-6">Built for</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#9CA3AF]/30 p-6">
              <h4 className="font-medium mb-2">Lone & Mobile Workers</h4>
              <p className="text-sm text-[#9CA3AF]">
                Delivery drivers, security, field technicians, and night-shift
                staff operating without immediate backup.
              </p>
            </div>

            <div className="rounded-2xl border border-[#9CA3AF]/30 p-6">
              <h4 className="font-medium mb-2">High-Risk Individuals</h4>
              <p className="text-sm text-[#9CA3AF]">
                Personal safety scenarios where manual calls are impossible or
                unsafe.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-32 text-xs text-[#9CA3AF]">
          Clarion is a safety-first system. No social features. No dashboards
          for show. Just reliable escalation when it matters.
        </footer>
      </section>
    </main>
  );
}
