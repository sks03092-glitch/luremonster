"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { STORE_URL } from "../../app/lib/config";

export function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 패럴랙스 효과 (배경이 스크롤에 따라 천천히 움직임)
  const layerBackY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const layerMidY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const illustrationSrc = "/hero_illustration.svg";

  return (
    <section
      ref={ref}
      // ✅ 수정 1: min-h-[calc(100vh-64px)] 제거하고, 적절한 고정 최소 높이로 변경하여 전체 배너 사이즈 축소
      // py-12 lg:py-0 -> py-10 lg:py-16 으로 패딩 조절
      className="relative overflow-hidden bg-[#FFF9F5] min-h-[500px] lg:min-h-[640px] flex items-center py-10 lg:py-16"
    >
      {/* 배경 장식 요소 (부드러운 빛 효과) */}
      <motion.div
        aria-hidden
        style={{ y: layerBackY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#FFD9BE]/40 rounded-full blur-[120px]" />
      </motion.div>

      {/* 중간 레이어 장식 */}
      <motion.div
        aria-hidden
        style={{ y: layerMidY }}
        className="absolute top-[20%] right-[10%] w-[100px] h-[100px] bg-brand/20 rounded-full blur-[40px] animate-pulse"
      />

      <div className="container relative flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20">
        
        {/* 텍스트 영역 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left max-w-xl z-10"
        >
          {/* 작은 뱃지 포인트 */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-brand/20 text-brand text-sm font-bold mb-8 shadow-sm">
            🚀 낚시 플랫폼의 새로운 시작
          </div>

          {/* ✅ 수정 2: leading-[1.3] -> leading-[1.5]로 변경하여 줄 간격 확대 */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3rem] font-bold leading-[1.5] tracking-[-0.02em] text-neutral-900 break-keep">
            쉽고 재밌는 낚시,<br />
            <span className="text-brand">루어몬스터</span>에서 시작!
          </h1>
          
          <p className="mt-6 text-neutral-600 text-lg sm:text-[1.15rem] leading-[1.7] break-keep">
            초보부터 전문가까지 누구나 환영해요.<br className="hidden sm:block"/>
            정보 공유부터 장비 구매까지 한 번에 해결하세요.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-2xl
                         bg-brand shadow-[0_4px_14px_rgba(234,85,20,0.4)]
                         hover:bg-brand/90 hover:scale-[1.02] active:scale-[0.98] 
                         transition-all duration-200"
            >
              스토어 구경하기
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-2xl
                         bg-white text-neutral-800 border border-neutral-200
                         hover:border-brand/30 hover:bg-brand/5 hover:text-brand 
                         transition-all duration-200"
            >
              더 알아보기
            </a>
          </div>
        </motion.div>

        {/* 이미지 영역 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-[410px] lg:max-w-[480px]"
        >
          {/* 이미지 뒤에 원형 배경 (제품 강조) */}
          <div className="absolute inset-4 bg-gradient-to-tr from-[#FFE4CC] to-white rounded-[2rem] -z-10 transform rotate-3" />
          
          <Image
            src={illustrationSrc}
            alt="루어몬스터 메인 일러스트"
            width={800}
            height={600}
            priority
            className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}