"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Home, 
  Car, 
  Plane, 
  MapPin, 
  Users, 
  Bus,
  UtensilsCrossed,
  Briefcase,
  Check
} from "lucide-react";
import Link from "next/link";

const providerCategories = [
  {
    icon: Building2,
    title: "Hotels & Resorts",
    description: "From boutique hotels to international chains. Manage rooms, prices, availability, and promotions with complete control.",
    highlight: "Direct access to travelers",
  },
  {
    icon: Home,
    title: "Vacation Rentals",
    description: "List furnished homes, apartments, villas, and studios. Transparent pricing, verified stays, keep 100% of revenue.",
    highlight: "Zero commission model",
  },
  {
    icon: Car,
    title: "Car Rental Companies",
    description: "Local and international agencies can list fleets, enable instant bookings, and manage insurance options.",
    highlight: "Competitive pricing control",
  },
  {
    icon: Plane,
    title: "Airport Transfers & Taxis",
    description: "Airport pickups, private drivers, hourly bookings with transparent pricing and real-time availability.",
    highlight: "Real-time booking system",
  },
  {
    icon: MapPin,
    title: "Tour Guides & Experiences",
    description: "Licensed guides offer city tours, cultural experiences, food tours with verified profiles to build trust.",
    highlight: "Verified credentials",
  },
  {
    icon: Users,
    title: "Shared Tours & Group Travel",
    description: "Create shared tours where travelers join groups, split costs, and enjoy social experiences.",
    highlight: "Unique to Bedbees",
  },
  {
    icon: Bus,
    title: "Transportation Services",
    description: "Bus tours, shuttles, boat trips, desert safaris, yacht rentals — all transportation-based services.",
    highlight: "Full fleet management",
  },
  {
    icon: UtensilsCrossed,
    title: "Culinary Experiences",
    description: "Curated dining, chef tables, food tastings, and local food adventures.",
    highlight: "Coming soon",
  },
];

interface ProviderSectionProps {
  variant?: "full" | "compact" | "hero";
}

export default function ProviderSection({ variant = "full" }: ProviderSectionProps) {
  if (variant === "hero") {
    return (
      <div className="bg-gradient-to-br from-[#FAF9F7] to-white rounded-3xl p-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-[#111827] mb-4">
          One Platform, Every Provider
        </h3>
        <p className="text-[#6B7280] mb-6">
          Hotels, apartments, car rentals, taxis, tour guides, shared tours — all travel providers can join Bedbees and grow with zero commissions.
        </p>
        <div className="flex flex-wrap gap-3">
          {["Hotels", "Rentals", "Cars", "Tours", "Transport", "Guides"].map((item) => (
            <span key={item} className="px-4 py-2 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-[#2563EB]/10 rounded-full mb-6">
              <span className="text-[#2563EB] font-semibold text-sm">Provider Network</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
              Who Can Join Bedbees?
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Bedbees unifies every segment of the $1.7 trillion global travel industry — one platform for the entire travel economy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {providerCategories.slice(0, 8).map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:border-[#2563EB]/20"
                >
                  <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#2563EB]" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-[#111827] mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-[#2563EB] font-medium">
                    {category.highlight}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Full variant
  return (
    <section className="py-32 bg-gradient-to-b from-white to-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-[#2563EB]/10 rounded-full mb-6">
            <span className="text-[#2563EB] font-semibold text-sm">Provider Ecosystem</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#111827] mb-6">
            Who Can Join Bedbees as a Provider?
          </h2>
          <p className="text-xl text-[#6B7280] max-w-4xl mx-auto leading-relaxed">
            Bedbees is built to unify the entire travel ecosystem — giving every type of travel service a home under one global platform. Any business that contributes to travel, hospitality, mobility, or local experiences can become a Bedbees Provider.
          </p>
        </motion.div>

        {/* Provider Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {providerCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:border-[#2563EB]/30"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB]/10 to-[#2563EB]/5 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-[#2563EB]" strokeWidth={2} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#111827] mb-3">
                      {category.title}
                    </h3>
                    <p className="text-[#6B7280] mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#2563EB]" strokeWidth={2} />
                      <span className="text-[#2563EB] font-semibold">
                        {category.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Unified Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#2563EB] to-[#1e40af] rounded-3xl p-12 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            The First Platform Where All Travel Providers Unite
          </h3>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Connect with travelers directly and grow your business without paying any commission — only a simple monthly subscription.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/become-investor">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-[#2563EB] rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Become a Provider
              </motion.button>
            </Link>
            <Link href="/business-model">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
