"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Leaf,
  Award,
  Users,
  Clock,
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Quote,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Newsletter } from "@/components/home/Newsletter";
import { aboutFaqs, contactFaqs } from "@/data/faqs";

const values = [
  {
    icon: Heart,
    title: "Craftsmanship",
    description:
      "Every pair is obsessively crafted through 200+ quality checks. We believe in the kind of detail you can feel with every step.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Over 60% of our materials are recycled or sustainably sourced. Our commitment is carbon-neutral manufacturing by 2027.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Ethical sourcing, fair labor, and transparent supply chains. We do right by the people who make UNOCO possible.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "Our biomechanics lab studies human movement to engineer footwear that performs as good as it looks.",
  },
];

const journey = [
  {
    year: "2018",
    title: "The Beginning",
    description:
      "Founded in a small NYC studio by three friends — an athlete, a designer, and a material scientist — united by one frustration: shoes that looked great but performed poorly.",
  },
  {
    year: "2020",
    title: "First Collection",
    description:
      "Launched our debut Velocity Runner. Sold out in 72 hours. Validated our belief that people wanted footwear without compromise.",
  },
  {
    year: "2022",
    title: "Going Global",
    description:
      "Expanded to 40+ cities worldwide. Opened flagship stores in New York, Los Angeles, and London. Partnered with elite athletes across 6 sports.",
  },
  {
    year: "2024",
    title: "Sustainability Pledge",
    description:
      "Committed to carbon-neutral manufacturing by 2027. Launched our Earth Conscious line made with recycled ocean plastics.",
  },
  {
    year: "2026",
    title: "Today & Beyond",
    description:
      "Serving 250,000+ customers across 85 cities. Continuing to push the boundaries of what premium footwear can be.",
  },
];

// storeHighlights merged inline below in the Store Highlights section

const achievements = [
  { value: 250000, suffix: "+", label: "Happy Customers" },
  { value: 1200000, suffix: "+", label: "Pairs Sold" },
  { value: 85, suffix: "+", label: "Cities Worldwide" },
  { value: 8, suffix: "", label: "Years Strong" },
  { value: 48, suffix: "", label: "Industry Awards" },
  { value: 4.9, suffix: "★", label: "Average Rating", isDecimal: true },
];

const whyCustomersLove = [
  "Premium materials that last years, not months",
  "Biomechanically engineered for all-day comfort",
  "30-day hassle-free returns with prepaid labels",
  "Free express shipping on orders over $100",
  "Sustainable, ethically-made footwear",
  "Member-exclusive early access to new drops",
  "Expert in-store fittings at flagship locations",
  "Responsive customer support — 4-hour response time",
];

