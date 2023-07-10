import React, { createContext, useState } from "react";
import Image from "next/image";
import { memo } from "react";
import AdminSidebar from "./components/AdminSidebar";
import TopNavigation from "./components/TopNavigation";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { useRouter } from "next/router";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
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
          className={` ${
            router.asPath == "/calendar" ? "h-full" : null
          }     bg-mainBg bg-cover flex flex-wrap justify-center  `}
        >
          <div
            className={` ${console.log(router.asPath)} ${
              router.asPath != "/workflow/new-workflow" && "border-b-[1px]"
            } ${
              router.pathname.startsWith("/builder/form/craft") ||
              router.pathname.startsWith("/builder/survey/craft") ||
              router.pathname.startsWith("/builder/website/craft") ||
              router.pathname.startsWith("/builder/dashboard/playground")
                ? `hidden`
                : "w-full"
            }  w-full  bg-[#1F2228] py-1.5 border-gray-200  lg:sticky top-0 z-50`}
          >
            <TopNavigation />
          </div>

          <div
            className={` ${
              router.pathname.startsWith("/builder/form/craft") ||
              router.pathname.startsWith("/builder/survey/craft") ||
              router.pathname.startsWith("/builder/website/craft") ||
              router.pathname.startsWith("/builder/dashboard/playground")
                ? `hidden`
                : router.pathname.startsWith("/settings")
                ? `${
                    open
                      ? "w-full block lg:w-[5%]  2xl:w-[4%]"
                      : "hidden lg:w-[15%] lg:hidden "
                  }`
                : `${
                    open
                      ? "hidden lg:w-[15%] lg:block "
                      : "w-full block lg:w-[5%] 2xl:w-[4%]"
                  }`
            }   border-r-[1px] bg-white relative`}
          >
            <div
              onClick={() => setOpen(!open)}
              className={`  ${
                open
                  ? "left-48  2xl:left-[14.5%]  bottom-5 2xl:bottom-6 "
                  : "left-[4%]  2xl:left-12  bottom-[2%] 2xl:bottom-[3%] "
              } text-lg font-bold mr-3 fixed   z-50`}
            >
              <button className="bg-gray-200 shadow-md rounded-full h-5 w-5 p-1 flex justify-center items-center">
                {open ? (
                  <IoChevronBack className="h-4 w-4 text-gray-700" />
                ) : (
                  <IoChevronForward className="h-4 w-4 text-gray-700" />
                )}
              </button>
            </div>
            ​
            <AdminSidebar />
          </div>

          <div
            className={`   ${router.asPath == "/calendar" ? "h-[100vh]" : null} 
            
            ${
              router.asPath == "/builder/website/craft" ||
              router.asPath == "/builder/form/craft" ||
              router.asPath == "/builder/survey/craft" ||
              router.pathname.startsWith("/builder/dashboard/playground")
                ? "w-full h-[100vh]"
                : router.pathname.startsWith("/settings")
                ? `${value.open ? "lg:w-[95%]  2xl:w-[96%]" : " w-full"}`
                : `${
                    value.open
                      ? " w-full  lg:w-[85%]"
                      : "w-full lg:w-[95%]  2xl:w-[96%]"
                  }`
            } flex flex-col    justify-between items-start`}
          >
            <main
              className={` ${
                router.asPath == "/builder/website/craft" ||
                router.asPath == "/builder/form/craft" ||
                router.asPath == "/builder/survey/craft" ||
                router.pathname.startsWith("/builder/dashboard/playground")
                  ? "w-full h-[100vh]"
                  : router.pathname.startsWith("/settings")
                  ? "h-[100vh] lg:h-[90vh] 2xl:h-[100vh]"
                  : "h-[100vh] lg:h-[90vh] 2xl:h-screen"
              }  relative   overflow-y-scroll bg-bgGray scrollbar-hide w-full overflow-hidden`}
            >
              {children}
            </main>
          </div>
        </div>
      </GlobalContext.Provider>
    </>
  );
});
