"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/container";
import { brandInfo } from "@/lib/data";
import { Heart, Sparkles, Shield, Gift } from "lucide-react";

const featureIcons: Record<string, React.ReactNode> = {
  "Handmade with Love": <Heart className="w-6 h-6" />,
  "Customized Just for You": <Sparkles className="w-6 h-6" />,
  "Premium Quality": <Shield className="w-6 h-6" />,
  "Emotional Design": <Gift className="w-6 h-6" />,
};

export function AboutBrand() {
  return (
    <Section className="bg-soft-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown-900 leading-tight">
              {brandInfo.tagline}
            </h2>
            <p className="text-brown-600 leading-relaxed">
              {brandInfo.description}
            </p>
            <p className="text-brown-600 leading-relaxed">
              {brandInfo.story}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {brandInfo.features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-brown-50 border border-brown-100 hover:border-brown-200 hover:bg-brown-100/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-brown-100 text-brown-600 flex items-center justify-center mb-4">
                  {featureIcons[feature.title]}
                </div>
                <h3 className="font-serif text-base font-semibold text-brown-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-brown-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
