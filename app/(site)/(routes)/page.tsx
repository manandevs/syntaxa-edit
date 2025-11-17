import FeaturesShowcase from "@/components/home/FeaturesShowcase";
import FinalCTA from "@/components/home/FinalCTA";
import Hero from "@/components/home/Hero";
import { PricingTeaser } from "@/components/home/PricingTeaser";
import SocialProof from "@/components/home/SocialProof";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <div className="max-w-[100vw] h-auto overflow-hidden">
        <Hero />
        <FeaturesShowcase />
        <SocialProof />
        <PricingTeaser />
        <FinalCTA />
      </div>
    </React.Fragment>
  )
}
