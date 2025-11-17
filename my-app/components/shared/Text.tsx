import { cn } from '@/lib/utils';
import React from 'react';

interface TextProps {
  text?: string;
  className?: string;
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ text, className, children }) => {
  return (
    <p
      className={cn(
        "font-normal text-[14px] sm:text-[16px] lg:text-[20px] leading-[1.6] text-[#3D3D3D]",
        className
      )}
    >
      {text || children}
    </p>
  );
};

export default Text;
