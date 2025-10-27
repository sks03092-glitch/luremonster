// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { MobileMenu } from "../components/ui/MobileMenu"; // ✅ 상대경로 확정

export const metadata: Metadata = {
  title: "LureMonster",
  description: "쉽고 재밌게 즐기는 낚시, 초보부터 전문가까지 한곳에!",
  metadataBase: new URL("https://luremonster.kr"),
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "LureMonster",
    description: "쉽고 재밌게 즐기는 낚시 플랫폼",
    url: "https://luremonster.kr",
    siteName: "LureMonster",
    images: ["/og.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-dvh bg-white text-neutral-900 antialiased">
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
          <nav className="container flex h-14 items-center justify-between">
            <Link href="/" className="font-semibold text-lg">
              <span className="text-brand font-semibold">Lure</span>Monster
            </Link>
            <div className="hidden md:flex gap-6 text-sm">
              <Link href="/about" className="hover:underline">소개</Link>
              <Link href="/services" className="hover:underline">서비스</Link>
              <Link href="/contact" className="hover:underline">문의</Link>
            </div>
            <MobileMenu />
          </nav>
        </header>

        {children}

        <footer className="mt-24 border-t">
          <div className="container py-8 text-sm text-neutral-500 text-center">
            © {new Date().getFullYear()} LureMonster. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
