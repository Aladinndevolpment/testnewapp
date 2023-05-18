import FactCard from "@/components/invoice/FactCard";
import {
  BsArrowUpRight,
  BsClock,
  BsFillPatchCheckFill,
  BsTelephone,
} from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";

import ChartCard from "@/components/invoice/ChartCard";
import { MoreHorizOutlined } from "@mui/icons-material";
import MaterialTable, { Column } from "material-table";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import moment from "moment";
import { useState } from "react";
import { getQuotes } from "@/components/Leads/dnd/mockData";

import { HydrationProvider, Client } from "react-hydration-provider";
import { PlusIcon } from "@heroicons/react/24/outline";

interface RowData {
  [key: string]: any;
}

const columns: Column<RowData>[] = [
  {
    title: "Lead Name",
    field: "lead_name",
    headerStyle: {
      border: "1px solid #dbdbdb",
    },
    render: (rowData) => (
      <div className="flex gap-2 w-[200px]">
        <div className="h-11 w-11 rounded-full bg-cover shadow-md mr-1">
          <Image
            alt="Image"
            src={require("../../../public/images/avatar/yellowdog.jpg")}
            className="h-full w-full rounded-full bg-cover"
            content="cover"
          />
        </div>
        <div>
          <p className="font-bold text-gray-800 font-main">
            {rowData.lead_name.name}
          </p>
          <div className="flex flex-wrap justify-between items-center mt-0.5">
            <BsClock className="h-3 w-3 text-darkBlack mr-1" />
            <span className="font-semibold text-sm">
              Today at {moment().format("hh:mm A")}
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Contact",
    field: "contact",
    headerStyle: {
      border: "1px solid #dbdbdb",
    },
    render: (rowData) => (
      <div className="flex flex-col">
        <div className="flex justify-start items-center mt-0.5">
          <AiOutlineMail className="h-3 w-3 text-darkBlack mr-1" />
          <span className="font-semibold text-sm">{rowData.contact.email}</span>
        </div>
        <div className="flex justify-start items-center mt-0.5">
          <BsTelephone className="h-3 w-3 text-darkBlack mr-1" />
          <span className="font-semibold text-sm">{rowData.contact.phone}</span>
        </div>
      </div>
    ),
  },
  {
    title: "Lead Source",
    field: "lead_source",
    headerStyle: {
      border: "1px solid #dbdbdb",
    },
    render: (rowData) => (
      <div className="flex items-center gap-2 w-[130px] bg-[#E8EBF5] py-2 px-4  rounded-full ">
        <p className=" text-center   font-semibold text-dark">
          {rowData.lead_source}
        </p>
      </div>
    ),
  },
  {
    title: "Lead Status",
    field: "lead_status",
    headerStyle: {
      border: "1px solid #dbdbdb",
    },
    render: (rowData) => (
      <div className="w-[200px]">
        <button
          className={` ${
            rowData.lead_status == "Open" || rowData.lead_status == "New"
              ? " border-newBlue bg-blue-100"
              : rowData.lead_status == "Deal Unqualified"
              ? " border-secondary bg-red-200"
              : rowData.lead_status == "Attempt to a contact"
              ? " border-green-500 bg-green-200"
              : rowData.lead_status == "Bad Timing"
              ? " border-orange-500 bg-orange-200"
              : " border-gray-300 bg-gray-100"
          }  
            flex justify-start items-center border-[1px] text-center py-1 px-2 rounded-full font-normal text-dark`}
        >
          <div
            className={`${
              rowData.lead_status == "Open" || rowData.lead_status == "New"
                ? " bg-newBlue"
                : rowData.lead_status == "Deal Unqualified"
                ? " bg-secondary"
                : rowData.lead_status == "Attempt to a contact"
                ? " bg-green-500"
                : rowData.lead_status == "Bad Timing"
                ? "  bg-orange-500"
                : " bg-gray-500"
            }
            
            h-1.5 w-1.5 rounded-full   mr-2 ml-2`}
          ></div>
          <span
            className={`${
              rowData.lead_status == "Open" || rowData.lead_status == "New"
                ? " text-newBlue"
                : rowData.lead_status == "Deal Unqualified"
                ? " text-secondary"
                : rowData.lead_status == "Attempt to a contact"
                ? " text-green-500"
                : rowData.lead_status == "Bad Timing"
                ? " text-orange-500"
                : " text-gray-600"
            }  pr-3  `}
          >
            {" "}
            {rowData.lead_status}
          </span>
        </button>
      </div>
    ),
  },
  {
    title: "Lead Owner",
    field: "lead_owner",
    headerStyle: {
      border: "1px solid #dbdbdb",
    },
    render: (rowData) => (
      <div className="flex items-center gap-2 w-[200px]">
        <div className="avatar-group -space-x-6">
          <div className="avatar">
            <div className="w-12">
              <Image
                src={require("../../../public/images/avatar/yellowdog.jpg")}
                width={50}
                height={50}
                alt=""
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        <p className="font-bold text-gray-800 font-main">
          {rowData.lead_owner.name}
        </p>
      </div>
    ),
  },
];

export default function InvoicePage() {
  const [data, setData] = useState<RowData[]>(getQuotes(30));

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
    <main className="bg-white h-auto">
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
              <button className="btn btn-sm capitalize bg-[#7c48d2]">
                <PlusIcon className="h-4 w-4 text-white" /> New Invoice
              </button>
              <button className="px-1 shadow border rounded">
                <MoreHorizOutlined />
              </button>
            </div>
          </div>
          <HydrationProvider>
            <Client>
              <MaterialTable
                // onRowClick={handleRowClick}
                columns={columns}
                data={data}
                style={{
                  border: "0",
                  boxShadow: "none",
                }}
                options={{
                  showTitle: false,
                  paginationType: "stepped",
                  pageSize: 15,
                  sorting: true,
                  rowStyle: (rowData, index) => ({
                    backgroundColor: index % 2 === 0 ? "#ffffff" : "#f2f2f2",
                  }),
                  selection: true,
                  selectionProps: { backgroundColor: "red" },
                  search: true,
                  searchFieldAlignment: "left",
                }}
              />
            </Client>
          </HydrationProvider>
        </div>
      </div>
    </main>
  );
}
