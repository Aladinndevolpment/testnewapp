import React, { useState } from "react";
import ModalDerived from "@/components/Modal";
import { AiOutlineClose } from "react-icons/ai";
import SettingsSidebar from "@/components/SettingsSidebar/TeamsSidebar";
import CalendarListTable from "./calendarListTable";
import AddCalendar from "./AddCalendar/AddCalendar";

interface RowData {
  [key: string]: any;
}

export default function CalendarListData() {
  const [data, setData] = useState<RowData[]>([
    {
      id: "1",
      calendar_Name: "Calendar 1",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "2",
      calendar_Name: "Calendar 2",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "3",
      calendar_Name: "Calendar 3",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "4",
      calendar_Name: "Calendar 4",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
  ]);

  const [openAddTagModel, setAddTagModel] = useState<any>(false);

  const handleStoreCalendar = (item: any) => {
    const newData = item;
    setData((prevValues: any) => [
      ...data,
      {
        id: "1",
        calendar_Name: item[0]?.calendarName,
        createdOn: new Date(),
        upDatedOn: new Date(),
      },
    ]);
  };

  return (
    <>
      <ModalDerived
        visibility={openAddTagModel}
        onClose={() => setAddTagModel(false)}
      >
        <div className=" bg-white rounded-lg  lg:h-[85vh] pb-[5%]  overflow-y-hidden w-[100%]  md:w-[125vh] scrollbar-hide ">
          <div className=" h-[100vh]  pt-5 pb-3">
            <div className="h-[10vh] flex justify-between items-start border-b-[1px] pb-4 px-5">
              <div>
                <p className="text-gray-800 font-medium md:text-lg ">
                  Calendar
                </p>
                <p className="text-gray-500 font-normal md:text-sm pt-1">
                  Add New Calendar
                </p>
              </div>
              <button onClick={() => setAddTagModel(false)}>
                <AiOutlineClose className="text-gray-800 h-6 w-6" />
              </button>
            </div>
            <div className="overflow-hidden ">
              <div className="w-full   bg-white  ">
                <AddCalendar
                  handleChange={(item: any) => handleStoreCalendar(item)}
                  onClose={() => setAddTagModel(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </ModalDerived>
      <div className="w-full">
        <div className="flex gap-4 items-center justify-end">
          <button
            onClick={() => setAddTagModel(true)}
            className="text-xs flex justify-center items-center   bg-newBlue hover:bg-secondary duration-300 m-1 py-2.5 px-5 2xl:px-6 text-white rounded-md "
          >
            Add Tags
          </button>
        </div>
        <div className="  pt-5 pb-10">
          <CalendarListTable data={data} />
        </div>
      </div>
    </>
  );
}
