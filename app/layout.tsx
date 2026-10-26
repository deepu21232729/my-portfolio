import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: `${profile.name} — ${profile.role}`,
  description: "AI Engineer specialising in Generative AI, Agentic AI, Machine Learning and RAG. Based in Visakhapatnam, India.",
  openGraph: { title: `${profile.name} — ${profile.role}`, description: profile.oneLiner, type: "website", images: ["/media/portrait.jpg"] },
};
export const viewport: Viewport = { themeColor: "#07080a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
