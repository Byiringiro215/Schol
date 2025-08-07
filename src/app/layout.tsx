import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Potta_One } from "next/font/google";
import "./globals.css";
import { SideBarProvider } from "@/Providers/Providers";
import { Toaster } from "react-hot-toast";
import { AddStudentProvider } from "@/Providers/DashboardProviders/DashboardProvider";
import { ViewTeacherProfileProvider } from "@/Providers/DashboardProviders/ViewTeacherProfileProvider";
import { UseSearchProvider } from "@/Providers/DashboardProviders/UseSearchProvider";
import { Delete_Add_Provider } from "@/Providers/DashboardProviders/Delete_Add_Provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  style: ['normal'],                  
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Schol",
  description: "A schools management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Toaster  position="top-right" reverseOrder={false} />
        <SideBarProvider>
        <UseSearchProvider>
        <ViewTeacherProfileProvider>
        <AddStudentProvider>
         <Delete_Add_Provider>
            {children}
         </Delete_Add_Provider>
        </AddStudentProvider>
        </ViewTeacherProfileProvider>
        </UseSearchProvider>
        </SideBarProvider>
      
      </body>
    </html>
  );
}
