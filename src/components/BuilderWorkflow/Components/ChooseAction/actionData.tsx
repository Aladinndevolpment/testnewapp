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

const actionData = [
  {
    title: "External Communications",
    subContent: [
      {
        title: "Send Email",
        description: "Send an Email",
        icon: <ExclamationCircleIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <SendEmailForm />,
      },
      {
        title: "Send SMS",
        description: "Send an SMS",
        icon: <ExclamationTriangleIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <SendSMSForm />,
      },
      {
        title: "Call",
        description: "Call",
        icon: <ExclamationTriangleIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <OtherForm />,
      },
      {
        title: "Voicemail",
        description: "Voicemail",
        icon: <ExclamationTriangleIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <OtherForm />,
      },
      {
        title: "Messenger",
        description: "Messenger",
        icon: <ExclamationTriangleIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <OtherForm />,
      },
      {
        title: "Instagram DM",
        description: "Instagram DM",
        icon: <ExclamationTriangleIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <OtherForm />,
      },
      {
        title: "Manual SMS",
        description: "Manual SMS",
        icon: <ExclamationTriangleIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <SendSMSForm />,
      },
      {
        title: "Manual Call",
        description: "Manual Call",
        icon: <ExclamationTriangleIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <OtherForm />,
      },
      {
        title: "GMB Messaging",
        description: "GMB Messaging",
        icon: <ExclamationTriangleIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <OtherForm />,
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
        form: <AddContactTag />,
      },
      {
        title: "Remove Contact Tag ",
        description: " Remove Contact Tag",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <OtherForm />,
      },
      {
        title: "Create/Update Opportunity ",
        description: "Create/Update Opportunity ",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <CreateUpdateOpportunity />,
      },
      {
        title: "Add To Notes ",
        description: " Add To Notes",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <OtherForm />,
      },
      {
        title: " Assign To User",
        description: " Assign To User",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <OtherForm />,
      },
      {
        title: "Remove Assigned User ",
        description: " Remove Assigned User",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <OtherForm />,
      },
      {
        title: "Set Event Start Date ",
        description: "Set Event Start Date ",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <OtherForm />,
      },
      {
        title: "Add To Workflow ",
        description: " Add To Workflow",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <AddToWorkFlow />,
      },
      {
        title: "Remove From Workflow ",
        description: "Remove From Workflow",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <RemoveFromWorkFlow />,
      },
      {
        title: "Remove From All Workflows ",
        description: " Remove From All Workflows",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <RemoveFromAllWorkFlow />,
      },
      {
        title: " Remove Opportunity",
        description: "Remove Opportunity ",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <SendEmailForm />,
      },
      {
        title: " Send Internal Notification",
        description: "Send Internal Notification ",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <SendEmailForm />,
      },
      {
        title: "Set Contact DND",
        description: " Set Contact DND",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <SendEmailForm />,
      },
      {
        title: " Edit Conversation",
        description: "Edit Conversation ",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <SendEmailForm />,
      },
      {
        title: "Send Review Request ",
        description: " Send Review Request",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <SendEmailForm />,
      },
      {
        title: "Stripe One Time Charge ",
        description: "Stripe One Time Charge ",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <SendEmailForm />,
      },
      {
        title: "Update Appointment Status ",
        description: "Update Appointment Status",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <SendEmailForm />,
      },
      {
        title: "Add Task ",
        description: "Add Task",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <SendEmailForm />,
      },
      {
        title: "Update Contact Field",
        description: "Update Contact Field",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <SendEmailForm />,
      },
      {
        title: "Facebook - Conversion API ",
        description: "Facebook - Conversion API ",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <SendEmailForm />,
      },
      {
        title: " Update Custom Value ",
        description: " Update Custom Value ",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <SendEmailForm />,
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
        form: <SendEmailForm />,
      },
      {
        title: "Webhook ",
        description: " Webhook ",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <SendEmailForm />,
      },
      {
        title: "Go To",
        description: "Go To",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <SendEmailForm />,
      },
      {
        title: "Math Operation",
        description: "Math Operation",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <SendEmailForm />,
      },
      {
        title: "Goal Event",
        description: "Goal Event",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <SendEmailForm />,
      },
      {
        title: "Loop",
        description: "Loop",
        icon: <PencilSquareIcon className="h-6 w-6 mr-1" />,
        link: "#",
        form: <SendEmailForm />,
      },
    ],
  },
];

export default actionData;
