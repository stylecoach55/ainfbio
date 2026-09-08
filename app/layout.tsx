import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

export const metadata: Metadata = {
  title: "AINFBIO Official Brand Website",
  description: "깨끗함과 과학의 균형, 바이오 스킨케어 브랜드 앙프바이오",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}

