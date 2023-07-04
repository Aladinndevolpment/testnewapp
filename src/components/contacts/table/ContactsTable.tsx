import Image from "next/image";
import { createContext, useEffect, useMemo, useRef, useState } from "react";
import { FiChevronDown, FiMail, FiSettings } from "react-icons/fi";
import {
  BsFunnel,
  BsColumns,
  BsClock,
  BsTelephone,
  BsChevronDown,
  BsThreeDots,
} from "react-icons/bs";
import {
  AiOutlineInsertRowAbove,
  AiOutlineBars,
  AiOutlineMail,
} from "react-icons/ai";
import moment from "moment";
import AddContact from "./AddContact";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";
import { IoMailOutline } from "react-icons/io5";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import { Pill } from "../../UI/Pill";
import { Popper } from "@mui/material";
import {
  IContact,
  IAddContactData,
  IContactTag,
  ILeadSource,
} from "../Interfaces";
import { useRouter } from "next/router";
import axios from "axios";
import ContactFilter from "@/components/Contact/Filter";
import Link from "next/link";
import { Client, HydrationProvider } from "react-hydration-provider";
import { MdPhoneCallback } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface IContactsTableProps {
  contactsData: IContact[];
}

async function addContactToServer(
  addContactData: IAddContactData
): Promise<boolean> {
  let isSuccessful = true;
  const token = process.env.NEXT_PUBLIC_API_TOKEN;

  try {
    for (let i = 0; i < addContactData.tags.length; i++) {
      console.log("Doing this for tag: " + addContactData.tags[i].tagID);
      if (addContactData.tags[i].tagID !== "-1") continue;
      const tagResult = await axios.post(
        "/api/tags",
        {
          locationID: process.env.NEXT_PUBLIC_LOCATION_ID,
          content: addContactData.tags[i].content,
          tagType: "CONTACT",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(tagResult);
      addContactData.tags[i].tagID = tagResult.data.tagID;
    }

    for (let i = 0; i < addContactData.leadSources.length; i++) {
      console.log(
        "Doing this for lead source: " +
          addContactData.leadSources[i].leadSourceID
      );
      if (addContactData.leadSources[i].leadSourceID !== "-1") continue;
      const leadSourceResult = await axios.post(
        "/api/lead-sources",
        {
          locationID: process.env.NEXT_PUBLIC_LOCATION_ID,
          content: addContactData.leadSources[i].content,
          color: "CONTACT",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(leadSourceResult);
      addContactData.leadSources[i].leadSourceID =
        leadSourceResult.data.leadSourceID;
    }

    const contactResult = await axios.post(
      "/api/contacts",
      {
        locationID: process.env.NEXT_PUBLIC_LOCATION_ID,
        ownerUserID: addContactData.owner.id,
        fullName: addContactData.fullName,
        emailAddress: addContactData.emailAddress,
        phoneNumber: addContactData.phoneNumber,
        status: addContactData.status,
        contactType: addContactData.contactType,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const contactID = contactResult.data.contactID;

    for (let i = 0; i < addContactData.tags.length; i++) {
      await axios.post(
        `/api/contacts/${contactID}/tags`,
        {
          contactID: contactID,
          tagID: addContactData.tags[i].tagID,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }

    for (let i = 0; i < addContactData.leadSources.length; i++) {
      await axios.post(
        `/api/contacts/${contactID}/lead-sources`,
        {
          contactID: contactID,
          leadSourceID: addContactData.leadSources[i].leadSourceID,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }
  } catch (error) {
    console.log(error);
    isSuccessful = false;
  }
  console.log("isSuccessful", isSuccessful);
  return isSuccessful;
}

export default function ContactsTable({ contactsData }: IContactsTableProps) {
  const [isGrid, setIsGrid] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const router = useRouter();

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "fullName",
        id: "fullName",
        header: "Name",
        Cell: ({ row }) => (
          <div
            className="font-main flex items-center cursor-pointer"
            onClick={() => {
              router.push("/contacts/" + row.original.id);
            }}
          >
            <div className="flex-shrink-0 h-12 w-12">
              <Image
                src={require("../../../../public/images/avatar/yellowdog.jpg")}
                width={50}
                height={50}
                alt=""
                className="rounded-full w-12 h-12 object-cover"
              />
            </div>
            <div className="ml-4">
              <div className="text font-medium">{row.original.fullName}</div>
              <div className="text-sm font-light">{row.original.addedOn}</div>
            </div>
          </div>
        ),
        enableColumnFilter: true,
      },
      {
        accessorKey: "emailAddress",
        id: "emailAddress",
        header: "Email Address",
        Cell: ({ row }) =>
          row.original.emailAddress !== "" && (
            <div className="font-main flex items-center">
              <div className="flex-shrink-0 mt-0.5">
                <IoMailOutline className="w-6 h-6" />
              </div>
              <div className="ml-3">
                <div className="text-sm font-regular">
                  {row.original.emailAddress}
                </div>
              </div>
            </div>
          ),
      },
      {
        accessorKey: "phoneNumber",
        id: "phoneNumber",
        header: "Phone Number",
        Cell: ({ row }) =>
          row.original.phoneNumber !== "" && (
            <div className="font-main flex items-center">
              <div className="flex-shrink-0 mt-0.5">
                <BsTelephone className="w-5 h-5" />
              </div>
              <div className="ml-3">
                <div className="text-sm font-regular">
                  {row.original.phoneNumber}
                </div>
              </div>
            </div>
          ),
      },
      {
        accessorKey: "status", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        id: "status", //id is still required when using accessorFn instead of accessorKey
        header: "Status",
        Cell: ({ row }) => (
          <div className="font-main w-full">
            <button
              className=" border-gray-300 bg-gray-100
              flex justify-start items-center border-[1px] text-center py-1 px-2 rounded-full font-normal text-dark"
            >
              <div className=" bg-gray-500 h-1.5 w-1.5 rounded-full   mr-2 ml-2"></div>
              <span className="text-gray-600 pr-3">{row.original.status}</span>
            </button>
          </div>
        ),
      },
      {
        accessorKey: "owner",
        id: "owner", //id is still required when using accessorFn instead of accessorKey
        header: "Owner",
        Cell: ({ row }) => (
          <div className="font-main flex items-center w-full space-x-2">
            <div className="">
              <div className="avatar">
                <div className="w-12">
                  <Image
                    src={require("../../../../public/images/avatar/yellowdog.jpg")}
                    width={50}
                    height={50}
                    alt=""
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <p className="font-medium font-main">
              {row.original.owner.fullName}
            </p>
          </div>
        ),
      },
      {
        accessorKey: "leadSources",
        id: "leadSources",
        header: "Lead Source",
        size: 150,
        Cell: ({ row }) => {
          const [anchorEl, setAnchorEl] = useState<any>(null);
          const [open, setOpen] = useState(false);

          const value = row.original.leadSources;
          const handleLeadSources = () => {
            if (value.length > 2) {
              setOpen(!open);
            }
          };

          return (
            <div
              className="flex items-center"
              ref={setAnchorEl}
              onClick={() => handleLeadSources()}
              onMouseEnter={() => handleLeadSources()}
              onMouseLeave={() => setOpen(false)}
            >
              {value.slice(0, 2).map((leadSource: ILeadSource, i: number) => (
                <Pill
                  bgColor={"red-100"}
                  textColor={"red-800"}
                  value={leadSource.content}
                  key={`leadSource-${i}`}
                />
              ))}

              {value.length > 2 && (
                <Pill
                  bgColor={"red-100"}
                  textColor={"red-800"}
                  value={`+${value.length - 2}`}
                  sx={{ mr: 1, mb: 1 }}
                />
              )}
              <div>
                <Popper open={open} anchorEl={anchorEl} placement="bottom">
                  <div className="p-4 rounded-lg shadow-sm border border-gray-100 bg-white max-h-40 max-w-60 overflow-y-scroll">
                    {value
                      .slice(2)
                      .map((leadSource: ILeadSource, i: number) => (
                        <Pill
                          bgColor={"red-100"}
                          textColor={"red-800"}
                          value={leadSource.content}
                          key={`extra-leadSource-${i}`}
                        />
                      ))}
                  </div>
                </Popper>
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: "tags",
        id: "tags",
        header: "Tags",
        size: 150,
        Cell: ({ row }) => {
          const [anchorEl, setAnchorEl] = useState<any>(null);
          const [open, setOpen] = useState(false);

          const value = row.original.tags;
          const handleTags = () => {
            if (value.length > 2) {
              setOpen(!open);
            }
          };

          return (
            <div
              className="flex items-center"
              ref={setAnchorEl}
              onClick={() => handleTags()}
              onMouseEnter={() => handleTags()}
              onMouseLeave={() => setOpen(false)}
            >
              {value.slice(0, 2).map((tag: IContactTag, i: number) => (
                <Pill
                  bgColor={"blue-100"}
                  textColor={"blue-800"}
                  value={tag.content}
                  key={`tag-${i}`}
                />
              ))}

              {value.length > 2 && (
                <Pill
                  bgColor={"blue-100"}
                  textColor={"blue-800"}
                  value={`+${value.length - 2}`}
                  sx={{ mr: 1, mb: 1 }}
                />
              )}
              <div>
                <Popper open={open} anchorEl={anchorEl} placement="bottom">
                  <div className="p-4 rounded-lg shadow-sm border border-gray-100 bg-white max-h-40 max-w-60 overflow-y-scroll">
                    {value.slice(2).map((tag: IContactTag, i: number) => (
                      <Pill
                        bgColor={"blue-100"}
                        textColor={"blue-800"}
                        value={tag.content}
                        key={`extra-tag-${i}`}
                      />
                    ))}
                  </div>
                </Popper>
              </div>
            </div>
          );
        },
      },
    ],
    []
  );

  const [data, setData] = useState<IContact[]>([...contactsData]);
  const [openModal, setOpenModal] = useState<any>(false);
  async function handleAddNewItem(item: IAddContactData) {
    let isSuccessful = true;
    await addContactToServer(item).then((res) => {
      isSuccessful = res;
    });
    if (!isSuccessful) return false;
    setOpenModal(false);
    setData([
      ...data,
      {
        id: "1",
        fullName: item.fullName,
        emailAddress: item.emailAddress,
        phoneNumber: item.phoneNumber,
        status: item.status,
        owner: item.owner,
        tags: item.tags,
        contactType: item.contactType,
        leadSources: item.leadSources,
        addedOn: "2023-04-01",
      },
    ]);

    return true;
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
    return item;
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
      "Name",
      "Email Address",
      "Phone Number",
      "Status",
      "Lead Owner",
      "Tags",
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

  const [openManageColumnModal, setOpenManageColumnModal] = useState(false);
  //modal1
  const [isFlyOutVisible, setIsFlyOutVisible] = useState(false);

  const [filterValue, setFilterValue] = useState("");

  const handleFilter = (event: any) => {
    setFilterValue(event.target.value);
  };

  const filteredData = data.filter((category: any) => {
    return category.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  return (
    <>
      <AddContact
        onClose={() => setOpenModal(false)}
        visibility={openModal}
        onSave={async (item: IAddContactData) => {
          return await handleAddNewItem(item);
        }}
      />

      <div
        className={`w-full h-screen overflow-y-scroll  scrollbar-hide fixed right-0 top-0  z-50 transition-all bg-black overflow-hidden ${
          isFlyOutVisible
            ? "translate-x-0 opacity-100 bg-opacity-30"
            : "translate-x-[100%] opacity-0 bg-opacity-0"
        }`}
      >
        <div
          className="absolute h-full w-full z-40 "
          onClick={() => setIsFlyOutVisible(false)}
        ></div>
        <div className="bg-white w-full md:w-[50%] lg:w-[40%] absolute right-0 min-h-full h-auto z-50 overflow-y-scroll scrollbar-hide">
          <ContactFilter
            onClose={() => {
              setIsFlyOutVisible(false);
            }}
            updateData={(item: any) => {
              console.log(item);
            }}
          />
        </div>
      </div>

      <div className="font-main px-4 bg-white pb-4">
        <h1 className="text-2xl font-semibold text-dark mb-5 pt-5">
          {data?.length} Contacts
        </h1>
        <div className="flex flex-wrap lg:flex-nowrap justify-start lg:justify-between items-center">
          <div className="w-full lg:w-auto flex justify-between items-center mb-2">
            <div className="dropdown dropdown-bottom mr-1">
              <label
                tabIndex={0}
                className="border-[1px] border-gray-200 m-1 py-2 px-2  2xl:px-4 2xl:py-2  rounded-md flex flex-wrap justify-between items-center"
              >
                <span className="text-gray-500 font-semibold text-[12px] 2xl:text-sm">
                  All Leads
                </span>
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
                className="border-[1px] border-gray-200 m-1 py-2 px-2  2xl:px-4 2xl:py-2 rounded-md flex flex-wrap justify-between items-center"
              >
                <span className="text-gray-500 font-semibold text-[12px] 2xl:text-sm">
                  Create date
                </span>
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
                className="border-[1px] border-gray-200 m-1 py-2 px-2  2xl:px-4 2xl:py-2 rounded-md flex flex-wrap justify-between items-center"
              >
                <span className="text-gray-500 font-semibold text-[12px] 2xl:text-sm">
                  Contact Owner
                </span>
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

            <button
              onClick={() => setIsFlyOutVisible(!isFlyOutVisible)}
              tabIndex={2}
              className="border-[1px] border-gray-200 m-1 py-2 px-2  2xl:px-4 2xl:py-2 rounded-md flex flex-wrap justify-between items-center"
            >
              <BsFunnel className="h-5 w-5 text-darkBlack mt-1 mr-2" />
              <span className="text-gray-500 font-semibold text-[12px] 2xl:text-sm">
                More Filter
              </span>
            </button>
          </div>

          <div className="w-full  lg:w-auto flex justify-between items-center mb-2">
            <div className="cursor-pointer m-1 ml-2 py-2 px-2  2xl:px-4 rounded-md flex flex-wrap justify-between items-center">
              <Link href="#">
                <FiSettings className="h-4 w-4 text-darkBlack   mr-2" />
              </Link>
              <span
                onClick={() => setOpenManageColumnModal(true)}
                className="text-gray-700 font-semibold text-sm "
              >
                Manage Column
              </span>
            </div>

            <div className="  bg-gray-200 rounded-md mr-4 flex justify-between items-center">
              <div
                onClick={() => setIsGrid(!isGrid)}
                className={`py-2 px-2 rounded-sm duration-300 ${
                  isGrid
                    ? "bg-gray-200 text-gray-500"
                    : "bg-white text-darkBlack shadow shadow-gray-300 "
                }`}
              >
                <AiOutlineBars className={` h-5 w-5 `} />
              </div>
              <div
                onClick={() => setIsGrid(!isGrid)}
                className={`py-2 px-2 rounded-sm duration-300 ${
                  isGrid
                    ? "bg-white text-darkBlack shadow shadow-gray-300 "
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                <AiOutlineInsertRowAbove className={` h-5 w-5`} />
              </div>
            </div>
            <button
              onClick={handleExportData}
              className="mr-3 border-[1px] border-gray-300 text-darkBlack  duration-300 m-1 py-1.5 px-4  rounded-md flex flex-wrap justify-between items-center"
            >
              Export
            </button>

            <div className="border-l-[1px] border-gray-200 ">
              <button
                onClick={() => setOpenModal(true)}
                className="text-xs flex justify-center items-center ml-3 bg-secondary hover:bg-newBlue duration-300 m-1 py-3 px-5 2xl:px-6 text-white rounded-md "
              >
                Create Leads <BsChevronDown className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="bg-white shadow-md rounded-md mx-2">
          <div className="bg-white shadow-md lg:px-2 pb-5 rounded-lg">
            <MaterialReactTable
              columns={columns}
              data={filteredData}
              enableStickyHeader
              enableColumnOrdering
              enableRowSelection
              initialState={{
                showGlobalFilter: false,
                columnPinning: {
                  left: ["lead_name"],
                },
              }}
              positionPagination="top"
              enableToolbarInternalActions={false}
              positionToolbarAlertBanner="bottom"
              positionActionsColumn="last"
              enableRowActions
              renderRowActions={({ row, table }) => (
                <div className="flex justify-between items-center gap-5 pr-10">
                  <button
                    onClick={() =>
                      window.open(
                        `mailto:kevinvandy@mailinator.com?subject=Hello ${row.original.firstName}!`
                      )
                    }
                  >
                    <FiMail className="h-4 w-4 text-gray-600" />
                  </button>
                  <button
                    onClick={() => {
                      table.setEditingRow(row);
                    }}
                  >
                    <MdPhoneCallback className="h-4 w-4 text-gray-600" />
                  </button>

                  <div className="dropdown">
                    <label tabIndex={0}>
                      <BsThreeDots className="h-4 w-4 text-gray-600" />
                    </label>
                    <div
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-16"
                    >
                      <div className="flex justify-start items-center gap-3">
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
                            setData([...data]);
                          }}
                        >
                          <RiDeleteBin5Line className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              enableSorting={true}
              // enableGlobalFilterModes
              enableColumnActions={false}
              enableGlobalFilter={false}
              enableFilters={false}
              enableHiding={false}
              renderTopToolbarCustomActions={({ table }) => {
                return (
                  <>
                    <div className="mb-2 w-[300px] flex items-center shadow px-2 py-2 border-gray-200 border-[1px] bg-white rounded-md">
                      <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 font-bold  " />
                      <input
                        placeholder="Search leads..."
                        value={filterValue}
                        onChange={handleFilter}
                        className="w-full bg-transparent outline-none border-none pl-2 font-fontSource font-medium text-sm"
                      />
                    </div>
                  </>
                );
              }}
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
      </div>
    </>
  );
}
