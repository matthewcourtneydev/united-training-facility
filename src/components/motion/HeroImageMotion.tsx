"use client";

import { motion } from "motion/react";

export default function HeroImageMotion({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.035,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute inset-0"
    >
      {children}
    </motion.div>
  );
}