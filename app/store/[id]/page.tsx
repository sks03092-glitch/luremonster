"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/app/lib/data";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ExternalLink, ChevronDown, ShoppingCart } from "lucide-react";
import { use, useState } from "react";
import { useCart } from "@/app/context/CartContext"; // ✅ useCart 훅 불러오기

function NPayLogo() {
  return (
    <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
      <path d="M7.3 23.9H0V0H7.3V12.9L14.7 0H22V23.9H14.7V11L7.3 23.9Z" fill="white"/>
      <path d="M25.5 0H37.8C44.7 0 47.9 3.9 47.9 9.1C47.9 14.1 45.4 17.5 40.2 17.5H32.4V23.9H25.5V0ZM37.3 11.5C39.5 11.5 40.7 10.5 40.7 8.9C40.7 7.4 39.7 6.1 37.3 6.1H32.4V11.5H37.3Z" fill="white"/>
      <path d="M54.5 24.2C51.5 24.2 49.3 22.8 48.7 19.8H55.4C55.6 18.9 56.4 18.4 57.3 18.4C58.3 18.4 58.8 19 58.8 19.9V21.1L54.7 19.6C51.3 18.3 49.6 16.4 49.6 13.7C49.6 10.3 52.4 8.2 56.1 8.2C59.6 8.2 61.9 10.2 62.1 13H55.6C55.4 13.9 54.8 14.2 53.9 14.2C52.9 14.2 52.5 13.6 52.5 12.8C52.5 12.3 52.7 12 53.1 11.8L57.2 13.3C60.6 14.6 62.4 16.6 62.4 19.4C62.4 22.5 59.5 24.2 54.5 24.2Z" fill="white"/>
    </svg>
  );
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { addToCart } = useCart(); // ✅ 장바구니 기능 가져오기
  const product = products.find((p) => p.id === id);

  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

  if (!product) {
    return notFound();
  }

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionName]: value,
    }));
  };

  // 공통 유효성 검사 (옵션 선택 여부)
  const validateOptions = () => {
    if (product.options && product.options.length > 0) {
      const missingOptions = product.options.filter(opt => !selectedOptions[opt.name]);
      if (missingOptions.length > 0) {
        alert(`${missingOptions[0].name} 옵션을 선택해주세요!`);
        return false;
      }
    }
    return true;
  };

  // ✅ 장바구니 담기 핸들러
  const handleAddToCart = () => {
    if (!validateOptions()) return;
    
    addToCart(product, selectedOptions); // Context에 추가
  };

  const handleNPayBuy = () => {
    if (!validateOptions()) return;

    const width = 1100;
    const height = 800;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    window.open(
      product.smartStoreUrl,
      "NPayCheckout",
      `width=${width},height=${height},top=${top},left=${left},scrollbars=yes,resizable=yes`
    );
  };

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

        {/* 오른쪽: 상품 정보 및 옵션 선택 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col h-full"
        >
          {/* ... (상단 정보 및 옵션 선택 코드는 동일) ... */}
          <div className="mb-3 flex items-center gap-2">
            <span className="text-brand font-bold text-sm tracking-wide uppercase bg-brand/10 px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-2 leading-tight">
            {product.name}
          </h1>

          <div className="text-3xl font-semibold text-neutral-900 mb-6">
            {product.price.toLocaleString()}원
          </div>

          <p className="text-neutral-600 leading-relaxed mb-8 border-b border-neutral-100 pb-8">
            {product.detailDescription}
          </p>

          {/* 옵션 선택 영역 */}
          {product.options && product.options.length > 0 && (
            <div className="space-y-4 mb-8">
              {product.options.map((opt) => (
                <div key={opt.name}>
                  <label className="block text-sm font-bold text-neutral-800 mb-2">
                    {opt.name}
                  </label>
                  <div className="relative">
                    <select
                      className="w-full appearance-none bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 pr-10 text-neutral-700 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
                      onChange={(e) => handleOptionChange(opt.name, e.target.value)}
                      defaultValue=""
                    >
                      <option value="" disabled>옵션을 선택해주세요</option>
                      {opt.values.map((val) => (
                        <option key={val} value={val}>{val}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 특징 리스트 */}
          <div className="grid grid-cols-2 gap-3 mb-10">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-center text-sm text-neutral-600">
                <Check className="w-4 h-4 text-brand mr-2" strokeWidth={2.5} />
                {feature}
              </div>
            ))}
          </div>

          {/* ✅ 버튼 영역 (2개로 나눔) */}
          <div className="mt-auto pt-4 flex gap-3">
            {/* 장바구니 버튼 */}
            <button
              onClick={handleAddToCart}
              className="flex-1 h-16 rounded-2xl flex items-center justify-center border-2 border-neutral-100 text-neutral-700 font-bold text-lg hover:border-brand hover:text-brand hover:bg-brand/5 transition-all active:scale-[0.98]"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              장바구니
            </button>

            {/* 네이버페이 구매 버튼 */}
            <button
              onClick={handleNPayBuy}
              className="flex-[2] relative h-16 rounded-2xl flex items-center justify-center shadow-[0_4px_14px_rgba(3,199,90,0.4)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(3,199,90,0.5)] hover:-translate-y-1 active:scale-[0.98]"
              style={{ backgroundColor: "#03C75A" }}
            >
              <div className="flex items-center justify-center">
                <NPayLogo />
                <span className="text-white text-xl font-bold ml-1 pt-1">구매하기</span>
              </div>
              <ExternalLink className="absolute right-6 text-white/70 w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* 상세 정보 섹션 */}
      <section className="container mt-20 pt-16 border-t border-neutral-100 text-center">
        <h3 className="text-2xl font-bold mb-6 text-neutral-900">상세 정보</h3>
        <div className="bg-neutral-50 rounded-3xl p-20 text-neutral-400 border border-neutral-100 border-dashed min-h-[400px] flex items-center justify-center flex-col">
             <p className="mb-4">상품 상세 이미지가 들어갈 공간입니다.</p>
        </div>
      </section>
    </main>
  );
}