"use client";

import { motion } from "framer-motion";
import { Clock, Zap, Users, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    icon: Clock,
    title: "Perfect Market Timing",
    points: [
      "Post-pandemic travel recovery creating massive demand",
      "Providers desperate for commission-free alternatives",
      "Consumer trust in legacy platforms at all-time low",
      "Remote work enabling 'digital nomad' boom",
    ],
  },
  {
    icon: Users,
    title: "Proven Team Execution",
    points: [
      "Founders built entire platform without external funding",
      "Deep expertise in travel technology and UX",
      "Track record of shipping quality products",
      "Committed to long-term vision, not quick flip",
    ],
  },
  {
    icon: TrendingUp,
    title: "Clear Path to Profitability",
    points: [
      "Subscription model = predictable revenue",
      "Low customer acquisition cost (organic growth)",
      "Minimal infrastructure overhead (cloud-native)",
      "Path to profitability within 18-24 months",
    ],
  },
  {
    icon: Zap,
    title: "First-Mover Advantage",
    points: [
      "No major competitor offers true commission-free travel",
      "Patent-pending technology for real-time booking",
      "Unique positioning in $1.7T market",
      "Strong brand differentiation opportunity",
    ],
  },
];

const timeline = [
  {
    quarter: "Q1 2026",
    title: "Beta Launch",
    description: "Initial provider onboarding in target markets",
  },
  {
    quarter: "Q2 2026",
    title: "Public Launch",
    description: "Full platform availability, marketing push",
  },
  {
    quarter: "Q3-Q4 2026",
    title: "Scale & Expand",
    description: "Geographic expansion, feature rollout",
  },
  {
    quarter: "2027+",
    title: "Market Leader",
    description: "Category dominance, potential exit opportunities",
  },
];

export default function WhyNow() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#FAF9F7] to-white">
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
            <span className="text-[#2563EB] font-semibold text-sm">Perfect Timing</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#111827] mb-6">
            Why Invest Now
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Every element is aligned for explosive growth
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB]/10 to-[#2563EB]/5 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-[#2563EB]" strokeWidth={2} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#111827] mb-6">
                      {reason.title}
                    </h3>
                    
                    <ul className="space-y-3">
                      {reason.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" strokeWidth={2} />
                          <span className="text-[#6B7280]">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#2563EB] to-[#1e40af] rounded-3xl p-12 shadow-2xl"
        >
          <h3 className="text-4xl font-bold text-white text-center mb-16">
            Growth Timeline
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((phase, index) => (
              <motion.div
                key={phase.quarter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-white/20"></div>
                )}
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 h-full">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  
                  <div className="text-sm font-semibold text-[#93c5fd] mb-2">
                    {phase.quarter}
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">
                    {phase.title}
                  </h4>
                  
                  <p className="text-gray-200 text-sm">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Investment Urgency */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-amber-50 border-l-4 border-amber-500 rounded-2xl p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-amber-600" strokeWidth={2} />
            </div>
            
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-[#111827] mb-3">
                Limited Time Opportunity
              </h4>
              <p className="text-[#6B7280] mb-6">
                This investment round closes when we reach our target. Early investors benefit from:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 border border-amber-200">
                  <div className="font-bold text-[#111827] mb-1">Lowest Entry Price</div>
                  <div className="text-sm text-[#6B7280]">Pre-launch valuation</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-amber-200">
                  <div className="font-bold text-[#111827] mb-1">Maximum Equity</div>
                  <div className="text-sm text-[#6B7280]">Before dilution events</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-amber-200">
                  <div className="font-bold text-[#111827] mb-1">Founding Status</div>
                  <div className="text-sm text-[#6B7280]">Lifetime recognition</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
