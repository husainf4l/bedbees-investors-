"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  Calendar,
  Sparkles,
  Wallet,
  Camera,
  MousePointer,
  Users,
  Headphones,
  Search,
  Compass,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Travel That's Finally Honest",
    subtitle: "Goodbye hidden fees. Goodbye tricks. Goodbye stress.",
    description:
      "Most travel websites are built around fees, upsells, and psychological pressure tactics. Bedbees is built around truth.",
    points: [
      "No commissions",
      "No hidden charges",
      "No last-minute surprises",
      "Just real prices, displayed clearly — the way travel should always have been",
    ],
    tagline: "Honesty feels different. You see it. You feel it. You trust it.",
    gradient: "from-sand-light to-white",
    iconColor: "text-travel-blue",
  },
  {
    icon: Shield,
    title: "Trust, Verified. Every Time.",
    subtitle: "Real reviews. Real people. Real experiences.",
    description:
      "Fake reviews and manipulated ratings have broken trust across the industry. Bedbees rebuilds it:",
    points: [
      "Only reviews from verified stays",
      "AI flags misleading or suspicious patterns",
      "Providers must update photos yearly",
      "Real traveler media keeps listings honest",
    ],
    tagline: "What you see is what you get. Finally.",
    gradient: "from-white to-sand-light",
    iconColor: "text-travel-blue",
  },
  {
    icon: Calendar,
    title: "Your Room Is Yours — The Second You Book.",
    subtitle: "No more overbooking. No more \"we can't find your reservation.\"",
    description:
      "Legacy travel systems sync availability slowly, causing double bookings and chaos. Bedbees uses a real-time availability engine:",
    points: [
      "Instant lock when you book",
      "Millisecond-fast calendar updates",
      "No missing reservations",
      "No excuses",
    ],
    tagline: "Certainty is a luxury. Bedbees gives it to every traveler.",
    gradient: "from-sand-light to-white",
    iconColor: "text-travel-blue",
  },
  {
    icon: Sparkles,
    title: "One Platform. One Plan. One Beautiful Journey.",
    subtitle: "Travel planning should feel magical. Bedbees makes it effortless.",
    description: "Instead of 20 tabs and endless comparison, Bedbees AI designs your whole trip:",
    points: [
      "Day-by-day itinerary",
      "Weather-aware planning",
      "Smart routing",
      "Opening hours synced",
      "Restaurants and local tips built-in",
    ],
    tagline: "From idea to itinerary — in seconds. Beautifully.",
    gradient: "from-white to-sand-light",
    iconColor: "text-travel-blue",
  },
  {
    icon: Wallet,
    title: "A Travel Economy That Finally Works for Providers",
    subtitle: "No commissions. No punishment. No exploitation.",
    description:
      "Hotels, guides, and local businesses are trapped under commission-based platforms. Bedbees breaks the cycle:",
    points: [
      "Providers keep 100% of earnings",
      "One simple subscription",
      "No pay-to-rank",
      "No algorithmic manipulation",
    ],
    tagline: "A fair system creates better prices, better service, and a healthier travel world.",
    gradient: "from-sand-light to-white",
    iconColor: "text-travel-blue",
  },
  {
    icon: Camera,
    title: "Reality, Not Marketing.",
    subtitle: "Photos that reflect the real experience. Not a photoshoot from 2014.",
    description:
      "Other platforms allow outdated, heavily edited images that mislead travelers. Bedbees enforces clarity:",
    points: [
      "Mandatory annual photo updates",
      "AI compares listing images with guest photos",
      "Warnings if reality doesn't match what's shown",
    ],
    tagline: "A travel platform that respects your expectations.",
    gradient: "from-white to-sand-light",
    iconColor: "text-travel-blue",
  },
  {
    icon: MousePointer,
    title: "Designed for Humans, Not Funnels",
    subtitle: "No dark patterns. No pressure timers. No fear tactics.",
    description:
      "You're not here to be manipulated. You're here to travel. Bedbees removes urgency banners, fake scarcity, and psychological traps.",
    points: [
      "Calm, beautiful UI",
      "Straightforward options",
      "Transparent information",
    ],
    tagline: "Travel should feel inspiring — not stressful.",
    gradient: "from-sand-light to-white",
    iconColor: "text-travel-blue",
  },
  {
    icon: Users,
    title: "A Community Connected by Adventure",
    subtitle: "Travel is about people. Bedbees brings them together.",
    description:
      "Most platforms isolate travelers. Bedbees connects them:",
    points: [
      "Traveler profiles",
      "Destination communities",
      "Itinerary sharing",
      "Local advice",
      "Meet other travelers going where you're going",
    ],
    tagline: "Travel becomes social, human, and alive again.",
    gradient: "from-white to-sand-light",
    iconColor: "text-travel-blue",
  },
  {
    icon: Headphones,
    title: "Support That Actually Supports You",
    subtitle: "When you need help, you shouldn't feel alone.",
    description:
      "Other platforms delay, deflect, and blame providers. Bedbees is different:",
    points: [
      "Instant refunds for eligible cases",
      "Real human support",
      "Clear case tracking",
      "Direct provider communication",
    ],
    tagline: "Peace of mind is part of the journey. We treat it that way.",
    gradient: "from-sand-light to-white",
    iconColor: "text-travel-blue",
  },
  {
    icon: Search,
    title: "Less Noise. More Clarity.",
    subtitle: "Find exactly what matters — nothing more, nothing less.",
    description:
      "Endless scrolling is not a feature. It's fatigue. Bedbees uses intelligent sorting:",
    points: [
      "Personalized recommendations",
      "Smart matching based on your style",
      "Context-aware suggestions",
      "Minimalist interfaces",
    ],
    tagline: "The perfect option appears effortlessly — like magic.",
    gradient: "from-white to-sand-light",
    iconColor: "text-travel-blue",
  },
  {
    icon: Compass,
    title: "Local Experiences You Can Trust",
    subtitle: "Authentic, safe, and deeply meaningful adventures.",
    description:
      "The world is full of unsafe or tourist-trap experiences. Bedbees creates safety and authenticity:",
    points: [
      "Verified guides",
      "Secure local experiences",
      "AI risk detection",
      "Community-based recommendations",
    ],
    tagline: "Real culture. Real people. Real experiences — not staged attractions.",
    gradient: "from-sand-light to-white",
    iconColor: "text-travel-blue",
  },
  {
    icon: TrendingUp,
    title: "A Smarter Future for Global Travel",
    subtitle: "Bedbees isn't just improving travel — it's redefining it.",
    description:
      "A transparent model. A healthier economy. A community-first platform. AI that simplifies the complex. A system built on trust, not exploitation.",
    points: [],
    tagline: "This is travel the way it should have always been — simple, transparent, human.",
    gradient: "from-travel-blue to-travel-blue-hover",
    iconColor: "text-white",
  },
];

