"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden" aria-label="메뉴 열기">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <nav className="mt-10 grid gap-4 text-base">
          <a href="/about" className="hover:underline">소개</a>
          <a href="/services" className="hover:underline">서비스</a>
          <a href="/contact" className="hover:underline">문의</a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
