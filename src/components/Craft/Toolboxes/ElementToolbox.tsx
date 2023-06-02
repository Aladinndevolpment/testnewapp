import { Button } from "../widgets/Button";
import { Text } from "../widgets/Text";
import { Card } from "../widgets/Card";
import { BuilderImage } from "../widgets/Image";
import { Grid } from "../widgets/Grid";
import { Link } from "../widgets/Link";

import { useEffect, useState } from "react";
import TextInput from "@/components/controls/TextInput";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ElementToolsLayout from "./tools/ElementToolsLayout";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Divider from "../widgets/Divider";
import AccordionItem from "@/components/UI/AccordionItem";
import {
  BsBoundingBox,
  BsCardText,
  BsFillGrid3X3GapFill,
  BsImage,
  BsMenuButtonWide,
} from "react-icons/bs";
import { TbTextSize } from "react-icons/tb";
import { RxDividerHorizontal } from "react-icons/rx";
import { IoShareSocialOutline } from "react-icons/io5";
import {
  AiOutlineForm,
  AiOutlineLink,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import { BuilderVideo } from "../widgets/Video";
import { Social } from "../widgets/Social";
import PrebuiltToolsLayout from "./tools/PrebuiltToolsLayout";
import { formControls } from "@/components/FormCraft/Toolboxes/ElementToolbox";

const baseTools = [
  {
    index: 1,
    question: "Layout",
    answer: [
      {
        name: "Column 1",
        tool: (
          <PrebuiltToolsLayout
            toolName="Column 1"
            tool={<Grid col={1} />}
            image={require("@/../public/craft/grid/1.png")}
          />
        ),
      },
      {
        name: "Column 2",
        tool: (
          <PrebuiltToolsLayout
            toolName="Column 2"
            tool={<Grid col={2} />}
            image={require("@/../public/craft/grid/4.png")}
          />
        ),
      },
      {
        name: "Column 3",
        tool: (
          <PrebuiltToolsLayout
            toolName="Column 3"
            tool={<Grid col={3} />}
            image={require("@/../public/craft/grid/3.png")}
          />
        ),
      },
      {
        name: "Column 4",
        tool: (
          <PrebuiltToolsLayout
            toolName="Column 4"
            tool={<Grid col={4} />}
            image={require("@/../public/craft/grid/4.png")}
          />
        ),
      },
    ],
  },
  {
    index: 2,
    question: "Content",
    answer: [
      {
        name: "Images",
        tool: (
          <ElementToolsLayout
            toolName="Images"
            tool={<BuilderImage />}
            image="@/../public/craft/hero.png"
            icon={<BsImage className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Text",
        tool: (
          <ElementToolsLayout
            toolName="Text"
            tool={<Text text="Start writing here..." alignment={"left"} />}
            image="@/../public/craft/hero.png"
            icon={<TbTextSize className="h-5 w-5 text-gray-500" />}
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
            icon={<BsMenuButtonWide className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Divider",
        tool: (
          <ElementToolsLayout
            toolName="Divider"
            tool={<Divider />}
            image="@/../public/craft/hero.png"
            icon={<RxDividerHorizontal className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Social",
        tool: (
          <ElementToolsLayout
            toolName="Social"
            tool={
              <Social href="#" justifyContent="center" alignItems="center" />
            }
            image="@/../public/craft/hero.png"
            icon={<IoShareSocialOutline className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Video",
        tool: (
          <ElementToolsLayout
            toolName="Video"
            tool={<BuilderVideo />}
            image="@/../public/craft/hero.png"
            icon={<AiOutlineVideoCameraAdd className="h-5 w-5 text-gray-500" />}
          />
        ),
      },

      {
        name: "Link",
        tool: (
          <ElementToolsLayout
            toolName="Link"
            tool={<Link text="Link" href={"#"} targetData={false} />}
            image="@/../public/craft/hero.png"
            icon={<AiOutlineLink className="h-5 w-5 text-gray-500" />}
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
            icon={<BsCardText className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
    ],
  },

  {
    index: 1,
    question: "Form Controls",
    answer: formControls,
  },
];

export default function ElementToolbox() {
  const [searchString, setSearchString] = useState("");
  const [tools, setTools] = useState(baseTools);

  useEffect(() => {
    if (searchString === "") {
      setTools(baseTools);
      return;
    }

    const filteredTools = baseTools.map((tool) => {
      const filteredAnswers = tool.answer.filter((answer) =>
        answer.name.toLowerCase().includes(searchString.toLowerCase())
      );

      return {
        ...tool,
        answer: filteredAnswers,
      };
    });

    setTools(filteredTools);
  }, [searchString]);

  const [clicked, setClicked] = useState(0);
  const handleToggle = (index: any) => {
    if (clicked === index) {
      return setClicked(0);
    }
    setClicked(index);
  };

  return (
    <div className="mt-3">
      <div className="mb-8 px-4">
        <TextInput
          lefticon={<MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />}
          placeholder="Search layout"
          value={searchString}
          onChange={({ target: { value } }) => setSearchString(value)}
        />
      </div>

      <div className="h-[60vh] overflow-y-scroll scrollbar-hide  ">
        {tools.map((item, index) => (
          <AccordionItem
            faq={item}
            key={index}
            onToggle={() => handleToggle(index)}
            active={clicked === index}
            titleBoxStyle={`py-5 rounded-sm border-t-[1px] ${
              clicked === index ? null : "border-b-[1px]"
            } border-gray-200 px-4 bg-white`}
            titleStyle="text-gray-600 text-lg font-medium"
            contentStyle="w-full mb-3 hover:border-2 border-[#cadaff] hover:rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
