"use client";

import { motion } from "framer-motion";
import { DollarSign, Target, TrendingUp, Award } from "lucide-react";

const metrics = [
  {
    value: "$1.7T",
    label: "Global Travel Market",
    subtext: "Growing at 11% annually",
  },
  {
    value: "2.3B",
    label: "Online Bookings/Year",
    subtext: "Expected to reach 3.1B by 2030",
  },
  {
    value: "$0",
    label: "Commission Fees",
    subtext: "We use subscription model, not commissions",
  },
  {
    value: "$10B+",
    label: "TAM Opportunity",
    subtext: "Addressable market for subscription model",
  },
];

const differentiators = [
  {
    icon: DollarSign,
    title: "Subscription-Based Revenue Model",
    description: "Providers keep 100% of earnings. We charge a simple monthly subscription instead of extracting commissions from every transaction like competitors do.",
    impact: "Lower prices for travelers, higher margins for providers",
  },
  {
    icon: Target,
    title: "First-Mover in Fair Travel",
    description: "No major platform has successfully launched a truly commission-free model at scale. We're first.",
    impact: "Massive competitive moat and brand differentiation",
  },
  {
    icon: TrendingUp,
    title: "Predictable Revenue Model",
    description: "Subscription-based MRR is more stable and valuable than transaction-based revenue. Higher multiples at exit.",
    impact: "SaaS-style valuation multiples (8-12x revenue vs 2-4x)",
  },
  {
    icon: Award,
    title: "Built by Engineers, Not MBAs",
    description: "Platform developed in-house at zero cost. No technical debt. No outsourcing. Complete control.",
    impact: "60% complete, $0 spent on development",
  },
];

export default function MarketOpportunity() {
  return (
    <section className="py-32 bg-[#111827] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-white font-semibold text-sm">Market Opportunity</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            A $1.7 Trillion Market <br className="hidden md:block" />
            Ready for Disruption
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The travel industry is massive, profitable, and ripe for transformation
          </p>
        </motion.div>

        {/* Market Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="text-5xl font-bold text-[#2563EB] mb-3">
                {metric.value}
              </div>
              <div className="text-lg font-semibold mb-2">
                {metric.label}
              </div>
              <div className="text-sm text-gray-400">
                {metric.subtext}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Competitive Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-bold text-center mb-16">
            What Makes Bedbees Different
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-[#2563EB]/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#2563EB]/20 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#2563EB]" strokeWidth={2} />
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="pt-6 border-t border-white/10">
                    <div className="text-sm text-[#2563EB] font-semibold uppercase tracking-wide mb-2">
                      Impact
                    </div>
                    <div className="text-white font-medium">
                      {item.impact}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
