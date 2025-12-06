'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Zap, 
  DollarSign, 
  Shield, 
  Gauge, 
  Code2, 
  Users, 
  ArrowRight,
  CheckCircle2,
  Rocket,
  Brain
} from 'lucide-react'

export default function OurTeam() {
  const advantages = [
    {
      icon: Zap,
      title: 'Faster Development',
      description: 'Direct communication and immediate implementation without third-party delays.'
    },
    {
      icon: DollarSign,
      title: 'Zero Development Cost',
      description: 'No outsourcing fees means your investment goes directly to growth.'
    },
    {
      icon: Shield,
      title: 'Full Control',
      description: 'Complete ownership of our codebase and architecture decisions.'
    },
    {
      icon: Gauge,
      title: 'Immediate Iteration',
      description: 'We can pivot and adapt features in real-time based on user feedback.'
    },
    {
      icon: Code2,
      title: 'High-Quality Engineering',
      description: 'Built with best practices and modern tech stack by experienced developers.'
    },
    {
      icon: Users,
      title: 'No Dependencies',
      description: 'Complete independence from external contractors and agencies.'
    }
  ]

  const completed = [
    'Core backend infrastructure',
    'Global travel search engine',
    'Provider onboarding & verification',
    'Booking flow foundation',
    'User profiles & community framework',
    'Design system & brand identity',
    'Investor landing portal'
  ]

  const roadmap = [
    'AI-powered trip planner',
    'Provider subscription dashboard',
    'Advanced filtering & discovery',
    'Social travel feed',
    'Destination pages',
    'Mobile app refinement',
    'Global scalability & performance'
  ]

  const founders = [
    {
      name: 'Al-Hussein Abdullah',
      role: 'Co-Founder & Lead Developer',
      bio: 'A full-stack developer, entrepreneur, and product architect with experience building AI-driven platforms, complex applications, and global-scale systems. Focused on product strategy, engineering architecture, and Bedbees\' long-term vision.',
      image: '/videos/1000069361.webp'
    },
    {
      name: 'Shadi Kamal',
      role: 'Co-Founder & Senior Developer',
      bio: 'A highly skilled engineer specializing in backend, infrastructure, and platform scalability. Responsible for ensuring Bedbees\' core engine, provider systems, and booking architecture are built with world-class reliability.',
      image: '/videos/1000069362.webp'
    }
  ]

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5E6D3] to-[#FAF9F7]" />
        
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-8 shadow-sm">
              <Users className="w-4 h-4 text-[#2563EB]" />
              <span className="text-sm font-medium text-[#111827]">Our Team</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#111827] mb-6 leading-tight">
              Meet the Team Building the<br />
              <span className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] bg-clip-text text-transparent">
                Future of Global Travel
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#6B7280] max-w-4xl mx-auto leading-relaxed">
              We are developers, creators, and dreamers building Bedbees from the ground up — 
              with passion, precision, and a shared vision to reinvent the entire travel industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Our Team Is Different */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-12 shadow-lg"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
                Why Our Team Is Different
              </h2>
              <p className="text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
                <span className="font-semibold text-[#111827]">Bedbees isn't built by an outsourced agency.</span>
                <br />
                It's built by us — the founders — entirely in-house.
                <br /><br />
                We are both experienced software developers, crafting every component, feature, and service ourselves.
                <br />
                This gives Bedbees enormous advantages:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-start"
                >
                  <div className="w-14 h-14 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mb-4">
                    <advantage.icon className="w-7 h-7 text-[#2563EB]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#111827] mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    {advantage.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 60% Complete Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#2563EB]/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-12 shadow-lg border border-[#2563EB]/10"
          >
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-[#2563EB] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
                  60% of Bedbees Is Already Built
                </h2>
                <p className="text-xl text-[#6B7280] leading-relaxed mb-8">
                  We're proud to share that the Bedbees platform — both the mobile app and website — 
                  is already over 60% complete.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF9F7] rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[#111827] mb-6">We've built:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {completed.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#2563EB] flex-shrink-0" />
                    <span className="text-[#111827] font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-[#6B7280] mt-6 italic">
                Every part coded internally by the founding team.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Development At Zero Cost */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#111827] to-[#1F2937] rounded-3xl p-12 shadow-xl text-white"
          >
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Built In-House. Zero Development Cost.
                </h2>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              As both founders are developers, Bedbees is engineered internally.
              <br />
              This means:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Your investment goes 100% toward growth, not software development',
                'Lower risk and higher efficiency',
                'Fast updates and continuous improvements',
                'Streamlined operations and extended runway'
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white/5 rounded-xl p-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-1" />
                  <span className="text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 pt-10 border-t border-white/10">
              <p className="text-xl font-semibold text-white">
                This makes Bedbees one of the most cost-efficient early-stage startups in the travel-tech space.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Founders */}
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
              Meet the Founders
            </h2>
            <p className="text-xl text-[#6B7280]">
              The developers building Bedbees from the ground up
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden shadow-lg">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#111827] mb-2 text-center">
                  {founder.name}
                </h3>
                <p className="text-[#2563EB] font-semibold mb-4 text-center">
                  {founder.role}
                </p>
                <p className="text-[#6B7280] leading-relaxed">
                  {founder.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We're Building Next */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-12 shadow-lg"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-12 text-center">
              What We're Building Next
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {roadmap.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-[#FAF9F7] rounded-xl p-6 hover:bg-[#F5E6D3] transition-colors"
                >
                  <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-medium text-[#111827]">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-xl text-[#6B7280] mb-8">
                Want to join us on this journey?
              </p>
              <Link
                href="/become-investor"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2563EB] text-white rounded-full font-semibold hover:bg-[#1D4ED8] transition-all hover:scale-105 shadow-lg"
              >
                Visit the Investors page
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
