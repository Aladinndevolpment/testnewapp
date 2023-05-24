import { InvoiceContext } from "@/pages/invoice";
import React from "react";
import { useContext, useState } from "react";

export default function PreviewFinalData() {
  const ctx: any = useContext(InvoiceContext);

  return (
    <div className="overflow-y-scroll scrollbar-hide">
      <div className="w-[40vw]  bg-white  rounded-xl  overflow-y-scroll scrollbar-hide">
        {/* header */}

        <div className="flex p-4 justify-between ">
          <div className="flex justify-between gap-3 px-2">
            <button
              onClick={() => ctx?.setIsInvoiceFinalDataShow(false)}
              className="px-4 py-1 border-[1px] border-gray-400 rounded-md  font-semibold text-base text-gray-600"
            >
              Close
            </button>
            <button
              onClick={() => ctx.setIsPaymentModalOpen(true)}
              className="px-5 py-1 bg-blue-400 rounded-md  font-semibold text-base text-white"
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
