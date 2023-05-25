import React, { useState } from "react";
import Container from "./Container";
import { useNode } from "@craftjs/core";
import Image from "next/image";
import TextInput from "@/components/controls/TextInput";
import { IoContract } from "react-icons/io5";

interface BuilderImageProps {
  imageSrc?: string;
  borderRadius?: number;
  height?: string;
  width?: string;
  type?: "cover" | "contain";
}
export const BuilderImage = ({
  imageSrc,
  borderRadius = 10,
  height = "400px",
  width = "100%",
  type = "cover",
}: BuilderImageProps) => {
  return (
    <Container>
      <div
        className={`relative flex justify-start hover:outline-blue-500 hover:outline`}
        style={{ borderRadius: borderRadius + "px", height, width }}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            fill={true}
            alt=""
            style={{ objectFit: type, borderRadius: borderRadius + "px" }}
          />
        ) : (
          <Image
            src={require("@/../public/images/avatar/blackdog.jpg")}
            fill={true}
            alt=""
            style={{ objectFit: type, borderRadius: borderRadius + "px" }}
          />
        )}
      </div>
    </Container>
  );
};

const BuilderImageSettings = () => {
  const {
    actions: { setProp },
    fontSize,
    borderRadius,
  } = useNode((node) => ({
    fontSize: node.data.props.imageSrc,
    borderRadius: node.data.props.borderRadius,
  }));

  return (
    <div className="flex flex-col gap-4 mb-4">
      <input
        type="file"
        className="file-input w-full max-w-xs"
        onChange={(e) =>
          setProp(
            (props: any) =>
              (props.imageSrc = URL.createObjectURL(e.target.files![0]))
          )
        }
      />

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Border Radius</label>
        <TextInput
          lefticon={<IoContract />}
          value={borderRadius}
          placeholder="Border radius in px"
          onChange={(e) =>
            setProp((props: any) => (props.borderRadius = e.target.value))
          }
          type="number"
          min={0}
        />
      </div>
    </div>
  );
};

BuilderImage.craft = {
  related: {
    settings: BuilderImageSettings,
  },
  props: {
    borderRadius: 10,
    height: "400px",
    width: "100%",
    type: "cover",
  },
};
