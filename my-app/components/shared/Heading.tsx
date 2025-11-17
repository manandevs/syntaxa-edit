import { cn } from "@/lib/utils";
import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    text?: string;
    className?: string;
    children?: React.ReactNode;
    variant?: "default" | "medium" | "small";
}

const Heading: React.FC<HeadingProps> = ({ text, className, children, variant = "default", ...props }) => {
    const variantClasses = {
        default: "font-peachi text-[48px] md:text-[88px] leading-[56px] md:leading-[96px] tracking-tight",
        medium: "font-peachi font-semibold text-3xl md:text-4xl leading-snug md:leading-relaxed tracking-tight",
        small: "font-peachi font-semibold text-xl md:text-2xl leading-snug md:leading-relaxed tracking-tight",
    };

    return (
        <h1 className={cn(variantClasses[variant], className)} {...props}>
            {text}
            {children}
        </h1>
    );
};

export default Heading;
