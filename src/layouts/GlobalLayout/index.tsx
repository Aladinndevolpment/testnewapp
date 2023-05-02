import React, { useState } from "react";
import Image from "next/image";
import { memo } from "react";
import AdminSidebar from "./components/AdminSidebar";
import TopNavigation from "./components/TopNavigation";
interface IAdminLayoutProps {
  children: React.ReactNode;
}

export default memo(function GlobalLayout({ children }: IAdminLayoutProps) {
  return (
    <>
      <div className="bg-[#f1f6fb] bg-cover flex flex-wrap justify-center h-[100vh]">
        {/* <div className="w-full lg:w-[18%] border-r-[1px]   bg-white    ">
          <AdminSidebar />
        </div> */}
        <div className="w-full  flex flex-col  h-[100vh] justify-between items-start ">
          {/* <div className="w-full  bg-white py-1.5 border-b-[1px]  border-gray-200   ">
            <TopNavigation />
          </div> */}
          <main className="h-[100vh] overflow-y-scroll bg-bgGray scrollbar-hide w-full pt-4 overflow-hidden">
            {children}
          </main>
        </div>
      </div>
      {/* <main className="h-[100vh] overflow-y-scroll bg-bgGray scrollbar-hide w-full pt-4 overflow-hidden">
        {children}
      </main> */}
    </>
  );
});
