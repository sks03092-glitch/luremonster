"use client";
import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;

export function SheetContent({
  side = "left",
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Dialog.Content> & {
  side?: "left" | "right" | "top" | "bottom";
}) {
  const sideClasses: Record<string, string> = {
    left: "left-0 top-0 h-full w-72 border-r animate-in slide-in-from-left",
    right: "right-0 top-0 h-full w-72 border-l animate-in slide-in-from-right",
    top: "top-0 left-0 w-full border-b animate-in slide-in-from-top",
    bottom: "bottom-0 left-0 w-full border-t animate-in slide-in-from-bottom",
  };
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/30" />
      <Dialog.Content
        className={cn("fixed bg-white p-6 shadow-xl focus:outline-none", sideClasses[side], className)}
        {...props}
      />
    </Dialog.Portal>
  );
}
