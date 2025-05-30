'use client'
import React from 'react'
import { X } from 'lucide-react'
import { useViewTeacherProfile } from '@/DashboardComponents/DashboardProviders/ViewTeacherProfileProvider'
import { useRouter } from 'next/navigation'
import { useDeleteUpdate } from '@/DashboardComponents/DashboardProviders/Delete_Add_Provider'

interface Delete_UpdateProps {
  category?: string;
  colors?:string
}

const Delete = (props:Delete_UpdateProps) => {
  const { selectedTeacher, setSelectedTeacher, showDelete, setShowDelete} = useViewTeacherProfile();
  const router = useRouter();

  const {handleDelete}=useDeleteUpdate()

  const handleClose = () => {
    setShowDelete(false);
    setSelectedTeacher(null);
  };

  return (
    <div className='fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-center items-center'>
      <div className='bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4 relative'>
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className='h-6 w-6'/>
        </button>
        <div className='flex flex-col gap-3 mt-4'>
          <h6 className='text-sm text-[#000000B2]'>Are you sure you want to delete</h6>
          <span className='text-lg font-semibold text-[#000000B2]'>{selectedTeacher?.name}</span>
          <span className='text-sm text-[#000000B2]'>from Udemy's teachers list?</span>
          <div className='flex gap-3 mt-4'>
            <button
              onClick={handleClose}
              className='flex-1 py-2 rounded-md  bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors'
            >
              Cancel
            </button>
            <button
              onClick={() => {
              handleDelete(selectedTeacher.id);
              }}
              className={`${props.colors}`}
            >
              {props.category}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Delete
