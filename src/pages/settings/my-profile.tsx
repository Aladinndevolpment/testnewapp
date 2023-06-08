import React, { useState } from "react";
import SettingsSidebar from "@/components/SettingsSidebar/TeamsSidebar";
import ChangePassword from "@/components/Settings/MyProfile/changePassword";
import EmailSignature from "@/components/Settings/MyProfile/emailSignature";
import PersonalData from "@/components/Settings/MyProfile/personalData";
import UserAvailability from "@/components/Settings/MyProfile/userAvailability";
export default function MyProfile() {
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-full lg:w-[25%] border-r-[1px]   bg-white    ">
        <SettingsSidebar />
      </div>
      <div className="w-full lg:w-[75%]  bg-gray-50 h-[100vh] scrollbar-hide  overflow-y-scroll pb-20">
        <div className="flex flex-wrap px-4 py-4">
          <div className="w-full lg:w-1/2 px-2">
            <PersonalData />
            <EmailSignature />
          </div>
          <div className="w-full lg:w-1/2  px-2">
            <ChangePassword />
            <UserAvailability />
          </div>
        </div>
      </div>
    </div>
  );
}
