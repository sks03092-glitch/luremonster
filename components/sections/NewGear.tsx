// components/sections/NewGear.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ✅ 1단계에서 넣은 사진 파일명과 똑같이 적어주세요.
const items = [
  {
    key: "reel",
    tag: "NEW",
    tagColor: "bg-blue-500",
    title: "Shimano 201",
    desc: "시마노 포스마스터",
    // public/images/rod.jpg 파일을 불러옵니다.
    image: "/images/01_shimano_201.jpg", 
  },
  {
    key: "reel",
    tag: "HOT",
    tagColor: "bg-red-500",
    title: "Shimano CT150 hg",
    desc: "수심측정 원터치 베이트 릴",
    image: "/images/02_shimano_CT150hg.jpg",
  },
  {
    key: "reel",
    tag: "BEST",
    tagColor: "bg-brand",
    title: "Abugarsia maxDLC",
    desc: "최적화 라인카운터 베이트 릴",
    image: "/images/03_abugarsia_maxDLC.jpg",
  },
];

export function NewGear() {
  return (
    <section id="store" className="py-24 bg-neutral-50">
      <div className="container">
        {/* 섹션 헤더 */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-3">
            따끈따끈한 <span className="text-brand">11월 신상 장비</span>
          </h2>
          <p className="text-neutral-500 text-lg">
            루어몬스터가 엄선한 최고의 장비들을 만나보세요.
          </p>
        </div>

        {/* 그리드 레이아웃 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <motion.div
              key={it.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => console.log(`clicked ${it.key}`)}
            >
              {/* 카드 컨테이너 */}
              <div className="relative aspect-[4/3] rounded-[2rem] bg-white overflow-hidden shadow-sm border border-neutral-100 transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group-hover:-translate-y-2">
                
                {/* 1. 배경 이미지 (Next.js Image 사용) */}
                {/* 이미지가 없을 경우를 대비해 기본 회색 배경을 깔아둡니다 */}
                <div className="absolute inset-0 bg-neutral-200" />
                
                <Image
                  src={it.image}
                  alt={it.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* 2. 텍스트 가독성을 위한 그라데이션 (사진 위에 글씨가 잘 보이게 함) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                
                {/* 3. 뱃지 (왼쪽 상단) */}
                <div className="absolute top-5 left-5 z-20">
                    <span className={`px-3 py-1.5 rounded-lg text-white text-xs font-bold shadow-md ${it.tagColor}`}>
                        {it.tag}
                    </span>
                </div>

                {/* 4. 상품 텍스트 정보 (왼쪽 하단 - 흰색 텍스트로 변경) */}
                <div className="absolute left-6 bottom-6 z-20">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-100 transition-colors">
                    {it.title}
                  </h3>
                  <p className="text-sm text-neutral-200 mt-1 font-medium">
                    {it.desc}
                  </p>
                </div>

                {/* 호버 효과: 전체적으로 밝아지는 느낌 */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}