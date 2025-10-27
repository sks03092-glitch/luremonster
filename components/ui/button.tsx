// components/ui/button.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-base font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: [
          "bg-brand/90 text-white",
          "shadow-[0_4px_16px_rgba(0,0,0,0.05),0_1px_4px_rgba(0,0,0,0.04)]",
          "hover:bg-brand hover:opacity-100",
          "hover:shadow-[0_6px_20px_rgba(234,85,20,0.45),0_2px_8px_rgba(234,85,20,0.25)]",
          "focus-visible:ring-brand",
        ].join(" "),
        outline: [
          "bg-white/80 text-neutral-800",
          "shadow-[0_3px_14px_rgba(0,0,0,0.045),0_1px_3px_rgba(0,0,0,0.035)]",
          "hover:bg-neutral-50",
          "hover:shadow-[0_6px_20px_rgba(234,85,20,0.35),0_2px_8px_rgba(234,85,20,0.2)]",
          "focus-visible:ring-brand/50",
        ].join(" "),
        ghost: [
          "bg-transparent text-neutral-800",
          "shadow-[0_2px_10px_rgba(0,0,0,0.04)]",
          "hover:bg-neutral-100",
          "hover:shadow-[0_6px_20px_rgba(234,85,20,0.3)]",
        ].join(" "),
      },
      size: {
        default: "h-12 px-5",
        sm: "h-10 px-4",
        lg: "h-14 px-6",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
);
Button.displayName = "Button";
