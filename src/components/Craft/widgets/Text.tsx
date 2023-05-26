import TextInput from "@/components/controls/TextInput";
import { useNode } from "@craftjs/core";
import { MuiColorInput } from "mui-color-input";
import { useEffect, useState } from "react";
import ContentEditable from "react-contenteditable";
import { BiBold, BiItalic, BiUnderline } from "react-icons/bi";
import { IoContract } from "react-icons/io5";

const fonts = ["font-main", "font-poppins", "font-noto"];
const cases = ["normal-case", "uppercase", "lowercase", "capitalize"];

const defaults = {
  fontSize: 16,
  color: "#000000",
  alignment: "left",
  bold: "font-normal",
  italic: false,
  underline: false,
  lineHeight: 1.5,
  font: fonts[0],
  case: cases[0],
};

const fontWeights = [
  "font-thin",
  "font-extralight",
  "font-light",
  "font-normal",
  "font-medium",
  "font-semibold",
  "font-bold",
  "font-extrabold",
];

interface ITextProps {
  text: string;
  fontSize?: number;
  alignment?: "left" | "right" | "center";
  color?: string;
  bold?:
    | "font-thin"
    | "font-extralight"
    | "font-light"
    | "font-normal"
    | "font-medium"
    | "font-semibold"
    | "font-bold"
    | "font-extrabold";
  italic?: boolean;
  underline?: boolean;
  lineHeight?: number;
  font?: string;
  textCase?: string;
}

