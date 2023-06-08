import WorkFlowTables from "@/components/Automations/TabsComponents/TemplateSidebar/WorkflowTables";
import WebsiteBuilder from "@/components/Builders/WebsiteBuilder";
import { GlobalContext } from "@/layouts/GlobalLayout";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { BsDiagram2Fill } from "react-icons/bs";
import Craft from "./form/craft";
import DashboardData from "@/components/Dashboard/DashboardData";

export default function Builder() {
  const [DropDownRole, SetDropDownRole] = useState("");

  const innerTabs = [
    {
      id: "tab1",
      label: "Dashbaord",
      content: <DashboardData />,
    },
    {
      id: "tab2",
      label: "Sites",
      content: <WebsiteBuilder />,
    },
    {
      id: "tab3",
      label: "Forms",
      content: <Craft />,
    },
    {
      id: "tab4",
      label: "Surveys",
      content: "",
    },
  ];

  // const [activeTab, setActiveTab] = useState<any>(tabs[3].id);
  const [activeInnerTab, setActiveInnerTab] = useState(innerTabs[1].id);

  const ctx = useContext(GlobalContext);
  ctx.setTitle("Website Builder");

  return (
    <div>
      <div className="overflow-hidden ">
        <ul className="lg:px-5 border-b-[1px] border-[#dfdfdf] pt-4 flex justify-start items-center overflow-auto scrollbar-hide gap-6 bg-white  ">
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
        <div className="  bg-white w-full  overflow-hidden">
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
    </div>
  );
}
