import React from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import Container from "./Container";
import { useNode, Element } from "@craftjs/core";

export const CardTop = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

CardTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text
      ),
  },
};

export const CardBottom = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

CardBottom.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Button
      ),
  },
};

export const Card = ({ padding = 20 }) => {
  return (
    <Container>
      <div className="bg-white p-4">
        <Element id="text" is={CardTop} canvas>
          <Text text="Title" fontSize={20} />
          <Text text="Subtitle" fontSize={15} />
        </Element>
        <Element id="buttons" is={CardBottom} canvas>
          <Button text="Learn more" />
        </Element>
      </div>
    </Container>
  );
};
