import { useRef, useState, useMemo } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsColumns } from "react-icons/bs";
import { HiChevronDown } from "react-icons/hi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import MaterialReactTable, {
  MRT_RowSelectionState,
  type MRT_ColumnDef,
} from "material-react-table";
import { MenuItem } from "@mui/material";
// import { tableData } from "./Data";
import { useRouter } from "next/router";
import AddCampaign from "./AddCampaign";

interface RowData {
  [key: string]: any;
}

const CampaignTable = () => {
  const [tableData, setTableData] = useState<any>([
    {
      id: "1",
      campaign_name: "Design Asset Promo",
      owner: {
        name: "Darlene Robertson",
        image: "",
      },
      goals: "$100.000",
      budget: "$10.000",
      dateCreated: new Date(),
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: "2",
      campaign_name: "Analysing the Witches",
      owner: {
        name: "Darlene Robertson",
        image: "",
      },
      goals: "$100.000",
      budget: "$10.000",
      dateCreated: new Date(),
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: "3",
      campaign_name: "Exam Skills",
      owner: {
        name: "Darlene Robertson",
        image: "",
      },
      goals: "$100.000",
      budget: "$10.000",
      dateCreated: new Date(),
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: "4",
      campaign_name: "Guilt in Macbeth",
      owner: {
        name: "Darlene Robertson",
        image: "",
      },
      goals: "$100.000",
      budget: "$10.000",
      dateCreated: new Date(),
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: "5",
      campaign_name: "English Exam Practise",
      owner: {
        name: "Darlene Robertson",
        image: "",
      },
      goals: "$100.000",
      budget: "$10.000",
      dateCreated: new Date(),
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: "6",
      campaign_name: "Muscular Endurance",
      owner: {
        name: "Darlene Robertson",
        image: "",
      },
      goals: "$100.000",
      budget: "$10.000",
      dateCreated: new Date(),
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ]);

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "campaign_name",
        id: "campaign_name",
        header: "Campaign Name",
        size: 100,
        Cell: ({ row }) => (
          <div>
            <p className="  text-gray-700 font-medium text-[15px]">
              {row.original.campaign_name}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "owner",
        id: "owner",
        header: "Owner",
        size: 200,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start gap-2">
            <Image
              src={require("../../../../../public/images/avatar/yellowdog.jpg")}
              alt=""
              className="h-5 w-5 rounded-full"
            />
            <p className="  text-gray-700 font-medium text-[12px]">
              {row.original.owner.name}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "goals",
        id: "goals",
        header: "Goals",
        size: 100,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start">
            <p className="  text-gray-700 font-medium text-[12px]">
              {row.original.goals}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "budget",
        id: "budget",
        header: "Budget",
        size: 100,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start">
            <p className="  text-gray-700 font-medium text-[12px]">
              {row.original.budget}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "dateCreated",
        id: "dateCreated",
        header: "Date Created",
        size: 100,
        Cell: ({ row }) => (
          <div className="flex justify-start items-start gap-2">
            <AiOutlineCalendar className="h-4 w-4" />
            <p className="  text-gray-700 font-medium text-[12px]">
              {moment(row.original.dateCreated).format("ddd DD, yyyy")}
            </p>
          </div>
        ),
        enableColumnFilter: true,
      },
    ],
    []
  );
  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

  //date
  const [selectedDate, setSelectedDate] = useState(null);
  const datepickerRef: any = useRef(null);
  const handleButtonClick = () => {
    datepickerRef.current.setOpen(true);
  };
  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  //campaignOwner
  const [selectedOwner, setSelectedOwner] = useState(null);
  //budget Ranger
  const [budgetRange, setBudgetRange] = useState(null);

  const [filterInput, setFilterInput] = useState({
    value: "",
    type: "",
  });

  const handleFilterChange = (e: any, type: any) => {
    setFilterInput({
      ...filterInput,
      value: e,
      type: type,
    });
  };

  const filteredData = tableData.filter((row: any) => {
    if (filterInput.type === "search") {
      const value = filterInput.value.toLowerCase();
      return (
        row.campaign_name.toLowerCase().includes(value) ||
        row.owner.name.toLowerCase().includes(value) ||
        row.goals.toLowerCase().includes(value) ||
        row.budget.toLowerCase().includes(value) ||
        row.dateCreated.toLowerCase().includes(value)
      );
    }
    return true;
  });
  const router = useRouter();

  const [openModal, setOpenModal] = useState<any>(false);
  function handleAddNewItem(item: any) {
    setOpenModal(false);
    setTableData([
      ...tableData,
      {
        id: tableData?.length + 1,
        campaign_name: item.campaign_name,
        owner: {
          name: item.owner_name,
          image: "",
        },
        goals: item.goals,
        budget: item.budget,
        dateCreated: new Date(),
        description: item.description,
      },
    ]);
  }

  return (
    <>
      <AddCampaign
        onClose={() => setOpenModal(false)}
        visibility={openModal}
        onSave={(item) => {
          handleAddNewItem(item);
        }}
      />

      <div className="px-4 border border-b-0 rounded-lg pb-10">
        {/* Section first */}

        <div className="w-full h-16  flex items-center   ">
          <h1 className="text-3xl font-semibold  pt-3">Campaign</h1>
        </div>

        {/* Second Section */}
        <div className="w-full h-20  flex items-center justify-between">
          <div>
            <form className="flex  gap-2 font-semibold items-center text-sm text-slate-600 ">
              <div className="dropdown dropdown-bottom border rounded-md py-2 px-2 ">
                <div
                  tabIndex={0}
                  onClick={handleButtonClick}
                  className="flex justify-between items-center"
                >
                  <AiOutlineCalendar className="h-4 w-4" />
                  <span className="text-[12px] text-gray-600 px-2">
                    {selectedDate == null
                      ? " Date created"
                      : moment(selectedDate).format("MM-DD-yyyy")}
                  </span>
                  <HiChevronDown className="h-4 w-4" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-white rounded-box w-40 ml-[-10px]"
                >
                  <DatePicker
                    ref={datepickerRef}
                    selected={selectedDate}
                    onChange={handleDateChange}
                    onClickOutside={() => datepickerRef.current.setOpen(false)}
                  />
                </ul>
              </div>

              <div className="dropdown dropdown-bottom border rounded-md py-2 px-2">
                <div tabIndex={1} className="flex justify-between items-center">
                  <AiOutlineCalendar className="h-4 w-4" />
                  <span className="text-[12px] text-gray-600 px-2">
                    {selectedOwner == null ? "Campaign Owner" : selectedOwner}
                  </span>
                  <HiChevronDown className="h-4 w-4" />
                </div>
                <ul
                  tabIndex={1}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52  ml-[-10px]"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>

              <div className="dropdown dropdown-bottom border rounded-md py-2 px-2">
                <div tabIndex={1} className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-600 px-2">
                    {budgetRange == null ? "Budget range" : budgetRange}
                  </span>
                  <HiChevronDown className="h-4 w-4" />
                </div>
                <ul
                  tabIndex={1}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52  ml-[-10px]"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </form>
          </div>

          {/*  Button */}
          <div className="w-full  lg:w-auto flex justify-between items-center mb-2">
            <div className="m-1 ml-2 py-2 px-2  2xl:px-4 rounded-md flex flex-wrap justify-between items-center">
              <BsColumns className="h-4 w-4 text-gray-500   mr-2" />
              <span className="text-gray-700 font-semibold text-sm ">
                Manage Column
              </span>
            </div>

            <div className="border-l-[1px] border-gray-200 ">
              <button
                onClick={() => setOpenModal(true)}
                className="text-xs flex justify-center items-center ml-3 bg-secondary hover:bg-newBlue duration-300 m-1 py-3 px-5 2xl:px-6 text-white rounded-md "
              >
                Create Campaign
              </button>
            </div>
          </div>
        </div>

        {/* Third Section table */}
        <div className="bg-white border rounded-md">
          <MaterialReactTable
            columns={columns}
            data={filteredData}
            enableStickyHeader
            enableColumnOrdering
            enableRowSelection
            initialState={{
              showGlobalFilter: false,
            }}
            positionToolbarAlertBanner="bottom"
            muiSearchTextFieldProps={{
              placeholder: `Search ${tableData?.length} rows`,
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
                  <div className="m-2 w-[300px] flex items-center  px-2 py-2 border-gray-200 border-[1px] bg-white rounded-md">
                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 font-bold  " />
                    <input
                      placeholder="Search Campaign"
                      value={filterInput.value}
                      onChange={(e) =>
                        handleFilterChange(e.target.value, "search")
                      }
                      className="w-full bg-transparent outline-none border-none pl-2 font-fontSource font-medium text-sm"
                    />
                  </div>
                </>
              );
            }}
            positionActionsColumn="last"
            enableRowActions
            renderRowActionMenuItems={({ row }) => [
              <MenuItem key="edit" onClick={() => console.info("Edit")}>
                Edit
              </MenuItem>,
              <MenuItem key="delete" onClick={() => console.info("Delete")}>
                Delete
              </MenuItem>,
            ]}
            muiTableBodyRowProps={({ row }) => ({
              //implement row selection click events manually
              onClick: () => router.push(`/marketing/${row.original.id}`),
              selected: rowSelection[row.id],
              sx: {
                cursor: "pointer",
              },
            })}
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
      </div>
    </>
  );
};

export default CampaignTable;