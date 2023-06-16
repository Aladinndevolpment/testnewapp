import ModalDerived from "@/components/Modal";
import React, { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import CreatePipLine from "./CreatePipLine";
import { AiFillPieChart, AiOutlineClose } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import { PlusIcon } from "@heroicons/react/24/solid";

const PipelineTable = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [pipeLine, setPipeLine] = useState<any>([
    {
      id: 1,
      name: "Appointment",
      subData: [
        {
          id: 1,
          name: "Full Stack Developement Program",
        },
        { id: 2, name: "Python Automation Testing Program" },
        { id: 3, name: "UI/UX Program" },
        { id: 4, name: "Full Stack Developement Program" },
        { id: 5, name: "Python Automation Testing Program" },
        { id: 6, name: "UI/UX Program" },
      ],
    },

    {
      id: 2,
      name: "Leads",
      subData: [
        {
          id: 1,
          name: "Full Stack Developement Program",
        },
        { id: 2, name: "Python Automation Testing Program" },
        { id: 3, name: "UI/UX Program" },
        { id: 4, name: "Full Stack Developement Program" },
        { id: 5, name: "Python Automation Testing Program" },
        { id: 6, name: "UI/UX Program" },
      ],
    },
  ]);
  const [data, setData] = useState<any>([]);
  return (
    <>
      <ModalDerived
        visibility={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      >
        <div className=" bg-white rounded-lg  h-[85vh] pb-[5%]  overflow-y-hidden w-full scrollbar-hide ">
          <div className=" h-[100vh]  pt-5 pb-3 w-screen md:w-[80vh]">
            <div className="h-[6vh] flex justify-between items-start border-b-[1px] pb-4 px-5">
              <div>
                <p className="text-gray-800 font-medium md:text-lg ">
                  Edit Pipeline
                </p>
              </div>
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                <AiOutlineClose className="text-gray-800 h-6 w-6" />
              </button>
            </div>
            <div className="overflow-hidden ">
              <div className="h-[65vh] overflow-y-scroll scrollbar-hide px-4 pt-4 ">
                {data.map((item: any) => (
                  <div key={item.id}>
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => {
                        const updatedPipeLine = [...pipeLine];
                        updatedPipeLine[item.id - 1].name = e.target.value;
                        setPipeLine(updatedPipeLine);
                      }}
                      className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                    />
                    <div className="flex justify-between items-center px-2  gap-5 py-4">
                      <div className="w-full lg:w-[80%]">
                        <p className="text-gray-800 font-semibold text-base">
                          {" "}
                          Name
                        </p>
                      </div>
                      <div className="w-full lg:w-[20%]">
                        <p className="text-gray-800 font-semibold text-base text-right">
                          {" "}
                          Actions
                        </p>
                      </div>
                    </div>
                    <div className="w-full px-2">
                      {item?.subData?.length >= 1 && (
                        <>
                          {item?.subData?.map((subItem: any) => (
                            <div key={subItem.id}>
                              <div className="flex justify-between items-center gap-5">
                                <div className="w-full lg:w-[80%]">
                                  <input
                                    type="text"
                                    value={subItem.name}
                                    onChange={(e) => {
                                      const updatedPipeLine = [...pipeLine];
                                      updatedPipeLine[item.id - 1].subData[
                                        subItem.id - 1
                                      ].name = e.target.value;
                                      setPipeLine(updatedPipeLine);
                                    }}
                                    className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                                  />
                                </div>
                                <div className="w-full lg:w-[20%]">
                                  <div className="flex justify-end align-center">
                                    <AiFillPieChart className="text-green-500 text-lg" />
                                    <FaFilter className="text-green-500 mx-4" />
                                    <RiDeleteBin6Fill
                                      className="text-red-400"
                                      onClick={() => {
                                        const updatedPipeLine = [...pipeLine];
                                        updatedPipeLine[item.id - 1].subData =
                                          updatedPipeLine[
                                            item.id - 1
                                          ].subData.filter(
                                            (sub: any) => sub.id !== subItem.id
                                          );
                                        setPipeLine(updatedPipeLine);
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        const updatedPipeLine = [...pipeLine];
                        const lastSubItem =
                          updatedPipeLine[item.id - 1].subData[
                            updatedPipeLine[item.id - 1].subData.length - 1
                          ];
                        const newSubItem = {
                          id: lastSubItem.id + 1,
                          name: "",
                        };
                        updatedPipeLine[item.id - 1].subData.push(newSubItem);
                        setPipeLine(updatedPipeLine);
                      }}
                      className="flex justify-start items-center pl-2 pt-4 text-newBlue gap-1"
                    >
                      <PlusIcon className="h-5 w-5" /> Add SubData
                    </div>
                    <div className="w-full flex justify-between py-7 px-2 align-center ">
                      <div className=" flex justify-start align-center">
                        <p className="text-gray-800 font-semibold text-base text-right">
                          Visible in Funnel chart
                        </p>
                        <input
                          type="checkbox"
                          className="toggle mx-2   toggle-info"
                          //   checked
                          defaultChecked
                        />
                      </div>
                      <div className=" flex justify-start align-center">
                        <p className="text-gray-800 font-semibold text-base text-right">
                          Visible in Pie Chart
                        </p>
                        <input
                          type="checkbox"
                          className="toggle mx-2   toggle-info"
                          //   checked
                          defaultChecked
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[10vh] flex justify-end items-center border-t-[1px] pt-3 pb-2 px-5">
              <div className=" flex justify-end items-center gap-3">
                <button
                  onClick={() => {
                    setOpenModal(false);
                    setData([]);
                  }}
                  className="text-base text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-5 rounded-md  "
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setOpenModal(false);
                    setData([]);
                  }}
                  className="text-base flex justify-start items-center bg-newBlue py-2 px-5 text-white rounded-md  "
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </ModalDerived>
      <ModalDerived
        visibility={openCreateModal}
        onClose={() => {
          setOpenCreateModal(false);
        }}
      >
        <CreatePipLine
          onClose={() => {
            setOpenCreateModal(false);
          }}
          handleChange={(item: any) => {
            setPipeLine([
              ...pipeLine,
              {
                id: pipeLine.length + 1,
                name: item,
                subData: [
                  {
                    id: 1,
                    name: "Record A",
                  },
                ],
              },
            ]);

            setOpenCreateModal(false);
          }}
        />
      </ModalDerived>
      <div className="flex align-center rounded justify-center flex-col">
        <div className="w-full">
          <div className="w-full   py-4">
            <div className=" flex items-center justify-between  px-4">
              <p className="text-[#47494b] text-base font-semibold">
                All Pipelines
              </p>
              <button
                className="text-md  flex justify-center items-center  bg-newBlue hover:bg-secondary duration-500 m-1 py-2 px-3 2xl:px-6 text-white rounded-md  "
                onClick={() => {
                  setOpenCreateModal(true);
                }}
              >
                + Create New Pipeline
              </button>
            </div>
          </div>
        </div>
        <div className="flex align-center justify-center flex-col bg-white py-2  px-4 rounded">
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th className="bg-gray-50">Id</th>
                  <th className="bg-gray-50">Name</th>
                  <th className="bg-gray-50">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}

                {pipeLine.map((item: any, index: number) => (
                  <tr key={index}>
                    <td> {item.id} </td>
                    <td className="lg:w-[80%]"> {item.name} </td>
                    <td>
                      <div className="w-[80%] px-4 py-4 flex justify-end align-center h-auto">
                        <div
                          className="px-3 mx-3"
                          onClick={() => {
                            setData([...data, item]);
                            setOpenModal(true);
                          }}
                        >
                          <MdOutlineModeEdit />
                        </div>
                        <div
                          onClick={() => {
                            const updatedPipeLine = pipeLine.filter(
                              (i: any) => i.id !== item.id
                            );
                            setPipeLine(updatedPipeLine);
                          }}
                          className="px-3 mx-3"
                        >
                          <RiDeleteBin6Fill />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PipelineTable;
