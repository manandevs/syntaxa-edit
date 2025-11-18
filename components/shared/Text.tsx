import { cn } from '@/lib/utils';
import React from 'react';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'medium' | 'small'; 
}

const Text: React.FC<TextProps> = ({
  text,
  className,
  children,
  variant = 'default',
  ...props
}) => {
  const variantClasses: Record<string, string> = {
    default: "text-[14px] sm:text-[16px] lg:text-[20px]",
    medium: "text-base", 
    small: "text-sm",
  };

  return (
    <p
      className={cn(
        "font-normal leading-[1.6] text-[#3D3D3D]",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {text || children}
    </p>
  );
};

export default Text;