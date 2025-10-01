import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-10"
      style={{ background: "radial-gradient(ellipse at center, rgba(0,245,255,0.1) 0%, transparent 70%)" }}
    >
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-grad-accent bg-clip-text text-transparent">
          Let&apos;s Create Together
        </h2>
        <p className="mt-4 text-white/80">
          Ready to bring your ideas to life? Let&apos;s discuss your next project and create something amazing together.
        </p>

        <form className="mt-10 grid gap-5 max-w-2xl mx-auto" action="/api/contact" method="post">
          <input name="name" placeholder="Your Name" required
            className="rounded-xl px-5 py-4 bg-white/5 border border-[rgba(0,245,255,0.2)] text-white backdrop-blur focus:outline-none focus:border-neonCyan" />
          <input name="email" type="email" placeholder="Your Email" required
            className="rounded-xl px-5 py-4 bg-white/5 border border-[rgba(0,245,255,0.2)] text-white backdrop-blur focus:outline-none focus:border-neonCyan" />
          <textarea name="message" placeholder="Tell me about your project..." required rows={6}
            className="rounded-xl px-5 py-4 bg-white/5 border border-[rgba(0,245,255,0.2)] text-white backdrop-blur focus:outline-none focus:border-neonCyan" />
          <button type="submit"
            className="rounded-full font-bold text-black px-8 py-4"
            style={{ background: "linear-gradient(45deg,#00f5ff,#ff00f5)" }}>
            Send Message
          </button>
        </form>

        <div className="mt-8 flex justify-center gap-6">
          <a href={profile.links.portfolio} className="h-14 w-14 rounded-full flex items-center justify-center glass-border text-neonCyan text-xl"
             style={{ background: "linear-gradient(135deg, rgba(0,245,255,0.2), rgba(255,0,245,0.2))" }}>💼</a>
          <a href={profile.links.github} className="h-14 w-14 rounded-full flex items-center justify-center glass-border text-neonCyan text-xl"
             style={{ background: "linear-gradient(135deg, rgba(0,245,255,0.2), rgba(255,0,245,0.2))" }}>🐙</a>
          <a href={profile.links.email} className="h-14 w-14 rounded-full flex items-center justify-center glass-border text-neonCyan text-xl"
             style={{ background: "linear-gradient(135deg, rgba(0,245,255,0.2), rgba(255,0,245,0.2))" }}>📧</a>
          <a href={profile.links.linkedin} className="h-14 w-14 rounded-full flex items-center justify-center glass-border text-neonCyan text-xl"
             style={{ background: "linear-gradient(135deg, rgba(0,245,255,0.2), rgba(255,0,245,0.2))" }}>🔗</a>
        </div>
      </div>
    </section>
  );
}
