import React from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import Container from "./Container";
import { useNode, Element } from "@craftjs/core";
import { BuilderImage } from "./Image";

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

export const HeroLayout = ({ padding = 20 }) => {
  return (
    <Container>
      <div className="bg-white p-4 md:py-16 md:px-8 mt-3 mb-3 flex flex-wrap items-center">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <Element id="heroTitle" is={HeroText} canvas>
            <Text text="Hero Title" fontSize={26} />
          </Element>
          <div className="pt-5">
            <Element id="heroSubtitle" is={HeroText} canvas>
              <Text
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
