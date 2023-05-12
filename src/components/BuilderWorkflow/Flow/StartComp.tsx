import React, { useState } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import TriggerList from "@/components/workflow/TriggerList";
import StartComponentTriggerList from "../Components/StartComponentTriggerList.tsx";
import WorkflowFlyout from "../WorkflowFlyout";

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
        <div className="bg-white shadow-lg rounded-md w-[100%] lg:w-[100%] mt-5 ">
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
              className={`text-dark text-sm pb-5 w-[100%] lg:w-[70%] leading-5`}
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
            <p className="text-dark font-semibold text-sm pb-3   leading-5">
              Enrollment Trigger
            </p>
            <div className="border-[1px] border-lightGray bg-gray-100 rounded-md px-2 py-2 mb-4 ">
              <p className="text-dark text-sm leading-5">
                Contact has filled out, for
                <strong className="text-xs pl-2">{title}</strong>
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
      <WorkflowFlyout
        visibility={isFlyOutVisible}
        onClose={() => setIsFlyOutVisible(false)}
        renderData={
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
        }
      />
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
