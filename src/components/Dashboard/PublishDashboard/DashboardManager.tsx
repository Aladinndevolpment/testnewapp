
import Header from "./header";
import Sidebar from "./Sidebar";
import React, { useMemo, useEffect, useState } from "react";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";
import Link from "next/link";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { FiChevronDown } from "react-icons/fi";
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import { styled, alpha } from '@mui/material/styles';


import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {
  BsFunnel,
  BsColumns,
  BsClock,
  BsTelephone,
  BsChevronDown,
  BsCalendarDate,
  BsThreeDots,
  BsThreeDotsVertical,
  BsPlus,
} from "react-icons/bs";
import {
  AiOutlineInsertRowAbove,
  AiOutlineBars,
  AiOutlineMail,
  AiOutlineDown,
} from "react-icons/ai";
import { MdOutlineDateRange } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Button, Popover, Typography } from "@mui/material";
import { GoLinkExternal } from "react-icons/go";
import moment from "moment";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function DashboardManager() {
  const [filterValue, setFilterValue] = useState("");
const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [activeStatus, setActiveStatus] = useState(0);


  const status = [
    {
      title: "All",
    },
    {
      title: "Active",
    },
    {
      title: "Inactive",
    },
    
  ];
  
  const data = [
    {
      dashboard_Name :"Sales",
      status:"Published",
      owner:"Darlene Robertson",
      assigned:"EveryOne",
      created_date: new Date(),
      last_Update: new Date(),
    },
    {
      dashboard_Name :"Sales",
      status:"Scheduled",
      owner:"Darlene Robertson",
      assigned:"EveryOne",
      created_date: new Date(),
      last_Update: new Date(),
    },
    {
      dashboard_Name :"Sales",
      status:"Published",
      owner:"Darlene Robertson",
      assigned:"EveryOne",
      created_date: new Date(),
      last_Update: new Date(),
    },
  ]
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "dashboard_Name", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "dashboard_Name", //id is still required when using accessorFn instead of accessorKey
        header: "Dashboard Name",
        size: 200,
        Cell: ({ row }) => (
          <div className=" ">
            <p className="text-gray-700 font-semibold text-sm">
              {row.original.dashboard_Name}
            </p>
      
          </div>
        ),
        enableColumnFilter: true, // could disable just this column's filter
      },
      {
        accessorKey: "status", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "status", //id is still required when using accessorFn instead of accessorKey
        header: "Status",
        size: 150,
        Cell: ({ row }) => (
          <button
            className={` ${
              row.original.status == "Scheduled"
                ? " border-newBlue bg-blue-100"
                : row.original.status == "Published"
                ? " border-green-500 bg-green-100"
                : " border-gray-300 bg-gray-100"
            }
              flex justify-start items-center border-[1px] text-center py-1 px-2 rounded-full font-normal text-dark`}
          >
            <div
              className={`${
                row.original.status == "Scheduled"
                  ? " bg-newBlue"
                  : row.original.status == "Published"
                  ? " bg-green-500"
                  : " bg-gray-500"
              }

              h-1.5 w-1.5 rounded-full   mr-2 ml-2`}
            ></div>
            <span
              className={`${
                row.original.status == "Scheduled"
                  ? " text-newBlue"
                  : row.original.status == "Published"
                  ? " text-green-500"
                  : " text-gray-600"
              }  pr-3  `}
            >
              {" "}
              {row.original.status}
            </span>
          </button>
        ),
      },
      {
        accessorKey: "owner", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "owner", //id is still required when using accessorFn instead of accessorKey
        header: "Owner",
        size: 150,
        Cell: ({ row }) => (
          <p className="text-gray-700 font-medium text-[13px]">
            {row.original.owner}
          </p>
        ),
      },
      {
        id: "assigned", //id is still required when using accessorFn instead of accessorKey
        header: "Assigned",
        size: 150,
        Cell: ({ row }) => (
          <div className="flex justify-start items-center">
            {/* <MdOutlineDateRange className="text-gray-700 h-4 w-4 mr-1" /> */}
            <p className="text-gray-700 font-medium text-[13px]">
              {row.original.assigned}
            </p>
          </div>
        ),
        accessorKey: "assigned", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
      },
      {
        id: "create_Date", //id is still required when using accessorFn instead of accessorKey
        header: "Create Date",
        size: 150,
        Cell: ({ row }) => (
          <div className="flex justify-start items-center gap-2">
            <MdOutlineDateRange className="text-gray-700 h-4 w-4 mr-1" />
            <p className="text-gray-700 font-medium text-[13px]">
              {moment(row.original.create_Date).format("Do MMM YY")}
            </p>
          </div>
        ),
        accessorKey: "create_Date", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
      },
      {
        id: "last_Update", //id is still required when using accessorFn instead of accessorKey
        header: "Last Update",
        size: 150,
        Cell: ({ row }) => (
          <div className="flex justify-start items-center">
            <MdOutlineDateRange className="text-gray-700 h-4 w-4 mr-1" />
            <p className="text-gray-700 font-medium text-[13px]">
            {moment(row.original.last_Update).format("Do MMM YY")}
            </p>
          </div>
        ),
        accessorKey: "last_Update", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
      },
    ],
    []
  );

  const handleFilter = (event: any) => {
    setFilterValue(event.target.value);
  };
    
  const open = Boolean(anchorEl);
  // const id = open ? 'simple-popover' : undefined;
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="flex items-start h-full w-full">
        
        <div className="w-full bg-white ">
          <div className="border-b border-grey/40 px-9 py-5">
            <div className="flex items-center gap-3 mb-2">
              <button
                type="button"
                className="h-4 w-4 rounded-full bg-white shadow-md flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-chevron-left w-3 h-3"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <p className="text-xs">Back to Dashboard</p>
            </div>
            <h2 className="text-lg font-medium">Dashboard Manager</h2>
          </div>
          
          <div className="px-3   py-5 h-[calc(100vh-165px)] overflow-auto scrollbar-hide">
            <h1 className="text-[32px] pl-2 font-medium mb-6">2 Dashboard</h1>
            <div className="flex flex-wrap  justify-between gap-3 mb-3">
              <div className="flex flex-wrap gap-4 items-center">
               
                 <div className="dropdown dropdown-bottom  border-r-[1px] border-gray-200 pr-2 mr-2">
              <div
                tabIndex={0}
                className="border-[1px] border-gray-200 m-1 py-2 px-2  2xl:px-4 2xl:py-2  rounded-md flex flex-wrap justify-between items-center"
              >
                <BsCalendarDate className="h-4 w-4 text-darkBlack" />
                <span className="text-gray-500 font-semibold text-[12px] 2xl:text-sm px-2">
                  Date Created
                </span>
                <FiChevronDown className="h-5 w-5 text-darkBlack" />
              </div>
            </div>
                <div className="w-px bg-grey/20 h-10 hidden sm:block"></div>
                <div className="flex justify-start items-center pl-1">
              {status?.map((tab: any, index: any) => (
                <div
                  key={index}
                  onClick={() => setActiveStatus(index)}
                  className={`py-2 px-4 duration-300   ${
                    activeStatus == index
                      ? "border-[1px] border-secondary text-secondary"
                      : " border-[1px] border-gray-300 text-gray-600 "
                  } cursor-pointer rounded-md  mr-1.5 text-[12px] font-semibold flex justify-start items-center`}
                >
                  {tab.title == "All" ? null : (
                    <div
                      className={` ${
                        tab.title == "Active"
                          ? " bg-greenShade "
                          : tab.title == "Inactive"
                          ? " bg-newBlue "
                          :  null
                      } h-1 w-1 rounded-full mr-2`}
                    ></div>
                  )}

                  {tab.title}
                </div>
              ))}
            </div>
              </div>
              <div className="border-l-[1px] border-gray-200 ">
              <Link
                   href="/builder/dashboard/create"
                className="text-xs flex justify-center items-center ml-3 bg-secondary hover:bg-newBlue duration-300 m-1 py-3 px-5 2xl:px-6 text-white rounded-md "
              >
               <BsPlus className="w-4 h-4"/> New Dashboard
              </Link>
            </div>
            </div>
            <div className="bg-white shadow-md lg:px-2 rounded-lg">
          <MaterialReactTable
            columns={columns}
            data={data}
            enableStickyHeader
            enableColumnOrdering
            enableRowSelection
            initialState={{
              showGlobalFilter: false,
            }}
            renderRowActions={({ row, table }) => (
              <div className="flex justify-between items-center gap-5 pr-10">
                <button
                  onClick={() => {
                    table.setEditingRow(row);
                  }}
                >
                  <CiEdit className="h-4 w-4 text-gray-600" />
                </button>
                <button
                  onClick={() => {
                    data.splice(row.index, 1); //assuming simple data table
                    // setData([...data]);
                  }}
                >
                  <RiDeleteBin5Line className="h-4 w-4 text-gray-600" />
                </button>
                <button onClick={handleClick}>
  <BsThreeDotsVertical/>
</button>
<StyledMenu className="text-black"
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} className="flex gap-2">Select </MenuItem>
      
      </StyledMenu>
             </div>
            )}
            muiTablePaginationProps={{
              rowsPerPageOptions: [10, 50, 100, 200],
              showFirstButton: false,
              showLastButton: false,
              SelectProps: {
                native: true,
              },
              labelRowsPerPage: "Showing",
            }}
            positionPagination="top"
            enableToolbarInternalActions={false}
            positionToolbarAlertBanner="bottom"
            muiSearchTextFieldProps={{
              placeholder: `Search ${data?.length} rows`,
              sx: {
                minWidth: "400px",
                marginTop: "5px",
                marginBottom: "10px",
                padding: "1px",
                paddingTop: "2px",
                paddingBottom: "2px",
              },
              variant: "outlined",
            }}
            positionGlobalFilter="left"
            enableSorting={true}
            enableGlobalFilterModes
            enableColumnActions={false}
            enableGlobalFilter={false}
            enableFilters={false}
            enableHiding={false}
            renderTopToolbarCustomActions={({ table }: any) => {
              return (
                <>
                  <div className="m-2 w-[300px]  flex items-center  px-2 py-2 border-gray-200 border-[1px] bg-white rounded-md">
                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 font-bold  " />
                    <input
                      placeholder="Search ..."
                      value={filterValue}
                      onChange={handleFilter}
                      className="w-full bg-transparent outline-none border-none pl-2 font-fontSource font-medium text-sm"
                    />
                  </div>
                </>
              );
            }}
            positionActionsColumn="last"
            enableRowActions
            muiTableHeadCellProps={{
              sx: {
                borderRight: "2px solid #e9e9e9",
                backgroundColor: "#F5F5F5",
                paddingTop: "25x",
                paddingBottom: "25x",
                borderRadius: "5px",
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
            </div>
          </div>
        </div>
      </div>
 
  );
}
