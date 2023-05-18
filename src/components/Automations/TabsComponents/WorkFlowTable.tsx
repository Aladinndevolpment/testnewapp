import React, { useState } from "react";
import MaterialTable, { Column, MTableToolbar } from "material-table";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";

interface RowData {
  [key: string]: any;
}

export default function WorkFlowTable() {
  const [columns, setColumns] = useState<Column<RowData>[]>([
    {
      title: "WORKFLOW NAME",
      field: "workflow_name",
      headerStyle: {
        border: "1px solid #dbdbdb",
      },
      render: (rowData) => (
        <div className="w-[210px]">
          <p className="font-semibold text-gray-800  text-base">
            {rowData.workflow_name}
          </p>
        </div>
      ),
    },
    {
      title: "Status",
      field: "status",
      headerStyle: {
        border: "1px solid #dbdbdb",
      },
      render: (rowData) => (
        <div>
          <button
            className={` ${
              rowData.status == "Inactive"
                ? " border-secondary bg-red-100"
                : rowData.status == "Active"
                ? " border-green-500 bg-green-100"
                : " border-gray-300 bg-gray-100"
            }  
              flex justify-start items-center border-[1px] text-center py-1 px-2 rounded-full font-normal text-dark`}
          >
            <div
              className={`${
                rowData.status == "Inactive"
                  ? " bg-secondary"
                  : rowData.status == "Active"
                  ? " bg-green-500"
                  : " bg-gray-500"
              }
              
              h-1.5 w-1.5 rounded-full   mr-2 ml-2`}
            ></div>
            <span
              className={`${
                rowData.status == "Inactive"
                  ? " text-secondary"
                  : rowData.status == "Active"
                  ? " text-green-500"
                  : " text-gray-600"
              }  pr-3  `}
            >
              {" "}
              {rowData.status}
            </span>
          </button>
        </div>
      ),
    },
    {
      title: "Modules",
      field: "modules",
      headerStyle: {
        border: "1px solid #dbdbdb",
      },
      render: (rowData) => (
        <div>
          <p className="font-semibold text-gray-800  text-sm">
            {rowData.modules}
          </p>
        </div>
      ),
    },
    {
      title: "Total Enrolled",
      field: "total_enrolled",
      headerStyle: {
        border: "1px solid #dbdbdb",
      },
      render: (rowData) => (
        <div>
          <p className="font-semibold text-gray-800  text-sm">
            {rowData.total_enrolled}
          </p>
        </div>
      ),
    },
    {
      title: "Active Enrolled",
      field: "active_enrolled",
      headerStyle: {
        border: "1px solid #dbdbdb",
      },
      render: (rowData) => (
        <div>
          <p className="font-semibold text-gray-800  text-sm">
            {rowData.active_enrolled}
          </p>
        </div>
      ),
    },
    {
      title: "Last Activity",
      field: "last_activity",
      headerStyle: {
        border: "1px solid #dbdbdb",
      },
      render: (rowData) => (
        <div>
          <p className="font-semibold text-gray-800 text-sm">
            {rowData.last_activity.dateTime}
          </p>
          <p className=" text-gray-600 text-xs">
            {rowData.last_activity.by_user}
          </p>
        </div>
      ),
    },
  ]);

  const [data, setData] = useState<RowData[]>([
    {
      workflow_name: "Auto lead reply",
      status: "Active",
      modules: "Deals",
      total_enrolled: "46",
      active_enrolled: "12%",
      last_activity: {
        dateTime: "Yesterday",
        by_user: "By Esther Howard",
      },
    },
    {
      workflow_name: "Automatic lead reply",
      status: "Inactive",
      modules: "Deals",
      total_enrolled: "46",
      active_enrolled: "12%",
      last_activity: {
        dateTime: "March 12 2023",
        by_user: "By Esther Howard",
      },
    },
    {
      workflow_name: "Automatic lead reply",
      status: "Draft",
      modules: "Deals",
      total_enrolled: "46",
      active_enrolled: "12%",
      last_activity: {
        dateTime: "March 12 2023",
        by_user: "By Esther Howard",
      },
    },
    {
      workflow_name: "Auto lead reply",
      status: "Active",
      modules: "Deals",
      total_enrolled: "46",
      active_enrolled: "12%",
      last_activity: {
        dateTime: "Yesterday",
        by_user: "By Esther Howard",
      },
    },
    {
      workflow_name: "Automatic lead reply",
      status: "Inactive",
      modules: "Deals",
      total_enrolled: "46",
      active_enrolled: "12%",
      last_activity: {
        dateTime: "March 12 2023",
        by_user: "By Esther Howard",
      },
    },
    {
      workflow_name: "Auto lead reply",
      status: "Active",
      modules: "Deals",
      total_enrolled: "46",
      active_enrolled: "12%",
      last_activity: {
        dateTime: "Yesterday",
        by_user: "By Esther Howard",
      },
    },
  ]);

  //   const rowStyle: any = (rowData: any, index: any) => ({
  //     backgroundColor: index % 2 === 0 ? "#ffffff" : "#f2f2f2",
  //     borderLeft: selectedRows.find((row: any) => row?.id === rowData?.id)
  //       ? "2px solid #1976D2"
  //       : null,
  //   });

  return (
    <div>
      <div className="px-2 lg:px-8 py-5">
        <div className="flex flex-wrap lg:flex-nowrap justify-start lg:justify-between items-center">
          <div className="w-full lg:w-auto flex justify-between items-center mb-2">
            <div className="dropdown dropdown-bottom mr-1">
              <label
                tabIndex={0}
                className="border-[1px] border-gray-200 m-1 py-2 px-2 rounded-md flex flex-wrap justify-between items-center"
              >
                <span className="font-semibold text-sm ">All Status</span>
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
                <span className="font-semibold text-sm ">Creator</span>
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
                <span className="font-semibold text-sm ">Type</span>
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
          </div>

          <div className="w-full  lg:w-auto flex justify-between items-center mb-2">
            <button
              // onClick={handleExport}
              className="mr-3 border-[1px] border-gray-200 text-darkBlack  duration-1000 m-1 py-2 px-4  rounded-md flex flex-wrap justify-between items-center"
            >
              Export
            </button>
            <Link
              href="/workflow/new-workflow"
              className="bg-secondary hover:bg-newBlue duration-1000 m-1 py-2 px-4 text-white rounded-md flex flex-wrap justify-between items-center"
            >
              Create Workflow
            </Link>
          </div>
        </div>
        <div className="bg-white shadow-md lg:px-4 py-5 rounded-lg">
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
              actionsCellStyle: {
                backgroundColor: "red",
                border: "2px solid black",
              },
              showTitle: false,
              searchFieldAlignment: "left",
              //   paginationType: "stepped",
              pageSize: 5,
              sorting: true,
              selection: true,
              selectionProps: { backgroundColor: "red" },
            }}
            components={{
              Toolbar: (props) => (
                <div>
                  <MTableToolbar {...props} />
                </div>
              ),
            }}
            // onSelectionChange={handleRowClick}
          />
        </div>
      </div>
    </div>
  );
}
