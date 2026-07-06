"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star, Eye } from "lucide-react";
import { cn, formatPrice, calculateDiscount } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { type Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const hasDiscount = Boolean(product.originalPrice && product.originalPrice > product.price);
  const discountPercent = hasDiscount
    ? calculateDiscount(product.originalPrice as number, product.price)
    : 0;

  return (
    <Reveal delay={index * 0.05} className="group">
      <div
        className="bg-canvas rounded-none overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <div className="relative aspect-square bg-soft-cloud overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 599px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className={cn(
              "object-cover transition-all duration-700 ease-out",
              isHovered ? "scale-110" : "scale-100"
            )}
          />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3 bg-canvas border border-hairline rounded-lg px-3 py-1">
              <span className="font-body text-caption-sm text-ink font-medium">
                {product.badge}
              </span>
            </div>
          )}

          {/* Discount Badge */}
          {hasDiscount && (
            <div className="absolute top-3 right-3 bg-sale rounded-full px-2.5 py-1">
              <span className="font-body text-caption-sm text-canvas font-medium">
                -{discountPercent}%
              </span>
            </div>
          )}

          {/* Hover Overlay Actions */}
          <motion.div
            initial={false}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-3 left-3 right-3 flex gap-2"
          >
            <button className="flex-1 bg-ink text-canvas font-body text-button-sm rounded-lg py-2.5 flex items-center justify-center gap-2 hover:bg-charcoal transition-colors">
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                isWishlisted
                  ? "bg-sale text-canvas"
                  : "bg-canvas text-ink hover:bg-soft-cloud"
              )}
            >
              <Heart
                className="w-4 h-4"
                fill={isWishlisted ? "currentColor" : "none"}
              />
            </button>
            <button className="w-10 h-10 rounded-full bg-canvas text-ink flex items-center justify-center hover:bg-soft-cloud transition-colors">
              <Eye className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Metadata */}
        <div className="p-sm space-y-1">
          {/* Swatch Dots */}
          <div className="flex gap-1.5">
            {product.colors.map((color, i) => (
              <span
                key={i}
                className="w-3 h-3 rounded-full border border-hairline"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          {/* Name */}
          <h3 className="font-body text-body-strong text-ink line-clamp-2">
            {product.name}
          </h3>

          {/* Category */}
          <p className="font-body text-caption-sm text-mute">{product.category}</p>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-3.5 h-3.5",
                    i < Math.floor(product.rating)
                      ? "text-accent-gold fill-accent-gold"
                      : "text-hairline"
                  )}
                />
              ))}
            </div>
            <span className="font-body text-caption-sm text-mute">
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "font-body text-body-strong",
                hasDiscount ? "text-sale" : "text-ink"
              )}
            >
              {formatPrice(product.price)}
            </span>
            {hasDiscount && (
              <span className="font-body text-caption-sm text-mute line-through">
                {formatPrice(product.originalPrice as number)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
