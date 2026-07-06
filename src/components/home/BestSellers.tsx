"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { bestSellers } from "@/data/products";

export function BestSellers() {
  return (
    <section className="section-padding bg-canvas">
      <div className="container-premium">
        <SectionHeading
          label="Most Loved"
          title="Best Sellers"
          description="Discover the styles our community can't stop buying — tried, tested, and top-rated by thousands of UNOCO customers."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-sm md:gap-4 md:gap-y-6">
          {bestSellers.slice(0, 8).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
