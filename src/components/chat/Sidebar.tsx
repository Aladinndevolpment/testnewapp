import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import TextInput from "../controls/TextInput";
import Image from "next/image";
import { MouseEventHandler, useEffect, useState } from "react";
import DropDownData from "./DropDownData";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function ChatSidebar({
  chatData,
  onSelect,
  selectedChat,
}: {
  chatData: any;
  onSelect: MouseEventHandler;
  selectedChat: any;
}) {
  const [chats, setChats] = useState(chatData);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    if (searchString == "") {
      setChats(chatData);
      return;
    }

    setChats(
      chatData.filter((item: any) =>
        item.name.toLowerCase().includes(searchString)
      )
    );
  }, [searchString, chatData]);

  return (
    <>
      <div className="border-b border-b-gray-300 pb-3  px-4">
        <div>
          <div className="flex items-center shadow px-2 py-1 border-gray-200 border-[1px] bg-white rounded-md">
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 font-bold  " />
            <input
              placeholder="Search..."
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              className="w-full bg-transparent outline-none border-none pl-2 font-fontSource font-medium text-sm"
            />
          </div>
        </div>
        <div className="w-full flex justify-between mt-2.5">
          {/* <div className="font-medium flex items-center gap-2">
            <span className="text-sm">All Status</span>
            <ChevronDownIcon className="w-4 h-4" />
          </div> */}
          <select className="text-dark text-sm font-medium bg-transparent  focus-within:bottom-0 focus-within:outline-0 focus-visible:border-0">
            <option>All Status</option>
            <option>Active</option>
            <option>InActive</option>
          </select>

          <div className="dropdown dropdown-end">
            <label tabIndex={0}>
              <Bars3Icon className="h-6 w-6 text-gray-600" />
            </label>
            <div
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <DropDownData />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[92%] overflow-y-scroll  w-full pt-1 scrollbar-hide">
        {chats.map((item: any, index: number) => (
          <div
            key={index}
            className={`py-4 flex w-full border-b border-gray-300 ${
              item === selectedChat && "bg-white"
            } hover:bg-white hover:shadow transition-all cursor-pointer px-4 rounded-sm `}
            // onClick={() => onSelect(item)}
          >
            <div className="mr-3">
              <Image
                src={require("../../../public/dummy/dummy-doc.png")}
                width={50}
                height={50}
                alt={item.name}
                className="rounded-full"
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center w-full">
                <h5 className="font-semibold line-clamp-1">{item.name}</h5>
                <time className="line-clamp-1 text-[11px] font-medium text-gray-600 text-right">
                  {item.time}
                </time>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-[12px] line-clamp-1 font-medium w[95%]">
                  {item.message}
                </p>
                <div className="w-5 h-5 bg-green-500 text-xs flex items-center justify-center rounded-full text-white ml-2">
                  <span>{item.messageCount}</span>
                </div>
              </div>
              <h6 className="line-clamp-1 text-[11px] font-medium text-gray-600">
                {item.designation}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
