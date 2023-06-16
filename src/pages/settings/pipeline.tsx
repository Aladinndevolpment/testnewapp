import React, { useState } from "react";
import SettingsSidebar from "@/components/SettingsSidebar/TeamsSidebar";
import PipelineTable from "@/components/Settings/PipeLineSettings/Table";

export default function CompanyProfile() {
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-full lg:w-[25%] border-r-[1px]   bg-white    ">
        <SettingsSidebar />
      </div>
      <div className="w-full lg:w-[75%]  bg-slate-200 h-[100vh] scrollbar-hide  overflow-y-scroll pb-20">
        <div className="w-full bg-slate-200  py-4">
          <PipelineTable />
        </div>
      </div>
    </div>
  );
}
