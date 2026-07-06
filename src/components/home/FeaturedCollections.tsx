"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { featuredCollections } from "@/data/categories";

export function FeaturedCollections() {
  return (
    <section className="section-padding bg-soft-cloud">
      <div className="container-premium">
        <Reveal>
          <div className="text-center mb-section">
            <p className="font-body text-caption-sm text-accent-warm uppercase tracking-[0.2em] mb-3">
              Curated for You
            </p>
            <h2 className="font-display text-[40px] md:text-heading-xl uppercase text-ink">
              Featured Collections
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {featuredCollections.map((collection, i) => (
            <Reveal key={collection.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="group relative aspect-[16/10] md:aspect-[16/9] bg-ink overflow-hidden rounded-none cursor-pointer"
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <p className="font-body text-caption-md text-canvas/60 uppercase tracking-[0.15em] mb-2">
                    {collection.subtitle}
                  </p>
                  <h3 className="font-display text-[36px] md:text-[56px] leading-[0.9] uppercase text-canvas mb-4">
                    {collection.title}
                  </h3>
                  <Link href={collection.href}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 bg-canvas text-ink font-body text-button-sm rounded-lg px-6 py-3 hover:bg-soft-cloud transition-colors"
                    >
                      {collection.cta}
                      <span className="text-lg">→</span>
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
