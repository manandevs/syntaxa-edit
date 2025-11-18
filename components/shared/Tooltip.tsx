"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import Text from './Text';

type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  placement?: TooltipPlacement;
  className?: string;
  tooltipClassName?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  placement = 'top',
  className,
  tooltipClassName,
}) => {
 
  const placementClasses: Record<TooltipPlacement, string> = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  const arrowPlacementClasses: Record<TooltipPlacement, string> = {
    top: 'bottom-[-3px] left-1/2 -translate-x-1/2',
    bottom: 'top-[-3px] left-1/2 -translate-x-1/2',
    left: 'right-[-3px] top-1/2 -translate-y-1/2',
    right: 'left-[-3px] top-1/2 -translate-y-1/2',
  };

  return (
    <div className={cn("relative inline-block group z-[999]", className)}>
      {children}
      <div
        role="tooltip"
        className={cn(
          "absolute z-[999] inline-block opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",
          placementClasses[placement],
          tooltipClassName
        )}
      >
        <Text className='bg-gray-900 font-peachi px-2.5 py-0.5 rounded-lg text-white' variant='small'>{content}</Text>
        <div
          className={cn(
            "absolute w-1.5 h-1.5 bg-gray-900 rotate-45 z-[999]",
            arrowPlacementClasses[placement]
          )}
        />
      </div>
    </div>
  );
};

export default Tooltip;