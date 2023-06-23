import {
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { Avatar } from "@mui/material";

const ActivityCard = () => {
  return (
    <div className="font-main w-full rounded-lg border border-gray-100 bg-white shadow-sm">
      <div className="px-3 py-2 flex items-center border-b border-b-gray-100">
        <ChevronDownIcon className="w-4 h-4 text-grey stroke-2" />

        <span className="ml-4 p-1 rounded-full bg-blue-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#1066cf"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
            />
          </svg>
        </span>
        <span className="pl-3 text-sm font-medium text-gray-700">
          Task <span className="text-main font-light">created</span> Easther
          Howard
        </span>

        <span className="flex items-center ml-auto">
          <span className="font-light text-sm text-gray-400 pr-2">Due: </span>
          <CalendarIcon className="w-5 h-5 text-gray-500" />
          <time className="pl-2 text-sm font-medium text-gray-700">
            Today, 12:00 PM
          </time>
          <span className="ml-2 p-2 cursor-pointer rounded-full hover:bg-gray-50 active:bg-gray-100 transition-all duration-200">
            <EllipsisHorizontalIcon className="w-6 h-6 text-gray-400 stroke-2" />
          </span>
        </span>
      </div>

      <div className="p-5 flex">
        <span className=" flex-none border border-gray-200 bg-gray-100 w-7 h-7 rounded-full mr-4" />
        <div>
          <p className="leading-7 font-semibold">
            Prepare quote for Jerome Bell
          </p>
          <p className="pt-2 text-sm text-gray-400 font-light tracking-wider">
            She&apos;s interested in our new product line and wants our very best
            price. Please include a detailed breakdown of costs.
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="w-full grid grid-cols-3 p-3 border border-gray-200 rounded-md">
          <div className="pr-16 pl-2 w-fit border-r border-r-gray-200">
            <label className="text-sm text-gray-400 font-light">Reminder</label>
            <span className="flex gap-x-1 items-center  text-gray-600">
              No reminder
              <ChevronDownIcon className="w-3 h-3 text-gray-600 translate-y-[2px]" />
            </span>
          </div>
          <div className="pr-20 pl-5 w-fit border-r border-r-gray-200">
            <label className="text-sm text-gray-400 font-light">
              Task Priority
            </label>
            <span className="flex gap-x-1 items-center">
              <span className="block w-4 h-4 bg-primary rounded mr-1  text-gray-600" />
              High
              <ChevronDownIcon className="w-3 h-3 text-gray-600 translate-y-[2px]" />
            </span>
          </div>
          <div className="pr-12 text-gray-600">
            <span className="text-sm text-gray-400 font-light">
              Assigned to
            </span>
            <span className="flex gap-x-1.5 items-center">
              <Avatar
                sx={{
                  bgcolor: "#1066cf",
                  width: 16,
                  height: 16,
                }}
                src="/profile-img4.jpg"
              />{" "}
              Esther Howard
              <ChevronDownIcon className="w-3 h-3 text-gray-600 translate-y-[2px]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ActivityCard2 = () => {
  return (
    <div className="font-main mt-4 w-full rounded-lg border border-gray-100 bg-white shadow-sm">
      <div className="px-3 py-2 flex items-center border-b border-b-gray-100">
        <ChevronRightIcon className="w-4 h-4 text-grey stroke-2" />

        <span className="ml-4 p-1 rounded-full bg-blue-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#1066cf"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
            />
          </svg>
        </span>
        <span className="pl-3 text-sm font-medium text-gray-700">
          Task <span className="text-main font-light">created</span> Easther
          Howard
        </span>

        <span className="flex items-center ml-auto">
          <span className="font-light text-sm text-gray-400 pr-2">Due: </span>
          <CalendarIcon className="w-5 h-5 text-gray-500" />
          <time className="pl-2 text-sm font-medium text-gray-700">
            Today, 12:00 PM
          </time>
          <span className="ml-2 p-2 cursor-pointer rounded-full hover:bg-gray-50 active:bg-gray-100 transition-all duration-200">
            <EllipsisHorizontalIcon className="w-6 h-6 text-gray-400 stroke-2" />
          </span>
        </span>
      </div>

      <div className="p-5 flex">
        <span className=" flex-none border border-gray-200 bg-gray-100 w-7 h-7 rounded-full mr-4" />
        <div>
          <p className="leading-7 font-semibold">
            Prepare quote for Jerome Bell
          </p>
          <p className="pt-2 text-sm text-gray-400 font-light tracking-wider">
            She&apos;s interested in our new product line and wants our very best
            price. Please include a detailed breakdown of costs.
          </p>
        </div>
      </div>
    </div>
  );
};

const ActivityCard3 = () => {
  return (
    <div className="font-main mt-4 w-full rounded-md bg-white shadow-sm">
      <div className="px-3 py-2 flex items-center border-b border-b-gray-100">
        <ChevronRightIcon className="w-4 h-4 text-grey stroke-2" />

        <span className="ml-4 p-1 rounded-full bg-blue-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#1066cf"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
            />
          </svg>
        </span>
        <span className="pl-3 text-sm font-medium text-gray-700">
          Task <span className="text-main font-light">created</span> Easther
          Howard
        </span>

        <span className="flex items-center ml-auto">
          <span className="font-light text-sm text-gray-400 pr-2">Due: </span>
          <CalendarIcon className="w-5 h-5 text-gray-500" />
          <time className="pl-2 text-sm font-medium text-gray-700">
            Today, 12:00 PM
          </time>
          <span className="ml-2 p-2 cursor-pointer rounded-full hover:bg-gray-50 active:bg-gray-100 transition-all duration-200">
            <EllipsisHorizontalIcon className="w-6 h-6 text-gray-400 stroke-2" />
          </span>
        </span>
      </div>

      <div className="p-5 flex">
        <span className=" flex-none border border-gray-200 bg-gray-100 w-7 h-7 rounded-full mr-4" />
        <div>
          <p className="leading-7 font-semibold">
            Prepare quote for Jerome Bell
          </p>
          <p className="pt-2 text-sm text-gray-400 font-light tracking-wider">
            She&apos;s interested in our new product line and wants our very best
            price. Please include a detailed breakdown of costs.
          </p>
        </div>
      </div>
    </div>
  );
};

export { ActivityCard, ActivityCard2, ActivityCard3 };
