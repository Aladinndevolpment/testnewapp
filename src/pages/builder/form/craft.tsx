import { Button, ButtonText } from "@/components/Craft/widgets/Button";
import Container from "@/components/Craft/widgets/Container";
import { Text } from "@/components/Craft/widgets/Text";

import { Grid, GridTop } from "@/components/Craft/widgets/Grid";
import Main from "@/components/FormCraft/Main";
import { Topbar } from "@/components/FormCraft/Topbar";
import App, { MainApp } from "@/components/Craft/widgets/App";
import { RadioInputElement } from "@/components/FormCraft/widgets/RadioElement";
import { TextInputElement } from "@/components/FormCraft/widgets/TextInput";
import { TextAreaElement } from "@/components/FormCraft/widgets/TextareaElement";

import { GlobalContext } from "@/layouts/GlobalLayout";
import { Editor } from "@craftjs/core";
import { createContext, useContext, useState } from "react";

export const CraftContext = createContext({
  tools: "elements",
  setTools: (tool: string) => {},
  device: "desktop",
  setDevice: (device: string) => {},
});

export default function Craft() {
  const ctx = useContext(GlobalContext);
  ctx.setTitle("Form Builder");
  ctx.setOpen(false);

  const [tools, setTools] = useState("elements");
  const [device, setDevice] = useState("desktop");

  const value: any = {
    tools,
    setTools,
    device,
    setDevice,
  };

  return (
    <CraftContext.Provider value={value}>
      <div className="h-full overflow-hidden">
        <Editor
          resolver={{
            App,
            Container,
            Text,
            MainApp,
            TextInputElement,
            Grid,
            GridTop,
            TextAreaElement,
            RadioInputElement,
            Button,
            ButtonText,
          }}
        >
          <Topbar />
          <Main />
        </Editor>
      </div>
    </CraftContext.Provider>
  );
}
