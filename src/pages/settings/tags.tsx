import React from "react";
import SettingsSidebar from "@/components/SettingsSidebar/TeamsSidebar";

import TagsData from "@/components/Settings/Tags";
export default function Tags() {
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-full lg:w-[25%] border-r-[1px]   bg-white    ">
        <SettingsSidebar />
      </div>
      <div className="w-full lg:w-[75%]  bg-gray-50 h-[100vh] scrollbar-hide  overflow-y-scroll pb-20">
        <div className="flex flex-wrap px-4 py-4 overflow-hidden ">
          <TagsData />
        </div>
      </div>
    </div>
  );
}
