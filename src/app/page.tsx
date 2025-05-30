'use client'
import Image from "next/image";
import Logo from "../LandingPageComponents/Logo";
import Navlinks from "../LandingPageComponents/navlinks";
import Getstartedbtn from "../LandingPageComponents/Getstartedbtn";
import Herosection from "../LandingPageComponents/Herosection";
import Schools from "../LandingPageComponents/Schools";
import Premiumpackage from "../LandingPageComponents/Premiumpackage";
import Features from "../LandingPageComponents/Features";
import Testimonies from "../LandingPageComponents/Testimonies";
import Accordion from "../LandingPageComponents/FQA";
import Subscribe from "../LandingPageComponents/Subscribe";
import Footer from "../LandingPageComponents/Footer";
import Sidebar from "@/DashboardComponents/Sidebar";
import HomepageSidebar from "@/LandingPageComponents/HomepageSidebar";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { useSidebar } from "@/LandingPageComponents/Providers/Providers";

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
