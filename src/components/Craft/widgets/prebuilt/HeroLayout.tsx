import React from "react";
import { Text } from "../Text";
import { Button } from "../Button";
import Container from "../Container";
import { useNode, Element } from "@craftjs/core";
import { BuilderImage } from "../Image";
import { MuiColorInput } from "mui-color-input";
import TextInput from "@/components/controls/TextInput";
import { IoContract } from "react-icons/io5";

const defaults = {
  backgroundColor: "#ffffff",
  borderRadius: 10,
};

interface HeroLayoutProps {
  padding?: number;
  backgroundColor?: string;
  borderRadius?: number;
}

export const HeroLayout = ({
  padding = 20,
  backgroundColor = defaults.backgroundColor,
  borderRadius = defaults.borderRadius,
}: HeroLayoutProps) => {
  return (
    <Container>
      <div
        className="p-4 md:py-16 md:px-8 flex flex-wrap items-center hover:outline-purple-500 hover:outline shadow-md"
        style={{
          backgroundColor: backgroundColor,
          borderRadius: borderRadius + "px",
        }}
      >
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <Element id="heroTitle" is={HeroText} canvas>
            <Text
              alignment="left"
              text="Hero Title"
              fontSize={26}
              bold="font-semibold"
            />
          </Element>
          <div className="pt-5">
            <Element id="heroSubtitle" is={HeroText} canvas>
              <Text
                alignment="left"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                fontSize={14}
              />
            </Element>
          </div>
          <div className="pt-4 md:pt-16">
            <Element id="heroButton" is={HeroButton} canvas>
              <Button text="Learn More" />
            </Element>
          </div>
        </div>
        <div className="w-full md:w-1/2 pl-4 order-1 md:order-2 mb-4 md:mb-0">
          <Element id="heroImage" is={HeroButton} canvas>
            <BuilderImage />
          </Element>
        </div>
      </div>
    </Container>
  );
};

const HeroLayoutSettings: any = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="w-full">
      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Background Color</label>
        <div className="">
          <MuiColorInput
            format="hex"
            value={props.backgroundColor ? props.backgroundColor : "#ffffff"}
            onChange={(e) =>
              setProp((props: any) => (props.backgroundColor = e))
            }
          />
        </div>
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Border Radius</label>
        <TextInput
          lefticon={<IoContract />}
          value={props.borderRadius}
          placeholder="Border radius in px"
          onChange={(e) =>
            setProp((props: any) => (props.borderRadius = e.target.value))
          }
          type="number"
          min={0}
        />
      </div>
    </div>
  );
};

HeroLayout.craft = {
  related: {
    settings: HeroLayoutSettings,
  },
  props: {
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
  },
};

export const HeroText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

HeroText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text
      ),
  },
};

export const HeroButton = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

HeroButton.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Button
      ),
  },
};
