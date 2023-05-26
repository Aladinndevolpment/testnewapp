import {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  lefticon: ReactNode;
  isTextArea?: boolean;
}

export default function TextInput(props: ITextInputProps) {
  const { lefticon, isTextArea = false, value } = props;
  return (
    <div
      className={`flex ${
        !isTextArea && "items-center"
      } shadow px-2 py-2 border-gray-200 border-[1px] bg-white rounded-md`}
    >
      {lefticon}
      {!isTextArea ? (
        <input
          {...props}
          className="w-full bg-transparent outline-none border-none pl-2 font-fontSource font-medium text-sm"
        />
      ) : (
        // @ts-ignore
        <textarea
          {...props}
          rows={9}
          className="w-full bg-transparent outline-none border-none pl-2 font-fontSource font-medium text-sm"
        >
          {value}
        </textarea>
      )}
    </div>
  );
}
