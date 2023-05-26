import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-5 pt-52 px-4 ">
        <p
          className={` mt-4 mb-2 text-center text-[25px] text-[#383838] tracking-wide`}
        >
          Opps Page not found
        </p>
        <Link
          href="/"
          className={` border-2 border-[#313131] bg-[#313131] rounded-full w-40 mb-6   py-2  mt-3 `}
        >
          <p className={` text-center text-xl text-[#fff]  tracking-wide`}>
            Go To Home
          </p>
        </Link>
      </div>
    </div>
  );
}
