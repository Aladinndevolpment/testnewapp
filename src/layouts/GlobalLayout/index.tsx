import React, { createContext, useState } from "react";
import Image from "next/image";
import { memo } from "react";
import AdminSidebar from "./components/AdminSidebar";
import TopNavigation from "./components/TopNavigation";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { useRouter } from "next/router";

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
  const router = useRouter();

  return (
    <>
      <GlobalContext.Provider value={value}>
        <div
          className={`${
            router.asPath == "/calendar" ? "h-full" : null
          } bg-mainBg bg-cover flex flex-wrap justify-center  `}
        >
          <div className="w-full  bg-[#1F2228] py-1.5 border-b-[1px]  border-gray-200  lg:sticky top-0 z-50">
            <TopNavigation />
          </div>
          <div
            className={`${
              open ? "hidden lg:w-[15%] lg:block " : "w-full block lg:hidden "
            }    border-r-[1px] bg-white`}
          >
            <AdminSidebar />
          </div>
          <div
            className={`${value.open ? " w-full  lg:w-[85%]" : "w-full "}  ${
              router.asPath == "/calendar" ? "h-[100vh]" : null
            } flex flex-col    justify-between items-start`}
          >
            <main
              className={` ${
                router.asPath == "/calendar"
                  ? "h-[100vh] lg:h-[90vh]"
                  : "h-[100vh] lg:h-[90vh]"
              }  relative   overflow-y-scroll bg-bgGray scrollbar-hide w-full overflow-hidden`}
            >
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
