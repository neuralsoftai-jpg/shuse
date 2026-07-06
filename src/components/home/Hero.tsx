"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-ink">
      {/* Background Image */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1920&h=1080&fit=crop&auto=format"
          alt="UNOCO Premium Footwear"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/30" />
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [-3, 3, -3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] right-[10%] w-28 h-28 md:w-48 md:h-48 rounded-full overflow-hidden opacity-40 hidden lg:block"
        >
          <Image
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&auto=format"
            alt=""
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [5, -5, 5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[20%] w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden opacity-30 hidden lg:block"
        >
          <Image
            src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=400&fit=crop&auto=format"
            alt=""
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div
          animate={{ y: [-8, 8, -8], x: [5, -5, 5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] right-[35%] w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden opacity-25 hidden lg:block"
        >
          <Image
            src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&auto=format"
            alt=""
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 container-premium w-full">
        <div className="max-w-3xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-accent-warm rounded-full" />
              <span className="font-body text-caption-sm text-canvas uppercase tracking-[0.15em]">
                New Collection 2026
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display text-[56px] sm:text-[80px] md:text-display-campaign leading-[0.9] uppercase text-canvas mb-6"
          >
            Step Into
            <br />
            <span className="text-gradient-warm">Your Next</span>
            <br />
            Chapter
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-body text-body-md text-stone max-w-lg mb-8 md:mb-10"
          >
            Premium footwear engineered for those who refuse to stand still.
            From the studio to the street, UNOCO moves with you.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/collection">
              <Button variant="primary" size="lg">
                Shop Collection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-canvas border-canvas/30 hover:bg-white/10">
              <Play className="w-4 h-4 mr-2" />
              Watch Film
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex gap-10 mt-14 hidden md:flex"
          >
            {[
              { value: "250K+", label: "Happy Customers" },
              { value: "1.2M+", label: "Pairs Sold" },
              { value: "4.9★", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl md:text-3xl text-canvas">
                  {stat.value}
                </p>
                <p className="font-body text-caption-sm text-stone mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-body text-caption-sm text-stone uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-stone to-transparent" />
      </motion.div>
    </section>
  );
}
