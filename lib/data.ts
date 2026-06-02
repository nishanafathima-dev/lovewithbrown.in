import { Product, Category, Testimonial } from "@/types";

export const products: Product[] = [
  {
    id: "pencil-portrait",
    name: "Custom Pencil Portrait",
    description:
      "A hand-drawn pencil portrait capturing the essence of your loved ones. Each stroke tells a story, crafted with precision and love on premium paper.",
    price: 1499,
    originalPrice: 1999,
    category: "portraits",
    images: ["/placeholder.svg"],
    featured: true,
    details: [
      "Hand-drawn on premium A4 paper",
      "High-quality graphite pencils",
      "Customizable size options",
      "Includes framing option",
      "Delivery within 7-10 days",
    ],
    materials: ["Premium A4 Paper", "Graphite Pencils (2H-8B)", "Charcoal", "Eraser & Blending Tools"],
    deliveryInfo: "Dispatched within 5-7 business days. Free shipping across India.",
  },
  {
    id: "pipe-cleaner-bouquet",
    name: "Pipe Cleaner Flower Bouquet",
    description:
      "Everlasting handmade flower bouquet crafted from premium pipe cleaners. Each petal is carefully shaped to create a gift that never wilts.",
    price: 999,
    originalPrice: 1299,
    category: "flowers",
    images: ["/placeholder.svg"],
    featured: true,
    details: [
      "10-12 handmade flowers per bouquet",
      "Custom color combinations",
      "Wrapped in premium tissue paper",
      "Includes personalized message card",
      "Lasts forever - no maintenance needed",
    ],
    materials: ["Premium Pipe Cleaners", "Floral Tape", "Artificial Stems", "Tissue Paper", "Ribbon"],
    deliveryInfo: "Dispatched within 3-5 business days. Free shipping across India.",
  },
  {
    id: "custom-frame",
    name: "Personalized Photo Frame",
    description:
      "A beautifully crafted frame that holds your precious memories. Customized with names, dates, and special messages to make it truly unique.",
    price: 799,
    originalPrice: 999,
    category: "frames",
    images: ["/placeholder.svg"],
    featured: true,
    details: [
      "High-quality wooden frame",
      "Custom engraving available",
      "Multiple size options (4x6 to 8x10)",
      "Glass front protection",
      "Stand or wall-mount option",
    ],
    materials: ["Solid Wood Frame", "Glass", "Cardboard Backing", "Engraving Tools"],
    deliveryInfo: "Dispatched within 7-10 business days. Free shipping across India.",
  },
  {
    id: "surprise-hampers",
    name: "Custom Surprise Hamper",
    description:
      "A thoughtfully curated surprise hamper filled with handmade goodies. Perfect for birthdays, anniversaries, or just because.",
    price: 2499,
    originalPrice: 2999,
    category: "hampers",
    images: ["/placeholder.svg"],
    featured: true,
    details: [
      "Handpicked assortment of gifts",
      "Customizable based on preferences",
      "Beautifully packed in a premium box",
      "Includes handwritten letter",
      "Suitable for all occasions",
    ],
    materials: ["Premium Gift Box", "Tissue Paper", "Ribbon", "Handpicked Items", "Personalized Letter"],
    deliveryInfo: "Dispatched within 5-7 business days. Free shipping across India.",
  },
  {
    id: "mini-portrait",
    name: "Mini Pencil Sketch",
    description:
      "A compact yet detailed pencil sketch perfect for gifting. Ideal for those who want a personalized touch in a smaller format.",
    price: 699,
    category: "portraits",
    images: ["/placeholder.svg"],
    featured: false,
    details: [
      "Hand-drawn on premium paper",
      "Compact size (5x7 inches)",
      "Perfect for gifting",
      "Quick delivery",
    ],
    materials: ["Premium Paper", "Graphite Pencils", "Charcoal"],
    deliveryInfo: "Dispatched within 3-5 business days. Free shipping across India.",
  },
  {
    id: "pipe-cleaner-rose",
    name: "Pipe Cleaner Rose",
    description:
      "A single, stunning handmade rose crafted from pipe cleaners. A timeless symbol of love that never fades.",
    price: 299,
    category: "flowers",
    images: ["/placeholder.svg"],
    featured: false,
    details: ["Handcrafted single rose", "Available in multiple colors", "Wrapped with care", "Perfect add-on gift"],
    materials: ["Pipe Cleaners", "Floral Tape", "Artificial Stem"],
    deliveryInfo: "Dispatched within 2-3 business days. Free shipping across India.",
  },
  {
    id: "couple-portrait",
    name: "Couple Pencil Portrait",
    description:
      "A romantic dual portrait capturing the beautiful bond between two souls. Perfect for engagements, weddings, or anniversaries.",
    price: 2499,
    originalPrice: 2999,
    category: "portraits",
    images: ["/placeholder.svg"],
    featured: false,
    details: [
      "Two subjects in one frame",
      "Available in multiple sizes",
      "High attention to detail",
      "Premium paper quality",
      "Includes framing option",
    ],
    materials: ["Premium A3/A4 Paper", "Graphite Pencils", "Charcoal", "Blending Tools"],
    deliveryInfo: "Dispatched within 7-10 business days. Free shipping across India.",
  },
  {
    id: "flower-vase",
    name: "Pipe Cleaner Vase Arrangement",
    description:
      "A stunning vase arrangement with multiple pipe cleaner flowers. An elegant centerpiece that brings joy to any room.",
    price: 1499,
    category: "flowers",
    images: ["/placeholder.svg"],
    featured: false,
    details: [
      "15-20 flowers in a ceramic vase",
      "Custom color theme",
      "Ceramic vase included",
      "Perfect home decor gift",
      "Never needs water or care",
    ],
    materials: ["Pipe Cleaners", "Ceramic Vase", "Floral Tape", "Decorative Elements"],
    deliveryInfo: "Dispatched within 5-7 business days. Free shipping across India.",
  },
];

