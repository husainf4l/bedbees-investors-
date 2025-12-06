"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-sand via-sand-light to-white overflow-hidden pt-20 pb-20">
      {/* Enhanced Decorative Background */}
      <div className="absolute top-20 right-0 w-[700px] h-[700px] bg-travel-blue rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-travel-blue rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-sand rounded-full opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 z-10"
          >
            {/* Main Headline */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-title"
              >
                We&apos;re Rewriting the Future of Travel — And You Can Own a Piece of It.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-paragraph text-lg md:text-xl leading-relaxed max-w-xl"
              >
                Join us as we revolutionize an entire industry, empowering communities and shaping a smarter, more connected world of exploration.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/become-investor" className="w-full sm:w-auto">
                <button className="w-full group px-8 py-4 bg-travel-blue text-white rounded-xl font-semibold hover:bg-travel-blue-hover transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-1">
                  <span>Become an Investor</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full px-8 py-4 bg-white text-travel-blue border-2 border-travel-blue rounded-xl font-semibold hover:bg-travel-blue hover:text-white transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  <span>Learn More</span>
                </button>
              </Link>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-card-border shadow-sm">
                <div className="text-3xl font-bold text-travel-blue">$1M</div>
                <div className="text-xs text-paragraph mt-1">Target Valuation</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-card-border shadow-sm">
                <div className="text-3xl font-bold text-travel-blue">20%</div>
                <div className="text-xs text-paragraph mt-1">Equity Available</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Enhanced Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative h-[600px] hidden lg:block"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-travel-blue/10 rounded-3xl blur-2xl transform scale-105"></div>
            
            {/* Video Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-travel-blue/20 border border-white/50">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/hero.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              
              {/* Enhanced Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-travel-blue/10"></div>
              
              {/* Corner Accent */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                <div className="w-3 h-3 bg-travel-blue rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
