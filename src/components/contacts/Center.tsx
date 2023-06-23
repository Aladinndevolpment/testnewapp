import { useEffect, useState } from "react";
import { ActivityCard, ActivityCard2 } from "./ActivityCard";
import AppointmentCard from "./AppointmentCard";
import Conversations from "./Conversations";
import { IContactData } from "./Interfaces";

interface IProps {
  data: IContactData;
  conversationModeIndex: number;
  setConversationModeIndex: (index: number) => void;
  showConversation: boolean;
  setShowConversation: (showConversation: boolean) => void;
}

export default function Center({ data, showConversation, setShowConversation, conversationModeIndex, setConversationModeIndex }: IProps) {
  const [topTabIndex, setTopTabIndex] = useState(0);

  useEffect(() => {
    if (showConversation)
      setTopTabIndex(2);
  }, [showConversation]);
  return (
    <div className={`h-full flex flex-col transition-all m-4`}>
      <div className="flex flex-cols border-b border-[#E9E9E9]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#78889B"
          aria-hidden="true"
          className="w-5 h-5 mt-2.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          ></path>
        </svg>
        <input
          type="text"
          className="focus:outline-none text-gray-400 text-sm block bg-mainBg w-full py-2.5 pr-2.5 pl-2 text-grey font-main font-light tracking-wider"
          placeholder="Search activity, notes, email and more"
        />
      </div>
      <div className="flex justify-between flex-wrap bg-[#EAEEF6] gap-x-6 w-full rounded-lg my-4 h-11">
        {["Activity", "Notes", "Conversation", "Task", "Appointments"].map(
          (tab, tabIndex2) => (
            <button
              key={tabIndex2}
              onClick={() => { setTopTabIndex(tabIndex2); setShowConversation(false); }}
              className={`relative h-10 font-main font-medium px-5 flex items-center ${topTabIndex === tabIndex2
                ? "bg-white font-semibold rounded-md m-0.5 shadow-md text-black"
                : "text-gray-400"
                } transition-all duration-200`}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {topTabIndex === 0 ? (
        <>
          <span className="font-main text-black text-lg tracking-wide">
            Upcoming Activity
          </span>
          <div className="w-full flex-1 overflow-y-auto scrollbar-hide my-4">
            <div className="mb-4">
              <ActivityCard />
              <ActivityCard2 />
              <ActivityCard2 />
              <ActivityCard2 />
            </div>
          </div>
        </>
      ) : topTabIndex === 2 ? (
        <div className="w-full flex-1 overflow-y-auto scrollbar-hide">
          <Conversations contact={data.contact} conversationModeIndex={conversationModeIndex} setConversationModeIndex={setConversationModeIndex} />
        </div>
      ) : topTabIndex === 4 ? (
        <>
          <span className="font-main text-black text-lg tracking-wide">
            Upcoming Appointments
          </span>
          <div className="w-full overflow-y-auto scrollbar-hide my-4">
            <div className="mb-4">
              <AppointmentCard meetingTime={"Today, 12:00 PM"} />
            </div>
          </div>
          <span className="font-main text-black text-lg tracking-wide">
            Appointments History
          </span>
          <div className="w-full overflow-y-auto scrollbar-hide my-4">
            <div className="mb-4">
              <AppointmentCard meetingTime={"10 May 2023, 04:00 PM"} />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
