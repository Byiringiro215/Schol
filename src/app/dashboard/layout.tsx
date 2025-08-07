'use client'
import Sidebar from '@/components/Dashboard/Sidebar'
import TopHorizontalBar from '@/components/Dashboard/TopHorizontalBar'
import React from 'react'
import { useRouter } from 'next/navigation'

const layout = ({children}:{children:React.ReactNode}) => {
  const router = useRouter()
  return (
    <div className='flex gap-[12rem] w-full'>
      <div>
        <Sidebar/>
      </div>
      <div className='flex flex-col w-full'>
        <TopHorizontalBar/>
        <div className='pt-24'>{children}</div>
        <div className="fixed bottom-4 right-4 z-10">
  <button 
  onClick={()=>router.push('/dashboard/help')}
  className="h-[3rem] w-[7rem] bg-blue-600 text-white rounded-full shadow-lg">
    Support
  </button>
</div>

      </div>
    </div>
  )
}

export default layout
