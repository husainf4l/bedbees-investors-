"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  MessageSquare,
  Briefcase,
  Newspaper,
  ChevronDown,
  Send,
  MapPin,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const contactCards = [
    {
      icon: Briefcase,
      title: "Investment Inquiries",
      description: "Questions about equity, terms, or investment opportunities.",
      email: "investors@bedbees.com",
      gradient: "from-sand-light to-white",
    },
    {
      icon: MessageSquare,
      title: "Shareholder Relations",
      description: "Updates, reports, and shareholder communication.",
      email: "shareholders@bedbees.com",
      gradient: "from-white to-sand-light",
    },
    {
      icon: Briefcase,
      title: "Partnership Opportunities",
      description: "Strategic partnerships and collaboration proposals.",
      email: "partners@bedbees.com",
      gradient: "from-sand-light to-white",
    },
    {
      icon: Newspaper,
      title: "Legal & Compliance",
      description: "Legal documentation, agreements, and compliance matters.",
      email: "legal@bedbees.com",
      gradient: "from-white to-sand-light",
    },
  ];

  const faqs = [
    {
      question: "What is the minimum investment amount?",
      answer:
        "The minimum investment is $1,000 USD for a 0.002% equity stake in Bedbees.",
    },
    {
      question: "How do I receive investment updates?",
      answer: "All investors receive quarterly reports and have access to our investor portal for real-time updates.",
    },
    {
      question: "When can I expect returns on my investment?",
      answer:
        "We project profitability within 18-24 months, with potential exits or dividends based on company performance and growth milestones.",
    },
  ];



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          topic: "",
          message: "",
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Header */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-title mb-6">
              Connect With Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Let&apos;s discuss your investment in the future of travel.
            </p>
            <p className="text-lg text-gray-500">
              Our team is available to answer your questions, provide additional materials, 
              and guide you through the investment process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Block */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.a
                  key={card.title}
                  href={`mailto:${card.email}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group bg-gradient-to-br ${card.gradient} rounded-2xl border border-gray-100 shadow-sm p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
                >
                  <Icon className="w-10 h-10 text-travel-blue mb-4" />
                  <h3 className="text-2xl font-semibold text-title mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{card.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-travel-blue font-medium">
                      {card.email}
                    </span>
                    <span className="text-travel-blue transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-title mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and our team will get back to you promptly.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-6"
          >
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-200 p-4 text-gray-700 shadow-sm focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent outline-none transition"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-200 p-4 text-gray-700 shadow-sm focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent outline-none transition"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Topic */}
            <div>
              <label
                htmlFor="topic"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Topic
              </label>
              <select
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-200 p-4 text-gray-700 shadow-sm focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent outline-none transition"
              >
                <option value="">Select a topic</option>
                <option value="investment">Investment Inquiry</option>
                <option value="shareholder">Shareholder Relations</option>
                <option value="partnership">Strategic Partnership</option>
                <option value="legal">Legal & Compliance</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full rounded-xl border border-gray-200 p-4 text-gray-700 shadow-sm focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent outline-none transition resize-none"
                placeholder="Tell us how we can help..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-travel-blue text-white px-8 py-4 font-semibold hover:bg-travel-blue-hover transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>

            {/* Status Messages */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 rounded-xl p-4 text-center"
              >
                <p className="text-green-800 font-semibold">
                  Thank you — your message has been received.
                </p>
                <p className="text-green-600 text-sm mt-1">
                  Our team will respond shortly.
                </p>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-xl p-4 text-center"
              >
                <p className="text-red-800 font-semibold">
                  Something went wrong. Please try again.
                </p>
              </motion.div>
            )}
          </motion.form>
        </div>
      </section>

      {/* Head Office - Cyprus */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-white via-orange-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 1000 500" className="w-full h-full">
            <circle cx="200" cy="150" r="100" fill="currentColor" className="text-travel-blue" />
            <circle cx="500" cy="250" r="80" fill="currentColor" className="text-travel-blue" />
            <circle cx="800" cy="200" r="90" fill="currentColor" className="text-travel-blue" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-2 border border-gray-200 shadow-sm mb-6">
              <MapPin className="w-5 h-5 text-travel-blue" />
              <span className="text-sm font-semibold text-gray-700">Global Expansion</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-title mb-4">
              Head Office — Cyprus
            </h2>
            <p className="text-xl text-gray-600 font-medium mb-2">
              (Planned Establishment)
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              As part of our global expansion strategy, Bedbees is in the process of establishing 
              its official head office in Cyprus.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Cyprus offers an ideal environment for international travel and technology companies, 
              and this move strengthens our long-term vision for building a global, scalable, and 
              investor-friendly corporate structure.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-title mb-4">
                This upcoming headquarters reflects our commitment to:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-travel-blue mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Operating within a strong European regulatory framework
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-travel-blue mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Supporting global partnerships and investor relations
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-travel-blue mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Building a reliable foundation for worldwide growth
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed">
                We&apos;re excited about this next chapter and look forward to welcoming our investors 
                into a company that is expanding thoughtfully, strategically, and with clear global ambition.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-title mb-4">
              Investor FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Common questions from potential investors
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition"
                >
                  <span className="text-lg font-semibold text-title">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-title mb-4">
              Ready to Invest?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join 500 investors building the future of travel. Our team is ready to 
              answer your questions and guide you through the investment process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#form"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center rounded-full bg-travel-blue px-8 py-3 text-base font-semibold text-white hover:bg-travel-blue-hover transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
