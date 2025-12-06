"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

export default function InvestorBox() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {/* Investment Structure */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card bg-gradient-to-br from-primary-50 to-white"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Investment Structure
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Total Allocation:</span>
            <span className="text-primary-700 font-bold">
              {siteConfig.investor.totalAllocation}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Target Investors:</span>
            <span className="text-primary-700 font-bold">
              {siteConfig.investor.targetInvestors}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Minimum Entry:</span>
            <span className="text-primary-700 font-bold">
              ${siteConfig.investor.minimumInvestment.toLocaleString()}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Ownership Examples */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ownership Examples
        </h3>
        <div className="space-y-3">
          {siteConfig.investor.ownership.map((item) => (
            <div
              key={item.amount}
              className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0"
            >
              <span className="text-gray-700 font-medium">
                ${item.amount.toLocaleString()}
              </span>
              <span className="text-primary-700 font-bold">
                {item.percentage}% equity
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
