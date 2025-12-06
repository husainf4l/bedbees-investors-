"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  TrendingUp,
  Users,
  DollarSign,
  PieChart,
  Trophy,
  Calendar,
  Wallet,
  Globe,
  Shield,
  Target,
  FileText,
  Rocket,
} from "lucide-react";

export default function BecomeInvestorPage() {
  const ownershipTable = [
    { investment: "$1,000", ownership: "0.04%" },
    { investment: "$2,000", ownership: "0.08%" },
    { investment: "$5,000", ownership: "0.20%" },
    { investment: "$10,000", ownership: "0.40%" },
  ];

  const benefits = [
    "Equity ownership in a global-scale travel platform",
    "Priority access to investor reports and briefings",
    "Founding Investor status inside the platform",
    "Exclusive lifetime recognition as early supporters",
    "Early access to new features and pilot programs",
    "Direct communication channels with the founders",
  ];

  const advantages = [
    {
      icon: DollarSign,
      title: "A New Economic Model for Providers",
      description:
        "A subscription model that frees providers from high commissions — a global pain point — immediately increases platform adoption potential.",
    },
    {
      icon: Users,
      title: "A Travel Experience Designed for Humans",
      description:
        "Absolutely transparent pricing, verified content, and AI that simplifies everything.",
    },
    {
      icon: Globe,
      title: "A Social Travel Network",
      description:
        "Travelers can connect, share, inspire, and collaborate. Community becomes a global catalyst for organic expansion.",
    },
    {
      icon: Rocket,
      title: "Scalable Technology",
      description:
        "Bedbees can expand to new countries without physical offices or complicated integrations.",
    },
    {
      icon: Shield,
      title: "A Trust-First Ecosystem",
      description:
        "Verified reviews, authentic photos, fair exposure, and no manipulation build long-term brand loyalty worldwide.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section - Apple Style */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-sand via-sand-light to-white"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-travel-blue/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2 border border-travel-blue/20 shadow-sm"
            >
              <span className="w-2 h-2 bg-travel-blue rounded-full"></span>
              <span className="text-sm font-semibold text-travel-blue">Investment Opportunity</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold text-title tracking-tight">
              Own the Future<br />of Travel
            </h1>
            
            <p className="text-2xl md:text-3xl text-paragraph max-w-3xl mx-auto font-light">
              Join 500 visionaries building a global platform that changes everything.
            </p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <button className="px-8 py-4 bg-travel-blue text-white rounded-full font-semibold hover:bg-travel-blue-hover transition-all duration-300 shadow-lg hover:shadow-xl">
                Invest Now
              </button>
              <button className="px-8 py-4 bg-white text-travel-blue border-2 border-travel-blue rounded-full font-semibold hover:bg-travel-blue hover:text-white transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Cards - Apple Style */}
      <section className="py-20 bg-sand-light/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-card-border"
            >
              <div className="w-16 h-16 bg-travel-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <PieChart className="w-8 h-8 text-travel-blue" />
              </div>
              <h3 className="text-5xl font-bold text-title mb-2">20%</h3>
              <p className="text-paragraph font-medium">Equity Available</p>
              <p className="text-sm text-light-gray mt-2">For founding investors</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-card-border"
            >
              <div className="w-16 h-16 bg-travel-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-travel-blue" />
              </div>
              <h3 className="text-5xl font-bold text-title mb-2">500</h3>
              <p className="text-paragraph font-medium">Max Investors</p>
              <p className="text-sm text-light-gray mt-2">Limited opportunity</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-card-border"
            >
              <div className="w-16 h-16 bg-travel-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Wallet className="w-8 h-8 text-travel-blue" />
              </div>
              <h3 className="text-5xl font-bold text-title mb-2">$1,000</h3>
              <p className="text-paragraph font-medium">Minimum Investment</p>
              <p className="text-sm text-light-gray mt-2">Start your journey</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-title mb-6">
              Why Invest in Bedbees?
            </h2>
            <p className="text-xl text-paragraph leading-relaxed">
              Bedbees represents a new era in global travel — transparent,
              community-driven, AI-powered, and subscription-based.
            </p>
            <p className="text-xl text-paragraph leading-relaxed">
              Accelerate growth and become a meaningful stakeholder in
              the future of travel through our clear, fair, and
              investor-friendly ownership model.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ownership Table - Apple Style */}
      <section className="py-24 bg-sand-light/30">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 bg-travel-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-travel-blue" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-title mb-4">
              Investment Tiers
            </h2>
            <p className="text-lg text-paragraph max-w-2xl mx-auto">
              Choose your investment level and secure your equity stake
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-card-border"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-travel-blue text-white">
                    <th className="py-6 px-8 text-left text-lg font-semibold">
                      Investment Amount
                    </th>
                    <th className="py-6 px-8 text-left text-lg font-semibold">
                      Equity Ownership
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-card-border">
                  {ownershipTable.map((row, index) => (
                    <motion.tr
                      key={row.investment}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="hover:bg-sand-light/30 transition-colors"
                    >
                      <td className="py-5 px-8 text-title font-semibold text-lg">
                        {row.investment}
                      </td>
                      <td className="py-5 px-8 text-travel-blue font-bold text-xl">
                        {row.ownership}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ownership Structure - Apple Style */}
      <section className="py-32 bg-sand-light/20">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-travel-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-travel-blue" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-title mb-6">
              Clear, Linear Ownership
            </h2>
            <p className="text-2xl text-paragraph font-light max-w-3xl mx-auto">
              Equity distributed proportionally. Every investor knows exactly what they own.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="overflow-hidden rounded-3xl shadow-xl bg-white/50 backdrop-blur-sm border border-card-border"
          >
            <table className="w-full">
              <thead className="bg-gradient-to-r from-travel-blue to-travel-blue-hover text-white">
                <tr>
                  <th className="py-6 px-8 text-left text-xl font-semibold">
                    Investment
                  </th>
                  <th className="py-6 px-8 text-left text-xl font-semibold">
                    Ownership Share
                  </th>
                </tr>
              </thead>
              <tbody>
                {ownershipTable.map((row, index) => (
                  <motion.tr
                    key={row.investment}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className={`${
                      index % 2 === 0 ? "bg-white/80" : "bg-sand-light/30"
                    } hover:bg-sand-light/50 transition-colors duration-200`}
                  >
                    <td className="py-5 px-8 text-title font-semibold text-lg">
                      {row.investment}
                    </td>
                    <td className="py-5 px-8 text-travel-blue font-bold text-xl">
                      {row.ownership}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center text-paragraph/70 mt-12 text-lg font-light max-w-2xl mx-auto"
          >
            Simple and transparent — no hidden rules, no complicated mechanics.
          </motion.p>
        </div>
      </section>

      {/* Long-Term Value - Apple Style */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-travel-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-travel-blue" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-title mb-6">
              Ownership = Long-Term Value
            </h2>
            <p className="text-2xl text-paragraph font-light max-w-3xl mx-auto mb-12">
              Your equity represents your permanent share in Bedbees.
            </p>

            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                "As the company grows, your stake becomes more valuable",
                "As subscription revenue increases, your portion of the company increases in real economic value",
                "As Bedbees expands globally, your equity benefits from the long-term upside",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-start bg-sand-light/20 p-6 rounded-2xl"
                >
                  <div className="w-2.5 h-2.5 bg-travel-blue rounded-full mt-2 mr-5 flex-shrink-0"></div>
                  <p className="text-lg text-paragraph leading-relaxed text-left">{point}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-paragraph/70 mt-12 text-lg font-light"
            >
              There are no guaranteed returns, but your equity reflects the real performance and real valuation of the company.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Year One Strategy - Apple Style */}
      <section className="py-32 bg-sand-light/30">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white to-sand-light/50 border-l-8 border-travel-blue rounded-3xl p-10 md:p-12 shadow-lg"
          >
            <div className="w-14 h-14 bg-travel-blue/10 rounded-2xl flex items-center justify-center mb-6">
              <Calendar className="w-7 h-7 text-travel-blue" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-title mb-6">
              Year One Is a Growth & Expansion Year
            </h3>
            <p className="text-xl text-paragraph mb-6 leading-relaxed">
              It is important for investors to understand:
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-travel-blue mb-8">
              Year 1 is not intended to be a profit-distribution year.
            </p>

            <p className="text-xl text-paragraph mb-6">Instead, the focus is on:</p>
            <ul className="space-y-3 mb-8">
              {[
                "Completing the core platform",
                "Onboarding tens of thousands of providers",
                "Establishing global distribution",
                "Building the AI engine",
                "Growing community and marketplace supply",
                "Scaling the team and infrastructure",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="flex items-start text-paragraph"
                >
                  <div className="w-2 h-2 bg-travel-blue rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-title text-xl font-semibold"
            >
              This is a strategic, long-term, sustainable growth plan.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Bedbees Will Succeed - Apple Style */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-title mb-6">
              Built for Global Success
            </h2>
            <p className="text-2xl text-paragraph font-light max-w-3xl mx-auto">
              Five powerful advantages that position Bedbees for dominance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-sand-light/30 backdrop-blur-sm rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-card-border group"
                >
                  <div className="w-14 h-14 bg-travel-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-travel-blue/20 transition-colors">
                    <Icon className="w-7 h-7 text-travel-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-title mb-4 leading-tight">
                    {advantage.title}
                  </h3>
                  <p className="text-paragraph leading-relaxed">{advantage.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founding Investor Benefits - Apple Style */}
      <section className="py-32 bg-sand-light/30">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-travel-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-8 h-8 text-travel-blue" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-title mb-6">
              Founding Investor Benefits
            </h2>
            <p className="text-2xl text-paragraph font-light">
              More than investment — membership in a movement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="flex items-start bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-2 h-2 bg-travel-blue rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-lg text-paragraph leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Agreement Summary - Apple Style */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-travel-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-travel-blue" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-title mb-6">
              Investor Agreement
            </h2>
            <p className="text-2xl text-paragraph font-light">
              Simple. Transparent. Investor-friendly.
            </p>
          </motion.div>

          <div className="space-y-3 max-w-4xl mx-auto">
            {[
              "You own a percentage of the company proportional to your investment",
              "Your ownership does not expire",
              "You receive distributions only when the company becomes profitable",
              "Your returns depend entirely on real company performance",
              "All financial numbers shown externally are examples, not promises",
              "Bedbees will provide transparent investor reports and audits",
              "No investor is personally liable for company operations",
              "Equity is transferable (subject to governing documents)",
              "All terms comply with applicable corporate law",
            ].map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.5 }}
                className="flex items-start bg-sand-light/20 p-6 rounded-2xl hover:bg-sand-light/40 transition-colors duration-300"
              >
                <div className="w-6 h-6 bg-travel-blue/20 rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0">
                  <span className="text-travel-blue font-bold text-sm">✓</span>
                </div>
                <p className="text-lg text-paragraph leading-relaxed">{term}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center text-paragraph/70 mt-12 text-lg font-light max-w-2xl mx-auto"
          >
            This agreement protects both the company and the investor.
          </motion.p>
        </div>
      </section>

      {/* The Vision - Apple Style */}
      <section className="py-32 bg-gradient-to-br from-travel-blue via-travel-blue-hover to-travel-blue text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Build the Most Trusted<br />Travel Platform on Earth
            </h2>
            <p className="text-2xl mb-16 font-light opacity-90">
              With your support, Bedbees becomes:
            </p>

            <div className="space-y-5 text-left max-w-3xl mx-auto mb-16">
              {[
                "The world's most transparent travel platform",
                "The first fully social travel ecosystem",
                "The largest commission-free provider marketplace",
                "The smartest AI-powered trip planner",
                "A global travel community built on trust, fairness, and connection",
              ].map((vision, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-start bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
                >
                  <div className="w-2.5 h-2.5 bg-white rounded-full mt-2.5 mr-5 flex-shrink-0"></div>
                  <p className="text-xl leading-relaxed">{vision}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-3xl md:text-4xl font-semibold mb-16 leading-snug"
            >
              Early investors will be part of reshaping<br />the travel industry — permanently.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col items-center gap-6"
            >
              <Link href="/contact">
                <button className="bg-white text-travel-blue font-bold text-xl px-14 py-6 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transform transition-all duration-300">
                  Become a Founding Investor
                </button>
              </Link>
              <p className="text-white/80 text-lg font-light">
                Help build the future of global travel.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
