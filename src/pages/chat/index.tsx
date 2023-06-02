import ChatBody from "@/components/chat/ChatBody";
import DropDownData from "@/components/chat/DropDownData";
import Profile from "@/components/chat/Profile";
import ChatSidebar from "@/components/chat/Sidebar";
import { GlobalContext } from "@/layouts/GlobalLayout";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  FunnelIcon,
  XMarkIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoChevronBackOutline } from "react-icons/io5";

export const chatDataItems = [
  {
    name: "Angelina Martin",
    image: "",
    message: "Please let me know if you need anything else.",
    time: "2m ago",
    messageCount: "3",
    designation: "Senior Product Designer",
    email: "angelinamartin@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "John Doe",
    image: "",
    message: "Hey, how's it going?",
    time: "1m ago",
    messageCount: "7",
    designation: "Software Engineer",
    email: "johndoe@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Emily Brown",
    image: "",
    message: "Can you send me that file you mentioned?",
    time: "2w ago",
    messageCount: "4",
    designation: "Marketing Manager",
    email: "emily@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Jane Smith",
    image: "",
    message: "Thanks for getting back to me!",
    time: "2d ago",
    messageCount: "1",
    designation: "Customer Support Representative",
    email: "janesmith@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Mike Johnson",
    image: "",
    message: "Have you had a chance to review the latest design?",
    time: "1d ago",
    messageCount: "2",
    designation: "Product Manager",
    email: "mikejohnson@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Olivia Taylor",
    image: "",
    message: "I'm running late for the meeting, can we reschedule?",
    time: "1d ago",
    messageCount: "1",
    designation: "Sales Representative",
    email: "Olivia@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Angelina Martin",
    image: "",
    message: "Please let me know if you need anything else.",
    time: "2m ago",
    messageCount: "3",
    designation: "Senior Product Designer",
    email: "angelinamartin@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "John Doe",
    image: "",
    message: "Hey, how's it going?",
    time: "1m ago",
    messageCount: "7",
    designation: "Software Engineer",
    email: "johndoe@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Emily Brown",
    image: "",
    message: "Can you send me that file you mentioned?",
    time: "2w ago",
    messageCount: "4",
    designation: "Marketing Manager",
    email: "emily@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Jane Smith",
    image: "",
    message: "Thanks for getting back to me!",
    time: "2d ago",
    messageCount: "1",
    designation: "Customer Support Representative",
    email: "janesmith@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Mike Johnson",
    image: "",
    message: "Have you had a chance to review the latest design?",
    time: "1d ago",
    messageCount: "2",
    designation: "Product Manager",
    email: "mikejohnson@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Olivia Taylor",
    image: "",
    message: "I'm running late for the meeting, can we reschedule?",
    time: "1d ago",
    messageCount: "1",
    designation: "Sales Representative",
    email: "Olivia@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Angelina Martin",
    image: "",
    message: "Please let me know if you need anything else.",
    time: "2m ago",
    messageCount: "3",
    designation: "Senior Product Designer",
    email: "angelinamartin@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "John Doe",
    image: "",
    message: "Hey, how's it going?",
    time: "1m ago",
    messageCount: "7",
    designation: "Software Engineer",
    email: "johndoe@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Emily Brown",
    image: "",
    message: "Can you send me that file you mentioned?",
    time: "2w ago",
    messageCount: "4",
    designation: "Marketing Manager",
    email: "emily@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Jane Smith",
    image: "",
    message: "Thanks for getting back to me!",
    time: "2d ago",
    messageCount: "1",
    designation: "Customer Support Representative",
    email: "janesmith@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Mike Johnson",
    image: "",
    message: "Have you had a chance to review the latest design?",
    time: "1d ago",
    messageCount: "2",
    designation: "Product Manager",
    email: "mikejohnson@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Olivia Taylor",
    image: "",
    message: "I'm running late for the meeting, can we reschedule?",
    time: "1d ago",
    messageCount: "1",
    designation: "Sales Representative",
    email: "Olivia@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Angelina Martin",
    image: "",
    message: "Please let me know if you need anything else.",
    time: "2m ago",
    messageCount: "3",
    designation: "Senior Product Designer",
    email: "angelinamartin@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "John Doe",
    image: "",
    message: "Hey, how's it going?",
    time: "1m ago",
    messageCount: "7",
    designation: "Software Engineer",
    email: "johndoe@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Emily Brown",
    image: "",
    message: "Can you send me that file you mentioned?",
    time: "2w ago",
    messageCount: "4",
    designation: "Marketing Manager",
    email: "emily@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Jane Smith",
    image: "",
    message: "Thanks for getting back to me!",
    time: "2d ago",
    messageCount: "1",
    designation: "Customer Support Representative",
    email: "janesmith@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Mike Johnson",
    image: "",
    message: "Have you had a chance to review the latest design?",
    time: "1d ago",
    messageCount: "2",
    designation: "Product Manager",
    email: "mikejohnson@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Olivia Taylor",
    image: "",
    message: "I'm running late for the meeting, can we reschedule?",
    time: "1d ago",
    messageCount: "1",
    designation: "Sales Representative",
    email: "Olivia@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Angelina Martin",
    image: "",
    message: "Please let me know if you need anything else.",
    time: "2m ago",
    messageCount: "3",
    designation: "Senior Product Designer",
    email: "angelinamartin@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "John Doe",
    image: "",
    message: "Hey, how's it going?",
    time: "1m ago",
    messageCount: "7",
    designation: "Software Engineer",
    email: "johndoe@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Emily Brown",
    image: "",
    message: "Can you send me that file you mentioned?",
    time: "2w ago",
    messageCount: "4",
    designation: "Marketing Manager",
    email: "emily@gmail.com",
    phone: "+919929607416",
  },
  // more dummy data objects can be added here...
  {
    name: "Jane Smith",
    image: "",
    message: "Thanks for getting back to me!",
    time: "2d ago",
    messageCount: "1",
    designation: "Customer Support Representative",
    email: "janesmith@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Mike Johnson",
    image: "",
    message: "Have you had a chance to review the latest design?",
    time: "1d ago",
    messageCount: "2",
    designation: "Product Manager",
    email: "mikejohnson@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Olivia Taylor",
    image: "",
    message: "I'm running late for the meeting, can we reschedule?",
    time: "1d ago",
    messageCount: "1",
    designation: "Sales Representative",
    email: "Olivia@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Angelina Martin",
    image: "",
    message: "Please let me know if you need anything else.",
    time: "2m ago",
    messageCount: "3",
    designation: "Senior Product Designer",
    email: "angelinamartin@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "John Doe",
    image: "",
    message: "Hey, how's it going?",
    time: "1m ago",
    messageCount: "7",
    designation: "Software Engineer",
    email: "johndoe@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Emily Brown",
    image: "",
    message: "Can you send me that file you mentioned?",
    time: "2w ago",
    messageCount: "4",
    designation: "Marketing Manager",
    email: "emily@gmail.com",
    phone: "+919929607416",
  },
  // more dummy data objects can be added here...
  {
    name: "Jane Smith",
    image: "",
    message: "Thanks for getting back to me!",
    time: "2d ago",
    messageCount: "1",
    designation: "Customer Support Representative",
    email: "janesmith@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Mike Johnson",
    image: "",
    message: "Have you had a chance to review the latest design?",
    time: "1d ago",
    messageCount: "2",
    designation: "Product Manager",
    email: "mikejohnson@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Olivia Taylor",
    image: "",
    message: "I'm running late for the meeting, can we reschedule?",
    time: "1d ago",
    messageCount: "1",
    designation: "Sales Representative",
    email: "Olivia@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Angelina Martin",
    image: "",
    message: "Please let me know if you need anything else.",
    time: "2m ago",
    messageCount: "3",
    designation: "Senior Product Designer",
    email: "angelinamartin@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "John Doe",
    image: "",
    message: "Hey, how's it going?",
    time: "1m ago",
    messageCount: "7",
    designation: "Software Engineer",
    email: "johndoe@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Emily Brown",
    image: "",
    message: "Can you send me that file you mentioned?",
    time: "2w ago",
    messageCount: "4",
    designation: "Marketing Manager",
    email: "emily@gmail.com",
    phone: "+919929607416",
  },
  // more dummy data objects can be added here...
  {
    name: "Jane Smith",
    image: "",
    message: "Thanks for getting back to me!",
    time: "2d ago",
    messageCount: "1",
    designation: "Customer Support Representative",
    email: "janesmith@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Mike Johnson",
    image: "",
    message: "Have you had a chance to review the latest design?",
    time: "1d ago",
    messageCount: "2",
    designation: "Product Manager",
    email: "mikejohnson@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Olivia Taylor",
    image: "",
    message: "I'm running late for the meeting, can we reschedule?",
    time: "1d ago",
    messageCount: "1",
    designation: "Sales Representative",
    email: "Olivia@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Angelina Martin",
    image: "",
    message: "Please let me know if you need anything else.",
    time: "2m ago",
    messageCount: "3",
    designation: "Senior Product Designer",
    email: "angelinamartin@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "John Doe",
    image: "",
    message: "Hey, how's it going?",
    time: "1m ago",
    messageCount: "7",
    designation: "Software Engineer",
    email: "johndoe@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Emily Brown",
    image: "",
    message: "Can you send me that file you mentioned?",
    time: "2w ago",
    messageCount: "4",
    designation: "Marketing Manager",
    email: "emily@gmail.com",
    phone: "+919929607416",
  },
  // more dummy data objects can be added here...
  {
    name: "Jane Smith",
    image: "",
    message: "Thanks for getting back to me!",
    time: "2d ago",
    messageCount: "1",
    designation: "Customer Support Representative",
    email: "janesmith@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Mike Johnson",
    image: "",
    message: "Have you had a chance to review the latest design?",
    time: "1d ago",
    messageCount: "2",
    designation: "Product Manager",
    email: "mikejohnson@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Olivia Taylor",
    image: "",
    message: "I'm running late for the meeting, can we reschedule?",
    time: "1d ago",
    messageCount: "1",
    designation: "Sales Representative",
    email: "Olivia@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Angelina Martin",
    image: "",
    message: "Please let me know if you need anything else.",
    time: "2m ago",
    messageCount: "3",
    designation: "Senior Product Designer",
    email: "angelinamartin@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "John Doe",
    image: "",
    message: "Hey, how's it going?",
    time: "1m ago",
    messageCount: "7",
    designation: "Software Engineer",
    email: "johndoe@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Emily Brown",
    image: "",
    message: "Can you send me that file you mentioned?",
    time: "2w ago",
    messageCount: "4",
    designation: "Marketing Manager",
    email: "emily@gmail.com",
    phone: "+919929607416",
  },
  // more dummy data objects can be added here...
  {
    name: "Jane Smith",
    image: "",
    message: "Thanks for getting back to me!",
    time: "2d ago",
    messageCount: "1",
    designation: "Customer Support Representative",
    email: "janesmith@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Mike Johnson",
    image: "",
    message: "Have you had a chance to review the latest design?",
    time: "1d ago",
    messageCount: "2",
    designation: "Product Manager",
    email: "mikejohnson@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Olivia Taylor",
    image: "",
    message: "I'm running late for the meeting, can we reschedule?",
    time: "1d ago",
    messageCount: "1",
    designation: "Sales Representative",
    email: "Olivia@gmail.com",
    phone: "+919929607416",
  },
  {
    name: "Ted Mosby",
    image: "",
    message: "I'm running late for the meeting, can we reschedule?",
    time: "1d ago",
    messageCount: "1",
    designation: "Sales Representative",
    email: "tedmosby@gmail.com",
    phone: "+919929607416",
  },
];

