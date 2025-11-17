import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    className?: string;
    children?: React.ReactNode;
}

export default function Badge({ text, className, children, ...props }: BadgeProps) {
    return (
        <button
            className={cn(
                "bg-white rounded-2xl text-black font-medium text-[14px] flex justify-center items-center gap-1.5 px-3.5 py-2 border border-[#3D3D3D1A]",
                className
            )}
            {...props}
        >
            {text}
            {children}
        </button>
    );
}
