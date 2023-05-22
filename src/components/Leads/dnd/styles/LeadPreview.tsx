import {
  CalendarDaysIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { AiOutlineMail, AiOutlinePlus } from "react-icons/ai";
import { BsArrowBarRight, BsArrowRight } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
export default function LeadPreview({ lead }: any) {
  return (
    <div className=" ">
      <div className=" flex justify-between items-center pt-5 px-5 pb-6 border-b-[1px] border-gray-300">
        <div className="flex items-center">
          <BsArrowBarRight className="h-6 w-6 text-gray-600  font-semibold" />
          <p className="text-lg text-dark font-semibold ml-4"> Lead Preview</p>
        </div>
        <div className="border-[1px] border-gray-300 flex items-center justify-center px-4 py-2.5 rounded-md">
          <p className="text-xs text-gray-700 font-semibold mr-2.5">
            Lead Preview
          </p>
          <BsArrowRight className="h-4 w-4 text-gray-600  font-semibold" />
        </div>
      </div>

      <div className="flex justify-between items-center px-5 pt-5 pb-6 border-b-[1px] border-gray-300">
        <div className="border-[1px] border-gray-200 w-full rounded-md">
          <div className="flex justify-between items-start pt-4 px-3 pb-4 border-b-[1px] border-gray-300">
            <div className="flex justify-between items-start">
              <div className="avatar-group -space-x-6">
                <div className="avatar">
                  <div className="w-16">
                    <Image
                      src={require("../../../../../public/images/avatar/blackdog.jpg")}
                      width={100}
                      height={100}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="ml-2 mt-2">
                <h4 className="font-bold text-xl"> {lead?.lead_name?.name}</h4>
                <div className="flex justify-between items-center mt-0.5">
                  <div className="flex justify-between items-center">
                    <FiMail className="h-4 w-4 text-gray-500 mr-1.5 lowercase" />
                    <p className="text-sm text-gray-500">
                      {lead?.contact?.email}
                    </p>
                  </div>
                  <div className="bg-gray-500 h-1 w-1 rounded-full mx-4"></div>
                  <div className="flex justify-between items-center">
                    <FiPhoneCall className="h-4 w-4 text-gray-500 mr-1.5 lowercase" />
                    <p className="text-sm text-gray-500">
                      {lead?.contact?.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  gap-3 mb-1">
              <button className="h-8 w-8 flex justify-center items-center border-[1px] border-gray-200 p-1 rounded-full cursor-pointer hover:bg-white ">
                <AiOutlinePlus className="h-8 w-8 text-gray-500 " />
              </button>
              <button className="h-8 w-8 flex justify-center items-center border-[1px] border-gray-200 p-1.5 rounded-full cursor-pointer hover:bg-white ">
                <AiOutlineMail className="h-8 w-8 text-gray-500 " />
              </button>
              <button className="h-8 w-8 flex justify-center items-center border-[1px] border-gray-200 p-1.5 rounded-full cursor-pointer hover:bg-white ">
                <IoCallOutline className="h-8 w-8 text-gray-500 " />
              </button>
              <button className="h-8 w-8 flex justify-center items-center border-[1px] border-gray-200 p-1 rounded-full cursor-pointer hover:bg-white ">
                <EllipsisHorizontalIcon className="h-8 w-8 text-gray-500 " />
              </button>
            </div>
          </div>
          <div className="flex  items-start  radial h-20  bg-gradient-radial from-black/0 to-base-100/100 bg-[length:5px_5px] bg-center pr-2 backdrop-blur-md backdrop-saturate-50 md:pr-4">
            <div className="border-r-[1px] border-gray-300 px-5 py-3 w-1/4">
              <p className="text-xs text-gray-500 font-semibold font-main tracking-wider">
                Lead Owner
              </p>
              <h4 className="font-bold font-main tracking-wider text-[#353535] text-base pt-1.5">
                {lead?.lead_owner?.name}
              </h4>
            </div>
            <div className="border-r-[1px] border-gray-300 px-5 py-3 w-1/4">
              <p className="text-xs text-gray-500 font-semibold font-main tracking-wider">
                Company
              </p>
              <h4 className="font-bold font-main tracking-wider text-[#353535] text-base pt-1.5">
                {lead?.lead_owner?.name}
              </h4>
            </div>
            <div className="border-r-[1px] border-gray-300 px-5 py-3 w-1/4">
              <p className="text-xs text-gray-500 font-semibold font-main tracking-wider">
                Job Title
              </p>
              <h4 className="font-bold font-main tracking-wider text-[#353535] text-base pt-1.5">
                {lead?.lead_owner?.name}
              </h4>
            </div>
            <div className="border-r-[1px] border-gray-300 px-5 py-3 w-1/4">
              <p className="text-xs text-gray-500 font-semibold font-main tracking-wider">
                Annual Revenuew
              </p>
              <h4 className="font-bold font-main tracking-wider text-[#353535] text-base pt-1.5">
                {lead?.lead_owner?.name}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
