"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

export function AnimatedText({ text, className = "", once = true }: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <span className={`inline ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.33, 1, 0.68, 1] }}
            className="inline-block"
          >
            {word}
            {i < words.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
