"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { trendingProducts } from "@/data/products";

export function TrendingProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -400 : 400;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-soft-cloud">
      <div className="container-premium">
        <div className="flex items-end justify-between mb-section">
          <div className="max-w-lg">
            <Reveal>
              <SectionHeading
                label="Hot Right Now"
                title="Trending"
                description="What everyone's wearing this season — our most-wanted styles flying off the shelves."
                align="left"
              />
            </Reveal>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-canvas border border-hairline flex items-center justify-center hover:bg-ink hover:text-canvas hover:border-ink transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-canvas border border-hairline flex items-center justify-center hover:bg-ink hover:text-canvas hover:border-ink transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-5 md:px-8 lg:px-12 xl:px-16 pb-4"
      >
        {trendingProducts.map((product, i) => (
          <div key={product.id} className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px]">
            <ProductCard product={product} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
