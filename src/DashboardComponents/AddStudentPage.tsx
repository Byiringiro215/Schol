import React from 'react'
import { useAddStudent } from './DashboardProviders/DashboardProvider'
import { XMarkIcon } from '@heroicons/react/16/solid'
import Addstudent from './Addstudent'
interface AddStudentProps {
    category?: string;
  }
const AddStudentPage = (props: AddStudentProps) => {
   
    const {handleClick,showAddStudent}=useAddStudent();
  return (
    <div>
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex  justify-center">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl mx-4 relative h-[80%] mt-20">
            <button 
              onClick={handleClick}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
             <XMarkIcon className='rounded-full shadow-md h-6 w-6 cursor-pointer'/>
            </button>
            <Addstudent category={props.category} />
          </div>
        </div>
    </div>
  )
}

export default AddStudentPage
