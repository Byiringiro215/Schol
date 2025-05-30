'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

type SideBarContextType = {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSidebar: () => void;
};


const defaultContextValue: SideBarContextType = {
  showSidebar: false,
  setShowSidebar: () => {},
  toggleSidebar: () => {},
};

const SideBarContext = createContext<SideBarContextType>(defaultContextValue);

type SideBarProviderProps = {
  children: ReactNode;
};

export const SideBarProvider = ({ children }: SideBarProviderProps) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(prev => !prev);
  };

  const value = {
    showSidebar,
    setShowSidebar,
    toggleSidebar,
  };

  return (
    <SideBarContext.Provider value={value}>
      {children}
    </SideBarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SideBarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SideBarProvider');
  }
  return context;
};
