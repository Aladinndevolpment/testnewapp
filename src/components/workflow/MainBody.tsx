import ChooseActions from "@/pages/workflow/ChooseActions";
import {
  ClockIcon,
  LifebuoyIcon,
  MinusIcon,
  PlusIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import ExecutionBox from "./ExecutionBox";
import WorkflowFlyout from "./WorkflowFlyout";
import TriggerList from "./TriggerList";
import Dummy from "./Dummy";

export default function MainBody() {
  const [scale, setScale] = useState(1);

  function handleZoomIn() {
    setScale(scale + 0.1);
  }

  function handleZoomOut() {
    setScale(scale - 0.1);
  }

  const [dataOneUpdated, setDataOneUpdated] = useState(0);

  //1trigger
  const [triggerTitle, setTriggerTitle] = useState("");

  //1action
  const [actionTitle, setActionTitle] = useState("");

  //actionTitle2
  const [actionTitleTwo, setActionTitleTwo] = useState("");

  //actionTriggerTitle
  const [actionTriggerTitle, setActionTriggerTitle] = useState("");
  const [actionFlyoutTitle, setActionFlyoutTitle] = useState("");
  //modal1
  const [isFlyOutVisible, setIsFlyOutVisible] = useState(false);
  //modal 2
  const [isFlyOutVisibleTwo, setIsFlyOutVisibleTwo] = useState(false);
  //modal 32
  const [isFlyOutVisibleThree, setIsFlyOutVisibleThree] = useState(false);

  let initial = 4;

  function RenderRepeatingComp({ currentUpdate }: { currentUpdate: number }) {
    console.log(currentUpdate);
    return (
      <>
        <div
          className={`${
            dataOneUpdated == currentUpdate
              ? "  bg-white shadow-md rounded-md py-4 px-4  w-[55%] lg:w-[80%]  opacity-1 ease-in-out duration-300 pt-3 h-[50vh] relative mb-40 overflow-y-scroll scrollbar-hide"
              : "  opacity-0  overflow-hidden hidden"
          }  `}
        >
          <ChooseActions
            onClose={() => setDataOneUpdated(4)}
            updateActionData={(item: any) => {
              setIsFlyOutVisibleThree(true);
              setActionTriggerTitle(item);
              setDataOneUpdated(currentUpdate);
            }}
          />
        </div>
        <div
          className={`${
            dataOneUpdated >= currentUpdate
              ? " pt-5 opacity-1 ease-in-out duration-300  relative "
              : "translate-y-[50%] opacity-0  overflow-hidden hidden"
          } px-4  flex flex-col justify-center items-center w-full `}
        >
          <div className="text-xs bg-darkBlack flex justify-center items-center rounded-lg    text-white font-medium   px-5 py-4  w-[55%] lg:w-[20%] ">
            {actionTriggerTitle} {actionFlyoutTitle}
          </div>

          <div onClick={() => handleDataAdd()} className="relative mt-10">
            <Image
              src={require("../../../public/images/icons/bottomIcon.png")}
              alt=""
              className="h-28 w-24"
            />
            <div className="absolute top-[18%] left-[33%]">
              <div className="bg-secondary h-8 w-8 flex justify-center items-center rounded-md">
                <PlusIcon className="text-white h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  const [repeatingComp, setRepeatingComp] = useState([
    {
      comp: () => <RenderRepeatingComp currentUpdate={5} />,
    },
  ]);

  const handleDataAdd = () => {
    setDataOneUpdated(5);
    // setIsFlyOutVisibleThree(true);
    setRepeatingComp([
      ...repeatingComp,
      {
        comp: () => <RenderRepeatingComp currentUpdate={5} />,
      },
    ]);
  };

  return (
    <>
      {/* modal 1 */}
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
              setDataOneUpdated(1);
              setIsFlyOutVisible(false);
            }}
          />
        }
      />
      {/* modal 2 */}
      <WorkflowFlyout
        visibility={isFlyOutVisibleTwo}
        onClose={() => setIsFlyOutVisibleTwo(false)}
        renderData={
          <TriggerList
            onClose={() => {
              setIsFlyOutVisibleTwo(false);
            }}
            updateData={(item: any) => {
              setActionTitleTwo(item);
              setDataOneUpdated(4);
              setIsFlyOutVisibleTwo(false);
            }}
          />
        }
      />

      {/* modal 2 */}
      <WorkflowFlyout
        visibility={isFlyOutVisibleThree}
        onClose={() => setIsFlyOutVisibleThree(false)}
        renderData={
          <TriggerList
            onClose={() => {
              setIsFlyOutVisibleThree(false);
            }}
            updateData={(item: any) => {
              setActionFlyoutTitle(item);
              setDataOneUpdated(6);
              setIsFlyOutVisibleThree(false);
            }}
          />
        }
      />

      <div className="relative scrollbar-hide h-[82%] pb-20 bg-gradient-to-br from-gray-200 to-transparent bg-repeat bg-cover bg-opacity-50 bg-dots overflow-y-scroll">
        <div className="px-4 md:px-8">
          <div className="bg-gradient-to-r from-[#fdebe8] via-[#fcd4c9] to-[#feece7] rounded-md flex justify-center items-center py-3 mt-5">
            <TrophyIcon className="h-5 w-5 text-dark mr-2" />
            <p className="text-dark font-semibold text-xs md:text-sm">
              Lets set goal for your workflow first!
            </p>
            <p className="text-secondary font-semibold text-xs md:text-sm ml-2">
              See your goals
            </p>
          </div>
        </div>

        {/* component SCALE */}
        <div className="flex flex-col fixed top-[38%] md:top-[30%] left-5 lg:left-10 z-50">
          <button
            onClick={handleZoomIn}
            className="bg-gray-200 p-1 rounded shadow"
          >
            <PlusIcon className="w-5 h-5" />
          </button>
          <button
            onClick={handleZoomOut}
            className="bg-gray-200 p-1 rounded shadow mt-2"
          >
            <MinusIcon className="w-5 h-5" />
          </button>
        </div>

        <div
          style={{ transform: `scale(${scale})` }}
          className="flex flex-col items-center justify-center w-full"
        >
          {/* component A */}

          <div className="bg-white shadow-lg rounded-md w-[55%] lg:w-[27%] mt-5 ">
            {/* component 1 */}
            <div className="bg-newBlue py-3 px-5 rounded-t-md flex justify-between items-center">
              <div className="flex justify-between items-center">
                <div className="bg-white h-7 w-7 rounded-full flex justify-center items-center">
                  <ClockIcon className="h-5 w-5 text-newBlue" />
                </div>
                <p className="ml-2 text-sm text-white font-medium">
                  Execute When
                </p>
              </div>
              <div>
                <EllipsisHorizontalIcon className="h-6 w-6 text-white" />
              </div>
            </div>
            {/* component 2 */}
            <div className="overflow-hidden  ">
              <div
                className={`${
                  dataOneUpdated == 0
                    ? "opacity-1 px-4 pb-5 pt-5"
                    : "opacity-0 hidden"
                }  `}
              >
                <p
                  className={`${
                    dataOneUpdated == 0
                      ? "text-dark text-sm pb-5 lg:w-[70%] leading-5"
                      : ""
                  }  `}
                >
                  Choose the trigger that decides how a contacts enters this
                  flow
                </p>

                <button
                  onClick={() => setIsFlyOutVisible(!isFlyOutVisible)}
                  className="py-2 w-full rounded-md text-sm bg-secondary text-white"
                >
                  Setup Enrollment Trigger
                </button>
              </div>

              <div
                className={`${
                  dataOneUpdated
                    ? " py-5 opacity-1   ease-in-out duration-300  "
                    : "translate-y-[-80%] opacity-0 h-1 overflow-hidden"
                } px-4  `}
              >
                <div>
                  <p className="text-dark font-semibold text-sm pb-3 lg:w-[70%] leading-5">
                    Enrollment Trigger
                  </p>
                  <div className="border-[1px] border-lightGray bg-gray-100 rounded-md px-2 py-2 mb-4">
                    <p className="text-dark text-sm leading-5">
                      Contact has filled out, for
                      <strong className="text-xs pl-2">{triggerTitle}</strong>
                    </p>
                  </div>

                  <button
                    onClick={() => console.log("ok")}
                    className="py-2 w-full rounded-md text-sm border-[2px] border-secondary text-secondary"
                  >
                    Edit Enrollment Trigger
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* component B */}
          <div
            className={`${
              dataOneUpdated == 1 || dataOneUpdated == 2
                ? "  opacity-1   ease-in-out duration-500 pt-3"
                : " opacity-0  overflow-hidden hidden"
            } px-4  flex flex-col justify-center items-center`}
          >
            <Image
              src={require("../../../public/images/icons/bottomIcon.png")}
              alt=""
            />
            <button
              onClick={() => {
                setDataOneUpdated(2);
              }}
              className="mt-3 text-sm text-gray-300 font-medium bg-secondary px-5 py-2.5 rounded-md"
            >
              Add an Action
            </button>
          </div>

          <div
            className={`${
              dataOneUpdated == 2
                ? "bg-white shadow-md rounded-md py-4 px-4 w-[60%] lg:w-[80%] translate-y-[10%] opacity-1 ease-in-out duration-300 pt-3 h-[50vh] relative mb-40 overflow-y-scroll scrollbar-hide"
                : "translate-y-[50%] opacity-0  overflow-hidden hidden"
            }  `}
          >
            <ChooseActions
              onClose={() => setDataOneUpdated(1)}
              updateActionData={(item: any) => {
                setDataOneUpdated(3);
                setActionTitle(item);
              }}
            />
          </div>

          {/* component C */}
          <div
            className={`${
              dataOneUpdated == 3
                ? " pt-5 opacity-1 ease-in-out duration-300  relative "
                : "translate-y-[50%] opacity-0  overflow-hidden hidden"
            } px-4  flex flex-col justify-center items-center w-full `}
          >
            <div className="relative">
              <Image
                src={require("../../../public/images/icons/bottomIcon.png")}
                alt=""
                className="h-28 w-24"
              />
              <div className="absolute top-[18%] left-[33%]">
                <div className="bg-secondary h-8 w-8 flex justify-center items-center rounded-md">
                  <PlusIcon className="text-white h-5 w-5" />
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setIsFlyOutVisibleTwo(true);
              }}
              className="rounded-lg border-[1px] border-gray-200 mt-3 text-base text-dark font-medium bg-white px-5 py-4 w-[27%] "
            >
              {actionTitle}
            </button>
          </div>

          {/* here */}
          {/* component D */}
          <div
            className={`${
              dataOneUpdated >= 4
                ? " pt-5 opacity-1 ease-in-out duration-300  relative "
                : "translate-y-[50%] opacity-0  overflow-hidden hidden"
            } px-4  flex flex-col justify-center items-center w-full `}
          >
            <div
              className="relative"
              onClick={() => {
                setDataOneUpdated(5);
              }}
            >
              <Image
                src={require("../../../public/images/icons/bottomIcon.png")}
                alt=""
                className="h-28 w-24"
              />
              <div className="absolute top-[18%] left-[33%]">
                <div className="bg-secondary h-8 w-8 flex justify-center items-center rounded-md">
                  <PlusIcon className="text-white h-5 w-5" />
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-md w-[55%] lg:w-[27%] mt-5 ">
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

              <div className="px-4 pt-4">
                <div className="border-[1px] border-lightGray bg-gray-100 rounded-md px-2 py-2 mb-4">
                  <p className="text-dark text-sm leading-5 font-medium">
                    {actionTitle}
                    <strong className="text-xs pl-1">{actionTitleTwo}</strong>
                  </p>
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                setDataOneUpdated(5);
              }}
              className="relative mt-10"
            >
              <Image
                src={require("../../../public/images/icons/bottomIcon.png")}
                alt=""
                className="h-28 w-24"
              />
              <div className="absolute top-[18%] left-[33%]">
                <div className="bg-blue-500 h-8 w-8 flex justify-center items-center rounded-md">
                  <PlusIcon className="text-white h-5 w-5" />
                </div>
              </div>
            </div>

            {/* component E */}

            {repeatingComp.map((item, index) => {
              return (
                <div key={index}>
                  <RenderRepeatingComp currentUpdate={5 + index + 1} />
                </div>
              );
            })}

            <button
              onClick={() => {
                setDataOneUpdated(4);
              }}
              className="flex justify-center items-center rounded-lg border-[1px] border-gray-200 mt-3   text-dark font-medium bg-white px-5 py-3  w-[55%] lg:w-[27%] "
            >
              <div className="bg-newBlue h-7 w-7 flex justify-center items-center rounded-full mr-2">
                <LifebuoyIcon className="text-white h-5 w-5" />
              </div>
              <span className="text-base"> Workflow done</span>
            </button>
          </div>
        </div>

        <Dummy />
      </div>
    </>
  );
}
