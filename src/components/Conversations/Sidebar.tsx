import Image from "next/image";
import { MouseEventHandler, useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
import { BsArrowDownUp } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";

export default function ChatSidebar({
  chatData,
  onSelect,
  selectedChat,
}: {
  chatData: any;
  onSelect: MouseEventHandler;
  selectedChat: any;
}) {
  // const chatData = [
  //   {
  //     name: "Angelina Martin",
  //     image: "",
  //     message: "Please let me know if you need anything else.",
  //     time: "2m ago",
  //     messageCount: "3",
  //     designation: "Senior Product Designer",
  //     email: "angelinamartin@gmail.com",
  //     phone: "+919929607416",
  //     locationId: "1",
  //     date: "09-06-23",
  //   },
  //   {
  //     name: "John Doe",
  //     image: "",
  //     message: "Hey, how's it going?",
  //     time: "1m ago",
  //     messageCount: "7",
  //     designation: "Software Engineer",
  //     email: "johndoe@gmail.com",
  //     phone: "+919929607416",
  //     date: "4-4-23",
  //     locationId: "2",
  //   },
  //   {
  //     name: "Emily Brown",
  //     image: "",
  //     message: "Can you send me that file you mentioned?",
  //     time: "2w ago",
  //     messageCount: "4",
  //     designation: "Marketing Manager",
  //     email: "emily@gmail.com",
  //     phone: "+919929607416",
  //     date: "2-1-22",
  //     locationId: "3",
  //   },
  //   {
  //     name: "Jane Smith",
  //     image: "",
  //     message: "Thanks for getting back to me!",
  //     time: "2d ago",
  //     messageCount: "1",
  //     designation: "Customer Support Representative",
  //     email: "janesmith@gmail.com",
  //     phone: "+919929607416",
  //     date: "22-5-24",
  //     locationId: "4",
  //   },
  //   {
  //     name: "Mike Johnson",
  //     image: "",
  //     message: "Have you had a chance to review the latest design?",
  //     time: "1d ago",
  //     messageCount: "2",
  //     designation: "Product Manager",
  //     email: "mikejohnson@gmail.com",
  //     phone: "+919929607416",
  //     date: "10-7-19",
  //     locationId: "5",
  //   },
  //   {
  //     name: "Olivia Taylor",
  //     image: "",
  //     message: "I'm running late for the meeting, can we reschedule?",
  //     time: "1d ago",
  //     messageCount: "1",
  //     designation: "Sales Representative",
  //     email: "Olivia@gmail.com",
  //     phone: "+919929607416",
  //     date: "3-11-11",
  //     locationId: "6",
  //   },
  //   {
  //     name: "Angelina Martin",
  //     image: "",
  //     message: "Please let me know if you need anything else.",
  //     time: "2m ago",
  //     messageCount: "3",
  //     designation: "Senior Product Designer",
  //     email: "angelinamartin@gmail.com",
  //     phone: "+919929607416",
  //     locationId: "7",
  //     date: "7-7-23",
  //   },
  //   {
  //     name: "John Doe",
  //     image: "",
  //     message: "Hey, how's it going?",
  //     time: "1m ago",
  //     messageCount: "7",
  //     designation: "Software Engineer",
  //     email: "johndoe@gmail.com",
  //     phone: "+919929607416",
  //     date: "8-8-23",
  //     locationId: "8",
  //   },
  //   {
  //     name: "Emily Brown",
  //     image: "",
  //     message: "Can you send me that file you mentioned?",
  //     time: "2w ago",
  //     messageCount: "4",
  //     designation: "Marketing Manager",
  //     email: "emily@gmail.com",
  //     phone: "+919929607416",
  //     date: "12-12-22",
  //     locationId: "9",
  //   },
  //   {
  //     name: "Jane Smith",
  //     image: "",
  //     message: "Thanks for getting back to me!",
  //     time: "2d ago",
  //     messageCount: "1",
  //     designation: "Customer Support Representative",
  //     email: "janesmith@gmail.com",
  //     phone: "+919929607416",
  //     date: "22-2-24",
  //     locationId: "10",
  //   },
  //   {
  //     name: "Mike Johnson",
  //     image: "",
  //     message: "Have you had a chance to review the latest design?",
  //     time: "1d ago",
  //     messageCount: "2",
  //     designation: "Product Manager",
  //     email: "mikejohnson@gmail.com",
  //     phone: "+919929607416",
  //     date: "15-4-19",
  //     locationId: "11",
  //   },
  //   {
  //     name: "Olivia Taylor",
  //     image: "",
  //     message: "I'm running late for the meeting, can we reschedule?",
  //     time: "1d ago",
  //     messageCount: "1",
  //     designation: "Sales Representative",
  //     email: "Olivia@gmail.com",
  //     phone: "+919929607416",
  //     date: "4-4-89",
  //     locationId: "12",
  //   },
  //   {
  //     name: "Angelina Martin",
  //     image: "",
  //     message: "Please let me know if you need anything else.",
  //     time: "2m ago",
  //     messageCount: "3",
  //     designation: "Senior Product Designer",
  //     email: "angelinamartin@gmail.com",
  //     phone: "+919929607416",
  //     date: "7-4-23",
  //     locationId: "13",
  //   },
  //   {
  //     name: "John Doe",
  //     image: "",
  //     message: "Hey, how's it going?",
  //     time: "1m ago",
  //     messageCount: "7",
  //     designation: "Software Engineer",
  //     email: "johndoe@gmail.com",
  //     phone: "+919929607416",
  //     date: "9-9-23",
  //     locationId: "14",
  //   },
  //   {
  //     name: "Emily Brown",
  //     image: "",
  //     message: "Can you send me that file you mentioned?",
  //     time: "2w ago",
  //     messageCount: "4",
  //     designation: "Marketing Manager",
  //     email: "emily@gmail.com",
  //     phone: "+919929607416",
  //     date: "11-11-22",
  //     locationId: "15",
  //   },
  //   {
  //     name: "Jane Smith",
  //     image: "",
  //     message: "Thanks for getting back to me!",
  //     time: "2d ago",
  //     messageCount: "1",
  //     designation: "Customer Support Representative",
  //     email: "janesmith@gmail.com",
  //     phone: "+919929607416",
  //     date: "30-1-24",
  //     locationId: "16",
  //   },
  //   {
  //     name: "Mike Johnson",
  //     image: "",
  //     message: "Have you had a chance to review the latest design?",
  //     time: "1d ago",
  //     messageCount: "2",
  //     designation: "Product Manager",
  //     email: "mikejohnson@gmail.com",
  //     phone: "+919929607416",
  //     date: "29-2-19",
  //     locationId: "17",
  //   },
  //   {
  //     name: "Olivia Taylor",
  //     image: "",
  //     message: "I'm running late for the meeting, can we reschedule?",
  //     time: "1d ago",
  //     messageCount: "1",
  //     designation: "Sales Representative",
  //     email: "Olivia@gmail.com",
  //     phone: "+919929607416",
  //     date: "27-3-11",
  //     locationId: "18",
  //   },
  // ];

  const locations = [
    {
      id: 1,
      title: "New York City",
    },
    {
      id: 2,
      title: "Los Angeles",
    },
    {
      id: 3,
      title: "San Francisco",
    },
    {
      id: 4,
      title: "Chicago",
    },
    {
      id: 5,
      title: "Las Vegas",
    },
    {
      id: 6,
      title: "Grand Canyon",
    },
    {
      id: 7,
      title: "Yellowstone National Park",
    },
    {
      id: 8,
      title: "Miami",
    },
    {
      id: 9,
      title: "New Orleans",
    },
    {
      id: 10,
      title: "Seattle",
    },

    // Add more options as needed
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState<number[]>([]);

  // const filteredChatDataItems = chatData.filter((item: any) =>
  //   item.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const filteredChatDataItems = chatData.filter(
    (item: any) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLocations.length === 0 ||
        selectedLocations.includes(item.locationId))
  );

  const sortedChatDataItems = filteredChatDataItems.sort((a: any, b: any) => {
    if (sortOrder === "asc") {
      return a.date.localeCompare(b.date);
    } else {
      return b.date.localeCompare(a.date);
    }
  });

  const handleLocationCheckboxChange = (
    locationId: number,
    checked: boolean
  ) => {
    if (checked) {
      setSelectedLocations([...selectedLocations, locationId]);
    } else {
      setSelectedLocations(selectedLocations.filter((id) => id !== locationId));
    }
  };

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  let unreadCount = 0;

  for (const item of chatData) {
    if (item.status === "unread") {
      unreadCount++;
    }
  }

  return (
    <>
      <div className="border border-b-gray-300  flex justify-between items-center">
        <h2 className="text-black font-medium text-lg px-2">Messages</h2>
        <div className="flex gap-2 p-4 items-center">
          <button onClick={() => setOpenSearchBox(!openSearchBox)} className="">
            <GoSearch className="text-lg" />
          </button>
          <div className="dropdown">
            <label tabIndex={0} className="">
              <FiFilter className="text-lg" />
            </label>

            <div
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <p className="px-2 font-semibold text-sm line-clamp-1">
                Filter By Location Id
              </p>

              <div className="py-2 h-[35vh] overflow-y-scroll scrollbar-hide">
                {locations.map((item: any, index: number) => (
                  <div key={index} className="px-2 mb-1">
                    <div className="flex justify-start items-center mb-3">
                      <input
                        type="checkbox"
                        value={item.id}
                        checked={selectedLocations.includes(item.id)}
                        onChange={(e) =>
                          handleLocationCheckboxChange(
                            item.id,
                            e.target.checked
                          )
                        }
                        className="border-gray-400 checkbox checkbox-xs checkbox-info rounded-sm bg-white"
                      />
                      <p className="line-clamp-1 text-[12px] font-medium text-gray-600 ml-1">
                        {item?.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button onClick={toggleSortOrder} className="">
            <BsArrowDownUp className="text-lg" />
          </button>
          {/* <BiMessageDetail className="text-lg" /> */}
          <div className="text-sm bg-[#e3e3e5] px-2 py-1 rounded-2xl font-medium">
            {chatData?.length} ({unreadCount})
          </div>
        </div>
      </div>
      {openSearchBox && (
        <div className="px-2 relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by contact name..."
            className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3  py-3.5  rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
          />
          <button
            onClick={() => setOpenSearchBox(!openSearchBox)}
            className="absolute right-5 top-6"
          >
            <RxCross1 className="text-base text-gray-400 " />
          </button>
        </div>
      )}

      <div className="lg:h-[100vh] pb-40 overflow-y-scroll border-b  w-full pt-1 scrollbar-hide">
        {sortedChatDataItems.map((item: any, index: number) => (
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

                  {item === selectedChat || item?.status === "unread" ? (
                    <div className="bg-newBlue h-2 w-2 mb-1 rounded-full"></div>
                  ) : null}
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
