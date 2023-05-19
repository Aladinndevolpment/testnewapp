import { MouseEventHandler, ReactNode } from "react";

interface IFlyoutProps {
  visibility: boolean;
  onClose: MouseEventHandler;
  children: ReactNode;
}

export default function FlyOut({
  visibility,
  onClose,
  children,
}: IFlyoutProps) {
  return (
    <div
      className={`w-full min-h-screen  scrollbar-hide  fixed right-0 top-0  z-50 transition-all bg-black overflow-hidden ${
        visibility
          ? "translate-x-0 opacity-100 bg-opacity-30"
          : "translate-x-[100%] opacity-0 bg-opacity-0"
      }`}
    >
      <div className="absolute h-full w-full z-40 " onClick={onClose}></div>
      <div className="bg-mainBg w-full md:w-[40%] absolute right-0  h-full z-50 ">
        <div className="pt-4 pb-5 px-4 md:px-8">{children}</div>
      </div>
    </div>
  );
}
