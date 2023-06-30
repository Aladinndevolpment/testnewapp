import React, { useContext, useState } from "react";
// import { PiDotsSix } from "react-icons/pi";
import {
  Box,
  FormControlLabel,
  Switch,
  Grid,
  Button as MaterialButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { useNode, Element } from "@craftjs/core";
import { useEditor } from "@craftjs/core";
import { CraftContext } from "@/pages/builder/website/craft";

import lz from "lzutf8";
import copy from "copy-to-clipboard";
import {
  BiArrowToLeft,
  BiArrowToRight,
  BiDesktop,
  BiRedo,
  BiUndo,
} from "react-icons/bi";
import { BsTablet, BsThreeDots } from "react-icons/bs";
import { FaFilter, FaMobileAlt } from "react-icons/fa";
import { GroupAdd } from "@mui/icons-material";
import { IoAddCircleOutline } from "react-icons/io5";
import ModalDerived from "../Modal";
import { PlusIcon } from "@heroicons/react/24/solid";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiFillPieChart, AiOutlineClose } from "react-icons/ai";
import FlyOut from "../Flyout";
import { TbDots } from "react-icons/tb";
import { RxDragHandleDots2 } from "react-icons/rx";
import LeftFlyOut from "../LeftLayout";

export const TopbarSection = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const SectionData = [
    {
      id: 1,
      title: "Sections",
    },
    {
      id: 2,
      title: "Rows",
    },
    {
      id: 3,
      title: "Elements",
    },
    {
      id: 4,
      title: "Global Sections",
    },
    {
      id: 5,
      title: "Section Templates",
    },
  ];

  const [workFlowData, setWorkFlowData] = useState(null);
  const [activeSectionData, setActiveSectionData] = useState(SectionData[0].id);

  return (
    <>
      <div className=" bg-white rounded-lg pb-[5%]  overflow-y-hidden  scrollbar-hide z-50 flex">
        <div className=" w-[35%] border-r-[1px]   bg-white    ">
          <div
            className={`py-3 flex bg-white overflow-y-scroll scrollbar-hide flex-col justify-start top-0 left-0 pl-0 w-[80%] md:w-[40%]  lg:w-full fixed lg:relative h-screen z-40 `}
          >
            <ul className="w-full pt-3 px-4 ">
              {SectionData.map((item: any, index: any) => (
                <li
                  key={item.id}
                  onClick={() => {
                    setActiveSectionData(item.id);
                  }}
                  className={` ${
                    activeSectionData == item.id
                      ? "   bg-gray-100"
                      : "   bg-white "
                  } cursor-pointer mb-2 py-2   rounded-[5px]`}
                >
                  <p
                    className={`px-3 capitalize text-gray-500 ${
                      activeSectionData == item.id ? " text-gray-900" : null
                    } hover:text-dark text-sm font-semibold  tracking-wide  `}
                  >
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-[65%] flex-col justify-center items-start border-b border-gray-300">
          <div className="w-full h-[100px] p-2 m-2 font-bold flex justify-between items-center">
            <div>Add A Section</div>
            <div>
              <AiOutlineClose className="text-gray-800 h-6 w-6" />
            </div>
          </div>
          <div className="overflow-scroll flex justify-around items-center flex-wrap ">
            <div className=" ml-2 my-2 w-[45%] h-[100px] border-2 border-gray-200 px-2 pb-1 flex-col">
              <div className=" w-full h-5 mt-2 flex justify-center items-center">
                <RxDragHandleDots2
                  color="gray"
                  style={{ transform: "rotate(90deg)" }}
                />
              </div>
              <div className="flex justify-center items-center">
                <div className="bg-gray-300 w-full h-5 my-2 flex justify-between items-center">
                  <BiArrowToLeft color="white" />

                  <BiArrowToRight color="white" />
                </div>
              </div>
              <div className="mt-2 font-medium text-slate-950 text-sm flex justify-center items-center">
                {" "}
                Full Width
              </div>
            </div>
            <div className=" ml-2 my-2 w-[45%] h-[100px] px-3 border-2 border-gray-200">
              <div className=" w-full mt-2 h-5 flex justify-center items-center">
                <RxDragHandleDots2
                  color="gray"
                  style={{ transform: "rotate(90deg)" }}
                />
              </div>
              <div className="flex justify-center items-center border-x-2 border-gray-300">
                <div className="bg-gray-300 w-[50%] h-5 my-2 flex justify-between items-center">
                  <BiArrowToLeft color="white" />

                  <BiArrowToRight color="white" />
                </div>
              </div>
              <div className="mt-2 flex font-medium text-slate-950 text-sm justify-center items-center">
                {" "}
                Wide
              </div>
            </div>
            <div className=" ml-2 my-2 w-[45%] h-[100px] px-4 border-2 border-gray-200">
              <div className=" w-full mt-2 h-5 flex justify-center items-center">
                <RxDragHandleDots2
                  color="gray"
                  style={{ transform: "rotate(90deg)" }}
                />
              </div>
              <div className="flex justify-center items-center border-x-2 border-gray-300">
                <BiArrowToRight color="gray" />
                <div className="bg-gray-300 w-[40%] h-5 my-2 mx-1 flex justify-between items-center" />
                <BiArrowToLeft color="gray" />
              </div>
              <div className="mt-2 flex font-medium text-slate-950 text-sm justify-center items-center">
                {" "}
                Medium
              </div>
            </div>
            <div className=" mx-2 my-2 w-[45%] h-[100px] px-4 border-2 border-gray-200">
              <div className=" w-full h-5 mt-2 flex justify-center items-center">
                <RxDragHandleDots2
                  color="gray"
                  style={{ transform: "rotate(90deg)" }}
                />
              </div>
              <div className="flex justify-center items-center border-x-2 border-gray-300">
                <BiArrowToRight color="gray" />
                <div className="bg-gray-300 w-[25%] h-5 my-2 mx-1 flex justify-between items-center" />
                <BiArrowToLeft color="gray" />
              </div>
              <div className="mt-2 flex font-medium text-slate-950 text-sm justify-center items-center">
                {" "}
                Small
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
