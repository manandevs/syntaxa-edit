"use client";
import FeatureCard from "./FeatureCard";
import Heading from "../shared/Heading";
import Text from "../shared/Text";
import { featuresData } from "@/data/Features"; // Import from data

const FeaturesShowcase = () => (
  <section className="relative bg-white py-20 sm:py-28">
     <div className="absolute bg-[#9CE015] size-[200px] lg:size-[320px] blur-[200px] md:blur-[300px] z-[1] top-0 md:top-[-100px] right-[-100px]"></div>
        <div className="absolute bg-[#7558FC] size-[200px] lg:size-[320px] blur-[200px] md:blur-[300px] z-[1] bottom-[-150px] left-[-100px]"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <Heading className="text-black" variant="medium">
          The Complete Developer Toolkit
        </Heading>
        <Text>
          Everything you need to build, debug, and ship amazing software, all in one place.
        </Text>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesShowcase;