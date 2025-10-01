import type { ReactNode } from "react";
import Navbar from "@/components/site/Navbar";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-24">{children}</main>
      <footer className="border-t mt-16 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Aakash Kumar
      </footer>
    </>
  );
}
