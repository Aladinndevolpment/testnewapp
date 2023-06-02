import React, { useContext } from "react";
import { CraftContext } from "@/pages/builder/website/craft";
import ElementToolbox from "./Toolboxes/ElementToolbox";

export const Toolbox = () => {
  const { tools, setTools } = useContext(CraftContext);

  return (
    <div className=" ">
      {/* <div className="p-4">
        <div className={`p-[2px] flex flex-wrap bg-[#eeeef1]  rounded-md`}>
          <button
            className={`w-1/2 bg-transparent  px-4 py-2 text-center ${
              tools === "prebuilt" && "bg-white rounded-md shadow-md"
            }  text-black font-medium btn border-none capitalize hover:bg-white`}
            onClick={() => setTools("prebuilt")}
          >
            Prebuild
          </button>
          <button
            className={`w-1/2 bg-transparent  px-4 py-2 text-center ${
              tools === "elements" && "bg-white rounded-md shadow-md"
            }  text-black font-medium btn border-none capitalize hover:bg-white`}
            onClick={() => setTools("elements")}
          >
            Element
          </button>
        </div>
      </div> */}

      <ElementToolbox />
    </div>
  );
};