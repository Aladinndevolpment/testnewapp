import React, { useState } from "react";

interface ITabs {
  tabs: any;
}

export default function Tabs({ tabs }: ITabs) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <ul className="border-b-[1px] dark:border-[#383738]  border-gray-200  flex flex-wrap justify-start items-center overflow-x-scroll scrollbar-hide">
        {tabs.map((tab: any) => (
          <li key={tab.id} className="mr-5 ">
            <button
              className={` px-6 py-1.5 font-merriweather font-bold rounded-sm  transition-all duration-1000 ${
                activeTab === tab.id
                  ? "bg-gray-300 dark:bg-[#2b2929] text-gray-900 dark:text-white "
                  : "bg-gray-200 dark:bg-[#2b292936] text-gray-900 dark:text-white"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="pt-5  ">
        {tabs.map((tab: any) => (
          <div
            key={tab.id}
            className={`bg-gray-50 dark:bg-[#141414] shadow-md transition-all duration-1000 border-[1px] dark:border-[#383738]  border-gray-200 rounded-md  ${
              activeTab === tab.id ? "block" : " text-black hidden"
            } `}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
