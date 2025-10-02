// src/components/sections/Contact.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type SubmitState = "idle" | "sending" | "ok" | "error";
type Payload = { name: string; email: string; message: string; company?: string };

export default function Contact() {
  const [state, setState] = useState<SubmitState>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload: Payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
      company: String(fd.get("company") ?? ""),
    };

    if (!payload.name || !payload.email || !payload.message) return;

    try {
      setState("sending");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data: { ok?: boolean } = await res.json();
      if (res.ok && data.ok) {
        setState("ok");
        form.reset();
      } else {
        setState("error");
      }
    } catch (_err: unknown) {
      setState("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-grad-accent bg-clip-text text-transparent">
          Let&apos;s Create Together
        </h2>

        <p className="mt-4 text-center text-white/70">
          Ready to bring your ideas to life? Send me a message.
        </p>

        <motion.form
          onSubmit={onSubmit}
          className="mt-10 grid gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {/* Honey-pot (hidden) */}
          <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <input name="name" type="text" placeholder="Your Name" required
                 className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-neonCyan" />
          <input name="email" type="email" placeholder="Your Email" required
                 className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-neonCyan" />
          <textarea name="message" rows={6} placeholder="Tell me about your project..." required
                    className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-neonCyan" />

          <div className="flex items-center gap-3">
            <button type="submit" disabled={state === "sending"}
                    className="rounded-full px-6 py-3 font-semibold text-black shadow-lg disabled:opacity-60"
                    style={{ background: "linear-gradient(45deg,#00f5ff,#ff00f5)" }}>
              {state === "sending" ? "Sending…" : "Send Message"}
            </button>

            {state === "ok" && <span className="text-neonCyan">Thanks! I’ll get back to you soon.</span>}
            {state === "error" && <span className="text-red-400">Something went wrong. Please try again.</span>}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
