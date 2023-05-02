import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Search() {
  return (
    <div className="relative  p-1">
      <input
        type="text"
        className="pl-10 border-[1px] border-lightGray bg-transparent rounded-full py-2.5 font-main w-[230px]  text-xs focus:outline-none focus:border-none   focus:bg-white focus:rounded-full  text-black"
        placeholder="Search"
        onChange={({ target }) => {}}
      />
      <div className="   absolute top-2 left-2 font-bold h-[30px] w-[30px] p-1.5 rounded-full">
        <MagnifyingGlassIcon className="  text-FontGray" />
      </div>
    </div>
  );
}
