"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Globe, Zap, Shield, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Linear Equity Structure",
    description: "Fair, transparent ownership for all investors",
    stat: "10%",
    statLabel: "Equity Available",
  },
  {
    icon: Zap,
    title: "Zero Development Cost",
    description: "Platform built entirely in-house by founding team",
    stat: "$0",
    statLabel: "Dev Expenses",
  },
  {
    icon: TrendingUp,
    title: "Scalable SaaS Model",
    description: "Monthly recurring revenue from provider subscriptions",
    stat: "8-12x",
    statLabel: "Revenue Multiple",
  },
  {
    icon: Users,
    title: "Proven Founding Team",
    description: "Deep expertise in travel tech and product development",
    stat: "2",
    statLabel: "Co-Founders",
  },
  {
    icon: Globe,
    title: "Global Market Access",
    description: "Platform designed for worldwide scalability from day one",
    stat: "195",
    statLabel: "Target Countries",
  },
];

export default function InvestmentHighlights() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-[#2563EB]/10 rounded-full mb-6">
            <span className="text-[#2563EB] font-semibold text-sm">Investment Opportunity</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#111827] mb-6">
            Why Invest in Bedbees
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            A unique opportunity to own equity in a platform redefining global travel
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#2563EB]/20"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB]/10 to-[#2563EB]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-[#2563EB]" strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#111827] mb-3">
                  {highlight.title}
                </h3>
                <p className="text-[#6B7280] mb-6 leading-relaxed">
                  {highlight.description}
                </p>

                {/* Stat */}
                <div className="pt-6 border-t border-gray-100">
                  <div className="text-4xl font-bold text-[#2563EB] mb-1">
                    {highlight.stat}
                  </div>
                  <div className="text-sm text-[#6B7280] font-medium">
                    {highlight.statLabel}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
