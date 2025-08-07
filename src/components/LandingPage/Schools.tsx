import React from 'react'

const schools=[
    {school:"/school (1).jpg"},
    {school:"/school (2).jpg"},
    {school:"/school (3).jpg"},
    {school:"/school (4).jpg"},
    {school:"/school (5).jpg"},
    {school:"/school (6).jpg"},
    {school:"/school (7).jpg"},
    {school:"/school (8).jpg"},
]

const Schools = () => {
  return (
    <div id="schools" className="py-16">
      <h1 className="text-center text-4xl font-bold mb-10">Schools</h1>
      <div className="max-w-7xl mx-auto px-4">
        <h6 className="text-center font-bold text-3xl  ">30K+Schools use our product</h6>
        <div className='grid grid-cols-2 px-2 md:grid-cols-4  md:mt-20   md:px-[6rem]  gap-0'>
          {
            schools.map((school,index)=>(
              <div className='  rounded-md flex items-center justify-center h-[6rem] w-[10rem]' key={index}>
                <img src={school.school} className='w-full' alt="" />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Schools
