"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiFillLock } from "react-icons/ai"; // Import AiFillLock
import Logo from "../shared/Logo";
import Button from "../shared/Button";
import { services } from "@/data/Home";
import { DropdownMenu, DropdownItem, DropdownSeparator } from "../shared/DropdownMenu";
import Modal from "../shared/Modal";
import { useParams, usePathname } from "next/navigation";
import { useModal } from "../contexts/ModalContext";
import Heading from "../shared/Heading";
import Text from "../shared/Text";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModal();
  const pathname = usePathname();
  const params = useParams();
  const slug = params?.slug;

  const ourValuesContent = (
    <div className="">
      <Heading className="text-gray-600">Our Values</Heading>
      <Text className="text-gray-500">
        We believe in speed, simplicity, and empowering developers. Our mission is to create tools that feel like an extension of your own mind, allowing you to build amazing software without friction.
      </Text>
    </div>
  );

  return (
    <div className="fixed top-0 z-[99] w-full bg-[#ffffff49] border-b backdrop-blur-sm border-black/10">
      <nav className="max-w-[1210px] mx-auto w-full h-[70px] md:h-[98px] px-4 flex justify-between items-center">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-5">
            <Logo>
              {pathname.startsWith("/services/online-code-editor/") && slug && (
                <p className="text-[14px] md:text-[16px] text-gray-500 whitespace-nowrap capitalize">
                  {slug} Online Compiler
                </p>
              )}
            </Logo>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="font-medium text-xl text-[#535353]">Home</Link>

            <DropdownMenu trigger={<span className="font-medium text-xl text-[#535353] cursor-pointer">Services</span>}>
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <DropdownItem
                    key={i}
                    onClick={s.allow ? () => (window.location.href = s.href) : undefined}
                    disabled={!s.allow}
                  >
                    <div className="relative flex items-center gap-3">
                      {!s.allow && <AiFillLock className="text-gray-400 absolute -top-1 -right-1 z-10" />}
                      <Icon className="w-6 h-6 text-gray-700" />
                      <div className="flex flex-col">
                        <span className="font-semibold text-sm text-black">{s.title}</span>
                        <span className="text-xs text-gray-500">{s.description}</span>
                      </div>
                    </div>
                  </DropdownItem>
                );
              })}
              <DropdownSeparator />
              <DropdownItem destructive onClick={() => alert("Critical Action")}>Critical Action</DropdownItem>
            </DropdownMenu>

            <Button
              variant="ghost"
              onClick={() => openModal(ourValuesContent)}
              className="font-medium text-lg text-gray-600 hover:text-black"
            >
              Our Values
            </Button>
          </div>
        </div>

        <div className="hidden md:flex">
          {pathname.startsWith("/services/") ? (
            <Button>
              SyntaxaEdit PRO
            </Button>
          ) : (
            <Button text="Book a call" />
          )}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="font-semibold md:hidden text-2xl">
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-6">
          <div className="flex flex-col gap-6 pt-6">
            <Link href="/" className="text-[18px] font-semibold border-b pb-4 border-black/10" onClick={() => setIsOpen(false)}>Home</Link>

            <DropdownMenu trigger={<span className="text-[18px] font-semibold">Services ▼</span>}>
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <DropdownItem
                    key={i}
                    onClick={s.allow ? () => { setIsOpen(false); window.location.href = s.href; } : undefined}
                    disabled={!s.allow}
                  >
                    <div className="relative flex items-center gap-3">
                      {!s.allow && <AiFillLock className="text-gray-400 absolute -top-1 -right-1 z-10" />}
                      <Icon className="w-6 h-6 text-gray-700" />
                      <div className="flex flex-col">
                        <span className="font-semibold text-sm">{s.title}</span>
                        <span className="text-xs text-gray-500">{s.description}</span>
                      </div>
                    </div>
                  </DropdownItem>
                );
              })}
            </DropdownMenu>

            <Button
              variant="ghost"
              onClick={() => { openModal(ourValuesContent); setIsOpen(false); }}
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