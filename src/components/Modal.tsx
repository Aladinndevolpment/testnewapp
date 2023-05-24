import { InvoiceContext } from "@/pages/invoice";
import { useContext, useState } from "react";
import { MouseEventHandler, ReactNode } from "react";

interface IFlyoutProps {
  visibility: boolean;
  onClose: MouseEventHandler;
  children: ReactNode;
}

function ModalDerived({ visibility, onClose, children }: IFlyoutProps) {
  const ctx = useContext(InvoiceContext);
  return (
    <div
      className={`transition-all fixed ${
        visibility
          ? "bottom-0 opacity-100 z-50"
          : "-bottom-[20px] opacity-0 -z-10"
      }  left-0 bg-white backdrop-blur-[15px] bg-opacity-40 h-screen w-full overflow-x-hidden flex items-center justify-center scrollbar-hide `}
    >
      <div className={`relative z-50 bg-white  shadow-md  `}>
        <div className=" scrollbar-hide overflow-y-scroll h-96 md:h-auto md:max-h-[40rem] ">
          {children}
        </div>
      </div>
      <div
        className="w-full h-full opacity-30 absolute top-0 left-0 z-40 bg-popup bg-cover bg-bottom"
        onClick={onClose}
      ></div>
    </div>
  );
}

export default ModalDerived;