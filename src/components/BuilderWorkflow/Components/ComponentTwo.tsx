import React, { useState } from "react";
import {
  ClockIcon,
  LifebuoyIcon,
  MinusIcon,
  PlusIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import WorkflowFlyout from "@/components/BuilderWorkflow/Workflowflyout";
import TriggerList from "@/components/BuilderWorkflow/TriggerList";
import WorkFlowBuilder from "@/components/BuilderWorkflow/WorkFlowBuilder";
import Image from "next/image";
import ChooseActions from "@/pages/workflow/ChooseActions";
import { title } from "process";

export default function ComponentTwo() {
  function RenderActionNewData({
    currentIndex,
  }: {
    currentIndex: number;
    title: string;
  }) {
    return (
      <div>
        <div>{actionComponents[currentIndex].comp}</div>
        {/* <div className="bg-red-500">{actionComponents[currentIndex].title}</div> */}
        {/* <button onClick={() => handleAddMore(currentIndex)}>add more</button>  */}
      </div>
    );
  }

  const [openSteps, setOpenSteps] = useState(0);
  //1trigger
  const [triggerTitle, setTriggerTitle] = useState("");

  //modal1
  const [isFlyOutVisible, setIsFlyOutVisible] = useState(false);
  const [actionTitle, setActionTitle] = useState("");

  function ComponentFirst({ currentIndex }: { currentIndex: number }) {
    return (
      <>
        <button
          onClick={() => {
            setOpenSteps(1);
          }}
          className="mt-3 text-sm text-gray-300 font-medium bg-secondary px-5 py-2.5 rounded-md"
        >
          Add an Action
        </button>
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
        <button
          onClick={() => {
            setIsFlyOutVisible(true);
          }}
          className="rounded-lg border-[1px] border-gray-200 mt-3 text-base text-dark font-medium bg-white px-2 py-2 w-[250px]"
        >
          {title}
        </button>
      </>
    );
  }

  function ComponentThree({
    currentIndex,
    title,
  }: {
    currentIndex: number;
    title: string;
  }) {
    return (
      <>
        <div className="bg-white shadow-lg rounded-md w-[55%] lg:w-[100%] mt-5 ">
          <div className="bg-newBlue py-3 px-5 rounded-t-md flex justify-between items-center">
            <div className="flex justify-between items-center">
              <div className="bg-white h-7 w-7 rounded-full flex justify-center items-center">
                <ClockIcon className="h-5 w-5 text-newBlue" />
              </div>
              <p className="ml-2 text-sm text-white font-medium">
                {actionTitle}
              </p>
            </div>
            <div>
              <EllipsisHorizontalIcon className="h-6 w-6 text-white" />
            </div>
          </div>

          <div className="px-4 pt-4  w-[430px]  pb-5">
            <div className="border-[1px] border-lightGray bg-gray-100 rounded-md px-2 py-3 mb-4">
              <p className="text-dark text-sm leading-5 font-medium">
                {actionTitle}
                <strong className="text-xs pl-1">{title}</strong>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  const handleAddMore = (currentIndex: number, titleHeading: any) => {
    if (newOtherData == 0) {
      setActionComponents([
        {
          comp: (
            <ComponentTwo currentIndex={newOtherData} title={titleHeading} />
          ),
          title: titleHeading,
        },
      ]);
      setActionTitle(titleHeading);
    } else if (currentIndex == 2) {
      setActionComponents([
        {
          comp: (
            <ComponentThree currentIndex={newOtherData} title={titleHeading} />
          ),
          title: titleHeading,
        },
      ]);
      setActionTitle(titleHeading);
    } else {
      setActionComponents([
        ...actionComponents,
        { comp: `id${currentIndex}`, title: `id${currentIndex}` },
      ]);
    }
    setNewOtherData(newOtherData + 1);
  };

  const [newOtherData, setNewOtherData] = useState<any>(0);
  const [actionComponents, setActionComponents] = useState<any>([
    {
      comp: (
        <>
          <ComponentFirst currentIndex={newOtherData} />
        </>
      ),
      title: "",
    },
  ]);

  return (
    <>
      <WorkflowFlyout
        visibility={isFlyOutVisible}
        onClose={() => setIsFlyOutVisible(false)}
        renderData={
          <TriggerList
            onClose={() => {
              setIsFlyOutVisible(false);
            }}
            updateData={(item: any) => {
              setTriggerTitle(item);
              setIsFlyOutVisible(false);
              handleAddMore(newOtherData + 1, item);
            }}
          />
        }
      />
      <div>
        {actionComponents.map((item: any, index: any) => (
          <div key={index}>
            <RenderActionNewData currentIndex={index} title={actionTitle} />
          </div>
        ))}
      </div>
      <div
        className={`${
          openSteps == 1
            ? "mt-5 bg-white shadow-md rounded-md py-4 px-4 w-[60%] lg:w-[100%]  opacity-1 ease-in-out duration-300 pt-3 h-[50vh] relative mb-40 overflow-y-scroll scrollbar-hide"
            : "  opacity-0  overflow-hidden hidden"
        }  `}
      >
        <ChooseActions
          onClose={() => setOpenSteps(0)}
          updateActionData={(item: any) => {
            setActionTitle(item);
            setOpenSteps(0);
            setIsFlyOutVisible(true);
            handleAddMore(newOtherData + 1, item);
          }}
        />
      </div>
    </>
  );
}
