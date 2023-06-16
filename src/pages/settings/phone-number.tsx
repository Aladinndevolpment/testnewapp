import React, { useState } from "react";
import SettingsSidebar from "@/components/SettingsSidebar/TeamsSidebar";

import PhoneNo from "@/components/Settings/PhoneNo/PhoneNumber";
import NumberPool from "@/components/Settings/PhoneNo/NumberPool";
import VerifiedCaller from "@/components/Settings/PhoneNo/VerifiedCaller";
export default function PhoneNumber() {
  return (
    <>
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-[25%] border-r-[1px]   bg-white    ">
          <SettingsSidebar />
        </div>
        <div className="w-full lg:w-[75%]  bg-gray-50 h-[100vh] scrollbar-hide  overflow-y-scroll pb-20">
          <div className=" bg-white border rounded-md ">
            {/* Sms providers */}
            <div className=" text-[#47494b] text-lg font-semibold  border-b  px-3 pt-3">
              <p className="m-2">SMS Providers</p>
            </div>

            <div className="mx-5 my-4 flex  flex-wrap gap-10">
              {/* Default Provider CheckBox */}
              <div className="form-control  mt-1 w-56">
                <label className=" cursor-pointer  flex  flex-col gap-3 ">
                  <span className="label-text text-[#47494b] text-sm font-semibold">
                    {" "}
                    Default Provider
                  </span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary scale-75"
                  />
                </label>
              </div>

              {/* Provider Name */}
              <div className="w-[19.5rem]">
                <h1 className="block text-[#47494b] text-sm pt-1 font-semibold">
                  Provider Name
                </h1>

                <p className="  text-gray-500 text-[12px] py-3 rounded-md mt-2 mb-2   font-medium    ">
                  {" "}
                  Lead Connector
                </p>
              </div>

              {/* Provider Type */}
              <div>
                <h1 className="block text-[#47494b] text-sm pt-1 font-semibold">
                  Provider Type
                </h1>

                <p className="  text-gray-500 text-[12px] py-3 rounded-md mt-2 mb-2   font-medium    ">
                  {" "}
                  Lead Connector
                </p>
              </div>
            </div>
            <div className=" flex justify-end mx-4">
              <button className="border bg-[#25992a] mb-4 mt-2 w-20  text-white rounded-md text-sm px-3 py-2">
                Save
              </button>
            </div>

            {/* Phone Numbers */}
            <PhoneNo />

            {/* Number Pool */}
            <NumberPool />

            {/* verified caller id */}
            <VerifiedCaller />
          </div>
        </div>
      </div>
    </>
  );
}
