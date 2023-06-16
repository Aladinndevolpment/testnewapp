import { useContext } from "react";
import { Toolbox } from "./Toolbox";
import { Element, Frame } from "@craftjs/core";
import { SettingsPanel } from "./Settings";
import { CraftContext } from "@/pages/builder/website/craft";
import { TextInputElement } from "./widgets/TextInput";
import Container from "../Craft/widgets/Container";

export default function Main() {
  const { device } = useContext(CraftContext);

  return (
    <div className="flex h-full">
      <div className="w-[20%] pr-2 h-screen">
        <div className="bg-white rounded-md shadow-md h-full overflow-y-scroll pb-40 scrollbar-hide">
          <SettingsPanel />
        </div>
      </div>
      <div className="w-[60%] h-full overflow-y-scroll scrollbar-hide pb-40 px-16">
        <div className="bg-white p-2">
          <Frame>
            <Element is={Container} canvas>
              <TextInputElement
                textInputProps={{
                  name: "name",
                  placeholder: "Enter full name",
                  type: "text",
                }}
              />
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
  );
}
