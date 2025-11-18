import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "outline" | "ghost" | "black";
}

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  className,
  children,
  variant = "default",
  ...props
}) => {
  const baseClasses =
    "font-peachi flex justify-center items-center px-8 py-3 rounded-2xl inline-flex cursor-pointer transition-all duration-300 ease-in-out font-medium hover:scale-[0.98] hover:translate-y-[-3px]";

  const variantClasses: Record<string, string> = {
    default:
      "text-white shadow-[0px_3px_0px_0px_#6E50D1,0px_5px_6px_0px_#7558FC80] active:shadow-none",

    outline:
      "text-[#7F61FB] border border-[#7F61FB] bg-transparent shadow-none hover:bg-[#7F61FB]/10 active:shadow-none",

    ghost:
      "px-0 py-0 text-[#7F61FB] bg-transparent border border-transparent hover:bg-[#7F61FB]/10 shadow-none active:shadow-none",

    black:
      "text-white bg-black shadow-[0px_3px_0px_0px_#1a1a1a,0px_5px_6px_0px_#00000080] active:shadow-none hover:bg-black",
  };

  const style =
    variant === "default"
      ? { background: "linear-gradient(180deg, #7F61FB 0%, #7558FC 100%)" }
      : undefined;

  const classes = cn(baseClasses, variantClasses[variant], className);

  if (href) {
    return (
      <Link 
        href={href} 
        className={classes} 
        style={style}
      >
        {children || text}
      </Link>
    );
  }

  return (
    <button className={classes} style={style} {...props}>
      {children || text}
    </button>
  );
};

export default Button;