export const categories: Category[] = [
  {
    id: "portraits",
    name: "Pencil Portraits",
    description: "Hand-drawn portraits that capture emotions in every stroke",
    image: "/placeholder.svg",
  },
  {
    id: "flowers",
    name: "Pipe Cleaner Flowers",
    description: "Everlasting blooms crafted with love and care",
    image: "/placeholder.svg",
  },
  {
    id: "frames",
    name: "Custom Frames",
    description: "Beautiful frames preserving your precious memories",
    image: "/placeholder.svg",
  },
  {
    id: "hampers",
    name: "Surprise Hampers",
    description: "Curated gift boxes filled with love and surprises",
    image: "/placeholder.svg",
  },
];

export const testimonials: Testimonial[] = [
 
  {
    id: "2",
    name: "Rahul Verma",
    text: "Ordered the pipe cleaner bouquet for my girlfriend's birthday. She absolutely loved it! It's been 6 months and it still looks as fresh as day one.",
    rating: 5,
    image: "/placeholder.svg",
    occasion: "Birthday Gift",
  },
  {
    id: "3",
    name: "Ananya Patel",
    text: "The custom frame with our wedding date engraved is gorgeous. Quality exceeded my expectations. Will definitely order again!",
    rating: 5,
    image: "/placeholder.svg",
    occasion: "Wedding Gift",
  },
  {
    id: "4",
    name: "Arjun Singh",
    text: "Got the surprise hamper for my mom on Mother's Day. She was so touched by the handwritten letter and the thoughtful selection of gifts.",
    rating: 5,
    image: "/placeholder.svg",
    occasion: "Mother's Day",
  },
];

export const brandInfo = {
  name: "Love With Brown",
  tagline: "Handmade with Love, Crafted for Emotions",
  description:
    "At Love With Brown, we believe every gift should tell a story. Our handmade creations are crafted with love, care, and attention to detail, making each piece unique and special. From pencil portraits that capture souls to pipe cleaner flowers that bloom forever, we create gifts that speak from the heart.",
  story:
    "Love With Brown started with a simple idea — to make gifting more personal and meaningful. What began as a small hobby of creating handmade gifts for friends and family has grown into a brand dedicated to spreading love through art. Every creation carries the warmth of handmade craftsmanship and the emotion of a personalized touch.",
  mission:
    "To help people express their love through unique, handmade gifts that create lasting memories.",
  features: [
    {
      title: "Handmade with Love",
      description: "Each product is meticulously crafted by hand, ensuring uniqueness in every piece.",
    },
    {
      title: "Customized Just for You",
      description: "Personalize your gift with names, dates, messages, or specific preferences.",
    },
    {
      title: "Premium Quality",
      description: "We use only the best materials to ensure your gift looks beautiful and lasts long.",
    },
    {
      title: "Emotional Design",
      description: "Every design is thoughtfully created to evoke emotions and create special moments.",
    },
  ],
};

export const faqs = [
  {
    question: "How long does delivery take?",
    answer:
      "Most products are dispatched within 5-7 business days. Delivery typically takes 2-5 business days across India depending on your location.",
  },
  {
    question: "Can I customize my order?",
    answer:
      "Yes! We love customization. You can personalize portraits with reference photos, choose colors for flowers, and add messages to frames and hampers.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Since each product is made to order, we don't accept returns. However, if your order arrives damaged, we'll replace it free of charge.",
  },
  {
    question: "Do you offer gift wrapping?",
    answer:
      "Yes! Every product comes beautifully wrapped in our signature packaging, ready to gift. Premium gift wrapping options are also available.",
  },
  {
    question: "Can I order for bulk or corporate gifting?",
    answer:
      "Absolutely! We offer special discounts for bulk and corporate orders. Please contact us for a custom quote.",
  },
];
