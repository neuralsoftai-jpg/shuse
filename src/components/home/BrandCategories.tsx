"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { categories } from "@/data/categories";

export function BrandCategories() {
  return (
    <section className="section-padding bg-canvas">
      <div className="container-premium">
        <Reveal>
          <div className="text-center mb-section">
            <p className="font-body text-caption-sm text-accent-warm uppercase tracking-[0.2em] mb-3">
              Browse by Category
            </p>
            <h2 className="font-display text-[40px] md:text-heading-xl uppercase text-ink">
              Find Your Style
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-sm md:gap-x-4 md:gap-y-6">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug} delay={i * 0.05}>
              <Link href={`/collection?category=${cat.slug}`}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative aspect-[4/5] bg-soft-cloud overflow-hidden rounded-none cursor-pointer"
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 599px) 50vw, (max-width: 767px) 33vw, (max-width: 1023px) 25vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <h3 className="font-body text-heading-lg text-canvas uppercase">
                      {cat.name}
                    </h3>
                    <p className="font-body text-caption-sm text-canvas/70 mt-1 hidden sm:block">
                      {cat.description}
                    </p>
                    <span className="inline-block mt-2 font-body text-caption-sm text-accent-warm">
                      {cat.count} Products →
                    </span>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
