"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  as?: "button" | "a";
}

const variants = {
  primary:
    "bg-brown-600 text-white hover:bg-brown-700 shadow-md hover:shadow-lg",
  secondary:
    "bg-brown-100 text-brown-800 hover:bg-brown-200",
  outline:
    "border-2 border-brown-600 text-brown-600 hover:bg-brown-50",
  ghost:
    "text-brown-600 hover:bg-brown-50",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
