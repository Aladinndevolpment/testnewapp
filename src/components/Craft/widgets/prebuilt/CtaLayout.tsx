import { useNode, Element, useEditor } from "@craftjs/core";
import { Text } from "../Text/Text";
import { createElement, useState } from "react";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "../CommonSettings";
import { BuilderImage } from "../Image";
import { Button } from "@/components/SurveyCraft/widgets/Button";

const elementName = "CtaLayouts";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 10,
};

interface ICtaLayoutsProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const CtaLayoutsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

CtaLayoutsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const CtaLayouts = ({
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
}: ICtaLayoutsProps) => {
  // const [showResults, setShowResults] = useState(false);

  // const handleClick = () => {
  //   setShowResults(true);
  // };

  const {
    connectors: { connect, drag },
    hovered,
  } = useNode((state) => ({ hovered: state.events.hovered }));

  // console.log(showResults);
  return (
    <div ref={(ref: any) => connect(drag(ref))}>
      <div
        className={`w-full h-auto ${size} mr-2 ${
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
        <div>
          <Element id="CtaLayoutsText" is={CtaLayoutsText} canvas>
            <section className="relative isolate overflow-hidden  px-6 py-24 sm:py-8 sm:my-1  lg:px-8">
              <div className="absolute inset-0 -z-10 opacity-20  " />

              <div className="mx-auto max-w-2xl lg:max-w-4xl ">
                <figure className="my-10 ">
                  <blockquote className="text-center text-xl  font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                    <p
                      className={`   w-full h-auto ${size} mr-2 ${
                        hovered && "hover:outline-pink-500 hover:outline "
                      }  relative ${shadowColor} ${shadow} ${borderType}`}
                      style={{
                        marginTop: `${marginTop}px`,
                        marginBottom: `${marginBottom}px`,
                        marginLeft: `${marginLeft}px`,
                        marginRight: `${marginRight}px`,
                        paddingTop: `${paddingTop}px`,
                        paddingBottom: `${paddingBottom}px`,
                        paddingLeft: `${paddingLeft}px`,
                        paddingRight: `${paddingRight}px`,
                        borderWidth: `${borderWidth}px`,
                        borderRadius: `2px`,
                        borderColor,
                      }}
                    >
                      <Text
                        paddingBottom={10}
                        paddingTop={10}
                        alignment="center"
                        text="Heading"
                        fontSize={30}
                        bold="font-bold"
                        color="#000000"
                      />
                    </p>
                    <p
                      className={`   w-full h-auto ${size} mr-2 ${
                        hovered && "hover:outline-pink-500 hover:outline "
                      }  relative ${shadowColor} ${shadow} ${borderType}`}
                      style={{
                        marginTop: `${marginTop}px`,
                        marginBottom: `${marginBottom}px`,
                        marginLeft: `${marginLeft}px`,
                        marginRight: `${marginRight}px`,
                        paddingTop: `${paddingTop}px`,
                        paddingBottom: `${paddingBottom}px`,
                        paddingLeft: `${paddingLeft}px`,
                        paddingRight: `${paddingRight}px`,
                        borderWidth: `${borderWidth}px`,
                        borderRadius: `2px`,
                        borderColor,
                      }}
                    >
                      <Text
                        paddingLeft={10}
                        paddingBottom={10}
                        paddingTop={10}
                        alignment="center"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo expedita voluptas culpa sapiente alias molestiae.
                      Numquam corrupti in laborum sed rerum et corporis."
                        fontSize={15}
                        bold="font-medium"
                        color="#6B6C6D"
                      />
                    </p>
                  </blockquote>
                  {/* <figcaption className="mt-10">
                  <div
                    className={` flex justify-center w-full h-auto ${size} mr-2 ${
                      hovered && "hover:outline-pink-500 hover:outline "
                    }  relative ${shadowColor} ${shadow} ${borderType}`}
                    style={{
                      backgroundColor: "#ffffff",
                      marginTop: `${marginTop}px`,
                      marginBottom: `${marginBottom}px`,
                      marginLeft: `${marginLeft}px`,
                      marginRight: `${marginRight}px`,
                      paddingTop: `${paddingTop}px`,
                      paddingBottom: `${paddingBottom}px`,
                      paddingLeft: `${paddingLeft}px`,
                      paddingRight: `${paddingRight}px`,
                      borderWidth: `${borderWidth}px`,
                      borderRadius: `100px`,
                      borderColor,
                    }}
                  >
                   
                    <div
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover justify-center"
                      style={{
                        backgroundColor: "#ffffff",
                        marginTop: `${marginTop}px`,
                        marginBottom: `${marginBottom}px`,
                        marginLeft: `${marginLeft}px`,
                        marginRight: `${marginRight}px`,
                        paddingTop: `${paddingTop}px`,
                        paddingBottom: `${paddingBottom}px`,
                        paddingLeft: `${paddingLeft}px`,
                        paddingRight: `${paddingRight}px`,
                        borderWidth: `${borderWidth}px`,
                        borderRadius: `100px`,
                        borderColor,
                      }}
                    >
                      <BuilderImage height={50} width={50} borderRadius={50} />
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-center space-x-3 text-base">
                    <div
                      className={`   w-full h-auto ${size} mr-2 ${
                        hovered && "hover:outline-pink-500 hover:outline "
                      }  relative ${shadowColor} ${shadow} ${borderType}`}
                      style={{
                        backgroundColor: "#ffffff",
                        marginTop: `${marginTop}px`,
                        marginBottom: `${marginBottom}px`,
                        marginLeft: `${marginLeft}px`,
                        marginRight: `${marginRight}px`,
                        paddingTop: `${paddingTop}px`,
                        paddingBottom: `${paddingBottom}px`,
                        paddingLeft: `${paddingLeft}px`,
                        paddingRight: `${paddingRight}px`,
                        borderWidth: `${borderWidth}px`,
                        borderRadius: `2px`,
                        borderColor,
                      }}
                    >
                      <Text
                        paddingLeft={10}
                        paddingBottom={10}
                        paddingTop={10}
                        alignment="right"
                        text="Judith Black"
                        fontSize={17}
                        bold="font-semibold"
                        color="#000000"
                        backgroundColor="#ffffff"
                      />
                    </div>
                    <div>
                      <svg
                        viewBox="0 0 2 2"
                        width={3}
                        height={3}
                        aria-hidden="true"
                        className="fill-gray-900"
                      >
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                    </div>
                    <div
                      className={`  ml-2 w-full h-auto ${size} mr-2 ${
                        hovered && "hover:outline-pink-500 hover:outline "
                      }  relative ${shadowColor} ${shadow} ${borderType}`}
                      style={{
                        backgroundColor: "#ffffff",
                        marginTop: `${marginTop}px`,
                        marginBottom: `${marginBottom}px`,
                        marginLeft: `${marginLeft}px`,
                        marginRight: `${marginRight}px`,
                        paddingTop: `${paddingTop}px`,
                        paddingBottom: `${paddingBottom}px`,
                        paddingLeft: `${paddingLeft}px`,
                        paddingRight: `${paddingRight}px`,
                        borderWidth: `${borderWidth}px`,
                        borderRadius: `2px`,
                        borderColor,
                      }}
                    >
                      <Text
                        paddingLeft={10}
                        paddingBottom={10}
                        paddingTop={10}
                        alignment="left"
                        text="CEO of Workcation"
                        fontSize={12}
                        mobileFontSize={20}
                        bold="font-normal"
                        color="#000000"
                        backgroundColor="#ffffff"
                      />
                    </div>
                  </div>
                </figcaption> */}
                  <div className="flex justify-center">
                    <Button
                      text="Learn More"
                      backgroundColor="#4633b6"
                      marginTop={5}
                      paddingLeft={20}
                      paddingRight={20}
                    />
                  </div>
                </figure>
              </div>
            </section>
          </Element>
        </div>
      </div>
    </div>
  );
};

const CtaLayoutsSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["CtaLayoutsText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};

CtaLayouts.craft = {
  related: {
    settings: CtaLayoutsSettings,
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
