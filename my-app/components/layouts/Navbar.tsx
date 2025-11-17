"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../shared/Logo";
import Button from "../shared/Button";
import { services } from "@/contexts/Home";
import { DropdownMenu, DropdownItem, DropdownSeparator } from "../shared/DropdownMenu";
import Modal from "../shared/Modal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="fixed top-0 z-[99] w-full bg-[#ffffff49] border-b border-black/10">
      <nav className="max-w-[1210px] mx-auto w-full h-[70px] md:h-[98px] px-4 flex justify-between items-center">
        <div className="flex items-center gap-5">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#home" className="font-medium text-xl text-[#535353]">Home</Link>

            <DropdownMenu trigger={<span className="font-medium text-xl text-[#535353] cursor-pointer">Services</span>}>
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <DropdownItem key={i} onClick={() => window.location.href = s.href}>
                    <div className="flex items-center gap-3">
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

            <button
              onClick={() => setIsModalOpen(true)}
              className="font-medium text-xl text-[#535353]"
            >
              Our Values
            </button>
          </div>
        </div>

        <div className="hidden md:flex"><Button text="Book a call" /></div>

        <button onClick={() => setIsOpen(!isOpen)} className="font-semibold md:hidden text-2xl">
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-6">
          <div className="flex flex-col gap-6 pt-6">
            <Link href="/#home" className="text-[18px] font-semibold border-b pb-4 border-black/10" onClick={() => setIsOpen(false)}>Home</Link>

            <DropdownMenu trigger={<span className="text-[18px] font-semibold">Services ▼</span>}>
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <DropdownItem key={i} onClick={() => { setIsOpen(false); window.location.href = s.href }}>
                    <div className="flex items-center gap-3">
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

            <button
              onClick={() => { setIsModalOpen(true); setIsOpen(false); }}
              className="text-[18px] font-semibold border-b pb-4 border-black/10 text-left"
            >
              Our Values
            </button>

            <Button text="Submit" />
          </div>
        </div>
      )}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        modalClassName="bg-white p-6 rounded-lg max-w-md w-full relative"
        closeBtnClassName="absolute top-2 right-2 text-xl font-bold"
      >
        <h2 className="text-xl font-semibold mb-2">Our Values</h2>
        <p className="text-gray-700">
          Here you can put your company’s values or any important information you want to display in the modal.
        </p>
      </Modal>
    </div>
  );
}
