'use client';
import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

interface AddStudentContextType {
  showAddStudent: boolean;
  setShowAddStudent: Dispatch<SetStateAction<boolean>>;
  handleClick: () => void;
}

const AddStudentContext = createContext<AddStudentContextType | null>(null);


interface Props {
  children: ReactNode;
}

export const ShowAddStudent_Teacher = ({ children }: Props) => {
  const [showAddStudent, setShowAddStudent] = useState(false);

  const handleClick = () => {
    setShowAddStudent(true);
  };

  return (
    <AddStudentContext.Provider value={{ showAddStudent, setShowAddStudent, handleClick }}>
      {children}
    </AddStudentContext.Provider>
  );
};

export const useAddStudent = () => {
  const context = useContext(AddStudentContext);
  if (!context) {
    throw new Error('useAddStudent must be used within a ShowAddStudent_Teacher provider');
  }
  return context;
};
