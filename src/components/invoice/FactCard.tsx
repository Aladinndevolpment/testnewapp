import { useEffect, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

interface IFactCard {
  title: string;
  number: number;
  titleIcon: React.ReactNode;
  subData: string;
  subSpanData: string;
  subIcon: React.ReactNode;
  currency: string;
  index: number;
}

export default function FactCard({
  title,
  number,
  titleIcon,
  subData,
  subSpanData,
  subIcon,
  currency,
  index,
}: IFactCard) {
  const [count, setCount] = useState(0);
  var timesRun = number - 20;

  useEffect(() => {
    var interval = setInterval(function () {
      timesRun += 1;
      if (timesRun > number) {
        setCount(number);
        clearInterval(interval);
      } else {
        setCount(timesRun);
      }
      //do whatever here..
    }, 40);
  }, [number, timesRun]);

  return (
    <div className="  w-full h-full  bg-white px-4 pt-3 pb-1 relative">
      <div className="flex items-center gap-2">
        <div className="p-2 border rounded-full">{titleIcon}</div>
        <h4 className="text-[12px] text-gray-500 font-semibold">{title}</h4>
      </div>
      <div className="mt-2 text-2xl font-bold ml-1">
        {currency}
        {count}
      </div>
      <div
        className={` ${
          index == 1
            ? "text-green-700"
            : index == 2
            ? "text-red-700"
            : index == 3
            ? "text-cyan-700"
            : "text-gray-700"
        }  mt-1 text-[12px] font-semibold ml-1 flex gap-1 items-center`}
      >
        {subIcon}
        <div>
          {subData} <span className="text-gray-600">{subSpanData}</span>
        </div>
      </div>
      {index == 3 ? null : (
        <div className="h-16 w-[2px] bg-gray-200 absolute right-0 top-6 hidden lg:block"></div>
      )}
    </div>
  );
}
