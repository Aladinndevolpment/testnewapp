import {
  Card,
  CardBottom,
  CardImage,
  CardTop,
} from "@/components/Craft/widgets/Card";
import Container from "@/components/Craft/widgets/Container";

import { Editor } from "@craftjs/core";
import { Button, ButtonText } from "@/components/Craft/widgets/Button";
import { Text } from "@/components/Craft/widgets/Text/Text";
import { Grid, GridTop } from "@/components/Craft/widgets/Grid";
import { BuilderImage } from "@/components/Craft/widgets/Image";
import { Topbar } from "@/components/Craft/Topbar";
import { createContext, useContext, useState } from "react";
import {
  HeroLayout,
  HeroText,
  HeroButton,
} from "@/components/Craft/widgets/prebuilt/HeroLayout";
import { GlobalContext } from "@/layouts/GlobalLayout";
import Main from "@/components/Craft/Main";
import {
  HeaderLayout,
  HeaderLogo,
  HeaderMenu,
} from "@/components/Craft/widgets/prebuilt/Header";
import { Link, LinkText } from "@/components/Craft/widgets/Link";
import App, { MainApp } from "@/components/Craft/widgets/App";
import Divider from "@/components/Craft/widgets/Divider";
import { BuilderVideo } from "@/components/Craft/widgets/Video";
import { Social } from "@/components/Craft/widgets/Social";
import { Headline } from "@/components/Craft/widgets/Text/Headline";
import { List } from "@/components/Craft/widgets/List";
import ListItem from "@/components/Craft/widgets/ListItem";
import CustomHTML from "@/components/Craft/widgets/CustomHTML";
import MapElement from "@/components/Craft/widgets/Map";
import Countdown from "@/components/Craft/widgets/Countdown";
import Progress from "@/components/Craft/widgets/Progress";
import Calendar from "@/components/Craft/widgets/Calendar";
import { Review, ReviewTitle } from "@/components/Craft/widgets/Reviews";
import {
  OrderConfirmation,
  OrderText,
} from "@/components/Craft/widgets/prebuilt/OrderConfirmation";
import {
  FormElements,
  OrderOneStep,
} from "@/components/Craft/widgets/prebuilt/OrderOneStep";
import { OrderTwoStep } from "@/components/Craft/widgets/prebuilt/OrderTwoStep";
import { TextInputElement } from "@/components/FormCraft/widgets/TextInput";
import { TextAreaElement } from "@/components/FormCraft/widgets/TextareaElement";
import { RadioInputElement } from "@/components/FormCraft/widgets/RadioElement";
import { CheckboxInputElement } from "@/components/FormCraft/widgets/CheckboxElement";
import { SelectBoxInputElement } from "@/components/FormCraft/widgets/SelectInputElement";
import { AttachmentElement } from "@/components/FormCraft/widgets/Attachment";
import { DatePickerElement } from "@/components/FormCraft/widgets/DatePicker";

export const CraftContext = createContext({
  tools: "prebuilt",
  setTools: (tool: string) => {},
  device: "desktop",
  setDevice: (device: string) => {},
});

export default function Craft() {
  const [tools, setTools] = useState("prebuilt");
  const [device, setDevice] = useState("desktop");

  const ctx = useContext(GlobalContext);

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
            Card,
            Button,
            Text,
            List,
            ListItem,
            Headline,
            Container,
            CardTop,
            CardBottom,
            Grid,
            GridTop,
            BuilderImage,
            HeroLayout,
            HeroText,
            HeroButton,
            ButtonText,
            HeaderLayout,
            HeaderLogo,
            HeaderMenu,
            Link,
            LinkText,
            Divider,
            BuilderVideo,
            MainApp,
            Social,
            CardImage,
            CustomHTML,
            MapElement,
            Countdown,
            Progress,
            Calendar,
            Review,
            ReviewTitle,
            OrderConfirmation,
            OrderText,
            OrderOneStep,
            OrderTwoStep,
            FormElements,
            //Form
            TextInputElement,
            TextAreaElement,
            RadioInputElement,
            CheckboxInputElement,
            SelectBoxInputElement,
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
