"use client";

import Link from "next/link";
import { Container, Section, SectionTitle } from "@/components/ui/container";
import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data";

export function FeaturedProducts() {
  const featured = products.filter((p) => p.featured);

  return (
    <Section className="bg-soft-white">
      <Container>
        <SectionTitle
          title="Featured Handmade Gifts"
          subtitle="Each piece is crafted with love and attention to detail, making your gift truly one-of-a-kind."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featured.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/products">
            <Button variant="outline" size="lg">
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
