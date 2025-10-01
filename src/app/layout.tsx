import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/animations.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aakash Kumar — Creative Developer",
  description: "Digital experiences that blend design & technology.",
  openGraph: { title: "Aakash Kumar — Portfolio", type: "website" },
  metadataBase: new URL("https://example.com"),
};
export const viewport: Viewport = { themeColor: "#0a0a0a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
