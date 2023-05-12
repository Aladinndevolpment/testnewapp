import TeamsSidebar from "@/components/Teams/TeamsSidebar";
import Search from "@/layouts/GlobalLayout/components/Search";
import {
  CheckBadgeIcon,
  ExclamationTriangleIcon,
  MinusSmallIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import {
  BellIcon,
  CalendarDaysIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserIcon,
  EllipsisVerticalIcon,
  EyeIcon,
  ChevronDownIcon,
  PlusCircleIcon,
  PlusSmallIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";

const userData = [
  {
    name: "Cy Ganderton",
    email: "cyganderton@gmail.com",
    date: "23 Dec 2022",
    role: "Admin",
    status: "complete",
  },
  {
    name: "Guy Hawkins",
    email: "guyhawk@gmail.com",
    date: "28 Dec 2022",
    role: "Read Only",
    status: "pending",
  },
  {
    name: "Jhon Doe",
    email: "jhondoe@gmail.com",
    date: "29 Dec 2022",
    role: "Basic",
    status: "pending",
  },
  {
    name: "Sarah Doe",
    email: "cyganderton@gmail.com",
    date: "23 Dec 2022",
    role: "Admin",
    status: "pending",
  },
];

const secondUserData = [
  {
    name: "Cy Ganderton",
    email: "cyganderton@gmail.com",
    date: "23 Dec 2022",
    role: "Admin",
    status: "pending",
  },
  {
    name: "Guy Hawkins",
    email: "guyhawk@gmail.com",
    date: "28 Dec 2022",
    role: "Read Only",
    status: "pending",
  },
];

export default function Integrations() {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const headerData = [
    {
      id: 0,
      value: "All",
      link: "",
    },
    {
      id: 1,
      value: "Connected",
      link: "",
    },
    {
      id: 2,
      value: "Sales Integrations",
      link: "",
    },
    {
      id: 3,
      value: "PM",
      link: "",
    },
    {
      id: 4,
      value: "Analytics",
      link: "",
    },
    {
      id: 5,
      value: "Email",
      link: "",
    },
    {
      id: 6,
      value: "Chat",
      link: "",
    },
    {
      id: 7,
      value: "Support",
      link: "",
    },
    {
      id: 8,
      value: "Data",
      link: "",
    },
    {
      id: 9,
      value: "Issue Tracking",
      link: "",
    },
    {
      id: 10,
      value: "Finance",
      link: "",
    },
    {
      id: 11,
      value: "Survey",
      link: "",
    },
  ];
  const [active, setActive] = useState(headerData[0]?.id);

  const cardData = [
    {
      title: "Google",
      logo: require("../../public/images/integrations/google.png"),
      link: "#",
      status: "C",
    },
    {
      title: "Facebook",
      logo: require("../../public/images/integrations/facebook.png"),
      link: "#",
      status: "C",
    },
    {
      title: "Stripe",
      logo: require("../../public/images/integrations/stripe.png"),
      link: "#",
      status: "P",
    },
    {
      title: "Paypal",
      logo: require("../../public/images/integrations/paypal.png"),
      link: "#",
      status: "P",
    },
    {
      title: "Tiktok",
      logo: require("../../public/images/integrations/tiktok.png"),
      link: "#",
      status: "R",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-center  ">
        <div className="w-full lg:w-[25%] border-r-[1px]   bg-white    ">
          <TeamsSidebar
            handleChange={handleSidebar}
            showSidebar={showSidebar}
          />
        </div>
        <div className="w-full lg:w-[75%]  bg-white h-[100vh] scrollbar-hide  ">
          <header className="block w-full mb-5 h-32 lg:h-16 items-center relative z-10 border-b-[1px] border-lightGray">
            <div className="flex flex-center flex-col h-full justify-center lg:mx-auto relative  text-white z-10">
              <div className="flex flex-wrap lg:flex-nowrap justify-center items-center  relative w-full sm:ml-0 sm:pr-2  ">
                <div className="flex justify-between items-center  w-full md:w-[25%] pl-2 pr-5 py-1.5 rounded-md">
                  <div className={`flex items-center w-full justify-start`}>
                    <div className="flex lg:hidden justify-between items-center">
                      <button
                        onClick={() => setShowSidebar(!showSidebar)}
                        className=" font-space tracking-wider ml-6 block lg:hidden  "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="  h-12 w-12 text-black mt-[20%]  "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                          />
                        </svg>
                      </button>
                    </div>
                    <p
                      className={`ml-6 capitalize text-dark   text-[20px] font-semibold  tracking-wide  `}
                    >
                      Integrations
                    </p>
                  </div>
                </div>

                <div className=" flex items-center justify-start lg:justify-end pl-5 lg:p-1   w-full md:w-[75%]   ">
                  <Search />
                  <div className="relative ml-3">
                    <a className="h-8 mr-2  border-[1px] border-lightGray font-medium py-2 text-sm flex justify-center items-center rounded-lg px-3">
                      <span
                        className={` text-dark text-[13px] font-medium  tracking-wide  `}
                      >
                        Request Integrations
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="  py-4 px-6">
            <div className="  py-2 px-2 rounded-md bg-white border-[1px] border-gray-100 shadow-md flex flex-wrap justify-start lg:justify-around items-center">
              {headerData.map((item, index) => (
                <div key={index} className="px-4 lg:px-0 mb-2 lg:mb-0">
                  <a
                    className={` ${
                      active == index
                        ? "text-newBlue bg-blue-100 py-1 px-2 rounded-md"
                        : "text-dark"
                    }   text-sm font-medium  tracking-wide`}
                  >
                    {item?.value}{" "}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <p
            className={`ml-7 mt-2 capitalize text-dark   text-[16px] font-semibold  tracking-wide  `}
          >
            Connected
          </p>

          <div className="flex  flex-wrap py-4 ml-2">
            {cardData.map((item, index) => (
              <div className="w-full md:w-1/2 lg:w-1/3 px-5 mb-8" key={index}>
                <div
                  className={` ${
                    item?.status == "C"
                      ? "border-green-300 bg-green-50"
                      : item?.status == "P"
                      ? "border-yellow-300 bg-yellow-50"
                      : item?.status == "R"
                      ? "border-red-300 bg-red-50"
                      : "border-lightGray-300 bg-mainBg-50"
                  }   border-2 pt-3 pb-2  rounded-lg`}
                >
                  <div
                    className={`${
                      item?.status == "C"
                        ? "border-lightGray"
                        : item?.status == "P"
                        ? "border-yellow-300"
                        : item?.status == "R"
                        ? "border-red-300 "
                        : "border-lightGray-300 "
                    } border-b-[1px]   flex justify-between items-center   px-4 pb-4 pt-1`}
                  >
                    <div className="flex  justify-start items-center">
                      <Image src={item?.logo} alt="" className="w-6" />
                      <p
                        className={`ml-4 capitalize text-dark   text-[16px] font-semibold  tracking-wide  `}
                      >
                        {item?.title}
                      </p>
                    </div>
                    <div>
                      {item?.status == "C" ? (
                        <CheckBadgeIcon className="text-green-400 h-6 w-6" />
                      ) : item?.status == "P" ? (
                        <ExclamationTriangleIcon className="text-yellow-400 h-6 w-6" />
                      ) : item?.status == "R" ? (
                        <XCircleIcon className="text-red-400 h-6 w-6" />
                      ) : (
                        <MinusSmallIcon className="text-dark h-6 w-6" />
                      )}
                    </div>
                  </div>
                  <div className="px-4 pt-3 pb-2">
                    <p
                      className={` capitalize text-newBlue text-[14px] font-semibold  tracking-wide  `}
                    >
                      View Integrations
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
