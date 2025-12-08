"use client";

import Hero from "@/components/Hero";
import InvestmentHighlights from "@/components/InvestmentHighlights";
import MarketOpportunity from "@/components/MarketOpportunity";
import ProviderSection from "@/components/ProviderSection";
import WhyNow from "@/components/WhyNow";
import InvestorCTA from "@/components/InvestorCTA";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Investment Highlights */}
      <InvestmentHighlights />
      
      {/* Market Opportunity */}
      <MarketOpportunity />
      
      {/* Provider Ecosystem */}
      <ProviderSection variant="compact" />
      
      {/* Why Now */}
      <WhyNow />
      
      {/* Final CTA */}
      <InvestorCTA />
    </>
  );
}
