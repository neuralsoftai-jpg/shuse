"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "About" },
  { href: "/about#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-canvas/90 backdrop-blur-xl shadow-inset-bottom py-3"
            : "bg-transparent py-4 md:py-5"
        )}
      >
        <div className="container-premium">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 -ml-2"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-ink" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="font-display text-3xl md:text-4xl tracking-tight text-ink">
                UNOCO
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-body-strong text-ink relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ink transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 240, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <input
                      type="text"
                      placeholder="Search shoes..."
                      autoFocus
                      className="w-full bg-soft-cloud text-ink text-body-md rounded-md px-4 py-2.5 outline-none focus:ring-2 focus:ring-ink"
                      onBlur={() => setSearchOpen(false)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 hover:bg-soft-cloud rounded-full transition-colors"
                aria-label="Search"
              >
                {searchOpen ? (
                  <X className="w-5 h-5 text-ink" />
                ) : (
                  <Search className="w-5 h-5 text-ink" />
                )}
              </button>

              {/* Wishlist */}
              <Link
                href="/collection"
                className="p-2 hover:bg-soft-cloud rounded-full transition-colors relative"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5 text-ink" />
              </Link>

              {/* Cart */}
              <Link
                href="/collection"
                className="p-2 hover:bg-soft-cloud rounded-full transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5 text-ink" />
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-sale text-canvas text-[9px] font-bold rounded-full flex items-center justify-center">
                  2
                </span>
              </Link>

              {/* CTA Desktop */}
              <Link href="/collection" className="hidden md:block ml-2">
                <Button variant="primary" size="sm">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-[60]"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[360px] bg-canvas z-[70] flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-hairline">
                <span className="font-display text-2xl text-ink">UNOCO</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 -mr-2 hover:bg-soft-cloud rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-ink" />
                </button>
              </div>
              <nav className="flex-1 py-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block font-body text-heading-lg text-ink px-6 py-4 hover:bg-soft-cloud transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="p-6 border-t border-hairline">
                <Link href="/collection" onClick={() => setMobileOpen(false)}>
                  <Button variant="primary" fullWidth>
                    Shop Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
