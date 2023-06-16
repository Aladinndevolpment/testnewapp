import { useNode, Element, useEditor } from "@craftjs/core";
import { Text } from "./Text/Text";
import { createElement, useContext } from "react";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "./CommonSettings";
import { CraftContext } from "@/pages/builder/survey/craft";

const elementName = "Button";

const defaults = {
  backgroundColor: "#313641",
  borderColor: "#313641",
  borderRadius: 10,
};

const btnSizes = [
  {
    value: "btn-xs",
    label: "Tiny",
  },
  {
    value: "btn-sm",
    label: "Small",
  },
  {
    value: "btn",
    label: "Normal",
  },
  {
    value: "btn-lg",
    label: "Large",
  },
];

interface IButtonProps extends ICommonSettingsProps {
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
}: IButtonProps) => {
  const {
    connectors: { connect, drag },
    hovered,
  } = useNode((state) => ({ hovered: state.events.hovered }));
  const ctx = useContext(CraftContext);
  return (
    <div ref={(ref: any) => connect(drag(ref))}>
      <div onClick={() => ctx.setOpenSettings(true)}>
        <button
          className={`btn ${size} mr-2 ${
            hovered && "hover:outline-pink-500 hover:outline"
          }  relative ${shadowColor} ${shadow} ${borderType}`}
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
      </div>{" "}
    </div>
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

      <div className={`flex gap-3 flex-wrap w-full`}>
        {btnSizes?.map((item, index) => (
          <div className="form-control" key={index}>
            <label className="cursor-pointer flex items-center gap-2">
              <input
                type="radio"
                name="btn_size"
                className="radio checked:bg-green-500"
                checked={item.value === props.size}
                required={true}
                value={item.value}
                onChange={(e) =>
                  setProp((props: any) => (props.size = e.target.value))
                }
              />
              <span className="label-text">{item.label}</span>
            </label>
          </div>
        ))}
      </div>

      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};

Button.craft = {
  related: {
    settings: ButtonSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderColor: defaults.borderColor,
    paddingRight: 10,
    paddingLeft: 10,
    size: "btn",
  },
  displayName: elementName,
};
