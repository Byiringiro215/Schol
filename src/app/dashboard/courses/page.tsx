'use client'

import React, { useState } from 'react'
import { Plus, Calendar, Clock } from 'lucide-react'
import Filter from '@/components/ui/Filter'
import { courses } from '@/data/courses'
import clsx from 'clsx'

const Page = () => {
  const [selectedClass, setSelectedClass] = useState("")
  const [selectedInstructor, setSelectedInstructor] = useState("")

  return (
    <div className=' px-4'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl font-bold'>Courses</h1>
        <button className='flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md'>
          <Plus />
          Add Course
        </button>
      </div>

      <div className='flex items-center gap-4 mb-6'>
        <Filter
          label="by class"
          options={[
            { value: "s1", label: "s1" },
            { value: "s2", label: "s2" },
            { value: "s3", label: "s3" },
          ]}
          onChange={(value) => setSelectedClass(value)}
        />
        <Filter
          label="by instructor"
          options={[
            { value: "alex", label: "alex" },
            { value: "aline", label: "aline" },
            { value: "john", label: "john" },
          ]}
          onChange={(value) => setSelectedInstructor(value)}
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {courses.map((course, index) => (
          <div key={index} className='p-4 bg-white rounded-lg shadow-md space-y-6'>
            <div className='w-full h-48 overflow-hidden rounded-md mb-4'>
              <img
                src={course.image}
                alt='course image'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='my-3'>
              <h3 className='text-lg font-semibold '>{course.title}</h3>
              <p className='text-sm text-gray-600'><span className='font-semibold'>Instructor:</span> {course.instructor}</p>
              <p className='text-sm text-gray-600'><span className='font-semibold'>Class level:</span> {course.classLevel}</p>
            </div>
            <div className='flex items-center justify-between text-xs mb-2'>
              <div className='flex items-center gap-2'>
                <Calendar size={14} />
                {course.duration}
              </div>
              <div className='flex items-center gap-2'>
                <Clock size={14} />
                {course.weeklyHours}
              </div>
            </div>
            <div className='flex items-center justify-between my-2'>
              <span className={clsx(
                'px-3 py-1 rounded-full text-xs font-medium capitalize',
                {
                  'bg-green-100 text-green-600': course.status === 'enrolled',
                  'bg-yellow-100 text-yellow-600': course.status === 'pending',
                  'bg-red-100 text-red-600': course.status === 'not enrolled',
                }
              )}>
                {course.status}
              </span>
              <div className='flex flex-col items-end'>
                <span className='text-xs'>{course.progress}%</span>
                <div className='w-24 bg-gray-200 rounded-full h-2'>
                  <div
                    className='bg-blue-500 h-2 rounded-full'
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
