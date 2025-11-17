"use client";

import React, { useState, useRef, useEffect } from "react";
import { LuChevronsUpDown } from "react-icons/lu";
import { cn } from "@/lib/utils";

export function DropdownMenu({ trigger, children }: { trigger: React.ReactNode; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <div ref={ref} className="relative inline-block">
      <button onClick={() => setOpen(o => !o)} className="px-3 py-2 rounded-md hover:bg-gray-200 flex items-center gap-2">
        {trigger} <LuChevronsUpDown className="w-4 h-4 text-gray-500" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-black/20" onClick={() => setOpen(false)} />
          <div className="absolute left-0 z-50 w-56 rounded-md border bg-white shadow-lg p-1 mt-2 animate-in fade-in-0 zoom-in-95">
            {children}
          </div>
        </>
      )}
    </div>
  );
}

export function DropdownItem({ children, onClick, disabled, destructive }: { children: React.ReactNode; onClick?: () => void; disabled?: boolean; destructive?: boolean }) {
  return (
    <button
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      className={cn(
        "w-full text-left px-3 py-2 text-sm rounded-sm select-none transition-colors",
        disabled && "opacity-50 cursor-not-allowed",
        !disabled && "hover:bg-gray-100",
        destructive && "text-red-600 hover:bg-red-50"
      )}
    >
      {children}
    </button>
  );
}

export function DropdownSeparator() {
  return <div className="my-1 border-t" />;
}
