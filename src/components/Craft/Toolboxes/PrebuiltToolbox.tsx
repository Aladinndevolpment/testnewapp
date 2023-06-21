import PrebuiltToolsLayout from "./tools/PrebuiltToolsLayout";
import { HeroLayout } from "../widgets/prebuilt/HeroLayout";
import { HeaderLayout } from "../widgets/prebuilt/Header";
import { FAQs } from "../widgets/FAQs";
import { Testimonials } from "../widgets/prebuilt/Testimonials";
import { Carousels } from "../widgets/prebuilt/Carousel";
import { Breadcrumbs } from "../widgets/prebuilt/Breadcrumbs";
import { Footers } from "../widgets/prebuilt/Footer";
import { TemplateOne } from "../Templates/template1";
import { useEffect, useState } from "react";
import TextInput from "@/components/controls/TextInput";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import AccordionItem from "@/components/UI/AccordionItem";

const tbStyles = {
  backgroundColor: "#fff",
  borderColor: "#d9d6d6",
  borderWidth: 1,
};

const baseTools = [
  {
    index: 1,
    question: "Elements",
    answer: [
      {
        name: "Header layout",
        tool: (
          <PrebuiltToolsLayout
            toolName="Header Layout"
            tool={<HeaderLayout />}
            image={require("@/../public/craft/hero.png")}
          />
        ),
      },
      {
        name: "hero layout",
        tool: (
          <PrebuiltToolsLayout
            toolName="Hero Layout"
            tool={<HeroLayout />}
            image={require("@/../public/craft/hero.png")}
          />
        ),
      },
      {
        name: "FAQ layout",
        tool: (
          <PrebuiltToolsLayout
            toolName="FAQ Layout"
            tool={<FAQs />}
            image={require("@/../public/craft/hero.png")}
          />
        ),
      },
      {
        name: "Testimonial layout",
        tool: (
          <PrebuiltToolsLayout
            toolName="Testimonial Layout"
            tool={<Testimonials />}
            image={require("@/../public/craft/hero.png")}
          />
        ),
      },
      {
        name: "Carousels layout",
        tool: (
          <PrebuiltToolsLayout
            toolName="Carousels Layout"
            tool={<Carousels />}
            image={require("@/../public/craft/hero.png")}
          />
        ),
      },
      {
        name: "Breadcrumbs layout",
        tool: (
          <PrebuiltToolsLayout
            toolName="Breadcrumbs Layout"
            tool={<Breadcrumbs />}
            image={require("@/../public/craft/hero.png")}
          />
        ),
      },
      {
        name: "Footer layout",
        tool: (
          <PrebuiltToolsLayout
            toolName="Footer layout"
            tool={<Footers />}
            image={require("@/../public/craft/hero.png")}
          />
        ),
      },
    ],
  },
  {
    index: 2,
    question: "Templates",
    answer: [
      {
        name: "Template One",
        tool: (
          <PrebuiltToolsLayout
            toolName="Template One"
            tool={<TemplateOne />}
            image={require("@/../public/craft/hero.png")}
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
      <div className="mb-2 px-4">
        <TextInput
          lefticon={<MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />}
          placeholder="Search layout"
          value={searchString}
          onChange={({ target: { value } }) => setSearchString(value)}
        />
      </div>

      <div className="h-[60vh] overflow-y-scroll scrollbar-hide ">
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
