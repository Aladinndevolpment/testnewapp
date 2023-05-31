import {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
  useState,
} from "react";

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  lefticon?: ReactNode;
  isTextArea?: boolean;
}

export default function TextInput(props: ITextInputProps) {
  const { lefticon, isTextArea = false, value } = props;
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`flex ${
        !isTextArea && "items-center"
      } shadow px-2 py-2 border-gray-200 border-[1px]  rounded-md ${
        isActive ? "bg-blue-50 outline outline-blue-400" : "bg-white"
      }`}
    >
      {lefticon}
      {!isTextArea ? (
        <input
          {...props}
          className="w-full bg-transparent outline-none border-none pl-2 font-fontSource font-medium text-sm"
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
      ) : (
        // @ts-ignore
        <textarea
          {...props}
          rows={5}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          className="w-full bg-transparent outline-none border-none pl-2 font-fontSource font-medium text-sm"
        ></textarea>
      )}
    </div>
  );
}
