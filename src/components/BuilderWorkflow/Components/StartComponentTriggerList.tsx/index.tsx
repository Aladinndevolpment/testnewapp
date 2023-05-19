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
import AppointmentStatus from "../Forms/Trigger/Appointments/AppointmentStatus";
import CustomerBookedAppointment from "../Forms/Trigger/Appointments/CustomerBookedAppointment";
import BirthdayReminder from "../Forms/Trigger/Contact/BirthdayReminder";
import ContactChanged from "../Forms/Trigger/Contact/ContactChanged";
import ContactTag from "../Forms/Trigger/Contact/ContactTag";
import ContactDND from "../Forms/Trigger/Contact/ContactDND";
import ContactCreated from "../Forms/Trigger/Contact/ContactCreated";
import CustomDateReminder from "../Forms/Trigger/Contact/CustomDateReminder";
import NoteTag from "../Forms/Trigger/Contact/NoteTag";
import NoteChanged from "../Forms/Trigger/Contact/NoteChanged";
import TaskReminder from "../Forms/Trigger/Contact/TaskReminder";
import TaskAdded from "../Forms/Trigger/Contact/TaskAdded";
import CustomerReplied from "../Forms/Trigger/Contact/CustomerReplied";
import FormSubmitted from "../Forms/Trigger/Contact/FormSubmitted";
import OrderFormSubmission from "../Forms/Trigger/Contact/OrderFormSubmission";
import OrderSubmitted from "../Forms/Trigger/Contact/OrderSubmitted";
import SurveySubmitted from "../Forms/Trigger/Contact/SurveySubmitted";
import TriggerValidationError from "../Forms/Trigger/Contact/TriggerValidationError";
import FacebookLeadForm from "../Forms/Trigger/Facebook/FacebookLeadForm";
import OpportunityStatusChanged from "../Forms/Trigger/Opportunity/OpportunityStatusChanged";
import PipelineStatusChanged from "../Forms/Trigger/Opportunity/PipelineStageChanged";
import StaleOpportunities from "../Forms/Trigger/Opportunity/StaleOpportunities";
import PaymentReceived from "../Forms/Trigger/Payments/PaymentReceived";
import Invoice from "../Forms/Trigger/Payments/Invoice";

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
          form: (
            <BirthdayReminder
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
          title: "Contact Changed",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <ContactChanged
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
          title: "Contact Created",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <ContactCreated
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
          title: "Contact DND",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <ContactDND
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
          title: "Contact Tag",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <ContactTag
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
          title: "Custom Date Reminder",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <CustomDateReminder
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
          title: "Note Added",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <NoteTag
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
          title: "Note Changed",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <NoteChanged
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
          title: "Task Added",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <TaskAdded
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
          title: "Task Reminder",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <TaskReminder
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
      ],
    },
    {
      title: "Contact Actions",
      subContent: [
        {
          title: "Customer Replied",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <CustomerReplied
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
          title: "Form Submitted",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <FormSubmitted
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
          title: "Order Form Submission",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <OrderFormSubmission
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
          title: "Order Submitted",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <OrderSubmitted
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
          title: "Survey Submit",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <SurveySubmitted
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
          title: "Trigger Link Clicked",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: "",
        },
        {
          title: "Twilio Validation Error",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <TriggerValidationError
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
      ],
    },
    {
      title: "Events",
      subContent: [
        {
          title: "Call Status",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <TriggerValidationError
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
          title: "Email Events",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <TriggerValidationError
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
      ],
    },
    {
      title: "Facebook",
      subContent: [
        {
          title: "Facebook Lead Form Submitted",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <FacebookLeadForm
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
      ],
    },
    {
      title: "Opportunities",
      subContent: [
        {
          title: "Opportunity Status Changed",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <OpportunityStatusChanged
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
          title: "Pipeline Stage Changed",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <PipelineStatusChanged
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
          title: "Stale Opportunities",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <StaleOpportunities
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
      ],
    },
    {
      title: "Payments",
      subContent: [
        {
          title: "Invoice",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <Invoice
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
          title: "Payment Received",
          icon: <ArrowsRightLeftIcon className="h-5 w-5 text-white" />,
          link: "#",
          form: (
            <PaymentReceived
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
