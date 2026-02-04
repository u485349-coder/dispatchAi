"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AccessPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Replace with your Google Form action URL
    const googleFormAction = "https://docs.google.com/forms/d/e/1FAIpQLSexDrEt0pgHAdaC8cXz0eMPcEBwLp_AmvTmadKgXwuEGbcsUg/formResponse";
    const formData = new FormData();
    formData.append("entry.999354123", email); // Replace <ENTRY_ID> with your email field's entry ID

    try {
      await fetch(googleFormAction, {
        method: "POST",
        mode: "no-cors", // Google Forms requires no-cors
        body: formData,
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0B0B0F] text-[#FFFFFF] px-6">
      <div className="max-w-md space-y-6 text-center">
        <h1 className="text-3xl font-semibold">Request Early Access</h1>
        <p className="text-sm text-[#9CA3AF]">
          Clarion is currently invite-only while we validate real-world safety scenarios.
        </p>

        {submitted ? (
          <p className="text-green-500 text-sm">🎉 Thanks! You’re on the waitlist.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-[#0B0B0F] border border-[#9CA3AF]/50 px-4 py-3 text-sm text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#2563EB]"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-[#2563EB] text-white py-3 text-sm font-medium hover:bg-blue-600 transition"
            >
              Join Waitlist
            </button>
            {error && <p className="text-red-500 text-xs">{error}</p>}
          </form>
        )}

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
