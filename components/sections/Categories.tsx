// components/sections/Categories.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Anchor, Fish, Ship, Disc, Navigation, Box } from "lucide-react"; // 아이콘 불러오기

// 카테고리 목록 정의
const categories = [
  { id: "rod", name: "낚시대", icon: Navigation }, // 낚시대 모양이 없어서 비슷한 아이콘 사용
  { id: "reel", name: "릴", icon: Disc },
  { id: "lure", name: "루어/미끼", icon: Fish },
  { id: "line", name: "라인/바늘", icon: Anchor },
  { id: "box", name: "태클박스", icon: Box },
  { id: "boat", name: "보트용품", icon: Ship },
];

export function Categories() {
  return (
    <section className="py-12 border-b border-neutral-100 bg-white">
      <div className="container">
        <h2 className="text-xl font-bold mb-6 text-neutral-900 px-2">
          어떤 장비를 찾으세요?
        </h2>
        
        {/* 모바일에서 가로 스크롤 가능하게 설정 */}
        <div className="flex gap-4 overflow-x-auto pb-4 px-2 scrollbar-hide -mx-4 sm:mx-0 sm:grid sm:grid-cols-6 sm:overflow-visible">
          {/* 모바일 양옆 여백용 더미 (스크롤 시 잘려 보이지 않게) */}
          <div className="w-2 shrink-0 sm:hidden" />
          
          {categories.map((cat, i) => (
            <Link key={cat.id} href={`/store/category/${cat.id}`} className="shrink-0 group">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-3 w-20 sm:w-auto"
              >
                {/* 아이콘 원형 배경 */}
                <div className="w-16 h-16 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-500 group-hover:bg-brand/10 group-hover:border-brand/20 group-hover:text-brand transition-all duration-300 shadow-sm group-hover:shadow-[0_4px_12px_rgba(234,85,20,0.15)] group-hover:-translate-y-1">
                  <cat.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                {/* 텍스트 */}
                <span className="text-sm font-medium text-neutral-600 group-hover:text-neutral-900 transition-colors">
                  {cat.name}
                </span>
              </motion.div>
            </Link>
          ))}
          
          <div className="w-2 shrink-0 sm:hidden" />
        </div>
      </div>
    </section>
  );
}