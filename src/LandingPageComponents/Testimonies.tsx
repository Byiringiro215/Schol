'use client'
import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import { Navigation,Autoplay,Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const testimonies=[
    {
        image:"/man1.jpg",
        testimony:"The platform has made school management easy with streamlined attendance, financial, and real-time reporting",
        name:"JOHN NIYONSENGA",
        career:"Principal at Kigali International School"
    },
    {
        image:"/woma.jpg",
        testimony:"I can track my child's progress and communicate with teachers easily, providing greater transparency in education",
        name:"MARIE UWASE",
        career:"Parent at International School of Rwanda"
    },
    {
        image:"/woman.jpg",
        testimony:"The platform has made school management easy with streamlined attendance, financial, and real-time reporting",
        name:"JANE NIYONSENGA",
        career:"Principal at Kigali International School"
    },
]

const Testimonies = () => {
  return (
    <div className='py-[5rem] px-2 lg:px-[10rem]' id='testmonies'>
      <h1 className='text-center text-4xl font-bold mb-[5rem]'>Our Clients Say</h1>
      <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          
          slidesPerView={1}
        pagination={{ clickable: true }}
           autoplay={{ delay: 6000 }}
          loop
        >

         {
            testimonies.map((testimony,index)=>(
                < SwiperSlide key={index} >
           <div className='flex  gap-[1rem] border rounded-lg  w-full md:w-[40rem] md:ml-[5rem] lg:ml-[13rem]'> 
            <div className='p-1 rounded-lg'><img src={testimony.image} alt="Testimonee's image" className=' h-[10rem] w-[15rem] rounded-lg' /></div>
            <div className='flex flex-col gap-[1rem]'>
                <p className='text-gray-400 md:text-[20px]'>{testimony.testimony}</p>
                <span className='font-bold'>{testimony.name}</span>
                <span className='font-semibold'>{testimony.career}</span>
            </div>
           </div>
                </ SwiperSlide>
            ))
         }
                </Swiper>
    </div>
  )
}

export default Testimonies
