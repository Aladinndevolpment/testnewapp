import { useEffect, useState } from "react";
import { ActivityCard, ActivityCard2 } from "./ActivityCard";
import AppointmentCard from "./AppointmentCard";
import Conversations from "./Conversations";
import { IContactData } from "./Interfaces";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import dynamic from "next/dynamic";
import { useRecoilState } from "recoil";
import { nameTrigger } from "@/atoms/nameTrigger";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

interface IProps {
  data: IContactData;
  conversationModeIndex: number;
  setConversationModeIndex: (index: number) => void;
  showConversation: boolean;
  setShowConversation: (showConversation: boolean) => void;
}

export default function Center({
  data,
  showConversation,
  setShowConversation,
  conversationModeIndex,
  setConversationModeIndex,
}: IProps) {
  const [topTabIndex, setTopTabIndex] = useState(0);
  const [actionData, setActionData] = useRecoilState(nameTrigger);
  const [errors, setErrors] = useState<any>({});
  const [formValues, setFormValues] = useState<any>({
    actionName: actionData,
    formName: "",
    fromEmail: "",
    subject: "",
    template: "",
    message: "",
    attachment: null,
  });
  const handleQuillChange = (value: any) => {
    setFormValues((prevValues: any) => ({
      ...prevValues,
      message: value,
    }));
  };
  useEffect(() => {
    if (showConversation) setTopTabIndex(2);
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
      <div className="flex justify-between flex-wrap bg-[#cecccc2a] gap-x-6 w-full rounded-lg my-4 h-[3rem]">
        {["Activity", "Notes", "Conversation", "Task", "Appointments"].map(
          (tab, tabIndex2) => (
            <button
              key={tabIndex2}
              onClick={() => {
                setTopTabIndex(tabIndex2);
                setShowConversation(false);
              }}
              className={`relative h-11 font-main font-medium px-5 flex items-center ${
                topTabIndex === tabIndex2
                  ? "bg-white font-semibold rounded-md m-0.5 shadow-md text-black"
                  : "text-gray-400"
              } transition-all duration-200`}
            >
              {tab}
            </button>
          )
        )}
      </div>

      <div className="flex flex-col">
        <div className="flex flex-wrap pb-4 pt-2">
          <details className="dropdown w-[28%] mr-2">
            <summary className="mt-3 lg:mt-0 cursor-pointer  ml-2 items-between px-2 py-2 bg-white border-[1px] border-lightGray h-10 rounded-md shadow-sm flex justify-center items-center">
              <div className="flex justify-center items-center">
                <p className="text-sm text-gray-500">Filter Activity 21/25</p>
                <ChevronDownIcon className="h-4 w-4 text-FontGray cursor-pointer hover:text-secondary duration-300" />
              </div>
            </summary>
            <ul className="p-2 shadow dropdown-content z-[1] bg-base-100 rounded-box w-52 calendar-dropdown-content   overflow-y-auto">
              {/* <li>
                    <a>{calendarData.name}</a>
                </li> */}
              <div>
                <li className="py-2">
                  <a>Name</a>
                </li>
                <li className="py-2">
                  <a>Name</a>
                </li>
              </div>
            </ul>
          </details>

          <details className="dropdown w-[18%] mr-2">
            <summary className="mt-3 lg:mt-0  ml-2 cursor-pointer items-between px-2 py-2 bg-white border-[1px] border-lightGray h-10 rounded-md shadow-sm flex justify-center items-center">
              <div className="flex justify-center items-center">
                <p className="text-sm text-gray-500">All Users</p>
                <ChevronDownIcon className="h-4 w-4 text-FontGray cursor-pointer hover:text-secondary duration-300" />
              </div>
            </summary>
            <ul className="p-2 shadow   dropdown-content z-[1] bg-base-100 rounded-box w-52 calendar-dropdown-content   overflow-y-auto">
              {/* <li>
                    <a>{calendarData.name}</a>
              </li> */}
              <div>
                <li className="py-2">
                  <a>Name</a>
                </li>
                <li className="py-2">
                  <a>Name</a>
                </li>
              </div>
            </ul>
          </details>
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
        ) : topTabIndex === 1 ? (
          <div className="pt-4">
            <h2 className="text-lg font-medium text-gray-500">Add New Note</h2>

            <div className="w-full mt-1.5 mb-12 pt-2">
              {/* <label className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
                Message
              </label> */}
              <QuillNoSSRWrapper
                modules={modules}
                formats={formats}
                theme="snow"
                value={formValues.message}
                onChange={handleQuillChange}
                placeholder="message"
                style={{
                  height: 100,
                  marginBottom: 20,
                }}
                className="scrollbar-hide"
              />

              {/* <textarea
              name="message"
              value={formValues.message}
              onChange={handleQuillChange}
              className="px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none   focus:border-gray-300 text-black "
            ></textarea> */}

              {errors.message && (
                <span className="mb-5 error text-red-500 ">
                  {errors.message}
                </span>
              )}
            </div>
          </div>
        ) : topTabIndex === 2 ? (
          <div className="w-full flex-1 overflow-y-auto scrollbar-hide">
            <Conversations
              contact={data.contact}
              conversationModeIndex={conversationModeIndex}
              setConversationModeIndex={setConversationModeIndex}
            />
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
    </div>
  );
}
