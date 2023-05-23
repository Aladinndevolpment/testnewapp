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
}

export default function FactCard({
  title,
  number,
  titleIcon,
  subData,
  subSpanData,
  subIcon,
  currency,
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
    <div className="w-full h-full border bg-white p-4 shadow rounded-sm">
      <div className="flex items-center gap-2">
        <div className="p-2 border rounded-full">{titleIcon}</div>
        <h4 className="text-sm text-gray-500 font-semibold">{title}</h4>
      </div>
      <div className="mt-1 text-xl font-semibold ml-1">
        {currency}
        {count}
      </div>
      <div className="mt-3 text-sm font-semibold ml-1 text-green-700 flex gap-1 items-center">
        {subIcon}
        <div>
          {subData} <span className="text-gray-600">{subSpanData}</span>
        </div>
      </div>
    </div>
  );
}
