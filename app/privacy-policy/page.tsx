"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Mail, Globe } from "lucide-react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        {
          subtitle: "A. Information You Provide Directly",
          items: ["Name", "Email address", "Phone number", "Investment information (if you participate in the fundraising)", "Messages sent through our contact forms", "Optional profile details (if applicable)"]
        },
        {
          subtitle: "B. Automatically Collected Information",
          items: ["IP address", "Browser type and version", "Device information", "Pages visited", "Time spent on the website", "Cookies and tracking pixels"]
        },
        {
          subtitle: "C. Third-Party Services",
          text: "If you invest through a regulated crowdfunding platform (e.g., Republic), they may share non-sensitive data with us such as: Your investment amount, Status updates, General demographic data (if allowed)"
        }
      ]
    },
    {
      title: "2. How We Use Your Information",
      text: "We use your data for:",
      items: ["Providing website functionality", "Communicating with you regarding investment updates", "Responding to your inquiries", "Improving our platform and services", "Ensuring legal compliance", "Conducting analytics and performance monitoring", "Sending newsletters or updates (only if you opt in)"],
      note: "We never sell personal data."
    },
    {
      title: "3. Cookies and Tracking",
      text: "We use cookies to:",
      items: ["Improve website performance", "Understand visitor behavior", "Customize content", "Enhance user experience"],
      note: "You may disable cookies in your browser settings."
    },
    {
      title: "4. Sharing Your Information",
      text: "We may share data only with:",
      items: ["Regulated crowdfunding platforms (if you invest)", "Email service providers", "Cloud hosting providers", "Legal authorities (if required by law)"],
      note: "We do not share information with advertisers."
    },
    {
      title: "5. Data Security",
      text: "We use industry-standard security measures to protect your data, including:",
      items: ["Encrypted transmission (HTTPS)", "Secure cloud infrastructure", "Access restrictions", "Regular monitoring and updates"],
      note: "However, no system is 100% secure."
    },
    {
      title: "6. Your Rights",
      text: "Depending on your country, you may:",
      items: ["Request access to your data", "Request deletion", "Opt out of communications", "Request correction of inaccurate information"],
      note: "To request changes, contact: support@bedbees.com"
    },
    {
      title: "7. Data Retention",
      text: "We retain your data as long as necessary for:",
      items: ["Legal compliance", "Investor recordkeeping", "Platform improvements"]
    },
    {
      title: "8. Changes to This Policy",
      text: "We may update this Privacy Policy occasionally. Updates will be posted on this page."
    },
    {
      title: "9. Contact Information",
      text: "For questions:",
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
              <Shield className="w-4 h-4 text-[#2563EB]" />
              <span className="text-sm font-medium text-[#111827]">Privacy Policy</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#111827] mb-6 leading-tight">
              Privacy Policy
            </h1>

            <p className="text-xl md:text-2xl text-[#6B7280] max-w-4xl mx-auto leading-relaxed">
              Bedbees is committed to protecting your privacy
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
              Bedbees ("we", "our", "the Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website or participate in our investor campaign.
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

                {section.content && section.content.map((subsection, idx) => (
                  <div key={idx} className="mb-6 last:mb-0 bg-[#FAF9F7] rounded-xl p-6">
                    {subsection.subtitle && (
                      <h3 className="text-lg font-bold text-[#111827] mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#2563EB] rounded-full" />
                        {subsection.subtitle}
                      </h3>
                    )}
                    {subsection.items && (
                      <ul className="space-y-3">
                        {subsection.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full mt-2 flex-shrink-0" />
                            <span className="text-[#6B7280] leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {subsection.text && (
                      <p className="text-[#6B7280] leading-relaxed">{subsection.text}</p>
                    )}
                  </div>
                ))}

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
              href="/terms-of-service"
              className="px-6 py-3 bg-white text-[#2563EB] border-2 border-[#2563EB] rounded-full font-semibold hover:bg-[#2563EB] hover:text-white transition-all"
            >
              Terms of Service
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
