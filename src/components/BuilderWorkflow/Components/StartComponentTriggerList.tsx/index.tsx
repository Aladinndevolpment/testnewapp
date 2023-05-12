import { XMarkIcon } from "@heroicons/react/24/solid";
import data from "./data";
import WorkflowFlyout from "@/components/workflow/WorkflowFlyout";
import { useState } from "react";
import FormData from "./FormData";

export default function StartComponentTriggerList({
  onClose,
  updateData,
}: any) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [actionData, setActionData] = useState("");

  return (
    <>
      <WorkflowFlyout
        visibility={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        renderData={
          <FormData
            onClose={() => {
              setIsOpenModal(false);
            }}
            updateData={(item: any) => {
              console.log(item);
              setIsOpenModal(false);
              updateData(item);
            }}
            actionData={actionData}
          />
        }
      />

      <div className=" py-3  ">
        <div className="flex justify-between items-center border-b-[1px] border-gray-300 pb-2 px-3 ">
          <p className="  text-lg text-dark font-medium">Triggers </p>
          <button onClick={onClose}>
            <XMarkIcon className="h-5 w-5 text-FontGray" />
          </button>
        </div>
        <ul className="w-full px-2 pt-2">
          {data.map((item, index) => (
            <li key={index} className="  bg-white mb-3">
              <p
                className={` capitalize text-dark text-lg font-semibold  tracking-wide  `}
              >
                {item?.title}
              </p>
              <ul className="pt-2">
                {item?.subContent?.map((mainData, mainIndex) => (
                  <li className=" " key={mainIndex}>
                    <div className="flex justify-start items-center border-[1px] border-gray-200 mb-3 p-2 rounded-lg">
                      <input
                        type="radio"
                        name="radio"
                        className="radio checked:bg-blue-500"
                        onChange={() => {
                          setActionData(mainData?.title);
                          setIsOpenModal(true);
                        }}
                      />
                      <p
                        className={` capitalize text-gray-600 text-base font-semibold  tracking-wide ml-2 `}
                      >
                        {mainData?.title}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
