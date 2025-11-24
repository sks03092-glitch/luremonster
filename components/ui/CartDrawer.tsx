"use client";

import { useCart } from "@/app/context/CartContext";
import { AnimatePresence, motion } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";

export function CartDrawer() {
  const { isCartOpen, toggleCart, items, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* 어두운 배경 (클릭 시 닫힘) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 z-[99] bg-black bg-opacity-50 backdrop-blur-sm"
          />

          {/* 오른쪽에서 나오는 서랍 */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 z-[100] h-full w-full max-w-md bg-white shadow-2xl flex flex-col"
          >
            {/* 헤더 */}
            <div className="flex items-center justify-between p-5 border-b">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-brand" />
                장바구니 <span className="text-brand text-sm align-top">({items.length})</span>
              </h2>
              <button onClick={toggleCart} className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                <X className="w-6 h-6 text-neutral-500" />
              </button>
            </div>

            {/* 상품 목록 */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-neutral-400 space-y-4">
                  <ShoppingBag className="w-16 h-16 opacity-20" />
                  <p>장바구니가 비어있어요.</p>
                  <button 
                    onClick={toggleCart}
                    className="px-6 py-2 bg-neutral-100 rounded-full text-sm font-bold text-neutral-600 hover:bg-neutral-200 transition-colors"
                  >
                    쇼핑 계속하기
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    {/* 이미지 */}
                    <div className="relative w-20 h-20 bg-neutral-50 rounded-xl overflow-hidden shrink-0 border border-neutral-100">
                      <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
                    </div>

                    {/* 정보 */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-neutral-900 text-sm line-clamp-1">{item.name}</h3>
                        {/* 선택한 옵션 표시 */}
                        <div className="text-xs text-neutral-500 mt-1 space-y-0.5">
                          {Object.entries(item.selectedOption).map(([key, value]) => (
                            <p key={key}><span className="opacity-70">{key}:</span> {value}</p>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="font-bold text-neutral-900">
                          {(item.price * item.quantity).toLocaleString()}원
                        </div>
                        
                        {/* 수량 조절 버튼 */}
                        <div className="flex items-center gap-3 bg-neutral-50 rounded-lg px-2 py-1">
                          <button onClick={() => updateQuantity(item.cartId, -1)} className="p-1 hover:text-brand">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-3 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.cartId, 1)} className="p-1 hover:text-brand">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* 삭제 버튼 */}
                    <button onClick={() => removeFromCart(item.cartId)} className="self-start text-neutral-300 hover:text-red-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* 하단 결제 버튼 */}
            {items.length > 0 && (
              <div className="p-6 border-t bg-neutral-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-neutral-500">총 결제 금액</span>
                  <span className="text-xl font-extrabold text-brand">{totalPrice.toLocaleString()}원</span>
                </div>
                <button 
                  className="w-full bg-brand text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-brand/20 hover:bg-brand-dark transition-all active:scale-[0.98]"
                  onClick={() => alert("현재 네이버페이 장바구니 연동 준비중입니다!\n개별 상품 페이지에서 구매해주세요. 😭")}
                >
                  구매하기
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}