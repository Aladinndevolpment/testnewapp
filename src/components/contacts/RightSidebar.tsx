import { ChevronDownIcon } from "@heroicons/react/24/outline";
import AddIcon from "@mui/icons-material/Add";
import { BsFillPencilFill, BsCashCoin } from "react-icons/bs";
import { MdOutlineAttachment, MdPayment } from "react-icons/md";
import { useState, useMemo, useCallback } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useTable } from "react-table";
import moment from "moment";
import { AiOutlineFile, AiOutlinePlus } from "react-icons/ai";
import { useDropzone } from "react-dropzone";
import { GoPlus } from "react-icons/go";
import { ImAttachment } from "react-icons/im";
import { CgAttachment } from "react-icons/cg";

export default function RightSidebar() {
  const [billingExpanded, setBillingExpanded] = useState(false);
  const [ordersExpanded, setOrdersExpanded] = useState(false);
  const [icdCodesExpanded, setIcdCodesExpanded] = useState(false);
  const [financialsExpanded, setFinancialsExpanded] = useState(false);
  const [attachmentExpanded, setAttachmentExpanded] = useState(false);

  const [formValues, setFormValues] = useState<any>({
    image: null,
  });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Do something with the files
      setFormValues({
        ...formValues,

        file: acceptedFiles[0],
      });
    },
    [formValues, setFormValues]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "file/*": [] },
    multiple: false,
  });

  // console.log(formValues);

  const [insurances, setInsurances] = useState<any[]>([
    {
      name: "United Health Care Medicare",
      logo: "https://logosandtypes.com/wp-content/uploads/2020/08/United-Healthcare.png",
      address: "PO BOX 31362 SALT LAKE CITY, UT 84131",
      startDate: "5/23",
      endDate: "5/24",
      deductible: "$1500",
      coPay: "$35",
      coInsurance: "80/20",
    },
    {
      name: "Blue Cross Blue Shield",
      logo: "https://media2.sevendaysvt.com/sevendaysvt/imager/u/original/17975914/economy1-5.jpg",
      address: "225 North Michigan Ave. Chicago, IL 60601",
      startDate: "1/22",
      endDate: "3/23",
      deductible: "$5000",
      coPay: "$25",
      coInsurance: "80/20",
    },
  ]);
  const [ordersDate, setOrdersDate] = useState(moment().format("YYYY-MM-DD"));
  const [icdCodes, setIcdCodes] = useState<any[]>([
    "E66",
    "E78.2",
    "I10",
    "K21.9",
    "K2",
    "M17.11",
    "M17.12",
    "M17.2",
    "M23.0",
    "M23.1",
    "M23.2",
    "M25.521",
    "M25.522",
    "M25.523",
    "M54.5",
    "M54.6",
    "M54.9",
    "M62.838",
    "M62.839",
    "M65.4",
  ]);

  const [financials, setFinancials] = useState<any>({
    payers: [
      {
        name: "United Health Care Medicare",
        logo: "https://logosandtypes.com/wp-content/uploads/2020/08/United-Healthcare.png",
      },
      {
        name: "BCBS FL",
        logo: "https://media2.sevendaysvt.com/sevendaysvt/imager/u/original/17975914/economy1-5.jpg",
      },
    ],
    charges: {
      totalCharges: {
        date: "05/03/2023",
        amount: "$1,000.00",
      },
      balance: {
        date: "05/03/2023",
        amount: "-$2,254.00",
      },
      lastVisits: [
        {
          date: "05/03/2023",
          hasParts: true,
          parts: [
            {
              name: "99213",
              amount: "$100.00",
            },
            {
              name: "97110",
              amount: "$100.00",
            },
          ],
          totalAmount: "$200.00",
        },
        {
          date: "05/02/2023",
          hasParts: false,
          parts: [],
          totalAmount: "$3,439.00",
        },
        {
          date: "05/01/2023",
          hasParts: false,
          parts: [],
          totalAmount: "$39.00",
        },
      ],
    },
    products: [
      {
        date: "05/03/2023",
      },
      {
        date: "05/01/2023",
      },
    ],
    insurance: {
      deductible: "$0.00",
      coPay: "$0.00",
    },
  });

  const onChangeOrdersDate = ({ target }: any) => {
    const newDate = moment(target.value).format("YYYY-MM-DD");
    setOrdersDate(newDate);
  };

  const data = useMemo(
    () => [
      {
        modify: (
          <div className="grid grid-cols-2 space-x-1">
            <button className="">
              <BsFillPencilFill className="w-4 h-4 text-gray-500" />
            </button>
            <button className="">
              <RiDeleteBin6Line className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        ),
        service: "99213",
        desc: "Office or other outpatient visit for the evaluation and management of an established patient, which requires at least 2 of these 3 key components: An expanded problem focused history; An expanded problem focused examination; Medical decision making of low complexity. Counseling and/or coordination of care with other physicians, other qualified health care professionals, or agencies are provided consistent with the nature of the problem(s) and the patient's and/or family's needs. Usually, the presenting problem(s) are of low to moderate severity. Typically, 15 minutes are spent face-to-face with the patient and/or family.",
        perf: "1",
        today: (
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 focus:outline-none "
          />
        ),
        antc: "0",
        rmn: "1",
      },
      {
        modify: (
          <div className="grid grid-cols-2 space-x-1">
            <button className="">
              <BsFillPencilFill className="w-4 h-4 text-gray-500" />
            </button>
            <button className="">
              <RiDeleteBin6Line className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        ),
        service: "97110",
        desc: "Therapeutic procedure, 1 or more areas, each 15 minutes; therapeutic exercises to develop strength and endurance, range of motion and flexibility. (eg, stretching, strengthening, conditioning, ROM exercise)",
        perf: "1",
        today: (
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 focus:outline-none "
          />
        ),
        antc: "0",
        rmn: "1",
      },
      {
        modify: (
          <div className="grid grid-cols-2 space-x-1">
            <button className="">
              <BsFillPencilFill className="w-4 h-4 text-gray-500" />
            </button>
            <button className="">
              <RiDeleteBin6Line className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        ),
        service: "97140",
        desc: "Manual therapy techniques (eg, mobilization/manipulation, manual lymphatic drainage, manual traction), 1 or more regions, each 15 minutes",
        perf: "1",
        today: (
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 focus:outline-none "
          />
        ),
        antc: "0",
        rmn: "1",
      },
      {
        modify: (
          <div className="grid grid-cols-2 space-x-1">
            <button className="">
              <BsFillPencilFill className="w-4 h-4 text-gray-500" />
            </button>
            <button className="">
              <RiDeleteBin6Line className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        ),
        service: "97530",
        desc: "Therapeutic activities, direct (one-on-one) patient contact by the provider (use of dynamic activities to improve functional performance), each 15 minutes",
        perf: "1",
        today: (
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 focus:outline-none "
          />
        ),
        antc: "0",
        rmn: "1",
      },
      {
        modify: (
          <div className="grid grid-cols-2 space-x-1">
            <button className="">
              <BsFillPencilFill className="w-4 h-4 text-gray-500" />
            </button>
            <button className="">
              <RiDeleteBin6Line className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        ),
        service: "97112",
        desc: "Therapeutic procedure, 1 or more areas, each 15 minutes; neuromuscular reeducation of movement, balance, coordination, kinesthetic sense, posture, and/or proprioception for sitting and/or standing activities",
        perf: "1",
        today: (
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 focus:outline-none "
          />
        ),
        antc: "0",
        rmn: "1",
      },
      {
        modify: (
          <div className="grid grid-cols-2 space-x-1">
            <button className="">
              <BsFillPencilFill className="w-4 h-4 text-gray-500" />
            </button>
            <button className="">
              <RiDeleteBin6Line className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        ),
        service: "97116",
        desc: "Therapeutic procedure, 1 or more areas, each 15 minutes; gait training (includes stair climbing)",
        perf: "1",
        today: (
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 focus:outline-none "
          />
        ),
        antc: "0",
        rmn: "1",
      },
      {
        modify: (
          <div className="grid grid-cols-2 space-x-1">
            <button className="">
              <BsFillPencilFill className="w-4 h-4 text-gray-500" />
            </button>
            <button className="">
              <RiDeleteBin6Line className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        ),
        service: "97535",
        desc: "Self-care/home management training (eg, activities of daily living (ADL) and compensatory training, meal preparation, safety procedures, and instructions in use of assistive technology devices/adaptive equipment) direct one-on-one contact by provider, each 15 minutes",
        perf: "1",
        today: (
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 focus:outline-none "
          />
        ),
        antc: "0",
        rmn: "1",
      },
      {
        modify: (
          <div className="grid grid-cols-2 space-x-1">
            <button className="">
              <BsFillPencilFill className="w-4 h-4 text-gray-500" />
            </button>
            <button className="">
              <RiDeleteBin6Line className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        ),
        service: "97150",
        desc: "Therapeutic procedure(s), group (2 or more individuals) (eg, group of patients, non-family members, co-workers), each 15 minutes",
        perf: "1",
        today: (
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 focus:outline-none "
          />
        ),
        antc: "0",
        rmn: "1",
      },
      {
        modify: (
          <div className="grid grid-cols-2 space-x-1">
            <button className="">
              <BsFillPencilFill className="w-4 h-4 text-gray-500" />
            </button>
            <button className="">
              <RiDeleteBin6Line className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        ),
        service: "97530",
        desc: "Therapeutic activities, direct (one-on-one) patient contact by the provider (use of dynamic activities to improve functional performance), each 15 minutes",
        perf: "1",
        today: (
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 focus:outline-none "
          />
        ),
        antc: "0",
        rmn: "1",
      },
    ],
    []
  );

  const columns = useMemo<any>(
    () => [
      {
        Header: "",
        accessor: "modify",
        width: 10,
      },
      {
        Header: "Service",
        accessor: "service",
        width: 15,
      },
      {
        Header: "Desc",
        accessor: "desc",
        width: 15,
      },
      {
        Header: "Perf #",
        accessor: "perf",
        width: 10,
      },
      {
        Header: "Today",
        accessor: "today",
        width: 10,
      },
      {
        Header: "Antc #",
        accessor: "antc",
        width: 10,
      },
      {
        Header: "Rmn #",
        accessor: "rmn",
        width: 10,
      },
    ],

    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div
      className={` transition-all translate-x-0 fixed z-50 top-0 left-0 w-full h-full md:relative bg-white md:bg-transparentmd:block`}
    >
      <div className="h-full overflow-y-scroll pb-2 w-full  scrollbar-hide">
        <div className="my-2 font-main py-2 border-b border-gray-100 tracking-wide pb-3">
          <Accordion
            sx={{
              boxShadow: "none",
              "&:before": {
                backgroundColor: "transparent !important",
              },
            }}
            expanded={billingExpanded}
            onChange={(event, isExpanded) => {
              setBillingExpanded(isExpanded);
            }}
          >
            <AccordionSummary
              expandIcon={
                <span className="flex items-center ml-auto pt-1">
                  <ChevronDownIcon className="w-3 h-3 text-gray-500" />
                </span>
              }
            >
              <div className="flex items-end justify-between w-full">
                <div className="flex items-center space-x-2">
                  <div className="font-semibold">Billing</div>
                </div>
                <div className="flex items-center">
                  <span className="font-light text-sm text-gray-400 pr-2">
                    {billingExpanded ? "Close" : "View"}
                  </span>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="font-main tracking-wide">
                {insurances.map((insurance, index) => {
                  return (
                    <div
                      className="mb-4 rounded-lg border border-gray-100 p-4 shadow-sm"
                      key={index}
                    >
                      <div className="font-semibold">
                        {index === 0 ? (
                          <span>Insurance - Primary</span>
                        ) : index === 1 ? (
                          <span>Insurance - Secondary</span>
                        ) : (
                          <span>Insurance - Others</span>
                        )}
                      </div>
                      <div className="mt-4">
                        <div className="flex space-x-4 text-sm">
                          <img
                            className="w-14 h-14 rounded-full p-0.5 object-contain border"
                            src={insurance.logo}
                            alt="Rounded avatar"
                          />
                          <div className="flex flex-col text-lg">
                            <span>{insurance.name}</span>
                            <span className="text-sm">{insurance.address}</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-5 mt-4">
                          <div className="grid justify-items-center space-y-2">
                            <div className="grid font-semibold text-sm justify-center items-center w-12 h-12 border rounded-xl">
                              {insurance.startDate}
                            </div>
                            <span className="text-[11px]">Start Date</span>
                          </div>
                          <div className="grid justify-items-center space-y-2">
                            <div className="grid font-semibold text-sm justify-center items-center w-12 h-12 border rounded-xl">
                              {insurance.endDate}
                            </div>
                            <span className="text-[11px]">End Date</span>
                          </div>
                          <div className="grid justify-items-center space-y-2">
                            <div className="grid font-semibold text-sm justify-center items-center w-12 h-12 border rounded-xl">
                              {insurance.deductible}
                            </div>
                            <span className="text-[11px]">Deductible</span>
                          </div>
                          <div className="grid justify-items-center space-y-2">
                            <div className="grid font-semibold text-sm justify-center items-center w-12 h-12 border rounded-xl">
                              {insurance.coPay}
                            </div>
                            <span className="text-[11px]">Co-Pay</span>
                          </div>
                          <div className="grid justify-items-center space-y-2">
                            <div className="grid font-semibold text-sm justify-center items-center w-12 h-12 border rounded-xl">
                              {insurance.coInsurance}
                            </div>
                            <span className="text-[11px]">Co-Insurance</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="my-4 rounded-lg border border-gray-100 p-4 shadow-sm">
                  <div className="font-semibold">Cash Pay - Out Of Pocket</div>
                  <div className="mt-4">
                    <div className="flex space-x-4 text-sm">
                      <div className="w-14 h-14 rounded-full object-contain border">
                        <BsCashCoin className="text-gray-600 w-full h-full p-3" />
                      </div>
                      <div className="flex flex-col text-lg">
                        <span>Cash Pay</span>
                        <span className="text-sm">Out Of Pocket</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 mt-4">
                      <div className="grid justify-items-center space-y-2">
                        <div className="grid font-semibold text-sm justify-center items-center w-12 h-12 border rounded-xl">
                          1/22
                        </div>
                        <span className="text-[11px]">Start Date</span>
                      </div>
                      <div className="grid justify-items-center space-y-2">
                        <div className="grid font-semibold text-sm justify-center items-center w-12 h-12 border rounded-xl">
                          12/23
                        </div>
                        <span className="text-[11px]">End Date</span>
                      </div>
                      <div className="grid justify-items-center space-y-2">
                        <div className="grid font-bold text-sm justify-center items-center w-12 h-12 border rounded-xl">
                          —
                        </div>
                        <span className="text-[11px]">Deductible</span>
                      </div>
                      <div className="grid justify-items-center space-y-2">
                        <div className="grid font-bold text-sm justify-center items-center w-12 h-12 border rounded-xl">
                          —
                        </div>
                        <span className="text-[11px]">Co-Pay</span>
                      </div>
                      <div className="grid justify-items-center space-y-2">
                        <div className="grid font-bold text-sm justify-center items-center w-12 h-12 border rounded-xl">
                          —
                        </div>
                        <span className="text-[11px]">Co-Insurance</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-mt-4 grid items-center">
                  <button
                    type="button"
                    className="grid content-center text-black bg-white font-medium rounded-lg font-main py-2.5 mt-4 border border-gray-100 shadow-sm items-center justify-items-center"
                  >
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#263238"
                        className="w-5 h-5 mr-2 mt-0.5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      Add Payment
                    </div>
                  </button>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="my-2 font-main py-2 border-b border-gray-100 tracking-wide pb-3">
          <Accordion
            sx={{
              boxShadow: "none",
              "&:before": {
                backgroundColor: "transparent !important",
              },
            }}
            expanded={ordersExpanded}
            onChange={(event, isExpanded) => {
              setOrdersExpanded(isExpanded);
            }}
          >
            <AccordionSummary
              expandIcon={
                <span className="flex items-center ml-auto pt-2.5">
                  <ChevronDownIcon className="w-3 h-3 text-gray-500" />
                </span>
              }
            >
              <div className="flex items-end justify-between w-full">
                <div className="flex items-center space-x-2">
                  <div className="font-semibold">Orders</div>
                  <button className="hover:bg-gray-100 text-gray-500 font-bold border border-gray-200 rounded-full shadow-sm w-7 h-7">
                    <AddIcon fontSize="medium" className="p-0.5" />
                  </button>
                  <button className="hover:bg-gray-100 text-gray-500 font-bold border border-gray-200 rounded-full shadow-sm w-7 h-7">
                    <BsFillPencilFill className="ml-1 p-0.5" />
                  </button>
                </div>
                <div className="flex items-center">
                  <span className="font-light text-sm text-gray-400 pr-2">
                    {ordersExpanded ? "Close" : "View"}
                  </span>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="mb-4 rounded-lg border border-gray-100 p-4 shadow-sm text-gray-800">
                <div className="flex space-x-2 mb-4">
                  <span>Start Date:</span>
                  <input
                    type="date"
                    className="rounded-2xl text-sm bg-gray-200 w-32 text-center focus:outline-none px-1"
                    value={ordersDate}
                    onChange={onChangeOrdersDate}
                  />
                </div>
                <table {...getTableProps()} className="w-full table-fixed">
                  <thead className="w-full text-sm tracking-tight">
                    {headerGroups.map((headerGroup: any, headerIndex: any) => (
                      <>
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map(
                            (column: any, colIndex: any) => (
                              <th
                                className="font-semibold"
                                {...column.getHeaderProps({
                                  style: {
                                    minWidth: column.minWidth,
                                    width: column.width,
                                  },
                                })}
                                key={`col-${column.id}-${colIndex}`}
                              >
                                {column.render("Header")}
                              </th>
                            )
                          )}
                        </tr>
                      </>
                    ))}
                  </thead>

                  <tbody {...getTableBodyProps()}>
                    {rows.map((row: any) => {
                      prepareRow(row);

                      return (
                        <>
                          <tr {...row.getRowProps()}>
                            {row.cells.map((cell: any, cellIndex: any) => {
                              return (
                                <td
                                  {...cell.getCellProps({
                                    style: {
                                      minWidth: cell.column.minWidth,
                                      width: cell.column.width,
                                    },
                                  })}
                                  className="truncate text-center"
                                  key={`cell-${cellIndex}`}
                                >
                                  {cell.render("Cell")}
                                </td>
                              );
                            })}
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="my-2 font-main py-2 border-b border-gray-100 tracking-wide pb-3">
          <Accordion
            sx={{
              boxShadow: "none",
              "&:before": {
                backgroundColor: "transparent !important",
              },
            }}
            expanded={icdCodesExpanded}
            onChange={(event, isExpanded) => {
              setIcdCodesExpanded(isExpanded);
            }}
          >
            <AccordionSummary
              expandIcon={
                <span className="flex items-center ml-auto pt-1">
                  <ChevronDownIcon className="w-3 h-3 text-gray-500" />
                </span>
              }
            >
              <div className="flex items-end justify-between w-full">
                <div className="flex items-center space-x-2">
                  <div className="font-semibold">ICD Codes</div>
                  <button className="hover:bg-gray-100 text-gray-500 font-bold border border-gray-200 rounded-full shadow-sm w-7 h-7">
                    <AddIcon fontSize="medium" className="p-0.5" />
                  </button>
                </div>
                <div className="flex items-center">
                  <span className="font-light text-sm text-gray-400 pr-2">
                    {icdCodesExpanded ? "Close" : "View"}
                  </span>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-wrap -mt-2">
                {icdCodes.map((icdCode, icdCodeIndex) => (
                  <div
                    className="w-fit m-2 cursor-pointer rounded-2xl bg-blue-50 text-blue-500 shadow-none p-1.5 px-2.5 text-sm text-center font-semibold"
                    key={icdCodeIndex}
                  >
                    {icdCode}
                  </div>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="my-2 font-main py-2 border-b border-gray-100 tracking-wide pb-3">
          <Accordion
            sx={{
              boxShadow: "none",
              "&:before": {
                backgroundColor: "transparent !important",
              },
            }}
            expanded={financialsExpanded}
            onChange={(event, isExpanded) => {
              setFinancialsExpanded(isExpanded);
            }}
          >
            <AccordionSummary
              expandIcon={
                <span className="flex items-center ml-auto pt-2.5">
                  <ChevronDownIcon className="w-3 h-3 text-gray-500" />
                </span>
              }
            >
              <div className="flex items-end justify-between w-full">
                <div className="flex items-center space-x-2">
                  <div className="font-semibold">Financials</div>
                  <button className="hover:bg-gray-100 text-gray-500 font-bold border border-gray-200 rounded-full shadow-sm w-7 h-7">
                    <MdPayment className="ml-1 p-0.5" />
                  </button>
                </div>
                <div className="flex items-center">
                  <span className="font-light text-sm text-gray-400 pr-2">
                    {financialsExpanded ? "Close" : "View"}
                  </span>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              {/* <div className="mb-4 rounded-lg border border-gray-100 p-4 shadow-sm">
                <div className="flex flex-col space-y-4">
                  <span className="font-semibold align-middle">Payers</span>
                  {financials["payers"].map((payer, index) => (
                    <span
                      className={`col-span-3 ${
                        index + 1 === financials["payers"].length
                          ? ""
                          : "border-b border-gray-100 pb-4"
                      }`}
                    >
                      <div className="flex space-x-4 text-sm">
                        <img
                          className="w-12 h-12 rounded-full p-1 object-contain border"
                          src={payer.logo}
                        />
                        <div className="flex flex-col -mt-0.5">
                          <span className="uppercase text-lg">
                            {payer.name}
                          </span>
                          <span className="tracking-wider">
                            Payer #{index + 1}
                          </span>
                        </div>
                      </div>
                    </span>
                  ))}
                </div>
              </div> */}
              <div className="mb-4 rounded-lg border border-gray-100 p-4 shadow-sm">
                <div className="flex flex-col space-y-4">
                  <span className="font-semibold align-middle">Charges</span>

                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                      <thead className="text-xs text-gray-700 uppercase font-main">
                        <tr className="border-b">
                          <th scope="col" className="px-2 py-3">
                            Product
                          </th>
                          <th scope="col" className="px-2 py-3">
                            Date
                          </th>
                          <th scope="col" className="px-2 py-3">
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody className="font-semibold">
                        <tr className="bg-white">
                          <th
                            scope="row"
                            className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap"
                          >
                            99213
                          </th>
                          <td className="px-2 py-4">05/03/2023</td>
                          <td className="px-2 py-4">$3,439</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <th
                            scope="row"
                            className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap"
                          >
                            97110
                          </th>
                          <td className="px-2 py-4">05/03/2023</td>
                          <td className="px-2 py-4">$1,000</td>
                        </tr>
                        <tr className="bg-white">
                          <th
                            scope="row"
                            className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap"
                          >
                            99413
                          </th>
                          <td className="px-2 py-4">07/03/2023</td>
                          <td className="px-2 py-4">$359</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* <table className="whitespace-nowrap uppercase">
                    <tbody>
                      <tr>
                        <td>Total Charges</td>
                        <td></td>
                        <td className="text-lg font-semibold text-right">
                          {financials["charges"]["totalCharges"]["amount"]}
                        </td>
                      </tr>

                      <tr>
                        <td>Account Balance</td>
                        <td></td>
                        <td className="text-lg font-semibold text-right">
                          {financials["charges"]["balance"]["amount"]}
                        </td>
                      </tr>
                      <tr className="h-4 border-b"></tr>
                      <tr className="h-4"></tr>
                      {financials["charges"]["lastVisits"].map((visit, index) =>
                        visit["hasParts"] ? (
                          <>
                            <tr>
                              <td>{index === 0 ? "Last Visit" : ""}</td>
                              <td>{visit["date"]}</td>
                              <td className="text-lg font-semibold text-right"></td>
                            </tr>

                            {visit["parts"].map((part) => (
                              <>
                                <tr>
                                  <td></td>
                                  <td className="pl-10">{part["name"]}</td>
                                  <td className="text-lg font-semibold text-right">
                                    {part["amount"]}
                                  </td>
                                </tr>
                              </>
                            ))}
                          </>
                        ) : (
                          <>
                            <tr>
                              <td>{index === 0 ? "Last Visit" : ""}</td>
                              <td>{visit["date"]}</td>
                              <td className="text-lg font-semibold text-right">
                                {visit["totalAmount"]}
                              </td>
                            </tr>
                          </>
                        )
                      )}
                      {financials["products"].length > 0 ? (
                        <>
                          <tr>
                            <td>Products</td>
                          </tr>

                          {financials["products"].map((product) => (
                            <>
                              <tr>
                                <td></td>
                                <td>{product["date"]}</td>
                                <td className="text-lg font-semibold text-right"></td>
                              </tr>
                            </>
                          ))}
                        </>
                      ) : (
                        <></>
                      )}
                      <tr>
                        <td>Insurance</td>
                      </tr>

                      <tr>
                        <td>
                          <span className="font-bold mx-2">·</span>
                          Deductible
                        </td>
                        <td></td>
                        <td className="text-lg font-semibold text-right">
                          {financials["insurance"]["deductible"]}
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <span className="font-bold mx-2">·</span>
                          Co-Pay
                        </td>
                        <td></td>
                        <td className="text-lg font-semibold text-right">
                          {financials["insurance"]["coPay"]}
                        </td>
                      </tr>

                      <tr>
                        <td>Last Paid</td>
                        <td className="text-center font-semibold">—</td>
                        <td className="text-lg font-semibold text-right"></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="border-b"></div>
                  <table>
                    <tbody>
                      <tr>
                        <td>Unapplied payments on account</td>
                        <td></td>
                        <td className="text-lg font-semibold text-right">
                          {financials["insurance"]["coPay"]}
                        </td>
                      </tr>
                    </tbody>
                  </table> */}
                </div>
              </div>

              {/* <div className="mb-4 rounded-lg border border-gray-100 p-4 shadow-sm">
                <div className="flex flex-col space-y-4 font-bold">
                  Attachment
                </div>

                <div
                  {...getRootProps()}
                  className="flex flex-wrap justify-center py-3 mt-2 border-[1px] rounded-md px-4  cursor-pointer border-gray-300 text-gray-400"
                >
                  <AiOutlinePlus size={22} />
                  <p className="font-bold text-gray-500 pl-1">
                    Upload Document
                  </p>
                </div>

                {formValues.file?.name.length > 0 && (
                  <div className="flex flex-wrap items-center   py-1 mt-2 border-[1px] rounded-md px-4  cursor-pointer border-gray-300 text-gray-400">
                    <AiOutlineFile
                      className="font-bold text-gray-600"
                      size={28}
                    />
                    <div className="md:pl-3">
                      <p className="font-bold text-gray-500">Document</p>
                      <p className="text-sm">
                        {(formValues.file.size / 1024).toFixed(3) + "KB"}
                      </p>
                    </div>
                  </div>
                )}
              </div> */}

              {/* <div className="mb-4 rounded-lg border border-gray-100 p-4 shadow-sm">
                <div className="flex flex-col space-y-4">
                  <span className="font-semibold align-middle">Insurance</span>
                  <div className="flex flex-col">
                    <div className="grid grid-cols-2 space-x-2 border-b border-gray-100 pb-2 mb-2">
                      <span className="text-lg">Deductible</span>
                      <span className="font-semibold text-xl text-right pr-16">
                        {financials["insurance"]["deductible"]}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 space-x-2">
                      <span className="text-lg">Co-Pay</span>
                      <span className="font-semibold text-xl text-right pr-16">
                        {financials["insurance"]["coPay"]}
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
            </AccordionDetails>
          </Accordion>
        </div>

        {/* New dropdown */}

        <div className="my-2 font-main py-2 border-b border-gray-100 tracking-wide pb-3">
          <Accordion
            sx={{
              boxShadow: "none",
              "&:before": {
                backgroundColor: "transparent !important",
              },
            }}
            expanded={attachmentExpanded}
            onChange={(event, isExpanded) => {
              setAttachmentExpanded(isExpanded);
            }}
          >
            <AccordionSummary
              expandIcon={
                <span className="flex items-center ml-auto pt-2.5">
                  <ChevronDownIcon className="w-3 h-3 text-gray-500" />
                </span>
              }
            >
              <div className="flex items-end justify-between w-full">
                <div className="flex items-center space-x-2">
                  <div className="font-semibold">Upload Document </div>
                  <button className="hover:bg-gray-100 text-gray-500 font-bold border border-gray-200 rounded-full shadow-sm w-7 h-7">
                    <MdOutlineAttachment className="ml-1 p-0.5" />
                  </button>
                </div>
                <div className="flex items-center">
                  <span className="font-light text-sm text-gray-400 pr-2">
                    {attachmentExpanded ? "Close" : "View"}
                  </span>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              {/* <div className="mb-4 rounded-lg border border-gray-100 p-4 shadow-sm">
                <div className="flex flex-col space-y-4">
                  <span className="font-semibold align-middle">Payers</span>
                  {financials["payers"].map((payer, index) => (
                    <span
                      className={`col-span-3 ${
                        index + 1 === financials["payers"].length
                          ? ""
                          : "border-b border-gray-100 pb-4"
                      }`}
                    >
                      <div className="flex space-x-4 text-sm">
                        <img
                          className="w-12 h-12 rounded-full p-1 object-contain border"
                          src={payer.logo}
                        />
                        <div className="flex flex-col -mt-0.5">
                          <span className="uppercase text-lg">
                            {payer.name}
                          </span>
                          <span className="tracking-wider">
                            Payer #{index + 1}
                          </span>
                        </div>
                      </div>
                    </span>
                  ))}
                </div>
              </div> */}

              <div className="mb-4 rounded-lg border border-gray-100 p-4 shadow-sm">
                <div className="flex flex-col space-y-4 font-bold">
                  Attachment
                </div>

                <div
                  {...getRootProps()}
                  className="flex flex-wrap justify-center py-3 mt-2 border-[1px] rounded-md px-4  cursor-pointer border-gray-300 text-gray-400"
                >
                  <AiOutlinePlus size={22} />
                  <p className="font-bold text-gray-500 pl-1">
                    Upload Document
                  </p>
                </div>

                {formValues.file?.name.length > 0 && (
                  <div className="flex flex-wrap items-center   py-1 mt-2 border-[1px] rounded-md px-4  cursor-pointer border-gray-300 text-gray-400">
                    <AiOutlineFile
                      className="font-bold text-gray-600"
                      size={28}
                    />
                    <div className="md:pl-3">
                      <p className="font-bold text-gray-500">Document</p>
                      <p className="text-sm">
                        {(formValues.file.size / 1024).toFixed(3) + "KB"}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* <div className="mb-4 rounded-lg border border-gray-100 p-4 shadow-sm">
                <div className="flex flex-col space-y-4">
                  <span className="font-semibold align-middle">Insurance</span>
                  <div className="flex flex-col">
                    <div className="grid grid-cols-2 space-x-2 border-b border-gray-100 pb-2 mb-2">
                      <span className="text-lg">Deductible</span>
                      <span className="font-semibold text-xl text-right pr-16">
                        {financials["insurance"]["deductible"]}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 space-x-2">
                      <span className="text-lg">Co-Pay</span>
                      <span className="font-semibold text-xl text-right pr-16">
                        {financials["insurance"]["coPay"]}
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
