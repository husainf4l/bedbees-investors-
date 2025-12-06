"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTAButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
    >
      <Link href="/investor" className="btn-primary">
        Become a Founding Investor
      </Link>
      <Link href="/about" className="btn-secondary">
        Read Investor Brief
      </Link>
    </motion.div>
  );
}
