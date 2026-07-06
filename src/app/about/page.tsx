import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About & Contact",
  description: "Learn about UNOCO Shoes — our story, mission, values, and how to get in touch with our team.",
};

export default function AboutPage() {
  return <AboutContent />;
}
