"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../app/lib/data"; // ✅ 1단계 데이터 불러오기

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
          {products.map((it, i) => (
            <Link key={it.id} href={`/store/${it.id}`} className="block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                {/* 카드 컨테이너 */}
                <div className="relative aspect-[4/3] rounded-[2rem] bg-white overflow-hidden shadow-sm border border-neutral-100 transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group-hover:-translate-y-2">
                  
                  {/* 배경 이미지 */}
                  <div className="absolute inset-0 bg-neutral-200" />
                  <Image
                    src={it.images[0]} // 배열의 첫 번째 이미지 사용
                    alt={it.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* 텍스트 가독성을 위한 그라데이션 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                  
                  {/* 뱃지 */}
                  {it.badge && (
                    <div className="absolute top-5 left-5 z-20">
                        <span className={`px-3 py-1.5 rounded-lg text-white text-xs font-bold shadow-md ${it.tagColor || 'bg-brand'}`}>
                            {it.badge}
                        </span>
                    </div>
                  )}

                  {/* 상품 텍스트 정보 */}
                  <div className="absolute left-6 bottom-6 z-20">
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-100 transition-colors">
                      {it.name}
                    </h3>
                    <p className="text-sm text-neutral-200 mt-1 font-medium">
                      {it.description}
                    </p>
                  </div>

                  {/* 호버 효과 */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 pointer-events-none" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}