import { XMarkIcon } from "@heroicons/react/24/solid";
import actionData from "../../components/workflow/actionData";
import React from "react";

export default function ChooseActions({ updateActionData, onClose }: any) {
  return (
    <div>
      <div className="flex justify-between items-center  ">
        <p className="text-dark font-semibold text-base pb-3 pt-3 leading-5">
          Choose an Action
        </p>
        <button onClick={onClose}>
          <XMarkIcon className="h-5 w-5 text-FontGray" />
        </button>
      </div>

      <div className="mb-2">
        {actionData.map((item, index) => (
          <div key={index}>
            <p className="text-gray-600 font-medium text-sm pb-3 pt-3 leading-5">
              {item?.title}
            </p>
            <div className="flex flex-wrap ">
              {item?.subContent?.map((mainData, mainIndex) => (
                <div
                  onClick={() => updateActionData(mainData?.title)}
                  key={mainIndex}
                  className="cursor-pointer w-full md:w-1/2 lg:w-1/3 pr-4 mb-3"
                >
                  <div className="flex justify-start items-start border-[1px] border-lightGray bg-white rounded-md py-3 px-2">
                    <div className="text-newBlue">{mainData?.icon}</div>
                    <div className="pl-3">
                      <p className="text-dark font-semibold text-sm  ">
                        {" "}
                        {mainData?.title}{" "}
                      </p>
                      <p className="text-FontGray font-medium text-xs  ">
                        {mainData?.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
