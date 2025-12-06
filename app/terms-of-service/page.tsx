"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Mail, Globe } from "lucide-react";

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      text: "By using Bedbees, you agree to be legally bound by:",
      items: ["These Terms of Service", "Privacy Policy", "Any additional terms provided on investor platforms (e.g., Republic)"]
    },
    {
      title: "2. Eligibility",
      text: "You must be:",
      items: ["At least 18 years old", "Legally able to enter into binding agreements", "Using the Service for lawful purposes"],
      note: "If you are investing, you must comply with all applicable investment regulations."
    },
    {
      title: "3. Use of the Service",
      text: "You agree to:",
      items: ["Use the website ethically and legally", "Not attempt to harm, hack, or disrupt the Service", "Not impersonate any individual or organization", "Not submit fraudulent investment information"],
      note: "We reserve the right to suspend or block access for violations."
    },
    {
      title: "4. Investment Information",
      text: "Bedbees may provide access to investment opportunities through regulated platforms such as Republic. By participating, you understand:",
      items: ["Investments carry risk", "Earnings are not guaranteed", "Equity may not be immediately tradable", "Investment decisions are your sole responsibility"],
      note: "Bedbees does not provide financial or legal advice."
    },
    {
      title: "5. Intellectual Property",
      text: "All content on Bedbees—including logos, images, text, graphics, and branding—is the property of Bedbees and protected by copyright and trademark laws.",
      note: "You may not copy, modify, redistribute, or sell any content without written permission."
    },
    {
      title: "6. Third-Party Services",
      text: "We may link to external services (e.g., crowdfunding platforms, payment processors). We are not responsible for:",
      items: ["Their policies", "Their security", "Their actions or omissions"],
      note: "Use them at your own discretion."
    },
    {
      title: "7. Disclaimer of Warranties",
      text: "The Service is provided \"as is\" without warranties of any kind. We do not guarantee:",
      items: ["Error-free operation", "Continuous availability", "Accuracy of any future financial projections"]
    },
    {
      title: "8. Limitation of Liability",
      text: "To the maximum extent permitted by law, Bedbees is not liable for:",
      items: ["Losses from investment decisions", "Website downtime", "Cyberattacks", "Incorrect or outdated information", "Indirect, incidental, or consequential damages"]
    },
    {
      title: "9. Termination",
      text: "We may suspend or terminate access for:",
      items: ["Violations of these terms", "Fraudulent activity", "Misuse of the platform"]
    },
    {
      title: "10. Governing Law",
      text: "These Terms shall be governed by the laws of Cyprus (planned headquarters) or your applicable jurisdiction, depending on investor regulations."
    },
    {
      title: "11. Contact",
      contact: true
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
              <FileText className="w-4 h-4 text-[#2563EB]" />
              <span className="text-sm font-medium text-[#111827]">Terms of Service</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#111827] mb-6 leading-tight">
              Terms of Service
            </h1>

            <p className="text-xl md:text-2xl text-[#6B7280] max-w-4xl mx-auto leading-relaxed">
              Please read these terms carefully before using Bedbees
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
            className="bg-white rounded-3xl p-12 shadow-lg mb-8"
          >
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Welcome to Bedbees. By accessing or using our website ("Service"), you agree to the following Terms of Service. If you do not agree, please discontinue use.
            </p>
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

                {section.contact && (
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
                )}
              </motion.div>
            ))}
          </div>

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
              href="/legal-disclaimer"
              className="px-6 py-3 bg-white text-[#2563EB] border-2 border-[#2563EB] rounded-full font-semibold hover:bg-[#2563EB] hover:text-white transition-all"
            >
              Legal Disclaimer
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
