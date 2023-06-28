import { Text } from "../../widgets/Text/Text";
import { Button } from "../../widgets/Button";
import { useNode, Element, useEditor } from "@craftjs/core";
import { BsTelephoneOutbound } from "react-icons/bs";
import { FiHome } from "react-icons/fi";
import {
  baseDefaults,
  CommonSettings,
  getCommonSettingsProps,
  ICommonSettingsProps,
} from "../../widgets/CommonSettings";
import { createElement, useState } from "react";
import { TextInputElement } from "@/components/SurveyCraft/widgets/form/TextInput";
import { TextAreaElement } from "../../widgets/form/TextareaElement";
import { CiMail } from "react-icons/ci";

const elementName = "Contact";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 10,
};

interface IContactTempsProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const ContactTempsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

ContactTempsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) =>
          incomingNode.data.type === Text ||
          TextInputElement ||
          TextAreaElement ||
          Button
      ),
  },
};

export const ContactTemp = ({
  size,
  backgroundColor = defaults.backgroundColor,
  borderRadius = defaults.borderRadius,
  borderColor = defaults.borderColor,
  borderType = "border-solid",
  borderWidth = baseDefaults.borderWidth,
  marginTop = baseDefaults.marginTop,
  marginBottom = baseDefaults.marginBottom,
  marginLeft = baseDefaults.marginLeft,
  marginRight = baseDefaults.marginRight,
  paddingTop = baseDefaults.paddingTop,
  paddingBottom = baseDefaults.paddingBottom,
  paddingLeft = baseDefaults.paddingLeft,
  paddingRight = baseDefaults.paddingRight,
  shadow,
  shadowColor,
}: IContactTempsProps) => {
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));

  return (
    <div
      className={`w-full h-auto ${size} mr-2  ${
        hovered && "hover:outline-pink-500 hover:outline "
      }  relative ${shadowColor} ${shadow} ${borderType} `}
      style={{
        backgroundColor,
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
        marginLeft: `${marginLeft}px`,
        marginRight: `${marginRight}px`,
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${paddingBottom}px`,
        paddingLeft: `${paddingLeft}px`,
        paddingRight: `${paddingRight}px`,
        borderWidth: `${borderWidth}px`,
        borderRadius: `${borderRadius}px`,
        borderColor,
      }}
      ref={(ref: any) => connect(drag(ref))}
    >
      {hovered && (
        <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] px-1 z-50 capitalize">
          {elementName}
        </div>
      )}
      <Element id="ContactTempsText" is={ContactTempsText} canvas>
        <div className="relative z-10 overflow-hidden bg-white py-4 px-4 lg:py-[10px]">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap lg:justify-between">
              <div className="w-full pl-4 lg:w-1/2 xl:w-6/12">
                <div className="mb-12 max-w-[570px] lg:mb-0">
                  <span className="text-primary mb-4 block text-base font-semibold">
                    <Text
                      alignment="center"
                      text="Contact Us"
                      fontSize={15}
                      bold="font-bold"
                      color="#0B8EF0"
                    />
                  </span>
                  <div className="text-dark mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                    <Text
                      alignment="center"
                      text="BOOK YOUR VISIT"
                      fontSize={22}
                      bold="font-bold"
                      color="#000000"
                    />
                  </div>
                  <div className="text-body-color mb-9 text-base leading-relaxed">
                    <Text
                      alignment="center"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eius tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim adiqua minim veniam quis nostrud
                        exercitation ullamco"
                      fontSize={12}
                      bold="font-medium"
                      color="#6B6C6D"
                    />{" "}
                  </div>
                  <div className="mb-8 flex w-full max-w-[370px]">
                    <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                      <FiHome />
                    </div>
                    <div className="w-full">
                      <div className="text-dark mb-1 text-xl font-bold">
                        <Text
                          alignment="left"
                          text="Our Location"
                          fontSize={17}
                          bold="font-bold"
                          color="#000000"
                        />
                      </div>
                      <div className="text-body-color text-base">
                        <Text
                          alignment="left"
                          text="24 S.t Palace Park California 28292. USA"
                          fontSize={12}
                          bold="font-medium"
                          color="#6B6C6D"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-8 flex w-full max-w-[370px]">
                    <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                      <BsTelephoneOutbound />
                    </div>
                    <div className="w-full">
                      <div className="text-dark mb-1 text-xl font-bold">
                        <Text
                          alignment="left"
                          text=" Phone Number"
                          fontSize={17}
                          bold="font-bold"
                          color="#000000"
                        />
                      </div>
                      <div className="text-body-color text-base">
                        <Text
                          alignment="left"
                          text="(+91)00 00 000 0000"
                          fontSize={12}
                          bold="font-medium"
                          color="#6B6C6D"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-8 flex w-full max-w-[370px]">
                    <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                      <CiMail />
                    </div>
                    <div className="w-full">
                      <div className="text-dark mb-1 text-xl font-bold">
                        <Text
                          alignment="left"
                          text="Email Address"
                          fontSize={17}
                          bold="font-bold"
                          color="#000000"
                        />{" "}
                      </div>
                      <div className="text-body-color text-base">
                        <Text
                          alignment="left"
                          text="examle@example.com"
                          fontSize={12}
                          bold="font-medium"
                          color="#000000"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pr-4 pl-2 lg:w-1/2 xl:w-6/12">
                <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
                  <form>
                    <div className="mb-6">
                      <TextInputElement
                        textInputProps={{
                          name: "fullName",
                          placeholder: "Your Name",
                          type: "text",
                          className:
                            "text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none",
                        }}
                      />
                    </div>
                    <div className="mb-6">
                      <TextInputElement
                        textInputProps={{
                          name: "Email",
                          placeholder: "Your Email",
                          type: "email",
                          className:
                            "text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none",
                        }}
                      />
                    </div>
                    <div className="mb-6">
                      <TextInputElement
                        textInputProps={{
                          name: "phone",
                          placeholder: "Your Phone",
                          type: "text",
                          className:
                            "text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none",
                        }}
                      />
                    </div>
                    <div className="mb-6">
                      <TextAreaElement
                        textInputProps={{
                          name: "Message",
                          placeholder: "Your Message",
                        }}
                      />
                    </div>
                    <div>
                      <Button text="GET APPOINTMENT" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

const ContactTempsSettings = () => {
  const {
    actions: { setProp },
    props,
    id,
    data,
  } = useNode((node) => ({
    props: node.data.props,
    data: node.data,
  }));

  const { state } = useEditor((state) => {
    return { state };
  });

  const textNodeSettings =
    state.nodes[state.nodes[data.linkedNodes["ContactTempsText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};
ContactTemp.craft = {
  related: {
    settings: ContactTempsSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderColor: defaults.borderColor,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 0,
    marginBottom: 0,
  },
  displayName: elementName,
};
