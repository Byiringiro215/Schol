'use client'
import React from 'react'
import { MagnifyingGlassIcon, BellIcon, ChatBubbleLeftEllipsisIcon, ChevronDownIcon , UserCircleIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon, ArrowRightEndOnRectangleIcon, } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { ArrowBigRightIcon} from 'lucide-react';
import Link from 'next/link';
import Search from '../students/Search';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const TopHorizontalBar = () => {
    const [open, setOpen] = useState(false);
    const router=useRouter();
    
    function handleClick(){
      toast.success('Signing out...');
      router.push('/');
    }
  return (
    <div className='fixed w-full z-20 shadow-md flex justify-evenly items-center py-4 px-10 bg-white'>
      
    <Search/>
      
<div className='flex gap-5 items-center'>
<div className='flex gap-1'>
    <img src="/usa.jpg" alt="" />
    <select className='text-[#374557] text-sm'>
    <option value="en-US">English (US)</option>
  <option value="fr-FR">Français (FR)</option>
  <option value="es-ES">Español (ES)</option>

    </select>
    </div>
    <div className='h-7 w-7 py-1 px-[3px] cursor-pointer rounded-full border border-gray-200 text-gray-500 hover:bg-gray-200'>
        < ChatBubbleLeftEllipsisIcon className='h-5 '/>
    </div>
    <Link href='/dashboard/notifications' className='h-7 w-7 rounded-full cursor-pointer  border border-gray-200 text-gray-500 hover:bg-gray-200'>
        < BellIcon/>
        <div className='absolute h-2 w-2 rounded-full bg-blue-600 -mt-7 ml-5'></div>
    </Link>
    
    <div className="relative inline-block text-left">
    
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center    hover:bg-gray-50"
      >
        <img src="/userpp.png" alt="" className='h-8' />
        <ChevronDownIcon className="w-5 h-5 ml-2" />
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none">
          <div className="py-1">
            <div>
            <Link
              href="/dashboard/profile"
              className="flex gap-1 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
                 <UserCircleIcon className='h-5'/>
              Profile
             
            </Link>
            </div>
          <div>
          <Link
              href="/dashboard/settings"
              className="flex gap-1 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
                <Cog6ToothIcon className='h-5'/>
              Settings
              
            </Link>
          </div>
          
          </div>
          <div className="py-1">
            <button
              onClick={handleClick }
              className="flex gap-1  w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
                            <ArrowRightEndOnRectangleIcon className='h-5'/>
              Sign out

            </button>
          </div>
        </div>
      )}
    </div>
</div>

    </div>
  )
}

export default TopHorizontalBar
