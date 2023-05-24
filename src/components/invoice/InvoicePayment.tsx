import { InvoiceContext } from "@/pages/invoice";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import React from "react";
import { useContext, useState } from "react";

export default function InvoicePayment({ handleChange }: any) {
  const ctx: any = useContext(InvoiceContext);

  return (
    <div className="overflow-y-scroll scrollbar-hide">
      <div className="w-[40vw]  bg-white  py-5 rounded-xl  overflow-y-scroll scrollbar-hide">
        <div className="border-b-[1px] border-gray-200 mb-3 pb-3  px-4">
          <p className="text-gray-600 text-3xl font-semibold">
            ${ctx?.invoiceData?.total_amount}
          </p>
          <p className=" text-gray-500 mt-2 font-semibold text-sm">
            Due {moment(ctx?.invoiceData?.dueOn).format("MMM DD,yyyy")}
          </p>
        </div>

        <div className="px-4">
          <div className="flex justify-start items-start mb-3 ">
            <div className="w-[12%] ">
              <p className="text-gray-500 font-medium">To :</p>
            </div>
            <div className="w-[88%] ">
              <p className="font-bold ">{ctx?.invoiceData?.email}</p>
            </div>
          </div>{" "}
          <div className="flex justify-start items-start mb-3 ">
            <div className="w-[12%] ">
              <p className="text-gray-500 font-medium">From :</p>
            </div>
            <div className="w-[88%] ">
              <p className="font-bold ">{ctx?.invoiceData?.email}</p>
            </div>{" "}
          </div>{" "}
          <div className="flex justify-start items-start mb-3 ">
            <div className="w-[12%] ">
              <p className="text-gray-500 font-medium">Notes :</p>
            </div>
            <div className="w-[88%] ">
              <p className="font-bold ">{ctx?.invoiceData?.notes}</p>
            </div>{" "}
          </div>
        </div>

        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title flex justify-center items-center   ">
            <span className="text-purple-800 font-semibold text-sm text-center">
              More Invoice Details
            </span>{" "}
            <ChevronDownIcon className="h-4 w-4  text-purple-800" />
          </div>
          <div className="collapse-content">
            <div className="px-4  mb-1 font-bold">Invoice Items</div>

            <div className="px-4 pt-2">
              <table className="border-[1px] border-slate-300 rounded-lg w-full ">
                <thead className="border-b-2 border-gray-300 bg-gray-100 text-slate-600 ">
                  <tr className="text-sm  ">
                    <td className="w-3/5 p-2 text-gray-500 font-medium">
                      Description
                    </td>
                    <td className="text-gray-500 font-medium">Price</td>
                    <td className="text-center text-gray-500 font-medium">
                      Qty
                    </td>
                    <td className="text-center text-gray-500 font-medium">
                      Total Price
                    </td>
                  </tr>
                </thead>
                <tbody className="font-bold text-sm ">
                  {ctx?.invoiceData?.invoice_items?.map(
                    (item: any, index: any) => (
                      <tr
                        key={index}
                        className={` ${
                          index % 2 === 0 ? "bg-[#ffffff]" : "bg-[#f2f2f2]"
                        } border-b-2 border-gray-300`}
                      >
                        <td className="px-2 pt-6 pb-3"> {item?.ItemName} </td>
                        <td className="px-2 pt-6 pb-3">${item?.ItemPrice}</td>
                        <td className="px-2 pt-6 pb-3  text-center">
                          {item?.ItemQty}
                        </td>
                        <td className="px-2 pt-6 pb-3 text-center">
                          ${item?.ItemTotalPrice}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>

            <div className="p-4 flex items-start">
              <p className="w-[57%] text-gray-500 font-medium text-sm">
                Here we can write a additional notes for the client to get a
                better understanding of this invoice.
              </p>
              <div className="w-[43%]">
                <div className="flex justify-end items-start  ">
                  <div className="text-gray-500 font-medium text-base mr-5">
                    Total Amount
                  </div>
                  <div className="font-bold">
                    ${ctx?.invoiceData?.total_amount}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex p-4 justify-between  px-4">
          <div className="flex justify-between gap-3 px-2">
            <button
              //   onClick={() => ctx?.setIsInvoiceFinalDataShow(false)}
              className="px-4 py-1 border-[1px] border-gray-400 rounded-md  font-semibold text-base text-gray-600"
            >
              Close
            </button>
            <button
              //   onClick={() => ctx.setIsPaymentModalOpen(true)}
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
