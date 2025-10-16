"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const illustrationSrc = "/hero_illustration.svg"; // ✅ 네가 만든 SVG 파일 이름
  return (
    <section ref={ref} className="relative overflow-hidden bg-[#FFF9F5]">
      {/* === 배경 오렌지 그라데이션 === */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 bg-gradient-to-br from-[#FFE4CC] via-[#FFD5B0] to-[#FFF3E5] opacity-0"
      />

      {/* === 둥근 배경 오브젝트 (상단 왼쪽 / 하단 오른쪽) === */}
      <motion.div
        style={{ y: y2 }}
        className="absolute -left-22 top-20 h-[200px] w-[200px] rounded-full bg-[#FFB888]/30 blur-1xl animate-pulse"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute right-[100px] bottom-[100px] h-[60px] w-[60px] rounded-full bg-[#FFD9BE]/25 blur-1xl animate-pulse"
      />

      {/* === 콘텐츠 영역 === */}
      <div className="container relative flex flex-col-reverse lg:flex-row items-center justify-between py-24 lg:py-32 gap-12">
        {/* 텍스트 블록 */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left max-w-xl"
        >
          <h1 className="text-4xl sm:text-4xl lg:text-4xl font-extrabold leading-normal text-neutral-900">
            쉽고 재밌게 즐기는 낚시<br />
            초보부터 전문가까지 한곳에!
          </h1>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg">
            루어몬스터와 함께하세요!
          </p>

          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <a
              href="#store"
              className="inline-flex items-center justify-center px-7 py-3.5 text-lg font-semibold text-white rounded-2xl
                         bg-brand/90 shadow-[0_6px_16px_rgba(234,85,20,0.3)] hover:bg-brand hover:shadow-[0_8px_22px_rgba(234,85,20,0.4)] transition-all"
            >
              스토어 이동
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-7 py-3.5 text-lg font-semibold rounded-2xl
                         bg-white text-neutral-800 shadow-[0_6px_16px_rgba(0,0,0,0.06)]
                         hover:shadow-[0_8px_22px_rgba(234,85,20,0.25)] hover:text-brand transition-all"
            >
              더 알아보기
            </a>
          </div>
        </motion.div>

        {/* 일러스트 전체 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative w-full max-w-[520px]"
        >
          <Image
            src={illustrationSrc}
            alt="루어몬스터 일러스트"
            width={800}
            height={600}
            priority
            className="w-full h-auto object-contain drop-shadow-[0_10px_25px_rgba(234,85,20,0.25)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
