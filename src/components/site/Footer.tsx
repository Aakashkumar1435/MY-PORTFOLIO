"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const quickLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (pathname === "/") {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        router.push(`/#${id}`);
      }
    };

  return (
    <footer className="relative mt-16 border-t border-white/10 bg-gradient-to-b from-transparent to-[rgba(20,20,30,0.5)] backdrop-blur">
      {/* scanline */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full overflow-hidden">
        <div className="h-px w-[200%] animate-[scan_3s_linear_infinite] bg-[linear-gradient(90deg,transparent,#00d9ff,#bd00ff,transparent)]" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-10 md:py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand / blurb / social */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#bd00ff] bg-clip-text text-transparent">
              AK
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/70">
              Crafting digital experiences that blend innovative design with
              cutting-edge technology. Let&apos;s create something extraordinary
              together.
            </p>

            <div className="mt-6 flex gap-3">
              {/* GitHub */}
              <Link
                href="https://github.com/Aakashkumar1435"
                target="_blank"
                aria-label="GitHub"
                className="social-link"
              >
                <GitHubIcon />
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://linkedin.com/in/aakasho01"
                target="_blank"
                aria-label="LinkedIn"
                className="social-link"
              >
                <LinkedInIcon />
              </Link>

              {/* WhatsApp */}
              <Link
                href="https://wa.me/61451865310"
                target="_blank"
                aria-label="WhatsApp"
                className="social-link"
              >
                <WhatsAppIcon />
              </Link>

              {/* Email → smooth scroll */}
              <Link
                href="/#contact"
                onClick={handleClick("contact")}
                aria-label="Email"
                className="social-link"
              >
                <MailFilledIcon />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-base font-semibold text-white">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map(({ id, label }) => (
                <li key={id}>
                  <Link
                    href={`/#${id}`}
                    onClick={handleClick(id)}
                    className="relative inline-block py-1 text-white/85 transition-colors hover:text-[#00d9ff]
                               after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:content-['']
                               after:bg-gradient-to-r after:from-[#00d9ff] after:to-[#bd00ff]
                               after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-base font-semibold text-white">Services</h3>
            <FooterList
              items={["Web Development", "UI/UX Design", "Consulting"]}
              onItemClick={handleClick("contact")}
            />
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-base font-semibold text-white">Resources</h3>
            <FooterList items={["Blog", "Portfolio", "Case Studies", "Resume"]} />
          </div>
        </div>

        <hr className="mt-10 border-white/10" />

        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-sm text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} Aakash Kumar. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#00d9ff] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#00d9ff] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </footer>
  );
}

function FooterList({
  items,
  onItemClick,
}: {
  items: string[];
  onItemClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <ul className="space-y-4">
      {items.map((t) => (
        <li key={t}>
          <Link
            href="/#contact"
            onClick={onItemClick}
            className="relative inline-block py-1 text-white/70 transition-colors hover:text-[#00d9ff]
                       after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:content-['']
                       after:bg-gradient-to-r after:from-[#00d9ff] after:to-[#bd00ff]
                       after:transition-all after:duration-300 hover:after:w-full"
          >
            {t}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ---------- ICONS (Full Paths Restored) ---------- */
function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      className="relative z-[1]"
    >
      <path d="M12 2C6.475 2 2 6.486 2 12.021c0 4.425 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.238-.009-1.027-.014-1.863-2.782.604-3.37-1.191-3.37-1.191-.454-1.154-1.11-1.462-1.11-1.462-.908-.619.069-.607.069-.607 1.004.07 1.532 1.03 1.532 1.03.893 1.529 2.343 1.088 2.912.833.091-.647.35-1.088.636-1.338-2.222-.253-4.558-1.111-4.558-4.943 0-1.091.39-1.983 1.03-2.683-.103-.253-.447-1.275.098-2.657 0 0 .84-.269 2.75 1.025A9.582 9.582 0 0112 6.844c.85.004 1.705.115 2.505.338 1.91-1.294 2.749-1.025 2.749-1.025.546 1.382.202 2.404.099 2.657.64.7 1.03 1.592 1.03 2.683 0 3.841-2.34 4.687-4.57 4.936.36.31.68.92.68 1.855 0 1.338-.012 2.416-.012 2.745 0 .267.18.58.69.482A10.02 10.02 0 0012 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      className="relative z-[1]"
    >
      <path d="M4.98 3.5a2.5 2.5 0 11.01 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-.95 1.82-1.95 3.75-1.95 4.01 0 4.75 2.64 4.75 6.07V21h-4v-5.36c0-1.28-.02-2.93-1.78-2.93-1.78 0-2.05 1.39-2.05 2.84V21H9z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      className="relative z-[1]"
    >
      <path d="M12.04 2a9.9 9.9 0 00-8.44 15.04L2 22l5.14-1.53A9.9 9.9 0 1012.04 2zm5.8 14.12c-.24.67-1.41 1.3-1.96 1.33-.5.03-1.13.05-1.83-.12-.42-.1-.97-.32-1.68-.62-2.95-1.28-4.87-4.26-5.02-4.46-.15-.2-1.2-1.6-1.2-3.06 0-1.46.77-2.17 1.04-2.47.27-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.5.24.57.82 1.98.9 2.13.07.15.12.33.02.53-.1.2-.15.33-.3.51-.15.18-.32.4-.46.54-.15.15-.3.32-.13.63.15.3.68 1.12 1.46 1.82 1 .9 1.84 1.18 2.15 1.32.31.15.49.12.67-.07.18-.18.77-.9.98-1.21.2-.3.42-.25.7-.15.27.1 1.73.81 2.03.96.3.15.5.22.57.34.07.12.07.67-.17 1.34z" />
    </svg>
  );
}

function MailFilledIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      className="relative z-[1]"
    >
      <path d="M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v11A2.5 2.5 0 0119.5 20h-15A2.5 2.5 0 012 17.5v-11z" />
      <path
        d="M3.2 6.8L11 12a2 2 0 002 0l7.8-5.2v-.3A1.5 1.5 0 0019.5 5h-15A1.5 1.5 0 003.2 6.8z"
        fill="#000"
        fillOpacity="0.15"
      />
    </svg>
  );
}
