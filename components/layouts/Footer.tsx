"use client";

import Link from "next/link";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Heading from "../shared/Heading";
import Button from "../shared/Button";
import Logo from "../shared/Logo";
import { ReactNode } from "react";
import { services } from "@/data/Home";
import ValuesModal from "../shared/ValuesModal";
import { useModal } from "../contexts/ModalContext";
import Disable from "../shared/Disable";
import Text from "../shared/Text";

export default function Footer() {
  const { openModal } = useModal();

  // SAME function as NAVBAR
  const handleOpenValues = () => {
    openModal(<ValuesModal />);
  };

  return (
    <footer className="w-full mx-auto px-5">
      <div className="max-w-[1210px] mx-auto w-full py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-10">

          {/* LEFT SIDE */}
          <div className="max-w-[450px] w-full">
            <Logo />
            <Heading
              variant="medium"
              text="Subscribe to our newsletter and get our weekly blogs"
              className="mt-4"
            />

            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 mt-6">
              <input
                placeholder="Youremail@example.com"
                className="w-full sm:max-w-[278px] py-3 px-3.5 bg-white rounded-[16px] border border-[#3D3D3D1A] shadow-[0px_3px_0_#EEE] text-[16px] placeholder:text-[#929292] outline-none focus:border-blue-500 transition-colors"
              />
              <Button text="Submit" />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 content-start">

            {/* HOME */}
            <div className="flex flex-col gap-1 group">
              <Link
                href="/"
                className="text-[#535353] font-medium text-xl hover:text-white transition-colors"
              >
                Home
              </Link>
              <Text variant="small" className="text-gray-400 group-hover:text-gray-500 transition-colors">
                Return to the landing page.
              </Text>
            </div>

            {/* SERVICES */}
            {services.map((service, i) => (
              <div key={i} className="flex flex-col gap-1 group">
                {service.allow ? (
                  <Link
                    href={service.href}
                    className="text-[#535353] font-medium text-xl hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                ) : (
                  <Disable>
                    <span className="text-[#535353] font-medium text-xl">
                      {service.title}
                    </span>
                  </Disable>
                )}
                <Text variant="small" className="text-gray-400 group-hover:text-gray-500 transition-colors leading-snug">
                  {service.description}
                </Text>
              </div>
            ))}

            {/* ✔ SAME BEHAVIOR AS NAVBAR */}
            <div className="flex flex-col gap-1 group">
              <button
                onClick={handleOpenValues}
                className="text-[#535353] font-medium text-xl hover:text-white transition-colors text-left"
              >
                Our Values
              </button>
              <Text variant="small" className="text-gray-400 group-hover:text-gray-500 transition-colors">
                Read about our mission & beliefs.
              </Text>
            </div>

            {/* CONTACT */}
            <div className="flex flex-col gap-1 group">
              <Link
                href="/contact"
                className="text-[#535353] font-medium text-xl hover:text-white transition-colors"
              >
                Contact us
              </Link>
              <Text variant="small" className="text-gray-400 group-hover:text-gray-500 transition-colors">
                Get in touch with our team.
              </Text>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="py-8 mt-8 border-t border-gray-100">
        <div className="max-w-[1210px] mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-[14px] text-[#707070] font-semibold text-center md:text-left">
            © 2025 Growth agency global ( SyntaxaEdit ) All rights reserved
          </p>

          <div className="flex gap-3">
            <SocialIcon href="/" icon={<FaXTwitter />} />
            <SocialIcon href="/" icon={<FaInstagram />} hoverColor="#E4405F" />
            <SocialIcon href="/" icon={<FaLinkedin />} hoverColor="#0077B5" />
          </div>
        </div>
      </div>
    </footer>
  );
}

interface SocialIconProps {
  href: string;
  icon: ReactNode;
  hoverColor?: string;
}

const SocialIcon = ({ href, icon, hoverColor = "#000" }: SocialIconProps) => (
  <Link
    href={href}
    className="size-[32px] flex items-center justify-center rounded-[12px] border border-[#E0E0DB] text-[#5F5F69] text-[20px] transition-all hover:bg-white hover:text-[color:var(--c)] hover:border-[color:var(--c)]"
    style={{ "--c": hoverColor } as React.CSSProperties}
  >
    {icon}
  </Link>
);
