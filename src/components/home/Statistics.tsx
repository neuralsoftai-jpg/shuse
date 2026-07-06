"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { label: "Happy Customers", value: 250000, suffix: "+" },
  { label: "Products Sold", value: 1200000, suffix: "+" },
  { label: "Cities Served", value: 85, suffix: "+" },
  { label: "Years of Excellence", value: 8, suffix: "" },
];

export function Statistics() {
  return (
    <section className="section-padding bg-soft-cloud gradient-mesh">
      <div className="container-premium">
        <SectionHeading
          label="By The Numbers"
          title="Trusted Worldwide"
          description="Numbers that reflect our commitment to quality, community, and growth."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="text-center bg-canvas p-8 md:p-10">
                <p className="font-display text-[48px] md:text-[64px] text-ink leading-none">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="font-body text-caption-md text-mute mt-3">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
