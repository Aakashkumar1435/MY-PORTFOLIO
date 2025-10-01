"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When you're on "/", smooth-scroll; otherwise let the link navigate to "/"
  const handleClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return; // on non-home pages: just go home

    e.preventDefault();
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.replaceState(null, "", "/#home");
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `/#${id}`);
    }
  };

  // Href logic: on home we link to sections; elsewhere we link to "/"
  const hrefFor = (id: string) => (pathname === "/" ? `/#${id}` : "/");

  return (
    <nav
      className={`pointer-events-auto fixed top-0 left-0 w-full z-[999] transition-all ${
        scrolled ? "bg-black/70 backdrop-blur py-3" : "py-5"
      }`}
    >
      {/* container */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between">
        {/* Logo (also follows the same rule) */}
        <Link
          href={hrefFor("home")}
          onClick={handleClick("home")}
          className="text-xl font-extrabold bg-grad-accent bg-clip-text text-transparent"
        >
          AK
        </Link>

        {/* RIGHT-ALIGNED nav */}
        <ul className="hidden md:flex items-center gap-10 justify-end">
          {NAV.map(({ id, label }) => (
            <li key={id}>
              <Link
                href={hrefFor(id)}
                onClick={handleClick(id)}
                className="relative text-white/90 hover:text-neonCyan transition py-1"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
