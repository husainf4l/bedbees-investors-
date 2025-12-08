"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProviderSection from "@/components/ProviderSection";
import { 
  DollarSign, 
  TrendingUp, 
  Building2, 
  CheckCircle2, 
  Sparkles,
  Globe,
  Target,
  ArrowRight,
  Shield,
  Plane,
  Hotel
} from "lucide-react";

export default function BusinessModelPage() {
  const upsells = [
    'Featured Listings',
    'Sponsored Placements',
    'Premium Analytics'
  ];

  const advantages = [
    {
      icon: TrendingUp,
      title: 'Predictable Revenue (ARR)',
      description: 'Subscriptions create stable Annual Recurring Revenue. We can forecast growth, invest in product, and scale sustainably without volatile transaction-based income.'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'As we onboard more providers globally, ARR grows linearly. Each new market adds predictable revenue without complex commission structures.'
    },
    {
      icon: Target,
      title: 'Aligned Incentives',
      description: 'We succeed when providers succeed. Our goal is to help them get more bookings, not to extract maximum commission. This builds loyalty and long-term partnerships.'
    },
    {
      icon: Shield,
      title: 'Competitive Moat',
      description: 'Traditional platforms can\'t switch to subscriptions without destroying their business model. We have a structural advantage they can\'t replicate.'
    }
  ];

  const growthDrivers = [
    {
      title: 'Provider Growth',
      description: 'Subscription volume increases',
      color: 'blue'
    },
    {
      title: 'User Adoption',
      description: 'Platform network effects',
      color: 'green'
    },
    {
      title: 'Market Expansion',
      description: 'Geographic scaling',
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5E6D3] to-[#FAF9F7]" />
        
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-8 shadow-sm">
              <DollarSign className="w-4 h-4 text-[#2563EB]" />
              <span className="text-sm font-medium text-[#111827]">Business Model</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#111827] mb-6 leading-tight">
              Simple, Transparent,<br />
              <span className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] bg-clip-text text-transparent">
                Sustainable Revenue
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#6B7280] max-w-4xl mx-auto leading-relaxed">
              A business model built to last — not extract
            </p>
          </motion.div>
        </div>
      </section>

      {/* Primary Revenue Model */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
              How We Make Money
            </h2>
            <p className="text-xl text-[#6B7280]">
              A sustainable model that aligns with our values
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-3xl p-12 shadow-xl mb-12 text-white"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Primary Revenue: Provider Subscriptions
                </h3>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Hotels, guesthouses, and travel providers pay a flat monthly subscription to list on Bedbees. 
                  No commissions. No transaction fees. Just predictable, transparent pricing that puts them in control.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mb-6">
                <Plane className="w-8 h-8 text-[#2563EB]" />
              </div>
              <h3 className="text-2xl font-bold text-[#111827] mb-4">
                For Travelers
              </h3>
              <p className="text-4xl font-bold text-[#2563EB] mb-4">
                100% Free
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                No subscriptions, no hidden fees, no commissions passed on to you. 
                We believe travel should be accessible to everyone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Hotel className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#111827] mb-4">
                For Providers
              </h3>
              <p className="text-4xl font-bold text-green-600 mb-4">
                Monthly Subscription
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                Predictable costs, no surprises. Keep 100% of your booking revenue. 
                Scale globally without crushing commission fees.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* No Commissions Ever */}
      <section className="py-32 px-6 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-8 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-[#111827]">Our Promise</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-8">
              No Commissions. Ever.
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-12 shadow-lg max-w-4xl mx-auto"
            >
              <p className="text-2xl font-bold text-[#111827] mb-6">
                We never take a percentage of bookings
              </p>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                Unlike Booking.com, Airbnb, and Expedia who take 15-25% of every transaction, 
                we charge a flat monthly subscription. This means providers can set fair prices, 
                and travelers get transparent costs without hidden markups.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Optional Upsells */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
              Optional Revenue Streams
            </h2>
            <p className="text-xl text-[#6B7280]">
              Additional value-add services for providers who want more visibility
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {upsells.map((upsell, index) => (
              <motion.div
                key={upsell}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-[#2563EB]" />
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">{upsell}</h3>
                <p className="text-[#6B7280]">
                  Optional add-on for increased exposure
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-[#6B7280] italic text-lg">
              All upsells are optional and never required. Basic subscription gives full platform access.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why This Model Works */}
      <section className="py-32 px-6 bg-[#FAF9F7]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
              Why This Model Works
            </h2>
            <p className="text-xl text-[#6B7280]">
              Aligned incentives create sustainable growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <advantage.icon className="w-7 h-7 text-[#2563EB]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111827] mt-2">
                    {advantage.title}
                  </h3>
                </div>
                <p className="text-[#6B7280] leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Performance Framework */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#2563EB]/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
              Financial Performance Framework
            </h2>
            <p className="text-xl text-[#6B7280]">
              How the subscription model scales
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-12 shadow-lg"
          >
            <p className="text-lg text-[#6B7280] leading-relaxed mb-10 text-center max-w-4xl mx-auto">
              Our subscription model scales globally and builds predictable ARR. 
              As the provider base grows, investor share value grows proportionally. 
              No fixed numbers are promised — performance depends on real usage and expansion.
            </p>

            <div className="bg-[#FAF9F7] rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-[#111827] mb-8 text-center">
                Growth Drivers
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                {growthDrivers.map((driver, index) => (
                  <motion.div
                    key={driver.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-blue-50 border border-blue-100"
                  >
                    <p className="font-bold text-[#111827] text-lg mb-2">{driver.title}</p>
                    <p className="text-[#6B7280]">{driver.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Provider Ecosystem */}
      <ProviderSection variant="compact" />

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#111827] to-[#1F2937] rounded-3xl p-16 shadow-xl text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Invest in a Sustainable Model
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300">
              Be part of a business built to last, not extract
            </p>
            <Link
              href="/become-investor"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#2563EB] text-white rounded-full font-semibold hover:bg-[#1D4ED8] transition-all hover:scale-105 shadow-lg"
            >
              View Investment Details
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
