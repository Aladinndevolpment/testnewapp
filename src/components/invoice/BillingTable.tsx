import Image from "next/image";
import { createContext, useEffect, useMemo, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import {
  BsFunnel,
  BsColumns,
  BsClock,
  BsTelephone,
  BsDownload,
} from "react-icons/bs";
import {
  AiOutlineInsertRowAbove,
  AiOutlineBars,
  AiOutlineMail,
} from "react-icons/ai";
import moment from "moment";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import { RiDeleteBin5Line } from "react-icons/ri";

export const StoreLeadContext = createContext({
  formValue: {},
  setFormValue: (array: Array<any>) => {},
});

interface RowData {
  [key: string]: any;
}

export default function BillingTable({ data }: any) {
  const [isGrid, setIsGrid] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "invoice_no",
        id: "invoice_no",
        header: "Invoice No",
        size: 100,
        Cell: ({ row }) => (
          <div>
            <p className="  text-[#138CC8] font-medium text-[15px]">
              {row.original.invoice_no}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "customer_name",
        id: "customer_name",
        header: "Customer Name",
        size: 200,
        Cell: ({ row }) => (
          <div>
            <p className="  text-gray-700 font-medium text-[15px]">
              {" "}
              {row.original.customer_name}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "status",
        id: "status",
        header: "Status",
        size: 200,
        Cell: ({ row }) => (
          <div>
            <button
              className={`${
                row.original.status == "due in 14 days"
                  ? " border-blue-100 bg-blue-100 text-newBlue px-3 "
                  : row.original.status == "overdue by 1 day"
                  ? " border-red-200 bg-red-200 text-secondary px-3 "
                  : row.original.status == "paid"
                  ? " border-green-200 bg-green-200 text-green-500 px-4"
                  : " border-gray-300 bg-gray-100 text-gray-600 px-4"
              } text-center border-[1px] py-1.5 rounded-full font-light`}
            >
              {row.original.status}
            </button>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "date",
        id: "date",
        header: "Date",
        size: 100,
        Cell: ({ row }) => (
          <div>
            <p className="  text-gray-700 font-medium text-[15px]">
              {row.original.date}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "dueDate",
        id: "dueDate",
        header: "Due Date",
        size: 100,
        Cell: ({ row }) => (
          <div>
            <p className="  text-gray-700 font-medium text-[15px]">
              {row.original.dueDate}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "amount",
        id: "amount",
        header: "Amount",
        size: 100,
        Cell: ({ row }) => (
          <div>
            <p className="  text-gray-700 font-medium text-[15px]">
              {row.original.amount}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "action",
        id: "action",
        header: "Action",
        size: 100,
        Cell: ({ row }) => (
          <div className="flex justify-center">
            <div className="px-2">
              <BsDownload className="h-5 w-5 text-gray-500" />
            </div>
            <div className="px-2">
              <RiDeleteBin5Line className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        ),
        enableColumnFilter: true,
      },
    ],
    []
  );

  const [openModal, setOpenModal] = useState<any>(false);
  const [formValue, setFormValue] = useState<any>({});
  const value: any = { formValue, setFormValue };

  const modifiedData = data.map((item: any) => {
    // Modify the "Lead Name" field based on your requirements
    return {
      ...item,
      invoice_no: `  ${item.invoice_no}`,
      customer_name: `  ${item.customer_name}`,
      status: `  ${item.status}`,
      date: `  ${item.date}`,
      dueDate: `  ${item.dueDate}`,
      amount: `  ${item.amount}`,
    };
  });

  // Configure the CSV export options
  const csvOptions = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: false,
    headers: [
      "ID",
      "Lead Name",
      "Email",
      "Lead Status",
      "Lead Source",
      "Lead Owner",
      "Phone",
    ],
    filename: "leads",
  };

  const csvExporter = new ExportToCsv(csvOptions);
  const handleExportRows = (rows: any[]) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
  };

  const handleExportData = () => {
    csvExporter.generateCsv(modifiedData);
  };

  return (
    <>
      <div className="bg-white shadow-md lg:px-2  rounded-lg">
        <MaterialReactTable
          columns={columns}
          data={data}
          enableStickyHeader
          enableColumnOrdering
          enableRowSelection
          // initialState={{
          //   showGlobalFilter: true,
          // }}
          positionToolbarAlertBanner="bottom"
          // muiSearchTextFieldProps={{
          //   placeholder: `Search ${data.length} rows`,
          //   sx: {
          //     minWidth: "400px",
          //     marginTop: "5px",
          //     marginBottom: "10px",
          //     padding: "5px",
          //   },
          //   variant: "outlined",
          // }}
          // positionGlobalFilter="left"
          enableSorting={true}
          enableGlobalFilterModes
          enableColumnActions={false}
          muiTableHeadCellProps={{
            sx: {
              borderRight: "2px solid #e9e9e9",
              backgroundColor: "#F5F5F5",
              paddingBottom: "25x",
              borderRadius: "5px",
            },
          }}
          muiTablePaperProps={{
            elevation: 0,
            sx: {
              padding: "5px",
            },
          }}
          muiTableProps={{
            sx: { border: "2px solid #f2f2f2", borderRadius: "5px" },
          }}
          muiTableBodyProps={{
            sx: (theme) => ({
              "& tr:nth-of-type(odd)": {
                backgroundColor: "#ffffff",
              },
              "& tr:nth-of-type(even)": {
                backgroundColor: "#f2f2f2",
              },
            }),
          }}
        />
      </div>
    </>
  );
}