import React from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import { useNode, Element } from "@craftjs/core";
import Container from "./Container";

export const GridTop = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

GridTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => true),
  },
};

export const GridBottom = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

GridBottom.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Button
      ),
  },
};

interface IGridProps {
  col: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  padding?: number;
}

export const Grid = ({ padding = 20, col }: IGridProps) => {
  return (
    <Container>
      <div className="flex flex-wrap p-1 border border-black mt-2">
        {[...Array(col)].map((item, index) => (
          <div style={{ width: 100 / col + "%" }} key={index}>
            <Element id={`grid_${index}`} is={GridTop} canvas>
              <Text text="Title" fontSize={20} />
              {col}
            </Element>
          </div>
        ))}
      </div>
    </Container>
  );
};
