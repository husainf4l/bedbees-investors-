"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

export default function SolutionComparison() {
  return (
    <div className="overflow-x-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="min-w-full"
      >
        <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <thead className="bg-primary-600 text-white">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">Feature</th>
              <th className="px-6 py-4 text-left font-semibold">BedBees</th>
              <th className="px-6 py-4 text-left font-semibold">Booking.com</th>
              <th className="px-6 py-4 text-left font-semibold">Airbnb</th>
              <th className="px-6 py-4 text-left font-semibold">Expedia</th>
            </tr>
          </thead>
          <tbody>
            {siteConfig.comparison.map((row, index) => (
              <tr
                key={row.feature}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {row.feature}
                </td>
                <td className="px-6 py-4 text-primary-700 font-semibold">
                  {row.bedBees}
                </td>
                <td className="px-6 py-4 text-gray-600">{row.booking}</td>
                <td className="px-6 py-4 text-gray-600">{row.airbnb}</td>
                <td className="px-6 py-4 text-gray-600">{row.expedia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}
