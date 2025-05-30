import Sidebar from '@/DashboardComponents/Sidebar'
import TopHorizontalBar from '@/DashboardComponents/TopHorizontalBar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex gap-[12rem] w-full'>
      <div>
        <Sidebar/>
      </div>
      <div className='flex flex-col w-full'>
        <TopHorizontalBar/>
        <div>{children}</div>
        <div className="fixed bottom-4 right-4 z-10">
  <button className="h-[3rem] w-[7rem] bg-blue-600 text-white rounded-full shadow-lg">
    Support
  </button>
</div>

      </div>
    </div>
  )
}

export default layout
