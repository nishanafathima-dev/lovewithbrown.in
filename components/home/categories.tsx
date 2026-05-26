"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container, Section, SectionTitle } from "@/components/ui/container";
import { categories } from "@/lib/data";
import { ArrowRight, Palette, Flower2, Image, Gift } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  portraits: <Palette className="w-8 h-8" />,
  flowers: <Flower2 className="w-8 h-8" />,
  frames: <Image className="w-8 h-8" />,
  hampers: <Gift className="w-8 h-8" />,
};

export function Categories() {
  return (
    <Section className="bg-brown-50">
      <Container>
        <SectionTitle
          title="Our Categories"
          subtitle="Explore our range of handmade gifts, each category crafted with unique love and care."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/products?category=${category.id}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white p-8 border border-brown-100 hover:border-brown-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-xl bg-brown-100 text-brown-600 flex items-center justify-center mb-5 group-hover:bg-brown-600 group-hover:text-white transition-all duration-500">
                    {iconMap[category.id]}
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-brown-900 mb-2 group-hover:text-brown-600 transition-colors duration-300">
                    {category.name}
                  </h3>

                  <p className="text-sm text-brown-500 leading-relaxed mb-4">
                    {category.description}
                  </p>

                  <div className="flex items-center gap-1 text-sm font-medium text-brown-600 group-hover:gap-2 transition-all duration-300">
                    Explore Now
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
