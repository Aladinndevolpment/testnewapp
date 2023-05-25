import React, { ReactNode } from "react";
import { Text } from "../Text";
import { Button } from "../Button";
import Container from "../Container";
import { useNode, Element } from "@craftjs/core";
import { BuilderImage } from "../Image";
import { MuiColorInput } from "mui-color-input";
import TextInput from "@/components/controls/TextInput";
import { IoContract } from "react-icons/io5";
import { Link } from "../Link";
import { PencilIcon } from "@heroicons/react/24/solid";

const defaults = {
  backgroundColor: "#ffffff",
  borderRadius: 0,
};

interface link {
  text: string;
  href: string;
}

interface HeroLayoutProps {
  padding?: number;
  backgroundColor?: string;
  borderRadius?: number;
  menuItems?: link[];
}

const items: link[] = [
  {
    text: "Home",
    href: "#",
  },
  {
    text: "About",
    href: "#",
  },
  {
    text: "Category",
    href: "#",
  },
  {
    text: "Services",
    href: "#",
  },
  {
    text: "Contact Us",
    href: "#",
  },
];

export const HeaderLayout = ({
  padding = 20,
  backgroundColor = defaults.backgroundColor,
  borderRadius = defaults.borderRadius,
  menuItems = items,
}: HeroLayoutProps) => {
  return (
    <Container>
      <div
        className="p-4 md:py-2 md:px-8 flex flex-wrap justify-between items-center hover:outline-blue-500 hover:outline border-b"
        style={{
          backgroundColor: backgroundColor,
          borderRadius: borderRadius + "px",
        }}
      >
        <div className="">
          <Element id="heroImage" is={HeaderLogo} canvas>
            <BuilderImage width="70px" height="70px" type="contain" />
          </Element>
        </div>

        <div className="w-auto ml-auto">
          <Element id="heroTitle" is={HeaderMenu} canvas>
            <div className="flex gap-2">
              {menuItems.map((item, index) => (
                <Link key={index} text={item.text} href={item.href} />
              ))}
            </div>
          </Element>
        </div>
      </div>
    </Container>
  );
};

const HeaderLayoutSettings: any = () => {
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

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Menu Items</label>

        <div className="flex flex-col gap-2">
          {props.menuItems.map((item: link, index: number) => (
            <div key={index} className="flex justify-between items-center">
              <div className="text-gray-500">{item.text}</div>
              <button className="btn btn-xs bg-transparent border-none text-gray-500 hover:bg-gray-200">
                <PencilIcon className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

HeaderLayout.craft = {
  related: {
    settings: HeaderLayoutSettings,
  },
  props: {
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    menuItems: items,
  },
};

export const HeaderLogo = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

HeaderLogo.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === BuilderImage
      ),
  },
};

export const HeaderMenu = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

HeaderMenu.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === false
      ),
  },
};
