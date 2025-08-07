'use client'
import React from 'react'
import clsx from 'clsx'
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useSidebar } from '@/Providers/Providers'; 
interface SidebarLinks{
    link:string,
    href:string,
    isActive?:boolean
}

const links:SidebarLinks[]=[
    {
        link:"Home",
        href:"/",
        isActive:true
    },{
        link:"Schools",
        href:"#schools",
        isActive:false
    },{
        link:"Features",
        href:"#features",
        isActive:false
    },{
        link:"Testimonies",
        href:"#testimonies",
        isActive:false
    },{
        link:"FQA",
        href:"#fqa",
        isActive:false
    },
    {
        link:"Get started",
        href:"#",
        isActive:false
    },
]

const HomepageSidebar = () => {
    const { showSidebar, toggleSidebar } = useSidebar();
    
  return (<div
    className={clsx(
        'fixed top-0 left-0 px-3 py-5 bg-blue-950/30 backdrop-blur-lg w-[15rem] h-screen gap-[1rem] transition-transform duration-300 z-50',
        {
            'translate-x-0': showSidebar,
            '-translate-x-full': !showSidebar,
        }
      )}
    >
      <button onClick={toggleSidebar}>
        <XMarkIcon className="h-[30px] w-[30px] ml-[12rem] cursor-pointer text-white hover:bg-gray-700 rounded-full" />
      </button>
      {links.map((link, index) => {
        return (
            <div
              key={index}
              className="bg-blue-700/40 rounded-md h-[3rem] px-4 py-3 cursor-pointer hover:text-blue-500 my-5"
            >
              <Link href={link.href}  className="text-white hover:text-green-300">
                {link.link}
              </Link>
            </div>
          )})}
      </div>
  )
}

export default HomepageSidebar
