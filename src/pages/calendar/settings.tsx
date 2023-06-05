import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import Availability from "@/components/CalendarSettings/availability";
import Confirmation from "@/components/CalendarSettings/confirmation";
import TeamEventSetup from "@/components/CalendarSettings/teamEventSetup";
import TeamsSidebar from "@/components/Teams/TeamsSidebar";

export default function CalendarSettings() {
  const [select, setSelect] = useState(0);
  const calendarType = [
    { title: "Team & Event Setup", number: 1 },
    { title: "Availability", number: 2 },
    { title: "Confirmation", number: 3 },
  ];

  return (
    <div className="flex flex-wrap items-center">
      <div className="w-full lg:w-[25%] border-r-[1px]   bg-white    ">
        <TeamsSidebar />
      </div>
      <div className="w-full lg:w-[75%]  bg-white h-[100vh] scrollbar-hide  ">
        <div className="w-[65vw] border rounded-md  mx-20 mt-10 mb-20  bg-white  ">
          {/* first section */}
          <div className="text-[#47494b] text-lg font-semibold p-4 border-b flex items-center justify-between">
            <h1>Add New Calendar</h1>
            <MdOutlineClose className="text-gray-400 cursor-pointer" />
          </div>

          {/* Second Section */}
          <div className="flex gap-3 border-b p-3">
            {calendarType.map((item: any, index: number) => (
              <button
                key={index}
                className={`border rounded-3xl  pr-3 pl-1 gap-2 py-[5px] flex justify-around ${
                  select == index
                    ? "bg-white font-semibold toggleShadow"
                    : "text-gray-400 "
                }`}
                onClick={() => setSelect(index)}
              >
                {" "}
                <span
                  className={` px-2 rounded-full space-x-2 ${
                    select == index
                      ? "bg-blue-400 text-white"
                      : "bg-gray-200 text-gray-400"
                  } `}
                >
                  {item.number}
                </span>{" "}
                {item.title}
              </button>
            ))}
          </div>

          {/* Main Section */}
          {select == 0 && <TeamEventSetup />}
          {select == 1 && <Availability />}
          {select == 2 && <Confirmation />}
        </div>
      </div>
    </div>
  );
}
