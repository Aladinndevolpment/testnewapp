import { Toolbox } from "./Toolbox";
import { Element, Frame } from "@craftjs/core";
import Container from "./widgets/Container";
import { Slide } from "./widgets/Slide";
import { SettingsPanel } from "./Settings";
import { CraftContext } from "@/pages/builder/survey/craft";
import { useContext } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { IoChevronBackOutline } from "react-icons/io5";

export default function Main() {
  const ctx = useContext(CraftContext);

  return (
    <>
      <div className="flex h-full">
        <div className="w-[70%] h-full overflow-y-scroll scrollbar-hide pb-40 px-12">
          <div className="bg-white p-2">
            <Frame>
              <Element is={Container} canvas>
                <Slide />
              </Element>
            </Frame>
          </div>
        </div>
        {ctx.openSettings ? (
          <div className="w-[30%] pr-2 h-screen">
            <div className="bg-white rounded-md shadow-md h-full overflow-y-scroll pb-40 scrollbar-hide">
              <div className="flex justify-between items-center   md:pl-2 pr-5 py-1.5 rounded-md">
                <div
                  onClick={() => ctx?.setOpenSettings(false)}
                  className={`flex items-center w-full justify-start`}
                >
                  <div className="mr-2 bg-white h-5 w-5 shadow-md rounded-full flex  justify-center items-center">
                    <IoChevronBackOutline className="h-3 w-3 text-gray-900" />
                  </div>
                  <p
                    className={` capitalize text-t-gray-600 text-sm font-medium  tracking-wide  `}
                  >
                    Back to Options
                  </p>
                </div>
              </div>

              <SettingsPanel />
            </div>
          </div>
        ) : (
          <div className="w-[30%] pr-2 h-screen">
            <div className="bg-white rounded-md shadow-md h-full overflow-y-scroll pb-40 scrollbar-hide">
              <Toolbox />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
