"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
// ✅ 경로 수정: ../../../ 대신 @/app/ 을 사용하면 파일 위치가 바뀌어도 오류가 안 납니다.
import { products } from "@/app/lib/data"; 
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

// URL의 slug를 한글 이름으로 보여주기 위한 맵핑
const categoryNames: Record<string, string> = {
  rod: "낚시대",
  reel: "릴",
  lure: "루어/미끼",
  line: "라인/바늘",
  box: "태클박스",
  boat: "보트용품",
};

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryId = params.slug;
  const categoryName = categoryNames[categoryId];

  // 1. 해당 카테고리에 맞는 상품만 필터링
  // products를 제대로 불러오게 되면 p 에러(any 형식)는 자동으로 사라집니다.
  const filteredProducts = products.filter((p) => p.categoryId === categoryId);

  // 카테고리가 정의되지 않은 것이면 404
  if (!categoryName) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-white pb-24">
      {/* 헤더 영역 */}
      <div className="bg-neutral-50 border-b border-neutral-100 pt-10 pb-12">
        <div className="container">
          <Link href="/" className="inline-flex items-center text-sm text-neutral-500 hover:text-brand mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            홈으로
          </Link>
          <h1 className="text-3xl font-bold text-neutral-900">
            {categoryName} <span className="text-brand">({filteredProducts.length})</span>
          </h1>
          <p className="text-neutral-500 mt-2">
            루어몬스터가 추천하는 {categoryName} 라인업입니다.
          </p>
        </div>
      </div>

      {/* 상품 목록 영역 */}
      <div className="container py-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product, i) => (
              <Link key={product.id} href={`/store/${product.id}`} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-3xl bg-neutral-100 overflow-hidden border border-neutral-100 transition-all duration-300 group-hover:shadow-[0_16px_32px_rgba(234,85,20,0.15)] group-hover:-translate-y-2">
                    {/* 이미지 */}
                    {product.images[0] ? (
                       <Image
                       src={product.images[0]}
                       alt={product.name}
                       fill
                       className="object-cover transition-transform duration-500 group-hover:scale-105"
                     />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-400 bg-neutral-200">이미지 준비중</div>
                    )}
                   

                    {/* 텍스트 정보 (하단 오버레이) */}
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <div className="text-brand font-bold text-xs mb-1 uppercase tracking-wider">
                        {product.badge || product.category}
                      </div>
                      <h3 className="text-white text-xl font-bold truncate">
                        {product.name}
                      </h3>
                      <p className="text-neutral-200 text-sm mt-1 truncate">
                        {product.description}
                      </p>
                      <div className="mt-3 flex items-center text-white font-semibold">
                        {product.price.toLocaleString()}원
                        <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        ) : (
          /* 상품이 없을 때 보여줄 화면 */
          <div className="py-20 text-center rounded-3xl bg-neutral-50 border border-dashed border-neutral-200">
            <div className="text-4xl mb-4">🎣</div>
            <h3 className="text-lg font-bold text-neutral-900">아직 등록된 상품이 없어요.</h3>
            <p className="text-neutral-500 mt-2">빠른 시일 내에 좋은 장비로 채워넣을게요!</p>
            <Link href="/" className="inline-block mt-6 px-6 py-3 bg-white border border-neutral-200 rounded-xl text-sm font-bold hover:bg-brand hover:text-white hover:border-brand transition-all">
                다른 상품 보러가기
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}