import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";                 // ✅ Link import
import { MobileNav } from "@/components/mobilenav"; // ✅ 파일 경로 일치 확인 (소문자/대문자)

export const metadata: Metadata = {
  title: "LureMonster",
  description: "루어몬스터 – 반응형 낚시 웹/앱 플랫폼",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-dvh bg-white text-neutral-900 antialiased">
        {/* 헤더 */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
          <nav className="container-px h-14 flex items-center justify-between">
            {/* <a> 대신 Link */}
            <Link href="/" className="font-semibold">LureMonster</Link>

            {/* 데스크탑 메뉴 */}
            <div className="hidden md:flex gap-6 text-sm">
              <Link href="/about" className="hover:underline">소개</Link>
              <Link href="/services" className="hover:underline">서비스</Link>
              <Link href="/contact" className="hover:underline">문의</Link>
            </div>

            {/* 모바일 메뉴 버튼 */}
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
