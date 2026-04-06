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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 150, damping: 16 }}
      className="w-80 h-128 rounded-xl bg-neutral-950 text-white p-4 shadow-2xl border border-neutral-800"
    >
      <div className="flex h-full flex-col rounded-lg border border-neutral-800 bg-neutral-900/80 p-4">
        <div className="mb-4 flex items-center justify-between">
          <h3 className={`${outfit.className} text-lg font-semibold tracking-tight`}>
            Orbit Card
          </h3>
          <motion.button
            whileHover={{ rotate: 8, scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1 rounded-md border border-neutral-700 px-2 py-1 text-xs text-neutral-200"
          >
            Open
            <ArrowUpRight className="size-3" />
          </motion.button>
        </div>

        <p className={`${outfit.className} mb-4 text-xs leading-relaxed text-neutral-300`}>
          A second motion card with staggered list reveal and spring hover lift.
        </p>

        <div className="space-y-3">
          {featureItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ x: 4 }}
                className="rounded-lg border border-neutral-800 bg-neutral-900 p-3"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-neutral-800">
                    <Icon className="size-4 text-neutral-200" />
                  </div>
                  <div>
                    <p className={`${outfit.className} text-sm font-medium`}>{item.title}</p>
                    <p className={`${outfit.className} mt-1 text-xs text-neutral-400`}>{item.text}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-auto rounded-lg border border-neutral-800 bg-neutral-900 p-3"
        >
          <p className={`${outfit.className} text-[11px] uppercase tracking-[0.15em] text-neutral-400`}>
            Motion Score
          </p>
          <div className="mt-2 flex items-end gap-1">
            {[45, 70, 58, 85, 76, 94].map((height, index) => (
              <motion.span
                key={`${height}-${index}`}
                initial={{ height: 4 }}
                whileInView={{ height }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 * index }}
                className="w-3 rounded-sm bg-neutral-200"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
