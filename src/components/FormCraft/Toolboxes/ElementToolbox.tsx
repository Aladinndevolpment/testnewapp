import { useEffect, useState } from "react";
import TextInput from "@/components/controls/TextInput";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ElementToolsLayout from "./tools/ElementToolsLayout";

import {
  BsCalendarDate,
  BsCardText,
  BsMenuButtonWide,
  BsTextParagraph,
  BsTextareaResize,
  BsChevronDown,
  BsChevronUp,
  BsTelephoneInbound,
  BsBuildings,
} from "react-icons/bs";

import PrebuiltToolsLayout from "./tools/PrebuiltToolsLayout";
import { TextInputElement } from "../widgets/TextInput";
import { Grid } from "@/components/Craft/widgets/Grid";
import AccordionItem from "../AccordionItem";
import { TextAreaElement } from "../widgets/TextareaElement";
import { RadioInputElement } from "../widgets/RadioElement";
import { Text } from "@/components/Craft/widgets/Text/Text";
import { CheckboxInputElement } from "../widgets/CheckboxElement";
import { SelectBoxInputElement } from "../widgets/SelectInputElement";
import { Link } from "@/components/Craft/widgets/Link";
import { AttachmentElement } from "../widgets/Attachment";
import { DatePickerElement } from "../widgets/DatePicker";
import { Button } from "@/components/Craft/widgets/Button";
import { MdRadioButtonChecked } from "react-icons/md";
import { TbCheckbox, TbSelect } from "react-icons/tb";
import {
  AiOutlineFileZip,
  AiOutlineLink,
  AiOutlineUserAdd,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import ImageAttachment from "@/components/controls/ImageAttachment";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { FiUserPlus } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { GoOrganization } from "react-icons/go";
import { FaCity, FaGlobeEurope, FaRegAddressCard } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { RiOpenSourceLine } from "react-icons/ri";
import { BiLabel } from "react-icons/bi";

const tbStyles = {
  backgroundColor: "#fff",
  borderColor: "#d9d6d6",
  borderWidth: 1,
};

export const formControls = [
  {
    name: "Text Input",
    tool: (
      <ElementToolsLayout
        toolName="Text Input"
        tool={<TextInputElement />}
        image="@/../public/craft/hero.png"
        icon={<BsCardText className="h-4 w-4 text-gray-500" />}
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
        icon={<BsTextParagraph className="h-4 w-4 text-gray-500" />}
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
        icon={<BsTextareaResize className="h-4 w-4 text-gray-500" />}
      />
    ),
  },
  {
    name: "Radio",
    tool: (
      <ElementToolsLayout
        toolName="Radio"
        tool={
          <RadioInputElement
            radios={[
              {
                radioProps: {
                  checked: true,
                  value: "Male",
                  required: true,
                },
                label: "Male",
              },
              {
                radioProps: {
                  value: "Female",
                  required: true,
                },
                label: "Female",
              },
            ]}
          />
        }
        image="@/../public/craft/hero.png"
        icon={<MdRadioButtonChecked className="h-4 w-4 text-gray-500" />}
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
        icon={<TbCheckbox className="h-4 w-4 text-gray-500" />}
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
        icon={<TbSelect className="h-4 w-4 text-gray-500" />}
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
        icon={<AiOutlineLink className="h-4 w-4 text-gray-500" />}
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
        icon={<IoDocumentAttachOutline className="h-4 w-4 text-gray-500" />}
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
        icon={<BsCalendarDate className="h-4 w-4 text-gray-500" />}
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
        icon={<BsMenuButtonWide className="h-4 w-4 text-gray-500" />}
      />
    ),
  },
];

const baseTools = [
  {
    index: 1,
    question: "Standard",
    answer: [
      {
        name: "Label",
        tool: (
          <ElementToolsLayout
            toolName="Label"
            tool={
              <Text
                text="Label"
                fontSize={18}
                marginBottom={2}
                color="#4b5563"
                bold="font-bold"
              />
            }
            image="@/../public/craft/hero.png"
            icon={<BiLabel className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Full Name",
        tool: (
          <ElementToolsLayout
            toolName="Full Name"
            tool={
              <TextInputElement
                textInputProps={{
                  name: "fullName",
                  placeholder: "Full Name",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<FiUserPlus className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "First Name",
        tool: (
          <ElementToolsLayout
            toolName="First Name"
            tool={
              <TextInputElement
                textInputProps={{
                  name: "firstName",
                  placeholder: "First Name",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<AiOutlineUserAdd className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Last Name",
        tool: (
          <ElementToolsLayout
            toolName="Last Name"
            tool={
              <TextInputElement
                textInputProps={{
                  name: "lastName",
                  placeholder: "Last Name",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<AiOutlineUserSwitch className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Phone",
        tool: (
          <ElementToolsLayout
            toolName="Phone"
            tool={
              <TextInputElement
                textInputProps={{
                  name: "phone",
                  placeholder: "Phone",
                  type: "number",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<BsTelephoneInbound className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Gender",
        tool: (
          <ElementToolsLayout
            toolName="Gender"
            tool={<RadioInputElement />}
            image="@/../public/craft/hero.png"
            icon={<MdRadioButtonChecked className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Email",
        tool: (
          <ElementToolsLayout
            toolName="Email"
            tool={
              <TextInputElement
                textInputProps={{
                  name: "email",
                  placeholder: "Email",
                  type: "email",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<TfiEmail className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Organization",
        tool: (
          <ElementToolsLayout
            toolName="Organization"
            tool={
              <TextInputElement
                textInputProps={{
                  name: "organization",
                  placeholder: "Organization",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<GoOrganization className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Address",
        tool: (
          <ElementToolsLayout
            toolName="Address"
            tool={
              <TextAreaElement
                textInputProps={{
                  name: "address",
                  placeholder: "Address",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<FaRegAddressCard className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "City",
        tool: (
          <ElementToolsLayout
            toolName="City"
            tool={
              <TextInputElement
                textInputProps={{
                  name: "city",
                  placeholder: "City",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<FaCity className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "State",
        tool: (
          <ElementToolsLayout
            toolName="State"
            tool={
              <TextInputElement
                textInputProps={{
                  name: "state",
                  placeholder: "State",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<BsBuildings className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Country",
        tool: (
          <ElementToolsLayout
            toolName="Country"
            tool={
              <TextInputElement
                textInputProps={{
                  name: "country",
                  placeholder: "Country",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<FaGlobeEurope className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Postal Code",
        tool: (
          <ElementToolsLayout
            toolName="Postal Code"
            tool={
              <TextInputElement
                textInputProps={{
                  name: "postal_code",
                  placeholder: "Postal Code",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<AiOutlineFileZip className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Website",
        tool: (
          <ElementToolsLayout
            toolName="Website"
            tool={
              <TextInputElement
                textInputProps={{
                  name: "website",
                  placeholder: "Website",
                  type: "url",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<HiOutlineGlobeAlt className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Source",
        tool: (
          <ElementToolsLayout
            toolName="Source"
            tool={
              <TextInputElement
                textInputProps={{
                  name: "source",
                  placeholder: "Source",
                  type: "text",
                }}
                {...tbStyles}
              />
            }
            image="@/../public/craft/hero.png"
            icon={<RiOpenSourceLine className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
      {
        name: "Date of Birth",
        tool: (
          <ElementToolsLayout
            toolName="Date of Birth"
            tool={<DatePickerElement />}
            image="@/../public/craft/hero.png"
            icon={<BsCalendarDate className="h-4 w-4 text-gray-500" />}
          />
        ),
      },
    ],
  },
  {
    index: 2,
    question: "Custom",
    answer: formControls,
  },
];

const ColTab = [
  //   {
  //     index: 1,
  //     question: "Section",
  //     answer: [
  //
  // ],
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
  const [tabs, setTabs] = useState(tools[0].index);
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

  const [clicked, setClicked] = useState(-1);
  const handleToggle = (index: any) => {
    return setClicked(index === clicked ? -1 : index);
  };

  return (
    <>
      <div>
        <div className="h-full overflow-y-scroll scrollbar-hide ">
          {ColTab.map((item, index) => (
            <>
              <div
                className={` ${`py-5 rounded-sm border-t-[1px] ${
                  clicked === index ? null : "border-b-[1px]"
                } border-gray-200 px-4 bg-white`}   flex flex-row justify-between items-center`}
                onClick={() => handleToggle(index)}
              >
                <p className={`text-gray-600 text-lg font-medium`}>
                  {item.question}
                </p>
                <div className={`text-gray-600`}>
                  {clicked === index ? (
                    <BsChevronDown className="h-4 w-4" />
                  ) : (
                    <BsChevronUp className="h-4 w-4" />
                  )}
                </div>
              </div>
              <div
                className={`px-4 pb-2 flex flex-wrap   ${
                  clicked === index ? "" : "hidden bg-yellow-500"
                }`}
              >
                {item.answer.map((control: any, index: any) => (
                  <div key={index} className={`w-full px-1 mb-2`}>
                    {control.tool}
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <ul className="border-b-[1px] p-[2px] mx-2 flex-wrap bg-[#eeeef1]  rounded-md border-[#dfdfdf] flex justify-between items-center scrollbar-hide   ">
          {tools.map((tab: any, i) => (
            <li key={tab.index} className="w-[50%]">
              <button
                className={`w-full bg-transparent  px-4 py-2 text-center ${
                  tabs === tab.index && "bg-white rounded-md shadow-md"
                }  text-black font-medium border-none capitalize hover:bg-white`}
                onClick={() => setTabs(tab.index)}
              >
                {tab.question}
              </button>
            </li>
          ))}
        </ul>
        <div className="  bg-white">
          <div className=" px-2 mt-3">
            <TextInput
              lefticon={
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
              }
              placeholder="Search layout"
              value={searchString}
              onChange={({ target: { value } }) => setSearchString(value)}
            />
          </div>
          <div className="h-[70vh] overflow-y-scroll scrollbar-hide ">
            {tools.map((tab: any) => (
              <div
                key={tab.id}
                className={`shadow-md transition-all duration-300 rounded-md overflow-scroll ${
                  tabs === tab.index ? "block" : " text-black hidden"
                } `}
              >
                {tab.answer.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="mx-2 my-4 rounded-lg hover:border-2"
                  >
                    {item.tool}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
