"use client";

import { useRef, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import Text from "../shared/Text";
import Heading from "../shared/Heading";
import Button from "../shared/Button";

export type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  iconGradient: string;
  hoverGlow: string;
  extraContent?: React.ReactNode;
};

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const { icon: Icon, title, description, gradient, iconGradient, hoverGlow, extraContent } = feature;
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (cardRef.current && iconRef.current) {
      timeline.current = gsap.timeline({ paused: true })
        .to(cardRef.current, { y: -8, duration: 0.3, ease: "power2.out" })
        .to(iconRef.current, { rotate: -15, scale: 1.1, duration: 0.3, ease: "power2.out" }, "<");
    }
  }, []);

  const handleMouseEnter = () => timeline.current?.play();
  const handleMouseLeave = () => timeline.current?.reverse();

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative p-8 rounded-2xl overflow-hidden cursor-pointer shadow-md transition-shadow duration-300 transform hover:-translate-y-2 bg-gradient-to-br bg-[length:200%_200%] bg-left hover:bg-right",
        gradient,
        hoverGlow,
        "hover:shadow-xl"
      )}
    >
      {/* Icon */}
      <div
        ref={iconRef}
        className={cn(
          "w-16 h-16 rounded-xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg transform transition-transform duration-300",
          iconGradient
        )}
      >
        <Icon />
      </div>

      {/* Extra Content Overlay */}
      {extraContent && <div className="absolute top-4 right-4">{extraContent}</div>}

      {/* Text Content */}
      <Heading className="text-black" variant="small">{title}</Heading>
      <Text className="mt-2 text-gray-600 leading-relaxed">{description}</Text>

      {/* Learn More Link */}
      <Button variant="ghost">
        Learn More
        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
      {/* <Link href="#" className="mt-6 inline-flex items-center gap-2 font-semibold text-gray-800 group">
      </Link> */}
    </div>
  );
};

export default FeatureCard;
