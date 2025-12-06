"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AlertTriangle, Mail, Globe } from "lucide-react";

export default function LegalDisclaimerPage() {
  const sections = [
    {
      title: "1. No Guaranteed Returns",
      text: "Any financial projections or examples shown on the website are:",
      items: ["Hypothetical", "For illustration only", "Not promises or guarantees"],
      note: "Actual results may differ significantly due to market conditions, company performance, and external factors."
    },
    {
      title: "2. Not a Public Offering",
      text: "This website does not constitute:",
      items: ["A solicitation for investment", "A public securities offering", "A guarantee of investment acceptance"],
      note: "All investments must be completed through a regulated crowdfunding platform that complies with local securities laws (e.g., Republic)."
    },
    {
      title: "3. Forward-Looking Statements",
      text: "Our plans, goals, and statements regarding future performance are forward-looking and based on current expectations. These statements involve risks, uncertainties, and assumptions."
    },
    {
      title: "4. No Liability",
      text: "Bedbees is not liable for:",
      items: ["Losses related to investments", "Decisions made based on information on the website", "Errors or omissions in content", "Third-party disputes, platform issues, or downtime"]
    },
    {
      title: "5. Seek Professional Advice",
      text: "Investors are encouraged to consult:",
      items: ["A financial advisor", "A tax professional", "A legal advisor"],
      note: "Before investing any amount in early-stage equity opportunities."
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
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-[#111827]">Legal Disclaimer</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#111827] mb-6 leading-tight">
              Legal Disclaimer
            </h1>

            <p className="text-xl md:text-2xl text-[#6B7280] max-w-4xl mx-auto leading-relaxed">
              Important information about risks and limitations
            </p>

            <p className="text-lg text-[#6B7280] mt-4">
              Last updated: December 6, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-12 shadow-lg mb-8"
          >
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-[#111827] mb-4">Important Notice</h3>
                <p className="text-lg text-[#6B7280] leading-relaxed mb-4">
                  The information on this website is for general informational purposes only and does not constitute:
                </p>
                <ul className="space-y-3">
                  {["Legal advice", "Financial advice", "Investment advice", "Tax advice", "Professional recommendations"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-amber-600/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 bg-amber-600 rounded-full" />
                      </div>
                      <span className="text-[#6B7280] leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-[#111827] font-bold mt-6">
                  Investing in early-stage companies carries risk, including the potential loss of capital.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-3xl p-10 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-[#111827] mb-6">
                  {section.title}
                </h2>

                {section.text && (
                  <p className="text-[#6B7280] mb-4 leading-relaxed">{section.text}</p>
                )}

                {section.items && (
                  <div className="bg-[#FAF9F7] rounded-xl p-6">
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-[#2563EB]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="w-2 h-2 bg-[#2563EB] rounded-full" />
                          </div>
                          <span className="text-[#6B7280] leading-relaxed flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.note && (
                  <div className="mt-6 p-4 bg-blue-50 border-l-4 border-[#2563EB] rounded-r-xl">
                    <p className="text-[#111827] font-semibold">
                      {section.note}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-white rounded-3xl p-10 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-[#111827] mb-6">Contact Information</h2>
            <div className="space-y-3">
              <a href="mailto:support@bedbees.com" className="flex items-center gap-3 text-[#2563EB] hover:text-[#1D4ED8] transition-colors">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">support@bedbees.com</span>
              </a>
              <div className="flex items-center gap-3 text-[#6B7280]">
                <Globe className="w-5 h-5" />
                <span>www.bedbees.com</span>
              </div>
            </div>
          </motion.div>

          {/* Related Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/privacy-policy"
              className="px-6 py-3 bg-white text-[#2563EB] border-2 border-[#2563EB] rounded-full font-semibold hover:bg-[#2563EB] hover:text-white transition-all"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="px-6 py-3 bg-white text-[#2563EB] border-2 border-[#2563EB] rounded-full font-semibold hover:bg-[#2563EB] hover:text-white transition-all"
            >
              Terms of Service
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
