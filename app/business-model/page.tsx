"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

export default function BusinessModelPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Business Model
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl max-w-3xl mx-auto text-purple-100"
          >
            Simple, transparent, and ethical revenue generation
          </motion.p>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="section-container">
        <SectionTitle
          title="How We Make Money"
          subtitle="A sustainable model that aligns with our values"
        />

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card bg-gradient-to-br from-purple-50 to-white mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Primary Revenue: Provider Subscriptions
            </h3>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              {siteConfig.businessModel.providers}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card bg-gradient-to-br from-blue-50 to-white"
            >
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                For Travelers
              </h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">
                {siteConfig.businessModel.travelers}
              </p>
              <p className="text-gray-700">
                No subscriptions, no hidden fees, no commissions passed on to
                you. We believe travel should be accessible to everyone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card bg-gradient-to-br from-green-50 to-white"
            >
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                For Providers
              </h3>
              <p className="text-3xl font-bold text-green-600 mb-2">
                Monthly Subscription
              </p>
              <p className="text-gray-700">
                Predictable costs, no surprises. Keep 100% of your booking
                revenue. Scale globally without crushing commission fees.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* No Commissions Ever */}
      <section className="section-container bg-gradient-to-br from-green-50 to-white">
        <SectionTitle title="No Commissions. Ever." />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card text-center">
            <p className="text-2xl font-bold text-gray-900 mb-4">
              {siteConfig.businessModel.noCommissions}
            </p>
            <p className="text-lg text-gray-700">
              Unlike Booking, Airbnb, and Expedia who take 15-25% of every
              transaction, we charge a flat monthly subscription. This means
              providers can set fair prices, and travelers get transparent
              costs.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Optional Upsells */}
      <section className="section-container">
        <SectionTitle
          title="Optional Revenue Streams"
          subtitle="Additional value-add services for providers who want more visibility"
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.businessModel.upsells.map((upsell, index) => (
            <motion.div
              key={upsell}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                +
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{upsell}</h3>
              <p className="text-gray-600 text-sm">
                Optional add-on for increased exposure
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 italic">
            All upsells are optional and never required. Basic subscription
            gives full platform access.
          </p>
        </motion.div>
      </section>

      {/* Why This Model Works */}
      <section className="section-container bg-gray-50">
        <SectionTitle
          title="Why This Model Works"
          subtitle="Aligned incentives create sustainable growth"
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
              📊 Predictable Revenue (ARR)
            </h3>
            <p className="text-gray-700">
              Subscriptions create stable Annual Recurring Revenue. We can
              forecast growth, invest in product, and scale sustainably without
              volatile transaction-based income.
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
              🌍 Global Scalability
            </h3>
            <p className="text-gray-700">
              As we onboard more providers globally, ARR grows linearly. Each
              new market adds predictable revenue without complex commission
              structures.
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
              🤝 Aligned Incentives
            </h3>
            <p className="text-gray-700">
              We succeed when providers succeed. Our goal is to help them get
              more bookings, not to extract maximum commission. This builds
              loyalty and long-term partnerships.
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
              ✅ Competitive Moat
            </h3>
            <p className="text-gray-700">
              Traditional platforms can't switch to subscriptions without
              destroying their business model. We have a structural advantage
              they can't replicate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Financial Performance Summary */}
      <section className="section-container bg-gradient-to-br from-primary-50 to-white">
        <SectionTitle
          title="Financial Performance Framework"
          subtitle="How the subscription model scales"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our subscription model scales globally and builds predictable ARR.
              As the provider base grows, investor share value grows
              proportionally. No fixed numbers are promised — performance
              depends on real usage and expansion.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-inner">
              <h4 className="font-semibold text-gray-900 mb-4">
                Growth Drivers
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="font-bold text-blue-900">Provider Growth</p>
                  <p className="text-blue-700">Subscription volume increases</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="font-bold text-green-900">User Adoption</p>
                  <p className="text-green-700">Platform network effects</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <p className="font-bold text-purple-900">Market Expansion</p>
                  <p className="text-purple-700">Geographic scaling</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-r from-purple-600 to-purple-700 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Invest in a Sustainable Model
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100">
            Be part of a business built to last, not extract
          </p>
          <Link
            href="/investor"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View Investment Details
          </Link>
        </motion.div>
      </section>
    </>
  );
}
