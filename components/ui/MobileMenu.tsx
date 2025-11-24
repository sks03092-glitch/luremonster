// components/ui/MobileMenu.tsx
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { STORE_URL } from "../../app/lib/config"; // ✅ 스토어 URL 중앙관리 값 사용

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  // 메뉴 열릴 때 바디 스크롤 잠금
  useEffect(() => {
    if (open) document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* 햄버거 버튼 (우측 상단, 모바일 전용) */}
      <button
        aria-label="메뉴 열기"
        onClick={() => setOpen(true)}
        className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl
                   hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2
                   focus-visible:ring-brand"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* 사이드바 & 백드롭 */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black"
              onClick={() => setOpen(false)}
            />

            {/* Right Drawer (오른쪽→왼쪽 슬라이드) */}
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed right-0 top-0 z-[70] h-dvh w-[82%] max-w-[360px]
                         bg-white shadow-2xl border-l flex flex-col"
              role="dialog"
              aria-modal="true"
            >
              {/* 상단 바 */}
              <div className="flex items-center justify-between px-5 h-14 border-b">
                <div className="font-semibold">
                  <span className="text-brand">Lure</span>Monster
                </div>
                <button
                  aria-label="메뉴 닫기"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-black/5"
                  onClick={() => setOpen(false)}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* 메뉴 항목 */}
              <nav className="flex-1 overflow-y-auto px-5 py-4">
                <Link href="/about" onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-base hover:bg-black/5">소개</Link>
                <Link href="/services" onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-base hover:bg-black/5">서비스</Link>
                <Link href="/contact" onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-base hover:bg-black/5">문의</Link>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {/* ✅ 스토어 이동: 실제 스토어 URL 새 탭 오픈 */}
                  <a
                    href={STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center rounded-2xl px-4 py-3
                               bg-brand/90 text-white font-semibold hover:bg-brand transition-all"
                  >
                    스토어 이동
                  </a>

                  <a
                    href="#features"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center rounded-2xl px-4 py-3
                               bg-neutral-100 text-neutral-800 font-semibold hover:bg-neutral-200 transition-all"
                  >
                    더 알아보기
                  </a>
                </div>
              </nav>

              {/* 하단 저작권 */}
              <div className="px-5 py-4 text-xs text-neutral-500 border-t">
                © {new Date().getFullYear()} LureMonster
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
