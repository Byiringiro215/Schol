'use client'
import { PlusCircleIcon } from 'lucide-react'
import React from 'react'
import { useRouter } from 'next/navigation'

interface AddStudentProps {
  category?: string;
}

const Addstudent = (props: AddStudentProps) => {
    const router=useRouter();
    function handleClick(){
router.push("/dashboard/students/#addstudent");
    }


    
  return (
    <div className='bg-gray-200' id='addstudent'>
<div className='absolute flex flex-col gap-4 justify-center p-10 bg-white'>
      <h3 className='text-[#4F4F4F] text-2xl font-bold'>{props.category}</h3>
      <div className='flex gap-3'>
        <button className='font-semibold text-[#4F4F4F] w-[5rem] shadow-sm h-[2rem]'>Manually</button>
        <button className='font-semibold text-blue-500 w-[7rem] shadow-sm h-[2rem]'>Import CSV</button>
      </div>
      <form action="" className='flex flex-col gap-2 w-full'>
        <div className='flex justify-evenly gap-3'>
        <div className='flex flex-col'>
            <label htmlFor="">Name</label>
<input type="text" className='rounded-lg w-full h-[3rem] border border-gray-200'/>

        </div>
        <select name="" id="" className='w-[7rem]'>
            <option value="year1">Year1</option>
            <option value="year2">Year2</option>
            <option value="year3">Year3</option>
          
        </select>
        <select name="" id="" className='w-[7rem]'>
            <option value="male">male</option>
            <option value="female">female</option>
           
        </select>
        </div>
<div className='flex justify-between'>
<div className='flex flex-col'>
            <label htmlFor="">Email address</label>
<input type="email" className='rounded-lg w-full h-[3rem] border border-gray-200'/>

        </div>
        <div className='flex flex-col'>
            <label htmlFor="">Phone number</label>
<input type="tel" className='rounded-lg w-full h-[3rem] border border-gray-200'/>

        </div>
</div>

<div className='flex flex-col'>
            <label htmlFor="">Password</label>
<input type="password" className='rounded-lg w-full h-[3rem] border border-gray-200'/>

        </div>

        <div className='flex gap-3 text-[12px] mt-3'>
            <button className='flex gap-1 items-center text-[#4F4F4F] w-[7rem] h-[2rem] shadow-sm'>
<PlusCircleIcon className=''/>
                Add another
            </button>
            <button className='text-white  rounded-md shadow-md w-[6rem] h-[2rem] bg-blue-500'>{props.category}</button>
        </div>
      </form>
    </div>
    </div>
    
  )
}

export default Addstudent
