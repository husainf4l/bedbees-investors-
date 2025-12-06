"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {siteConfig.faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          className="card"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex justify-between items-center text-left"
          >
            <h3 className="text-lg font-semibold text-gray-900 pr-8">
              {faq.question}
            </h3>
            <svg
              className={`w-6 h-6 text-primary-600 transition-transform duration-300 flex-shrink-0 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-gray-600 leading-relaxed"
            >
              {faq.answer}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
