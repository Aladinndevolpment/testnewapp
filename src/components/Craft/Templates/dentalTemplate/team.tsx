import { Text } from "../../widgets/Text/Text";
// import { Text } from "./Text/Text";
import { Button } from "../../widgets/Button";
import { useNode, Element, useEditor } from "@craftjs/core";
import { BuilderImage } from "../../widgets/Image";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { TbDental } from "react-icons/tb";
import {
  baseDefaults,
  CommonSettings,
  getCommonSettingsProps,
  ICommonSettingsProps,
} from "../../widgets/CommonSettings";
import { createElement, useState } from "react";
import item from "@/components/Leads/dnd/styles/item";
import { BiPhoneCall } from "react-icons/bi";

const elementName = "Team";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 10,
};

interface ITeamsProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const CardImage = ({ children }: any) => {
  const {
    connectors: { connect, drag },
  }: any = useNode();
  return <div ref={connect}>{children}</div>;
};

CardImage.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === BuilderImage || Text
      ),
  },
};

export const TeamsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

TeamsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const Team = ({
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
}: ITeamsProps) => {
  // const [cardSlide, setCardSlide] = useState < any > [];
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));

  const people = [
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      //   imageUrl: require("../../../../../public/images/dentalTemplate/teamperson1.avif"),
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      //   imageUrl: require("../../../../../public/images/dentalTemplate/teamperson1.avif"),
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      //   imageUrl: require("../../../../../public/images/dentalTemplate/teamperson1.avif"),
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      //   imageUrl: require("../../../../../public/images/dentalTemplate/teamperson1.avif"),
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      //   imageUrl: require("../../../../../public/images/dentalTemplate/teamperson1.avif"),
    },
  ];

  return (
    <div className="bg-white p-2 w-full" ref={(ref: any) => connect(drag(ref))}>
      {/* <div className="card card-compact w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <Element id="heroImage" is={CardImage} canvas>
            <BuilderImage />
          </Element>
        </div>
      </div> */}
      <div
        className={`w-full  ${size} mr-2 shadow-lg ${
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
      >
        {hovered && (
          <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] px-1 z-10 capitalize">
            {elementName}
          </div>
        )}
        <Element id="TeamsText" is={TeamsText} canvas>
          <div
            className="bg-white py-24 sm:py-32 "
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
            <div
              className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 h-[50vh] shadow-lg"
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
              <div
                className="max-w-2xl shadow-lg"
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
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  <Text
                    alignment="center"
                    text="Meet our leadership"
                    fontSize={25}
                    bold="font-medium"
                    color="#000000"
                  />
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  <Text
                    alignment="center"
                    text=" Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
                    vitae elementum enim vitae ullamcorper suspendisse."
                    fontSize={15}
                    bold="font-medium"
                    color="#000000"
                  />
                </p>
              </div>
              <ul
                role="list"
                className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
              >
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="flex items-center gap-x-8">
                      <BuilderImage width={10} height={10} borderRadius={5} />
                      <div>
                        <h3 className="text-base p-2 font-semibold leading-7 tracking-tight text-gray-900">
                          <Text
                            alignment="center"
                            text={person.name}
                            fontSize={15}
                            bold="font-medium"
                            color="#000000"
                          />
                        </h3>
                        <p className="text-sm font-semibold leading-6 text-indigo-600">
                          <Text
                            alignment="center"
                            text={person.role}
                            fontSize={12}
                            bold="font-medium"
                            color="#000000"
                          />
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Element>
      </div>
    </div>
  );
};

const TeamsSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["TeamsText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};

Team.craft = {
  related: {
    settings: TeamsSettings,
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
