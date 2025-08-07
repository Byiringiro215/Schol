import Breadcrumbs from '@/components/Dashboard/Breadcrumbs'
import { ArrowLeftIcon } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className=' px-8'>
      <div className='flex items-center pl-5 bg-[#D9D9D9] rounded-full w-[30rem] h-[3rem]'>
      <p className='flex items-center cursor-pointer'>
        <ArrowLeftIcon className='h-4'/>
       <span className='font-bold mr-1'> Settings </span> |  School Profile</p>
      </div>
      <div className='flex  mt-12'>
        <div className='flex flex-col gap-4 w-full '>
<h1 className='font-bold text-2xl'>Customise your school</h1>
<div className='flex gap-1 items-center'>
    <img src="/rssb.png" alt="" />
    <div className='flex flex-col '>
        <div className='flex gap-2'>
            <input type="file"  className='w-[6rem] bg-blue-500 text-white' />
<button className='w-[6rem] bg-[#45424296]'>Delete Logo</button>
        </div>
<p className='text-sm'>This will help to Upload</p>
    </div>
</div>
<div>
    <form action="" className='flex w-full gap-3 px-3 justify-between'>
        <div className='flex flex-col gap-3 w-full'>
        <div className='flex flex-col'>
            <label htmlFor="">School name*</label>
<input type="text" className='rounded-lg w-full h-[3rem] border border-gray-200'/>

        </div>
        <div className='flex flex-col'>
            <label htmlFor="">School motto*</label>
<input type="text"  className='rounded-lg w-full h-[3rem] border border-gray-200' />

        </div>
        <div className='flex flex-col'>
            <label htmlFor="">Country*</label>
<input type="text"  className='rounded-lg w-full h-[3rem] border border-gray-200'/>

        </div>
        </div>
        
        <div className='flex flex-col gap-3 w-full'>
        <div className='flex flex-col'>
            <label htmlFor="">Phone Number*</label>
<input type="text"  className='rounded-lg w-full h-[3rem] border border-gray-200'/>

        </div>
        <div className='flex flex-col'>
            <label htmlFor="">School address*</label>
<input type="text"  className='rounded-lg w-full h-[3rem] border border-gray-200'/>

        </div>
        <div className='flex flex-col'>
            <label htmlFor="">website*</label>
<input type="text"  className='rounded-lg w-full h-[3rem] border border-gray-200'/>

        </div>
        </div>
    </form>
</div>
        </div>

<div className='bg-blue-500 text-white rounded-lg w-[55%] h-[30rem] p-3 '>
    <div className='flex flex-col justify-center items-center'>
    <div className='h-30 w-30 rounded-full bg-white flex justify-center items-center font-extrabold text-3xl text-black'>Logo</div>
    <div className='flex flex-col gap-2'>
    <span>School Name here</span>
    <span className='text-sm text-center'>school headline</span>
    </div>
   
    </div>
    <div className='flex flex-col gap-2'>
        <h5 className='font-bold text-[20px]'>School Info</h5>
        <hr className='w-full text-white' />
        <div className='flex flex-col gap-1'>
            <span className='text-xl'>Address</span>
            <span className='text-sm'>Udemy Academy</span>
            <hr className='w-full text-white' />
        </div>
        <div className='flex flex-col gap-2'>
            <span className='text-xl'>Address</span>
            <span className='text-sm'>+2089 645 3434</span>
            <hr className='w-full text-white' />
        </div>
        <div className='flex flex-col gap-2'>
            <span className='text-xl'>Country</span>
            <span className='text-sm'>Uganda</span>
            <hr className='w-full text-white' />
        </div>
    </div>

</div>

      </div>
    </div>
  )
}

export default page
