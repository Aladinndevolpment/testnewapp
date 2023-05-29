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

export default function ElementToolbox() {
  const [searchString, setSearchString] = useState("");

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  // const tools = [
  //   {
  //     type: "Layout",
  //     controls: [
  //       {
  //         name: "Grid 1",
  //         tool: (
  //           <ElementToolsLayout
  //             toolName="Grid 1"
  //             tool={<Grid col={1} />}
  //             image="@/../public/craft/hero.png"
  //           />
  //         ),
  //       },
  //     ],
  //   },
  //   {
  //     type: "Content",
  //     controls: [
  //       {
  //         name: "Text",
  //         tool: (
  //           <ElementToolsLayout
  //             toolName="Text"
  //             tool={<Text text="Start writing here..." alignment={"left"} />}
  //             image="@/../public/craft/hero.png"
  //           />
  //         ),
  //       },
  //       {
  //         name: "Divider",
  //         tool: (
  //           <ElementToolsLayout
  //             toolName="Divider"
  //             tool={<Divider />}
  //             image="@/../public/craft/hero.png"
  //           />
  //         ),
  //       },
  //       {
  //         name: "Button",
  //         tool: (
  //           <ElementToolsLayout
  //             toolName="Button"
  //             tool={<Button text="Click Me" />}
  //             image="@/../public/craft/hero.png"
  //           />
  //         ),
  //       },

  //       {
  //         name: "Image",
  //         tool: (
  //           <ElementToolsLayout
  //             toolName="Image"
  //             tool={<BuilderImage />}
  //             image="@/../public/craft/hero.png"
  //           />
  //         ),
  //       },

  //       {
  //         name: "Link",
  //         tool: (
  //           <ElementToolsLayout
  //             toolName="Link"
  //             tool={<Link text="Link" href={"#"} />}
  //             image="@/../public/craft/hero.png"
  //           />
  //         ),
  //       },

  //       {
  //         name: "Card",
  //         tool: (
  //           <ElementToolsLayout
  //             toolName="Card"
  //             tool={<Card />}
  //             image="@/../public/craft/hero.png"
  //           />
  //         ),
  //       },
  //     ],
  //   },
  // ];
  const [clicked, setClicked] = useState(0);
  const [referedUser, setReferedUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleToggle = (index: any) => {
    if (clicked === index) {
      return setClicked(0);
    }
    setClicked(index);
  };

  // const accordionData = [
  //   {
  //     index: 1,
  //     question: "Layout",
  //     answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
  //         laborum cupiditate possimus labore, hic temporibus velit dicta earum
  //         suscipit commodi eum enim atque at? Et perspiciatis dolore iure
  //         voluptatem.`,
  //   },
  //   {
  //     index: 2,
  //     question: "Section 2",
  //     answer: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
  //         reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
  //         quaerat iure quos dolorum accusantium ducimus in illum vero commodi
  //         pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
  //         quidem maiores doloremque est numquam praesentium eos voluptatem amet!
  //         Repudiandae, mollitia id reprehenderit a ab odit!`,
  //   },
  //   {
  //     question: 3,
  //     title: "Section 3",
  //     answer: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
  //         quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
  //         dolor ut sequi minus iste? Quas?`,
  //   },
  // ];
  const accordionData = [
    {
      index: 1,
      question: "Layout",
      answer: [
        {
          name: "Grid 1",
          tool: (
            <ElementToolsLayout
              toolName="Grid 1"
              tool={<Grid col={1} />}
              image="@/../public/craft/hero.png"
              icon={<BsFillGrid3X3GapFill className="h-5 w-5 text-gray-500" />}
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
              tool={<Link text="Link" href={"#"} />}
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
              icon={
                <AiOutlineVideoCameraAdd className="h-5 w-5 text-gray-500" />
              }
            />
          ),
        },
        {
          name: "Form",
          tool: (
            <ElementToolsLayout
              toolName="Form"
              tool={<Link text="Link" href={"#"} />}
              image="@/../public/craft/hero.png"
              icon={<AiOutlineForm className="h-5 w-5 text-gray-500" />}
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
  ];
  return (
    <div className="mt-3">
      <div className="mb-8 px-4">
        <TextInput
          lefticon={<MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />}
          placeholder="Search layout"
        />
      </div>

      {/* <div className="flex flex-col overflow-hidden mt-3 w-full">
        {tools.map((item, index) => (
          <div
            tabIndex={index}
            className="collapse bg-base-100 rounded-box mb-0"
            key={index}
          >
            <input type="checkbox" />

            <div className="collapse-title text-lg font-medium p-0 min-h-0">
              {item.type}
            </div>

            <div
              tabIndex={index}
              className="collapse-content p-0 mt-0"
              key={index}
            >
              {item.controls.map((control, index) => (
                <div
                  key={index}
                  className="w-full hover:border hover:border-blue-500 mb-3"
                >
                  {control.tool}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> */}
      {/* h-[60vh] overflow-y-scroll scrollbar-hide */}
      <div className=" ">
        {accordionData.map((item, index) => (
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
