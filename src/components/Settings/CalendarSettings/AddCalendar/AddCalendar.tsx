import React, { useState } from "react";
import SettingsSidebar from "@/components/SettingsSidebar/TeamsSidebar";
import TeamEventSetup from "./teamEventSetup";
import Availability from "./availability";
import Confirmation from "./confirmation";

export default function AddCalendar({ handleChange, onClose }: any) {
  const [select, setSelect] = useState(0);
  const calendarType = [
    { title: "Team & Event Setup", number: 1 },
    { title: "Availability", number: 2 },
    { title: "Confirmation", number: 3 },
  ];
  const [formData, setFormData] = useState<any>([]);

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
            onClose={() => setSelect(0)}
            handleNewTab={() => setSelect(1)}
            handleStoreFormData={(item: any) =>
              setFormData([...formData, item])
            }
          />
        )}
        {select == 1 && (
          <Availability
            onClose={() => setSelect(1)}
            handleNewTab={() => setSelect(2)}
            handleStoreFormData={(item: any) =>
              setFormData([...formData, item])
            }
          />
        )}
        {select == 2 && (
          <Confirmation
            onClose={() => setSelect(3)}
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
