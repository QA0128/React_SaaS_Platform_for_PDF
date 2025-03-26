'use client'
import { ReactNode, useState, useEffect } from "react";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import DashboardNavbar from "../shared/navbar";
import Sidebar from "../shared/sidebar";
import { useMediaQuery } from 'usehooks-ts';

export default function DashboardLayout({children}:{children: ReactNode}) {
  
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [isSidebarOpen, setIsSidebarOpen] = useState(isMobile);

  useEffect(() => {
  }, []);

  return (
    <div className="lg:laptop-view mobile-view w-full bg-[#FBFBFB] m-auto relative">
      <DashboardNavbar toggleSidebar={() => setIsSidebarOpen(prev => !prev)} ></DashboardNavbar>
      <div className="flex relative">
        <Sidebar isOpen={isSidebarOpen}></Sidebar>
        <main className="grow inset-shadow-sm p-8 mt-[56px] lg:ml-[256px]">{children}</main>
      </div>
    </div>
  );
}