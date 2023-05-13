import { BsFillCalendarCheckFill } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import { SiGooglechat } from "react-icons/si";
import { RiContactsFill } from "react-icons/ri";
import {
  BsKanbanFill,
  BsFillCreditCard2BackFill,
  BsDiagram2Fill,
} from "react-icons/bs";

const data = [
  {
    title: "Dashboard",
    iconCustom: <BsFillCalendarCheckFill className="h-5 w-5" />,
    icon: require("../../../../public/images/layouts/1.svg"),
    activeIcon: require("../../../../public/images/layouts/11.svg"),
    link: "/",
  },
  {
    title: "Calendar",
    iconCustom: <MdSpaceDashboard className="h-5 w-5" />,
    icon: require("../../../../public/images/layouts/2.svg"),
    activeIcon: require("../../../../public/images/layouts/22.svg"),
    link: "/calendar",
  },
  {
    title: "Conversations",
    iconCustom: <SiGooglechat className="h-5 w-5" />,
    icon: require("../../../../public/images/layouts/3.svg"),
    activeIcon: require("../../../../public/images/layouts/33.svg"),
    link: "/chat",
  },
  {
    title: "Contacts",
    iconCustom: <RiContactsFill className="h-5 w-5" />,
    icon: require("../../../../public/images/layouts/4.svg"),
    activeIcon: require("../../../../public/images/layouts/44.svg"),
    link: "/contact",
  },
  {
    title: "Pipeline",
    iconCustom: <BsKanbanFill className="h-5 w-5" />,
    icon: require("../../../../public/images/layouts/5.svg"),
    activeIcon: require("../../../../public/images/layouts/55.svg"),
    link: "/workflow/workflow",
  },
  {
    title: "Payments ",
    iconCustom: <BsFillCreditCard2BackFill className="h-5 w-5" />,
    icon: require("../../../../public/images/layouts/6.svg"),
    activeIcon: require("../../../../public/images/layouts/66.svg"),
    link: "/payments",
  },
  {
    title: "Automations ",
    iconCustom: <BsDiagram2Fill className="h-5 w-5" />,
    icon: require("../../../../public/images/layouts/6.svg"),
    activeIcon: require("../../../../public/images/layouts/66.svg"),
    link: "/integrations",
  },
];

export default data;
