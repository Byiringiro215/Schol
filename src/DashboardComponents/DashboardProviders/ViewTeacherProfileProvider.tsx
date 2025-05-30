'use client';

import React, { createContext, useContext, ReactNode, useState } from 'react';
import { useRouter } from 'next/navigation';

interface ViewTeacherProfileContextType {
  handleView: (id: string, teacher?: any) => void;
  selectedTeacher: any;
  setSelectedTeacher: (teacher: any) => void;
  showDelete: boolean;
  setShowDelete: (show: boolean) => void;
  handleDelete: (teacher: any) => void;
  showUpdate: boolean;
  setShowUpdate: (show: boolean) => void;
  handleUpdate: (teacher: any) => void;
}

const ViewTeacherProfileContext = createContext<ViewTeacherProfileContextType | null>(null);

export const ViewTeacherProfileProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [showDelete, setShowDelete] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  function handleView(id: string, teacher: any) {
    setSelectedTeacher(teacher);
    router.push(`/dashboard/teachers/${id}`);
  }

  function handleDelete(teacher: any) {
    setSelectedTeacher(teacher);
    setShowDelete(true);
  }
  function handleUpdate(teacher: any) {
    setSelectedTeacher(teacher);
    setShowUpdate(true);
  }

  return (
    <ViewTeacherProfileContext.Provider value={{ 
      handleView, 
      selectedTeacher, 
      setSelectedTeacher, 
      showDelete, 
      setShowDelete,
      handleDelete,
      handleUpdate,
      showUpdate,
      setShowUpdate,
    }}>
      {children}
    </ViewTeacherProfileContext.Provider>
  );
};

export const useViewTeacherProfile = () => {
  const context = useContext(ViewTeacherProfileContext);
  if (!context) {
    throw new Error('useViewTeacherProfile must be used within DashboardProvider');
  }
  return context;
};
