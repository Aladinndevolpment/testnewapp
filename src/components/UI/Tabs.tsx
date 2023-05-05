import React, { useState } from "react";

interface ITabs {
  tabs: any;
}

export default function Tabs({ tabs }: ITabs) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="overflow-hidden ">
      <ul className="mt-3 lg:mt-10  flex  justify-around items-center overflow-auto scrollbar-hide">
        {tabs.map((tab: any) => (
          <li key={tab.id} className="">
            <button
              className={`text-dark transition-all duration-1000 font-semibold text-[11px] md:text-base ${
                activeTab === tab.id ? "border-b-[4px] border-newBlue" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="  bg-white">
        {tabs.map((tab: any) => (
          <div
            key={tab.id}
            className={`shadow-md transition-all duration-1000 rounded-md  ${
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
