import React from 'react'
import Breadcrumbs from '@/DashboardComponents/Breadcrumbs'
import {
    UserPlusIcon,
    BuildingLibraryIcon,
    UserGroupIcon,
    AcademicCapIcon,
  } from '@heroicons/react/24/outline';
import Dashboard from './Dashboard';
interface CapabilitiesProps{
    icon?:React.ReactNode,
    capability:string,
    description:string,

}

const capabalities:CapabilitiesProps[]=[
    {
        icon: <UserPlusIcon/>,
        capability: 'Add other admins',
        description: 'Grant admin-level access to other trusted users in the system.',
      },
      {
        icon: <BuildingLibraryIcon/>,
        capability: 'Add classes',
        description: 'Create and manage class groups and assign them to teachers.',
      },
      {
        icon: <UserGroupIcon/>,
        capability: 'Add teachers',
        description: 'Register and manage teacher profiles for different subjects.',
      },
      {
        icon: <AcademicCapIcon  />,
        capability: 'Add students',
        description: 'Enroll students into the platform and assign them to classes.',
      },
      
]

const page = () => {
  return (
//     <div className='px-10 pt-[10rem] '>
//         <div className='flex flex-col gap-3'>
//         <h1 className='text-3xl font-semibold text-[#4F4F4F]'>Welcome to your dashboard. Udemy school</h1>
//         <div className='bg-gray-50 rounded-full h-[2rem] px-3 w-[20rem] '>
//         <Breadcrumbs
//         breadcrumbs={[
//           { label: 'Schol', href: '#' },{label: 'udemy',href: '#'},{label:'dashboard',href:"#",active: true}
//         ]}
//       />
//         </div>
      
//         </div>
//         <div className='w-[60%] flex flex-col gap-2 mt-10 ml-5'>
//             {capabalities.map((capability, index) => (
//                 <div className='h-[5rem] flex justify-between  items-center ' key={index}>
//  <div key={index} className='flex gap-2'> 
//                     <span className="w-6 h-6 rounded-md bg-[#EFF3FA]  font-extrabold text-black">{capability.icon}</span>
//                     <div>
//                         <h5 className='text-[#4F4F4F] font-semibold text-lg'>{capability.capability}</h5>
//                         <p className='text-[16px]'>{capability.description}</p>
//                     </div>
//                 </div>
//                 <button className='bg-blue-600 text-center rounded-md w-[4rem] h-[2rem] text-white'>Add</button>
//                 </div>
               
//             ))}
//         </div>
    
      
//     </div>
<Dashboard/>
  )
}

export default page
