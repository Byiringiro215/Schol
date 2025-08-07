'use client';

import React, { createContext, useContext, ReactNode, useState } from 'react';
import { useRouter } from 'next/navigation';

interface AddStudentContextType {
  showAddStudent: boolean;
  handleClick: () => void;
}

const AddStudentContext = createContext<AddStudentContextType | null>(null);

export const AddStudentProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [showAddStudent, setShowAddStudent] = useState(false);

  function handleClick() {
    setShowAddStudent(!showAddStudent);
  }

  return (
    <AddStudentContext.Provider value={{ showAddStudent, handleClick }}>
      {children}
    </AddStudentContext.Provider>
  );
};

export const useAddStudent = () => {
  const context = useContext(AddStudentContext);
  if (!context) {
    throw new Error('useAddStudent must be used within DashboardProvider');
  }
  return context;
};
