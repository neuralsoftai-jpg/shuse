"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { newArrivals } from "@/data/products";

export function NewArrivals() {
  return (
    <section className="section-padding bg-canvas">
      <div className="container-premium">
        <SectionHeading
          label="Just Dropped"
          title="New Arrivals"
          description="Fresh from the workshop — the latest additions to our lineup, crafted with the same uncompromising standard."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-sm md:gap-4 md:gap-y-6">
          {newArrivals.slice(0, 8).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
