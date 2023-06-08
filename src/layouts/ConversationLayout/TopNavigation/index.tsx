/* eslint-disable @next/next/no-html-link-for-pages */
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiLogInCircle, BiNotepad } from "react-icons/bi";
import { BsCupHot } from "react-icons/bs";
export default function TopNavigation() {
  const router = useRouter();
  const [buttonActive, setButtonActive] = useState(true);

  return (
    <div
      className={` w-full h-[10.5vh] bg-[#1F2228] py-1.5 border-b-[1px] px-5 border-gray-200  lg:sticky top-0 z-50`}
    >
      <div className="flex justify-between items-center">
        <div className="pb-3 pt-3">
          <Link href="/">
            <Image
              src={require("../../../../public/images/logo/logo.png")}
              alt="Emerge"
              className="w-28 lg:w-28"
            />
          </Link>
        </div>

        <ul className="w-[65%] pl-16 flex justify-start items-center gap-12 pt-5">
          <Link href="/dashboard">
            <li
              className={` ${
                router.asPath == "/conversations/dashboard"
                  ? "text-white text-sm  font-semibold border-b-2 border-newBlue  "
                  : "text-white  text-[14px]  font-medium"
              } hover:text-secondary pb-5`}
            >
              Dashboard
            </li>
          </Link>
          <li>
            <div className="dropdown dropdown-bottom">
              <div
                tabIndex={0}
                className={`flex justify-between items-center  ${
                  router.asPath == "/conversations"
                    ? "border-b-2 border-newBlue   "
                    : null
                } `}
              >
                <p
                  className={` ${
                    router.asPath == "/conversations"
                      ? "text-blue-100 text-sm  font-semibold"
                      : "text-white text-[14px]  font-medium"
                  } hover:text-secondary pb-5`}
                >
                  Conversations
                </p>
                <ChevronDownIcon className="h-4 w-4 mb-5 ml-2 text-white" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu py-2 px-4  shadow bg-base-100 rounded-md w-52"
              >
                <a href="/conversations">
                  <li
                    className={`${
                      router.asPath == "/conversations"
                        ? " text-newBlue   "
                        : "text-gray-600"
                    } hover:text-secondary text-sm  font-semibold mb-3 mt-2`}
                  >
                    Conversations
                  </li>
                </a>
                <a href="">
                  <li
                    className={`${
                      router.asPath == "/conversations/manual-calls"
                        ? " text-newBlue   "
                        : "text-gray-600"
                    } hover:text-secondary text-sm  font-semibold mb-3 mt-2`}
                  >
                    Manual Calls
                  </li>
                </a>
                <a href="">
                  <li
                    className={`${
                      router.asPath == "/conversations/24hr-reminder"
                        ? " text-newBlue   "
                        : "text-gray-600"
                    } hover:text-secondary text-sm  font-semibold mb-3 mt-2`}
                  >
                    24hr reminder
                  </li>
                </a>
                <a href="">
                  <li
                    className={`${
                      router.asPath == "/conversations/action-required"
                        ? " text-newBlue   "
                        : "text-gray-600"
                    } hover:text-secondary text-sm  font-semibold mb-3 mt-2`}
                  >
                    Action Required
                  </li>
                </a>
              </ul>
            </div>
          </li>

          <li>
            <div className="dropdown dropdown-bottom">
              <div
                tabIndex={0}
                className={`flex justify-between items-center  ${
                  router.asPath == "/conversations/search"
                    ? "border-b-2 border-newBlue   "
                    : null
                } `}
              >
                <p
                  className={` ${
                    router.asPath == "/conversations/search"
                      ? "text-blue-100 text-sm  font-semibold"
                      : "text-white text-[14px]  font-medium"
                  } hover:text-secondary pb-5`}
                >
                  {" "}
                  Search
                </p>
                <ChevronDownIcon className="h-4 w-4 mb-5 ml-2 text-white" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu py-2 px-4  shadow bg-base-100 rounded-md w-52"
              >
                <a href="/conversations">
                  <li
                    className={`${
                      router.asPath == "/conversations"
                        ? " text-newBlue   "
                        : "text-gray-600"
                    } hover:text-secondary text-sm  font-semibold mb-3 mt-2`}
                  >
                    Conversations
                  </li>
                </a>
                <a href="">
                  <li
                    className={`${
                      router.asPath == "/conversations/manual-calls"
                        ? " text-newBlue   "
                        : "text-gray-600"
                    } hover:text-secondary text-sm  font-semibold mb-3 mt-2`}
                  >
                    Search
                  </li>
                </a>
              </ul>
            </div>
          </li>

          <Link href="/conversations/settings">
            <li
              className={` ${
                router.pathname.startsWith("/conversations/settings")
                  ? "text-blue-100 text-sm  font-semibold border-b-2 border-newBlue  "
                  : "text-white  text-[14px]  font-medium"
              } hover:text-secondary pb-5`}
            >
              Settings
            </li>
          </Link>
        </ul>

        <ul className="w-[25%] flex justify-end items-center gap-3 pt-1">
          {/* <button className="flex justify-start items-center border-[1px] border-gray-400 py-2 px-2 rounded-md mb-1">
            <BiNotepad className="h-5 w-5" />
            <span className="text-[13px] ml-2 text-white   font-semibold">
              {" "}
              Submit Feedback{" "}
            </span>
          </button> */}
          <div>
            {buttonActive ? (
              <button
                onClick={() => setButtonActive(!buttonActive)}
                className=" flex justify-start items-center bg-newBlue py-2.5 px-3 rounded-md mb-1"
              >
                <BiLogInCircle className="h-4 w-4 text-white" />
                <span className="text-[12px] ml-2 text-white font-semibold">
                  Login In
                </span>
              </button>
            ) : (
              <button
                onClick={() => setButtonActive(!buttonActive)}
                className="  flex justify-start items-center bg-newBlue py-2.5 px-2 rounded-md mb-1"
              >
                <BsCupHot className="h-4 w-4 text-white" />
                <span className="text-[12px] ml-2 text-white font-semibold">
                  Lets take a break
                </span>
              </button>
            )}
          </div>

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
