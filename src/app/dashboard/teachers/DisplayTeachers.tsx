import React, { useState } from 'react'
import { Eye, Trash2,ExternalLink, Pencil, PencilOff, LucidePencilLine } from 'lucide-react';
import { teacherslist } from './Teacherslist';
import NoStudent from '../students/NoStudent';
import { useRouter } from 'next/navigation';
import { useViewTeacherProfile } from '@/DashboardComponents/DashboardProviders/ViewTeacherProfileProvider';
import Delete from './Delete';
import { useSearch } from '@/DashboardComponents/DashboardProviders/UseSearchProvider';

const DisplayTeachers = () => {
  const {handleView, selectedTeacher, showDelete, handleDelete, showUpdate, handleUpdate} = useViewTeacherProfile();
  const {filteredTeachers}=useSearch()


  return (
    <div className='mt-10'>
      {filteredTeachers.length > 0 ?(
        <table>
          <thead className='font-bold '>
            <tr>
              <th className='px-10 text-start'>Name</th>
              <th className='text-start'>Subject</th>
              <th className='px-8'>Class</th>
              <th>Email address</th>
              <th className='px-10'>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTeachers.map((teacher)=>(
              <tr 
                key={teacher.id}
                className='even:bg-blue-100/20  text-sm'
               
              >
                <td className='flex items-center gap-1 px-10 py-3'>
                  <img
                    src={teacher.teacherProfile} 
                    alt="teacher's profile picture"
                    className='rounded-full h-10'
                  /> 
                  <span>{teacher.name}</span> 
                </td>
                <td>{teacher.subject}</td>
                <td className='px-8'>{teacher.class}</td>
                <td>{teacher.email}</td>
                <td className='capitalize px-10'>{teacher.gender}</td>
                <td className='flex gap-3'>
                  <Eye
                   onClick={()=>handleView(teacher.id, teacher)}
                  className="text-black w-5 h-5 cursor-pointer"
                   />
                  <Pencil 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleUpdate(teacher);
                    }}
                    className="text-blue-600 w-5 h-5 cursor-pointer" 
                  />
                  <Trash2
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(teacher);
                    }}
                    className="text-red-600 w-5 h-5 cursor-pointer" 
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ):<NoStudent category='teachers' />}
      
      {showDelete && selectedTeacher && (
        <Delete category='Delete' colors='bg-red-500 hover:bg-red-600 flex-1 py-2 rounded-md   text-white  transition-colors'/>
      )}
      {showUpdate && selectedTeacher && (
        <Delete category='Update' colors='bg-blue-500 hover:bg-blue-600 flex-1 py-2 rounded-md   text-white  transition-colors'/>
      )}
    </div>
  )
}

export default DisplayTeachers
