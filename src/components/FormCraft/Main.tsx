import { useContext } from "react";
import { Toolbox } from "./Toolbox";
import { Element, Frame } from "@craftjs/core";
import { SettingsPanel } from "./Settings";
import { CraftContext } from "@/pages/builder/website/craft";
import { TextInputElement } from "./widgets/TextInput";
import Container from "../Craft/widgets/Container";
import { Text } from "../Craft/widgets/Text/Text";
import { SelectBoxInputElement } from "./widgets/SelectInputElement";
import { AttachmentElement } from "./widgets/Attachment";
import { TextAreaElement } from "./widgets/TextareaElement";
import { RadioInputElement } from "./widgets/RadioElement";

export default function Main() {
  const { device } = useContext(CraftContext);
  const tbStyles = {
    backgroundColor: "#f6f6fc",
    borderColor: "#d9d6d6",
    fontWeight: "5px",
  };

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
              {/* Full name */}
              <div className="flex gap-3 justify-between">
                <div className="w-1/2">
                  <Text
                    text="Full Name"
                    fontSize={17}
                    marginBottom={2}
                    color="#4b5563"
                    bold="font-semibold"
                  />
                  <TextInputElement
                    textInputProps={{
                      name: "fullName",
                      placeholder: "Your full name",
                      type: "text",
                    }}
                    {...tbStyles}
                  />
                </div>

                {/* Email */}
                <div className="w-1/2">
                  <Text
                    text="Email"
                    fontSize={17}
                    marginBottom={2}
                    color="#4b5563"
                    bold="font-semibold"
                  />
                  <TextInputElement
                    textInputProps={{
                      name: "email",
                      placeholder: "Your email",
                      type: "email",
                    }}
                    {...tbStyles}
                  />
                </div>
              </div>

              {/* phone */}
              <Text
                text="Phone"
                fontSize={17}
                marginBottom={2}
                color="#4b5563"
                bold="font-semibold"
              />
              <div className="flex w-[80%] gap-1 ">
                <div className="w-28">
                  <SelectBoxInputElement
                    options={[
                      {
                        optionProps: {
                          checked: true,
                          value: "+91",
                          required: true,
                        },
                        label: "+91",
                      },
                      {
                        optionProps: {
                          checked: true,
                          value: "+75",
                          required: true,
                        },
                        label: "+75",
                      },
                      {
                        optionProps: {
                          checked: true,
                          value: "+83",
                          required: true,
                        },
                        label: "+83",
                      },
                    ]}
                  />
                </div>
                <TextInputElement
                  textInputProps={{
                    name: "phoneNumber",
                    placeholder: "Your phone number",
                    type: "number",
                  }}
                  {...tbStyles}
                />
              </div>

              {/* portfolio */}
              <div>
                <AttachmentElement />
              </div>

              {/* Gender */}
              <div className="w-[48.8%]">
                <RadioInputElement
                  radios={[
                    {
                      radioProps: {
                        checked: true,
                        value: "Male",
                        required: true,
                      },
                      label: "Male",
                    },
                    {
                      radioProps: {
                        value: "Female",
                        required: true,
                      },
                      label: "Female",
                    },
                  ]}
                />
              </div>

              {/* ZipCode And CountryCode  */}
              <div className="flex gap-3 justify-between">
                <div className="w-1/2">
                  <Text
                    text="ZIP Code"
                    fontSize={17}
                    marginBottom={2}
                    color="#4b5563"
                    bold="font-semibold"
                  />
                  <TextInputElement
                    textInputProps={{
                      name: "zipCode",
                      placeholder: "Your ZIP code",
                      type: "text",
                    }}
                    {...tbStyles}
                  />
                </div>

                {/* Country Code */}
                <div className="w-1/2">
                  <Text
                    text="Country"
                    fontSize={17}
                    marginBottom={2}
                    color="#4b5563"
                    bold="font-semibold"
                  />
                  <SelectBoxInputElement
                    options={[
                      {
                        optionProps: {
                          checked: true,
                          value: "India",
                          required: true,
                        },
                        label: "India",
                      },
                      {
                        optionProps: {
                          checked: true,
                          value: "sriLanka",
                          required: true,
                        },
                        label: "Sri Lanka",
                      },
                      {
                        optionProps: {
                          checked: true,
                          value: "china",
                          required: true,
                        },
                        label: "China",
                      },
                    ]}
                  />
                </div>
              </div>

              {/* Address */}
              <Text
                text="Address"
                fontSize={17}
                marginBottom={2}
                color="#4b5563"
                bold="font-semibold"
              />
              <TextAreaElement
                textInputProps={{
                  name: "address",
                  placeholder: "Your address",
                  type: "text",
                }}
              />
            </Element>
          </Frame>
        </div>
      </div>
      <div className="w-[30%] pr-2 h-screen">
        <div className="bg-white rounded-md shadow-md h-full overflow-y-scroll scrollbar-hide">
          <Toolbox />
        </div>
      </div>
    </div>
  );
}
