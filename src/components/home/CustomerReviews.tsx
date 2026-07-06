"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function CustomerReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleCount = typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : typeof window !== "undefined" && window.innerWidth >= 768 ? 2 : 1;

  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-canvas">
      <div className="container-premium">
        <SectionHeading
          label="Testimonials"
          title="What Customers Say"
          description="Real reviews from real people — hear how UNOCO fits into their lives."
        />

        {/* Reviews Grid / Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {testimonials
              .slice(activeIndex, activeIndex + 3)
              .map((testimonial, i) => (
                <Reveal key={testimonial.id} delay={i * 0.1}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-soft-cloud p-6 md:p-8 flex flex-col"
                  >
                    {/* Quote Icon */}
                    <Quote className="w-8 h-8 text-hairline mb-4" />

                    {/* Content */}
                    <p className="font-body text-body-md text-charcoal leading-relaxed flex-1 mb-6">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    {/* Rating */}
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? "text-accent-gold fill-accent-gold"
                              : "text-hairline"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-ink/10 flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-body text-body-strong text-ink">
                          {testimonial.name}
                        </p>
                        <p className="font-body text-caption-sm text-mute">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Product Tag */}
                    {testimonial.product && (
                      <div className="mt-4 pt-4 border-t border-hairline-soft">
                        <span className="font-body text-caption-sm text-mute">
                          Purchased:{" "}
                          <span className="text-ink font-medium">
                            {testimonial.product}
                          </span>
                        </span>
                      </div>
                    )}
                  </motion.div>
                </Reveal>
              ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-hairline flex items-center justify-center hover:bg-ink hover:text-canvas hover:border-ink transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-ink w-6"
                      : "bg-hairline hover:bg-mute"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-hairline flex items-center justify-center hover:bg-ink hover:text-canvas hover:border-ink transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
