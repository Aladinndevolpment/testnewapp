import { useState } from "react";
import TextInput from "@/components/controls/TextInput";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import PrebuiltHeroLayoutTool from "./tools/PrebuiltHeroLayoutTool";
import PrebuiltHeaderLayoutTool from "./tools/PrebuiltHeaderLayoutTool";

export default function PrebuiltToolbox() {
  const [searchString, setSearchString] = useState("");
  const tools = [
    { name: "Header layout", tool: <PrebuiltHeaderLayoutTool /> },
    { name: "hero layout", tool: <PrebuiltHeroLayoutTool /> },
  ];

  return (
    <div className="p-4">
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
