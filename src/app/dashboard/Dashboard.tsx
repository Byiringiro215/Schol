'use client'

import { ArrowDownCircleIcon, ArrowUpCircleIcon, BarChart3, DotIcon, DotSquare, EllipsisVertical, Lock, OptionIcon, Pencil, Trash, User, Users } from 'lucide-react'
import React from 'react'
import { CardContents,schools } from '@/data/DashboardContents'
import { ArrowUpCircle } from 'lucide-react'
import Link from 'next/link'
import clsx from 'clsx'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('@/components/Dashboard/Chart'), { ssr: false })

const Dashboard = () => {
  const data = [
    { year: '2015', approved: 30, submitted: 28 },
    { year: '2016', approved: 35, submitted: 25 },
    { year: '2017', approved: 40, submitted: 38 },
    { year: '2018', approved: 32, submitted: 35 },
    { year: '2019', approved: 20, submitted: 30 },
    { year: '2020', approved: 45, submitted: 33 },
  ];
  return (
    <div className=' p-10 flex flex-col gap-8'>
      <div className='flex justify-between items-center'>
        <div>
            <h5 className='font-bold text-lg'>Welcome Back!</h5>
            <p className='text-sm text-[#848484]'>Enjoy World's No.1 Education Software.</p>
        </div>
        <button className='flex gap-2 text-sm border border-blue-500 text-blue-500 rounded-md text-center py-2 px-1 hover:bg-blue-50'>
            <User/>
            Add new Admission
        </button>
      </div>
      <div className='flex justify-between gap-4'>
        {CardContents.map((cardContent,index)=>(
          <div className='flex flex-col rounded-2xl border border-blue-500 py-4 px-8' key={index}>
            <div className='flex justify-between'>
              <span className='text-sm text-[#848484]'>{cardContent.title}</span>
              <span>{cardContent.icon}</span>
            </div>
            <span className='text-2xl font-semibold'>{cardContent.nofUsers}</span>
            <div className='flex justify-between text-[12px] gap-11'>
              <div className='flex gap-1'>
                {index !== 1 ? (
                  <div className='flex items-center gap-2 text-green-500'>
                    <span><ArrowUpCircleIcon/></span>
                    <span>{cardContent.percentage}</span>
                  </div>
                ) : (
                  <div className='flex items-center gap-2 text-red-500'>
                    <span><ArrowDownCircleIcon/></span>
                    <span>{cardContent.percentage}</span>
                  </div>
                )}
              </div>
              <Link href='#' className='text-blue-500 underline'>View Report</Link>
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-4'>
        <h6 className='font-bold text-lg'>Recent Joined Schools </h6>
        <div>
          <div className='w-full'>
            <div className='grid grid-cols-7 text-sm font-semibold mb-4'>
              <div>Logo</div>
              <div>School Admin</div>
              <div>School Name</div>
              <div>School Email</div>
              <div>Password</div>
              <div>Status</div>
              <div>Action</div>
            </div>
            <div className='flex flex-col gap-3'>
              {schools.map((school,index)=>(
                <div key={index} className='text-[12px] text-[#797D8C] border rounded-2xl p-2 grid grid-cols-7 items-center'>
                  <div>
                    <img src={'school.logo'} alt="school logo" className='rounded-full h-8 w-8 border bg-blue-200' />
                  </div>
                  <div ><span>{school.admin}</span></div>
                  <div className='text-black'><span>{school.name}</span></div>
                  <div><span>{school.email}</span></div>
                  <div><span>{school.password}</span></div>
                  <div className={clsx(
                    'text-[#43BE83]',
                    { 'text-red-500': school.status?.toLowerCase() === 'failed' },
                    { 'text-[#FF9900]': school.status?.toLowerCase() === 'pending'}
                  )}>
                    <span>{school.status}</span>
                  </div>
                  <div className='relative group'>
                    {<EllipsisVertical className='cursor-pointer'/>}
                    <div className={clsx(
                      'absolute hidden space-y-2 group-hover:block px-2 py-3 shadow-md rounded-md font-bold text-black z-10 bg-white',
                      {'-translate-y-28': index === schools.length - 1}
                    )}>
                      <div className='flex gap-1'><Pencil className='text-blue-600 h-4'/><span><Link href='#' className='text-font'>Edit</Link></span></div>
                      <div className='flex gap-1'><Trash className='text-red-600 h-4'/><span><Link href='#'>Delete</Link></span></div>
                      <div className='flex gap-1'><Lock className='text-red-600 h-4'/><span><Link href='#'>Lock</Link></span></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-between'>
        <div className='w-[60%]'>
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Claims Over the Years</h2>
            <div className="h-[300px]">
              <Chart data={data} />
            </div>
          </div>
        </div>
        <div className='bg-[#477EFC] text-white rounded-2xl flex flex-col justify-center gap-5 px-8 h-[15rem] w-[25rem]'>
          <div className='flex flex-col gap-1'>
            <span className=' font-semibold'>Schools Admin</span>
            <div className='flex justify-between items-center'>
              <span className='text-2xl font-bold'>120</span>
              <div className='flex relative'>
                <div className='h-12 w-12 bg-gray-200  border-4 border-purple-500 rounded-full relative z-[5]'></div>
                <div className='h-12 w-12 bg-gray-200 border-4 border-purple-500 rounded-full relative -ml-4 z-[4]'></div>
                <div className='h-12 w-12 bg-gray-200 border-4 border-purple-500 rounded-full relative -ml-4 z-[3]'></div>
                <div className='h-12 w-12 border-4 border-purple-500 rounded-full bg-gradient-to-r to-[#3E29D1] from-[#D736FF] text-[10px] p-2  relative -ml-2 z-[2]'>+100</div>
                <div className='h-12 w-12 bg-[#9E8CC741] border-2 p-1 border-yellow-500 rounded-full bg-gradient-to-r from-[#3E29D1] to-[#D736FF] relative ml-4 z-[1]'><Users/></div>
              </div>
            </div>
            <div className='flex flex-col'>
              <span className=' font-semibold'>Schools in total</span>
              <span className='font-bold text-2xl'>1.4K</span>
             
              <div className='flex  text-[12px]'>
              <span >No.of schools</span>
              <ArrowUpCircleIcon className='text-blue-700 bg-yellow-500 rounded-full ml-1 w-4 h-4'/>
              <span className='font-semibold'>+15%</span>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
