"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl max-w-3xl mx-auto text-indigo-100"
          >
            Everything you need to know about investing in BedBees
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container">
        <SectionTitle
          title="Ask Your Questions"
          subtitle="Clear, honest answers about the investment opportunity"
        />
        <FAQAccordion />
      </section>

      {/* Still Have Questions? */}
      <section className="section-container bg-gray-50">
        <SectionTitle title="Still Have Questions?" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="card">
            <p className="text-lg text-gray-700 mb-6">
              We&apos;re here to help. Schedule a call with our team to discuss the
              investment opportunity in detail, ask specific questions, and
              understand how BedBees can fit into your investment portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Schedule a Call
              </Link>
              <a
                href="mailto:invest@bedbees.com"
                className="btn-secondary"
              >
                Email Us Directly
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Additional Resources */}
      <section className="section-container">
        <SectionTitle
          title="Additional Resources"
          subtitle="Learn more about our platform and vision"
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card text-center hover:shadow-2xl transition-shadow"
          >
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              About BedBees
            </h3>
            <p className="text-gray-700 mb-4">
              Learn about our mission, vision, and why we&apos;re rebuilding travel
              from the ground up.
            </p>
            <Link
              href="/about"
              className="text-primary-600 font-semibold hover:text-primary-700"
            >
              Read More →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="card text-center hover:shadow-2xl transition-shadow"
          >
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Our Solution
            </h3>
            <p className="text-gray-700 mb-4">
              Discover how we fix every problem plaguing the traditional travel
              industry.
            </p>
            <Link
              href="/solution"
              className="text-primary-600 font-semibold hover:text-primary-700"
            >
              Explore Solution →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="card text-center hover:shadow-2xl transition-shadow"
          >
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Business Model
            </h3>
            <p className="text-gray-700 mb-4">
              Understand how our subscription model creates sustainable,
              ethical revenue.
            </p>
            <Link
              href="/business-model"
              className="text-primary-600 font-semibold hover:text-primary-700"
            >
              Learn More →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Questions Answered. Ready to Invest?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-indigo-100">
            Join the 500 founding investors shaping the future of travel
          </p>
          <Link
            href="/investor"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View Investment Details
          </Link>
        </motion.div>
      </section>
    </>
  );
}
