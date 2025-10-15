// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import { MobileNav } from "@/components/mobilenav";

export const metadata = {
  title: "LureMonster",
  description: "초보도 쉬운 낚시 플랫폼",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "LureMonster",
    description: "초보도 쉬운 낚시 플랫폼",
    url: "https://luremonster.kr",
    siteName: "LureMonster",
    images: ["/og.png"], // public/og.png 준비 시 공유 썸네일
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-dvh bg-neutral-50 text-neutral-900 antialiased">
        {/* 헤더 */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-[0_1px_0_rgba(0,0,0,0.04)]">
          <nav className="container-px h-14 flex items-center justify-between">
            <Link href="/" className="font-bold">
              <span className="text-brand">Lure</span>Monster
            </Link>

            <div className="hidden md:flex gap-6 text-sm">
              <Link href="/about" className="hover:underline">소개</Link>
              <Link href="/services" className="hover:underline">서비스</Link>
              <Link href="/contact" className="hover:underline">문의</Link>
            </div>

            {/* 모바일 햄버거 */}
            <MobileNav />
          </nav>
        </header>

        {/* 메인 */}
        <main className="container-px py-10">{children}</main>

        {/* 푸터 */}
        <footer className="border-t mt-16">
          <div className="container-px py-8 text-sm text-neutral-500">
            © {new Date().getFullYear()} LureMonster. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
