'use client'
import React, { useState } from 'react'
import NoStudent from '@/components/students/NoStudent'
import Addstudent from '../../../components/Dashboard/Addstudent'
import { useAddStudent } from '@/Providers/DashboardProviders/DashboardProvider'

import DisplayStudents from '@/components/students/DisplayStudents'
import Search from '@/components/students/Search'
import Filter_Searchbar from '@/components/Dashboard/Filter&Searchbar'
import AddStudentPage from '@/components/Dashboard/AddStudentPage'

const page = () => {
  const { showAddStudent, handleClick } = useAddStudent();

  return (
    <div className=' px-5'>
      <div className='flex justify-between w-full my-3'>
        <h1 className='font-bold text-2xl'>Students</h1>
        <div className='flex gap-2 text-sm'>
           <button className='text-blue-500 rounded-md shadow-md w-[6rem] h-[2rem]'>Export CSV</button>
           <button className='text-white rounded-md shadow-md w-[6rem] h-[2rem] bg-blue-500' onClick={handleClick}>Add Student</button>
        </div>
      </div>
     <Filter_Searchbar/>
     
      <DisplayStudents/>
      {showAddStudent && (
      <AddStudentPage  category='Add student'/>
      )}
    </div>
  )
}

export default page
