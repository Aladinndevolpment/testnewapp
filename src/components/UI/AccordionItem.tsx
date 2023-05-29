import React, { useState } from "react";
import { BiChevronsDown, BiChevronsUp } from "react-icons/bi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface IAccordionItem {
  faq: any;
  onToggle: any;
  active: any;
  titleBoxStyle: any;
  titleStyle: any;
  contentStyle: any;
}

export default function AccordionItem({
  faq,
  onToggle,
  active,
  titleBoxStyle,
  titleStyle,
  contentStyle,
}: IAccordionItem) {
  const { question, answer } = faq;

  return (
    <div>
      <div
        className={` ${titleBoxStyle}   flex flex-row justify-between items-center`}
        onClick={onToggle}
      >
        <p className={`${titleStyle}`}>{question}</p>
        <div className={`text-gray-600`}>
          {active ? (
            <BsChevronDown className="h-4 w-4" />
          ) : (
            <BsChevronUp className="h-4 w-4" />
          )}
        </div>
      </div>
      <div
        className={`px-4 pb-2 flex flex-col   ${
          active ? "" : "hidden bg-yellow-500"
        }`}
      >
        {answer.map((control: any, index: any) => (
          <div key={index} className={`w-full ${contentStyle}`}>
            <p> {control.tool}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
