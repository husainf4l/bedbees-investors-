"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

export default function RoadmapTimeline() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {siteConfig.roadmap.map((quarter, index) => (
          <motion.div
            key={quarter.quarter}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="relative"
          >
            {/* Timeline connector */}
            {index < siteConfig.roadmap.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-full w-full h-1 bg-gradient-to-r from-primary-600 to-primary-300 -z-10" />
            )}

            <div className="card bg-gradient-to-br from-primary-50 to-white">
              <div className="inline-block bg-primary-600 text-white px-4 py-2 rounded-lg font-bold mb-4">
                {quarter.quarter}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {quarter.title}
              </h3>
              <ul className="space-y-2">
                {quarter.tasks.map((task, taskIndex) => (
                  <li
                    key={taskIndex}
                    className="flex items-start text-gray-700 text-sm"
                  >
                    <svg
                      className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
