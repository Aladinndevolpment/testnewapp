import React, { createContext, useState } from "react";
import Image from "next/image";
import { memo } from "react";
import AdminSidebar from "./components/AdminSidebar";
import TopNavigation from "./components/TopNavigation";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

interface IAdminLayoutProps {
  children: React.ReactNode;
}

export const GlobalContext = createContext({
  title: "en",
  setTitle: (string: string) => {},
  open: true,
  setOpen: (boolean: boolean) => {},
});

export default memo(function GlobalLayout({ children }: IAdminLayoutProps) {
  const [title, setTitle] = useState("Dashboard");
  const [open, setOpen] = useState(true);
  const value: any = { title, setTitle, open, setOpen };

  return (
    <>
      <GlobalContext.Provider value={value}>
        <div className="bg-[#f1f6fb] bg-cover flex flex-wrap justify-center h-[100vh]">
          <div className="w-full  bg-[#1f2228] py-1.5 border-b-[1px]  border-gray-200   ">
            <TopNavigation />
          </div>
          <div
            className={`${
              open ? "w-full bg-black md:w-[15%]" : "hidden"
            }    border-r-[1px] bg-white`}
          >
            <AdminSidebar />
          </div>
          <div
            className={`${
              value.open ? " w-full  md:w-[85%]" : "w-full "
            }   flex flex-col  h-[100vh] justify-between items-start`}
          >
            <main className="relative h-[90vh] overflow-y-scroll bg-bgGray scrollbar-hide w-full overflow-hidden">
              {children}
            </main>
          </div>
        </div>
        {/* <main className="h-[100vh] overflow-y-scroll bg-bgGray scrollbar-hide w-full pt-4 overflow-hidden">
        {children}
      </main> */}
      </GlobalContext.Provider>
    </>
  );
});
