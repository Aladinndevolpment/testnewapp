import {
  ArrowUturnLeftIcon,
  AtSymbolIcon,
  LinkIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useState } from "react";

export default function ChatMessage({ handleChange }: any) {
  const [message, setMessage] = useState("");
  return (
    <div className="bg-white shadow-md rounded-b-md h-76   ">
      <div className="bg-darkBlack py-3 px-6 rounded-t-3xl flex  justify-between items-center">
        <div className="flex  justify-start items-center">
          <button onClick={handleChange}>
            <ArrowUturnLeftIcon className="h-5 w-5 text-white" />
          </button>
          <select className="text-[11px] pr-2 md:text-[14px] md:pr-5 ml-2 text-white bg-transparent  focus-within:bottom-0 focus-within:outline-0 focus-visible:border-0">
            <option className="bg-white text-dark ">Reply</option>
            <option className="bg-white text-dark ">Person A</option>
            <option className="bg-white text-dark ">Person B</option>
            <option className="bg-white text-dark ">Person C</option>
          </select>
          <p className="border-l-[1px] border-gray-400 ml-4 pl-4 text-white text-[11px] md:text-[13px] ">
            {" "}
            From Angkasa Dharma{" "}
            <span className="text-gray-400">(angkasa@zoopherhr.com)</span>
          </p>
        </div>
        <button>
          <TrashIcon className="h-5 w-5 text-gray-400" />
        </button>
      </div>
      <div className="  flex  justify-start items-center border-[1px] border-lightGray px-6 py-1">
        <p className="font-medium text-md text-lg"> To :</p>
        <input
          type="email"
          placeholder="Type here"
          className="input w-[80%] bg-transparent  focus-within:bottom-0 focus-within:outline-0 focus-visible:border-0"
        />
      </div>
      <div className="  px-2  ">
        <p className="font-medium text-md text-lg pl-4 pb-2 pt-3">
          {" "}
          Hi Leonard Campbell,{" "}
        </p>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className=" text-sm w-full textarea bg-transparent scrollbar-hide focus-within:bottom-0 focus-within:outline-0 focus-visible:border-0"
        ></textarea>
      </div>
      <div className="  flex  justify-between items-center mr-4 ">
        <div className="flex  justify-start items-center px-6 py-3">
          <button className="flex justify-center items-center text-dark font-medium text-xl h-10 w-10 bg-[#f1f3f4] p-3 rounded-full cursor-pointer hover:bg-white hover:shadow-md transition-all">
            Ab
          </button>
          <button className="mx-4 flex justify-center items-center text-dark font-semibold text-xl h-10 w-10 bg-[#f1f3f4] p-2 rounded-full cursor-pointer hover:bg-white hover:shadow-md transition-all">
            <AtSymbolIcon className=" h-8 w-8 text-dark " />
          </button>
          <button className="flex justify-center items-center text-dark font-semibold text-xl h-10 w-10 bg-[#f1f3f4] p-2 rounded-full cursor-pointer hover:bg-white hover:shadow-md transition-all">
            <LinkIcon className="h-8 w-8 text-dark " />
          </button>
        </div>
        <button
          onClick={() => handleChange(message)}
          className="bg-green-500 rounded-full  px-5 py-2.5 flex justify-center items-center"
        >
          <Image
            src={require("../../../public/images/icons/plane.png")}
            alt=" "
            className="w-4 h-4"
          />
          <p className="text-white pl-3 font-semibold"> Send </p>
        </button>
      </div>
    </div>
  );
}
