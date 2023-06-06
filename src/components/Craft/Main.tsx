import { useContext } from "react";
import { Toolbox } from "./Toolbox";
import { Element, Frame } from "@craftjs/core";
import Container from "./widgets/Container";
import { HeroLayout } from "./widgets/prebuilt/HeroLayout";
import { SettingsPanel } from "./Settings";
import { CraftContext } from "@/pages/builder/website/craft";
import { HeaderLayout } from "./widgets/prebuilt/Header";
import { BuilderImage } from "./widgets/Image";
import App from "./widgets/App";

export default function Main() {
  const { device } = useContext(CraftContext);

  return (
    <div className="flex h-full">
      <div className="w-[22%] pr-2 h-screen">
        <div className="bg-white rounded-md shadow-md h-full overflow-y-scroll pb-40 scrollbar-hide">
          <Toolbox />
        </div>
      </div>
      <div className="w-[56%] h-full overflow-y-scroll scrollbar-hide pb-40 px-16">
        <Frame>
          <Element is={Container} canvas>
            <HeaderLayout />
            <BuilderImage borderRadius={0} />
            <HeroLayout />
          </Element>
        </Frame>
      </div>
      <div className="w-[22%] pr-2 h-screen">
        <div className="bg-white rounded-md shadow-md h-full overflow-y-scroll pb-40 scrollbar-hide">
          <SettingsPanel />
        </div>
      </div>
    </div>
  );
}
