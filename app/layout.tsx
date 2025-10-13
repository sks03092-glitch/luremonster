import type { Metadata } from "next";
import "./globals.css";

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
            <a href="/" className="font-semibold">LureMonster</a>

            {/* 데스크탑 메뉴 */}
            <div className="hidden md:flex gap-6 text-sm">
              <a href="/about" className="hover:underline">소개</a>
              <a href="/services" className="hover:underline">서비스</a>
              <a href="/contact" className="hover:underline">문의</a>
            </div>
          </nav>
        </header>

        {/* 메인 컨텐츠 */}
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
