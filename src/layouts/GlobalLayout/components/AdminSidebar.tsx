import {
  ArrowLeftIcon,
  SignalIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import data from "./data";
import { useRouter } from "next/router";
import Logo from "@/components/UI/Logo";
import Link from "next/link";
import Image from "next/image";

export default function AdminSidebar() {
  const { asPath } = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div
        className={`flex bg-white overflow-y-hidden flex-col justify-start top-0 left-0 pl-0 w-[80%] lg:w-full  bg-auth shadow-md  fixed lg:relative h-screen z-40  ease-in-out duration-300 ${
          showSidebar
            ? "translate-x-0 "
            : "translate-x-[-100%]  lg:translate-x-0  "
        }`}
      >
        <div className=" flex flex-col  justify-center items-center w-full py-1 mb-2 border-b-[1px]  border-gray-200">
          <Logo />
        </div>
        <div className="absolute block lg:hidden top-5 right-10">
          <button onClick={() => setShowSidebar(!showSidebar)}>
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
        <ul className="w-full pt-6">
          {data.map((item) => (
            <li
              key={item.title}
              className={`mb-4  pl-4   w-full py-2   ${
                asPath == item.link
                  ? "bg-primary border-b-8 border-tertiary "
                  : ""
              }`}
            >
              <Link href={item.link}>
                <div
                  onClick={() => setShowSidebar(!showSidebar)}
                  className={` flex items-center   py-1 px-3 w-full justify-start`}
                >
                  {asPath == item.link ? (
                    <Image src={item.activeIcon} alt="" className="h-5 w-5" />
                  ) : (
                    <Image src={item.icon} alt="" className="h-5 w-5" />
                  )}

                  <span
                    className={` ${
                      asPath == item.link ? " text-white  " : "text-black"
                    }
                    text-[14px] font-semibold tracking-wide font-main ml-3`}
                  >
                    {item.title}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center">
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

        <Logo />
        <div></div>
      </div>
    </>
  );
}
