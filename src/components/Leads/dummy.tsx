import MaterialTable, { Column, MTableToolbar } from "material-table";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
import { CSVLink } from "react-csv";
import AddItem from "./AddItem";
import { Checkbox } from "@material-ui/core";
import {
  CalendarIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
//  import { Check as CheckIcon, Clear as ClearIcon } from '@material-ui/icons';

interface RowData {
  [key: string]: any;
}

export default function TabLeads() {
  const [isGrid, setIsGrid] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const [columns, setColumns] = useState<Column<RowData>[]>([
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
            <span className="font-semibold text-sm">
              {rowData.contact.email}
            </span>
          </div>
          <div className="flex justify-start items-center mt-0.5">
            <BsTelephone className="h-3 w-3 text-darkBlack mr-1" />
            <span className="font-semibold text-sm">
              {rowData.contact.phone}
            </span>
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
  ]);

  const [data, setData] = useState<RowData[]>(getQuotes(20));
  const [exportData, setExportData] = useState<any>([]);
  const [filteredData, setFilteredData] = useState<any>([]);

  const csvLinkRef: any = useRef();

  const handleExport = () => {
    csvLinkRef.current.link.click();
  };

  const transformDataForExport = (newdata: any) => {
    // Modify this function to extract the desired string values from the objects
    return newdata.map((row: any) => ({
      id: row.id,
      lead_name: row.lead_name.name,
      contact: row.contact.phone,
      email: row.contact.email,
      lead_status: row.lead_status,
      lead_source: row.lead_source,
      lead_owner: row.lead_owner.name,
      // Add other columns with object values to extract their strings
    }));
  };

  useEffect(() => {
    setExportData(transformDataForExport(data));
  }, []);

  const rowStyle = (rowData: any, index: any) => ({
    backgroundColor: index % 2 === 0 ? "#ffffff" : "#f2f2f2",
    borderLeft: selectedRows.find((row: any) => row?.id === rowData?.id)
      ? "2px solid #1976D2"
      : null,
  });

  const [openModal, setOpenModal] = useState<any>(false);
  function handleAddNewItem(item: any) {
    setOpenModal(false);
    setData([
      ...data,
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
        board: boards[0],
      },
    ]);
  }
  const handleRowClick = (evt: any, rowData: any) => {
    // const selectedIds = selectedRows.map((row: any) => row?.id);
    // const selectedIndex = selectedIds.indexOf(rowData?.id);
    // let newSelectedRows: any = [];

    // if (selectedIndex === -1) {
    //   newSelectedRows = [...selectedRows, rowData];
    // } else {
    //   newSelectedRows = selectedRows.filter(
    //     (row: any) => row?.id !== rowData?.id
    //   );
    // }

    setSelectedRows(evt);
  };
  return (
    <>
      <AddItem
        onClose={() => setOpenModal(false)}
        visibility={openModal}
        onSave={(item) => handleAddNewItem(item)}
      />

      <CSVLink
        data={exportData}
        filename="table_data.csv"
        className="hidden"
        ref={csvLinkRef}
        target="_blank"
      />
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
                className={`py-2 px-2 rounded-sm duration-1000 ${
                  isGrid
                    ? "bg-gray-200 text-gray-500"
                    : "bg-white text-darkBlack shadow-md shadow-gray-400 "
                }`}
              >
                <AiOutlineBars className={` h-5 w-5 `} />
              </div>
              <div
                onClick={() => setIsGrid(!isGrid)}
                className={`py-2 px-2 rounded-sm duration-1000 ${
                  isGrid
                    ? "bg-white text-darkBlack shadow-md shadow-gray-400 "
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                <AiOutlineInsertRowAbove className={` h-5 w-5`} />
              </div>
            </div>
            <button
              onClick={handleExport}
              className="mr-3 border-[1px] border-gray-200 text-darkBlack  duration-1000 m-1 py-2 px-4  rounded-md flex flex-wrap justify-between items-center"
            >
              Export
            </button>

            <button
              onClick={() => setOpenModal(true)}
              className="bg-secondary hover:bg-newBlue duration-1000 m-1 py-2 px-4 text-white rounded-md flex flex-wrap justify-between items-center"
            >
              Create Leads
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-md mx-4">
        {!isGrid ? (
          <MaterialTable
            // onRowClick={handleRowClick}
            columns={columns}
            data={data}
            style={{
              backgroundColor: "white",
            }}
            options={{
              headerStyle: {
                paddingTop: "10px",
                paddingBottom: "10px",
                position: "sticky",
                backgroundColor: "#f5f5f5",
              },
              searchFieldStyle: {
                borderBottom: "0px",
                border: "2px solid #e5e5e5",
                padding: "8px 6px",
                marginTop: "20px",
                marginBottom: "20px",
                borderRadius: "8px",
              },
              showTitle: false,
              searchFieldAlignment: "left",
              paginationType: "stepped",
              pageSize: 5,
              sorting: true,
              rowStyle: (rowData) => {
                return {
                  fontFamily: "Mulish-Regular",
                  backgroundColor: "#fefefe" ?? "#fff",
                };
              },
              selection: true,
            }}
            components={{
              Toolbar: (props) => (
                <div>
                  <MTableToolbar {...props} />
                </div>
              ),
            }}
            onSelectionChange={handleRowClick}
          />
        ) : (
          <Kanban />
        )}
      </div>
    </>
  );
}

//   editable={{
//     onRowAdd: (newData) =>
//       new Promise<void>((resolve, reject) => {
//         setTimeout(() => {
//           setData((prevState) => [...prevState, newData]);
//           resolve();
//         }, 1000);
//       }),
//     onRowUpdate: (newData, oldData) =>
//       new Promise<void>((resolve, reject) => {
//         setTimeout(() => {
//           const dataUpdate = [...data];
//           const index = oldData?.tableData.id;
//           if (index !== undefined) {
//             dataUpdate[index] = newData;
//             setData([...dataUpdate]);
//           }
//           resolve();
//         }, 1000);
//       }),
//     onRowDelete: (oldData) =>
//       new Promise<void>((resolve, reject) => {
//         setTimeout(() => {
//           const dataDelete = [...data];
//           const index = oldData?.tableData.id;
//           if (index !== undefined) {
//             dataDelete.splice(index, 1);
//             setData([...dataDelete]);
//           }
//           resolve();
//         }, 1000);
//       }),
//   }}
