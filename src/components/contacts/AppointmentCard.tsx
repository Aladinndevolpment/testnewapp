import {
  CalendarIcon,
  ChevronDownIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { Avatar } from "@mui/material";
import { BiCalendarCheck } from "react-icons/bi";

interface IAppointmentCardProps {
  meetingTime: string;
}

export default function AppointmentCard({
  meetingTime,
}: IAppointmentCardProps) {
  return (
    <div className="font-main w-full rounded-lg border border-gray-100 bg-white shadow-sm">
      <div className="px-3 py-2 flex items-center border-b border-b-gray-100">
        <ChevronDownIcon className="w-4 h-4 text-grey stroke-2" />

        <span className="ml-4 p-1 rounded-full bg-pink-200">
          <BiCalendarCheck className="w-4 h-4 text-pink-400" />
        </span>
        <span className="pl-3 text-sm font-semibold text-gray-700">
          Appointment<span className="text-main font-medium"> by </span>
          Easther Howard
        </span>

        <span className="flex items-center ml-auto">
          <CalendarIcon className="w-5 h-5 text-gray-500" />
          <time className="pl-2 text-sm font-medium text-gray-700">
            {meetingTime}
          </time>
          <span className="ml-2 p-2 cursor-pointer rounded-full hover:bg-gray-50 active:bg-gray-100 transition-all duration-200">
            <EllipsisHorizontalIcon className="w-6 h-6 text-gray-400 stroke-2" />
          </span>
        </span>
      </div>

      <div className="p-5 flex">
        <div className="flex-none w-10 h-10 mt-1 border border-gray-200 rounded-full mr-3">
          <BiCalendarCheck className="m-2 w-5 h-5" />
        </div>
        <div>
          <p className="leading-7 font-semibold">
            Appointment scheduled with Jerome Bell
          </p>
          <p className="pt-2 text-sm text-gray-400  tracking-wider">
            She&apos;s interested in our new product line and wants our very best
            price. Please include a detailed breakdown of costs.
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="w-full grid grid-cols-3 items-center justify-center p-3 border border-gray-200 rounded-md">
          <div className="flex flex-col items-center justify-center border-r border-r-gray-200">
            <label className="text-sm text-gray-400 ">Reminder</label>
            <span className="flex gap-x-1 items-center  text-gray-600">
              20 minutes before
              <ChevronDownIcon className="w-3 h-3 text-gray-600 translate-y-[2px]" />
            </span>
          </div>
          <div className="flex flex-col items-center justify-center border-r border-r-gray-200">
            <label className="text-sm text-gray-400 ">Duration</label>
            <span className="flex gap-x-1 items-center">1 Hour</span>
          </div>
          <div className="flex flex-col items-center justify-center text-gray-600">
            <span className="text-sm text-gray-400 ">Attendance</span>
            <span className="flex gap-x-1.5 items-center">
              <Avatar
                sx={{
                  bgcolor: "#1066cf",
                  width: 16,
                  height: 16,
                }}
                src="/profile-img4.jpg"
              />
              Esther Howard
              <ChevronDownIcon className="w-3 h-3 text-gray-600 translate-y-[2px]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
