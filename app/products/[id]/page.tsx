"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/data";
import {
  ArrowLeft,
  ShoppingBag,
  Heart,
  Check,
  Truck,
  Sparkles,
  Shield,
} from "lucide-react";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-brown-900 mb-4">
            Product not found
          </h1>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 sm:pt-28">
      <Container className="py-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-brown-500 hover:text-brown-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-brown-100 to-brown-200 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <ShoppingBag className="w-24 h-24 text-brown-300" />
              </div>
              {product.originalPrice && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="sale">Sale</Badge>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <span className="text-sm font-medium text-brown-500 uppercase tracking-wider">
                {product.category.replace("-", " ")}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brown-900 mt-2">
                {product.name}
              </h1>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-brown-800">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-brown-400 line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                  <Badge variant="sale">
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100
                    )}
                    % OFF
                  </Badge>
                </>
              )}
            </div>

            <p className="text-brown-600 leading-relaxed text-lg">
              {product.description}
            </p>

            <div className="space-y-4">
              <h3 className="font-serif text-lg font-semibold text-brown-900">
                What&apos;s Included
              </h3>
              <ul className="space-y-3">
                {product.details.map((detail, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-brown-500 mt-0.5 shrink-0" />
                    <span className="text-brown-600">{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-lg font-semibold text-brown-900">
                Materials Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((material) => (
                  <span
                    key={material}
                    className="rounded-full bg-brown-50 border border-brown-200 px-3 py-1.5 text-sm text-brown-600"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-brown-50 border border-brown-100">
              <Truck className="w-5 h-5 text-brown-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-brown-800">Delivery Info</p>
                <p className="text-sm text-brown-500">{product.deliveryInfo}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/919XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button size="lg" className="w-full">
                  <ShoppingBag className="w-5 h-5" />
                  Order on WhatsApp
                </Button>
              </a>
              <Button variant="outline" size="lg">
                <Heart className="w-5 h-5" />
                Add to Wishlist
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-2">
              {[
                { icon: Shield, text: "Secure Ordering" },
                { icon: Truck, text: "Free Shipping" },
                { icon: Sparkles, text: "Handmade Quality" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-brown-500">
                  <item.icon className="w-4 h-4" />
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
