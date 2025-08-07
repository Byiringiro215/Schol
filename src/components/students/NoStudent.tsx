import React from 'react'

interface NoStudentProps {
  category: string;
}

function NoStudent({ category }: NoStudentProps) {
  return (
    <div className='flex flex-col justify-center  items-center text-center mt-10'>
      <img src="/nostudent.png" alt="" />
      <p className='text-[#4F4F4F] text-lg'>No {category} at this time</p>
      <p className='text-sm'>{category} will appear here after they enroll in your school.</p>
    </div>
  )
}

export default NoStudent
