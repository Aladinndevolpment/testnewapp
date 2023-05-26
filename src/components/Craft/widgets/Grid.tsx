import React from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import { useNode, Element } from "@craftjs/core";
import Container from "./Container";
import TextInput from "@/components/controls/TextInput";
import { IoContract } from "react-icons/io5";

export const GridTop = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only p-2">
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

export const Grid = ({ padding = 20, col = 1 }: IGridProps) => {
  return (
    <Container>
      <div className="flex flex-wrap mt-2  hover:outline hover:outline-blue-500">
        {[...Array(col)].map((item, index) => (
          <div style={{ width: 100 / col + "%" }} key={index} className="p-2">
            <Element id={`grid_${index}`} is={GridTop} canvas></Element>
          </div>
        ))}
      </div>
    </Container>
  );
};

const GridSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div>
      <div className="mb-4">
        <TextInput
          lefticon={<IoContract />}
          value={props.col}
          placeholder="Button Text"
          onChange={(e) =>
            setProp((props: any) => (props.col = parseInt(e.target.value)))
          }
          min={1}
          type="number"
          max={12}
        />
      </div>
    </div>
  );
};

Grid.craft = {
  related: {
    settings: GridSettings,
  },
  props: {
    col: 1,
  },
};
