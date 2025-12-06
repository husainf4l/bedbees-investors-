"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const formatAnswer = (answer: string) => {
    // Split by numbered points (1., 2., etc.) or bullet points
    const sections = answer.split(/(\d+\.\s|•\s)/).filter(s => s.trim());
    
    return sections.map((section, idx) => {
      // Check if it's a numbered section
      const numberedMatch = section.match(/^(\d+)\.\s(.+?)(?:\s-\s(.+))?/);
      if (numberedMatch) {
        const [, number, title, description] = numberedMatch;
        return (
          <div key={idx} className="mb-4 last:mb-0">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 bg-[#2563EB]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-bold text-[#2563EB]">{number}</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-[#111827] mb-1">{title.trim()}</h4>
                {description && <p className="text-[#6B7280]">{description.trim()}</p>}
              </div>
            </div>
          </div>
        );
      }
      
      // Regular paragraph
      if (section.trim()) {
        return (
          <p key={idx} className="mb-3 last:mb-0 text-[#6B7280] leading-relaxed">
            {section.trim()}
          </p>
        );
      }
      
      return null;
    }).filter(Boolean);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {siteConfig.faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex justify-between items-center text-left p-6 hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-lg font-bold text-[#111827] pr-8">
              {faq.question}
            </h3>
            <ChevronDown 
              className={`w-6 h-6 text-[#2563EB] transition-transform duration-300 flex-shrink-0 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 pb-6 border-t border-gray-100"
            >
              <div className="pt-4">
                {formatAnswer(faq.answer)}
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
