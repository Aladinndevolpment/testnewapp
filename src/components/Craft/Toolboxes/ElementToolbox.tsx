import { Button } from "../widgets/Button";
import { Text } from "../widgets/Text";
import { Card } from "../widgets/Card";
import { BuilderImage } from "../widgets/Image";
import { Grid } from "../widgets/Grid";
import { Link } from "../widgets/Link";

import { useState } from "react";
import TextInput from "@/components/controls/TextInput";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ElementToolsLayout from "./tools/ElementToolsLayout";

export default function ElementToolbox() {
  const [searchString, setSearchString] = useState("");

  const tools = [
    {
      name: "Text",
      tool: (
        <ElementToolsLayout
          toolName="Text"
          tool={<Text text="Start writing here..." alignment={"left"} />}
          image="@/../public/craft/hero.png"
        />
      ),
    },

    {
      name: "Button",
      tool: (
        <ElementToolsLayout
          toolName="Button"
          tool={<Button text="Click Me" />}
          image="@/../public/craft/hero.png"
        />
      ),
    },

    {
      name: "Image",
      tool: (
        <ElementToolsLayout
          toolName="Image"
          tool={<BuilderImage />}
          image="@/../public/craft/hero.png"
        />
      ),
    },

    {
      name: "Link",
      tool: (
        <ElementToolsLayout
          toolName="Link"
          tool={<Link text="Link" href={"#"} />}
          image="@/../public/craft/hero.png"
        />
      ),
    },

    {
      name: "Card",
      tool: (
        <ElementToolsLayout
          toolName="Card"
          tool={<Card />}
          image="@/../public/craft/hero.png"
        />
      ),
    },

    {
      name: "Grid 1",
      tool: (
        <ElementToolsLayout
          toolName="Grid 1"
          tool={<Grid col={1} />}
          image="@/../public/craft/hero.png"
        />
      ),
    },
  ];

  return (
    <div className="mt-3">
      <div className="mb-2">
        <TextInput
          lefticon={<MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />}
          placeholder="Search layout"
        />
      </div>
      <div className="flex flex-col overflow-hidden gap-3 mt-3 w-full">
        {tools.map((item, index) => (
          <div
            key={index}
            className="w-full hover:border hover:border-blue-500"
          >
            {item.tool}
          </div>
        ))}
      </div>
    </div>
  );
}
