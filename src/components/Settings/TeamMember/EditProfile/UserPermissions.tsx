import React, { useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MenuItem, Select } from "@mui/material";

export default function UserPermissions() {
  const [permissionData, setPermissionData] = useState([
    { id: 1, name: "dashboard status" },
    { id: 2, name: "appointments" },
    { id: 3, name: "campaigns" },
    { id: 4, name: "bulk request" },
    { id: 5, name: "triggers" },
    { id: 6, name: "funnels" },
    { id: 7, name: "opportunities" },
    { id: 8, name: "conversations" },
    { id: 9, name: "contacts" },
    { id: 10, name: "reviews" },
    { id: 11, name: "online listing" },
    { id: 12, name: "membership" },
    { id: 13, name: "settings" },
    { id: 14, name: "only assigned data" },
    { id: 15, name: "tags" },
    { id: 16, name: "lead value" },
    { id: 17, name: "marketing" },
    { id: 18, name: "websites" },
    { id: 19, name: "adwords reporting" },
    { id: 20, name: "facebook ads reporting" },
    { id: 21, name: "call reporting" },
    { id: 22, name: "attribution reporting" },
    { id: 23, name: "agent reporting" },
    { id: 24, name: "social planner" },
    { id: 25, name: "workflows" },
    { id: 26, name: "blogging" },
    { id: 27, name: "payments" },
    { id: 28, name: "invoicing" },
    { id: 29, name: "record payments" },
    { id: 30, name: "payment refund" },
    { id: 31, name: "cancel subscription" },
    { id: 32, name: "affiliate manager" },
  ]);

  const [selectedItems, setSelectedItems] = useState<any>([]);
  const toggleItem = (itemId: any) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id: any) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  return (
    <form action="">
      <div className="  bg-white h-[60vh] overflow-y-scroll scrollbar-hide px-4">
        <ul className="flex justify-between items-center flex-wrap pt-5">
          {permissionData.map((item: any, index: number) => (
            <li
              key={index}
              className="flex justify-start  w-1/2 mb-5 rounded-lg"
            >
              <p
                className={`w-[40%] capitalize text-gray-600 text-xs font-semibold tracking-wide ml-2`}
              >
                {item.name}
              </p>
              <div>
                <input
                  type="checkbox"
                  name="checkBox2"
                  onClick={() => toggleItem(item.id)}
                  className={`toggle toggle-md toggle-info ${
                    selectedItems.includes(item.id) ? "selected" : ""
                  }`}
                />
                {item?.name == "campaigns" || item?.name == "workflows" ? (
                  <div className="flex justify-start items-center rounded-lg mt-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checked:checkbox-info"
                    />

                    <p
                      className={` fontStrawFord text-gray-600 text-xs font-medium tracking-wide ml-2`}
                    >
                      Read Only
                    </p>
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-[10vh] flex justify-between items-center border-t-[1px] pb-4 mt-1.5 px-5">
        <button className="border-[1px] rounded-md px-5 py-2 border-gray-300 text-[12px] font-medium">
          Cancel
        </button>
        <button className="text-white bg-newBlue rounded-md px-5 py-2  text-[12px] font-medium">
          Save
        </button>
      </div>
    </form>
  );
}
