"use client";
import FeatureCard, { type Feature } from "./FeatureCard";
import { TbBolt, TbBrain, TbPalette, TbPuzzle, TbDevices, TbBug } from "react-icons/tb";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";
import Heading from "../shared/Heading";
import Text from "../shared/Text";

const featuresData: Feature[] = [
  {
    icon: TbBolt,
    title: "Lightning Performance",
    description: "Built from the ground up for speed, handling massive files and projects with ease.",
    gradient: "from-blue-100 to-blue-200",
    iconGradient: "bg-gradient-to-br from-blue-500 to-cyan-400",
    hoverGlow: "hover:shadow-blue-500/30",
    extraContent: (
      <span className="px-2 py-1 text-xs font-bold text-blue-800 bg-white/70 rounded-full border border-blue-200">
        2x faster than VS Code
      </span>
    ),
  },
  {
    icon: TbBrain,
    title: "AI-Powered Intelligence",
    description: "Get context-aware suggestions and completions that feel like magic, not just keywords.",
    gradient: "from-green-100 to-green-200",
    iconGradient: "bg-gradient-to-br from-green-500 to-emerald-400",
    hoverGlow: "hover:shadow-green-500/30",
  },
  {
    icon: TbPalette,
    title: "Beautiful Interface",
    description: "A distraction-free UI that's fully customizable to create your perfect coding sanctuary.",
    gradient: "from-purple-100 to-purple-200",
    iconGradient: "bg-gradient-to-br from-purple-500 to-fuchsia-400",
    hoverGlow: "hover:shadow-purple-500/30",
  },
  {
    icon: TbPuzzle,
    title: "Plugin Ecosystem",
    description: "Extend functionality with a curated marketplace of stable, high-performance plugins.",
    gradient: "from-orange-100 to-orange-200",
    iconGradient: "bg-gradient-to-br from-orange-500 to-amber-400",
    hoverGlow: "hover:shadow-orange-500/30",
    extraContent: (
      <span className="px-2 py-1 text-xs font-bold text-orange-800 bg-white/70 rounded-full border border-orange-200">
        500+ plugins available
      </span>
    ),
  },
  {
    icon: TbDevices,
    title: "Cross-Platform",
    description: "Your personalized setup, synced and ready to go on Windows, macOS, and Linux.",
    gradient: "from-teal-100 to-teal-200",
    iconGradient: "bg-gradient-to-br from-teal-500 to-cyan-400",
    hoverGlow: "hover:shadow-teal-500/30",
    extraContent: (
      <div className="flex gap-2 text-teal-800 text-lg">
        <FaWindows /> <FaApple /> <FaLinux />
      </div>
    ),
  },
  {
    icon: TbBug,
    title: "Smart Debugging",
    description: "Find and crush bugs with an intuitive, multi-language debugger that just works.",
    gradient: "from-red-100 to-red-200",
    iconGradient: "bg-gradient-to-br from-red-500 to-rose-400",
    hoverGlow: "hover:shadow-red-500/30",
  },
];

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