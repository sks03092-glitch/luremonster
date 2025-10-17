// app/page.tsx
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { NewGear } from "@/components/sections/NewGear"; // ✅ 추가
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <NewGear />   {/* ✅ 새로운 장비 섹션 */}
      <CTA />
    </>
  );
}
