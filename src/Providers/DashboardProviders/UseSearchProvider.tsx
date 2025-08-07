'use client';

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect
} from 'react';
import { teacherslist } from '@/data/Teacherslist';
import { studentList } from '@/data/studentslist';

interface UseSearchContextProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  selectedGender: string;
  setSelectedGender: Dispatch<SetStateAction<string>>;
  handleSearch: (search: string) => void;
  filteredTeachers: typeof teacherslist;
  filteredStudents: typeof studentList;
}

const UseSearchContext = createContext<UseSearchContextProps | null>(null);

interface Props {
  children: ReactNode;
  teachers?: typeof teacherslist;
  students?: typeof studentList;
}

export const UseSearchProvider = ({ children, teachers = teacherslist, students = studentList }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGender, setSelectedGender] = useState('all');
  const [filteredTeachers, setFilteredTeachers] = useState(teachers);
  const [filteredStudents, setFilteredStudents] = useState(students);

  const handleSearch = (search: string) => {
    setSearchTerm(search);
    
    if (teachers) {
      const filteredTeachers = teachers.filter((teacher) => {
        const matchesSearch =
          teacher.name.toLowerCase().includes(search.toLowerCase()) ||
          teacher.email.toLowerCase().includes(search.toLowerCase());
        const matchesGender =
          selectedGender === 'all' || teacher.gender.toLowerCase() === selectedGender.toLowerCase();
        return matchesSearch && matchesGender;
      });
      setFilteredTeachers(filteredTeachers);
    }

    if (students) {
      const filteredStudents = students.filter((student) => {
        const matchesSearch =
          student.name.toLowerCase().includes(search.toLowerCase()) ||
          student.email.toLowerCase().includes(search.toLowerCase());
        const matchesGender =
          selectedGender === 'all' || student.gender.toLowerCase() === selectedGender.toLowerCase();
        return matchesSearch && matchesGender;
      });
      setFilteredStudents(filteredStudents);
    }
  };

  useEffect(() => {
    handleSearch(searchTerm);
  }, [teachers, students, selectedGender]);

  return (
    <UseSearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        selectedGender,
        setSelectedGender,
        handleSearch,
        filteredTeachers,
        filteredStudents
      }}
    >
      {children}
    </UseSearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(UseSearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a UseSearchProvider');
  }
  return context;
};
