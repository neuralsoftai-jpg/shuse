"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  speed?: "slow" | "normal" | "fast";
  className?: string;
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  reverse = false,
  speed = "normal",
  className,
  pauseOnHover = true,
}: MarqueeProps) {
  const speedMap = {
    slow: "60s",
    normal: "40s",
    fast: "25s",
  };

  return (
    <div
      className={cn(
        "overflow-hidden",
        pauseOnHover && "[&:hover>div]:paused",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max gap-section",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{
          animationDuration: speedMap[speed],
        }}
      >
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}
