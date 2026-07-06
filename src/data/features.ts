export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    title: "Premium Materials",
    description: "Ethically sourced Italian leather, recycled ocean plastics, and aerospace-grade foam — every material is chosen for performance and longevity.",
    icon: "gem",
  },
  {
    title: "Fast Delivery",
    description: "Free express shipping on orders over $100. Most US orders arrive within 2–3 business days. International delivery in 5–7 days.",
    icon: "truck",
  },
  {
    title: "Easy Returns",
    description: "30-day hassle-free returns with prepaid labels. Try your shoes at home — if they're not the one, send them back at no cost.",
    icon: "rotate-ccw",
  },
  {
    title: "Secure Payments",
    description: "256-bit SSL encryption with Apple Pay, Google Pay, and all major credit cards. Your data never touches our servers.",
    icon: "shield-check",
  },
  {
    title: "Latest Designs",
    description: "New drops every two weeks across all categories. Members get early access 48 hours before public launch.",
    icon: "sparkles",
  },
  {
    title: "Affordable Luxury",
    description: "Premium quality at fair prices. No middlemen, no markups — we deliver directly from our workshops to your doorstep.",
    icon: "badge-percent",
  },
];

export const stats = [
  { label: "Happy Customers", value: 250000, suffix: "+" },
  { label: "Products Sold", value: 1200000, suffix: "+" },
  { label: "Cities Served", value: 85, suffix: "+" },
  { label: "Years of Excellence", value: 8, suffix: "" },
];
