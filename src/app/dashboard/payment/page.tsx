"use client";
import React, { useState } from "react";
import Filter from "@/components/ui/Filter";
import { Pencil, Trash, Lock,EllipsisVertical } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import { paymentsData } from "@/data/paymentsdata";
interface PaymentCardProps {
  title: string;
  value: string;
}

const paymentCardsData: PaymentCardProps[] = [
  {
    title: "Total Paid This Term",
    value: "$120,000",
  },
  {
    title: "Total Due This Term",
    value: "$30,000",
  },
  {
    title: "Pending Invoices",
    value: "50",
  },
  {
    title: "Payment Completion Rate",
    value: "80%",
  },
];

const page = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  return (
    <div className=" px-4">
      <h1 className="font-bold text-3xl my-3">Payments Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {paymentCardsData.map((card, index) => (
          <div
            className="rounded-lg bg-gray-100 border border-blue-500 px-4 py-5 flex flex-col gap-2 shadow-sm"
            key={index}
          >
            <h5 className="text-[#848484] text-sm">{card.title}</h5>
            <span className="font-semibold text-lg">{card.value}</span>
          </div>
        ))}
      </div>
<div className="flex justify-between items-center my-8">
  
      <div className="flex flex-wrap gap-3 items-center">
        <Filter
          label="by class"
          options={[
            { value: "s1", label: "S1" },
            { value: "s2", label: "S2" },
            { value: "s3", label: "S3" },
          ]}
          onChange={(value) => setSelectedClass(value)}
        />
        <Filter
          label="by term"
          options={[
            { value: "term1", label: "Term 1" },
            { value: "term2", label: "Term 2" },
            { value: "term3", label: "Term 3" },
          ]}
          onChange={(value) => setSelectedTerm(value)}
        />
        <Filter
          label="by status"
          options={[
            { value: "done", label: "Done" },
            { value: "pending", label: "Pending" },
            { value: "failed", label: "Failed" },
          ]}
          onChange={(value) => setSelectedStatus(value)}
        />
      </div>

               <button className='text-white bg-blue-500 p-2 rounded-md shadow-md  '>Add Payment</button>
</div>

      <div className="grid grid-cols-7 py-1 border-b border-gray-300 ">
        <div>Student</div>
        <div>Name</div>
        <div>Class</div>
        <div>Date</div>
        <div>Amount</div>
        <div>Status</div>
        <div>Action</div>
      </div>
      <div className="my-4">
        {paymentsData.map((payment, index) => (
          <div key={index} className="grid grid-cols-7 my-4 text-sm border-b border-gray-300">
            <div className="rounded-full">
              <img
                src={payment.image}
                alt="Student image"
                className="w-10 h-10 rounded-full border border-blue-200"
              />
            </div>
            <div>{payment.name}</div>
            <div>{payment.class}</div>
            <div>{payment.date}</div>
            <div>{payment.amount}</div>
            <div
            className={clsx(
              "font-semibold text-center h-6 px-6 w-fit py-auto rounded-full",
              {
                "bg-green-100 text-green-600": payment.status === "paid",
                "bg-yellow-100 text-yellow-600": payment.status === "pending",
                "bg-red-100 text-red-600": payment.status === "failed",
              }
            )}
            
            >{payment.status}</div>
             <div className='relative group'>
                    {<EllipsisVertical className='cursor-pointer'/>}
                    <div className={clsx(
                      'absolute hidden space-y-2 group-hover:block px-2 py-3 shadow-md rounded-md font-bold text-black z-10 bg-white',
                      {'-translate-y-28': index === paymentsData.length - 1}
                    )}>
                      <div className='flex gap-1'><Pencil className='text-blue-600 h-4'/><span><Link href='#' className='text-font'>Edit</Link></span></div>
                      <div className='flex gap-1'><Trash className='text-red-600 h-4'/><span><Link href='#'>Delete</Link></span></div>
                      <div className='flex gap-1'><Lock className='text-red-600 h-4'/><span><Link href='#'>Lock</Link></span></div>
                    </div>
                  </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
