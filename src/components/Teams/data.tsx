import {
  ArrowsPointingInIcon,
  ArrowsRightLeftIcon,
  Bars4Icon,
  BuildingOfficeIcon,
  ChartBarIcon,
  GlobeAltIcon,
  IdentificationIcon,
  InboxStackIcon,
  MapIcon,
  PhoneArrowDownLeftIcon,
  SpeakerWaveIcon,
  Square3Stack3DIcon,
  TagIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { BsKanbanFill } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";

const data = [
  {
    title: "Account",
    subContent: [
      {
        title: "My Profile",
        icon: <UserCircleIcon className="h-5 w-5 text-FontGray" />,
        link: "#",
      },
      // {
      //   title: "General",
      //   icon: <Bars4Icon className="h-5 w-5 text-FontGray" />,
      //   link: "#",
      // },
      // {
      //   title: "Snippets",
      //   icon: <ArrowsRightLeftIcon className="h-5 w-5 text-FontGray" />,
      //   link: "#",
      // },
    ],
  },
  {
    title: "Company",
    subContent: [
      {
        title: "Company Profile",
        icon: <BuildingOfficeIcon className="h-5 w-5 text-FontGray" />,
        link: "#",
      },
      {
        title: "Team Members",
        icon: <UsersIcon className="h-5 w-5 text-FontGray" />,
        link: "/team",
      },
      {
        title: "Integrations",
        icon: <ArrowsPointingInIcon className="h-5 w-5 text-FontGray" />,
        link: "/integrations",
      },
      // {
      //   title: "Analytics",
      //   icon: <ChartBarIcon className="h-5 w-5 text-FontGray" />,
      //   link: "#",
      // },
    ],
  },

  {
    title: "Configuration",
    subContent: [
      {
        title: "Calendar",
        icon: <MdSpaceDashboard className="h-5 w-5 text-FontGray" />,
        link: "/calendar",
      },
      {
        title: "Custom Fields",
        icon: <Square3Stack3DIcon className="h-5 w-5 text-FontGray" />,
        link: "#",
      },
      {
        title: "Custom Values",
        icon: <InboxStackIcon className="h-5 w-5 text-FontGray" />,
        link: "#",
      },
      {
        title: "Tags",
        icon: <TagIcon className="h-5 w-5 text-FontGray" />,
        link: "#",
      },
      {
        title: "Pipeline",
        icon: <BsKanbanFill className="h-5 w-5 text-FontGray" />,
        link: "#",
      },
      {
        title: "Phone Number",
        icon: <PhoneArrowDownLeftIcon className="h-5 w-5 text-FontGray" />,
        link: "#",
      },
      {
        title: "Domains",
        icon: <GlobeAltIcon className="h-5 w-5 text-FontGray" />,
        link: "#",
      },
    ],
  },
];

export default data;
