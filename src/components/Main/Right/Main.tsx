import Tabs from "@/components/UI/Tabs";
import React from "react";

export default function Main() {
  const tabs = [
    {
      id: "tab1",
      label: "Users",
      content: "",
    },
    {
      id: "tab2",
      label: "Workers",
      content: "",
    },
  ];

  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
}
