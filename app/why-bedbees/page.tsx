"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  AlertCircle,
  DollarSign,
  Camera,
  Calendar,
  Search,
  Users,
  TrendingUp,
  Shield,
  Heart,
  Sparkles,
  Wallet,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function WhyBedbeesPage() {
  const problems = [
    {
      icon: DollarSign,
      title: "Hidden Fees & Commission Exploitation",
      pain: "Traditional platforms charge 15-25% commissions, hide taxes and resort fees until checkout, and pass costs to both travelers and providers",
      solution: "Bedbees charges zero commissions. Providers pay a simple monthly subscription and keep 100% of earnings. Travelers see transparent, honest pricing upfront."
    },
    {
      icon: Camera,
      title: "Fake Photos & Misleading Listings",
      pain: "Outdated images from 2014, heavily edited photos, and reality that doesn't match marketing create broken trust and disappointed travelers",
      solution: "Bedbees requires annual photo updates, uses AI to compare listing images with guest photos, and flags inconsistencies to ensure reality matches expectations."
    },
    {
      icon: Shield,
      title: "Fake Reviews & Manipulated Ratings",
      pain: "Unverified reviews, paid ratings, bot-generated feedback, and manipulated scores mislead travelers and destroy platform credibility",
      solution: "Only verified stays can leave reviews. AI flags suspicious patterns. Providers must maintain authentic ratings or face visibility penalties."
    },
    {
      icon: Calendar,
      title: "Overbooking & Lost Reservations",
      pain: "Slow availability syncing causes double bookings, 'we can't find your reservation' nightmares, and arrival-day chaos that ruins trips",
      solution: "Real-time availability engine locks rooms the second you book. Millisecond-fast calendar updates ensure your reservation is guaranteed — no excuses."
    },
    {
      icon: Search,
      title: "Fragmented Planning Experience",
      pain: "Travelers juggle 20+ tabs across flights, hotels, activities, restaurants, guides, and transportation with zero integration or cohesion",
      solution: "One unified platform. Book everything in one place. AI builds day-by-day itineraries with weather, routing, opening hours, and local tips — beautifully."
    },
    {
      icon: TrendingUp,
      title: "Pay-to-Rank Algorithms",
      pain: "Big providers pay for top placement. Small, authentic businesses get buried. Travelers miss hidden gems because they can't afford to compete",
      solution: "Bedbees uses fair exposure algorithms. No pay-to-rank. Quality, reviews, and relevance determine visibility — not advertising budgets."
    },
    {
      icon: Users,
      title: "No Social Connection or Community",
      pain: "Platforms isolate travelers. No way to connect with others, share itineraries, ask locals for advice, or build travel friendships",
      solution: "Full social travel network. Traveler profiles, destination communities, itinerary sharing, forums, and the ability to meet people going where you're going."
    },
    {
      icon: AlertCircle,
      title: "Dark Patterns & Pressure Tactics",
      pain: "'Only 2 rooms left!' fake urgency timers, hidden countdown clocks, and psychological manipulation designed to stress travelers into rushed decisions",
      solution: "Calm, beautiful UI. No urgency banners, no fake scarcity, no fear tactics. Travel should feel inspiring — not stressful."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-sand via-sand-light to-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-travel-blue/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2 border border-travel-blue/20 shadow-sm"
            >
              <Heart className="w-4 h-4 text-travel-blue" />
              <span className="text-sm font-semibold text-travel-blue">The Bedbees Difference</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-title tracking-tight leading-tight">
              The Travel Industry<br />
              <span className="text-travel-blue">Is Broken</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-paragraph max-w-4xl mx-auto font-light leading-relaxed">
              Hidden fees. Fake reviews. Overbooking. Commission exploitation.<br />
              <span className="font-semibold text-travel-blue">Bedbees fixes everything.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problems vs Solutions Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-title mb-6">
              What's Wrong — And How We Fix It
            </h2>
            <p className="text-xl md:text-2xl text-paragraph font-light max-w-3xl mx-auto">
              Every problem plaguing travel platforms. Every Bedbees solution.
            </p>
          </motion.div>

          <div className="space-y-12">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-gradient-to-br from-sand-light/30 to-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-card-border"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Problem Side */}
                    <div className="p-10 bg-gradient-to-br from-red-50/50 to-white border-r border-card-border">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <XCircle className="w-7 h-7 text-red-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2">The Problem</p>
                          <h3 className="text-2xl font-bold text-title leading-tight">
                            {problem.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-paragraph leading-relaxed text-lg">
                        {problem.pain}
                      </p>
                    </div>

                    {/* Solution Side */}
                    <div className="p-10 bg-gradient-to-br from-green-50/50 to-white">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-14 h-14 bg-travel-blue/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-7 h-7 text-travel-blue" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-travel-blue uppercase tracking-wide mb-2">Bedbees Solution</p>
                          <div className="w-12 h-12 bg-travel-blue/10 rounded-2xl flex items-center justify-center">
                            <Icon className="w-6 h-6 text-travel-blue" />
                          </div>
                        </div>
                      </div>
                      <p className="text-paragraph leading-relaxed text-lg font-medium">
                        {problem.solution}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-32 bg-gradient-to-br from-sand-light/40 to-white">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-title mb-6">
              This Isn't Just Better Travel
            </h2>
            <p className="text-xl md:text-2xl text-paragraph font-light max-w-4xl mx-auto leading-relaxed">
              It's a complete reimagination of how the industry should work —<br />
              <span className="font-semibold text-travel-blue">fair, transparent, and built for humans.</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "For Travelers",
                description: "No hidden fees, no fake reviews, no stress. Just honest travel planning that feels inspiring."
              },
              {
                icon: Wallet,
                title: "For Providers",
                description: "Keep 100% of earnings. No crushing commissions. Fair exposure. Sustainable business model."
              },
              {
                icon: Sparkles,
                title: "For the Industry",
                description: "Rebuild trust. Restore integrity. Create a travel ecosystem where everyone wins."
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-card-border text-center"
                >
                  <div className="w-16 h-16 bg-travel-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-travel-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-title mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-paragraph leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-travel-blue via-travel-blue-hover to-travel-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Ready to Experience<br />Travel Done Right?
            </h2>
            <p className="text-xl md:text-2xl mb-12 font-light opacity-90">
              Join the movement transforming the travel industry
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/become-investor">
                <button className="px-12 py-5 bg-white text-travel-blue rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Become an Investor
                </button>
              </Link>
              <Link href="/about">
                <button className="px-12 py-5 bg-white/10 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-travel-blue transition-all duration-300">
                  Learn More About Bedbees
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
