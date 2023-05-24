import { HTMLInputTypeAttribute, InputHTMLAttributes, ReactNode } from "react";

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  lefticon: ReactNode;
}

export default function TextInput(props: ITextInputProps) {
  const { lefticon } = props;
  return (
    <div className="flex items-center shadow px-2 py-3 border-gray-200 border-[1px] bg-white rounded-md">
      {lefticon}
      <input
        {...props}
        className="w-full bg-transparent outline-none border-none pl-2 font-fontSource font-medium text-sm"
      />
    </div>
  );
}
