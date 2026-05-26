"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBag, Heart } from "lucide-react";
import { Product } from "@/types";
import { Badge } from "./badge";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={`/products/${product.id}`}>
        <div className="relative overflow-hidden rounded-2xl bg-brown-50 aspect-square">
          <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-brown-100 to-brown-200 flex items-center justify-center">
              <ShoppingBag className="w-16 h-16 text-brown-400" />
            </div>
          </div>

          {product.originalPrice && (
            <div className="absolute top-3 left-3 z-20">
              <Badge variant="sale">Sale</Badge>
            </div>
          )}

          <button className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white">
            <Heart className="w-4 h-4 text-brown-600" />
          </button>

          <div className="absolute inset-x-0 bottom-0 p-4 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex items-center justify-center gap-2 rounded-full bg-white/90 backdrop-blur-sm py-2.5 px-4">
              <ShoppingBag className="w-4 h-4 text-brown-600" />
              <span className="text-sm font-medium text-brown-800">Quick View</span>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-brown-500 uppercase tracking-wider">
              {product.category}
            </span>
          </div>
          <h3 className="font-serif text-lg font-semibold text-brown-900 group-hover:text-brown-600 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-sm text-brown-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
          <div className="flex items-center gap-2 pt-1">
            <span className="text-lg font-bold text-brown-800">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-brown-400 line-through">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
