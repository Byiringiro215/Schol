import React from 'react'

const features=[
    {
        feature:"Student Management",
        description:"Easily manage student profiles, attendance, grades, and progress reports."
    },
    {
        feature:"Teacher Tools",
        description:"Enable teachers to assign home work,track performance and streamline grading."
    },
    {
        feature:"Parent Portal",
        description:"Keep parents informed with updates on their child's attendance, grades, and school activities."
    },
    {
        feature:"Parent Po Timetable Automation",
        description:"Automatically generate timetables to save time and reduce errors."
    },
    {
        feature:"Free Management",
        description:"Simplify fee collection with automated reminders and secure online payment options."
    },
    {
        feature:"Fast,Secure & Easy",
        description:"We use advanced tools and technologies to build up this free school software, it is super fast, secure, reliable, and easy to use and manage."
    },
]

const Features = () => {
  return (
    <div className='py-[5rem] px-[1rem] md:px-[10rem]' id='features'>
        <h1 className='text-center font-bold text-3xl'>Features Of Our Software</h1>
      <div className='grid lg:grid-cols-2 mt-[5rem] gap-[10rem]'>
        <div className='flex flex-col gap-[1rem] w-full'>
            {
                features.map((feature,index)=>(
                    <div className='flex flex-col gap-[0.5rem] ' key={index}>
                        <h1 className='flex items-center text-lg md:text-2xl lg:text-lg font-bold'><img src="/listicon.jpg" alt="" />{feature.feature}</h1>
                        <p className='text-gray-400 font-semibold text-sm '>{feature.description}</p>
                    </div>
                ))
            }
        </div>
        <div className='lg:w-full'>
<img src="/phone.png" alt="" className='hidden lg:block' />
        </div>
      </div>
    </div>
  )
}

export default Features
