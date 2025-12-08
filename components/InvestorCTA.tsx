"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Calendar, Mail } from "lucide-react";
import Link from "next/link";

export default function InvestorCTA() {
  return (
    <section className="py-32 bg-gradient-to-br from-[#111827] via-[#1e293b] to-[#111827] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2563EB] rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2563EB] rounded-full opacity-20 blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Ready to Build the Future <br className="hidden md:block" />
            of Travel?
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join us in creating a platform that transforms how billions of people explore the world
          </p>

          {/* Investment Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-bold text-[#2563EB] mb-2">$1,000</div>
              <div className="text-sm text-gray-300">Minimum Investment</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-bold text-[#2563EB] mb-2">10%</div>
              <div className="text-sm text-gray-300">Total Equity Available</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-bold text-[#2563EB] mb-2">$10M</div>
              <div className="text-sm text-gray-300">Post-Money Valuation</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/become-investor" className="group">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-xl font-bold text-lg shadow-2xl shadow-[#2563EB]/50 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>Invest Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/20 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule a Call</span>
              </motion.button>
            </Link>
          </div>

          {/* Additional Resources */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/investor">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#2563EB]/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Download className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h4 className="font-bold mb-2">Investment Details</h4>
                <p className="text-sm text-gray-400">Complete financials and projections</p>
              </motion.div>
            </Link>

            <Link href="/faq">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#2563EB]/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">Investor FAQ</h4>
                <p className="text-sm text-gray-400">Answers to common questions</p>
              </motion.div>
            </Link>

            <a href="mailto:invest@bedbees.com">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#2563EB]/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Mail className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h4 className="font-bold mb-2">Email Us</h4>
                <p className="text-sm text-gray-400">invest@bedbees.com</p>
              </motion.div>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <p className="text-sm text-gray-400 mb-4">Trusted Investment Platform</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-300">Transparent Equity Structure</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-300">Legal Documentation Provided</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-300">Investor Protection Rights</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
