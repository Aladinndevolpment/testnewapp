import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import actionData from "./actionData";
import WorkflowFlyout from "@/components/workflow/WorkflowFlyout";
import { formState } from "@/atoms/form";
import { useRecoilState, useSetRecoilState } from "recoil";
import TriggerList from "../TriggerList";
import { itemState } from "@/atoms/item";
import {
  BellAlertIcon,
  EnvelopeIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import SendEmailForm from "../Forms/ExternalCommunication/SendEmailForm";
import SendSMSForm from "../Forms/ExternalCommunication/SendSMSForm";
import OtherForm from "../Forms/OtherForm";
import RemoveFromWorkFlow from "../Forms/CRM/RemoveFromWorkFlow";
import AddContactTag from "../Forms/CRM/AddContactTag";
import CreateUpdateOpportunity from "../Forms/CRM/CreateUpdateOpportunity";
import AddToWorkFlow from "../Forms/CRM/AddToWorkFlow";
import RemoveFromAllWorkFlow from "../Forms/CRM/RemoveFromAllWorkFlow";
import ContactDND from "../Forms/CRM/ContactDND";
import AppointmentStatus from "../Forms/CRM/AppointmentStatus";
import FacebookConversion from "../Forms/CRM/FacebookConversion";
import WebHooks from "../Forms/ConditionalWorkflow/WebHooks";
import WaitForm from "../Forms/ConditionalWorkflow/WaitForm";

export default function ChooseActions({
  updateActionData,
  onClose,
  updateForm,
}: any) {
  const [isFlyOutVisible, setIsFlyOutVisible] = useState(false);
  const [actionTitle, setActionTitle] = useState("");
  const [modalData, setModalData] = useState("");
  const setItem = useSetRecoilState(itemState);
  const [formItem, setFormItem] = useState("");

  const actionData = [
    {
      title: "External Communications",
      subContent: [
        {
          title: "Send Email",
          description: "Send an Email",
          icon: <ExclamationCircleIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <SendEmailForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Send SMS",
          description: "Send an SMS",
          icon: <ExclamationTriangleIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <SendSMSForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Call",
          description: "Call",
          icon: <ExclamationTriangleIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <OtherForm
              onDataStore={(item: any, actionTitle: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Voicemail",
          description: "Voicemail",
          icon: <ExclamationTriangleIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <OtherForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Messenger",
          description: "Messenger",
          icon: <ExclamationTriangleIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <OtherForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Instagram DM",
          description: "Instagram DM",
          icon: <ExclamationTriangleIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <OtherForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Manual SMS",
          description: "Manual SMS",
          icon: <ExclamationTriangleIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <SendSMSForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Manual Call",
          description: "Manual Call",
          icon: <ExclamationTriangleIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <OtherForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "GMB Messaging",
          description: "GMB Messaging",
          icon: <ExclamationTriangleIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <OtherForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
      ],
    },
    {
      title: "CRM",
      subContent: [
        {
          title: "Add Contact Tag ",
          description: "Add Contact Tag ",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <AddContactTag
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Remove Contact Tag ",
          description: " Remove Contact Tag",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <OtherForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Create/Update Opportunity ",
          description: "Create/Update Opportunity ",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <CreateUpdateOpportunity
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Add To Notes ",
          description: " Add To Notes",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <OtherForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: " Assign To User",
          description: " Assign To User",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <OtherForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Remove Assigned User ",
          description: " Remove Assigned User",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <OtherForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Set Event Start Date ",
          description: "Set Event Start Date ",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <OtherForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Add To Workflow ",
          description: " Add To Workflow",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <AddToWorkFlow
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Remove From Workflow ",
          description: "Remove From Workflow",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <RemoveFromWorkFlow
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Remove From All Workflows ",
          description: " Remove From All Workflows",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <RemoveFromAllWorkFlow
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: " Remove Opportunity",
          description: "Remove Opportunity ",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <SendEmailForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: " Send Internal Notification",
          description: "Send Internal Notification ",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <SendEmailForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Set Contact DND",
          description: " Set Contact DND",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <ContactDND
              onDataStore={(item: any, actionTitle: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: " Edit Conversation",
          description: "Edit Conversation ",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <OtherForm
              onDataStore={(item: any, actionTitle: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Send Review Request ",
          description: " Send Review Request",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <OtherForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Stripe One Time Charge ",
          description: "Stripe One Time Charge ",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <OtherForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Update Appointment Status ",
          description: "Update Appointment Status",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <AppointmentStatus
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Add Task ",
          description: "Add Task",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <OtherForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Update Contact Field",
          description: "Update Contact Field",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <OtherForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Facebook - Conversion API ",
          description: "Facebook - Conversion API ",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <FacebookConversion
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: " Update Custom Value ",
          description: " Update Custom Value ",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <OtherForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
      ],
    },
    {
      title: "Conditions and Workflow",
      subContent: [
        {
          title: "If/Else",
          description: "If/Else",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: <SendEmailForm />,
        },
        {
          title: "Wait",
          description: " Wait ",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <WaitForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Webhook ",
          description: " Webhook ",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <WebHooks
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Go To",
          description: "Go To",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <OtherForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Math Operation",
          description: "Math Operation",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <OtherForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Goal Event",
          description: "Goal Event",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <OtherForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
        {
          title: "Loop",
          description: "Loop",
          icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
          link: "#",
          form: (
            <OtherForm
              onClose={(item: any) => {
                setIsFlyOutVisible(false);
              }}
              onDataStore={(item: any) => {
                setModalData(item);
                setIsFlyOutVisible(false);
                updateActionData(actionTitle);
                updateForm(item);
              }}
            />
          ),
        },
      ],
    },
  ];

  return (
    <div>
      <WorkflowFlyout
        visibility={isFlyOutVisible}
        onClose={() => setIsFlyOutVisible(false)}
        renderData={
          <TriggerList
            components={formItem}
            onClose={() => {
              setIsFlyOutVisible(false);
            }}
          />
        }
      />
      <div className="flex justify-between items-center  ">
        <p className="text-dark font-semibold text-base pb-3 pt-3 leading-5">
          Choose an Action
        </p>
        <button onClick={onClose}>
          <XMarkIcon className="h-5 w-5 text-FontGray" />
        </button>
      </div>

      <div className="mb-2">
        {actionData.map((item: any, index: any) => (
          <div key={index}>
            <p className="text-gray-600 font-semibold text-base pb-3 pt-3 leading-5">
              {item?.title}
            </p>
            <div className="flex flex-wrap overflow-auto scrollbar-hidden">
              {item?.subContent?.map((mainData: any, mainIndex: any) => (
                <div
                  onClick={() => {
                    if (mainData?.title == "If/Else") {
                      updateActionData(mainData?.title);
                      setActionTitle(mainData?.title);
                      setItem(mainData?.title);
                    } else {
                      setFormItem(mainData?.form);
                      setIsFlyOutVisible(true);
                      setActionTitle(mainData?.title);
                      setItem(mainData?.title);
                    }
                  }}
                  key={mainIndex}
                  className="cursor-pointer w-full md:w-1/2 lg:w-1/3  pr-4 mb-3"
                >
                  <div className="flex justify-start items-start border-[1px] border-lightGray bg-white rounded-md py-3 px-2">
                    <div className="text-blueHeader">{mainData?.icon}</div>
                    <div className="pl-3">
                      <p className="text-dark font-semibold text-sm  ">
                        {" "}
                        {mainData?.title}{" "}
                      </p>
                      <p className="text-FontGray font-medium text-xs  ">
                        {mainData?.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
