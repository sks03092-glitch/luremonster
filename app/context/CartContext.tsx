"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Product } from "@/app/lib/data";

// 장바구니에 담길 아이템 타입 (기존 상품 정보 + 선택한 옵션 + 수량)
export type CartItem = Product & {
  cartId: string; // 고유 ID (같은 상품이라도 옵션이 다르면 다른 상품 취급)
  selectedOption: Record<string, string>; // 선택한 옵션
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (product: Product, options: Record<string, string>) => void;
  removeFromCart: (cartId: string) => void;
  updateQuantity: (cartId: string, delta: number) => void;
  isCartOpen: boolean;
  toggleCart: () => void;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // 1. 처음 실행 시 로컬 스토리지에서 장바구니 불러오기
  useEffect(() => {
    setIsMounted(true);
    const savedCart = localStorage.getItem("lure-cart");
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  // 2. 장바구니가 변할 때마다 로컬 스토리지에 저장하기
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("lure-cart", JSON.stringify(items));
    }
  }, [items, isMounted]);

  // 장바구니 담기 함수
  const addToCart = (product: Product, options: Record<string, string>) => {
    // 옵션까지 포함해서 이미 장바구니에 있는지 확인
    // 옵션 객체를 문자열로 만들어서 비교 (간단한 방법)
    const optionKey = JSON.stringify(options);
    
    setItems((prev) => {
      const existingItem = prev.find(
        (item) => item.id === product.id && JSON.stringify(item.selectedOption) === optionKey
      );

      if (existingItem) {
        // 이미 있으면 수량만 +1
        return prev.map((item) =>
          item.cartId === existingItem.cartId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // 없으면 새로 추가
        return [
          ...prev,
          {
            ...product,
            cartId: `${product.id}-${Date.now()}`, // 고유 ID 생성
            selectedOption: options,
            quantity: 1,
          },
        ];
      }
    });
    
    // 장바구니 열어주기 (사용자 경험 향상)
    setIsCartOpen(true);
  };

  // 삭제 함수
  const removeFromCart = (cartId: string) => {
    setItems((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  // 수량 조절 함수
  const updateQuantity = (cartId: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.cartId === cartId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  // 총 가격 계산
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, isCartOpen, toggleCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}