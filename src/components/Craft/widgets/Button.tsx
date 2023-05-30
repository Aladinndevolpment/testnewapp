import { useNode, Element, useEditor } from "@craftjs/core";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

import { Text } from "./Text";
import { MuiColorInput } from "mui-color-input";
import TextInput from "@/components/controls/TextInput";
import { IoContract } from "react-icons/io5";
import { createElement } from "react";

const elementName = "Button";

const defaults = {
  backgroundColor: "#313641",
  borderColor: "#313641",
  borderRadius: 10,
};

interface IButtonProps {
  size?: string;
  text?: string;
  backgroundColor?: string;
  borderColor?: string;

  borderRadius?: number;
}

export const ButtonText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

ButtonText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const Button = ({
  size,
  text = "Learn More",
  backgroundColor = defaults.backgroundColor,
  borderRadius = defaults.borderRadius,
  borderColor = defaults.borderColor,
}: IButtonProps) => {
  const {
    connectors: { connect, drag },
    hovered,
  } = useNode((state) => ({ hovered: state.events.hovered }));

  return (
    <button
      ref={(ref: any) => connect(drag(ref))}
      className={`btn ${size} mr-2 hover:outline-pink-500 hover:outline relative`}
      style={{
        backgroundColor: backgroundColor,
        borderRadius: borderRadius + "px",
        borderColor: borderColor,
      }}
    >
      {hovered && (
        <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] px-1 capitalize">
          {elementName}
        </div>
      )}
      <Element id="buttonText" is={ButtonText} canvas>
        <Text
          alignment="left"
          text={text}
          fontSize={16}
          bold="font-semibold"
          color="#ffffff"
        />
      </Element>
    </button>
  );
};

const ButtonSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["buttonText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      {/* <div className="mb-4">
        <TextInput
          lefticon={<IoContract />}
          value={props.text}
          placeholder="Button Text"
          onChange={(e) =>
            setProp((props: any) => (props.text = e.target.value))
          }
        />
      </div> */}
      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Background Color</label>
        <div className="">
          <MuiColorInput
            format="hex"
            value={
              props.backgroundColor
                ? props.backgroundColor
                : defaults.backgroundColor
            }
            onChange={(e) =>
              setProp((props: any) => (props.backgroundColor = e))
            }
          />
        </div>
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Border Color</label>
        <div className="">
          <MuiColorInput
            format="hex"
            value={props.borderColor ? props.borderColor : defaults.borderColor}
            onChange={(e) => setProp((props: any) => (props.borderColor = e))}
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

      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Size</FormLabel>
        <RadioGroup
          defaultValue={props.size}
          onChange={(e) =>
            setProp((props: any) => (props.size = e.target.value))
          }
        >
          <FormControlLabel
            label="Tiny"
            value="btn-xs"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Small"
            value="btn-sm"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Normal"
            value="normal"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Large"
            value="btn-lg"
            control={<Radio size="small" color="primary" />}
          />
        </RadioGroup>
      </FormControl>

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};

Button.craft = {
  related: {
    settings: ButtonSettings,
  },
  props: {
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderColor: defaults.borderColor,
  },
};
