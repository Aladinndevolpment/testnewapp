import { BsArrowUpRight } from "react-icons/bs";

interface IFactCard {
  title: string;
  data: string;
  titleIcon: React.ReactNode;
  subData: string;
  subSpanData: string;
  subIcon: React.ReactNode;
}

export default function FactCard({
  title,
  data,
  titleIcon,
  subData,
  subSpanData,
  subIcon,
}: IFactCard) {
  return (
    <div className="w-full border bg-white p-4 shadow rounded-sm">
      <div className="flex items-center gap-2">
        <div className="p-2 border rounded-full">{titleIcon}</div>
        <h4 className="text-sm text-gray-500 font-semibold">{title}</h4>
      </div>
      <div className="mt-1 text-xl font-semibold ml-1">{data}</div>
      <div className="mt-1 text-xs font-semibold ml-1 text-green-700 flex gap-1 items-center">
        {subIcon}
        <div>
          {subData} <span className="text-gray-600">{subSpanData}</span>
        </div>
      </div>
    </div>
  );
}
