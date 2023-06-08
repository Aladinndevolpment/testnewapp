import Image from "next/image";
import { MouseEventHandler, useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
import { BsArrowDownUp } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";

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
      <div className="border border-b-gray-300  flex flex-wrap justify-between items-center">
        <div className="p-4">
          <h2 className="text-black font-medium text-lg">Messages</h2>
        </div>
        <div className="flex gap-2 p-4 items-center">
          <div className="dropdown">
            <label tabIndex={0} className="">
              <BsArrowDownUp className="text-lg" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Sort by timezone</a>
              </li>
              <li>
                <a>Most Recent</a>
              </li>
              <li>
                <a>Longest Wait</a>
              </li>
            </ul>
          </div>

          <FiFilter className="text-lg" />
          <BiMessageDetail className="text-lg" />
          <div className="text-sm bg-[#e3e3e5] px-3 py-1 rounded-2xl font-medium">
            1(0)
          </div>
        </div>
      </div>
      <div className="lg:h-[100vh] pb-40 overflow-y-scroll border-b  w-full pt-1 scrollbar-hide">
        {chats.map((item: any, index: number) => (
          <div key={index} className="px-2">
            <div
              className={`py-2 flex w-full border-b border-gray-200 rounded-xl ${
                item === selectedChat && "bg-[#cbd0d9]"
              } hover:bg-[#cbd0d9] hover:shadow transition-all cursor-pointer px-4`}
              onClick={() => onSelect(item)}
            >
              <div className="mr-3">
                <Image
                  src={require("../../../public/images/avatar/blackdog.jpg")}
                  width={50}
                  height={50}
                  alt={item.name}
                  className="rounded-full"
                />
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center w-full">
                  <h5 className="font-semibold line-clamp-1">{item.name}</h5>
                  <time className="line-clamp-1 text-[11px] font-semibold text-gray-600 text-right">
                    {item.time}
                  </time>
                </div>

                <div className="flex justify-between items-center w-full">
                  <h6 className="line-clamp-1 text-[12px] mb-1 font-medium text-gray-600">
                    {item.designation}
                  </h6>

                  {item === selectedChat && (
                    <div className="bg-newBlue h-2 w-2 mb-1 rounded-full"></div>
                  )}
                </div>

                <div className="flex justify-between items-center w-full -mt-1">
                  <p className="text-[11px] line-clamp-1 font-medium w[100%]">
                    {item.message}
                  </p>
                  {/* <div className="w-5 h-5 bg-green-500 text-xs flex items-center justify-center rounded-full text-white ml-2">
                  <span>{item.messageCount}</span>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
