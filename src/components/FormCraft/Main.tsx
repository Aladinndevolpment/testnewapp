import { useContext } from "react";
import { Toolbox } from "./Toolbox";
import { Element, Frame } from "@craftjs/core";
import { SettingsPanel } from "./Settings";
import { CraftContext } from "@/pages/builder/website/craft";
import { TextInputElement } from "./widgets/TextInput";
import { RadioInputElement } from "./widgets/RadioElement";
import { TextAreaElement } from "./widgets/TextareaElement";
import { Grid } from "../Craft/widgets/Grid";
import { Button } from "../Craft/widgets/Button";
import { Text } from "../Craft/widgets/Text";
import Container from "../Craft/widgets/Container";
import App from "../Craft/widgets/App";

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

              <TextInputElement
                textInputProps={{
                  name: "email",
                  placeholder: "Enter email address",
                  type: "email",
                }}
              />

              <TextInputElement
                textInputProps={{
                  name: "phone",
                  placeholder: "Enter mobile number",
                  type: "tel",
                }}
              />
              <Text text="Choose Gender" marginBottom={8} />
              <RadioInputElement
                radios={[
                  { label: "Female", radioProps: { value: "female" } },
                  { label: "Male", radioProps: { value: "male" } },
                ]}
                radiosBasicProps={{ name: "gender800" }}
              />

              <TextAreaElement
                textInputProps={{
                  name: "email",
                  placeholder: "Bio...",
                }}
              />

              <Button text="Submit" />

              <App>
                <div></div>
              </App>
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
