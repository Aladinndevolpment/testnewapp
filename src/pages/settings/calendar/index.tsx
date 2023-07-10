import React, { useContext, useEffect, useState } from "react";
import SettingsSidebar from "@/components/SettingsSidebar/TeamsSidebar";
import CalendarListData from "@/components/Settings/CalendarSettings/CalendarListData";
import { GetServerSidePropsContext } from "next";
import { baseUrl, locationID, token } from "@/config/APIConstants";
import { ICalendarData } from "@/components/contacts/Interfaces";
import { GlobalContext } from "@/layouts/GlobalLayout";
import axios from "axios";
// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const res = {
//     count: 0,
//     calendars: [],
//   };
//   // const token = process.env.NEXT_PUBLIC_API_TOKEN;
//   try {
//     await axios
//       .get(`${baseUrl}calendars`, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((response: any) => {
//         // console.log("then", response);
//         res.count = response.data.calendars.length;
//         res.calendars = response.data.calendars;
//       });
//   } catch (err) {
//     console.log("error bruh:", err);
//   }
//   return {
//     props: {
//       ...res,
//     },
//   };
// }
export default function CalendarList() {
  const [calendarDatas, setCalendarDatas] = useState<any>({});
  const [roomsDatas, setRoomsDatas] = useState<any>([]);
  const [ProvidersDatas, setProvidersDatas] = useState<any>([]);
  const [AppointmentDatas, setAppointmentDatas] = useState<any>([]);
  // console.log("hghgg", AppointmentDatas);
  useEffect(() => {
    axios
      .get(`${baseUrl}calendars`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }: any) => {
        setCalendarDatas(data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  // Rooms
  useEffect(() => {
    axios
      .get(`${baseUrl}rooms/location/${locationID}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }: any) => {
        setRoomsDatas(data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  // Providers
  useEffect(() => {
    axios
      .get(`${baseUrl}providers/location/${locationID}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }: any) => {
        setProvidersDatas(data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${baseUrl}providers/location/${locationID}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }: any) => {
        setProvidersDatas(data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${baseUrl}appointmentTypes/location/${locationID}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }: any) => {
        setAppointmentDatas(data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  const ctx = useContext(GlobalContext);
  ctx.setOpen(false);
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-full lg:w-[25%] border-r-[1px]   bg-white    ">
        <SettingsSidebar />
      </div>
      <div className="w-full lg:w-[75%]   bg-white h-[100vh] scrollbar-hide  overflow-y-scroll ">
        <div className="flex flex-wrap px-4 pt-4 pb-20 overflow-hidden ">
          {calendarDatas?.calendars && (
            <CalendarListData
              calendarCount={calendarDatas.calendars}
              calendarData={calendarDatas.calendars}
              calendarRoomData={roomsDatas}
              CaledarProviderData={ProvidersDatas.providers}
              CaledarAppointmentData={AppointmentDatas.appointmentTypes}
            />
          )}
        </div>
      </div>
    </div>

    //   <div className="flex flex-wrap items-center">
    //   <div className="w-full lg:w-[25%] border-r-[1px]   bg-white    ">
    //     <SettingsSidebar />
    //   </div>
    //   <div className="w-full lg:w-[75%]   bg-white h-[100vh] scrollbar-hide  overflow-y-scroll pb-20">
    //     <div className="  border-b flex items-center justify-between  px-4 pb-3 pt-4">
    //       <p className="text-[#47494b] text-lg font-semibold">Custom Fields </p>
    //     </div>
    //     <div className="flex flex-wrap   overflow-hidden ">
    //     <CalendarListData
    //         calendarCount={calendarDatas.calendars}
    //           calendarData={calendarDatas.calendars}
    //            />
    //     </div>
    //   </div>
    // </div>
  );
}
