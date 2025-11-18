"use client";

import React, { createContext, useContext, ReactNode } from 'react';
import { FullScreen, useFullScreenHandle, FullScreenHandle } from "react-full-screen";

interface FullScreenContextType {
  handle: FullScreenHandle;
}

const FullScreenContext = createContext<FullScreenContextType | undefined>(undefined);

interface FullScreenProviderProps {
  children: ReactNode;
}

export const FullScreenProvider: React.FC<FullScreenProviderProps> = ({ children }) => {
  const handle = useFullScreenHandle();

  return (
    <FullScreen handle={handle}>
      <FullScreenContext.Provider value={{ handle }}>
        {children}
      </FullScreenContext.Provider>
    </FullScreen>
  );
};

export const useFullScreen = () => {
  const context = useContext(FullScreenContext);
  if (context === undefined) {
    throw new Error('useFullScreen must be used within a FullScreenProvider');
  }
  return context;
};