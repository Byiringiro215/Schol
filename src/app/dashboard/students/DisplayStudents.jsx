'use client'
import React, { useState } from 'react';
import { studentList } from './studentslist';
import { Phone } from 'lucide-react';
import { AcademicCapIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import NoStudent from './NoStudent';
import { useSearch } from '@/DashboardComponents/DashboardProviders/UseSearchProvider';

const DisplayStudents = () => {
  const [selectedStudent, setSelectedStudent] = useState(studentList[0]);
  const { filteredStudents } = useSearch();

  return (
    <div className="mt-10 flex flex-col md:flex-row gap-8 justify-start items-start">
      {filteredStudents.length > 0 ? (
        <>
          {/* Table */}
          <div className="overflow-x-auto flex-1">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left px-4 py-2">Name</th>
                  <th className="text-left px-4 py-2">Student ID</th>
                  <th className="text-left px-4 py-2">Email</th>
                  <th className="text-left px-4 py-2">Class</th>
                  <th className="text-left px-4 py-2">Gender</th>
                </tr>
              </thead>
              <tbody className="text-[#4F4F4F]">
                {filteredStudents.map((student) => (
                  <tr
                    key={student.id}
                    onClick={() => setSelectedStudent(student)}
                    className="even:bg-blue-100/20 cursor-pointer border-b text-sm"
                  >
                    <td className="flex items-center gap-2 py-2 px-4">
                      {student.userProfile}
                      <span>{student.name}</span>
                    </td>
                    <td className="py-2 px-4">{student.id}</td>
                    <td className="py-2 px-4">{student.email}</td>
                    <td className="py-2 px-4">{student.class}</td>
                    <td className="py-2 px-4 capitalize">{student.gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Student Info Card */}
          <div className="flex flex-col gap-5 border p-4 rounded-lg shadow-md w-full md:w-1/3 bg-white h-[30rem] sticky top-0">
            {selectedStudent ? (
              <>
                <div className="flex flex-col justify-center items-center">
                  <span>{selectedStudent.id}</span>
                  <div>{selectedStudent.userProfile}</div>
                  <span className="font-bold text-lg">{selectedStudent.name}</span>
                  <span className="text-sm text-gray-400">{selectedStudent.class}</span>
                </div>

                <div className="flex justify-center gap-2">
                  <div className="h-7 w-7 rounded-md bg-gray-500/50 text-gray-200 flex items-center justify-center">
                    <AcademicCapIcon className="h-5 w-5" />
                  </div>
                  <div className="h-7 w-7 rounded-md bg-gray-500/50 text-gray-200 flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="h-7 w-7 rounded-md bg-gray-500/50 text-gray-200 flex items-center justify-center">
                    <EnvelopeIcon className="h-5 w-5" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="font-bold">About</span>
                  <p className="text-sm text-gray-600">{selectedStudent.description}</p>
                </div>

                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <span className="font-bold">Age</span>
                    <span className="text-gray-900 text-sm">{selectedStudent.age}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold">Gender</span>
                    <span className="text-gray-900 text-sm">{selectedStudent.gender}</span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="font-bold text-sm">Students from the same class</span>
                  <ul className="list-inside text-sm">
                    {filteredStudents
                      .filter(
                        s => s.class === selectedStudent.class && s.id !== selectedStudent.id
                      )
                      .map(s => (
                        <li key={s.id} className="list-none relative group cursor-pointer w-fit">
                          <div className="relative group">
                            {s.userProfile}
                            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap">
                              {s.name} 
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </>
            ) : (
              <span>Select a student to view details</span>
            )}
          </div>
        </>
      ) : (
        <NoStudent category="students" />
      )}
    </div>
  );
};

export default DisplayStudents;
