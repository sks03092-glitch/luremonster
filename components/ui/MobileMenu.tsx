"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// ① 별칭을 안 쓸 때 (추천: alias 에러가 있었던 환경이라면 이걸로)
// import { STORE_URL } from "../lib/config";
// ② 별칭을 쓸 때 (tsconfig paths 설정 + dev 재시작 필요)
import { STORE_URL } from "@/lib/config";

type MobileMenuProps = {
  // 필요하면 props로 open 제어도 가능하지만 내부 상태로 둡니다.
};

export default function MobileMenu({}: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // 메뉴 열릴 때 body 스크롤 잠금
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* 햄버거 버튼 (오른쪽 상단) */}
      <button
        aria-label="열기"
        className="fixed right-4 top-3 z-[60] inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm font-medium shadow-sm md:hidden"
        onClick={() => setOpen(true)}
      >
        {/* 아이콘 */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="#111" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* 오버레이 */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-[1px]"
          onClick={close}
        >
          {/* 오른쪽에서 슬라이드되는 패널 */}
          <div
            className="absolute right-0 top-0 h-full w-[78%] max-w-[360px] translate-x-0 bg-white shadow-2xl transition-transform duration-300 ease-out
                       will-change-transform animate-slideInFromRight"
            onClick={(e) => e.stopPropagation()} // 패널 내부 클릭은 오버레이로 버블링되지 않도록
          >
            <div className="flex h-12 items-center justify-between border-b px-4">
              <span className="text-base font-semibold">메뉴</span>
              <button
                aria-label="닫기"
                onClick={close}
                className="rounded-md p-2 hover:bg-neutral-100"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6l-12 12" stroke="#111" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-1 p-4 text-[15px]">
              {/* 소개/서비스/문의: 내부 라우팅 */}
              <Link
                href="/about"
                className="rounded-lg px-3 py-3 hover:bg-neutral-100"
                onClick={close}
              >
                소개
              </Link>
              <Link
                href="/services"
                className="rounded-lg px-3 py-3 hover:bg-neutral-100"
                onClick={close}
              >
                서비스
              </Link>
              <Link
                href="/contact"
                className="rounded-lg px-3 py-3 hover:bg-neutral-100"
                onClick={close}
              >
                문의
              </Link>

              <div className="my-2 h-[1px] bg-neutral-200" />

              {/* 스토어 이동: 외부 URL - 같은 탭에서 열기 */}
              <a
                href={STORE_URL}
                // 새 탭에서 열고 싶다면 target="_blank" rel="noopener noreferrer" 추가
                className="rounded-xl bg-brand/90 px-3 py-3 text-center font-semibold text-white shadow-[0_6px_16px_rgba(234,85,20,0.3)]
                           hover:bg-brand hover:shadow-[0_8px_22px_rgba(234,85,20,0.4)] transition-all"
                onClick={close} // 닫기만 하고 기본 이동은 그대로 수행
              >
                스토어 이동
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

/* Tailwind keyframes: globals.css에 이미 있을 수 있음. 없으면 아래 추가
@keyframes slideInFromRight {
  from { transform: translateX(100%); }
  to   { transform: translateX(0%); }
}
*/
