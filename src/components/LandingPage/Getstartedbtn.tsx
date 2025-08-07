import React from 'react'
import { Navigate } from 'react-router-dom'
import { useRouter } from 'next/navigation'
const Getstartedbtn = () => {
  const router=useRouter();
  function handleClick(){
    router.push('/login')
  }
  return (
    <div>
      <button 
      className=' text-gray-200 font-semibold flex items-center justify-center rounded-full w-[190px] bg-[#4880FF]  h-[60px] cursor-pointer'
      onClick={handleClick}
      >

        Get started
      </button>
    </div>
  )
}

export default Getstartedbtn
