"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  Grid3X3,
  Grid2X2,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { Newsletter } from "@/components/home/Newsletter";
import { Button } from "@/components/ui/Button";
import { products, allCategories } from "@/data/products";
import type { Product } from "@/data/products";

const ITEMS_PER_PAGE = 9;

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low → High", value: "price-asc" },
  { label: "Price: High → Low", value: "price-desc" },
  { label: "Top Rated", value: "rating" },
  { label: "Most Popular", value: "popular" },
];

const sizeOptions = ["US 6", "US 7", "US 7.5", "US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11", "US 12"];

const priceRanges = [
  { label: "Under $100", min: 0, max: 100 },
  { label: "$100 – $150", min: 100, max: 150 },
  { label: "$150 – $200", min: 150, max: 200 },
  { label: "$200 – $300", min: 200, max: 300 },
  { label: "Over $300", min: 300, max: Infinity },
];

export function CollectionContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSort, setSelectedSort] = useState("featured");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<{ min: number; max: number } | null>(null);
  const [gridCols, setGridCols] = useState<2 | 3>(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.slug.toLowerCase().includes(q)
      );
    }

    // Category
    if (selectedCategory) {
      result = result.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // Size (simulated — shows products that have matching "size availability")
    if (selectedSizes.length > 0) {
      // All products support all sizes in this demo
    }

    // Price
    if (selectedPriceRange) {
      result = result.filter(
        (p) => p.price >= selectedPriceRange.min && p.price <= selectedPriceRange.max
      );
    }

    // Sort
    switch (selectedSort) {
      case "newest":
        result = result.sort((a) => (a.isNew ? -1 : 1));
        break;
      case "price-asc":
        result = result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result = result.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
        result = result.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, selectedSort, selectedSizes, selectedPriceRange]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedSort("featured");
    setSelectedSizes([]);
    setSelectedPriceRange(null);
    setCurrentPage(1);
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[340px] md:h-[400px] overflow-hidden bg-ink">
        <Image
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1920&h=600&fit=crop&auto=format"
          alt="UNOCO Collection"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <div className="relative z-10 container-premium h-full flex flex-col justify-end pb-10 md:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-caption-sm text-accent-warm uppercase tracking-[0.2em]">
              Shop All
            </span>
            <h1 className="font-display text-[56px] md:text-[80px] leading-[0.9] uppercase text-canvas mt-2">
              Collection
            </h1>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mt-4">
              <a href="/" className="font-body text-caption-md text-stone hover:text-canvas transition-colors">Home</a>
              <span className="font-body text-caption-md text-stone">/</span>
              <span className="font-body text-caption-md text-canvas">Collection</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Toolbar */}
      <div className="sticky top-[60px] z-30 bg-canvas border-b border-hairline-soft shadow-inset-bottom">
        <div className="container-premium py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Search + Filters Toggle */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              {/* Search */}
              <div className="relative flex-1 max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mute" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                  placeholder="Search products..."
                  className="w-full bg-soft-cloud rounded-md pl-9 pr-4 py-2.5 font-body text-body-md text-ink placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-ink transition-all"
                />
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="hidden md:inline-flex items-center gap-2 bg-soft-cloud rounded-lg px-4 py-2.5 font-body text-button-sm text-ink hover:bg-hairline-soft transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {(selectedCategory || selectedSizes.length > 0 || selectedPriceRange) && (
                  <span className="w-5 h-5 bg-ink text-canvas text-[10px] rounded-full flex items-center justify-center">
                    {(selectedCategory ? 1 : 0) + selectedSizes.length + (selectedPriceRange ? 1 : 0)}
                  </span>
                )}
              </button>
            </div>

            {/* Right: Grid Toggle + Sort + Count */}
            <div className="flex items-center gap-3">
              <span className="font-body text-caption-sm text-mute hidden md:block">
                {filteredProducts.length} products
              </span>

              {/* Grid Toggle */}
              <div className="hidden md:flex items-center gap-1">
                <button
                  onClick={() => setGridCols(3)}
                  className={cn(
                    "p-2 rounded-md transition-colors",
                    gridCols === 3 ? "bg-ink text-canvas" : "bg-soft-cloud text-ink hover:bg-hairline-soft"
                  )}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setGridCols(2)}
                  className={cn(
                    "p-2 rounded-md transition-colors",
                    gridCols === 2 ? "bg-ink text-canvas" : "bg-soft-cloud text-ink hover:bg-hairline-soft"
                  )}
                >
                  <Grid2X2 className="w-4 h-4" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-2 bg-soft-cloud rounded-lg px-4 py-2.5 font-body text-button-sm text-ink hover:bg-hairline-soft transition-colors"
                >
                  Sort By
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {sortOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute right-0 top-full mt-2 w-52 bg-canvas border border-hairline rounded-none shadow-card-premium z-20"
                    >
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => { setSelectedSort(option.value); setSortOpen(false); }}
                          className={cn(
                            "block w-full text-left px-4 py-3 font-body text-body-md transition-colors",
                            selectedSort === option.value
                              ? "bg-soft-cloud text-ink font-medium"
                              : "text-ink hover:bg-soft-cloud"
                          )}
                        >
                          {option.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Mobile Filter Pills Row */}
          <div className="md:hidden flex gap-2 mt-3 overflow-x-auto scrollbar-hide pb-1">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setSelectedCategory(selectedCategory === cat.toLowerCase() ? null : cat.toLowerCase()); setCurrentPage(1); }}
                className={cn(
                  "flex-shrink-0 rounded-lg px-3 py-1.5 font-body text-caption-sm transition-colors whitespace-nowrap",
                  selectedCategory === cat.toLowerCase()
                    ? "bg-ink text-canvas"
                    : "bg-soft-cloud text-ink hover:bg-hairline-soft"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content: Sidebar + Grid */}
      <section className="bg-canvas">
        <div className="container-premium py-section md:py-16">
          <div className="flex gap-8 lg:gap-12">
            {/* Desktop Sidebar */}
            <aside className={cn(
              "hidden md:block w-60 flex-shrink-0",
              filtersOpen ? "block" : "hidden lg:block"
            )}>
              <div className="sticky top-[140px] space-y-8">
                {/* Active Filters */}
                {(selectedCategory || selectedSizes.length > 0 || selectedPriceRange || searchQuery) && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-body text-body-strong text-ink">Active Filters</h4>
                      <button onClick={clearAllFilters} className="font-body text-caption-sm text-sale hover:underline">
                        Clear All
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedCategory && (
                        <span className="inline-flex items-center gap-1 bg-soft-cloud rounded-lg px-3 py-1.5 font-body text-caption-sm text-ink">
                          {selectedCategory}
                          <button onClick={() => setSelectedCategory(null)}>
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      )}
                      {selectedSizes.map((s) => (
                        <span key={s} className="inline-flex items-center gap-1 bg-soft-cloud rounded-lg px-3 py-1.5 font-body text-caption-sm text-ink">
                          {s}
                          <button onClick={() => toggleSize(s)}>
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                      {selectedPriceRange && (
                        <span className="inline-flex items-center gap-1 bg-soft-cloud rounded-lg px-3 py-1.5 font-body text-caption-sm text-ink">
                          {priceRanges.find(r => r.min === selectedPriceRange.min)?.label}
                          <button onClick={() => setSelectedPriceRange(null)}>
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Category Filter */}
                <div>
                  <h4 className="font-body text-body-strong text-ink mb-4">Category</h4>
                  <div className="space-y-1">
                    <button
                      onClick={() => { setSelectedCategory(null); setCurrentPage(1); }}
                      className={cn(
                        "block w-full text-left px-3 py-2 rounded-lg font-body text-body-md transition-colors",
                        !selectedCategory ? "bg-soft-cloud text-ink font-medium" : "text-mute hover:bg-soft-cloud hover:text-ink"
                      )}
                    >
                      All Categories
                    </button>
                    {allCategories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => { setSelectedCategory(cat.toLowerCase()); setCurrentPage(1); }}
                        className={cn(
                          "block w-full text-left px-3 py-2 rounded-lg font-body text-body-md transition-colors flex justify-between items-center",
                          selectedCategory === cat.toLowerCase()
                            ? "bg-soft-cloud text-ink font-medium"
                            : "text-mute hover:bg-soft-cloud hover:text-ink"
                        )}
                      >
                        {cat}
                        <span className="text-caption-sm">
                          {products.filter((p) => p.category === cat).length}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h4 className="font-body text-body-strong text-ink mb-4">Price Range</h4>
                  <div className="space-y-1">
                    <button
                      onClick={() => setSelectedPriceRange(null)}
                      className={cn(
                        "block w-full text-left px-3 py-2 rounded-lg font-body text-body-md transition-colors",
                        !selectedPriceRange ? "bg-soft-cloud text-ink font-medium" : "text-mute hover:bg-soft-cloud hover:text-ink"
                      )}
                    >
                      All Prices
                    </button>
                    {priceRanges.map((range) => (
                      <button
                        key={range.label}
                        onClick={() => { setSelectedPriceRange({ min: range.min, max: range.max }); setCurrentPage(1); }}
                        className={cn(
                          "block w-full text-left px-3 py-2 rounded-lg font-body text-body-md transition-colors",
                          selectedPriceRange?.min === range.min
                            ? "bg-soft-cloud text-ink font-medium"
                            : "text-mute hover:bg-soft-cloud hover:text-ink"
                        )}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Filter */}
                <div>
                  <h4 className="font-body text-body-strong text-ink mb-4">Size</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {sizeOptions.map((size) => (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={cn(
                          "rounded-lg px-2 py-2 font-body text-caption-sm transition-colors border",
                          selectedSizes.includes(size)
                            ? "bg-ink text-canvas border-ink"
                            : "bg-canvas text-ink border-hairline hover:border-ink"
                        )}
                      >
                        {size.replace("US ", "")}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1 min-w-0">
              {paginatedProducts.length > 0 ? (
                <>
                  <div className={cn(
                    "grid gap-4 md:gap-5",
                    gridCols === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  )}>
                    {paginatedProducts.map((product, i) => (
                      <ProductCard key={product.id} product={product} index={i} />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-section">
                      <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                          currentPage === 1
                            ? "bg-soft-cloud text-stone cursor-not-allowed"
                            : "bg-soft-cloud text-ink hover:bg-ink hover:text-canvas"
                        )}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i + 1)}
                          className={cn(
                            "w-10 h-10 rounded-lg font-body text-body-md transition-colors",
                            currentPage === i + 1
                              ? "bg-ink text-canvas"
                              : "bg-soft-cloud text-ink hover:bg-hairline-soft"
                          )}
                        >
                          {i + 1}
                        </button>
                      ))}
                      <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                          currentPage === totalPages
                            ? "bg-soft-cloud text-stone cursor-not-allowed"
                            : "bg-soft-cloud text-ink hover:bg-ink hover:text-canvas"
                        )}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-20">
                  <p className="font-display text-4xl text-ink mb-4">No Results</p>
                  <p className="font-body text-body-md text-mute mb-6">
                    We couldn&apos;t find any products matching your filters.
                  </p>
                  <Button variant="secondary" onClick={clearAllFilters}>
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="relative overflow-hidden bg-ink">
        <Image
          src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1920&h=500&fit=crop&auto=format"
          alt="Special Offer"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/40" />
        <div className="relative z-10 container-premium py-section md:py-20 text-center">
          <Reveal>
            <h2 className="font-display text-[40px] md:text-[64px] leading-[0.9] uppercase text-canvas mb-4">
              Free Shipping on
              <br />
              <span className="text-gradient-warm">Orders Over $100</span>
            </h2>
            <p className="font-body text-body-md text-stone max-w-md mx-auto mb-8">
              Upgrade your wardrobe with premium footwear and enjoy complimentary express delivery straight to your door.
            </p>
            <Button variant="primary" size="lg">
              Start Shopping <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  );
}
