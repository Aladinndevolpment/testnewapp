import { Button, ButtonText } from "@/components/Craft/widgets/Button";
import Container from "@/components/Craft/widgets/Container";
import { Text } from "@/components/Craft/widgets/Text/Text";

import { Grid, GridTop } from "@/components/Craft/widgets/Grid";
import Main from "@/components/FormCraft/Main";
import { Topbar } from "@/components/FormCraft/Topbar";
import App, { MainApp } from "@/components/Craft/widgets/App";
import { RadioInputElement } from "@/components/FormCraft/widgets/RadioElement";
import { TextAreaElement } from "@/components/FormCraft/widgets/TextareaElement";

import { GlobalContext } from "@/layouts/GlobalLayout";
import { Editor } from "@craftjs/core";
import { createContext, useContext, useState } from "react";
import { CheckboxInputElement } from "@/components/FormCraft/widgets/CheckboxElement";
import { SelectBoxInputElement } from "@/components/FormCraft/widgets/SelectInputElement";
import { Link, LinkText } from "@/components/Craft/widgets/Link";
import { AttachmentElement } from "@/components/FormCraft/widgets/Attachment";
import { DatePickerElement } from "@/components/FormCraft/widgets/DatePicker";
import { TextInputElement } from "@/components/FormCraft/widgets/TextInput";

export const CraftContext = createContext({
  tools: "elements",
  setTools: (tool: string) => {},
  device: "desktop",
  setDevice: (device: string) => {},
});

export default function Craft() {
  const ctx = useContext(GlobalContext);
  ctx.setTitle("Form Builder");

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
      <div className="h-full overflow-hidden w-full">
        <Editor
          resolver={{
            Container,
            Text,
            TextInputElement,
            Grid,
            GridTop,
            TextAreaElement,
            RadioInputElement,
            CheckboxInputElement,
            Button,
            ButtonText,
            SelectBoxInputElement,
            Link,
            LinkText,
            AttachmentElement,
            DatePickerElement,
          }}
        >
          <Topbar />
          <Main />
        </Editor>
      </div>
    </CraftContext.Provider>
  );
}
