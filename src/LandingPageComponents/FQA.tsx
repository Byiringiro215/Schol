'use client'
import React from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

import { useState } from 'react'
const AccordionItem= ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    
      <div className="border-b border-gray-300 py-4" >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h4 className="text-md font-semibold">{question}</h4>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </div>
      {isOpen && (
        <p className="mt-2 text-gray-600 text-sm">{answer}</p>
      )}
    </div>
    
  )
}

const Accordion = () => {
    const data = [
        {
          question: "What Is A School Management System?",
          answer: "A software platform designed to streamline and automate administrative, academic, and communication processes for schools."
        },
        {
          question: "Can The Software Be Customized For My School?",
          answer: "Yes, it can be tailored to meet your specific school's needs and workflows."
        },
        {
          question: "Does The System Support Multiple Languages?",
          answer: "Yes, the system supports multiple languages to cater to diverse user needs."
        },
        {
          question: "What Are The Key Features Of A School Management System?",
          answer: "Key features include student enrollment, grade tracking, attendance management, communication tools, and reporting."
        },
        {
          question: "Is The Software Secure?",
          answer: "Yes, the software uses encryption and other security measures to ensure data protection and privacy."
        },
        {
          question: "Can Parents Access The System?",
          answer: "Yes, parents can access the system to monitor their child's progress, attendance, and communicate with teachers."
        },
        {
          question: "How Does The System Improve School Efficiency?",
          answer: "By automating administrative tasks, reducing paperwork, and providing easy access to important information for teachers, students, and parents."
        }
      ];
      
  
    return (
        <div id='fqa'>
            <h1 className='text-center text-4xl font-bold my-5'>FQA</h1>
            <div className="max-w-xl mx-auto mt-10 p-4 bg-white shadow">
        {data.map((item, index) => (
          <AccordionItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
        </div>
     
    )
  }
  
export default Accordion