export default function Chat() {
  const [chatData, setChatData] = useState(chatDataItems);
  const [chatToOpen, setChatToOpen] = useState<any>(chatData[0]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const ctx = useContext(GlobalContext);
  ctx.setTitle("Chat");

  const [chatIsSelected, setChatIsSelected] = useState(false);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    if (searchString == "") {
      setChatData(chatData);
      return;
    }

    setChatData(
      chatData.filter((item: any) =>
        item.name.toLowerCase().includes(searchString)
      )
    );
  }, [searchString, chatData]);

  console.log(showProfile);
  return (
    <div className="lg:h-full w-full bg-mainBg overflow-hidden relative pb-2">
      <div
        className={` w-full lg:h-full flex flex-wrap overflow-x-hidden overflow-hidden`}
      >
        <div
          className={` ${
            showProfile ? "hidden lg:block" : "block lg:block"
          } w-full lg:w-[78%] bg-white`}
        >
          <div className="border border-b-gray-300  flex flex-wrap justify-between">
            <div
              className={`${
                chatIsSelected ? "hidden lg:block" : "block lg:block"
              } w-full lg:w-[30%]`}
            >
              <div className="pt-1 bg-blue-50 pb-2 px-4 border-b-gray-300 border-r-[1px]   ">
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
            </div>

            <div
              className={`${
                chatIsSelected ? "block lg:block" : "hidden lg:block"
              }  w-full lg:w-[70%]  `}
            >
              <div className="flex flex-col justify-end items-start h-full pb-2 pl-2">
                <div className="w-full flex flex-wrap justify-between items-center px-4 3xl:pb-2">
                  <div className="flex justify-start items-center">
                    <div
                      onClick={() => setChatIsSelected(false)}
                      className="mr-2 bg-white h-5 w-5 shadow-md rounded-full flex justify-center items-center"
                    >
                      <IoChevronBackOutline className="h-3 w-3 text-gray-900" />
                    </div>
                    <div
                      onClick={() => setShowProfile(true)}
                      className="mb-1 mr-2"
                    >
                      <h1 className="text-xl font-semibold">
                        {chatToOpen.name}
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-3 mb-1">
                    <FaPhoneAlt className="h-11 w-11 bg-[#f1f3f4] p-3 rounded-full cursor-pointer hover:bg-white hover:shadow-md transition-all hidden md:block" />
                    <XMarkIcon
                      onClick={() => setShowProfile(false)}
                      className="h-11 w-11 bg-[#f1f3f4] p-3 rounded-full cursor-pointer hover:bg-white hover:shadow-md transition-all md:hidden"
                    />

                    <div className="dropdown dropdown-end md:hidden">
                      <label tabIndex={0}>
                        <EllipsisHorizontalIcon
                          onClick={() => setShowProfile(!showProfile)}
                          className="h-11 w-11 bg-[#f1f3f4] p-3 rounded-full cursor-pointer hover:bg-white hover:shadow-md transition-all"
                        />
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
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            <div
              className={`${
                chatIsSelected ? "hidden lg:block" : "block lg:block"
              } w-full lg:w-[30%] border-r-[1px] border-b-gray-300`}
            >
              <ChatSidebar
                chatData={chatData}
                onSelect={(chat) => {
                  setChatToOpen(chat);
                  setIsChatOpen(true);
                  setChatIsSelected(true);
                }}
                selectedChat={chatToOpen}
              />
            </div>

            <div
              className={`${
                chatIsSelected ? "block lg:block" : "hidden lg:block"
              } w-full lg:w-[70%] border-r-[1px] border-gray-300`}
            >
              <ChatBody
                chat={chatToOpen}
                chatOpen={isChatOpen}
                onClose={() => setIsChatOpen(false)}
                onProfileToggle={() => setShowProfile(!showProfile)}
                chatSelected={chatIsSelected}
              />
            </div>
          </div>
        </div>

        <div
          className={` ${
            showProfile ? "block lg:block" : "hidden lg:block"
          } w-full lg:w-[22%] h-full bg-white `}
        >
          <Profile
            chat={chatToOpen}
            visible={showProfile}
            onClose={() => setShowProfile(false)}
          />
        </div>
        {/* <div className="w-full md:w-[22%] h-full pt-2 pb-1">
          <ChatSidebar
            chatData={chatData}
            onSelect={(chat) => {
              setChatToOpen(chat);
              setIsChatOpen(true);
              setChatIsSelected(true);
            }}
            selectedChat={chatToOpen}
          />
        </div>
        <div className="w-full md:w-[56%] h-full bg-white pt-6 2xl:pt-0 md:border-r md:border-r-gray-300">
          <ChatBody
            chat={chatToOpen}
            chatOpen={isChatOpen}
            onClose={() => setIsChatOpen(false)}
            onProfileToggle={() => setShowProfile(!showProfile)}
            chatSelected={chatIsSelected}
          />
        </div> */}
      </div>
    </div>
  );
}
