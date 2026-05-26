import { HeroSection } from "@/components/home/hero";
import { FeaturedProducts } from "@/components/home/featured-products";
import { Categories } from "@/components/home/categories";
import { AboutBrand } from "@/components/home/about-brand";
import { Testimonials } from "@/components/home/testimonials";
import { InstagramGallery } from "@/components/home/instagram-gallery";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <Categories />
      <AboutBrand />
      <Testimonials />
      <InstagramGallery />
    </>
  );
}
