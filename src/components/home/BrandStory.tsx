"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

export function BrandStory() {
  return (
    <section className="section-padding bg-ink overflow-hidden">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <Reveal direction="left">
            <div className="relative aspect-[4/5] bg-soft-cloud overflow-hidden rounded-none">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=1000&fit=crop&auto=format"
                alt="UNOCO Brand Story"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-canvas/90 backdrop-blur-md p-6">
                  <p className="font-display text-4xl md:text-5xl uppercase text-ink leading-[0.9]">
                    Born to
                    <br />
                    <span className="text-accent-warm">Move</span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal direction="right">
              <span className="font-body text-caption-sm text-accent-warm uppercase tracking-[0.2em]">
                Our Story
              </span>
              <h2 className="font-display text-[40px] md:text-[56px] leading-[0.9] uppercase text-canvas mt-3 mb-6">
                Redefining
                <br />
                Footwear Since 2018
              </h2>
              <div className="space-y-4 text-stone">
                <p className="font-body text-body-md leading-relaxed">
                  UNOCO was born from a simple observation: people deserve shoes
                  that perform as good as they look. Founded in New York City by
                  a team of athletes, designers, and material scientists, we set
                  out to bridge the gap between high-performance athletic footwear
                  and premium lifestyle design.
                </p>
                <p className="font-body text-body-md leading-relaxed">
                  Every UNOCO shoe begins with the human foot. Our biomechanics lab
                  studies how people naturally move — walk, run, pivot, leap — and
                  engineers each sole, upper, and collar to support those motions
                  without restriction. We don&apos;t follow trends. We follow movement.
                </p>
                <p className="font-body text-body-md leading-relaxed">
                  Today, UNOCO serves over 250,000 customers across 85 cities
                  worldwide. But our mission hasn&apos;t changed: create footwear that
                  empowers people to move with confidence, comfort, and style.
                </p>
              </div>

              <div className="flex gap-8 mt-8 pt-8 border-t border-white/10">
                <div>
                  <p className="font-display text-3xl text-canvas">8+</p>
                  <p className="font-body text-caption-sm text-stone mt-1">
                    Years Crafting
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl text-canvas">85+</p>
                  <p className="font-body text-caption-sm text-stone mt-1">
                    Cities Worldwide
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl text-canvas">200+</p>
                  <p className="font-body text-caption-sm text-stone mt-1">
                    Quality Checks
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
