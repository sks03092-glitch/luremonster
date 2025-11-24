"use client"; // ✅ 이 한 줄이 핵심입니다! (클라이언트 전용 선언)

import { useCart } from "@/app/context/CartContext";
import { ShoppingCart } from "lucide-react";

export function CartButton() {
  const { toggleCart, items } = useCart();
  
  // 클라이언트에서만 작동하므로 안전하게 렌더링
  return (
    <button 
      onClick={toggleCart} 
      className="relative p-2 hover:bg-neutral-100 rounded-full transition-colors group"
      aria-label="장바구니 열기"
    >
      <ShoppingCart className="w-6 h-6 text-neutral-600 group-hover:text-brand" />
      {items.length > 0 && (
        <span className="absolute top-0 right-0 bg-brand text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm">
          {items.length}
        </span>
      )}
    </button>
  );
}