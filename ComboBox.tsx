import { MouseEventHandler, useEffect, useState } from "react";

interface IComboBoxProps {
  isVisible: boolean;
  onClose: Function;
  data: { name: string; id: any }[];
  onItemSelect: Function;
}

export default function ComboBox({
  isVisible,
  onClose,
  data,
  onItemSelect,
}: IComboBoxProps) {
  const [newData, setNewData] = useState(data);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    if (searchString == "") {
      setNewData(data);
    } else {
      setNewData(
        data.filter((item) =>
          item.name.toLowerCase().includes(searchString.toLowerCase())
        )
      );
    }
  }, [searchString, data]);

  return (
    <div
      className={`absolute transition-all -bottom-15 mt-5 bg-white p-4 w-full shadow-md min-h-24 ${
        isVisible
          ? "translate-y-0 opacity-100 z-50"
          : "-translate-y-[2%] opacity-0 -z-50"
      }`}
      onBlur={() => console.log("here")}
    >
      <input
        type="text"
        className="w-full bg-gray-100 outline-none border-none p-4"
        placeholder="Search"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <ul className="mt-2 max-h-60 overflow-y-scroll">
        {newData.map((item, index) => (
          <li
            key={index}
            className="p-2 ring ring-gray-50 mb-2 cursor-pointer hover:shadow-md"
            onClick={() => {
              onItemSelect(item);
              onClose();
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
