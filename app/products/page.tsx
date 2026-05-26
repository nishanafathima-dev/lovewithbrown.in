"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/container";
import { ProductCard } from "@/components/ui/product-card";
import { products, categories } from "@/lib/data";
import { Search } from "lucide-react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <Section className="pt-28 sm:pt-36 pb-0">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brown-900">
              Our Collection
            </h1>
            <p className="mt-4 text-lg text-brown-600">
              Every piece is handcrafted with love, making your gift truly one-of-a-kind.
            </p>
          </motion.div>
        </Container>
      </Section>

      <Section className="pt-10">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === "all"
                    ? "bg-brown-600 text-white shadow-md"
                    : "bg-brown-50 text-brown-600 hover:bg-brown-100"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? "bg-brown-600 text-white shadow-md"
                      : "bg-brown-50 text-brown-600 hover:bg-brown-100"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brown-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-brown-200 bg-white text-sm text-brown-900 placeholder:text-brown-400 focus:outline-none focus:ring-2 focus:ring-brown-300 focus:border-brown-400 transition-all duration-300"
              />
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {filtered.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-brown-500">No products found matching your criteria.</p>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
