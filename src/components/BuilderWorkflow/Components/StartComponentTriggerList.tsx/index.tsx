import { XMarkIcon } from "@heroicons/react/24/solid";
// import data from "./data";
import WorkflowFlyout from "@/components/workflow/WorkflowFlyout";
import { useEffect, useState } from "react";
import FormData from "./FormData";
import {
  ArrowsRightLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import TriggerList from "../TriggerList";
import AppointmentStatus from "../Forms/Appointments/AppointmentStatus";
import CustomerBookedAppointment from "../Forms/Appointments/CustomerBookedAppointment";

export default function StartComponentTriggerList({
  onClose,
  updateData,
}: any) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [actionData, setActionData] = useState("");
  const [formItem, setFormItem] = useState<any>(null);

  const data = [
    {
      title: "Appointments",
      subContent: [
        {
          title: "Appointment Status",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <AppointmentStatus
              onClose={() => {
                setIsOpenModal(false);
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
              }}
            />
          ),
        },
        {
          title: "Customer Booked Appointment",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <CustomerBookedAppointment
              onClose={() => {
                setIsOpenModal(false);
              }}
              updateData={(item: any) => {
                setIsOpenModal(false);
                updateData(item);
              }}
              actionData={actionData}
            />
          ),
        },
      ],
    },
    {
      title: "Contact",
      subContent: [
        {
          title: "Birthday Reminder",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
        {
          title: "Contact Changed",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
        {
          title: "Contact Created",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
        {
          title: "Contact DND",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
        {
          title: "Contact Tag",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
        {
          title: "Custom Date Reminder",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
        {
          title: "Note Added",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
        {
          title: "Note Changed",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
        {
          title: "Task Added",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
        {
          title: "Task Reminder",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
      ],
    },
    {
      title: "Contact Actions",
      subContent: [
        {
          title: "Customer Replied",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
        {
          title: "Form Submitted",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
        {
          title: "Order Form Submission",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
        {
          title: "Order Submitted",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
        {
          title: "Survey Submit",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
        {
          title: "Trigger Link Clicked",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
        {
          title: "Twilio Validation Error",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
      ],
    },
    {
      title: "Events",
      subContent: [
        {
          title: "Call Status",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
        {
          title: "Email Events",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
      ],
    },
    {
      title: "Facebook",
      subContent: [
        {
          title: "Facebook Lead Form Submitted",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
      ],
    },
    {
      title: "Opportunities",
      subContent: [
        {
          title: "Opportunity Status Changed",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
        {
          title: "Pipeline Stage Changed",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
        {
          title: "Stale Opportunities",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
      ],
    },
    {
      title: "Payments",
      subContent: [
        {
          title: "Invoice",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
        {
          title: "Payment Received",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
      ],
    },
    {
      title: "Tiktok",
      subContent: [
        {
          title: "Tikt",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
      ],
    },
  ];

  const [newData, setNewData] = useState(data);

  const [filterValue, setFilterValue] = useState("");

  const handleFilter = (event: any) => {
    setFilterValue(event.target.value);
  };

  const filteredData = data.filter((category) => {
    return (
      category.title.toLowerCase().includes(filterValue.toLowerCase()) ||
      category.subContent.some((subItem) =>
        subItem.title.toLowerCase().includes(filterValue.toLowerCase())
      )
    );
  });

  //triggers

  return (
    <>
      <WorkflowFlyout
        visibility={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        renderData={
          <div className="py-3">
            <div className="flex justify-between items-center border-b-[1px] border-gray-300 pb-2 px-3 ">
              <p className="  text-xl text-dark font-semibold">{actionData}</p>
              <button onClick={() => setIsOpenModal(false)}>
                <XMarkIcon className="h-5 w-5 text-FontGray" />
              </button>
            </div>
            <div className="px-2 py-1">{formItem}</div>
          </div>
        }
      />

      {/* <WorkflowFlyout
        visibility={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        renderData={
          <FormData
            components={formItem}
            onClose={() => {
              setIsOpenModal(false);
            }}
            updateData={(item: any) => {
              setIsOpenModal(false);
              updateData(item);
            }}
            actionData={actionData}
          />
        }
      /> */}

      <div className={` ${isOpenModal ? "hidden" : "block"}  py-3`}>
        <div className="flex justify-between items-center border-b-[1px] border-gray-300 pb-2 px-3 ">
          <div className="pr-4">
            <p className="text-lg text-dark font-semibold">
              Workflow Triggers{" "}
            </p>
            <p className="text-sm text-dark font-medium">
              Adds a workflow trigger, and on execution, the contacts gets added
              to the workflow
            </p>
          </div>
          <button onClick={onClose}>
            <XMarkIcon className="h-5 w-5 text-FontGray" />
          </button>
        </div>

        <div className="px-2 py-4">
          <div className="rounded-md px-2 py-2 flex justify-start items-center w-full  border-[1px] border-gray-300">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 font-bold  " />

            <input
              type="text"
              placeholder="Filter by actions"
              name="subContentTitle"
              value={filterValue}
              onChange={handleFilter}
              className="w-[60%] bg-transparent outline-none border-[none] pl-4 font-fontSource font-medium text-sm "
            />
          </div>
        </div>

        <ul className="w-full px-2 pt-2">
          {filteredData.map((item, index) => (
            <li key={index} className="  bg-white mb-3">
              <p
                className={` capitalize text-dark text-lg font-semibold  tracking-wide  `}
              >
                {item?.title}
              </p>
              <ul className="pt-2">
                {item?.subContent?.map((mainData, mainIndex) => (
                  <li className=" " key={mainIndex}>
                    <div className="flex justify-start items-center border-[1px] border-gray-200 mb-3 p-2 rounded-lg">
                      <input
                        type="radio"
                        name="radio"
                        className="radio checked:bg-blue-500"
                        onChange={() => {
                          setFormItem(mainData?.form);
                          setActionData(mainData?.title);
                          setIsOpenModal(true);
                        }}
                      />
                      <p
                        className={` capitalize text-gray-600 text-base font-semibold  tracking-wide ml-2 `}
                      >
                        {mainData?.title}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
