import React from 'react'
import Getstartedbtn from './Getstartedbtn'

const Herosection = () => {
  return (
    <div className='flex flex-col gap-[2rem] text-center items-center  pt-[10rem]'>
      <div className='border border-gray-50 rounded-full bg-gray-50/50 py-1 px-3 text-amber-700'>All in platform for your school </div>
      <h1 className='text-4xl text-whi font-extrabold text-white'>Manage your school easily <br /> with Schol</h1>
      <p className='text-gray-400  text-[15px]'>Schol is a school management solution that offers a personalized portal to each type of user.</p>
      <Getstartedbtn/>
    </div>
  )
}

export default Herosection
