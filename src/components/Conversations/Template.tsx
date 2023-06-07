import { CnvContext } from "@/pages/conversations";
import { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Select from "react-select";

const options = [
  { value: "rf", label: "Our Refund Policy" },
  { value: "pf", label: "Privacy Policy" },
  { value: "tc", label: "Terms & Conditions" },
];

export default function Template({ onClose }: { onClose: Function }) {
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const { setMessageText } = useContext(CnvContext);
  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div className="w-full h-full md:w-[80vh] md:h-[70vh] bg-white py-4 overflow-y-hidden rounded-lg shadow-lg">
      <div className="flex justify-between items-center border-b border-b-gray-300 pb-3 px-4 rounded-lg">
        <div>Select Template</div>
        <button
          className="btn btn-xs bg-transparent border-none hover:bg-transparent hover:border-none text-black text-xl"
          onClick={() => onClose()}
        >
          <AiOutlineClose />
        </button>
      </div>
      <div className="px-4 mt-2 flex flex-col justify-between h-[90%]">
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
          placeholder="Select Template"
        />

        <div className="flex gap-1 justify-end">
          <button
            onClick={() => onClose()}
            className="bg-white px-3 py-1.5 rounded-md w-28 flex justify-center border border-gray-300"
          >
            <span className="text-black text-base">Cancel</span>
          </button>
          <button
            onClick={() => {
              setMessageText(selectedOption.label);
              onClose();
            }}
            className="bg-newBlue px-3 py-1.5 rounded-md w-28 flex justify-center"
          >
            <span className="text-white text-base">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
}
