"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { homeFaqs } from "@/data/faqs";

export function FAQ() {
  return (
    <section className="section-padding bg-canvas">
      <div className="container-premium">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            label="Support"
            title="Frequently Asked"
            description="Everything you need to know about UNOCO shoes, shipping, returns, and more."
          />

          <Reveal>
            <Accordion items={homeFaqs} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