export const Text = ({
  text,
  fontSize = 16,
  alignment = "left",
  color = "#000000",
  bold = "font-normal",
  italic = defaults.italic,
  underline = defaults.underline,
  lineHeight = defaults.lineHeight,
  font = defaults.font,
  textCase = defaults.case,
}: ITextProps) => {
  const {
    connectors: { connect, drag },
    hasSelectedNode,
    hasDraggedNode,
    isActive,
    actions: { setProp },
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
    hasDraggedNode: state.events.dragged,
    isActive: state.events.selected,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    !hasSelectedNode && setEditable(false);
  }, [hasSelectedNode]);

  return (
    <div
      ref={(ref: any) => connect(drag(ref))}
      onClick={(e) => setEditable(true)}
      className="hover:outline-green-500 hover:outline"
    >
      <ContentEditable
        html={text}
        disabled={!editable}
        onChange={(e) =>
          setProp(
            (props: any) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
        tagName="p"
        style={{
          fontSize: `${fontSize}px`,
          color: color,
          lineHeight: lineHeight,
        }}
        className={`text-${alignment}  ${bold} ${underline && "underline"} ${
          italic && "italic"
        } ${font} ${textCase}`}
      />
    </div>
  );
};

const TextSettings: any = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="w-full">
      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400">Text</label>

        <TextInput
          lefticon={<IoContract />}
          value={props.text}
          placeholder="Start typing here..."
          onChange={(e) =>
            setProp((props: any) => (props.text = e.target.value))
          }
          isTextArea={props.text.length > 30}
        />
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Select Font</label>
        <div className="dropdown">
          <label
            tabIndex={0}
            className={`btn hover:bg-transparent hover:text-black rounded-md py-2 btn-sm bg-transparent text-black border-gray-300 capitalize w-full text-left justify-start ${props.font} text-gray-500`}
          >
            {props.font.replace("-", " ")}
          </label>
          <div
            tabIndex={0}
            className="dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-700 max-h-80 overflow-y-scroll scrollbar-hide"
          >
            <ul tabIndex={0} className="menu w-full bg-transparent">
              {fonts.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setProp((props: any) => (props.font = item))}
                  className={`${
                    item === props.font &&
                    "bg-primary text-primary-content rounded-md"
                  }`}
                >
                  <a className={`capitalize ${item} text-sm`}>
                    {item.replace("-", " ")}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400">Font Size</label>
        <TextInput
          lefticon={<IoContract />}
          value={props.fontSize}
          placeholder="Font size in px"
          onChange={(e) =>
            setProp((props: any) => (props.fontSize = e.target.value))
          }
          type="number"
          max={90}
          min={10}
        />
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400">Line Height</label>
        <TextInput
          lefticon={<IoContract />}
          value={props.lineHeight}
          placeholder="Font size in px"
          onChange={(e) =>
            setProp((props: any) => (props.lineHeight = e.target.value))
          }
          type="number"
          max={8}
          min={0.5}
          step=".05"
        />
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Text Style</label>
        <div className="btn-group w-full">
          <div className="dropdown">
            <label
              tabIndex={0}
              className={`btn btn-sm border-gray-300 hover:text-white capitalize  ${
                props.bold != defaults.bold
                  ? "bg-[#313641] text-white"
                  : "bg-white text-black"
              }`}
            >
              <BiBold />
            </label>
            <div
              tabIndex={0}
              className="dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-700 max-h-72 overflow-y-scroll scrollbar-hide"
            >
              <ul tabIndex={0} className="menu w-full bg-transparent">
                {fontWeights.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setProp((props: any) => (props.bold = item))}
                    className={`${
                      item === props.bold &&
                      "bg-primary text-primary-content rounded-md"
                    }`}
                  >
                    <a className={`capitalize ${item} text-sm`}>
                      {item.replace("-", " ")}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            className={`btn btn-sm  border-gray-300 hover:text-white capitalize ${
              props.italic ? "bg-[#313641] text-white" : "bg-white text-black"
            }`}
            onClick={() =>
              setProp((props: any) => (props.italic = !props.italic))
            }
          >
            <BiItalic />
          </button>
          <button
            className={`btn btn-sm border-gray-300 hover:text-white capitalize ${
              props.underline
                ? "bg-[#313641] text-white"
                : "bg-white text-black"
            }`}
            onClick={() =>
              setProp((props: any) => (props.underline = !props.underline))
            }
          >
            <BiUnderline />
          </button>
        </div>
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Text Alignment</label>
        <div className="btn-group w-full">
          <input
            type="radio"
            name="options"
            data-title="Left"
            className="btn btn-sm bg-transparent text-black border-gray-300 hover:text-white capitalize w-1/3"
            value="left"
            onChange={({ target: { value } }) =>
              setProp((props: any) => (props.alignment = value))
            }
            checked={props.alignment === "left"}
          />
          <input
            type="radio"
            name="options"
            data-title="Center"
            className="btn btn-sm bg-transparent text-black border-gray-300 hover:text-white capitalize w-1/3"
            value="center"
            onChange={({ target: { value } }) =>
              setProp((props: any) => (props.alignment = value))
            }
            checked={props.alignment === "center"}
          />
          <input
            type="radio"
            name="options"
            data-title="Right"
            className="btn btn-sm bg-transparent text-black border-gray-300 hover:text-white capitalize w-1/3"
            value="right"
            onChange={({ target: { value } }) =>
              setProp((props: any) => (props.alignment = value))
            }
            checked={props.alignment === "right"}
          />
        </div>
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Select Text Case</label>
        <div className="dropdown">
          <label
            tabIndex={0}
            className={`btn hover:bg-transparent hover:text-black rounded-md py-2 btn-sm bg-transparent text-black border-gray-300 capitalize w-full text-left justify-start ${props.textCase} text-gray-500`}
          >
            {props.textCase}
          </label>
          <div
            tabIndex={0}
            className="dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-700 max-h-80 overflow-y-scroll scrollbar-hide"
          >
            <ul tabIndex={0} className="menu w-full bg-transparent">
              {cases.map((item, index) => (
                <li
                  key={index}
                  onClick={() =>
                    setProp((props: any) => (props.textCase = item))
                  }
                  className={`${
                    item === props.textCase &&
                    "bg-primary text-primary-content rounded-md"
                  }`}
                >
                  <a className={`${item} text-sm`}>{item.replace("-", " ")}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-4 mt-2 flex flex-col gap-1">
        <label className="text-sm text-gray-400 ">Text Color</label>
        <div className="">
          <MuiColorInput
            format="hex"
            value={props.color ? props.color : "#000000"}
            onChange={(e) => setProp((props: any) => (props.color = e))}
          />
        </div>
      </div>
    </div>
  );
};

Text.craft = {
  related: {
    settings: TextSettings,
  },
  props: {
    text: "Start writing here...",
    fontSize: defaults.fontSize,
    underline: defaults.underline,
    bold: defaults.bold,
    italic: defaults.italic,
    alignment: defaults.alignment,
    lineHeight: defaults.lineHeight,
    font: defaults.font,
    textCase: defaults.case,
  },
};
