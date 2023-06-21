import React, { useContext, useMemo, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";
import moment from "moment";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import Link from "next/link";
import ModalDerived from "@/components/Modal";
import { AiOutlineClose } from "react-icons/ai";
import AddCalendar from "./AddCalendar/AddCalendar";
import { CalendarSettingsContext } from "./CalendarListData";

interface RowData {
  [key: string]: any;
}

const CalendarListTable = () => {
  const calendarForm: any = useContext(CalendarSettingsContext);

  const [data, setData] = useState<RowData[]>([
    {
      id: "1",
      calendar_Name: "Calendar 1",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "2",
      calendar_Name: "Calendar 2",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "3",
      calendar_Name: "Calendar 3",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "4",
      calendar_Name: "Calendar 4",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
  ]);

  const handleStoreCalendar = (item: any) => {
    const newData = item;
    setData((prevValues: any) => [
      ...data,
      {
        id: "1",
        calendar_Name: item[0]?.calendarName,
        createdOn: new Date(),
        upDatedOn: new Date(),
      },
    ]);
  };

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "calendar_Name",
        id: "calendar_Name",
        header: "Calendar Name",
        size: 350,
        Cell: ({ row }) => (
          <p className="  text-gray-700 font-medium text-[15px]">
            {row.original.calendar_Name}
          </p>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "createdOn",
        id: "createdOn",
        header: "Created On",
        size: 220,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start gap-2">
            <p className="  text-gray-700 font-medium text-[12px]">
              {moment(row.original.createdOn).format("MMM DD, yyyy")}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "upDatedOn",
        id: "upDatedOn",
        header: "Updated On",
        size: 220,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start gap-2">
            <p className="  text-gray-700 font-medium text-[12px]">
              {moment(row.original.upDatedOn).format("MMM DD, yyyy")}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
    ],
    []
  );

  const [filterInput, setFilterInput] = useState("");

  const handleFilterChange = (e: any) => {
    const value = e.target.value || "";
    setFilterInput(value);
  };

  const filteredData = data.filter((row: any) =>
    row.calendar_Name.toLowerCase().includes(filterInput.toLowerCase())
  );

  return (
    <>
      {" "}
      <ModalDerived
        visibility={calendarForm?.openModal1}
        onClose={() => calendarForm?.setOpenModal1(false)}
      >
        <div className=" bg-white rounded-lg  lg:h-[85vh] pb-[5%]  overflow-y-hidden w-[100%]  md:w-[125vh] scrollbar-hide ">
          <div className=" h-[100vh]  pt-5 pb-3">
            <div className=" flex justify-between items-start border-b-[1px] pb-3 px-5">
              <div>
                <p className="text-gray-800 font-medium md:text-lg ">
                  Add New Calendar
                </p>
              </div>
              <button onClick={() => calendarForm?.setOpenModal1(false)}>
                <AiOutlineClose className="text-gray-800 h-6 w-6" />
              </button>
            </div>
            <div className="overflow-hidden ">
              <div className="w-full   bg-white  ">
                <AddCalendar
                  handleChange={(item: any) => handleStoreCalendar(item)}
                  onClose={() => calendarForm?.setOpenModal1(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </ModalDerived>
      <div>
        <div className=" border rounded-lg mb-4  muiTable">
          <MaterialReactTable
            columns={columns}
            data={filteredData}
            enableStickyHeader
            enableColumnOrdering
            enableRowSelection
            initialState={{
              showGlobalFilter: false,
            }}
            muiTablePaginationProps={{
              rowsPerPageOptions: [10, 50, 100, 200],
              showFirstButton: false,
              showLastButton: false,
              SelectProps: {
                native: true,
              },
              labelRowsPerPage: "Showing",
            }}
            renderRowActions={({ row }) => (
              <div className="flex justify-between items-center gap-5 pr-10">
                <Link href="/settings/calendar/edit-calendar">
                  <div>
                    <CiEdit className="h-4 w-4 text-gray-600" />
                  </div>
                </Link>

                <button
                  onClick={() => {
                    data.splice(row.index, 1); //assuming simple data table
                    // setData([...data]);
                  }}
                >
                  <RiDeleteBin5Line className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            )}
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
                      placeholder="Search Calendar"
                      value={filterInput}
                      onChange={handleFilterChange}
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
                color: "#47494b",
                paddingTop: "15px",
                paddingBottom: "15px",
              },
            }}
            muiTablePaperProps={{
              elevation: 0,
              sx: {
                padding: "",
              },
            }}
            muiTableProps={{
              sx: { border: "2px solid #f2f2f2", borderRadius: "5px" },
            }}
          />
        </div>
      </div>{" "}
    </>
  );
};

export default CalendarListTable;
