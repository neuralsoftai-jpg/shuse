import { Hero } from "@/components/home/Hero";
import { BrandCategories } from "@/components/home/BrandCategories";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { BestSellers } from "@/components/home/BestSellers";
import { TrendingProducts } from "@/components/home/TrendingProducts";
import { NewArrivals } from "@/components/home/NewArrivals";
import { WhyChoose } from "@/components/home/WhyChoose";
import { PromoBanner } from "@/components/home/PromoBanner";
import { CustomerReviews } from "@/components/home/CustomerReviews";
import { BrandStory } from "@/components/home/BrandStory";
import { Statistics } from "@/components/home/Statistics";
import { InstagramGallery } from "@/components/home/InstagramGallery";
import { Newsletter } from "@/components/home/Newsletter";
import { FAQ } from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandCategories />
      <FeaturedCollections />
      <BestSellers />
      <TrendingProducts />
      <NewArrivals />
      <WhyChoose />
      <PromoBanner />
      <CustomerReviews />
      <BrandStory />
      <Statistics />
      <InstagramGallery />
      <Newsletter />
      <FAQ />
    </>
  );
}
