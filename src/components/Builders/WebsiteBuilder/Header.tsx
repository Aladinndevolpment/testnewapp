import ReportingStats from "@/components/Reporting/Stats";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineFundView } from "react-icons/ai";
import { FiTrendingDown } from "react-icons/fi";
import { HiCursorClick } from "react-icons/hi";
import { MdLeaderboard } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { CgOptions } from "react-icons/cg";

export default function Header() {
  // const buttonData = [
  //   {
  //     id: "tab1",
  //     label: "Manage",
  //     content: " ",
  //   },
  //   {
  //     id: "tab2",
  //     label: "Blog",
  //     content: " ",
  //   },
  //   {
  //     id: "tab3",
  //     label: "Site Tree",
  //     content: " ",
  //   },
  //   {
  //     id: "tab4",
  //     label: "SEO",
  //     content: " ",
  //   },
  // ];
  // const [buttonDemo, setButtonDemo] = useState<any>(buttonData[0].id);

  return (
    <div>
      <div className="bg-white w-full py-4 px-5">
        <div className=" justify-start ">
          <div className="mr-5">
            <p className="pb-4 px-4 font-semibold text-2xl">
              Site Builder
            </p>
          </div>
          {/* <div className="bg-gray-200 flex items-center my-2 rounded-lg">
            {buttonData?.map((tab: any, index: any) => (
              <div
                key={index}
                onClick={() => setButtonDemo(tab.id)}
                className={`py-2 px-4   duration-300   ${
                  buttonDemo == tab.id
                    ? "bg-white text-darkBlack shadow-md shadow-gray-400 rounded-md"
                    : "  text-gray-400 "
                } cursor-pointer`}
              >
                {tab.label}
              </div>
            ))}
          </div> */}
              <div className="flex px-4 items-center text-xs justify-between w-10/12 gap-5">
        <div className="w-full md:w-1/4">
          <ReportingStats
            title="Page Views"
            currency="$"
            titleIcon={<AiOutlineFundView className="text-lg text-newBlue" />}
            subSpanData={"vs Last month:"}
            subIcon={<BsArrowUpRight className="text-[8px]" />}
            index={1}
            numberValue={537}
            numberValueData={"+0.25%"}
            totalNo={4}
          />
        </div>

        <div className="w-full md:w-1/4">
          <ReportingStats
            title="Options"
            currency="$"
            titleIcon={<CgOptions className="h-4 w-4 text-yellow-500" />}
            subSpanData={"vs Last month:"}
            subIcon={<BsArrowUpRight className="text-[8px]" />}
            index={2}
            numberValue={537}
            numberValueData={"+0.15%"}
            totalNo={4}
          />
        </div>

        <div className="w-full md:w-1/4">
          <ReportingStats
            title="Sales"
            currency="$"
            titleIcon={<MdLeaderboard className="h-4 w-4 text-greenShade" />}
            subSpanData={"vs Last month:"}
            subIcon={<BsArrowUpRight className="text-[8px]" />}
            index={3}
            numberValue={537}
            numberValueData={"+0.08%"}
            totalNo={4}
          />
        </div>

        <div className="w-full md:w-1/4">
          <ReportingStats
            title="Earnings"
            currency="$"
            titleIcon={
              <RiMoneyDollarCircleFill className="h-4 w-4 text-secondary" />
            }
            subSpanData={"vs Last month:"}
            subIcon={<FiTrendingDown className="text-[8px]" />}
            index={4}
            numberValue={537}
            numberValueData={"-0.08%"}
            totalNo={4}
          />
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
