import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const footerLinks = [
  {
    section: "Quick Links",
    links: [
      { link: "Home", href: "#" },
      { link: "Pricing", href: "#" },
      { link: "Use Cases", href: "#" },
      { link: "Location", href: "#" },
      { link: "FAQ", href: "#" },
      { link: "Company", href: "#" }
    ]
  },
  {
    section: "Terms & Conditions",
    links: [
      { link: "Terms", href: "#" },
      { link: "Conditions", href: "#" },
      { link: "Privacy", href: "#" },
      { link: "Security", href: "#" }
    ]
  },
];

const date=new Date();
const year=date.getFullYear();

const Footer = () => {
  return (
    <footer className='bg-[#100F57] py-20 px-5  text-white'>
      <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-[8rem]'>
      <div className='flex flex-col gap-4'>
        <Logo />
        <p className='text-gray-400'>
          Schol is the world's best and #1 ranked free online school management software. Our school management platform has more features than any other solution on the market.
        </p>
        <div className='flex gap-3'>
          <div className='h-8 w-8 rounded-full bg-blue-500 p-1 text-white cursor-pointer'><Facebook/></div>
          <div className='h-8 w-8 rounded-full bg-blue-500 p-1 text-white cursor-pointer'><Twitter/></div>
          <div className='h-8 w-8 rounded-full bg-blue-500 p-1 text-white cursor-pointer'><Instagram/></div>
          <div className='h-8 w-8 rounded-full bg-blue-500 p-1 text-white cursor-pointer'><Linkedin/></div>
        </div>
      </div>

      
      <div className=' grid grid-cols-1 sm:grid-cols-2  gap-[2rem]'>
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h5 className='font-bold mb-4'>{section.section}</h5>
            <div className='flex flex-col gap-2'>
              {section.links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className='text-gray-400 text-sm hover:text-blue-500 transition-colors'
                >
                  {link.link}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

<div className='flex flex-col gap-[2rem]'>
    <h5 className='text-white font-bold'>Newletter</h5>
    <p className='text-gray-400'>Stay Updated With The Latest Trends And Products - Don't Miss Out!</p>
    <form action="">
        <div className='w-[30rem] h-[4rem] flex justify-between items-center px-3 rounded-full bg-white'>
            <input type="text" placeholder='Subscribe To Our Newsletter' className='h-full w-full rounded-full  focus:outline-none focus:ring-0 text-gray-500 placeholder:text-gray-400' />
            <button type="submit" className='h-[3.1rem] w-[8rem] text-center text-white bg-blue-500 rounded-full font-semibold'>Get Started</button>
        </div>
    </form>
</div>
      </div>
      

<div>
    <p className='text-gray-400 text-center mt-[3rem]'>@{year} Schol. &copy;Copyright All Rights Reserved.</p>
</div>
    </footer>
  );
};

export default Footer;
