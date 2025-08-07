'use client'

import React, { ReactNode, createContext, useContext, useState } from 'react'
import { teacherslist as initialTeachers } from '@/data/Teacherslist'
import { useRouter } from 'next/navigation'
import { useViewTeacherProfile } from './ViewTeacherProfileProvider';
import toast from 'react-hot-toast';

interface Delete_UpdateProps {
  handleDelete: (id: string) => void;
  teachers: typeof initialTeachers;
  setTeachers: React.Dispatch<React.SetStateAction<typeof initialTeachers>>;
}

const Delete_UpdateContext = createContext<Delete_UpdateProps | null>(null);

interface Props {
  children: ReactNode;
}

export const Delete_Add_Provider = ({ children }: Props) => {
  const [teachers, setTeachers] = useState(initialTeachers);
  const {showDelete,setShowDelete}=useViewTeacherProfile()
  const router = useRouter();

  const handleDelete = (id: string) => {
    
    const updatedTeachers = teachers.filter((teacher) => teacher.id !== id);
    
  setTimeout(()=>{
    setTeachers(updatedTeachers);
    setShowDelete(false);
  },500)
  toast.success("Teacher Deleted!")
  router.push('/dashboard/teachers');
  };

  return (
    <Delete_UpdateContext.Provider value={{ handleDelete, teachers, setTeachers }}>
      {children}
    </Delete_UpdateContext.Provider>
  );
};

export const useDeleteUpdate = () => {
  const context = useContext(Delete_UpdateContext);
  if (!context) {
    throw new Error('useDeleteUpdate must be used within Delete_Add_Provider');
  }
  return context;
};
