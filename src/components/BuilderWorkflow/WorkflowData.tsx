import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import React, { useState } from "react";
import Actions from "./Flow/Tabs/Actions";
import Settings from "./Flow/Tabs/Settings";
import History from "./Flow/Tabs/History";
import Status from "./Flow/Tabs/Status";

export default function HeaderComponent({ saveDraft }: any) {
  const tabs = [
    {
      id: "tab1",
      label: "Actions",
      content: <Actions />,
    },
    {
      id: "tab2",
      label: "Settings",
      content: <Settings />,
    },
    {
      id: "tab3",
      label: "History",
      content: <History />,
    },
    {
      id: "tab4",
      label: "Status",
      content: <Status />,
    },
  ];

  const [activeTab, setActiveTab] = useState<any>(tabs[0].id);

  return (
    <div>
      <div className="bg-darkBlack py-3">
        <header className="  w-full items-center relative z-10">
          <div className="flex flex-center flex-col h-full justify-center lg:mx-auto relative  text-white z-10">
            <div className="flex flex-wrap lg:flex-nowrap justify-between lg:justify-between items-center  relative w-full sm:ml-0 sm:pr-2  ">
              <div className="flex justify-between items-center   md:pl-2 pr-5 py-1.5 rounded-md w-[40%]">
                <div
                  className={`flex items-center  pl-5  w-full justify-start`}
                >
                  <ChevronLeftIcon className="h-4 w-4 text-white" />
                  <p
                    className={`ml-3 capitalize text-gray-300   text-xs font-medium  tracking-wide  `}
                  >
                    Back to workflow
                  </p>
                </div>
              </div>
              <div className="flex justify-center w-[20%]">
                <p
                  contentEditable={true}
                  className={`  capitalize text-gray-300   text-base font-semibold  tracking-wide  `}
                >
                  Contact based
                </p>
              </div>
              <div className=" flex items-center justify-start lg:justify-end  w-[40%]">
                <p
                  className={`ml-3   text-gray-400 text-[10px] md:text-[12px] font-medium  tracking-wide  `}
                >
                  Last saved : Today at {moment().format("hh:mm a")}
                </p>
                <button
                  onClick={saveDraft}
                  className="text-xs md:text-[12px] mx-2  text-gray-300 border-[1px] border-FontGray px-3 py-1.5 rounded-md"
                >
                  Save as draft
                </button>

                <button className="mr-1 text-xs md:text-[12px] text-gray-300 font-medium bg-secondary px-3 py-1.5 rounded-md">
                  Save & publish
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="bg-white h-[15vh] md:h-[9vh] px-2">
        <div className="flex flex-wrap lg:flex-nowrap justify-center md:justify-between items-center  relative w-full sm:ml-0 sm:pr-2  ">
          <div className="flex justify-between items-center   pl-2 pr-5 pt-1.5 rounded-md">
            <ul className=" flex  justify-around items-center overflow-auto scrollbar-hide">
              {tabs.map((tab: any) => (
                <li key={tab.id} className="px-5 ">
                  <button
                    className={` mt-4 md:pb-4 transition-all duration-300 text-sm lg:text-base md:text-base ${
                      activeTab === tab.id
                        ? "border-b-[4px] border-dark text-dark font-semibold"
                        : "text-gray-500 font-medium border-b-[4px] border-transparent"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className=" flex items-center justify-start lg:justify-end pl-4 md:pl-5 md:p-1 md:pt-6 lg:pt-0 pt-5">
            <button className="mx-3 text-sm text-dark border-[1px] border-gray-400 px-4 md:px-6 py-1.5 rounded-md">
              Test
            </button>

            <div className="dropdown">
              <button
                tabIndex={0}
                className="flex justify-center items-center   md:mx-3 text-sm text-dark border-[1px] border-gray-400 px-4 py-1.5 rounded-md"
              >
                <span>Action</span>
                <ChevronDownIcon className="h-4 w-4 ml-2" />
              </button>

              <div
                tabIndex={0}
                className="dropdown-content card card-compact w-44 py-2 px-4 shadow bg-white text-dark"
              >
                <div>
                  <div className="flex justify-start items-start py-2">
                    <input
                      type="checkbox"
                      name="1"
                      className="checkbox checkbox-sm rounded-sm bg-transparent"
                    />
                    <p className=" text-[13px] font-medium  ml-2 mt-[-0.5px]">
                      Data A
                    </p>
                  </div>
                  <div className="flex justify-start items-start py-2">
                    <input
                      type="checkbox"
                      name="2"
                      className="checkbox checkbox-sm rounded-sm bg-transparent"
                    />
                    <p className=" text-[13px] font-medium  ml-2 mt-[-0.5px]">
                      Data B
                    </p>
                  </div>
                  <div className="flex justify-start items-start py-2">
                    <input
                      type="checkbox"
                      name="3"
                      className="checkbox checkbox-sm rounded-sm bg-transparent"
                    />
                    <p className=" text-[13px] font-medium  ml-2 mt-[-0.5px]">
                      Data C
                    </p>
                  </div>

                  <div className="flex justify-start items-start py-2">
                    <input
                      type="checkbox"
                      name="6"
                      className="checkbox checkbox-sm rounded-sm bg-transparent"
                    />
                    <p className=" text-[13px] font-medium  ml-2 mt-[-0.5px]">
                      Data D
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button className="mx-3 text-sm text-secondary border-[1px] border-secondary px-4 py-1.5 rounded-md">
              Set Your Goal
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden scrollbar-hide h-[82%] overflow-y-scroll">
        <div className="h-full w-full">
          {tabs.map((tab: any) => (
            <div
              key={tab.id}
              className={`shadow-md transition-all duration-300 rounded-md ${
                activeTab === tab.id ? "block" : " text-black hidden"
              } `}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
