// app/layout.tsx

import "./globals.css";
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { MobileMenu } from "../components/ui/MobileMenu";
import { CartProvider } from "./context/CartContext";
import { CartDrawer } from "../components/ui/CartDrawer";
import { CartButton } from "../components/ui/CartButton"; // ✅ 새로 만든 파일 불러오기

const PRETENDARD_CDN = `
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
`;

export const metadata: Metadata = {
  title: "LureMonster | 낚시의 모든 것",
  description: "쉽고 재밌게 즐기는 낚시, 초보부터 전문가까지 한곳에! 루어몬스터.",
  metadataBase: new URL("https://luremonster.kr"),
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "LureMonster",
    description: "쉽고 재밌게 즐기는 낚시 플랫폼",
    url: "https://luremonster.kr",
    siteName: "LureMonster",
    images: [
      {
        url: "/og.png", // ✅ public/og.png 파일을 가리킵니다.
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// ❌ 예전에 있던 function CartButton() { ... } 코드는 삭제되었습니다.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <style>{PRETENDARD_CDN}</style>
      </head>
      <body className="min-h-dvh bg-white text-neutral-900 antialiased font-['Pretendard',sans-serif]">
        {/* CartProvider로 전체 감싸기 */}
        <CartProvider>
          {/* Header */}
          <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
            <nav className="container flex h-16 items-center justify-between">
              {/* 로고 */}
              <Link href="/" className="flex items-center gap-1 group">
                <span className="text-xl font-bold tracking-tight transition-transform duration-300 group-hover:scale-105">
                  <span className="text-brand">Lure</span>Monster
                </span>
              </Link>

              {/* 데스크톱 메뉴 */}
              <div className="hidden md:flex gap-8 text-[15px] font-medium text-neutral-600 items-center">
                <Link href="/about" className="hover:text-brand transition-colors">소개</Link>
                <Link href="/services" className="hover:text-brand transition-colors">서비스</Link>
                <Link href="/contact" className="hover:text-brand transition-colors">문의</Link>
                
                <div className="w-px h-4 bg-neutral-300 mx-2" />
                
                {/* ✅ 분리한 컴포넌트 사용 */}
                <CartButton />
              </div>

              {/* 모바일 햄버거 버튼 & 장바구니 */}
              <div className="md:hidden flex items-center gap-2">
                {/* ✅ 여기도 분리한 컴포넌트 사용 */}
                <CartButton />
                <MobileMenu />
              </div>
            </nav>
          </header>

          {children}
          
          <CartDrawer />

          {/* Footer */}
          <footer className="mt-32 border-t border-neutral-100 bg-neutral-50">
            <div className="container py-12 flex flex-col items-center justify-center text-center">
              <h4 className="font-bold text-lg mb-4">
                <span className="text-brand">Lure</span>Monster
              </h4>
              <div className="flex gap-6 text-sm text-neutral-500 mb-6">
                <Link href="/about" className="hover:text-neutral-800">회사소개</Link>
                <Link href="/terms" className="hover:text-neutral-800">이용약관</Link>
                <Link href="/privacy" className="hover:text-neutral-800">개인정보처리방침</Link>
              </div>
              <p className="text-xs text-neutral-400">
                © {new Date().getFullYear()} LureMonster. All rights reserved.
              </p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}