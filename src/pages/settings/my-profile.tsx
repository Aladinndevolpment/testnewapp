import React, { useContext, useState } from "react";
import SettingsSidebar from "@/components/SettingsSidebar/TeamsSidebar";
import ChangePassword from "@/components/Settings/MyProfile/changePassword";
import EmailSignature from "@/components/Settings/MyProfile/emailSignature";
import PersonalData from "@/components/Settings/MyProfile/personalData";
import UserAvailability from "@/components/Settings/MyProfile/userAvailability";
import { GlobalContext } from "@/layouts/GlobalLayout";
import MyProfileData from "./My-ProfileData";



export default function MyProfile() {
  const ctx = useContext(GlobalContext);
  ctx.setOpen(false);
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-full lg:w-[25%] border-r-[1px]   bg-white    ">
        <SettingsSidebar />
      </div>
      <MyProfileData lg="75%"/>
    </div>
  );
}
