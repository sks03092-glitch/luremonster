// components/sections/Hero.tsx
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

  const layerBackY  = useTransform(scrollYProgress, [0, 1], ["100%",  "100%"]);
  const layerMidY   = useTransform(scrollYProgress, [0, 1], ["0%",  "24%"]);
  const layerFrontY = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);

  const illustrationSrc = "/hero_illustration.svg";

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#FFF9F5]">
      <motion.div
        aria-hidden
        style={{ y: layerBackY }}
        className="absolute inset-0 bg-gradient-to-br from-[#FFE4CC] via-[#FFD5B0] to-[#FFF3E5] opacity-30"
      />
      <motion.div
        aria-hidden
        style={{ y: layerMidY }}
        className="absolute -left-100 top-10 h-[30px] w-[200px] rounded-full bg-[#FFB888]/60 blur-1xl animate-soft-pulse-wide"
      />
      <motion.div
        aria-hidden
        style={{ y: layerFrontY }}
        className="absolute right-[-140px] bottom-[-140px] h-[680px] w-[680px] rounded-full bg-[#FFD9BE]/50 blur-1xl animate-soft-pulse-wide"
      />
      <div className="absolute inset-0 glossy-overlay" aria-hidden />

      <div className="container relative flex flex-col-reverse lg:flex-row items-center justify-between py-24 lg:py-32 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left max-w-xl"
        >
          <h1 className="text-4xl sm:text-4xl lg:text-4.5xl font-extrabold leading-snug text-neutral-900">
            쉽고 재밌게 즐기는 낚시<br />
            초보부터 전문가까지 한곳에!
          </h1>
          <p className="mt-4 text-neutral-700 text-base sm:text-lg">
            루어몬스터와 함께하세요!
          </p>

          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 text-lg font-semibold text-white rounded-2xl
                         bg-brand/90 shadow-[0_6px_16px_rgba(234,85,20,0.3)]
                         hover:bg-brand hover:shadow-[0_8px_22px_rgba(234,85,20,0.4)] transition-all"
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative w-full max-w-[500px]"
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
