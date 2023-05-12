import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import modalData from "./modalData";
import { useRecoilValue } from "recoil";
import { itemState } from "@/atoms/item";

export default function TriggerList({ onClose, updateData, components }: any) {
  const recoilItem = useRecoilValue(itemState);

  return (
    <div className="py-3">
      <div className="flex justify-between items-center border-b-[1px] border-gray-300 pb-2 px-3 ">
        <p className="  text-xl text-dark font-semibold"> {recoilItem} </p>
        <button onClick={onClose}>
          <XMarkIcon className="h-5 w-5 text-FontGray" />
        </button>
      </div>
      <div className="px-3 py-3">{components}</div>
    </div>
  );
}
