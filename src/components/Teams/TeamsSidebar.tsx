import {
  ArrowLeftIcon,
  SignalIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import data from "./data";
import { useRouter } from "next/router";
import Logo from "@/components/UI/Logo";
import Link from "next/link";
import Image from "next/image";

export default function TeamsSidebar({ handleChange, showSidebar }: any) {
  const { asPath } = useRouter();

  return (
    <>
      <div
        className={`py-5 flex bg-mainBg overflow-y-scroll scrollbar-hide flex-col justify-start top-0 left-0 pl-0 w-[80%] md:w-[40%]  lg:w-full  bg-auth shadow-md  fixed lg:relative h-screen z-40  ease-in-out duration-300 ${
          showSidebar
            ? "translate-x-0 "
            : "translate-x-[-100%]  lg:translate-x-0  "
        }`}
      >
        <div className="pb-2.5 px-4 flex justify-start items-center w-full ">
          <div className=" h-8  items-between  px-1.5 py-2 bg-white border-[1px] border-lightGray rounded-md shadow-sm flex justify-center items-center">
            <button onClick={() => handleChange()} className="">
              <XMarkIcon className="h-5 w-5 text-newBlue hover:text-secondary duration-1000" />
            </button>
          </div>
          <p
            className={`ml-3 capitalize text-dark   text-[16px] font-semibold  tracking-wide  `}
          >
            Calendar
          </p>
        </div>

        <ul className="w-full pt-3 px-4 ">
          {data.map((item, index) => (
            <li
              key={index}
              className="border-[1px] border-lightGray bg-white mb-4 py-2   rounded-[5px] shadow-sm"
            >
              <p
                className={`px-3 capitalize text-dark text-xs font-semibold  tracking-wide  `}
              >
                {item?.title}
              </p>
              <ul className="px-3 mt-2 pt-3 border-t-[1px] border-lightGray">
                {item?.subContent?.map((mainData, mainIndex) => (
                  <li
                    onClick={() => handleChange()}
                    className="  mb-3"
                    key={mainIndex}
                  >
                    <Link href={mainData?.link} className="flex justify-start ">
                      {mainData?.icon}
                      <p className="ml-2.5 text-dark text-[13px] font-semibold ">
                        {mainData?.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
