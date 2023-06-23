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
import { createElement } from "react";

// export const CardTop = ({ children }: any) => {
//   const {
//     connectors: { connect },
//   }: any = useNode();
//   return (
//     <div ref={connect} className="text-only">
//       {children}
//     </div>
//   );
// };

// CardTop.craft = {
//   rules: {
//     // Only accept Text
//     canMoveIn: (incomingNodes: any) =>
//       incomingNodes.every(
//         (incomingNode: any) => incomingNode.data.type === Text
//       ),
//   },
// };

// export const CardBottom = ({ children }: any) => {
//   const {
//     connectors: { connect },
//   }: any = useNode();
//   return <div ref={connect}>{children}</div>;
// };

// CardBottom.craft = {
//   rules: {
//     // Only accept Buttons
//     canMoveIn: (incomingNodes: any) =>
//       incomingNodes.every(
//         (incomingNode: any) => incomingNode.data.type === Button
//       ),
//   },
// };
const elementName = "Banner";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 10,
};

interface IBannersProps extends ICommonSettingsProps {
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

export const BannersText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

BannersText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const Banner = ({
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
}: IBannersProps) => {
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));

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
        <Element id="BannersText" is={BannersText} canvas>
          <section className="w-full h-[400px] relative isolate overflow-hidden  bg-white">
            <div className="h-full carousel w-full">
              <div id="slide1" className="carousel-item relative w-full p-1">
                <div
                  className="inline-block h-10 w-[100%]  rounded-full ring-2 ring-white object-fit justify-center"
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
                    borderRadius,
                    borderColor,
                  }}
                >
                  <BuilderImage
                    height={380}
                    width={600}
                    borderRadius={5}
                    type={"contain"}
                    imageSrc={require("../../../../../public/images/dentalTemplate/dentalTemplateforth.jpg")}
                  />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-9 top-1/2">
                  <a href="#slide4" className="text-black">
                    ❮
                  </a>
                  <a href="#slide2" className="text-black">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <div
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-fit justify-center"
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
                    borderRadius,
                    borderColor,
                  }}
                >
                  <BuilderImage
                    height={380}
                    width={600}
                    borderRadius={0}
                    // type={"fit"}
                    imageSrc={require("../../../../../public/images/dentalTemplate/dentalTemplatethird.jpg")}
                    type={"contain"}
                  />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-9 top-1/2">
                  <a href="#slide1" className="text-black">
                    ❮
                  </a>
                  <a href="#slide3" className="text-black">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <div
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-fit justify-center"
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
                    borderRadius,
                    borderColor,
                  }}
                >
                  <BuilderImage
                    height={380}
                    width={600}
                    borderRadius={0}
                    type={"contain"}
                    imageSrc={require("../../../../../public/images/dentalTemplate/dentalTemplatesecond.jpg")}
                  />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-9 top-1/2">
                  <a href="#slide2" className="text-black">
                    ❮
                  </a>
                  <a href="#slide4" className="text-black">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <div
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-fit justify-center"
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
                    borderRadius,
                    borderColor,
                  }}
                >
                  <BuilderImage
                    height={380}
                    width={600}
                    borderRadius={0}
                    type={"contain"}
                    imageSrc={require("../../../../../public/images/dentalTemplate/dentalTemplatefirst.jpg")}
                  />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-9 top-1/2">
                  <a href="#slide3" className="text-black">
                    ❮
                  </a>
                  <a href="#slide1" className="text-black">
                    ❯
                  </a>
                </div>
              </div>
              {/* <div className="flex justify-center w-full py-2 gap-2">
                <a href="#slide1" className="btn btn-xs">
                  1
                </a>
                <a href="#slide2" className="btn btn-xs">
                  2
                </a>
                <a href="#slide3" className="btn btn-xs">
                  3
                </a>
                <a href="#slide4" className="btn btn-xs">
                  4
                </a>
              </div> */}
            </div>
          </section>
        </Element>
      </div>
    </div>
  );
};

const BannersSettings = () => {
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
    state.nodes[state.nodes[data.linkedNodes["BannersText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};

Banner.craft = {
  related: {
    settings: BannersSettings,
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
