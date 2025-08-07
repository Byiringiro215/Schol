'use client'
import Image from "next/image";
import Logo from "@/components/LandingPage/Logo";
import Navlinks from "@/components/LandingPage/navlinks";
import Getstartedbtn from "@/components/LandingPage/Getstartedbtn";
import Herosection from "@/components/LandingPage/Herosection";
import Schools from "@/components/LandingPage/Schools";
import Premiumpackage from "@/components/LandingPage/Premiumpackage";
import Features from "@/components/LandingPage/Features";
import Testimonies from "@/components/LandingPage/Testimonies";
import Accordion from "@/components/LandingPage/FQA";
import Subscribe from "@/components/LandingPage/Subscribe";
import Footer from "@/components/LandingPage/Footer";
import Sidebar from "@/components/Dashboard/Sidebar";
import HomepageSidebar from "@/components/LandingPage/HomepageSidebar";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { useSidebar } from "@/Providers/Providers";

export default function Home() {
  const { toggleSidebar } = useSidebar();

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="relative">
      <HomepageSidebar/>
      <div className="bg-[#100F57] min-h-[40rem] relative">
        <div className="bg-[#100F57] z-20 flex fixed justify-between items-center pt-[2rem] px-[3rem] py-2 w-full">
          <Logo/>
          <Navlinks/>
          <Getstartedbtn />
          <Menu 
            className="h-9 w-9 block text-white md:hidden"
            onClick={toggleSidebar}
          />
        </div>
        <Herosection/>
        <img 
          src="/dashboard.png" 
          alt="dashboard preview"  
          height={400} 
          width={945} 
          className="hidden md:block md:w-[800px] lg:w-[945px] md:h-[400px] md:mt-[4rem] md:ml-[1rem] lg:ml-[10rem]"
        />
      </div>
      
      <div className="relative z-10 bg-white">
        <Schools/>
        <Premiumpackage/>
        <Features/>
        <Testimonies/>
        <Accordion/>
        <Subscribe/>
        <Footer/>
      </div>
    </div>
  );
}
