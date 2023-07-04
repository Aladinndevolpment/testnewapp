import {
  CalendarDaysIcon,
  ClockIcon,
  CodeBracketIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  MapIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { AiOutlineLink, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { BsCardText, BsImage, BsMenuButtonWide } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { RxDividerHorizontal, RxDragHandleDots2 } from "react-icons/rx";
import { SiProgress } from "react-icons/si";
import { TbTextSize } from "react-icons/tb";
import TextInput from "../controls/TextInput";
// import { TextInputElement } from "../";
import { Grid } from "../SurveyCraft/widgets/Grid";
import AccordionItem from "../UI/AccordionItem";
import ElementToolsLayout from "./Toolboxes/tools/ElementToolsLayout";
import PrebuiltToolsLayout from "./Toolboxes/tools/PrebuiltToolsLayout";
import { Button } from "./widgets/Button";
import CalendarElement from "./widgets/Calendar";
import { Card } from "./widgets/Card";
import Countdown from "./widgets/Countdown";
import CustomHTML from "./widgets/CustomHTML";
import Divider from "./widgets/Divider";
import { MainForm } from "./widgets/form/MainForm";
import { TextInputElement } from "./widgets/form/TextInput";
import { BuilderImage } from "./widgets/Image";
import { Link } from "./widgets/Link";
import { List } from "./widgets/List";
import MapElement from "./widgets/Map";
import { OrderConfirmation } from "./widgets/prebuilt/OrderConfirmation";
import { OrderOneStep } from "./widgets/prebuilt/OrderOneStep";
import Progress from "./widgets/Progress";
import { Review } from "./widgets/Reviews";
import { Social } from "./widgets/Social";
import { Headline } from "./widgets/Text/Headline";
import { Text } from "./widgets/Text/Text";
import { BuilderVideo } from "./widgets/Video";

const baseTools = [
  {
    index: 1,
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
        name: "Headline",
        tool: (
          <ElementToolsLayout
            toolName="Headline"
            tool={
              <Headline
                text="Headline"
                fontSize={26}
                color="#000000"
                bold="font-medium"
                alignment={"left"}
                tagName="h1"
              />
            }
            image="@/../public/craft/hero.png"
            icon={<TbTextSize className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Sub headline",
        tool: (
          <ElementToolsLayout
            toolName="Sub headline"
            tool={
              <Headline
                text="Sub headline"
                fontSize={20}
                color="#a4a4a4"
                alignment={"left"}
                tagName="h3"
              />
            }
            image="@/../public/craft/hero.png"
            icon={<TbTextSize className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Paragraph",
        tool: (
          <ElementToolsLayout
            toolName="Paragraph"
            tool={<Text text="Start writing here..." alignment={"left"} />}
            image="@/../public/craft/hero.png"
            icon={<TbTextSize className="h-5 w-5 text-gray-500" />}
          />
        ),
      },

      {
        name: "List",
        tool: (
          <ElementToolsLayout
            toolName="List"
            tool={<List alignment="left" text="New List" />}
            image="@/../public/craft/hero.png"
            icon={<ListBulletIcon className="h-5 w-5 text-gray-500" />}
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
      {
        name: "Custom HTML",
        tool: (
          <ElementToolsLayout
            toolName="Custom HTML"
            tool={<CustomHTML />}
            image="@/../public/craft/hero.png"
            icon={<CodeBracketIcon className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Map",
        tool: (
          <ElementToolsLayout
            toolName="Map"
            tool={<MapElement />}
            image="@/../public/craft/hero.png"
            icon={<MapIcon className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Countdown",
        tool: (
          <ElementToolsLayout
            toolName="Countdown"
            tool={<Countdown />}
            image="@/../public/craft/hero.png"
            icon={<ClockIcon className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Progress",
        tool: (
          <ElementToolsLayout
            toolName="Progress"
            tool={<Progress />}
            image="@/../public/craft/hero.png"
            icon={<SiProgress className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Calendar",
        tool: (
          <ElementToolsLayout
            toolName="Calendar"
            tool={<CalendarElement />}
            image="@/../public/craft/hero.png"
            icon={<CalendarDaysIcon className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Review",
        tool: (
          <ElementToolsLayout
            toolName="Review"
            tool={<Review />}
            image="@/../public/craft/hero.png"
            icon={<UsersIcon className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Order Confirmation",
        tool: (
          <ElementToolsLayout
            toolName="Order Confirmation"
            tool={<OrderConfirmation />}
            image="@/../public/craft/hero.png"
            icon={<UsersIcon className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "One Step Order",
        tool: (
          <ElementToolsLayout
            toolName="One Step Order"
            tool={<OrderOneStep />}
            image="@/../public/craft/hero.png"
            icon={<UsersIcon className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Two Step Order",
        tool: (
          <ElementToolsLayout
            toolName="Two Step Order"
            tool={<OrderOneStep />}
            image="@/../public/craft/hero.png"
            icon={<UsersIcon className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
      {
        name: "Forms",
        tool: (
          <ElementToolsLayout
            toolName="Forms"
            tool={<MainForm />}
            image="@/../public/craft/hero.png"
            icon={<FaWpforms className="h-5 w-5 text-gray-500" />}
          />
        ),
      },
    ],
  },
];

const Elements = () => {
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
    <div className="overflow-y-scroll scrollbar-hide flex justify-around  flex-wrap  w-full">
      <div className=" w-full">
        <div className="mb-2 px-4">
          <TextInput
            lefticon={<MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />}
            placeholder="Search layout"
            value={searchString}
            onChange={({ target: { value } }) => setSearchString(value)}
          />
        </div>

        <div className="h-[80vh] overflow-y-scroll scrollbar-hide ">
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
    </div>
  );
};

export default Elements;
