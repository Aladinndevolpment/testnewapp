import { useEffect, useState } from "react";
import TextInput from "@/components/controls/TextInput";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ElementToolsLayout from "./tools/ElementToolsLayout";

import { BsMenuButtonWide } from "react-icons/bs";

import PrebuiltToolsLayout from "./tools/PrebuiltToolsLayout";
import { TextInputElement } from "../widgets/TextInput";
import { Grid } from "@/components/Craft/widgets/Grid";
import AccordionItem from "../AccordionItem";
import { TextAreaElement } from "../widgets/TextareaElement";
import { RadioInputElement } from "../widgets/RadioElement";
import { Text } from "@/components/Craft/widgets/Text";
import { CheckboxInputElement } from "../widgets/CheckboxElement";
import { SelectBoxInputElement } from "../widgets/SelectInputElement";
import { Link } from "@/components/Craft/widgets/Link";
import { AttachmentElement } from "../widgets/Attachment";
import { DatePickerElement } from "../widgets/DatePicker";
import { Button } from "@/components/Craft/widgets/Button";

export const formControls = [
  {
    name: "Text Input",
    tool: (
      <ElementToolsLayout
        toolName="Text Input"
        tool={<TextInputElement />}
        image="@/../public/craft/hero.png"
        icon={<BsMenuButtonWide className="h-3 w-3 text-gray-500" />}
      />
    ),
  },
  {
    name: "Paragraph",
    tool: (
      <ElementToolsLayout
        toolName="Paragraph"
        tool={<Text text="Start typing here..." />}
        image="@/../public/craft/hero.png"
        icon={<BsMenuButtonWide className="h-3 w-3 text-gray-500" />}
      />
    ),
  },
  {
    name: "Textarea",
    tool: (
      <ElementToolsLayout
        toolName="Textarea"
        tool={<TextAreaElement />}
        image="@/../public/craft/hero.png"
        icon={<BsMenuButtonWide className="h-3 w-3 text-gray-500" />}
      />
    ),
  },
  {
    name: "Radio Button",
    tool: (
      <ElementToolsLayout
        toolName="Radio Button"
        tool={<RadioInputElement />}
        image="@/../public/craft/hero.png"
        icon={<BsMenuButtonWide className="h-3 w-3 text-gray-500" />}
      />
    ),
  },

  {
    name: "Checkbox",
    tool: (
      <ElementToolsLayout
        toolName="Checkbox"
        tool={<CheckboxInputElement />}
        image="@/../public/craft/hero.png"
        icon={<BsMenuButtonWide className="h-3 w-3 text-gray-500" />}
      />
    ),
  },

  {
    name: "Dropdown",
    tool: (
      <ElementToolsLayout
        toolName="Dropdown"
        tool={<SelectBoxInputElement />}
        image="@/../public/craft/hero.png"
        icon={<BsMenuButtonWide className="h-3 w-3 text-gray-500" />}
      />
    ),
  },

  {
    name: "Hyperlink",
    tool: (
      <ElementToolsLayout
        toolName="Hyperlink"
        tool={<Link text="link" href="#" targetData={false} />}
        image="@/../public/craft/hero.png"
        icon={<BsMenuButtonWide className="h-3 w-3 text-gray-500" />}
      />
    ),
  },

  {
    name: "Attachment",
    tool: (
      <ElementToolsLayout
        toolName="Attachment"
        tool={<AttachmentElement />}
        image="@/../public/craft/hero.png"
        icon={<BsMenuButtonWide className="h-3 w-3 text-gray-500" />}
      />
    ),
  },

  {
    name: "Date Picker",
    tool: (
      <ElementToolsLayout
        toolName="Date Picker"
        tool={<DatePickerElement />}
        image="@/../public/craft/hero.png"
        icon={<BsMenuButtonWide className="h-3 w-3 text-gray-500" />}
      />
    ),
  },

  {
    name: "Button",
    tool: (
      <ElementToolsLayout
        toolName="Button"
        tool={<Button />}
        image="@/../public/craft/hero.png"
        icon={<BsMenuButtonWide className="h-3 w-3 text-gray-500" />}
      />
    ),
  },
];

const baseTools = [
  {
    index: 2,
    question: "Controls",
    answer: formControls,
  },
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
            image={require("@/../public/craft/grid/2.png")}
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
