"use client";

import { useState } from 'react';
import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";
import Text from "@/components/shared/Text";
import Link from "next/link";
import { FiChevronDown } from 'react-icons/fi';
import { cn } from '@/lib/utils';
import { languageInfo } from '@/data/Info';

export default function InfoPage() {
  const [openItem, setOpenItem] = useState<string | null>('item-0');

  const handleToggle = (value: string) => {
    setOpenItem(openItem === value ? null : value);
  };

  return (
    <section className="bg-[#F8F5F1] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="lg:sticky top-24">
          <Heading variant="medium" className="text-gray-900">
            Powerful Compilers,
            <br />
            Right in Your Browser.
          </Heading>
          <Text className="mt-6 max-w-md">
            Learn more about the languages we support. Each environment is configured for instant use, allowing you to focus on coding, not setup.
          </Text>
          <Link href="/services/online-code-editor" className="mt-8 inline-block">
            <Button variant="black">
              Choose Your Compiler
            </Button>
          </Link>
        </div>

        {/* 3. The accordion is now built directly within the map loop */}
        <div className="mt-4 lg:mt-0 w-full space-y-2">
          {languageInfo.map(({ icon: Icon, name, description }, index) => {
            const value = `item-${index}`;
            const isOpen = openItem === value;

            return (
              <div
                key={value}
                className="bg-white/50 rounded-xl border border-gray-200/80 shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => handleToggle(value)}
                  className="group w-full flex items-center justify-between text-lg font-medium text-slate-800 text-left px-6 py-5 hover:no-underline"
                >
                  <span className="flex items-center gap-4">
                    <Icon className="w-6 h-6 text-gray-500 group-hover:text-blue-600 transition-colors" />
                    <span className="flex-1 pr-4">What is {name}?</span>
                  </span>
                  <FiChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                {/* Content Panel */}
                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100 block" : "grid-rows-[0fr] opacity-0 hidden"
                  )}
                >
                  <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed text-base">
                    {description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}