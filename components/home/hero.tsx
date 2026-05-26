"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-brown-50 to-soft-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brown-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brown-200 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cream rounded-full blur-3xl opacity-50" />

        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4"
        >
          <Sparkles className="w-8 h-8 text-brown-300" />
        </motion.div>
      </div>

      <Container className="relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-brown-100 px-4 py-1.5 text-sm text-brown-700"
            >
              <Sparkles className="w-4 h-4" />
              Handmade with Love & Care
            </motion.div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-brown-900 leading-tight">
              Handmade Gifts
              <br />
              <span className="text-brown-600">From the Heart</span>
            </h1>

            <p className="text-lg text-brown-600 max-w-lg leading-relaxed">
              Discover unique, handmade gifts that speak the language of love.
              From pencil portraits to everlasting flower bouquets, each piece is
              crafted with emotion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg">
                  Explore Collection
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link
                href="https://wa.me/919XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  Order on WhatsApp
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4">
              {[
                { number: "200+", label: "Happy Customers" },
                { number: "100%", label: "Handmade" },
                { number: "4.9", label: "Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-brown-800">
                    {stat.number}
                  </div>
                  <div className="text-sm text-brown-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-brown-200 to-brown-300 rounded-[3rem] transform rotate-6" />
              <div className="absolute inset-4 bg-gradient-to-br from-brown-100 to-brown-200 rounded-[2.5rem] transform -rotate-3" />
              <div className="absolute inset-8 bg-soft-white rounded-[2rem] flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🤎</div>
                  <div className="space-y-2">
                    <p className="font-serif text-2xl font-bold text-brown-800">
                      Love With Brown
                    </p>
                    <p className="text-brown-500 text-sm max-w-xs mx-auto">
                      Every gift tells a story. Let us help you write yours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
