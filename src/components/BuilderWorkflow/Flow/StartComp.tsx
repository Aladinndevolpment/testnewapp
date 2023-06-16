import React, { useState } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import TriggerList from "@/components/workflow/TriggerList";
import StartComponentTriggerList from "../Components/StartComponentTriggerList.tsx";

export default function StartComp({
  handleChange,
}: {
  handleChange: Function;
}) {
  function RenderActionData({
    currentIndex,
  }: {
    currentIndex: number;
    title: string;
  }) {
    return (
      <div>
        <div>{actionComponents[currentIndex].comp}</div>
      </div>
    );
  }

  function ComponentFirst({ currentIndex }: { currentIndex: number }) {
    return (
      <>
        <div className="bg-white shadow-lg rounded-md w-[100%] mt-5 ">
          <div className="bg-blueHeader py-3 px-5 rounded-t-md flex justify-between items-center">
            <div className="flex justify-between items-center">
              <div className="bg-white h-7 w-7 rounded-full flex justify-center items-center">
                <ClockIcon className="h-5 w-5 text-blueHeader" />
              </div>
              <p className="ml-2 text-lg text-white font-medium">
                Execute When
              </p>
            </div>
            <div>
              <EllipsisHorizontalIcon className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className={`opacity-1 px-4 pb-5 pt-5 `}>
            <p
              className={`text-dark text-sm pb-5 w-full leading-5  text-center px-4`}
            >
              Choose the trigger that decides how a contacts enters this flow
            </p>

            <button
              onClick={() => setIsFlyOutVisible(true)}
              className="py-2 w-full rounded-md text-sm bg-OrangeBuilder text-white"
            >
              Setup Enrollment Trigger
            </button>
          </div>
        </div>
      </>
    );
  }

  function ComponentTwo({
    currentIndex,
    title,
  }: {
    currentIndex: number;
    title: string;
  }) {
    return (
      <>
        <div className="bg-white shadow-lg rounded-md w-[55%] lg:w-[100%] mt-5 ">
          <div className="bg-blueHeader py-3 px-5 rounded-t-md flex justify-between items-center">
            <div className="flex justify-between items-center">
              <div className="bg-white h-7 w-7 rounded-full flex justify-center items-center">
                <ClockIcon className="h-5 w-5 text-blueHeader" />
              </div>
              <p className="ml-2 text-lg text-white font-medium">
                Execute When
              </p>
            </div>
            <div>
              <EllipsisHorizontalIcon className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className={`opacity-1 px-4 pb-5 pt-5 w-[400px]`}>
            <p className="text-dark font-semibold text-sm pb-3  text-center  leading-5">
              Enrollment Trigger
            </p>
            <div className="border-[1px] border-lightGray bg-gray-100 rounded-md px-2 py-2 mb-4 ">
              <p className="text-dark text-sm leading-5 text-center">
                Contact has filled out, for
                <strong className="text-xs">{title}</strong>
              </p>
            </div>

            <button
              //   onClick={() => console.log("ok")}
              className="py-2 w-full rounded-md text-sm border-[2px] border-OrangeBuilder text-OrangeBuilder"
            >
              Edit Enrollment Trigger
            </button>
          </div>
        </div>
      </>
    );
  }

  const [dataOneUpdated, setDataOneUpdated] = useState(0);
  //1trigger
  const [triggerTitle, setTriggerTitle] = useState("");

  //modal1
  const [isFlyOutVisible, setIsFlyOutVisible] = useState(false);

  const handleAddMore = (currentIndex: number, titleHeading: any) => {
    if (newData == 0) {
      setActionComponents([
        {
          comp: <ComponentTwo currentIndex={newData} title={titleHeading} />,
          title: titleHeading,
        },
      ]);
    }
    //  else {
    //   setActionComponents([
    //     ...actionComponents,
    //     { comp: `id${currentIndex}`, title: `title${currentIndex + 100}` },
    //   ]);
    // }
    setNewData(newData + 1);
  };

  const [newData, setNewData] = useState<any>(0);
  const [actionComponents, setActionComponents] = useState<any>([
    {
      comp: (
        <>
          <ComponentFirst currentIndex={newData} />
        </>
      ),
    },
  ]);
  const [title, setTitle] = useState<any>("");

  return (
    <>
      <div
        className={`w-full h-screen overflow-y-scroll  scrollbar-hide fixed right-0 top-0  z-50 transition-all bg-black overflow-hidden ${
          isFlyOutVisible
            ? "translate-x-0 opacity-100 bg-opacity-30"
            : "translate-x-[100%] opacity-0 bg-opacity-0"
        }`}
      >
        <div
          className="absolute h-full w-full z-40 "
          onClick={() => setIsFlyOutVisible(false)}
        ></div>
        <div className="bg-white w-full md:w-[50%] lg:w-[40%] absolute right-0 min-h-full h-auto z-50 overflow-y-scroll scrollbar-hide">
          <StartComponentTriggerList
            onClose={() => {
              setIsFlyOutVisible(false);
            }}
            updateData={(item: any) => {
              setTriggerTitle(item);
              setIsFlyOutVisible(false);
              handleAddMore(newData + 1, item);
              handleChange();
            }}
          />
        </div>
      </div>

      <div>
        {actionComponents.map((item: any, index: any) => (
          <div key={index}>
            <RenderActionData currentIndex={index} title={title} />
          </div>
        ))}
      </div>
    </>
  );
}
