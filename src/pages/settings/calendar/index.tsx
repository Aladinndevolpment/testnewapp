import React from "react";
import SettingsSidebar from "@/components/SettingsSidebar/TeamsSidebar";
import CalendarListData from "@/components/Settings/CalendarSettings/CalendarListData";
import { GetServerSidePropsContext } from "next";
import axios from "axios";
import { baseUrl, locationID, token } from "@/config/APIConstants";
import { ICalendarData } from "@/components/contacts/Interfaces";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = {
    count: 0,
    calendars: [],
  };
  // const token = process.env.NEXT_PUBLIC_API_TOKEN;

  try {
    await axios
      .get(`${baseUrl}calendars`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response: any) => {
        console.log("resdgggdd", response);
        res.count = response.data.calendars.length;
        res.calendars = response.data.calendars;
      });
  } catch (err) {
    console.log("error bruh:", err);
  }
  return {
    props: {
      ...res,
    },
  };
}

export default function CalendarList(calendarData: ICalendarData) {
  console.log(calendarData);
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-full lg:w-[25%] border-r-[1px]   bg-white    ">
        <SettingsSidebar />
      </div>
      <div className="w-full lg:w-[75%]   bg-white h-[100vh] scrollbar-hide  overflow-y-scroll pb-20">
        <div className="  border-b flex items-center justify-between  px-4 pb-3 pt-4">
          <p className="text-[#47494b] text-lg font-semibold"> Calendar </p>
        </div>

        <div className="flex flex-wrap px-4 pt-4  overflow-hidden ">
          <CalendarListData
            calendarCount={calendarData.count}
            calendarData={calendarData.calendars}
          />
        </div>
      </div>
    </div>
  );
}
