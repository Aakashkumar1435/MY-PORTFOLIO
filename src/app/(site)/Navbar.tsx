"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { id: "home",    label: "Home" },
  { id: "about",   label: "About" },
  { id: "skills",  label: "Skills" },
  { id: "projects",label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    // Always prevent, we’ll decide what to do.
    e.preventDefault();

    if (pathname === "/") {
      // Already on the homepage → smooth scroll
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // On a project/detail page → navigate to absolute hash on root
      router.push(`/#${id}`);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${scrolled ? "bg-black/70 backdrop-blur py-3" : "py-6"}`}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-3 items-center">
        {/* Logo → go to top of home */}
        <Link href="/#home" onClick={handleClick("home")}
              className="justify-self-start text-xl font-extrabold bg-grad-accent bg-clip-text text-transparent">
          AK
        </Link>

        <ul className="hidden md:flex justify-self-center items-center gap-12">
          {links.map(({ id, label }) => (
            <li key={id}>
              {/* IMPORTANT: href is absolute '/#id' not '#id' */}
              <Link
                href={`/#${id}`}
                onClick={handleClick(id)}
                className="relative text-white/90 hover:text-neonCyan transition py-1"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="justify-self-end" />
      </div>
    </nav>
  );
}
