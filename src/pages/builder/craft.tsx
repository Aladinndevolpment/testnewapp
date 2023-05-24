import { SettingsPanel } from "@/components/Craft/Settings";
import { Toolbox } from "@/components/Craft/Toolbox";
import { Card, CardBottom, CardTop } from "@/components/Craft/widgets/Card";
import Container from "@/components/Craft/widgets/Container";

import { Editor, Frame, Element } from "@craftjs/core";
import { Button } from "@/components/Craft/widgets/Button";
import { Text } from "@/components/Craft/widgets/Text";
import { Grid, GridBottom, GridTop } from "@/components/Craft/widgets/Grid";
import { BuilderImage } from "@/components/Craft/widgets/Image";
import { Topbar } from "@/components/Craft/Topbar";
import { createContext, useState } from "react";
import {
  HeroLayout,
  HeroText,
  HeroButton,
} from "@/components/Craft/widgets/HeroLayout";

export const CraftContext = createContext({
  tools: "prebuilt",
  setTools: (array: any) => {},
});

export default function Craft() {
  const [tools, setTools] = useState("prebuilt");

  const value: any = {
    tools,
    setTools,
  };

  return (
    <CraftContext.Provider value={value}>
      <div className="h-full overflow-hidden">
        <Editor
          resolver={{
            Card,
            Button,
            Text,
            Container,
            CardTop,
            CardBottom,
            Grid,
            GridTop,
            GridBottom,
            BuilderImage,
            HeroLayout,
            HeroText,
            HeroButton,
          }}
        >
          <Topbar />
          <div className="flex h-full">
            <div className="w-3/12 pr-2 h-screen">
              <div className="bg-white rounded-md shadow-md h-full overflow-y-scroll pb-40 scrollbar-hide">
                <Toolbox />
                <SettingsPanel />
              </div>
            </div>
            <div className="w-9/12 px-4 h-full overflow-y-scroll scrollbar-hide pb-40">
              <Frame>
                <Element is={Container} canvas>
                  <HeroLayout />
                </Element>
              </Frame>
            </div>
          </div>
        </Editor>
      </div>
    </CraftContext.Provider>
  );
}