export function AboutContent() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: "", email: "", subject: "", message: "" });
      }, 5000);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="relative h-[480px] md:h-[560px] overflow-hidden bg-ink">
        <Image
          src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1920&h=900&fit=crop&auto=format"
          alt="UNOCO Brand Story"
          fill
          priority
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        <div className="relative z-10 container-premium h-full flex flex-col justify-end pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-caption-sm text-accent-warm uppercase tracking-[0.2em]">
              Our Story
            </span>
            <h1 className="font-display text-[64px] md:text-[96px] leading-[0.9] uppercase text-canvas mt-3">
              Born to
              <br />
              <span className="text-gradient-warm">Move</span>
            </h1>
            <p className="font-body text-body-md text-stone max-w-xl mt-6">
              From a small NYC studio to a global community of 250,000+ movers.
              This is the story of UNOCO — footwear without compromise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="section-padding bg-canvas">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal direction="left">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&h=1000&fit=crop&auto=format"
                  alt="UNOCO Workshop"
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div>
              <Reveal direction="right">
                <span className="font-body text-caption-sm text-accent-warm uppercase tracking-[0.2em]">
                  Who We Are
                </span>
                <h2 className="font-display text-[40px] md:text-[56px] leading-[0.9] uppercase text-ink mt-3 mb-6">
                  More Than
                  <br />
                  Just Shoes
                </h2>
                <div className="space-y-4 text-charcoal">
                  <p className="font-body text-body-md leading-relaxed">
                    UNOCO was born in 2018 from a simple frustration: people
                    deserved shoes that performed as good as they looked. We were
                    three friends in New York City — an athlete, a designer, and
                    a material scientist — united by the belief that footwear
                    shouldn&apos;t force a choice between style and function.
                  </p>
                  <p className="font-body text-body-md leading-relaxed">
                    We started in a 400-square-foot studio with a single
                    mission: engineer footwear that supports natural movement
                    without sacrificing design. Our first shoe, the Velocity
                    Runner, sold out in 72 hours and validated everything we
                    believed.
                  </p>
                  <p className="font-body text-body-md leading-relaxed">
                    Today, UNOCO serves over 250,000 customers across 85 cities.
                    We&apos;ve grown from a tiny studio into a global team of
                    craftspeople, athletes, and innovators. But our core belief
                    remains unchanged: great footwear empowers people to move
                    with confidence.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-hairline">
                  <div>
                    <p className="font-display text-3xl md:text-4xl text-ink">8+</p>
                    <p className="font-body text-caption-sm text-mute mt-1">Years Strong</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl md:text-4xl text-ink">85+</p>
                    <p className="font-body text-caption-sm text-mute mt-1">Cities Served</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl md:text-4xl text-ink">250K+</p>
                    <p className="font-body text-caption-sm text-mute mt-1">Customers</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section-padding bg-soft-cloud">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Mission */}
            <Reveal>
              <div className="bg-canvas p-8 md:p-12 h-full">
                <div className="w-14 h-14 rounded-full bg-soft-cloud flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-ink" />
                </div>
                <h3 className="font-display text-[32px] md:text-[40px] uppercase text-ink leading-[0.9] mb-4">
                  Our Mission
                </h3>
                <p className="font-body text-body-md text-charcoal leading-relaxed">
                  To craft premium footwear that empowers people to move with
                  confidence, comfort, and style. We bridge the gap between
                  high-performance athletic engineering and premium lifestyle
                  design — no compromises, no shortcuts. Every UNOCO shoe is
                  built to help you perform at your best, whatever that looks
                  like for you.
                </p>
              </div>
            </Reveal>

            {/* Vision */}
            <Reveal delay={0.1}>
              <div className="bg-ink p-8 md:p-12 h-full text-canvas">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-canvas" />
                </div>
                <h3 className="font-display text-[32px] md:text-[40px] uppercase text-canvas leading-[0.9] mb-4">
                  Our Vision
                </h3>
                <p className="font-body text-body-md text-stone leading-relaxed">
                  A world where premium footwear is accessible, sustainable, and
                  crafted with integrity. We envision a future where every step
                  you take supports your body, your style, and our planet. By
                  2027, we aim to be the first fully carbon-neutral premium
                  footwear brand — proving that luxury and responsibility can
                  walk together.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUR JOURNEY / TIMELINE */}
      <section className="section-padding bg-canvas">
        <div className="container-premium">
          <SectionHeading
            label="How We Got Here"
            title="Our Journey"
            description="From a tiny studio to a global brand — every milestone has shaped who we are today."
          />

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-hairline md:-translate-x-1/2" />

            {journey.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.05}>
                <div className={cn(
                  "relative flex items-start gap-6 mb-12 last:mb-0",
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-ink border-4 border-canvas md:-translate-x-1/2 z-10 mt-2" />

                  {/* Spacer for desktop alternating */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content */}
                  <div className="pl-12 md:pl-0 md:w-1/2 md:px-8">
                    <span className="font-display text-3xl text-accent-warm">
                      {item.year}
                    </span>
                    <h4 className="font-body text-heading-lg text-ink mt-1 mb-2">
                      {item.title}
                    </h4>
                    <p className="font-body text-body-md text-mute leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="section-padding bg-soft-cloud">
        <div className="container-premium">
          <SectionHeading
            label="What Drives Us"
            title="Our Values"
            description="The principles that guide every decision, every design, and every step."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-canvas p-6 md:p-8 group"
                >
                  <div className="w-14 h-14 rounded-full bg-soft-cloud flex items-center justify-center mb-5 group-hover:bg-ink transition-colors duration-300">
                    <value.icon className="w-6 h-6 text-ink group-hover:text-canvas transition-colors duration-300" />
                  </div>
                  <h3 className="font-body text-heading-md text-ink mb-2">
                    {value.title}
                  </h3>
                  <p className="font-body text-body-md text-mute leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STORE HIGHLIGHTS */}
      <section className="section-padding bg-ink text-canvas">
        <div className="container-premium">
          <SectionHeading
            label="Visit Us"
            title="Store Highlights"
            description="Experience UNOCO in person at one of our flagship locations worldwide."
            light
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: "Expert Fittings", value: "30-min", icon: Award },
              { label: "Custom Studio", value: "Bespoke", icon: Sparkles },
              { label: "In-Store Returns", value: "Free", icon: ShieldCheck },
              { label: "VIP Lounge", value: "Members", icon: Users },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 p-6 md:p-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-5 h-5 text-accent-warm" />
                  </div>
                  <p className="font-display text-2xl md:text-3xl text-canvas">
                    {item.value}
                  </p>
                  <p className="font-body text-caption-sm text-stone mt-1">
                    {item.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section-padding bg-canvas">
        <div className="container-premium">
          <SectionHeading
            label="Milestones"
            title="Our Achievements"
            description="Numbers that reflect our commitment to quality and growth over the years."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {achievements.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.05}>
                <div className="bg-soft-cloud p-6 md:p-8 text-center">
                  <p className="font-display text-[40px] md:text-[48px] text-ink leading-none">
                    {item.isDecimal ? (
                      <>{item.value}{item.suffix}</>
                    ) : (
                      <AnimatedCounter end={item.value} suffix={item.suffix} />
                    )}
                  </p>
                  <p className="font-body text-caption-sm text-mute mt-3">
                    {item.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CUSTOMERS LOVE UNOCO */}
      <section className="section-padding bg-soft-cloud">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal direction="left">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop&auto=format"
                  alt="Happy UNOCO Customers"
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              </div>
            </Reveal>

            <div>
              <Reveal direction="right">
                <span className="font-body text-caption-sm text-accent-warm uppercase tracking-[0.2em]">
                  Customer Love
                </span>
                <h2 className="font-display text-[40px] md:text-[56px] leading-[0.9] uppercase text-ink mt-3 mb-8">
                  Why Customers
                  <br />
                  <span className="text-gradient-warm">Choose Us</span>
                </h2>
                <ul className="space-y-4">
                  {whyCustomersLove.map((reason, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="font-body text-body-md text-charcoal">
                        {reason}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section-padding bg-canvas scroll-mt-24">
        <div className="container-premium">
          <SectionHeading
            label="Get in Touch"
            title="Contact Us"
            description="Questions, feedback, or just want to say hello? We'd love to hear from you."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Contact Info + Map */}
            <Reveal direction="left">
              <div className="space-y-8">
                {/* Contact Methods */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-soft-cloud p-6">
                    <div className="w-10 h-10 rounded-full bg-ink flex items-center justify-center mb-4">
                      <MapPin className="w-4 h-4 text-canvas" />
                    </div>
                    <h4 className="font-body text-body-strong text-ink mb-1">Visit Us</h4>
                    <p className="font-body text-caption-md text-mute">
                      420 Fashion Avenue<br />
                      New York, NY 10001
                    </p>
                  </div>
                  <div className="bg-soft-cloud p-6">
                    <div className="w-10 h-10 rounded-full bg-ink flex items-center justify-center mb-4">
                      <Phone className="w-4 h-4 text-canvas" />
                    </div>
                    <h4 className="font-body text-body-strong text-ink mb-1">Call Us</h4>
                    <p className="font-body text-caption-md text-mute">
                      +1 (800) UNOCO-NOW<br />
                      +1 (212) 555-0192
                    </p>
                  </div>
                  <div className="bg-soft-cloud p-6">
                    <div className="w-10 h-10 rounded-full bg-ink flex items-center justify-center mb-4">
                      <Mail className="w-4 h-4 text-canvas" />
                    </div>
                    <h4 className="font-body text-body-strong text-ink mb-1">Email Us</h4>
                    <p className="font-body text-caption-md text-mute">
                      hello@unocoshoes.com<br />
                      support@unocoshoes.com
                    </p>
                  </div>
                  <div className="bg-soft-cloud p-6">
                    <div className="w-10 h-10 rounded-full bg-ink flex items-center justify-center mb-4">
                      <Clock className="w-4 h-4 text-canvas" />
                    </div>
                    <h4 className="font-body text-body-strong text-ink mb-1">Business Hours</h4>
                    <p className="font-body text-caption-md text-mute">
                      Mon–Sat: 9AM – 8PM<br />
                      Sun: 11AM – 6PM EST
                    </p>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="relative aspect-[16/10] bg-soft-cloud overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=500&fit=crop&auto=format"
                    alt="UNOCO Store Location Map"
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-ink/20" />
                  {/* Map Pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-12 h-12 rounded-full bg-sale flex items-center justify-center shadow-lg"
                    >
                      <MapPin className="w-6 h-6 text-canvas" />
                    </motion.div>
                    <div className="mt-2 bg-canvas px-3 py-1.5 rounded-md shadow-lg">
                      <span className="font-body text-caption-sm text-ink font-medium">UNOCO Flagship</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Contact Form */}
            <Reveal direction="right">
              <div className="bg-soft-cloud p-6 md:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-16"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-success flex items-center justify-center mb-6"
                    >
                      <CheckCircle className="w-8 h-8 text-canvas" />
                    </motion.div>
                    <h3 className="font-display text-3xl uppercase text-ink mb-3">Message Sent!</h3>
                    <p className="font-body text-body-md text-mute max-w-xs">
                      Thanks for reaching out. Our team will get back to you within 4 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-display text-2xl uppercase text-ink mb-2">Send a Message</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-body text-caption-sm text-ink mb-2 font-medium">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full bg-canvas rounded-md px-4 py-3 font-body text-body-md text-ink placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-ink transition-all"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-caption-sm text-ink mb-2 font-medium">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full bg-canvas rounded-md px-4 py-3 font-body text-body-md text-ink placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-ink transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-body text-caption-sm text-ink mb-2 font-medium">
                        Subject
                      </label>
                      <select
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full bg-canvas rounded-md px-4 py-3 font-body text-body-md text-ink focus:outline-none focus:ring-2 focus:ring-ink transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="order">Order Support</option>
                        <option value="returns">Returns & Exchanges</option>
                        <option value="wholesale">Wholesale & Partnerships</option>
                        <option value="press">Press & Media</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-body text-caption-sm text-ink mb-2 font-medium">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Tell us how we can help..."
                        className="w-full bg-canvas rounded-md px-4 py-3 font-body text-body-md text-ink placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-ink transition-all resize-none"
                      />
                    </div>

                    <Button type="submit" variant="primary" size="lg" fullWidth>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </Button>

                    <p className="font-body text-caption-sm text-mute text-center">
                      We respond within 4 hours during business hours.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT FAQ */}
      <section className="section-padding bg-soft-cloud">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              label="Quick Answers"
              title="Contact FAQ"
              description="Common questions about getting in touch with our team."
            />
            <Reveal>
              <Accordion items={contactFaqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink">
        <Image
          src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=1920&h=600&fit=crop&auto=format"
          alt="Shop UNOCO"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
        <div className="relative z-10 container-premium py-section md:py-20 text-center">
          <Reveal>
            <h2 className="font-display text-[48px] md:text-[72px] leading-[0.9] uppercase text-canvas mb-6">
              Step Into
              <br />
              <span className="text-gradient-warm">Something Better</span>
            </h2>
            <p className="font-body text-body-md text-stone max-w-md mx-auto mb-8">
              Experience the difference premium craftsmanship makes. Your next favorite pair is waiting.
            </p>
            <a href="/collection">
              <Button variant="primary" size="lg">
                Explore Collection <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </Reveal>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
