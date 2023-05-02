import { HTMLInputTypeAttribute, InputHTMLAttributes, ReactNode } from "react";

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  lefticon: ReactNode;
}

export default function TextInput(props: ITextInputProps) {
  const { lefticon } = props;
  return (
    <div className="flex py-4 border-b-gray-200 border-b-2">
      {lefticon}
      <input
        {...props}
        className="w-full bg-transparent outline-none border-none pl-4 font-fontSource font-semibold text-sm"
      />
    </div>
  );
}
