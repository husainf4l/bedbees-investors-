"use client";

import { motion } from "framer-motion";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";
import { 
  HelpCircle, 
  Mail, 
  Calendar,
  BookOpen,
  Wrench,
  Briefcase,
  ArrowRight
} from "lucide-react";

export default function FAQPage() {
  const resources = [
    {
      icon: BookOpen,
      title: 'About Bedbees',
      description: 'Learn about our mission, vision, and why we\'re rebuilding travel from the ground up.',
      href: '/about',
      color: 'blue'
    },
    {
      icon: Wrench,
      title: 'Why Invest',
      description: 'Discover how we fix every problem plaguing the traditional travel industry.',
      href: '/why-invest',
      color: 'green'
    },
    {
      icon: Briefcase,
      title: 'Business Model',
      description: 'Understand how our subscription model creates sustainable, ethical revenue.',
      href: '/business-model',
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
              <HelpCircle className="w-4 h-4 text-[#2563EB]" />
              <span className="text-sm font-medium text-[#111827]">FAQ</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#111827] mb-6 leading-tight">
              Frequently Asked<br />
              <span className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] bg-clip-text text-transparent">
                Questions
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#6B7280] max-w-4xl mx-auto leading-relaxed">
              Everything you need to know about investing in Bedbees
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
              Ask Your Questions
            </h2>
            <p className="text-xl text-[#6B7280]">
              Clear, honest answers about the investment opportunity
            </p>
          </motion.div>

          <FAQAccordion />
        </div>
      </section>

      {/* Still Have Questions? */}
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
              Still Have Questions?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-12 shadow-lg max-w-4xl mx-auto"
          >
            <p className="text-lg text-[#6B7280] mb-8 text-center leading-relaxed">
              We're here to help. Schedule a call with our team to discuss the investment opportunity in detail, 
              ask specific questions, and understand how Bedbees can fit into your investment portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2563EB] text-white rounded-full font-semibold hover:bg-[#1D4ED8] transition-all hover:scale-105 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Call
              </Link>
              <a
                href="mailto:invest@bedbees.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#2563EB] border-2 border-[#2563EB] rounded-full font-semibold hover:bg-[#2563EB] hover:text-white transition-all hover:scale-105 shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Email Us Directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Resources */}
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
              Additional Resources
            </h2>
            <p className="text-xl text-[#6B7280]">
              Learn more about our platform and vision
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#2563EB]/20 transition-colors">
                  <resource.icon className="w-8 h-8 text-[#2563EB]" />
                </div>
                <h3 className="text-2xl font-bold text-[#111827] mb-3">
                  {resource.title}
                </h3>
                <p className="text-[#6B7280] mb-6 leading-relaxed">
                  {resource.description}
                </p>
                <Link
                  href={resource.href}
                  className="inline-flex items-center gap-2 text-[#2563EB] font-semibold hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Questions Answered. Ready to Invest?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300">
              Join the founding investors shaping the future of travel
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
