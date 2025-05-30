'use client'
import Filter_Searchbar from '@/DashboardComponents/Filter&Searchbar'
import React, { useEffect } from 'react'
import { useViewTeacherProfile } from '@/DashboardComponents/DashboardProviders/ViewTeacherProfileProvider'
import { ArrowLeft, Phone } from 'lucide-react';
import { AcademicCapIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { teacherslist } from '../Teacherslist';
import { useParams } from 'next/navigation';
import Link from 'next/link';
const page = () => {
    const { selectedTeacher, setSelectedTeacher } = useViewTeacherProfile();
    const params = useParams();
    
    useEffect(() => {
        const teacher = teacherslist.find(t => t.id === params.id);
        if (teacher) {
            setSelectedTeacher(teacher);
        }
    }, [params.id, setSelectedTeacher]);

    if (!selectedTeacher) {
        return <div className='pt-[17rem]'>
         Loading...
        </div>;
    }

    return (
        <div className='pt-[10rem]'>
      <Filter_Searchbar/>
      <div>
        <Link
         href="/dashboard/teachers"
         className='flex w-fit ml-2 mt-3 rounded-md bg-gray-200/50 p-1'
         >
            <ArrowLeft/>
            Back
            </Link>
      </div>
      <div className='flex gap-10 mt-10 mx-auto w-fit px-5 py-10 shadow-sm '>
<div className='flex flex-col gap-5 items-center'>
    <div className=''>
    <img
     src={selectedTeacher.teacherProfile}
      alt={`${selectedTeacher.name} 's image`} 
      className='rounded-full h-[10rem]'
      />
    </div>
 <div className='text-center flex flex-col gap-2'>
    <span className='font-bold'>{selectedTeacher.name}</span>
    <span className='text-sm text-[#A7A7A7]'>{selectedTeacher.subject} teacher</span>
 </div>
 <div className="flex justify-center gap-2">
                  <div className="h-7 w-7 rounded-md bg-gray-500/50 text-gray-200 flex items-center justify-center">
                    <AcademicCapIcon className="h-5 w-5" />
                  </div>
                  <div className="h-7 w-7 rounded-md bg-gray-500/50 text-gray-200 flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="h-7 w-7 rounded-md bg-gray-500/50 text-gray-200 flex items-center justify-center">
                    <EnvelopeIcon className="h-5 w-5" />
                  </div>
                </div>

</div>

<div className='flex flex-col gap-5 justify-start'>
<h5 className='font-bold'>About</h5>
<p className='text-sm text-[#A7A7A7] text-start w-[30rem] text-wrap'>{selectedTeacher.description}</p>
<div className="flex justify-between">
                  <div className="flex flex-col">
                    <span className="font-bold">Age</span>
                    <span className="text-gray-900 text-sm">{selectedTeacher.age}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold">Gender</span>
                    <span className="text-gray-900 text-sm">{selectedTeacher.gender}</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm">Teachers from the same class</span>
                  <ul className=" list-inside text-sm">
                    {teacherslist
                      .filter(
                        s => s.class === selectedTeacher.class && s.id !== selectedTeacher.id
                      )
                      .map(s => (
                        <li key={s.id} className="list-none relative group cursor-pointer w-fit">
      <div className="relative group">
        <img 
        src={s.teacherProfile}
         alt="" 
         className='h-10 rounded-full'
         />
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap">
          {s.name} 
        </div>
      </div>
    </li>
                      ))}
                  </ul>
                </div>
</div>

      </div>
    </div>
  )
}

export default page
