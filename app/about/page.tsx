"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Heart,
  Globe,
  Users,
  Sparkles,
  Shield,
  TrendingUp,
  Target,
  Compass,
  Check,
} from "lucide-react";

export default function AboutPage() {
  const travelerPromises = [
    "No hidden fees",
    "Trusted reviews",
    "Smart planning",
    "Social discovery",
  ];

  const providerPromises = [
    "Zero commissions",
    "Stable subscription",
    "Full control",
    "Better margins",
  ];

  const values = [
    {
      icon: Shield,
      title: "Transparency First",
      description: "No hidden fees. No tricks. No manipulation.",
    },
    {
      icon: Users,
      title: "Community Wins",
      description: "Travel is about people — and our platform reflects that.",
    },
    {
      icon: Sparkles,
      title: "Technology With Purpose",
      description: "Every feature exists to solve a real problem.",
    },
    {
      icon: Heart,
      title: "Fairness for All",
      description: "Providers, travelers, and partners — all deserve equal respect.",
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Travel should be possible for everyone, everywhere.",
    },
    {
      icon: TrendingUp,
      title: "Ethical Growth",
      description: "We scale with integrity, authenticity, and long-term thinking.",
    },
  ];

  const uniqueFeatures = [
    "A fair subscription model for providers",
    "A social travel network for travelers",
    "End-to-end booking in one place",
    "Verified reviews and authentic content",
    "AI-powered planning and personalization",
    "Real transparency — no hidden fees",
    "Marketplace + Community + AI = One platform",
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="text-sm font-semibold text-travel-blue tracking-wide uppercase mb-4">
                About Bedbees
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-title mb-6 leading-tight">
                Redesigning how the world travels.
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed">
                We&apos;re building a transparent, human-centered travel platform
                where travelers, providers, and communities all win.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="#mission"
                  className="inline-flex items-center justify-center rounded-full bg-travel-blue px-8 py-3 text-base font-semibold text-white hover:bg-travel-blue-hover transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Meet the vision
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center text-travel-blue hover:text-travel-blue-hover font-semibold transition-colors"
                >
                  Explore the product →
                </Link>
              </div>
            </motion.div>

            {/* Right - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-travel-blue/10 to-travel-blue/20 rounded-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-travel-blue-light to-travel-blue rounded-full opacity-20 blur-3xl"></div>
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Globe className="w-64 h-64 text-travel-blue opacity-30" strokeWidth={0.5} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-title mb-4">
              Our Mission & Vision
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-white shadow-sm border border-gray-100 p-8"
            >
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-travel-blue mr-3" />
                <h3 className="text-2xl font-semibold text-title">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                To create the world&apos;s most trusted, transparent, and human-centered
                travel platform — where travelers can book anything in one place,
                providers can grow their businesses without commissions, and AI
                empowers everyone to explore the world effortlessly.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bedbees exists to remove barriers, reduce stress, eliminate hidden
                fees, and replace complexity with clarity.
              </p>
              <div className="border-l-4 border-[#FF8C00] pl-4 mt-6">
                <p className="text-title font-semibold italic">
                  &quot;Does this make travel more honest, more human, and more joyful?&quot;
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Every decision begins with this question.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-100 p-8"
            >
              <div className="flex items-center mb-4">
                <Compass className="w-8 h-8 text-travel-blue mr-3" />
                <h3 className="text-2xl font-semibold text-title">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                To become the global home for travel — a platform where travelers
                discover, plan, connect, and book with complete peace of mind.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Where providers operate on a sustainable and ethical business model,
                communities share the world&apos;s hidden gems, and AI personalizes every
                journey.
              </p>
              <p className="text-xl font-bold text-travel-blue mt-6">
                Bedbees is not just a booking system.<br />
                It is a new travel ecosystem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Created Bedbees */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-title mb-6 leading-tight">
              We saw a travel industry that was powerful — but not fair.
            </h2>
            <div className="border-l-4 border-[#FF8C00] pl-6 space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                The world of travel is fragmented, confusing, and often unfair.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Travelers deal with hidden fees, fake reviews, overbooking, decision
                paralysis, scattered planning tools, and poor customer support.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Providers deal with high commissions, low margins, lack of
                visibility, and dependence on unpredictable algorithms.
              </p>
              <p className="text-xl font-semibold text-travel-blue mt-6">
                This global imbalance inspired us to build a platform where everyone
                wins.
              </p>
            </div>
          </motion.div>

          {/* Stats/Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Travelers", issue: "Overwhelmed and misled" },
              { label: "Providers", issue: "Struggling to survive" },
              { label: "Lost Annually", issue: "Millions in commissions" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center"
              >
                <p className="text-2xl font-bold text-travel-blue mb-2">
                  {stat.label}
                </p>
                <p className="text-gray-600">{stat.issue}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Bedbees Is */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-title mb-4">
              What is Bedbees?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Bedbees is a commission-free travel platform that unites booking, AI
              planning, and social travel in one place.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏨",
                title: "Marketplace",
                description: "Hotels, tours, cars, guides, local experiences.",
              },
              {
                icon: "✨",
                title: "AI Planner",
                description: "Day-by-day smart itineraries, instantly.",
              },
              {
                icon: "🌍",
                title: "Community",
                description: "Real travelers, real stories, real tips.",
              },
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-[#FF8C00] transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-5xl mb-4">{pillar.icon}</div>
                <h3 className="text-2xl font-semibold text-title mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-title">
              Our Promise
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* For Travelers */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-orange-100"
            >
              <h3 className="text-2xl font-bold text-title mb-6">
                For Travelers
              </h3>
              <ul className="space-y-4">
                {travelerPromises.map((promise, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-6 h-6 text-travel-blue mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{promise}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* For Providers */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-orange-100"
            >
              <h3 className="text-2xl font-bold text-title mb-6">
                For Providers
              </h3>
              <ul className="space-y-4">
                {providerPromises.map((promise, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-6 h-6 text-travel-blue mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{promise}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology & Philosophy */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-title mb-6">
                Technology that feels invisible — and works for people.
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-title mb-2">
                    AI that simplifies, not overwhelms
                  </h3>
                  <p className="text-gray-600">
                    Our AI learns your preferences and creates personalized
                    itineraries that feel handcrafted.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-title mb-2">
                    Infrastructure built to scale globally
                  </h3>
                  <p className="text-gray-600">
                    Real-time availability, instant bookings, and seamless
                    synchronization across millions of listings.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-title mb-2">
                    Privacy, integrity, and trust at the core
                  </h3>
                  <p className="text-gray-600">
                    Your data is protected. Reviews are verified. Transparency is
                    non-negotiable.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative hidden lg:block"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 flex items-center justify-center min-h-[400px]">
                <Sparkles className="w-48 h-48 text-travel-blue opacity-30" strokeWidth={0.5} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global & Local */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-title mb-6">
              Global reach. Local heart.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Bedbees is designed for the world — but built with local values. We
              work closely with local tour providers, boutique hotels, independent
              hosts, small businesses, and communities.
            </p>
            <p className="text-lg text-gray-700 mt-6">
              Our ecosystem celebrates culture, supports local economies, and brings
              the world closer together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-title">
              Our Cultural Principles
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              These values guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:border-[#FF8C00] transition-all duration-300 hover:shadow-lg"
                >
                  <Icon className="w-10 h-10 text-travel-blue mb-4" />
                  <h3 className="text-xl font-semibold text-title mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-title mb-4">
              What Makes Bedbees Unique
            </h2>
            <p className="text-lg text-gray-600">
              This unified value model does not exist anywhere else.
            </p>
          </motion.div>

          <div className="space-y-4">
            {uniqueFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flex items-start bg-white p-5 rounded-lg shadow-sm border border-gray-100"
              >
                <Check className="w-6 h-6 text-travel-blue mr-4 flex-shrink-0 mt-0.5" />
                <p className="text-lg text-gray-700">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Heart of Bedbees */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#FF8C00] to-[#E67E00] text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              The Heart of Bedbees
            </h2>
            <p className="text-xl md:text-2xl mb-6 leading-relaxed">
              We believe the world is a better place when people travel.
            </p>
            <div className="space-y-3 text-lg md:text-xl mb-8">
              <p>Travel opens minds.</p>
              <p>Travel connects cultures.</p>
              <p>Travel builds memories that last a lifetime.</p>
            </div>
            <p className="text-xl font-semibold mb-4">
              Bedbees exists to make those journeys:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto mb-12">
              {["Easier", "Fairer", "More joyful", "More connected", "More human"].map(
                (trait, index) => (
                  <motion.div
                    key={trait}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm md:text-base font-medium"
                  >
                    {trait}
                  </motion.div>
                )
              )}
            </div>
            <div className="space-y-2 text-2xl font-bold">
              <p>This is our purpose.</p>
              <p>This is our promise.</p>
              <p>This is Bedbees.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-title mb-6">
              Join Us on the Journey
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re a traveler, a provider, or an investor — you&apos;re part of
              a global movement to build a better way to explore the world.
            </p>
            <p className="text-xl font-semibold text-travel-blue mb-8">
              Bedbees is not just a platform.<br />
              It&apos;s a new chapter in the future of travel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-travel-blue px-8 py-3 text-base font-semibold text-white hover:bg-travel-blue-hover transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start exploring with Bedbees
              </Link>
              <Link
                href="/become-investor"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#FF8C00] px-8 py-3 text-base font-semibold text-travel-blue hover:bg-orange-50 transition-all duration-300"
              >
                Learn about the investor model →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
