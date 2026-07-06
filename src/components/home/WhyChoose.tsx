"use client";

import { motion } from "framer-motion";
import {
  Gem,
  Truck,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  BadgePercent,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  gem: Gem,
  truck: Truck,
  "rotate-ccw": RotateCcw,
  "shield-check": ShieldCheck,
  sparkles: Sparkles,
  "badge-percent": BadgePercent,
};

const features = [
  {
    title: "Premium Materials",
    description:
      "Ethically sourced Italian leather, recycled ocean plastics, and aerospace-grade foam.",
    icon: "gem",
  },
  {
    title: "Fast Delivery",
    description:
      "Free express shipping on orders over $100. Most US orders arrive within 2–3 business days.",
    icon: "truck",
  },
  {
    title: "Easy Returns",
    description:
      "30-day hassle-free returns with prepaid labels. No questions asked.",
    icon: "rotate-ccw",
  },
  {
    title: "Secure Payments",
    description:
      "256-bit SSL encryption with Apple Pay, Google Pay, and all major credit cards.",
    icon: "shield-check",
  },
  {
    title: "Latest Designs",
    description:
      "New drops every two weeks across all categories. Members get early access.",
    icon: "sparkles",
  },
  {
    title: "Affordable Luxury",
    description:
      "Premium quality at fair prices. We deliver directly from our workshops.",
    icon: "badge-percent",
  },
];

export function WhyChoose() {
  return (
    <section className="section-padding bg-soft-cloud">
      <div className="container-premium">
        <SectionHeading
          label="The UNOCO Difference"
          title="Why Choose Us"
          description="Every detail matters — from the materials we select to the experience you feel with every step."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <Reveal key={feature.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-canvas p-6 md:p-8 rounded-none group hover:shadow-card-hover transition-shadow duration-500"
                >
                  <div className="w-14 h-14 rounded-full bg-soft-cloud flex items-center justify-center mb-5 group-hover:bg-ink group-hover:text-canvas transition-colors duration-300">
                    <Icon className="w-6 h-6 text-ink group-hover:text-canvas transition-colors duration-300" />
                  </div>
                  <h3 className="font-body text-heading-md text-ink mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-body-md text-mute">
                    {feature.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
