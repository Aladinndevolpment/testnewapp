import {
  ArrowsPointingInIcon,
  ArrowsRightLeftIcon,
  Bars4Icon,
  BuildingOfficeIcon,
  ChartBarIcon,
  IdentificationIcon,
  InboxStackIcon,
  MapIcon,
  SpeakerWaveIcon,
  Square3Stack3DIcon,
  TagIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const data = [
  {
    title: "Account",
    subContent: [
      {
        title: "Profile",
        icon: <UserCircleIcon className="h-5 w-5 text-FontGray" />,
        link: "#",
      },
      {
        title: "General",
        icon: <Bars4Icon className="h-5 w-5 text-FontGray" />,
        link: "#",
      },
      {
        title: "Snippets",
        icon: <ArrowsRightLeftIcon className="h-5 w-5 text-FontGray" />,
        link: "#",
      },
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
      {
        title: "Analytics",
        icon: <ChartBarIcon className="h-5 w-5 text-FontGray" />,
        link: "#",
      },
    ],
  },

  {
    title: "Configuration",
    subContent: [
      {
        title: "Fields",
        icon: <Square3Stack3DIcon className="h-5 w-5 text-FontGray" />,
        link: "#",
      },
      {
        title: "Fields Mapping",
        icon: <InboxStackIcon className="h-5 w-5 text-FontGray" />,
        link: "#",
      },
      {
        title: "Spotlight templated",
        icon: <SpeakerWaveIcon className="h-5 w-5 text-FontGray" />,
        link: "#",
      },

      {
        title: "Contact Grade Portal",
        icon: <IdentificationIcon className="h-5 w-5 text-FontGray" />,
        link: "#",
      },
      {
        title: "Account Grade Portal",
        icon: <BuildingOfficeIcon className="h-5 w-5 text-FontGray" />,
        link: "#",
      },
      {
        title: "Journeys",
        icon: <MapIcon className="h-5 w-5 text-FontGray" />,
        link: "#",
      },
      {
        title: "Tags",
        icon: <TagIcon className="h-5 w-5 text-FontGray" />,
        link: "#",
      },
      {
        title: "Triggers",
        icon: <ArrowsRightLeftIcon className="h-5 w-5 text-FontGray" />,
        link: "#",
      },
    ],
  },
];

export default data;
