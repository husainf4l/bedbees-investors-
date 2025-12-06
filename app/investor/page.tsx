"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import InvestorBox from "@/components/InvestorBox";
import RoadmapTimeline from "@/components/RoadmapTimeline";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

export default function InvestorPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Investor Information
          </motion.h1>
        </div>
      </section>

      {/* Investment Overview */}
      <section className="section-container">
        <SectionTitle
          title="Investment Overview"
          subtitle="Transparent, linear ownership in a global travel revolution"
        />
        <InvestorBox />
      </section>

      {/* Growth Principle */}
      <section className="section-container bg-gray-50">
        <SectionTitle
          title="Investment Growth Principle"
          subtitle="How your investment grows with the platform"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              {siteConfig.investor.growthPrinciple}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Disclaimer */}
      <section className="section-container bg-yellow-50 border-l-4 border-yellow-500">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <svg
                className="w-8 h-8 text-yellow-600 mr-3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Important Investor Disclaimer
            </h3>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4">{siteConfig.investor.disclaimer}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Invest? */}
      <section className="section-container">
        <SectionTitle
          title="Why Invest in BedBees?"
          subtitle="Seven reasons this is a generational opportunity"
        />

        <div className="max-w-5xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              🌍 Massive Market Opportunity
            </h3>
            <p className="text-gray-700">
              The global travel market is worth $1.9 trillion annually. We&apos;re
              attacking the core inefficiency (commissions) that costs the
              industry billions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="card"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              💡 Structural Advantage
            </h3>
            <p className="text-gray-700">
              Traditional platforms (Booking, Airbnb, Expedia) cannot adopt our
              model without destroying their businesses. We have a moat they
              can&apos;t cross.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="card"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              📊 Predictable Revenue Model
            </h3>
            <p className="text-gray-700">
              Subscriptions create stable ARR (Annual Recurring Revenue),
              making our financials predictable and scalable across global
              markets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="card"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              🚀 AI + Community Moat
            </h3>
            <p className="text-gray-700">
              Our AI trip planner and social travel network create network
              effects. The more users we have, the more valuable the platform
              becomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="card"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              ✅ Ethical + Profitable
            </h3>
            <p className="text-gray-700">
              You can invest in a company doing good while building massive
              value. Transparency and profitability aren&apos;t mutually exclusive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="card"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              🎯 Experienced Team
            </h3>
            <p className="text-gray-700">
              Our founding team has experience in travel tech, marketplace
              platforms, and AI development. We know how to execute.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section-container bg-gray-50">
        <SectionTitle
          title="Development Roadmap"
          subtitle="Phased approach to global dominance"
        />
        <RoadmapTimeline />
      </section>

      {/* What You Get */}
      <section className="section-container">
        <SectionTitle
          title="What You Get as a Founding Investor"
          subtitle="Benefits beyond equity ownership"
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card bg-gradient-to-br from-primary-50 to-white"
          >
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Equity Ownership
            </h3>
            <p className="text-gray-700">
              Direct equity stake in the company with proportional returns as
              we scale globally.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="card bg-gradient-to-br from-primary-50 to-white"
          >
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Quarterly Updates
            </h3>
            <p className="text-gray-700">
              Regular financial reports, growth metrics, and strategic updates
              directly from the founding team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="card bg-gradient-to-br from-primary-50 to-white"
          >
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Investor Community
            </h3>
            <p className="text-gray-700">
              Access to a private investor network for collaboration and
              strategic insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Invest?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Secure your position as a founding investor today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Schedule a Call
            </Link>
            <Link
              href="/faq"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 shadow-lg"
            >
              Read FAQ
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
