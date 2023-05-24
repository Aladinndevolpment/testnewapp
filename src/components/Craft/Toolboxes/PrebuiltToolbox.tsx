import { useState } from "react";
import TextInput from "@/components/controls/TextInput";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import PrebuiltHeroLayoutTool from "./tools/PrebuiltHeroLayoutTool";

export default function PrebuiltToolbox() {
  const [searchString, setSearchString] = useState("");
  const tools = [{ name: "hero layout", tool: <PrebuiltHeroLayoutTool /> }];

  return (
    <div className="mt-3">
      <div className="mb-2">
        <TextInput
          lefticon={<MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />}
          placeholder="Search layout"
        />
      </div>
      <div className="flex overflow-hidden gap-3 mt-3 w-full">
        {tools.map((item, index) => (
          <div key={index} className="w-full">
            {item.tool}
          </div>
        ))}
      </div>
    </div>
  );
}
