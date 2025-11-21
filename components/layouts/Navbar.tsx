"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../shared/Logo";
import Button from "../shared/Button";
import { services } from "@/data/Home";
import ValuesModal from "../shared/ValuesModal"; // Import the component
import { DropdownMenu, DropdownItem, DropdownSeparator } from "../shared/DropdownMenu";
import { useParams, usePathname } from "next/navigation";
import { useModal } from "../contexts/ModalContext";
import Disable from "../shared/Disable";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModal();
  const pathname = usePathname();
  const params = useParams();
  const slug = params?.slug;

  // Function to handle opening the modal with the ValuesModal component
  const handleOpenValues = () => {
    openModal(<ValuesModal />);
  };

  return (
    <div className="fixed top-0 z-[99] w-full bg-[#ffffff49] border-b backdrop-blur-sm border-black/10">
      <nav className="max-w-[1210px] mx-auto w-full h-[70px] md:h-[98px] px-4 flex justify-between items-center">

        {/* LEFT */}
        <div className="flex items-center gap-5">
          <Logo>
            {pathname.startsWith("/services/online-code-editor/") && slug && (
              <p className="text-[14px] md:text-[16px] text-gray-500 whitespace-nowrap capitalize">
                {slug} Online Compiler
              </p>
            )}
          </Logo>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="font-medium text-xl text-[#535353] hover:text-black transition-colors">
              Home
            </Link>

            {/* SERVICES DROPDOWN */}
            <DropdownMenu
              trigger={<span className="font-medium text-xl text-[#535353] cursor-pointer hover:text-black transition-colors">Services</span>}
            >
              {services.map((s, i) => {
                const Icon = s.icon;

                return (
                  <DropdownItem
                    key={i}
                    onClick={
                      s.allow
                        ? () => (window.location.href = s.href)
                        : undefined
                    }
                    disabled={!s.allow}
                  >
                    {s.allow ? (
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6 text-gray-700" />
                        <div className="flex flex-col">
                          <span className="font-semibold text-sm text-black">{s.title}</span>
                          <span className="text-xs text-gray-500">{s.description}</span>
                        </div>
                      </div>
                    ) : (
                      <Disable>
                        <div className="flex items-center gap-3">
                          <Icon className="w-6 h-6 text-gray-700" />
                          <div className="flex flex-col">
                            <span className="font-semibold text-sm text-black">{s.title}</span>
                            <span className="text-xs text-gray-500">{s.description}</span>
                          </div>
                        </div>
                      </Disable>
                    )}
                  </DropdownItem>
                );
              })}

              <DropdownSeparator />

              <DropdownItem destructive onClick={() => alert("Critical Action")}>
                <Disable>
                  Critical Action
                </Disable>
              </DropdownItem>
            </DropdownMenu>

            <Button
              variant="ghost"
              onClick={handleOpenValues} // Updated handler
              className="font-medium text-lg text-gray-600 hover:text-black"
            >
              Our Values
            </Button>
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <div className="hidden md:flex">
          <Disable>
            {pathname.startsWith("/services/") ? (
              <Button>SyntaxaEdit PRO</Button>
            ) : (
              <Button text="Book a call" />
            )}
          </Disable>
        </div>

        {/* MOBILE ICON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="font-semibold md:hidden text-2xl"
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-6">
          <div className="flex flex-col gap-6 pt-6">
            <Link
              href="/"
              className="text-[18px] font-semibold border-b pb-4 border-black/10"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* MOBILE SERVICES DROPDOWN */}
            <DropdownMenu trigger={<span className="text-[18px] font-semibold">Services ▼</span>}>
              {services.map((s, i) => {
                const Icon = s.icon;

                return (
                  <DropdownItem
                    key={i}
                    onClick={
                      s.allow
                        ? () => { setIsOpen(false); window.location.href = s.href; }
                        : undefined
                    }
                    disabled={!s.allow}
                  >
                    {s.allow ? (
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6 text-gray-700" />
                        <div className="flex flex-col">
                          <span className="font-semibold text-sm">{s.title}</span>
                          <span className="text-xs text-gray-500">{s.description}</span>
                        </div>
                      </div>
                    ) : (
                      <Disable>
                        <div className="flex items-center gap-3">
                          <Icon className="w-6 h-6 text-gray-700" />
                          <div className="flex flex-col">
                            <span className="font-semibold text-sm">{s.title}</span>
                            <span className="text-xs text-gray-500">{s.description}</span>
                          </div>
                        </div>
                      </Disable>
                    )}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>

            <Button
              variant="ghost"
              onClick={() => { handleOpenValues(); setIsOpen(false); }} // Updated handler
              className="text-lg font-semibold border-b pb-4 border-black/10 text-left"
            >
              Our Values
            </Button>

            <Button text="Submit" />
          </div>
        </div>
      )}
    </div>
  );
}