"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/container";
import { brandInfo } from "@/lib/data";
import { Heart, Sparkles, Shield, Gift, Quote } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const featureIcons: Record<string, React.ReactNode> = {
  "Handmade with Love": <Heart className="w-6 h-6" />,
  "Customized Just for You": <Sparkles className="w-6 h-6" />,
  "Premium Quality": <Shield className="w-6 h-6" />,
  "Emotional Design": <Gift className="w-6 h-6" />,
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-28 sm:pt-36 pb-0">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brown-900">
              Our Story
            </h1>
            <p className="mt-4 text-lg text-brown-600 leading-relaxed">
              {brandInfo.story}
            </p>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-brown-100 to-brown-200 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="text-7xl">🤎</div>
                  <p className="font-serif text-2xl font-bold text-brown-800">
                    {brandInfo.name}
                  </p>
                  <p className="text-brown-500">{brandInfo.tagline}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-brown-100 px-4 py-1.5 text-sm text-brown-700">
                <Quote className="w-4 h-4" />
                Our Mission
              </div>
              <p className="font-serif text-2xl font-semibold text-brown-800 leading-relaxed">
                &ldquo;{brandInfo.mission}&rdquo;
              </p>
              <p className="text-brown-600 leading-relaxed">
                {brandInfo.description}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {brandInfo.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="p-4 rounded-xl bg-brown-50 border border-brown-100"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brown-100 text-brown-600 flex items-center justify-center mb-3">
                      {featureIcons[feature.title]}
                    </div>
                    <h3 className="font-medium text-sm text-brown-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-brown-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section className="bg-brown-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown-900">
                Let&apos;s Create Something Beautiful Together
              </h2>
              <p className="text-lg text-brown-600">
                Have a special occasion? We&apos;d love to help you create the perfect
                handmade gift. Get in touch with us!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link
                  href="https://wa.me/917034176835"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    Chat on WhatsApp
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
}
