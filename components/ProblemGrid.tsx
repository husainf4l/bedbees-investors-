"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

export default function ProblemGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {siteConfig.problems.map((problem, index) => (
        <motion.div
          key={problem.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="card"
        >
          <div className="text-5xl mb-4">{problem.icon}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {problem.title}
          </h3>
          <p className="text-gray-600">{problem.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
