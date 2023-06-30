import React, { useState } from "react";
import SettingsSidebar from "@/components/SettingsSidebar/TeamsSidebar";
import TeamEventSetup from "./teamEventSetup";
import Availability from "./availability";
import Confirmation from "./confirmation";
import axios from "axios";
import { baseUrl, locationID, token } from "@/config/APIConstants";

export default function AddCalendar({ handleChange, onClose }: any) {
  const [select, setSelect] = useState(0);
  const calendarType = [
    { title: "Team & Event Setup", number: 1 },
    { title: "Availability", number: 2 },
    { title: "Confirmation", number: 3 },
  ];
  const [formData, setFormData] = useState<any>([]);
  console.log("ssddds", formData);
  let obj = formData[0];
  // console.log("dddssss", obj);
  // let data = {
  //   name: obj?.calendarName,
  //   appointmentTitle: obj?.appointmentTitle,
  //   eventColor: obj?.eventColor,
  //   description: obj?.description,
  // };
  let data = {
    appointmentPerDay: 0,
    appointmentPerSlot: 0,
    appointmentTitle: obj?.appointmentTitle,
    dateRangeDays: 0,
    description: obj?.description,
    eventColor: obj?.eventColor,
    isActive: true,
    locationID: locationID,
    minSchedulingNoticeHours: 0,
    name: obj?.calendarName,
    officeHours: [
      {
        dayOfWeek: "Tue",
        endHour: 0,
        endMinute: 0,
        startHour: 0,
        startMinute: 0,
      },
    ],
    slotBuffer: 0,
    slotDuration: 0,
    slotInterval: 0,
    slug: obj?.calendarUrl,
    teamUserIDs: ["9b36de41-f652-4bf2-ba38-7a96103f09a3"],
  };
  const submitData = async () => {
    await axios.post(
      `${baseUrl}calendars`,

      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
  return (
    <div className="w-full  bg-white ">
      <div className="w-full bg-white  ">
        {/* Second Section */}
        <div className="flex gap-3 border-b p-3">
          {calendarType.map((item: any, index: number) => (
            <button
              key={index}
              className={`border rounded-3xl  pr-3 pl-2 gap-2 py-[7px] flex justify-around ${
                select == index
                  ? "bg-white font-semibold toggleShadow shadow-md"
                  : "text-gray-400 "
              }`}
              // onClick={() => setSelect(index)}
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
        {select == 0 && (
          <TeamEventSetup
            onClose={() => {
              setSelect(0);
              onClose();
            }}
            handleNewTab={() => setSelect(1)}
            handleStoreFormData={(item: any) =>
              setFormData([...formData, item])
            }
          />
        )}
        {select == 1 && (
          <Availability
            onClose={() => {
              setSelect(0);

              onClose();
            }}
            handleBack={() => setSelect(0)}
            // handleNewTab={() => setSelect(2)}
            handleNewTab={() => submitData()}
            handleStoreFormData={(item: any) =>
              setFormData([...formData, item])
            }
          />
        )}
        {select == 2 && (
          <Confirmation
            onClose={() => {
              setSelect(0);
              onClose();
            }}
            handleBack={() => setSelect(1)}
            handleNewTab={() => {
              setSelect(0);
              onClose();
            }}
            handleStoreFormData={(item: any) => {
              setFormData([...formData, item]);
              handleChange(formData);
              setFormData([]);
            }}
          />
        )}

        {select == 4 && <p className="pl-10 py-4"> Form Submitted</p>}
      </div>
    </div>
  );
}
