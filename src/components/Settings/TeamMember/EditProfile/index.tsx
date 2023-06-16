import { TeamMemberContext } from "@/pages/settings/team-member";
import React, { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import UserInfo from "./UserInfo";
import UserRoles from "./UserRole";
import VoiceMailSettings from "./VoiceMailSettings";
import EditUserAvailability from "./EditUserAvailability";
import UserPermissions from "./UserPermissions";

export default function EditProfile() {
  const { editProfile, setEditProfile } = useContext(TeamMemberContext);
  const innerTabs = [
    {
      id: "tab1",
      label: "User Info",
      content: <UserInfo />,
    },
    {
      id: "tab2",
      label: "User Permission",
      content: <UserPermissions />,
    },
    {
      id: "tab3",
      label: "User Roles",
      content: <UserRoles />,
    },
    {
      id: "tab4",
      label: "Call and Voicemail Settings",
      content: <VoiceMailSettings />,
    },
    {
      id: "tab5",
      label: "User Availability",
      content: <EditUserAvailability />,
    },
  ];

  const [activeInnerTab, setActiveInnerTab] = useState(innerTabs[0].id);

  return (
    <div>
      <div className=" h-[85vh] pb-[5%] rounded-lg  bg-white overflow-y-hidden w-full scrollbar-hide ">
        <div className="  h-[100vh] pt-5 pb-3 w-screen md:w-[100vh]">
          <div className="h-[6vh] flex justify-between items-center  pb-4 px-5">
            <p className="text-gray-800 font-medium md:text-lg ">
              Team Management
            </p>
            <button onClick={() => setEditProfile(false)}>
              <AiOutlineClose className="text-gray-800 h-6 w-6" />
            </button>
          </div>
          <div className="overflow-hidden ">
            <ul className="h-[7vh]  lg:px-2 border-b-[1px] border-[#dfdfdf] pt-2 flex justify-start items-center overflow-auto scrollbar-hide gap-4 bg-white  ">
              {innerTabs.map((tab: any) => (
                <li key={tab.id}>
                  <button
                    className={`px-3 lg:px-1 transition-all duration-300 font-medium text-xs   ${
                      activeInnerTab === tab.id
                        ? "border-b-[1px] border-newBlue text-newBlue pb-4 font-semibold md:text-[13px]"
                        : "text-gray-600 pb-4 font-semibold md:text-[13px]"
                    }`}
                    onClick={() => setActiveInnerTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="  bg-white h-[70vh] overflow-y-scroll scrollbar-hide">
              {innerTabs.map((tab: any) => (
                <div
                  key={tab.id}
                  className={`  transition-all duration-300 rounded-md  ${
                    activeInnerTab === tab.id ? "block" : " text-black hidden"
                  } `}
                >
                  {tab.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
