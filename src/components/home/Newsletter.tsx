"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Background Decoration */}
      <div className="absolute inset-0 gradient-premium opacity-50" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-warm/5 to-transparent" />

      <div className="relative z-10 container-premium py-section md:py-20 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6">
              <Send className="w-3.5 h-3.5 text-accent-warm" />
              <span className="font-body text-caption-sm text-canvas uppercase tracking-[0.15em]">
                Stay Connected
              </span>
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-[40px] md:text-[56px] leading-[0.9] uppercase text-canvas mb-4">
              Get <span className="text-gradient-warm">15% Off</span>
              <br />
              Your First Order
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-body text-body-md text-stone mb-8">
              Subscribe for exclusive drops, early access, and style inspiration
              delivered to your inbox. No spam — just the good stuff.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-5 py-3.5 font-body text-body-md text-canvas placeholder:text-stone focus:outline-none focus:ring-2 focus:ring-accent-warm focus:border-transparent transition-all"
              />
              <Button type="submit" variant="primary" size="md">
                {submitted ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Subscribed!
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="font-body text-caption-sm text-stone mt-4">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
