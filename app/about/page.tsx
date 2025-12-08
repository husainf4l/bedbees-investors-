"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProviderSection from "@/components/ProviderSection";
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
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#FAF9F7] to-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="inline-block px-4 py-2 bg-[#2563EB]/10 rounded-full mb-6">
                <span className="text-[#2563EB] font-semibold text-sm tracking-wide uppercase">About Bedbees</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6 leading-tight">
                Redesigning How the World Travels
              </h1>
              <p className="text-xl text-[#6B7280] leading-relaxed mb-8">
                We're building a transparent, human-centered travel platform where travelers, providers, and communities all win.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#mission"
                  className="inline-flex items-center justify-center rounded-xl bg-[#2563EB] px-8 py-4 text-base font-semibold text-white hover:bg-[#1d4ed8] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore Our Vision
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-4 text-[#2563EB] hover:text-[#1d4ed8] font-semibold transition-colors"
                >
                  See the Platform →
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
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/videos/heroro.webp" 
                  alt="Bedbees Vision" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#2563EB]/10 rounded-full mb-6">
              <span className="text-[#2563EB] font-semibold text-sm">Our Purpose</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
              Mission & Vision
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-white shadow-lg border border-gray-100 p-10 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mr-4">
                  <Target className="w-7 h-7 text-[#2563EB]" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-[#111827]">Our Mission</h3>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                To create the world's most trusted, transparent, and human-centered
                travel platform — where travelers can book anything in one place,
                providers can grow their businesses without commissions, and AI
                empowers everyone to explore the world effortlessly.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                Bedbees exists to remove barriers, reduce stress, eliminate hidden
                fees, and replace complexity with clarity.
              </p>
              <div className="border-l-4 border-[#2563EB] pl-6 bg-[#FAF9F7] rounded-r-xl p-4">
                <p className="text-[#111827] font-semibold italic mb-2">
                  "Does this make travel more honest, more human, and more joyful?"
                </p>
                <p className="text-sm text-[#6B7280]">
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
              className="rounded-3xl bg-gradient-to-br from-[#2563EB] to-[#1e40af] text-white p-10 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                  <Compass className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="leading-relaxed mb-4 text-gray-100">
                To become the global home for travel — a platform where travelers
                discover, plan, connect, and book with complete peace of mind.
              </p>
              <p className="leading-relaxed mb-6 text-gray-100">
                Where providers operate on a sustainable and ethical business model,
                communities share the world's hidden gems, and AI personalizes every
                journey.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-xl font-bold">
                  Bedbees is not just a booking system.<br />
                  It is a new travel ecosystem.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Created Bedbees */}
      <section className="py-32 bg-gradient-to-b from-[#FAF9F7] to-white">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#2563EB]/10 rounded-full mb-6">
              <span className="text-[#2563EB] font-semibold text-sm">The Problem</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6 leading-tight">
              We Saw a Travel Industry That Was Powerful — But Not Fair
            </h2>
            <div className="border-l-4 border-[#2563EB] pl-8 space-y-4 bg-white rounded-r-3xl p-8 shadow-lg">
              <p className="text-lg text-[#6B7280] leading-relaxed">
                The world of travel is fragmented, confusing, and often unfair.
              </p>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                Travelers deal with hidden fees, fake reviews, overbooking, decision
                paralysis, scattered planning tools, and poor customer support.
              </p>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                Providers deal with high commissions, low margins, lack of
                visibility, and dependence on unpredictable algorithms.
              </p>
              <p className="text-xl font-semibold text-[#2563EB] mt-6">
                This global imbalance inspired us to build a platform where everyone wins.
              </p>
            </div>
          </motion.div>

          {/* Stats/Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
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
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-2xl transition-all duration-300"
              >
                <p className="text-3xl font-bold text-[#2563EB] mb-3">
                  {stat.label}
                </p>
                <p className="text-[#6B7280]">{stat.issue}</p>
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

      {/* Provider Ecosystem - Full Version */}
      <ProviderSection variant="full" />

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
