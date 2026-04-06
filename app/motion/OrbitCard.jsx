"use client";

import { Outfit } from "next/font/google";
import { motion } from "motion/react";
import { Sparkles, Rocket, ShieldCheck, ArrowUpRight } from "lucide-react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const featureItems = [
  {
    icon: Sparkles,
    title: "Smooth Reveal",
    text: "Staggered content entrance with blur-to-focus transitions.",
  },
  {
    icon: Rocket,
    title: "Quick Motion",
    text: "Hover interactions with spring-based movement.",
  },
  {
    icon: ShieldCheck,
    title: "Clean Structure",
    text: "Simple and reusable component composition.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function OrbitCard() {
  return (
    <div>
        Orbit card
    </div>
  );
}
