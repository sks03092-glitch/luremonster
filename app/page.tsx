// app/page.tsx
import { Hero } from "../components/sections/Hero";
import { Features } from "../components/sections/Features";
import { NewGear } from "../components/sections/NewGear";
import { CTA } from "../components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <NewGear />
      <CTA />
    </>
  );
}
