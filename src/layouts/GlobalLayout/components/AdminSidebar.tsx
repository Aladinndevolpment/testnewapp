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
  const router = useRouter();
  return (
    <div className="w-full relative overflow-hidden">
      <div
        className={`${
          router.asPath == "/calendar" ? "h-[100vh]" : "h-[90vh]"
        }  fixed top-28 lg:top-0 left-0 pt-10 lg:pt-5 flex bg-white overflow-y-scroll scrollbar-hide flex-col justify-start   pl-0 w-[80%] lg:w-full  bg-auth shadow-md    lg:relative   z-40  ease-in-out duration-300 `}
      >
        {/* <div className="absolute block lg:hidden top-10 lg:top-5 right-10">
          <button>
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div> */}
        <ul className="w-full pt-0">
          {data.map((item) => (
            <li key={item.title} className={`mb-4  pl-1 w-full py-1`}>
              <Link href={item.link}>
                <div
                  onClick={() => ctx.setOpen(!ctx.open)}
                  className={`flex md:hidden   items-center   py-1 px-3 w-full justify-start`}
                >
                  <div
                    className={` ${
                      asPath == item.link
                        ? " text-[#4375EA] "
                        : "text-[#4B5563]"
                    }
                    text-[14px] font-semibold tracking-wide font-main ml-3`}
                  >
                    {item.iconCustom}
                  </div>

                  <span
                    className={` ${
                      asPath == item.link ? "text-[#4375EA]" : "text-[#4B5563]"
                    }
                    text-[14px] font-semibold tracking-wide font-main ml-3`}
                  >
                    {item.title}
                  </span>
                </div>
                <div
                  className={`hidden md:flex   items-center   py-1 px-3 w-full justify-start`}
                >
                  <div
                    className={` ${
                      asPath == item.link
                        ? " text-[#4375EA] "
                        : "text-[#4B5563]"
                    }
                    text-[14px] font-semibold tracking-wide font-main ml-3`}
                  >
                    {item.iconCustom}
                  </div>

                  <span
                    className={` ${
                      asPath == item.link ? "text-[#4375EA]" : "text-[#4B5563]"
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
