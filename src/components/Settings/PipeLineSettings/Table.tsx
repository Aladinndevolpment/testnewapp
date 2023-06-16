import ModalDerived from "@/components/Modal";
import { ToggleOn } from "@mui/icons-material";
import { ToggleButton } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillPieChart,
  AiOutlineClose,
  AiOutlinePieChart,
} from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

const PipelineTable = () => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState<any>([
    {
      id: 1,
      name: "Full Stack Developement Program",
    },
    { id: 2, name: "Python Automation Testing Program" },
    { id: 3, name: "UI/UX Program" },
    { id: 4, name: "Full Stack Developement Program" },
    { id: 5, name: "Python Automation Testing Program" },
    { id: 6, name: "UI/UX Program" },
  ]);

  function updateData() {
    console.log("update data");
    // setData({ name: "Alok" });
  }

  return (
    <>
      <ModalDerived
        visibility={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      >
        <div className=" bg-white rounded-lg  h-[85vh] pb-[5%]  w-full scrollbar-hide px-4 py-4 ">
          <div
            className=" h-[100vh]  pt-5 pb-3 w-screen md:w-[100vh]"
            //   onSubmit={handleSubmit}
          >
            <div className="h-[4vh] flex justify-between items-start border-0 pb-4 px-5">
              <div>
                <p className="text-gray-800 font-medium md:text-lg ">
                  Edit Pipeline
                </p>
              </div>
              <button onClick={() => setOpenModal(false)}>
                <AiOutlineClose className="text-gray-800 h-6 w-6" />
              </button>
            </div>
            <div className="overflow-hidden flex-col my-2 ">
              <div className="h-[6vh] px-4 py-3 align-center border-[1px]">
                <p>1. Appointments</p>
              </div>
              <div className="h-full flex justify-between align-center pr-8 pt-2">
                <div className="font-semibold">Stage Name</div>
                <div className="font-semibold">Actions</div>
              </div>
            </div>
            <div className="overflow-hidden flex flex-col">
              {data.map((item: any, index: number) => (
                <div
                  key={index}
                  className="h-auto align-center flex justify-between align-center"
                >
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={item.name}
                    onChange={(e) => console.log(e)}
                    className="w-[70%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                  />
                  <div className="w-[30%] px-4 py-4 flex justify-end align-center h-auto">
                    <AiFillPieChart className="text-green-500 text-lg" />
                    <FaFilter className="text-green-500 mx-4" />
                    <RiDeleteBin6Fill
                      className="text-red-400"
                      onClick={() => {
                        const updatedData = [...data];
                        updatedData.splice(index, 1);
                        setData(updatedData);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="h-auto flex justify-start items-center pl-4 pb-2 align-bottom">
              <div className=" flex justify-start items-center">
                <button
                  className="text-cyan-600"
                  onClick={() => {
                    // console.log("ALok Ranjan");
                    setData([
                      ...data,
                      {
                        id: data.length + 1,
                        name: "Demo Data",
                      },
                    ]);
                  }}
                >
                  + Add Stage
                </button>
              </div>
            </div>
            <div className="w-full flex justify-around align-center ">
              <div className="flex justify-center align-center">
                <p>Visible in Funnel chart</p>
                <input type="checkbox" className="toggle mx-2" checked />
              </div>
              <div className="flex justify-center align-center">
                <p>Visible in Pie Chart</p>
                <input type="checkbox" className="toggle mx-2" checked />
              </div>
            </div>
            <div className="h-[10vh] flex justify-end items-center border-t-[1px] pt-3 pb-2 px-5 align-bottom">
              <div className=" flex justify-end items-center gap-3">
                <button
                  onClick={() => console.log("okay")}
                  className="text-base text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-5 rounded-md  "
                >
                  Cancel
                </button>
                <button
                  // onSubmit={handleSubmit}
                  type="submit"
                  className="text-base flex justify-start items-center bg-green-500 py-2 px-5 text-white rounded-md  "
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </ModalDerived>
      <div className="flex align-center justify-center flex-col">
        <div className="w-full">
          <div className="w-full bg-slate-200  py-4">
            <div className="  border-b flex items-center justify-between  px-4 pb-3">
              <p className="text-[#47494b] text-lg font-semibold">Pipelines</p>
              <Link
                href="#"
                className="text-md  flex justify-center items-center  bg-green-600 hover:bg-green-500 duration-500 m-1 py-2 px-3 2xl:px-6 text-white rounded-md  "
              >
                + Create New Pipeline
              </Link>
            </div>
          </div>
        </div>
        <div className="flex align-center justify-center flex-col bg-white px-4 py-4 mx-4 rounded">
          <div className="w-full flex align-center justify-between">
            <p className="text-sm text-slate-400 font-semibold">Name</p>
          </div>
          <div className="group w-full flex align-center justify-between border-0 py-4">
            <div className="w-full flex align-center justify-between">
              <p className="text-sm font-medium">1. Appointments</p>
            </div>
            <div className="justify-around align-center group-hover:flex hidden">
              <div
                className="px-3 mx-3"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </div>
              <div className="px-3 mx-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="group w-full flex align-center justify-between border-0 py-4">
            <div className="w-full flex align-center justify-between">
              <p className="text-sm font-medium">2. Leads</p>
            </div>
            <div className="justify-around align-center group-hover:flex hidden">
              <div
                className="px-3 mx-3"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </div>
              <div className="px-3 mx-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PipelineTable;
