import React from 'react'

const SidebarLogo = () => {
  return (
    <div className=' fixed flex flex-col gap-4 justify-between items-center w-[10rem] bg-blue-500' >
      <img src="/logo.jpg" alt="Logo" className='rounded-full w-[3rem] cursor-pointer'  />
      <span className='font-semibold text-sm text-white'>Udemy Inter. school</span>
      <hr  className='text-gray-200 h-2 w-full ml-2'/>
    </div>
  )
}

export default SidebarLogo
