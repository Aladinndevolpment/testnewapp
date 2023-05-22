import Image from "next/image";
import { createContext, useEffect, useMemo, useRef, useState } from "react";
import Kanban from "./Kanban";
import { FiChevronDown } from "react-icons/fi";
import { BsFunnel, BsColumns, BsClock, BsTelephone } from "react-icons/bs";
import {
  AiOutlineInsertRowAbove,
  AiOutlineBars,
  AiOutlineMail,
} from "react-icons/ai";
import moment from "moment";
import { boards, getQuotes } from "./dnd/mockData";
import AddItem from "./AddItem";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here

export const StoreLeadContext = createContext({
  formValue: {},
  setFormValue: (array: Array<any>) => {},
});

interface RowData {
  [key: string]: any;
}

export default function TabLeads() {
  const [isGrid, setIsGrid] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "lead_name", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "lead_name", //id is still required when using accessorFn instead of accessorKey
        header: "Lead Name",
        size: 200,
        Cell: ({ row }) => (
          <div className=" ">
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
                  {row.original.lead_name.name}
                </p>
                <div className="flex flex-wrap justify-between items-center mt-0.5">
                  <BsClock className="h-3 w-3 text-darkBlack mr-1" />
                  <span className="font-semibold text-sm">
                    Today at {moment().format("hh:mm A")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ),
        enableColumnFilter: true, // could disable just this column's filter
      },
      {
        accessorKey: "contact", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "contact", //id is still required when using accessorFn instead of accessorKey
        header: "Contact",
        size: 150,
        Cell: ({ row }) => (
          <div className="flex flex-col">
            <div className="flex justify-start items-center mt-0.5">
              <AiOutlineMail className="h-3 w-3 text-darkBlack mr-1" />
              <span className="font-semibold text-sm">
                {row.original.contact.email}
              </span>
            </div>
            <div className="flex justify-start items-center mt-0.5">
              <BsTelephone className="h-3 w-3 text-darkBlack mr-1" />
              <span className="font-semibold text-sm">
                {row.original.contact.phone}
              </span>
            </div>
          </div>
        ),
      },
      {
        accessorKey: "modules", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "lead_source", //id is still required when using accessorFn instead of accessorKey
        header: "Lead Source",
        size: 150,
        Cell: ({ row }) => (
          <div className="flex items-center gap-2 w-[130px] bg-[#E8EBF5] py-2 px-4  rounded-full ">
            <p className=" text-center   font-semibold text-dark">
              {row.original.lead_source}
            </p>
          </div>
        ),
      },
      {
        accessorKey: "lead_status", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "lead_status", //id is still required when using accessorFn instead of accessorKey
        header: "Lead Status",
        size: 150,
        Cell: ({ row }) => (
          <div className="w-[200px]">
            <button
              className={` ${
                row.original.lead_status == "Open" ||
                row.original.lead_status == "New"
                  ? " border-newBlue bg-blue-100"
                  : row.original.lead_status == "Deal Unqualified"
                  ? " border-secondary bg-red-200"
                  : row.original.lead_status == "Attempt to a contact"
                  ? " border-green-500 bg-green-200"
                  : row.original.lead_status == "Bad Timing"
                  ? " border-orange-500 bg-orange-200"
                  : " border-gray-300 bg-gray-100"
              }
              flex justify-start items-center border-[1px] text-center py-1 px-2 rounded-full font-normal text-dark`}
            >
              <div
                className={`${
                  row.original.lead_status == "Open" ||
                  row.original.lead_status == "New"
                    ? " bg-newBlue"
                    : row.original.lead_status == "Deal Unqualified"
                    ? " bg-secondary"
                    : row.original.lead_status == "Attempt to a contact"
                    ? " bg-green-500"
                    : row.original.lead_status == "Bad Timing"
                    ? "  bg-orange-500"
                    : " bg-gray-500"
                }

              h-1.5 w-1.5 rounded-full   mr-2 ml-2`}
              ></div>
              <span
                className={`${
                  row.original.lead_status == "Open" ||
                  row.original.lead_status == "New"
                    ? " text-newBlue"
                    : row.original.lead_status == "Deal Unqualified"
                    ? " text-secondary"
                    : row.original.lead_status == "Attempt to a contact"
                    ? " text-green-500"
                    : row.original.lead_status == "Bad Timing"
                    ? " text-orange-500"
                    : " text-gray-600"
                }  pr-3  `}
              >
                {" "}
                {row.original.lead_status}
              </span>
            </button>
          </div>
        ),
      },
      {
        accessorKey: "lead_owner",
        id: "lead_owner", //id is still required when using accessorFn instead of accessorKey
        header: "Lead Owner",
        size: 150,
        Cell: ({ row }) => (
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
              {row.original.lead_owner.name}
            </p>
          </div>
        ),
      },
    ],
    []
  );

  const [data, setData] = useState<RowData[]>([
    {
      id: "1",
      lead_name: {
        name: "Clifford C. Shultz",
        time: "",
        image: require("../../../public/images/avatar/yellowdog.jpg"),
      },
      contact: {
        email: "CliffordCShultz@rhyta.com",
        phone: "6970978525",
      },
      lead_status: "New",
      lead_source: "Online Store",
      lead_owner: {
        name: "Friest",
        time: "",
        image: require("../../../public/images/avatar/yellowdog.jpg"),
      },
      board: boards[0],
    },
    {
      id: "2",
      lead_name: {
        name: "Robert I. Millet",
        time: "",
        image: require("../../../public/images/avatar/yellowdog.jpg"),
      },
      contact: {
        email: "RobertIMillet@teleworm.us",
        phone: "93316404",
      },

      lead_status: "Open",
      lead_source: "External Link",
      lead_owner: {
        name: "Friest",
        time: "",
        image: require("../../../public/images/avatar/yellowdog.jpg"),
      },
      board: boards[1],
    },
    {
      id: "3",
      lead_name: {
        name: "Clifford C. Shultz",
        time: "",
        image: require("../../../public/images/avatar/yellowdog.jpg"),
      },
      contact: {
        email: "JoannTJones@jourrapide.com",
        phone: "3052289483",
      },
      lead_status: "Deal Unqualified",
      lead_source: "Online Store",
      lead_owner: {
        name: "Friest",
        time: "",
        image: require("../../../public/images/avatar/yellowdog.jpg"),
      },
      board: boards[2],
    },
    {
      id: "4",
      lead_name: {
        name: "Glenda W. Webb",
        time: "",
        image: require("../../../public/images/avatar/yellowdog.jpg"),
      },

      contact: {
        email: "GlendaWWebb@dayrep.com",
        phone: "3287863056",
      },

      lead_status: "Bad Timing",
      lead_source: "External Link",
      lead_owner: {
        name: "Friest",
        time: "",
        image: require("../../../public/images/avatar/yellowdog.jpg"),
      },
      board: boards[3],
    },
    {
      id: "5",
      lead_name: {
        name: "Reginald C. Bell",
        time: "",
        image: require("../../../public/images/avatar/yellowdog.jpg"),
      },

      contact: {
        email: "ReginaldCBell@rhyta.com",
        phone: "1918686638",
      },

      lead_status: "Attempt to a contact",
      lead_source: "Online Store",
      lead_owner: {
        name: "Friest",
        time: "",
        image: require("../../../public/images/avatar/yellowdog.jpg"),
      },
      board: boards[0],
    },
    {
      id: "6",
      lead_name: {
        name: "Verna J. Bonilla",
        time: "",
        image: require("../../../public/images/avatar/yellowdog.jpg"),
      },

      contact: {
        email: "VernaJBonilla@rhyta.com",
        phone: "0477365158",
      },

      lead_status: "Bad Timing",
      lead_source: "Online Store",
      lead_owner: {
        name: "Friest",
        time: "",
        image: require("../../../public/images/avatar/yellowdog.jpg"),
      },
      board: boards[1],
    },
  ]);

  const [openModal, setOpenModal] = useState<any>(false);
  const [formValue, setFormValue] = useState<any>({});
  const value: any = { formValue, setFormValue };
  function handleAddNewItem(item: any) {
    setOpenModal(false);
    setFormValue(item);
    setData([
      ...data,
      {
        id: `G${Math.floor(Math.random() * 1000000000)}`,
        lead_name: {
          name: item?.fullName,
          time: "",
          image: require("../../../public/images/avatar/yellowdog.jpg"),
        },

        contact: {
          email: item?.email,
          phone: item?.phone,
        },

        lead_status: item?.leadStatus,
        lead_source: item?.leadSource,
        lead_owner: {
          name: item?.leadOwner,
          time: "",
          image: require("../../../public/images/avatar/yellowdog.jpg"),
        },
        board: boards[0],
      },
    ]);
  }
  // const csvOptions = {
  //   fieldSeparator: ",",
  //   quoteStrings: '"',
  //   decimalSeparator: ".",
  //   showLabels: true,
  //   useBom: true,
  //   useKeysAsHeaders: false,
  //   headers: columns.map((c) => c.header),
  //   filename: "leads",
  // };

  const modifiedData = data.map((item) => {
    // Modify the "Lead Name" field based on your requirements
    return {
      ...item,
      lead_name: `  ${item.lead_name.name}`,
      contact: `  ${item.contact.email}`,
      lead_status: `  ${item.lead_status}`,
      lead_source: `  ${item.lead_source}`,
      lead_owner: `  ${item.lead_owner.name}`,
      board: ``,
      phone: `  ${item.contact.phone}`,
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
      "Board",
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
      <AddItem
        onClose={() => setOpenModal(false)}
        visibility={openModal}
        onSave={(item) => {
          handleAddNewItem(item);
          setFormValue({});
        }}
      />

      <StoreLeadContext.Provider value={value}>
        <div className="px-4 bg-white pb-4">
          <h1 className="text-2xl font-semibold text-dark mb-5 pt-5">
            {data?.length} Leads
          </h1>
          <div className="flex flex-wrap lg:flex-nowrap justify-start lg:justify-between items-center">
            <div className="w-full lg:w-auto flex justify-between items-center mb-2">
              <div className="dropdown dropdown-bottom mr-1">
                <label
                  tabIndex={0}
                  className="border-[1px] border-gray-200 m-1 py-2 px-2 rounded-md flex flex-wrap justify-between items-center"
                >
                  <span className="font-semibold text-sm ">All Leads</span>
                  <FiChevronDown className="h-5 w-5 text-darkBlack mt-1 ml-2" />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-bottom mr-1">
                <label
                  tabIndex={1}
                  className="border-[1px] border-gray-200 m-1 py-2 px-2 rounded-md flex flex-wrap justify-between items-center"
                >
                  <span className="font-semibold text-sm ">Create date</span>
                  <FiChevronDown className="h-5 w-5 text-darkBlack mt-1 ml-2" />
                </label>
                <ul
                  tabIndex={1}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-bottom mr-1">
                <label
                  tabIndex={2}
                  className="border-[1px] border-gray-200 m-1 py-2 px-2 rounded-md flex flex-wrap justify-between items-center"
                >
                  <span className="font-semibold text-sm ">Contact Owner</span>
                  <FiChevronDown className="h-5 w-5 text-darkBlack mt-1 ml-2" />
                </label>
                <ul
                  tabIndex={2}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-bottom">
                <label
                  tabIndex={2}
                  className="border-[1px] border-gray-200 m-1 py-2 px-2 rounded-md flex flex-wrap justify-between items-center"
                >
                  <BsFunnel className="h-5 w-5 text-darkBlack mt-1 mr-2" />
                  <span className="font-semibold text-sm "> More Filter </span>
                </label>
                <ul
                  tabIndex={2}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full  lg:w-auto flex justify-between items-center mb-2">
              <div className="m-1 ml-2 py-2 px-2 rounded-md flex flex-wrap justify-between items-center">
                <BsColumns className="h-4 w-4 text-darkBlack   mr-2" />
                <span className="font-semibold text-sm ">Manage Column</span>
              </div>

              <div className="  bg-gray-200 rounded-md mr-4 flex justify-between items-center">
                <div
                  onClick={() => setIsGrid(!isGrid)}
                  className={`py-2 px-2 rounded-sm duration-300 ${
                    isGrid
                      ? "bg-gray-200 text-gray-500"
                      : "bg-white text-darkBlack shadow-md shadow-gray-400 "
                  }`}
                >
                  <AiOutlineBars className={` h-5 w-5 `} />
                </div>
                <div
                  onClick={() => setIsGrid(!isGrid)}
                  className={`py-2 px-2 rounded-sm duration-300 ${
                    isGrid
                      ? "bg-white text-darkBlack shadow-md shadow-gray-400 "
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  <AiOutlineInsertRowAbove className={` h-5 w-5`} />
                </div>
              </div>
              <button
                onClick={handleExportData}
                className="mr-3 border-[1px] border-gray-200 text-darkBlack  duration-300 m-1 py-2 px-4  rounded-md flex flex-wrap justify-between items-center"
              >
                Export
              </button>

              <button
                onClick={() => setOpenModal(true)}
                className="bg-secondary hover:bg-newBlue duration-300 m-1 py-2 px-4 text-white rounded-md flex flex-wrap justify-between items-center"
              >
                Create Leads
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          {data.length > 0 && (
            <div className="bg-white shadow-md rounded-md mx-4">
              {!isGrid ? (
                <div className="bg-white shadow-md lg:px-2 pb-5 rounded-lg">
                  <MaterialReactTable
                    columns={columns}
                    data={data}
                    enableStickyHeader
                    enableColumnOrdering
                    enableRowSelection
                    initialState={{
                      showGlobalFilter: true,
                    }}
                    positionToolbarAlertBanner="bottom"
                    muiSearchTextFieldProps={{
                      placeholder: `Search ${data.length} rows`,
                      sx: {
                        minWidth: "400px",
                        marginTop: "5px",
                        marginBottom: "10px",
                        padding: "5px",
                      },
                      variant: "outlined",
                    }}
                    positionGlobalFilter="left"
                    enableSorting={true}
                    enableGlobalFilterModes
                    enableColumnActions={false}
                    muiTableHeadCellProps={{
                      sx: {
                        borderRight: "2px solid #e9e9e9",
                        backgroundColor: "#F5F5F5",
                        paddingTop: "25x",
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
              ) : (
                <Kanban />
              )}
            </div>
          )}
        </div>
      </StoreLeadContext.Provider>
    </>
  );
}
