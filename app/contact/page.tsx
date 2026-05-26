"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/data";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ChevronDown,
  Send,
  ExternalLink,
} from "lucide-react";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi! I'm ${formState.name} (${formState.email}). ${formState.message}`;
    window.open(
      `https://wa.me/919XXXXXXXXX?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

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
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-brown-600">
              We&apos;d love to hear from you! Whether you have a question about our
              products or want to discuss a custom order.
            </p>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-2xl font-bold text-brown-900 mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-brown-700 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-brown-200 bg-white text-brown-900 placeholder:text-brown-400 focus:outline-none focus:ring-2 focus:ring-brown-300 focus:border-brown-400 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-brown-700 mb-1.5"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl border border-brown-200 bg-white text-brown-900 placeholder:text-brown-400 focus:outline-none focus:ring-2 focus:ring-brown-300 focus:border-brown-400 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-brown-700 mb-1.5"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Tell us about your custom order or ask us anything..."
                      className="w-full px-4 py-3 rounded-xl border border-brown-200 bg-white text-brown-900 placeholder:text-brown-400 focus:outline-none focus:ring-2 focus:ring-brown-300 focus:border-brown-400 transition-all duration-300 resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send className="w-4 h-4" />
                    Send via WhatsApp
                  </Button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-2xl font-bold text-brown-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+91 9XXXXXXXXX",
                      href: "tel:+919XXXXXXXXX",
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: "hello@lovewithbrown.in",
                      href: "mailto:hello@lovewithbrown.in",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "India",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 p-4 rounded-xl bg-brown-50 border border-brown-100"
                    >
                      <div className="w-10 h-10 rounded-lg bg-brown-100 text-brown-600 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-brown-700">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-brown-600 hover:text-brown-800 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-brown-600">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-brown-900 mb-6">
                  Follow Us
                </h2>
                <div className="flex items-center gap-3">
                  {[
                { icon: "instagram", href: "https://instagram.com", label: "Instagram" },
                  { icon: "facebook", href: "https://facebook.com", label: "Facebook" },
                    {
                      icon: MessageCircle,
                      href: "https://wa.me/919XXXXXXXXX",
                      label: "WhatsApp",
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-brown-100 text-brown-600 hover:bg-brown-600 hover:text-white transition-all duration-300"
                    >
                      {social.icon === "instagram" ? (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-brown-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-brown-100 bg-white overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between gap-4 p-4 text-left"
                      >
                        <span className="text-sm font-medium text-brown-900">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-brown-500 shrink-0 transition-transform duration-300 ${
                            openFaq === i ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: openFaq === i ? "auto" : 0,
                          opacity: openFaq === i ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-4 pb-4 text-sm text-brown-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
}
