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
        <div className="w-[20%] pr-2 h-screen">
          <div className="bg-white rounded-md shadow-md h-full overflow-y-scroll pb-40 scrollbar-hide">
            <div className="flex justify-between items-center   md:pl-2 pr-5 py-1.5 rounded-md">
              <SettingsPanel />
            </div>
          </div>
        </div>
        <div className="w-[60%] h-full overflow-y-scroll scrollbar-hide pb-40 px-12">
          <div className="bg-white p-2">
            <Frame>
              <Element is={Container} canvas>
                <Slide />
              </Element>
            </Frame>
          </div>
        </div>

        <div className="w-[30%] pr-2 h-screen">
          <div className="bg-white rounded-md shadow-md h-full overflow-y-scroll pb-40 scrollbar-hide">
            <Toolbox />
          </div>
        </div>
      </div>
    </>
  );
}
