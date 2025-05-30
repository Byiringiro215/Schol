import clsx from 'clsx'
import React from 'react'

type Features={
    feature1:string,
    feature2:string,
    feature3:string,
    feature4:string,
}
interface PremiumProps{
    title:string,
    price:number,
    months:string,
    features:string[],

}

const premiumProps:PremiumProps[]=[
    {
    title:"BASIC PLAN",
    price:50,
    months:"3",
    features:[
       "Sit amet porttitor aget d",
       "Sit amet porttitor aget d",
       "Sit amet porttitor aget d",
       "Sit amet porttitor aget d"
    ]

},
{
    title:"STANDARD PLAN",
    price:160,
    months:"6",
    features:[
       "Sit amet porttitor aget d",
       "Sit amet porttitor aget d",
       "Sit amet porttitor aget d",
       "Sit amet porttitor aget d"
    ]

},
{
    title:"PREMIUM PLAN",
    price:250,
    months:"",
    features:[
       "Sit amet porttitor aget d",
       "Sit amet porttitor aget d",
       "Sit amet porttitor aget d",
       "Sit amet porttitor aget d"
    ]

}
]

const Premiumpackage = () => {
  return (
    <div className="bg-[#F3F3F3] py-20">
      <h5 className='font-bold text-3xl text-center mt-[5rem]'>Premium Price Packages</h5>  
<div className='grid md:grid-cols-2 md:px-20 lg:grid-cols-3  gap-[3rem] mt-[5rem] justify-center '>

{
  premiumProps.map((premium,index)=>(
      <div className={clsx(
          ' w-[19rem] h-[22rem] py-[1rem] px-[1rem]  flex flex-col gap-[1rem] rounded-md shadow-lg hover:scale-105 transition-all duration-700',
          {'lg:-translate-y-7 bg-blue-500/70 text-white':index===1},
          {'bg-white':index!==1}
      )} key={index} >
<h6 className='font-bold text-[20px] text-center'>{premium.title}</h6>
<div className='flex flex-col text-center'>
<span className='absolute ml-[5.5rem] font-extrabold'>$</span>
<span className='font-extrabold text-4xl'>{premium.price}</span>
<p className={clsx(
'text-gray-400 text-[13px]',
{'text-white':index===1}
)}>per {premium.months} months</p>

</div>
<ul className=''>
{
premium.features.map((feature,index)=>(
  <li className='flex items-center gap-1 ml-12 text-sm font-semibold' key={index}><img src="/Symbol.jpg" alt="" />{feature}</li>
))
}
</ul>
<button className={clsx(
'w-[10rem] h-[3rem] rounded-full font-semibold ml-12 border border-gray-800 cursor-pointer',
{'text-white bg-black':index===1}
)}>Explore More</button>
      </div>
  ))
}
</div>
    </div>
    
  )
}

export default Premiumpackage
