import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'
interface Navlinks{
    link:string,
    href:string,
    isActive:boolean
}
const links:Navlinks[]=[
    {
    link:"Home",
    href:"/",
    isActive:true
},
{
    link:"Schools",
    href:"#schools",
    isActive:false
},
{
    link:"Features",
    href:"#features",
    isActive:false
},
{
    link:"Testimonies",
    href:"#testmonies",
    isActive:false
},
{
    link:"FQA",
    href:"#fqa",
    isActive:false
},
]
const Navlinks = () => {
  return (
    <div className='hidden  md:flex flex-between gap-[2.5rem]'>
      {
        links.map((link,index)=>(
            <Link href={link.href}
            key={index}
            className={clsx(
                'text-gray-400 text-[16px] font-semibold hover:text-white',
                {'text-blue-500 -underline-offset-1':link.isActive}
            )}
            >
                {link.link}
                </Link>
        ))
      }
    </div>
  )
}

export default Navlinks
