"use client";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div
        className={cn(
          "mb-section md:mb-16",
          align === "center" && "text-center max-w-2xl mx-auto"
        )}
      >
        {label && (
          <p
            className={cn(
              "font-body text-caption-sm uppercase tracking-[0.2em] mb-3",
              light ? "text-accent-warm" : "text-accent-warm"
            )}
          >
            {label}
          </p>
        )}
        <h2
          className={cn(
            "font-display text-display-campaign uppercase",
            light ? "text-canvas" : "text-ink"
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-lg font-body text-body-md",
              light ? "text-stone" : "text-mute"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
