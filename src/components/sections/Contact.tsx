"use client";

import { useState } from "react";

type Status = { type: "idle" | "loading" | "success" | "error"; message?: string };

export default function Contact() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: "loading" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
      company: String(formData.get("company") || ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (!res.ok || !json?.ok) {
        throw new Error(json?.error || "Failed to send. Please try again.");
      }

      setStatus({ type: "success", message: "Thanks! Your message was sent." });
      form.reset();
    } catch (err: any) {
      setStatus({ type: "error", message: err?.message || "Something went wrong." });
    } finally {
      // Optional: clear message after a few seconds
      setTimeout(() => setStatus({ type: "idle" }), 6000);
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
          Let&apos;s Create Together
        </h2>

        <p className="mt-4 text-center text-white/70">
          Ready to bring your ideas to life? Send a note and I&apos;ll get back to you.
        </p>

        <form onSubmit={onSubmit} className="mt-10 space-y-5">
          {/* Honeypot field (hidden visually) */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div>
            <label className="block text-sm text-white/70 mb-2">Your Name</label>
            <input
              name="name"
              required
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-400"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={6}
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-400"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={status.type === "loading"}
            className="rounded-full px-6 py-3 font-semibold text-black disabled:opacity-70"
            style={{ background: "linear-gradient(45deg,#00f5ff,#ff00f5)" }}
          >
            {status.type === "loading" ? "Sending…" : "Send Message"}
          </button>

          {status.type === "success" && (
            <p className="text-emerald-400">{status.message}</p>
          )}
          {status.type === "error" && (
            <p className="text-rose-400">{status.message}</p>
          )}
        </form>
      </div>
    </section>
  );
}
