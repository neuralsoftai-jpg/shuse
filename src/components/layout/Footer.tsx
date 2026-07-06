import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  "Quick Links": [
    { label: "Home", href: "/" },
    { label: "Collection", href: "/collection" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/about#contact" },
  ],
  Categories: [
    { label: "Running", href: "/collection?category=running" },
    { label: "Casual", href: "/collection?category=casual" },
    { label: "Sneakers", href: "/collection?category=sneakers" },
    { label: "Premium Leather", href: "/collection?category=premium-leather" },
  ],
  "Customer Support": [
    { label: "Size Guide", href: "/collection" },
    { label: "Shipping & Returns", href: "/about" },
    { label: "Track Order", href: "/about" },
    { label: "FAQ", href: "/about" },
  ],
  Policies: [
    { label: "Privacy Policy", href: "/about" },
    { label: "Terms of Service", href: "/about" },
    { label: "Cookie Policy", href: "/about" },
    { label: "Accessibility", href: "/about" },
  ],
};

const socials = [
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-canvas">
      {/* Main Footer */}
      <div className="container-premium py-section md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Reveal>
              <Link href="/" className="inline-block mb-6">
                <span className="font-display text-4xl text-canvas tracking-tight">
                  UNOCO
                </span>
              </Link>
              <p className="font-body text-body-md text-stone max-w-xs mb-8">
                Premium footwear crafted for the modern you. Where performance
                meets style, and every step tells a story.
              </p>
              <div className="flex gap-3 mb-8">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-canvas" />
                  </a>
                ))}
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-stone">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-caption-md">
                    420 Fashion Ave, New York, NY 10001
                  </span>
                </div>
                <div className="flex items-center gap-2 text-stone">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-caption-md">+1 (800) UNOCO-NOW</span>
                </div>
                <div className="flex items-center gap-2 text-stone">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="text-caption-md">hello@unocoshoes.com</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links], colIdx) => (
            <div key={title}>
              <Reveal delay={0.1 * (colIdx + 1)}>
                <h4 className="font-body text-body-strong text-canvas mb-5">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-body text-caption-md text-stone hover:text-canvas transition-colors inline-flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-premium py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-utility-xs text-stone text-center md:text-left">
            © {new Date().getFullYear()} UNOCO Shoes. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-body text-utility-xs text-stone">
              United States (USD $)
            </span>
            <span className="font-body text-utility-xs text-stone">
              English
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
