import React from 'react'

const Subscribe = () => {
  return (
    <div className='bg-[#F4F4F4] flex flex-col gap-[2rem]  text-center py-[6rem] mt-[5rem]'>
      <h1 className='text-4xl font-bold'>Please Subscribe for Updates <br /> and Exclusive Offers!</h1>
<p className=' text-gray-400'>Stay Updated! Subscribe to Our Newsletter for the Latest School Updates and Exclusive <br /> Offers - Dont't Miss Out this kinda long please</p>

<form action="" className='flex justify-center gap-[2rem]'>
    <input type="email" placeholder='Your Email' className='w-[20rem] h-[3rem] rounded-md bg-blue-500 p-4 text-gray-200 placeholder:text-gray-100 text-[13px]  focus:outline-blue-900 '/>
    <button type="submit" className='w-[8rem] cursor-pointer rounded-md text-center text-white bg-black'>Subscribe</button>
</form>
    </div>
  )
}

export default Subscribe
