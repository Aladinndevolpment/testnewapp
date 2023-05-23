import React from "react";
import HeaderComponent from "@/components/BuilderWorkflow/Flow/HeaderComponent";
import { TrophyIcon } from "@heroicons/react/24/solid";
import WorkflowData from "@/components/BuilderWorkflow/WorkflowData";

export default function NewWorkflow() {
  return (
    <>
      <div className="relative bg-mainBg overflow-hidden  h-full">
        <HeaderComponent />
        <div className="relative overflow-hidden scrollbar-hide h-[82%] pb-20 bg-gradient-to-br from-gray-200 to-transparent bg-repeat bg-cover bg-opacity-50 bg-dots overflow-y-scroll">
          <div className="h-full  w-full mb-52">
            <div className="px-4 md:px-8 w-full">
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
            <WorkflowData />
          </div>
        </div>
      </div>
    </>
  );
}
