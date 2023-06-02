import React from "react";
import Container from "./Container";
import { useNode } from "@craftjs/core";
import Image from "next/image";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "./CommonSettings";
import TextInput from "@/components/controls/TextInput";
import { IoContract } from "react-icons/io5";

const elementName = "Image";

interface BuilderImageProps extends ICommonSettingsProps {
  imageSrc?: string;
  borderRadius?: number;
  height?: number;
  width?: number;
  type?: "cover" | "contain";
}

const imageTypes = ["cover", "contain"];

export const BuilderImage = ({
  imageSrc,
  height = 400,
  width = 0,
  type = "cover",
  backgroundColor = baseDefaults.backgroundColor,
  borderRadius = baseDefaults.borderRadius,
  borderColor = baseDefaults.borderColor,
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
  shadow = "shadow-none",
  shadowColor = "transparent",
}: BuilderImageProps) => {
  const {
    hovered,
    connectors: { connect, drag },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));

  return (
    <div
      className={`relative flex justify-start ${
        hovered && "hover:outline-orange-500 hover:outline"
      }   ${borderType} ${shadow} shadow-[${shadowColor}]`}
      ref={(ref: any) => connect(drag(ref))}
      style={{
        height: height + "px",
        width: width == 0 ? "100%" : height + "px",
        borderColor,
        borderWidth: `${borderWidth}px`,
        borderRadius: `${borderRadius}px`,
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
        marginLeft: `${marginLeft}px`,
        marginRight: `${marginRight}px`,
      }}
    >
      {hovered && (
        <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs px-1 z-50">
          {elementName}
        </div>
      )}
      {imageSrc ? (
        <Image
          src={imageSrc}
          fill={true}
          alt=""
          style={{
            objectFit: type,
            borderRadius: borderRadius + "px",
            backgroundColor,
            paddingTop: `${paddingTop}px`,
            paddingBottom: `${paddingBottom}px`,
            paddingLeft: `${paddingLeft}px`,
            paddingRight: `${paddingRight}px`,
          }}
        />
      ) : (
        <Image
          src={require("@/../public/images/avatar/blackdog.jpg")}
          fill={true}
          alt=""
          style={{
            objectFit: type,
            borderRadius: borderRadius + "px",
            backgroundColor,
            paddingTop: `${paddingTop}px`,
            paddingBottom: `${paddingBottom}px`,
            paddingLeft: `${paddingLeft}px`,
            paddingRight: `${paddingRight}px`,
          }}
        />
      )}
    </div>
  );
};

const BuilderImageSettings = () => {
  const {
    actions: { setProp },
    fontSize,
    borderRadius,
    props,
  } = useNode((node) => ({
    fontSize: node.data.props.imageSrc,
    borderRadius: node.data.props.borderRadius,
    props: node.data.props,
  }));

  return (
    <div className="flex flex-col gap-4 mb-4">
      <input
        type="file"
        className="file-input file-input-bordered file-input-warning w-full max-w-xs"
        onChange={(e) =>
          setProp(
            (props: any) =>
              (props.imageSrc = URL.createObjectURL(e.target.files![0]))
          )
        }
        accept="image/*"
      />

      <div className="flex flex-wrap justify-between">
        <div className="mb-4 mt-2 flex flex-col gap-1 w-1/2 pr-1">
          <label className="text-sm text-gray-400 ">Width</label>
          <TextInput
            lefticon={<IoContract />}
            value={props.width == "" ? 0 : props.width}
            placeholder="Width"
            onChange={(e) =>
              setProp((props: any) => (props.width = e.target.value))
            }
            type="number"
          />
        </div>

        <div className="mb-4 mt-2 flex flex-col gap-1 w-1/2 pl-1">
          <label className="text-sm text-gray-400 ">Height</label>
          <TextInput
            lefticon={<IoContract />}
            value={props.height == "" ? 0 : props.height}
            placeholder="Height"
            onChange={(e) =>
              setProp((props: any) => (props.height = e.target.value))
            }
            type="number"
          />
        </div>
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Image Type</label>
        <div className="dropdown">
          <label
            tabIndex={0}
            className={`btn hover:bg-transparent hover:text-black rounded-md py-2 btn-sm bg-transparent text-black border-gray-300 capitalize w-full text-left justify-start ${props.type} text-gray-500`}
          >
            {props.type}
          </label>
          <div
            tabIndex={0}
            className="dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-700 max-h-80 overflow-y-scroll scrollbar-hide"
          >
            <ul tabIndex={0} className="menu w-full bg-transparent">
              {imageTypes.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setProp((props: any) => (props.type = item))}
                  className={`${
                    item === props.type &&
                    "bg-primary text-primary-content rounded-md"
                  }`}
                >
                  <a className={`capitalize ${item} text-sm`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <CommonSettings />
    </div>
  );
};

BuilderImage.craft = {
  related: {
    settings: BuilderImageSettings,
  },
  props: {
    height: 400,
    width: 0,
    type: "cover",
    ...getCommonSettingsProps(),
    borderRadius: 10,
    borderWidth: baseDefaults.borderWidth,
    marginTop: baseDefaults.marginTop,
    marginBottom: baseDefaults.marginBottom,
    marginLeft: baseDefaults.marginLeft,
    marginRight: baseDefaults.marginRight,
    paddingTop: baseDefaults.paddingTop,
    paddingBottom: baseDefaults.paddingBottom,
    paddingLeft: baseDefaults.paddingLeft,
    paddingRight: baseDefaults.paddingRight,
  },
};
