import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { BiNotepad } from "react-icons/bi";
import { BsCupHot } from "react-icons/bs";
export default function TopNavigation() {
  const router = useRouter();
  return (
    <div className="bg-white shadow-lg px-4 border-b">
      <div className="flex justify-between items-center">
        <div className="pb-3 pt-3">
          <Image
            src={require("../../../../public/images/logo/logo.png")}
            alt="Emerge"
            className="w-28 lg:w-28"
          />
        </div>

        <ul className="w-[53%] pl-16 flex justify-start items-center gap-12 pt-5">
          <li
            className={` ${
              router.asPath == "/conversations/dashboard"
                ? "text-gray-800 text-sm  font-semibold border-b-2 border-newBlue  "
                : "text-gray-600  text-[14px]  font-medium"
            }  pb-5`}
          >
            Dashboard
          </li>
          <li
            className={` ${
              router.asPath == "/conversations"
                ? "text-gray-800 text-sm  font-semibold border-b-2 border-newBlue "
                : "text-gray-600  text-[14px] font-medium"
            }  pb-5`}
          >
            Conversations
          </li>
          <li>
            <div className="dropdown dropdown-bottom">
              <div tabIndex={0} className="flex justify-between items-center  ">
                <p
                  className={` ${
                    router.asPath == "/conversations/search"
                      ? "text-gray-800 text-sm  font-semibold border-b-2 border-newBlue  "
                      : "text-gray-600 text-[14px]  font-medium"
                  } pb-5 `}
                >
                  {" "}
                  Search
                </p>
                <ChevronDownIcon className="h-4 w-4 mb-5 ml-2" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu py-2 px-4  shadow bg-base-100 rounded-md w-52"
              >
                <li className={` text-gray-800 text-sm  font-semibold mb-2 `}>
                  Conversations
                </li>
                <li className={` text-gray-800 text-sm  font-semibold mb-2 `}>
                  Search
                </li>
              </ul>
            </div>
          </li>

          <li
            className={` ${
              router.asPath == "/conversations/settings"
                ? "text-gray-800 text-sm  font-semibold border-b-2 border-newBlue  "
                : "text-gray-600  text-[14px]  font-medium"
            } pb-5 `}
          >
            Settings
          </li>
        </ul>

        <ul className="flex justify-between items-center gap-3 pt-1">
          <button className="flex justify-start items-center border-[1px] border-gray-400 py-2 px-2 rounded-md mb-1">
            <BiNotepad className="h-5 w-5" />
            <span className="text-[13px] ml-2 text-gray-600   font-semibold">
              {" "}
              Submit Feedback{" "}
            </span>
          </button>
          <button className="flex justify-start items-center bg-newBlue py-2.5 px-2 rounded-md mb-1">
            <BsCupHot className="h-4 w-4 text-white" />
            <span className="text-[12px] ml-2 text-white font-semibold">
              Lets take a break
            </span>
          </button>
          <button className="bg-blue-100 py-2 px-3 rounded-full  mb-1">
            <span className="text-[12px] ml-2 text-newBlue font-semibold pb-0.5">
              chase@gohighlevel.com
            </span>
          </button>
        </ul>
      </div>
    </div>
  );
}
