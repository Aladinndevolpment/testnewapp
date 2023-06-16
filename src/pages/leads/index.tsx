import TabLeads from "@/components/Leads/TabLeads";
import { GlobalContext } from "@/layouts/GlobalLayout";
import Image from "next/image";
import { MouseEventHandler, useContext, useState } from "react";

interface IAppointmentDetailsProps {
  visibility: boolean;
  onClose: MouseEventHandler;
}

export default function AppointmentDetails() {
  const [DropDownRole, SetDropDownRole] = useState("");

  const innerTabs = [
    {
      id: "tab1",
      label: "Sales Pipeline",
      content: <TabLeads />,
    },
    {
      id: "tab2",
      label: "Patient Pipeline",
      content: <TabLeads />,
    },
    {
      id: "tab3",
      label: "Care Pipeline",
      content: <TabLeads />,
    },
  ];

  const ctx = useContext(GlobalContext);
  ctx.setTitle("Leads");
  // const [activeTab, setActiveTab] = useState<any>(tabs[3].id);
  const [activeInnerTab, setActiveInnerTab] = useState(innerTabs[1].id);

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
