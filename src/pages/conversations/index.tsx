import ChatBody from "@/components/Conversations/ChatBody";
import ChatRightSidebar from "@/components/Conversations/ChatRightSidebar";
import ChatSidebar from "@/components/Conversations/Sidebar";
import { contactBaseUrl } from "@/config/APIConstants";
import { GlobalContext } from "@/layouts/GlobalLayout";
import axios from "@/utils/axios";
import { createContext, useContext, useEffect, useState } from "react";

export const CnvContext = createContext({
  messageText: "",
  setMessageText: (e: string) => {},
});

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
    locationId: 1,
    date: "09-06-23",
    status: "unread",
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
    date: "4-4-23",
    locationId: 2,
    status: "unread",
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
    date: "2-1-22",
    locationId: 3,
    status: "unread",
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
    date: "22-5-24",
    locationId: 4,
    status: "unread",
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
    date: "10-7-19",
    locationId: 5,
    status: "read",
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
    date: "3-11-11",
    locationId: 6,
    status: "read",
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
    locationId: 7,
    date: "7-7-23",
    status: "read",
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
    date: "8-8-23",
    locationId: 8,
    status: "read",
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
    date: "12-12-22",
    locationId: 9,
    status: "read",
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
    date: "22-2-24",
    locationId: 10,
    status: "read",
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
    date: "15-4-19",
    locationId: 11,
    status: "read",
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
    date: "4-4-89",
    locationId: 12,
    status: "read",
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
    date: "7-4-23",
    locationId: 13,
    status: "read",
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
    date: "9-9-23",
    locationId: 14,
    status: "read",
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
    date: "11-11-22",
    locationId: 15,
    status: "read",
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
    date: "30-1-24",
    locationId: 16,
    status: "read",
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
    date: "29-2-19",
    locationId: 17,
    status: "read",
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
    date: "27-3-11",
    locationId: 18,
    status: "read",
  },
];

export default function Chat() {
  const [chatData, setChatData] = useState(chatDataItems);
  const [conversations, setConversations] = useState([]);

  const [chatToOpen, setChatToOpen] = useState<any>(chatData[0]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [messageText, setMessageText] = useState("");
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

  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const fetchCalendar = async () => {
      try {
        const response = await axios.get(
          `${contactBaseUrl}ve9EPM428h8vShlRW1KT`
        );
        setConversations(response.data.contact);
        console.log(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchCalendar();
  }, []);

  return (
    <CnvContext.Provider value={{ messageText, setMessageText }}>
      <div className="lg:h-full w-full bg-white overflow-hidden relative pb-2">
        <div
          className={`w-full lg:h-full flex flex-wrap overflow-x-hidden overflow-hidden `}
        >
          <div
            className={`${
              chatIsSelected ? "hidden lg:block" : "block lg:block"
            } w-full lg:w-[22%] border-r-[1px] border-b-gray-300`}
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
            } w-full lg:w-[48%] border-r-[1px] border-gray-300 relative`}
          >
            <ChatBody
              chat={chatToOpen}
              chatOpen={isChatOpen}
              onClose={() => setIsChatOpen(false)}
              onProfileToggle={() => setShowProfile(!showProfile)}
              chatSelected={chatIsSelected}
            />
          </div>
          <div
            className={` ${
              showProfile ? "block lg:block" : "hidden lg:block"
            } w-full lg:w-[30%] h-full`}
          >
            <ChatRightSidebar chat={chatToOpen} />
          </div>
        </div>
      </div>
    </CnvContext.Provider>
  );
}
