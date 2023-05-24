import React, { useState } from "react";
import Container from "./Container";
import { useNode } from "@craftjs/core";
import Image from "next/image";

interface BuilderImageProps {
  imageSrc?: string;
  borderRadius?: number;
}
export const BuilderImage = ({
  imageSrc,
  borderRadius = 10,
}: BuilderImageProps) => {
  return (
    <Container>
      <div
        className="w-full relative h-[400px] flex justify-start mt-3 "
        style={{ borderRadius: borderRadius + "px" }}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            className="w-full"
            fill={true}
            alt=""
            style={{ objectFit: "cover", borderRadius: borderRadius + "px" }}
          />
        ) : (
          <Image
            src={require("@/../public/images/avatar/blackdog.jpg")}
            className="w-full"
            fill={true}
            alt=""
            style={{ objectFit: "cover", borderRadius: borderRadius + "px" }}
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

      <input
        type="range"
        min="0"
        max="100"
        value={borderRadius}
        onChange={({ target: { value } }) => {
          setProp((props: any) => (props.borderRadius = value));
          //   setBorderRadius(parseInt(value));
        }}
        className="range"
      />
    </div>
  );
};

BuilderImage.craft = {
  related: {
    settings: BuilderImageSettings,
  },
};
