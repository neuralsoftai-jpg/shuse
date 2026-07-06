"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Instagram } from "lucide-react";

const instagramImages = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop&auto=format",
];

export function InstagramGallery() {
  return (
    <section className="section-padding bg-canvas">
      <div className="container-premium">
        <SectionHeading
          label="@unocoshoes"
          title="Follow the Movement"
          description="Tag #UNOCOStyle to be featured. Join our community of 500K+ sneaker lovers worldwide."
        />
      </div>

      {/* Masonry-style Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1 md:gap-2 px-0 md:px-0">
        {instagramImages.map((src, i) => (
          <Reveal key={i} delay={i * 0.03}>
            <motion.a
              href="#"
              className="relative aspect-square block overflow-hidden group"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={src}
                alt={`UNOCO Instagram ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Instagram className="w-8 h-8 text-canvas" />
                </motion.div>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
