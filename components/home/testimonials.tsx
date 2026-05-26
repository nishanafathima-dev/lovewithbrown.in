"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Section, SectionTitle } from "@/components/ui/container";
import { testimonials } from "@/lib/data";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <Section className="bg-brown-50">
      <Container>
        <SectionTitle
          title="What Our Customers Say"
          subtitle="Real words from people who've gifted love through our handmade creations."
        />

        <div className="mt-12 max-w-3xl mx-auto relative">
          <div className="relative overflow-hidden rounded-3xl bg-white p-8 sm:p-12 shadow-lg border border-brown-100">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-brown-100" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brown-500 text-brown-500" />
                  ))}
                </div>

                <p className="text-lg text-brown-700 leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brown-200 to-brown-300 flex items-center justify-center">
                    <span className="text-lg font-bold text-brown-700">
                      {testimonials[current].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-brown-900">
                      {testimonials[current].name}
                    </div>
                    {testimonials[current].occasion && (
                      <div className="text-sm text-brown-500">
                        {testimonials[current].occasion}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white border border-brown-200 text-brown-600 hover:bg-brown-50 hover:border-brown-300 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-brown-600 w-6"
                      : "bg-brown-300 hover:bg-brown-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-white border border-brown-200 text-brown-600 hover:bg-brown-50 hover:border-brown-300 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
