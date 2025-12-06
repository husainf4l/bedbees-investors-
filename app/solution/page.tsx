"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import ProblemGrid from "@/components/ProblemGrid";
import SolutionComparison from "@/components/SolutionComparison";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

export default function SolutionPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Solution
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl max-w-3xl mx-auto text-green-100"
          >
            A unified, commission-free platform that fixes everything wrong
            with traditional travel booking
          </motion.p>
        </div>
      </section>

      {/* Problems Recap */}
      <section className="section-container bg-gray-50">
        <SectionTitle
          title="The Problems We're Solving"
          subtitle="Six critical failures of the current travel industry"
        />
        <ProblemGrid />
      </section>

      {/* Solutions */}
      <section className="section-container">
        <SectionTitle
          title="How We Fix Everything"
          subtitle="Six innovations that transform the travel experience"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card bg-gradient-to-br from-primary-50 to-white"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-700">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="section-container bg-gray-50">
        <SectionTitle
          title="BedBees vs. Traditional Platforms"
          subtitle="See how we stack up against the competition"
        />
        <SolutionComparison />
      </section>

      {/* Technical Architecture */}
      <section className="section-container">
        <SectionTitle
          title="How It All Works Together"
          subtitle="A seamless ecosystem for travelers and providers"
        />

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Providers Subscribe
              </h3>
              <p className="text-gray-700">
                Hotels, guides, restaurants, and activity providers pay a
                simple monthly subscription. No commissions, no hidden fees.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Travelers Discover
              </h3>
              <p className="text-gray-700">
                Users search, browse, and book everything they need. AI helps
                plan trips. Community shares authentic experiences.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Everyone Wins
              </h3>
              <p className="text-gray-700">
                Providers keep 100% of earnings. Travelers pay fair prices.
                Platform grows sustainably. Trust is restored.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="section-container bg-gradient-to-br from-blue-50 to-white">
        <SectionTitle
          title="What Makes Us Unstoppable"
          subtitle="Seven competitive advantages nobody else has"
        />

        <div className="max-w-5xl mx-auto space-y-4">
          {siteConfig.advantages.map((advantage, index) => (
            <motion.div
              key={advantage}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="card flex items-center"
            >
              <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                {index + 1}
              </div>
              <p className="text-gray-800 font-medium">{advantage}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-r from-green-600 to-green-700 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Invest in the Solution
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Be part of the platform that finally gets travel right
          </p>
          <Link
            href="/investor"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Become a Founding Investor
          </Link>
        </motion.div>
      </section>
    </>
  );
}
