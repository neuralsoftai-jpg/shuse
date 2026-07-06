export interface Category {
  name: string;
  slug: string;
  image: string;
  description: string;
  count: number;
}

export const categories: Category[] = [
  {
    name: "Running",
    slug: "running",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=500&fit=crop&auto=format",
    description: "Engineered for speed and endurance on every terrain",
    count: 24,
  },
  {
    name: "Casual",
    slug: "casual",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=500&fit=crop&auto=format",
    description: "Effortless style for your everyday adventures",
    count: 32,
  },
  {
    name: "Sneakers",
    slug: "sneakers",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=500&fit=crop&auto=format",
    description: "Bold silhouettes that define street culture",
    count: 28,
  },
  {
    name: "Sports",
    slug: "sports",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=500&fit=crop&auto=format",
    description: "Performance-driven for champions and competitors",
    count: 18,
  },
  {
    name: "Training",
    slug: "training",
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=400&h=500&fit=crop&auto=format",
    description: "Built to support every rep, every set, every goal",
    count: 16,
  },
  {
    name: "Lifestyle",
    slug: "lifestyle",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=500&fit=crop&auto=format",
    description: "Where comfort meets contemporary design",
    count: 22,
  },
  {
    name: "Premium Leather",
    slug: "premium-leather",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&h=500&fit=crop&auto=format",
    description: "Handcrafted luxury with timeless Italian leather",
    count: 12,
  },
  {
    name: "Kids",
    slug: "kids",
    image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=400&h=500&fit=crop&auto=format",
    description: "Playful designs built tough for little explorers",
    count: 20,
  },
];

export const featuredCollections = [
  {
    title: "Summer 2026",
    subtitle: "New Season, New Steps",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&h=600&fit=crop&auto=format",
    cta: "Shop Collection",
    href: "/collection?tag=summer-2026",
  },
  {
    title: "Urban Edge",
    subtitle: "Street-Ready Essentials",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=600&fit=crop&auto=format",
    cta: "Explore Now",
    href: "/collection?tag=urban-edge",
  },
  {
    title: "Performance Line",
    subtitle: "Train Without Limits",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&auto=format",
    cta: "View Lineup",
    href: "/collection?tag=performance",
  },
  {
    title: "Classic Heritage",
    subtitle: "Timeless Since Day One",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=600&fit=crop&auto=format",
    cta: "Discover More",
    href: "/collection?tag=heritage",
  },
];
