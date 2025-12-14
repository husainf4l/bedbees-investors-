"use client";

import Image from "next/image";
import { ArrowRight, Play, Sparkles, TrendingUp, Globe, Users } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-20 pb-20">
      {/* Subtle Decorative Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full opacity-40 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span>Exclusive Investment Opportunity</span>
              <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-gray-900">
                We&apos;re Rewriting the Future of Travel — And You Can Own a Piece of It.
              </h1>

              <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl">
                Join us as we revolutionize an entire industry, empowering communities and shaping a smarter, more connected world of exploration.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/become-investor" className="w-full sm:w-auto">
                <button className="w-full group relative px-8 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 hover:scale-105">
                  <span className="relative z-10">Become an Investor</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full px-8 py-5 bg-white text-blue-600 border-2 border-blue-600 rounded-2xl font-bold text-lg shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
                  <span>Learn More</span>
                  <Play className="w-5 h-5" />
                </button>
              </Link>
            </div>

            {/* Enhanced Stats with Icons */}
            <div className="grid grid-cols-3 gap-2 pt-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-blue-100 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 group">
                <TrendingUp className="w-3.5 h-3.5 text-blue-600 mb-1 group-hover:scale-110 transition-transform" />
                <div className="text-lg font-bold text-blue-700">$1M</div>
                <div className="text-[9px] text-gray-500 mt-0.5 font-medium leading-tight">Target Valuation</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-blue-100 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 group">
                <Users className="w-3.5 h-3.5 text-blue-600 mb-1 group-hover:scale-110 transition-transform" />
                <div className="text-lg font-bold text-blue-700">10%</div>
                <div className="text-[9px] text-gray-500 mt-0.5 font-medium leading-tight">Equity Available</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-blue-100 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 group">
                <Globe className="w-3.5 h-3.5 text-blue-600 mb-1 group-hover:scale-110 transition-transform" />
                <div className="text-lg font-bold text-blue-700">∞</div>
                <div className="text-[9px] text-gray-500 mt-0.5 font-medium leading-tight">Global Impact</div>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Image */}
          <div className="relative h-[400px] hidden lg:block">
            {/* Enhanced Glow Layers */}
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl opacity-20 blur-3xl"></div>
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-300 to-blue-500 rounded-3xl opacity-15 blur-2xl"></div>
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-500 group">
              <img
                src="/videos/heroimage.webp"
                alt="Bedbees Platform"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-blue-900/10 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
