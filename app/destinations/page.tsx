"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <MapPin className="w-16 h-16 text-travel-blue mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-title mb-6">
            Destinations
          </h1>
          <p className="text-xl text-paragraph max-w-2xl mx-auto">
            Coming soon — explore amazing destinations around the world.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
