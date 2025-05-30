'use client'
import React, { useState } from 'react'
import SidebarLogo from './SidebarLogo'
import Link from 'next/link'
import { LayoutDashboard, Users, UserCheck, CreditCard, BookOpen, Settings } from 'lucide-react';
import clsx from 'clsx';

type linkList = {
  link: string,
  href: string,
  icon: React.ReactNode,
  isActive?:boolean
}

const links: linkList[] = [
  { link: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard />,isActive:true },
  { link: 'Students', href: '/dashboard/students', icon: <Users />,isActive:false },
  { link: 'Teachers', href: '/dashboard/teachers', icon: <UserCheck />,isActive:false },
  { link: 'Payment', href: '#', icon: <CreditCard />,isActive:false },
  { link: 'Courses', href: '#', icon: <BookOpen />,isActive:false },
  { link: 'Settings', href: '/dashboard/settings', icon: <Settings />,isActive:false },
]

const Sidebar = () => {
  const [isActive,setIsActive]=useState(false)
  function handleActivation(){
    setIsActive(true);
  }
  return (
    <div className='fixed overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-blue-200 hover:scrollbar-thumb-blue-700 top-0 left-0 h-screen w-[12rem]  px-2 bg-blue-500 flex flex-col'>
      
      <SidebarLogo />
      <div className='flex-1 p-3 flex flex-col pt-[7rem]'>
       
        <div className='flex flex-col gap-5 mt-10'>
          {
            links.map((link, index) => (
              <Link href={link.href} key={index}
            onClick={handleActivation}
                className={clsx(
                  'text-white font-bold font-sm flex items-center gap-3 rounded-md px-1 hover:text-blue-600 hover:bg-white',
                  
                 
                )}
                >
                {link.icon}
                <span className='  py-1'>{link.link}</span>
              </Link>
            ))
          }
        </div>

        <div className='w-[10rem] h-[12rem] my-9 pb-5 rounded-xl bg-white flex flex-col gap-2 text-center -ml-2'>
          <img src="/upgrade.png" alt="" className='w-full h-[5rem] rounded-t-xl' />
          <span className='font-bold mt-5 text-sm text-[#263156]'>Want to Upgrade</span>
          <button className='bg-orange-600/70 w-[80%] h-7 ml-4 rounded-full cursor-pointer text-sm text-white text-center'>Upgrade Now</button>
        </div>
      </div>

     
      <div className='p-3 '>
        <hr className='text-gray-200 h-2 w-full' />
        
        <div className='flex gap-3 items-center py-5'>
          <img src="/userpp.png" alt="User Profile"  className='rounded-full w-9 h-9' />
          <div className='flex flex-col leading-tight'>
            <span className='text-white font-semibold text-sm'>Anna Karin</span>
            <span className='text-[#263156] text-[12px]'>annakarin@gmail.com</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sidebar
