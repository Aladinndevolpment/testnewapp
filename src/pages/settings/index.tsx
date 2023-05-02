import React from "react";

export default function Settings() {
  return (
    <>
      <div className="bg-primaryBGThemeColor bg-cover flex flex-wrap justify-center h-[100vh]">
        <div className="w-full lg:w-[18%] border-r-[1px]   bg-white    ">
          {/* <AdminSidebar /> */}
        </div>
        <div className="w-full lg:w-[82%] flex flex-col  h-[100vh] justify-between items-start ">
          <div className="w-full  bg-white py-1.5 border-b-[1px]  border-gray-200   ">
            {/* <TopNavigation /> */}
          </div>
          <main className="h-[100vh] overflow-y-scroll bg-bgGray scrollbar-hide w-full pt-4 overflow-hidden">
            {/* {children} */}
          </main>
        </div>
      </div>
    </>
  );
}
