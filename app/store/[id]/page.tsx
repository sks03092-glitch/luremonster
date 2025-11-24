// app/store/[id]/page.tsx

"use client"; // 이 파일은 클라이언트 컴포넌트여도, params는 비동기로 처리하는 것이 안전합니다.

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../lib/data"; 
import { motion } from "framer-motion";
import { ArrowLeft, Check, ShoppingBag, ExternalLink } from "lucide-react";
import { use } from "react"; // ✅ React 19/Next.js 15 호환을 위해 use 훅 사용 권장, 혹은 async/await 사용

// ✅ 타입 정의 수정: params를 Promise로 감싸줍니다.
export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  
  // ✅ params가 Promise이므로 use()를 쓰거나 await를 써야 하는데, 
  // 클라이언트 컴포넌트("use client")에서는 `use(params)`가 가장 깔끔한 최신 방식입니다.
  const { id } = use(params);

  // 주소창의 id와 일치하는 상품 찾기
  const product = products.find((p) => p.id === id);

  // 상품이 없으면 404 페이지
  if (!product) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-white pb-24">
      {/* 상단 네비게이션 */}
      <div className="sticky top-[64px] z-30 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="container h-14 flex items-center">
          <Link href="/#store" className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-brand transition-colors">
            <ArrowLeft className="mr-2 w-4 h-4" />
            목록으로 돌아가기
          </Link>
        </div>
      </div>

      <div className="container py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* 왼쪽: 상품 이미지 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-neutral-50 rounded-[2.5rem] aspect-square overflow-hidden border border-neutral-100 shadow-sm"
        >
          {product.badge && (
            <div className="absolute top-6 left-6 z-10">
              <span className={`text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg ${product.tagColor || 'bg-brand'}`}>
                {product.badge}
              </span>
            </div>
          )}
          
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* 오른쪽: 상품 정보 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="text-brand font-bold text-sm tracking-wide uppercase bg-brand/10 px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
            {product.name}
          </h1>

          <div className="text-3xl font-semibold text-neutral-900 mb-8">
            {product.price.toLocaleString()}원
          </div>

          <div className="h-px bg-neutral-100 w-full mb-8" />

          <p className="text-lg text-neutral-600 leading-relaxed mb-8 break-keep">
            {product.detailDescription}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-center text-neutral-700 bg-neutral-50 px-4 py-3 rounded-xl border border-neutral-100">
                <div className="w-6 h-6 rounded-full bg-brand flex items-center justify-center mr-3 text-white shadow-sm shrink-0">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </div>
                <span className="font-medium text-sm sm:text-base">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto">
            <a
              href={product.smartStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full bg-[#03C75A] text-white h-16 rounded-2xl flex items-center justify-center text-lg font-bold shadow-[0_4px_14px_rgba(3,199,90,0.4)] hover:bg-[#02b350] hover:shadow-[0_8px_24px_rgba(3,199,90,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              <ShoppingBag className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              네이버페이로 구매하기
              <ExternalLink className="w-4 h-4 ml-2 opacity-70" />
            </a>
            <p className="mt-3 text-xs text-neutral-400 text-center">
              ⓘ 안전한 결제를 위해 네이버 스마트스토어 페이지로 이동합니다.
            </p>
          </div>
        </motion.div>
      </div>
      
      <section className="container mt-20 pt-16 border-t border-neutral-100 text-center">
        <h3 className="text-2xl font-bold mb-6 text-neutral-900">상세 정보</h3>
        <div className="bg-neutral-50 rounded-3xl p-20 text-neutral-400 border border-neutral-100 border-dashed">
             여기에 상세페이지 통이미지(Long Image)를 넣으시면 됩니다.
             <br />
             &lt;Image src="..." /&gt; 태그를 사용하세요.
        </div>
      </section>
    </main>
  );
}