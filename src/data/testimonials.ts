export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  product?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Marcus Chen",
    role: "Marathon Runner",
    content:
      "The Velocity Pro Runner completely changed my race times. The cushioning system absorbs impact like nothing I've ever worn. I shaved 4 minutes off my personal best in my first month.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format&crop=face",
    product: "Velocity Pro Runner",
  },
  {
    id: "t2",
    name: "Sarah Mitchell",
    role: "Fitness Influencer",
    content:
      "I've tried dozens of training shoes, and UNOCO's Apex Training GX is in a class of its own. The stability during lateral movements is incredible, and they look amazing too.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format&crop=face",
    product: "Apex Training GX",
  },
  {
    id: "t3",
    name: "David Okonkwo",
    role: "Fashion Stylist",
    content:
      "UNOCO understands that footwear is fashion. The Noir Leather Chelsea is the most versatile shoe in my rotation — works with everything from tailored suits to relaxed denim.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format&crop=face",
    product: "Noir Leather Chelsea",
  },
  {
    id: "t4",
    name: "Emily Rodriguez",
    role: "Yoga Instructor",
    content:
      "The CloudStep Daily feels like walking on air. I wear them teaching 6 classes a day and my feet never hurt. Plus, the minimalist design gets me compliments everywhere.",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format&crop=face",
    product: "CloudStep Daily",
  },
  {
    id: "t5",
    name: "James Park",
    role: "CrossFit Athlete",
    content:
      "I'm incredibly hard on my shoes — UNOCO's Training line holds up month after month. The grip, the support, the breathability — everything is engineered for performance.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format&crop=face",
    product: "FlexForm Training",
  },
  {
    id: "t6",
    name: "Olivia Thompson",
    role: "Creative Director",
    content:
      "As someone who values both aesthetics and comfort, UNOCO hits the sweet spot every time. The Retro Runner 90 is my go-to for creative meetings and weekend outings alike.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&auto=format&crop=face",
    product: "Retro Runner 90",
  },
];
