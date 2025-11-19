"use client";

import React from "react";
import { AiFillLock } from "react-icons/ai";

interface DisableProps {
    children: React.ReactNode;
}

const Disable: React.FC<DisableProps> = ({ children }) => {
    return (
        <div className="relative opacity-60 select-none cursor-not-allowed">
            {/* Block all pointer events */}
            <div className="pointer-events-none">
                {children}
            </div>

            {/* Lock Icon */}
            <AiFillLock className="text-gray-400 absolute -top-1 -right-1 z-10 pointer-events-none" />
        </div>
    );
};

export default Disable;
