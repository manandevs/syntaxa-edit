import Link from "next/link";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Heading from "../shared/Heading";
import Button from "../shared/Button";
import Logo from "../shared/Logo";
import { ReactNode } from "react";

export default function Footer() {
  const nav = ["Home", "Services", "Our Values", "Contact us"];

  return (
    <footer className="max-w-[1210px] w-full mx-auto px-5 py-12 pb-4">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="max-w-[551px] w-full">
          <Logo />
          <Heading
            variant="medium"
            text="Subscribe to our newsletter and get our weekly blogs"
          />

          <div className="flex items-end gap-4 mt-5">
            <input
              placeholder="Youremial@example.com"
              className="w-full max-w-[278px] py-3 px-3.5 bg-white rounded-[16px] border border-[#3D3D3D1A] shadow-[0px_3px_0_#EEE] text-[16px] placeholder:text-[#929292] outline-none"
            />
            <Button text="Submit" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {nav.map((item, i) => (
            <Link
              key={i}
              href="/"
              className="text-[#535353] font-medium text-[18px] md:text-xl hover:text-black"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      <div className="py-14 flex flex-col md:flex-row justify-between items-center gap-5">
        <p className="text-[14px] text-[#707070] font-semibold">
          © 2025 Growth agency global ( GAG ) All rights reserved
        </p>

        <div className="flex gap-3">
          <SocialIcon href="/" icon={<FaXTwitter />} />
          <SocialIcon href="/" icon={<FaInstagram />} hoverColor="#E4405F" />
          <SocialIcon href="/" icon={<FaLinkedin />} hoverColor="#0077B5" />
        </div>
      </div>
    </footer>
  );
}

/* ------------------ */
/* STRONG TYPES ADDED */
/* ------------------ */

interface SocialIconProps {
  href: string;
  icon: ReactNode;
  hoverColor?: string;
}

const SocialIcon = ({ href, icon, hoverColor = "#000" }: SocialIconProps) => (
  <Link
    href={href}
    className="size-[32px] flex items-center justify-center rounded-[12px] border border-[#E0E0DB] text-[#5F5F69] text-[20px] transition-all hover:text-[color:var(--c)]"
    style={{ "--c": hoverColor } as React.CSSProperties}
  >
    {icon}
  </Link>
);
