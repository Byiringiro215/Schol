'use client'
import React from 'react';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const Page = () => {
    const router=useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const username = formData.get('username');
    const password = formData.get('password');

    if (username === 'admin' && password === 'admin123') {
       
       setTimeout(()=>{
        router.push('/dashboard');
       },500)
        toast.success('Logging in!');
    } else {
      toast.error('Invalid credentials!');
    }
  };
  return (
    <div className=' flex flex-col  items-center pt-20   '>
        <div className='shadow-md p-6'>
        <div className='flex flex-col gap-3 items-center'>
        <h5 className='font-bold text-2xl'>School Account Login</h5>
      <p className='text-sm text-gray-500'>Enter your school account details to login.</p>
      <div className='flex gap-3 text-sm'>
        <div className='rounded-full bg-blue-500 text-white px-4 py-7 cursor-pointer '>Admin</div>
        <div className='rounded-full bg-blue-500 text-white px-4 py-8 cursor-pointer'>Teacher</div>
        <div className='rounded-full bg-blue-500 text-white px-4 py-7 cursor-pointer'>Student</div>
      </div>
        </div>
      
      <form onSubmit={handleSubmit} className='flex flex-col items-center gap-5 mt-5 w-full'>
        <div className='flex flex-col'>
            <label htmlFor="username">Username</label>
            <input
  type="text"
  id="username"
     name="username"
  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor="password">Password</label>
            
<input
  type="password"
  id="password"
    name="password"
  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
        </div>
        <div className='flex  gap-10 text-[12px] md:text-sm'>
            <div className='flex gap-1'>
                <input type="checkbox" name="" id="" className='cursor-pointer' minLength={8} />
                <label htmlFor="">Remember Me</label>
            </div>
            <Link href='#' className='font-bold'>Forgot my password</Link>
        </div>
        <button className='font-bold bg-blue-500 text-white  w-[8rem] py-2 rounded-full text-center'>Login</button>
      </form>
        </div>
        
    </div>
  )
}

export default Page
