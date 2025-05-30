import { BookA, HouseIcon, Users, Users2 } from 'lucide-react'
import React from 'react'

interface CardProps{
    title:String,
    nofUsers:String,
    percentage:String,
    icon:React.ReactNode
}

 export const CardContents:CardProps[]=[
    {
        title:"Total schools",
        nofUsers:"25.1K",
        percentage:"+15%",
        icon:<HouseIcon/>
    },
    {
        title:"Total students",
        nofUsers:"2,435K",
        percentage:"-1.9%",
        icon:<Users2/>
    },
    {
        title:"Total income",
        nofUsers:"3.5M",
        percentage:"+15%",
        icon:<BookA/>
    },
    {
        title:"Total users",
        nofUsers:"10.5M",
        percentage:"+15%",
        icon:<Users/>
    },
]

interface SchoolsProps{
    logo:String,
    admin:String,
    name:String,
    email:String,
    password:String,
    status:String
}

export const schools:SchoolsProps[]=[
    {
        logo: "https://logo.clearbit.com/harvard.edu",
        admin: "Alice Johnson",
        name: "Harvard University",
        email: "admin@harvard.edu",
        password: "harvard123",
        status: "approved"
      },
      {
        logo: "https://logo.clearbit.com/mit.edu",
        admin: "Bob Smith",
        name: "MIT",
        email: "admin@mit.edu",
        password: "mitadmin",
        status: "pending"
      },
      {
        logo: "https://logo.clearbit.com/stanford.edu",
        admin: "Carol Lee",
        name: "Stanford University",
        email: "admin@stanford.edu",
        password: "stanford2025",
        status: "pending"
      },
      {
        logo: "https://logo.clearbit.com/yale.edu",
        admin: "David Green",
        name: "Yale University",
        email: "admin@yale.edu",
        password: "yaleaccess",
        status: "approved"
      },
      {
        logo: "https://logo.clearbit.com/ox.ac.uk",
        admin: "Emma White",
        name: "University of Oxford",
        email: "admin@ox.ac.uk",
        password: "oxfordadmin",
        status: "approved"
      },
     
]