export default function AppleFeatures() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-title mb-6">
            Travel. Reimagined.
          </h2>
          <p className="text-xl text-paragraph max-w-3xl mx-auto">
            Built with obsessive attention to detail. Designed to feel
            effortless. Crafted to restore trust in travel.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="space-y-32">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon & Visual Side */}
                <div
                  className={`${isEven ? "lg:order-1" : "lg:order-2"} relative`}
                >
                  <div
                    className={`bg-gradient-to-br ${feature.gradient} rounded-3xl p-12 lg:p-16 flex items-center justify-center min-h-[400px] relative overflow-hidden shadow-md`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-10 right-10 w-32 h-32 border-4 border-current rounded-full"></div>
                      <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-current rounded-full"></div>
                    </div>

                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="relative z-10"
                    >
                      <Icon
                        className={`w-32 h-32 lg:w-40 lg:h-40 ${feature.iconColor} drop-shadow-lg`}
                        strokeWidth={1.5}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`${isEven ? "lg:order-2" : "lg:order-1"} space-y-6`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <h3 className="text-4xl lg:text-5xl font-bold text-title mb-4 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-xl text-paragraph mb-6 italic">
                      {feature.subtitle}
                    </p>
                    <p className="text-lg text-paragraph leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    {/* Points */}
                    {feature.points.length > 0 && (
                      <ul className="space-y-3 mb-6">
                        {feature.points.map((point, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                            className="flex items-start text-paragraph"
                          >
                            <span className="inline-block w-2 h-2 bg-travel-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-lg">{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    )}

                    {/* Tagline */}
                    <p className="text-xl font-semibold text-travel-blue italic border-l-4 border-travel-blue pl-4">
                      {feature.tagline}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-32"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-title mb-6">
            Experience the future of travel.
          </h3>
          <p className="text-xl text-paragraph mb-10 max-w-2xl mx-auto">
            Join thousands of travelers and providers building a better travel
            ecosystem.
          </p>
          <button className="bg-travel-blue hover:bg-travel-blue-hover text-white font-semibold text-lg px-12 py-5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
