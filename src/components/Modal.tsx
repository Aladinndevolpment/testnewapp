import { InvoiceContext } from "@/pages/invoice";
import { useContext, useState } from "react";

function ModalDerived() {
  const ctx = useContext(InvoiceContext);
  return (
    <div className="h-screen fixed top-0 left-0 w-full z-50 flex items-center justify-center">
      <div
        className="absolute z-40 bg-black/40 backdrop-blur-md left-0 top-0 h-full w-full"
        onClick={() => ctx.setIsInvoicePreviewModalVisible(false)}
      ></div>
      <div className="relative z-50 bg-white h-full w-full md:h-[60%] md:w-[30%]">
        Modal
      </div>
    </div>
  );
}

export default ModalDerived;
