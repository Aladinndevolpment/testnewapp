import DashboardData from "@/components/Dashboard/DashboardData";
import { GlobalContext } from "@/layouts/GlobalLayout";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FiSettings } from "react-icons/fi";

export default function Marketing() {
  const ctx = useContext(GlobalContext);
  ctx.setTitle("Dashboard");

  const [DropDownRole, SetDropDownRole] = useState("");

  const innerTabs = [
    {
      id: "tab1",
      label: "Easter Home",
      content: <DashboardData />,
    },
    {
      id: "tab2",
      label: "Sales",
      content: " ",
    },
  ];

  // const [activeTab, setActiveTab] = useState<any>(tabs[3].id);
  const [activeInnerTab, setActiveInnerTab] = useState(innerTabs[0].id);

  return (
    <div>
      <div className="lg:px-5 border-b-[1px] border-[#dfdfdf]  bg-white flex sm:justify-between xs:justify-evenly  items-center">
        <ul className=" pt-4 flex justify-start items-center overflow-auto scrollbar-hide gap-6 ">
          {innerTabs.map((tab: any) => (
            <li key={tab.id}>
              <button
                className={`px-3 lg:px-2 transition-all duration-300 font-semibold text-xs md:text-base ${
                  activeInnerTab === tab.id
                    ? "border-b-[4px] border-secondary text-secondary pb-3 "
                    : "text-gray-500 pb-4"
                }`}
                onClick={() => setActiveInnerTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <Link
          href="/builder/dashboard"
          className="m-1 ml-2 py-2 px-2  2xl:px-4 rounded-md flex  justify-between items-center"
        >
          <FiSettings className="h-4 w-4 text-gray-500   mr-2" />
          <span className="text-gray-500 font-semibold text-sm ">
            Manage Dashboards
          </span>
        </Link>
      </div>
      <div className="  bg-white">
        {innerTabs.map((tab: any) => (
          <div
            key={tab.id}
            className={`shadow-md transition-all duration-300 rounded-md  ${
              activeInnerTab === tab.id ? "block" : " text-black hidden"
            } `}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
