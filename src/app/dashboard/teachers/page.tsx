'use client'
import Filter_Searchbar from '@/DashboardComponents/Filter&Searchbar'
import React from 'react'
import DisplayTeachers from './DisplayTeachers'
import AddStudentPage from '@/DashboardComponents/AddStudentPage'
import { useAddStudent } from '@/DashboardComponents/DashboardProviders/DashboardProvider'
import Delete from './Delete'
import { ShowAddStudent_Teacher } from '@/DashboardComponents/DashboardProviders/ShowAddStudent_Teacher'
import { Delete_Add_Provider } from '@/DashboardComponents/DashboardProviders/Delete_Add_Provider'
import { UseSearchProvider } from '@/DashboardComponents/DashboardProviders/UseSearchProvider'
import { useDeleteUpdate } from '@/DashboardComponents/DashboardProviders/Delete_Add_Provider'

const TeachersContent = () => {
  const { showAddStudent, handleClick } = useAddStudent();
  const { teachers } = useDeleteUpdate();
  
  return (
    <UseSearchProvider teachers={teachers}>
      <ShowAddStudent_Teacher>
        <div className='mt-[10rem] px-5'>
          <div className='flex justify-between w-full my-3'>
            <h1 className='font-bold text-2xl'>Teachers</h1>
            <div className='flex gap-2 text-sm'>
              <button className='text-blue-500 rounded-md shadow-md w-[6rem] h-[2rem]'>Export CSV</button>
              <button 
                onClick={handleClick}
                className='text-white rounded-md shadow-md w-[6rem] h-[2rem] bg-blue-500'
              >Add Teacher</button>
            </div>
          </div>
          <Filter_Searchbar/>
          <DisplayTeachers/>
          {showAddStudent && (
            <AddStudentPage category='Add teacher'/>
          )}
        </div>
      </ShowAddStudent_Teacher>
    </UseSearchProvider>
  );
};

const Page = () => {
  return (
    <Delete_Add_Provider>
      <TeachersContent />
    </Delete_Add_Provider>
  );
};

export default Page;
