import { Fullscreen } from "@mui/icons-material";
import React, { useState } from "react";
import { AiOutlineArrowUp, AiOutlineCalendar } from "react-icons/ai";
import { BiCalendarAlt } from "react-icons/bi";
import { BsArrowDownShort } from "react-icons/bs";
import ChartCard from "./ChartCard";

const mDeatails = [
  { title: "Marketing Assets" },
  { title: "Task" },
  { title: "Performance" },
];
const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
};
const Performace = () => {
  const [select, setSelect] = useState(0);
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Jan", "Fab", "Mar", "Apr", "May", "Jun"],
    },
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60],
      color: "#1258fc",
    },
    {
      name: "series-2",
      data: [20, 27, 42, 59, 63, 76],
      color: "red",
    },
  ];
  return (
    <div className="px-4">
      <div className=" border h-full  rounded-lg">
        {" "}
        {/* Main div */}
        {/*Top Box ke neeche wali line he */}
        <div className="ml-10 mt-7 flex justify-between">
          {/*Date Section */}
          <div className="flex w-full items-center space-x-3 ">
            <form className="flex mb-3 gap-2 font-semibold items-center text-sm text-slate-600">
              <select className="border rounded-md py-2 px2">
                <option value="">
                  <BiCalendarAlt />
                  Date Range
                </option>
              </select>
            </form>
            <div></div>

            {/*Contact Attribution Add kiya he or drop down menu bhi add hui he*/}
            <div className=" justify-center">
              <form className="flex mb-3 gap-2 font-semibold items-center text-sm text-slate-600">
                <select className="border rounded-md py-2 px2">
                  <option value=""> Contact Attribution</option>
                </select>
              </form>
            </div>
          </div>
          <div className="flex mb-3 gap-2 font-semibold items-center text-sm text-slate-600 mr-5 border pl-8 pr-8 rounded-md">
            Export
          </div>
        </div>
        {/* secound Box ke neeche wali line he */}
        <div className="border-collapse mt-8"></div>
        {/* Third Box */}
        <div className="ml-10 mt-5 flex items-center justify-between pr-6 mr-5">
          {/* Session box start */}
          <div>
            <p className="font-medium text-slate-500">Session</p>
            <div className="flex space-x-3 items-center">
              <p className="text-3xl font-bold">456</p>
              <div className="flex items-center bg-green-300 p-[2px] rounded-3xl w-16 justify-center text-green-800 h-5">
                <AiOutlineArrowUp className="text-[12px]" />
                0.08%
              </div>
            </div>
          </div>

          {/* New Contact box start */}
          <div>
            <p className="font-medium text-slate-500">New Contact</p>
            <div className="flex space-x-3 items-center">
              <p className="text-3xl font-bold">356</p>
              <div className="flex items-center bg-red-300 p-[2px] rounded-3xl w-16 justify-center text-red-800 h-5 ">
                <BsArrowDownShort className="text-[12px]" />
                0.5%
              </div>
            </div>
          </div>

          {/* Influenced box start */}
          <div>
            <p className="font-medium text-slate-500">Influenced Contact</p>
            <div className="flex space-x-3 items-center">
              <p className="text-3xl font-bold">2.356</p>
              <div className="flex items-center bg-red-300 p-[2px] rounded-3xl w-16 justify-center text-red-800 h-5">
                <BsArrowDownShort className="text-[12px]" />
                18%
              </div>
            </div>
          </div>

          {/* Closed box start */}
          <div>
            <p className="font-medium text-slate-500">Closed Deals</p>
            <div className="flex space-x-3 items-center">
              <p className="text-3xl font-bold">106</p>
              <div className="flex items-center bg-green-300 p-[2px] rounded-3xl w-16 justify-center text-green-800 h-5">
                <AiOutlineArrowUp className="text-[12px]" />
                21%
              </div>
            </div>
          </div>

          {/* Influenced Revenue box start */}
          <div>
            <p className="font-medium text-slate-500">Influenced Revenue</p>
            <div className="flex space-x-3 items-center">
              <p className="text-3xl font-bold">$1.564</p>
              <div className="flex items-center bg-green-300 p-[2px] rounded-3xl w-16 justify-center text-green-800 h-5">
                <AiOutlineArrowUp className="text-[12px]" />
                8%
              </div>
            </div>
          </div>
        </div>
        {/* Chart Section Starts From Here */}
        <div className="border  mt-5 ml-5 mr-5 rounded">
          <div className="w-full md:w-10/12 flex flex-wrap ">
            <ChartCard
              data={{
                options: options,
                series: series,
                type: "area",
                height: 500,
                width: "120%",
              }}
              name="Contact"
            />
          </div>
        </div>
        {/* Last Box/ 4th Box */}
        <div className="ml-5 flex mb-10">
          {/* Email Summary box */}
          <div className="border w-1/2 mt-4  mr-10 max-h-full  rounded-lg p-5 ">
            <p className="font-bold">Email Summary</p>
            <div className="flex justify-between items-center">
              {/* Email Sent Section */}
              <div className="mt-5 ">
                <p className="font-medium text-slate-500">Email Sent</p>
                <div className="flex space-x-3 items-center mt-2">
                  <p className="text-3xl font-bold">23</p>
                </div>
              </div>

              {/* Email Clicked Section */}
              <div className="mt-5 ">
                <p className="font-medium text-slate-500">Email Clicked</p>
                <div className="flex space-x-3 items-center mt-2">
                  <p className="text-3xl font-bold">43</p>
                </div>
              </div>

              {/* Email Opened Section */}
              <div className="mt-5 ">
                <p className="font-medium text-slate-500">Email Opened</p>
                <div className="flex space-x-3 items-center mt-2">
                  <p className="text-3xl font-bold">10</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ad Summary box */}
          <div className="border w-1/2 mt-4 mr-5 max-h-full  rounded-lg p-5 ">
            <p className="font-bold">Ad Summary</p>
            <div className="flex justify-between items-center">
              {/* Impression Section */}
              <div className="mt-5 ">
                <p className="font-medium text-slate-500">Impression</p>
                <div className="flex space-x-3 items-center mt-2">
                  <p className="text-3xl font-bold">456</p>
                </div>
              </div>

              {/* Clicks Section */}
              <div className="mt-5 ">
                <p className="font-medium text-slate-500">Clicks</p>
                <div className="flex space-x-3 items-center mt-2">
                  <p className="text-3xl font-bold">56</p>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-5 ">
                <p className="font-medium text-slate-500">Contact</p>
                <div className="flex space-x-3 items-center mt-2">
                  <p className="text-3xl font-bold">45</p>
                </div>
              </div>

              {/* Amount Spent Section */}
              <div className="mt-5 ">
                <p className="font-medium text-slate-500">Amount Spent</p>
                <div className="flex items-center mt-2">
                  <p className="text-3xl font-bold">$1.556</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performace;
