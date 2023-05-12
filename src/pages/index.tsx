import { titleState } from "@/atoms/title";
import HomeComponents from "@/components/Home";
import Image from "next/image";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex justify-end items-end mt-5 lg:mt-0">
          <a
            href="calendar"
            className="text-xs bg-[#49c496] text-white flex justify-center items-center  px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all  font-semibold"
          >
            Calendar
          </a>
          <a
            href="team"
            className="text-xs ml-3 bg-newBlue text-white flex justify-center items-center  px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all   font-semibold"
          >
            Teams
          </a>
          <a
            href="integrations"
            className=" ml-3 text-xs bg-[#49c496] text-white flex justify-center items-center  px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all  font-semibold"
          >
            Integrations
          </a>
          <a
            href="chat"
            className=" text-xs ml-3 bg-newBlue text-white flex justify-center items-center  px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all   font-semibold"
          >
            Chat
          </a>
          <a
            href="workflow/workflow"
            className=" text-xs ml-3 bg-newBlue text-white flex justify-center items-center  px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all   font-semibold"
          >
            WorkFLow
          </a>
        </div>
      </div>
    </>
  );
}
