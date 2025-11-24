// app/page.tsx

import { Hero } from "../components/sections/Hero";
import { Categories } from "../components/sections/Categories"; // ✅ 추가됨
import { Features } from "../components/sections/Features";
import { NewGear } from "../components/sections/NewGear";
import { CTA } from "../components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories /> {/* ✅ 배너 바로 아래에 배치 */}
      <Features />
      <NewGear />
      <CTA />
    </>
  );
}