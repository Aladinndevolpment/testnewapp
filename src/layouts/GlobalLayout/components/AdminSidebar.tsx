import {
  ArrowLeftIcon,
  SignalIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import data from "./data";
import { useRouter } from "next/router";
import Logo from "@/components/UI/Logo";
import Link from "next/link";
import Image from "next/image";
import { GlobalContext } from "..";

export default function AdminSidebar() {
  const { asPath } = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);
  const ctx = useContext(GlobalContext);

  return (
    <div className="w-full relative overflow-hidden">
      <div
        className={`pt-5 flex bg-white overflow-y-hidden flex-col justify-start top-0 left-0 pl-0 w-[80%] lg:w-full  bg-auth shadow-md  fixed lg:relative h-screen z-40  ease-in-out duration-300  `}
      >
        <div className="absolute block lg:hidden top-5 right-10">
          <button onClick={() => ctx.setOpen(!ctx.open)}>
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
        <ul className="w-full pt-0">
          {data.map((item) => (
            <li key={item.title} className={`mb-4  pl-4   w-full py-2`}>
              <Link href={item.link}>
                <div
                  // onClick={() => ctx.setOpen(!ctx.open)}
                  className={` flex items-center   py-1 px-3 w-full justify-start`}
                >
                  {asPath == item.link ? (
                    <Image src={item.icon} alt="" className="h-5 w-5" />
                  ) : (
                    <Image src={item.icon} alt="" className="h-5 w-5" />
                  )}

                  <span
                    className={` ${
                      asPath == item.link ? " text-black  " : "text-black"
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
    </div>
  );
}
