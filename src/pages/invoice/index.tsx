import FactCard from "@/components/invoice/FactCard";
import { BsArrowUpRight, BsFillPatchCheckFill } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";

import ChartCard from "@/components/invoice/ChartCard";
import { MoreHorizOutlined } from "@mui/icons-material";
import { useState } from "react";
import { getQuotes } from "@/components/Leads/dnd/mockData";

import { PlusIcon } from "@heroicons/react/24/outline";
import BillingTable from "@/components/invoice/BillingTable";
import FlyOut from "@/components/Flyout";
import AddInvoiceForm from "@/components/invoice/AddInvoiceForm";

interface RowData {
  [key: string]: any;
}

export default function InvoicePage() {
  const [data, setData] = useState<RowData[]>(getQuotes(30));
  const [addFlyoutVisibility, setAddFlyoutVisibility] = useState(false);

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
    },
    {
      name: "series-2",
      data: [10, 20, 55, 20, 63, 38, 70, 11],
    },
  ];
  return (
    <main className="bg-white h-auto relative">
      <FlyOut
        visibility={addFlyoutVisibility}
        onClose={() => setAddFlyoutVisibility(false)}
      >
        <AddInvoiceForm />
      </FlyOut>
      <header className="bg-white p-4 flex justify-between flex-wrap overflow-x-hidden items-center border-b-2">
        <h1 className="text-2xl font-semibold">Invoice</h1>
        <select className="border border-gray-400 w-40 outline-none px-2 rounded-sm py-1 shadow">
          <option value="30">Last 30 Days</option>
          <option value="15">Last 15 Days</option>
          <option value="7">Last 7 Days</option>
        </select>
      </header>

      <div className="px-4 h-full mt-3">
        <div className="flex flex-wrap overflow-x-hidden">
          <div className="w-full md:w-7/12 flex flex-wrap overflow-x-hidden">
            <div className="w-full md:w-4/12 p-2">
              <FactCard
                title="Total Invoice"
                data="$152.9K"
                titleIcon={<FaBookmark className="text-sm text-[#7e49d2]" />}
                subData={"+1.50"}
                subSpanData={"/month"}
                subIcon={<BsArrowUpRight className="text-[10px]" />}
              />
            </div>
            <div className="w-full md:w-4/12 p-2">
              <FactCard
                title="Paid Invoice"
                data="$109.3K"
                titleIcon={
                  <BsFillPatchCheckFill className="text-sm text-[#20cc6d]" />
                }
                subData={"+1.50"}
                subSpanData={"/month"}
                subIcon={<BsArrowUpRight className="text-[10px]" />}
              />
            </div>
            <div className="w-full md:w-4/12 p-2">
              <FactCard
                title="Pending Invoice"
                data="$152.9K"
                titleIcon={<IoTimeSharp className="text-sm text-[#ee8f0e]" />}
                subData={"+1.50"}
                subSpanData={"/month"}
                subIcon={<BsArrowUpRight className="text-[10px]" />}
              />
            </div>
          </div>
          <div className="w-full md:w-5/12 p-2">
            <FactCard
              title="Pending Invoice"
              data="$152.9K"
              titleIcon={<IoTimeSharp className="text-sm text-[#ee8f0e]" />}
              subData={"+1.50"}
              subSpanData={"/month"}
              subIcon={<BsArrowUpRight className="text-[10px]" />}
            />
          </div>
        </div>
      </div>

      <div className="py-4 px-6">
        <div className="flex flex-wrap overflow-hidden border shadow rounded-sm relative h-auto">
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
            <div className="w-full p-4 flex flex-col justify-between h-auto mt-3">
              <div>
                <p className="text-sm text-[#6863cf]">Cash as on 04/01/2022</p>
                <p className="text-2xl font-semibold">$487.1k</p>
              </div>

              <div className="mt-5">
                <p className="text-sm text-green-500">Incoming</p>
                <p className="text-2xl font-semibold">$75.0k</p>
              </div>

              <div className="mt-5">
                <p className="text-sm text-red-500">Outgoing</p>
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
              <h3 className="font-semibold text-2xl">All Invoices</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                className="btn btn-sm capitalize bg-[#7c48d2]"
                onClick={() => setAddFlyoutVisibility(true)}
              >
                <PlusIcon className="h-4 w-4 text-white" /> New Invoice
              </button>
              <button className="px-1 shadow border rounded">
                <MoreHorizOutlined />
              </button>
            </div>
          </div>
          <div className="mt-3">
            <BillingTable />
          </div>
        </div>
      </div>
    </main>
  );
}
