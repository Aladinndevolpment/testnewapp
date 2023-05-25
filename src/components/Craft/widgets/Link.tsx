import { useNode, Element } from "@craftjs/core";
import { Text } from "./Text";
import { MuiColorInput } from "mui-color-input";
import TextInput from "@/components/controls/TextInput";
import { IoContract } from "react-icons/io5";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 10,
};

interface ILinkProps {
  text?: string;
  backgroundColor?: string;

  href: string;
}

export const Link = ({
  href = "#",
  text = "Learn More",
  backgroundColor = defaults.backgroundColor,
}: ILinkProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref: any) => connect(drag(ref))}
      className={`mr-2 hover:outline-blue-500 hover:outline p-1 w-fit`}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <a href={href}>
        <Element id="link" is={LinkText} canvas>
          <Text
            alignment="left"
            text={text}
            fontSize={16}
            bold="font-semibold"
            color="#000"
          />
        </Element>
      </a>
    </div>
  );
};

const LinkSettings = () => {
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
          value={props.href}
          placeholder="Button Text"
          onChange={(e) =>
            setProp((props: any) => (props.href = e.target.value))
          }
        />
      </div>
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
    </div>
  );
};

Link.craft = {
  related: {
    settings: LinkSettings,
  },
  props: {
    background: defaults.backgroundColor,
    href: "#",
  },
};

export const LinkText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

LinkText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};
