"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "lg" | "md" | "sm";
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "btn-ripple inline-flex items-center justify-center font-body font-medium transition-all duration-300 ease-out",
          "active:scale-[0.97] active:opacity-90",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2",
          // Variants
          variant === "primary" &&
            "bg-ink text-canvas hover:bg-charcoal rounded-lg",
          variant === "secondary" &&
            "bg-soft-cloud text-ink hover:bg-hairline-soft rounded-lg",
          variant === "outline" &&
            "bg-canvas text-ink border border-hairline hover:bg-soft-cloud rounded-lg",
          variant === "ghost" &&
            "bg-transparent text-ink hover:bg-soft-cloud rounded-lg",
          // Sizes
          size === "lg" && "text-button-lg px-10 py-4 min-h-[56px]",
          size === "md" && "text-button-md px-8 py-3.5 min-h-[48px]",
          size === "sm" && "text-button-sm px-6 py-2.5 min-h-[40px]",
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
