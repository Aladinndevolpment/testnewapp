import {
  ChevronLeftIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { useRouter } from "next/router";
import { CalendarDaysIcon, BellAlertIcon } from "@heroicons/react/24/outline";
import Search from "./Search";
import { useRecoilState } from "recoil";
import { titleState } from "@/atoms/title";
import Image from "next/image";
import HeaderTitle from "./HeaderTitle";
export default function TopNavigation() {
  const router = useRouter();

  return (
    <header className="hidden lg:block w-full  h-16 items-center relative z-10">
      <div className="flex flex-center flex-col h-full justify-center mx-auto relative  text-white z-10">
        <div className="flex items-center  relative w-full sm:ml-0 sm:pr-2  ">
          <div className="flex justify-between items-center  w-[25%] pl-2 pr-5 py-1.5 rounded-md">
            <div className={`flex items-center pl-5  w-full justify-start`}>
              <div className="w-[10%]">
                <Image
                  src={require("../../../../public/images/icons/left.png")}
                  alt=""
                  className="w-3"
                />
              </div>
              <div className="w-[90%]">
                <HeaderTitle />
              </div>
            </div>
          </div>

          <div className=" flex items-center justify-end p-1  w-[75%]   ">
            <Search />
            <div className="relative ml-3">
              <a className="w-10 h-10 mr-2 font-merriweather font-bold flex justify-center items-center rounded-md   text-gray-800  ">
                <Image
                  src={require("../../../../public/images/icons/plus.svg")}
                  alt=""
                  className="w-4"
                />
              </a>
            </div>
            <div className="relative ml-2 mr-5">
              <Image
                src={require("../../../../public/images/icons/bell.svg")}
                alt=""
                className="w-5"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
