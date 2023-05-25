import FactCard from "@/components/invoice/FactCard";
import { BsArrowUpRight, BsFillPatchCheckFill } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";

import ChartCard from "@/components/invoice/ChartCard";
import { MoreHorizOutlined } from "@mui/icons-material";
import { createContext, useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import BillingTable from "@/components/invoice/BillingTable";
import FlyOut from "@/components/Flyout";
import AddInvoiceForm from "@/components/invoice/AddInvoiceForm";
import LongCard from "@/components/invoice/LongCard";
import ModalDerived from "@/components/Modal";
import moment from "moment";
import PreviewInvoice from "@/components/invoice/PreviewInvoice";
import PreviewFinalData from "@/components/invoice/PreviewFinalData";
import InvoicePayment from "@/components/invoice/InvoicePayment";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

interface RowData {
  [key: string]: any;
}

export const InvoiceContext = createContext({
  isInvoicePreviewModalVisible: false,
  setIsInvoicePreviewModalVisible: (string: string) => {},
  isInvoiceFinalDataShow: false,
  setIsInvoiceFinalDataShow: (string: string) => {},
  isPaymentModalOpen: false,
  setIsPaymentModalOpen: (string: string) => {},
  invoiceData: null,
  setInvoiceData: (array: Array<any>) => {},
  data: null,
  setData: (array: Array<any>) => {},
});

export default function InvoicePage() {
  const [data, setData] = useState<RowData[]>([
    {
      id: "1",
      invoice_no: "1",
      customer_name: "User One",
      status: "paid",
      date: "5/12/23",
      dueDate: "5/12/23",
      amount: "$5000",
      action: "",
      paymentMode: "",
    },
    {
      id: "2",
      invoice_no: "2",
      customer_name: "User Two",
      status: "overdue by 1 day",
      date: "5/12/23",
      dueDate: "5/12/23",
      amount: "$5000",
      action: "",
      paymentMode: "",
    },
    {
      id: "3",
      invoice_no: "3",
      customer_name: "User Three",
      status: "due in 14 days",
      date: "5/12/23",
      dueDate: "5/12/23",
      amount: "$5000",
      action: "",
      paymentMode: "",
    },
    {
      id: "4",
      invoice_no: "4",
      customer_name: "User Four",
      status: "paid",
      date: "5/12/23",
      dueDate: "5/12/23",
      amount: "$5000",
      action: "",
      paymentMode: "",
    },
    {
      id: "5",
      invoice_no: "5",
      customer_name: "User Five",
      status: "overdue by 1 day",
      date: "5/12/23",
      dueDate: "5/12/23",
      amount: "$5000",
      action: "",
      paymentMode: "",
    },
  ]);
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
      color: "#7c48d2",
    },
    // {
    //   name: "series-2",
    //   data: [10, 20, 55, 20, 63, 38, 70, 11],
    // },
  ];

  const [invoiceData, setInvoiceData] = useState<any>({});
  const [addFlyoutVisibility, setAddFlyoutVisibility] = useState(false);
  const [isInvoicePreviewModalVisible, setIsInvoicePreviewModalVisible] =
    useState<any>(false);
  const [isInvoiceFinalDataShow, setIsInvoiceFinalDataShow] =
    useState<any>(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<any>(false);

  const value: any = {
    invoiceData,
    setInvoiceData,
    isInvoicePreviewModalVisible,
    setIsInvoicePreviewModalVisible,
    isInvoiceFinalDataShow,
    setIsInvoiceFinalDataShow,
    isPaymentModalOpen,
    setIsPaymentModalOpen,
    data,
    setData,
  };

  function handleStoreInvoice(newInvoice: any, type: any) {
    if (type == "draft") {
      setData([
        ...data,
        {
          id: newInvoice.invoiceNo,
          invoice_no: newInvoice.invoiceNo,
          customer_name: newInvoice.email,
          status: type,
          date: moment(newInvoice.issuedOn).format("DDD/mm/yyyy"),
          dueDate: moment(newInvoice.issuedOn).format("DDD/mm/yyyy"),
          amount: newInvoice.total_amount,
          action: "",
        },
      ]);
      setIsInvoicePreviewModalVisible(false);
      setAddFlyoutVisibility(false);
    } else if (type == "paid") {
      setData([
        ...data,
        {
          id: newInvoice.invoice_no,
          invoice_no: newInvoice.invoice_no,
          customer_name: newInvoice.customer_name,
          status: type,
          date: moment(newInvoice.issuedOn).format("DDD/mm/yyyy"),
          dueDate: moment(newInvoice.issuedOn).format("DDD/mm/yyyy"),
          amount: newInvoice.amount,
          action: "",
        },
      ]);
    } else {
      setInvoiceData({
        id: data.length + 1,
        invoice_no: newInvoice.invoiceNo,
        customer_name: newInvoice.email,
        status: type,
        date: moment(newInvoice.issuedOn).format("DDD/mm/yyyy"),
        dueDate: moment(newInvoice.issuedOn).format("DDD/mm/yyyy"),
        amount: newInvoice.total_amount,
        action: "",
      });
      setIsInvoicePreviewModalVisible(true);
      setAddFlyoutVisibility(false);
    }
  }

  return (
    <InvoiceContext.Provider value={value}>
      <div>
        {isInvoicePreviewModalVisible && (
          <ModalDerived
            visibility={isInvoicePreviewModalVisible}
            onClose={() => setIsInvoicePreviewModalVisible(false)}
          >
            <PreviewInvoice
              handleChange={(newInvoice: string, type: string) =>
                handleStoreInvoice(newInvoice, type)
              }
            />
          </ModalDerived>
        )}
      </div>
      <div>
        {isInvoiceFinalDataShow && (
          <ModalDerived
            visibility={isInvoiceFinalDataShow}
            onClose={() => setIsInvoiceFinalDataShow(false)}
          >
            <PreviewFinalData />
          </ModalDerived>
        )}
      </div>
      <div>
        {isPaymentModalOpen && (
          <ModalDerived
            visibility={isPaymentModalOpen}
            onClose={() => setIsPaymentModalOpen(false)}
          >
            <InvoicePayment
              handleChange={(newInvoice: string) =>
                handleStoreInvoice(newInvoice, "paid")
              }
            />
          </ModalDerived>
        )}
      </div>

      <main className="bg-white h-auto relative">
        <FlyOut
          visibility={addFlyoutVisibility}
          onClose={() => setAddFlyoutVisibility(false)}
        >
          <AddInvoiceForm
            handleChange={(newInvoice: string, type: string) =>
              handleStoreInvoice(newInvoice, type)
            }
          />
        </FlyOut>
        <header className="bg-white p-4 flex justify-between flex-wrap overflow-x-hidden items-center border-b-2">
          <h1 className="text-2xl font-semibold">Claims</h1>
          <select className="border border-gray-400 w-40 outline-none px-2 rounded-sm py-1 shadow">
            <option value="30">Last 30 Days</option>
            <option value="15">Last 15 Days</option>
            <option value="7">Last 7 Days</option>
          </select>
        </header>

        <div className="px-4 h-full mt-3">
          <div className="flex flex-wrap overflow-x-hidden">
            <div className="w-full md:w-7/12">
              <div className="mb-6 lg:mb-0 pb-2 pl-6 shadow-md flex flex-wrap overflow-x-hidden border-[1px] border-gray-200  rounded-lg">
                <div className="w-full md:w-4/12 p-2">
                  <FactCard
                    title="Total Claims"
                    number={152.9}
                    currency="$"
                    titleIcon={
                      <FaBookmark className="text-sm text-[#7e49d2]" />
                    }
                    subData={"+1.50"}
                    subSpanData={"/month"}
                    subIcon={<BsArrowUpRight className="text-[10px]" />}
                    index={1}
                  />
                </div>
                <div className="w-full md:w-4/12 p-2">
                  <FactCard
                    title="Paid Claims"
                    number={109.3}
                    currency="$"
                    titleIcon={
                      <BsFillPatchCheckFill className="text-sm text-[#20cc6d]" />
                    }
                    subData={"+0.47s"}
                    subSpanData={"/month"}
                    subIcon={<FiTrendingUp className="text-[10px]" />}
                    index={2}
                  />
                </div>
                <div className="w-full md:w-4/12 p-2">
                  <FactCard
                    title="Pending Claims"
                    number={109.3}
                    currency="$"
                    titleIcon={
                      <IoTimeSharp className="text-sm text-[#ee8f0e]" />
                    }
                    subData={"+0.75"}
                    subSpanData={"/month"}
                    subIcon={<FiTrendingDown className="text-[10px]" />}
                    index={3}
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/12 ">
              <div className="pb-2 lg:px-3">
                <LongCard
                  title="Total Receivables"
                  number={109.3}
                  currency="$"
                  titleIcon={<IoTimeSharp className="text-sm text-[#ee8f0e]" />}
                  subData={"+1.50"}
                  subSpanData={"Total unpaid Claims $43,078"}
                  subIcon={<FiTrendingUp className="text-[10px]" />}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 px-6">
          <div className="flex flex-wrap overflow-hidden border shadow-md rounded-lg relative h-auto">
            <div className="w-full md:w-10/12 flex flex-wrap">
              <ChartCard
                data={{
                  options: options,
                  series: series,
                  type: "area",
                  height: 300,
                  width: "100%",
                }}
                name="Cash Flow"
              />
            </div>
            <div className="w-full md:w-2/12 px-3 h-full">
              <div className="flex justify-end p-3">
                <button className="p-1 shadow border rounded">
                  <MoreHorizOutlined />
                </button>
              </div>
              <div className="w-full py-4 px-2 flex flex-col justify-between h-auto mt-3">
                <div>
                  <p className="text-xs font-semibold  pb-2 text-[#6863cf] ">
                    Cash as on 04/01/2022
                  </p>
                  <p className="text-2xl font-semibold">$487.1k</p>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-semibold  pb-1  text-green-500">
                    Incoming
                  </p>
                  <p className="text-2xl font-semibold">$75.0k</p>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-semibold  pb-1  text-red-500">
                    Outgoing
                  </p>
                  <p className="text-2xl font-semibold">$562.1k</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6">
          <div className="w-full border bg-white p-4 shadow rounded-sm">
            <div className="flex flex-wrap justify-between items-center">
              <div>
                <h3 className="font-semibold text-2xl">All Claims </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  className=" flex justify-center items-center px-4 py-2 rounded-md text-white capitalize bg-[#7c48d2]"
                  onClick={() => {
                    setAddFlyoutVisibility(true);
                    setInvoiceData(null);
                  }}
                >
                  <PlusIcon className="h-4 w-4 text-white" /> New Claims
                </button>
                <button className="px-1 shadow border rounded">
                  <MoreHorizOutlined />
                </button>
              </div>
            </div>
            <div className="mt-3">
              <BillingTable data={data} />
            </div>
          </div>
        </div>
      </main>
    </InvoiceContext.Provider>
  );
}
