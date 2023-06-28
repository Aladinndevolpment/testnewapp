import React, { useState } from "react";
import Sidebar from "./Sidebar";
// import { useDispatch } from "react-redux";
import { BiCloudUpload } from "react-icons/bi";
import { Client, HydrationProvider } from "react-hydration-provider";
import Link from "next/link";
import { MenuItem, Select } from "@mui/material";

export default function Dashboard() {
  const [DropDownRole, SetDropDownRole] = useState("");
  // const dispatch = useDispatch();

  const _handleFileUpload = (e: any) => {
    // e.preventDefault();
    // const reader = new FileReader();
    // reader.onload = async (e: any) => {
    //   const text = e.target.result;
    //   const loadedData = JSON.parse(text);
    //   dispatch({ type: "COMPONENT_CHANGED", payload: loadedData });
    //   // navigate('/maindashboard');
    // };
    // reader.readAsText(e.target.files[0]);
  };
  return (
    <>
      <HydrationProvider>
        <Client>
          <div className="w-full   bg-white overflow-y-scroll">
            <div className="flex items-start">
              <Sidebar value={0} />
              <div className="w-full flex-1">
                <div className=" 2xl:min-h-[calc(100vh-150px)] xl:min-h-[calc(100vh-82px)] md:min-h-[calc(100vh-200px)] xs:min-h-[calc(100vh-50px)]  p-12">
                  <h2 className="text-xl font-bold text-black mb-8">
                    Dashboard Information
                  </h2>
                  <div className="mb-5">
                    <label
                      htmlFor="first-name"
                      className="block text-sm text-black"
                    >
                      Dashboard Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        placeholder="Please Enter Name"
                        id="first-name"
                        className="block w-[368px] rounded-md border border-grey/50 px-2 py-1.5 text-black shadow-sm focus:ring-0 focus:shadow-none placeholder:text-gray-400 text-sm leading-6"
                      />
                    </div>
                  </div>
                  <div className="mb-5 dashboard">
                    <p className="block text-sm text-black mb-2.5">
                      Who can see this Dashboard?
                    </p>
                    {/* <div className="flex items-center mr-4 mb-4">
                      <input
                        id="radio1"
                        type="radio"
                        name="radio"
                        className=""
                      />
                      <label
                        htmlFor="radio1"
                        className="flex items-center cursor-pointer text-base"
                      >
                        <span className="w-5 h-5 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                        Only Me
                      </label>
                    </div> */}
                    {/* Only Me */}
                    <div className="form-control ml-3 my-3 ">
                      <label className=" cursor-pointer space-x-2 flex items-center">
                        <input
                          type="radio"
                          name="radio-10"
                          className="radio checked:bg-blue-500 scale-90"
                          onChange={(e) => SetDropDownRole("")}
                        />
                        <span className="text-base">Only Me</span>
                      </label>
                    </div>

                    {/* EveryOne */}
                    <div className="form-control ml-3 my-3 ">
                      <label className=" cursor-pointer space-x-2 flex items-center">
                        <input
                          type="radio"
                          name="radio-10"
                          className="radio checked:bg-blue-500 scale-90"
                          onChange={(e) => SetDropDownRole("")}
                        />
                        <span className="text-base">Everyone</span>
                      </label>
                    </div>

                    {/* <div className="flex items-center mr-4 mb-4">
                      <input
                        id="radio2"
                        type="radio"
                        name="radio"
                        className=""
                        onChange={(e) => SetDropDownRole("")}
                      />
                      <label
                        htmlFor="radio2"
                        className="flex items-center cursor-pointer text-base"
                      >
                        <span className="w-5 h-5 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                        Everyone
                      </label>
                    </div> */}

                    {/* Specific Use */}
                    <div className="form-control ml-3 my-3 ">
                      <label className=" cursor-pointer space-x-2 flex items-center">
                        <input
                          type="radio"
                          name="radio-10"
                          className="radio checked:bg-blue-500 scale-90"
                          checked={DropDownRole != ""}
                          onChange={(e) => SetDropDownRole("")}
                        />
                        <span className="text-base">
                          Specific Use, Team or role
                        </span>
                      </label>
                      <Select
                        className="mt-2 ml-6 w-[42%]"
                        value={DropDownRole}
                        onChange={(e) => SetDropDownRole(e.target.value)}
                      >
                        <MenuItem>Select</MenuItem>
                        <MenuItem value={"1"}>1</MenuItem>
                        <MenuItem value={"2"}>2</MenuItem>
                        <MenuItem value={"3"}>3</MenuItem>
                      </Select>
                    </div>

                    {/* <div className="flex items-center mr-4 mb-3">
                      <input
                        id="radio3"
                        type="radio"
                        name="radio"
                        className=""
                        checked={DropDownRole != ""}
                        onChange={(e) => SetDropDownRole("")}
                      />
                      <label
                        htmlFor="radio3"
                        className="flex items-center cursor-pointer text-base"
                      >
                        <span className="w-5 h-5 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                        Specific Use, Team or role
                      </label>
                    </div> */}
                    {/* <div className="flex ml-6">
                      <input
                    type="text"
                    value={DropDownRole}
                    onChange={(e) => SetDropDownRole(e.target.value)}
                    placeholder="Search "
                    className=""
                  />
                      <div className="bg-white text-light-grey flex justify-center items-center rounded-r-md px-2 font-semibold border border-l-0 border-grey/50 cursor-pointer">
                    Can Edit
                  </div>

                      <select
                        value={DropDownRole}
                        className="w-[340px] rounded-md border border-grey/50 px-2 py-1.5 text-black shadow-sm focus:ring-0 focus:border-grey/50 focus:shadow-none placeholder:text-gray-400 text-sm leading-6"
                        onChange={(e) => SetDropDownRole(e.target.value)}
                      >
                        <option value="">Can edit</option>
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div> */}
                  </div>
                  <h3
                    className="prose lg:prose-xl"
                    style={{
                      width: "20%",
                      textAlign: "center",
                      marginBottom: "15px",
                      fontSize: "20px",
                    }}
                  >
                    OR
                  </h3>
                  <div
                    style={{
                      width: "20%",
                      justifyContent: "space-around",
                      display: "flex",
                    }}
                  >
                    <button
                      style={{ display: "flex" }}
                      onClick={() => {
                        // document.getElementById('file-load').click()
                      }}
                      className="header-brand btn-gray"
                    >
                      <BiCloudUpload
                        size={25}
                        style={{ marginRight: "10px" }}
                      />{" "}
                      Upload
                    </button>
                  </div>
                  <input
                    type="file"
                    hidden
                    id="file-load"
                    onChange={_handleFileUpload}
                  />
                </div>
                <div className="border-t border-grey/20 py-5 px-12 flex items-center justify-end gap-2 ">
                  <button
                    type="button"
                    className="bg-secondary rounded-md  px-5 py-2 text-white"
                  >
                    Cancel
                  </button>

                  <Link
                    href="template"
                    className="bg-newBlue rounded-md px-5 py-2 text-white"
                  >
                    Next
                  </Link>

                  {/* <button type='button' className='btn-gray'>Next</button> */}
                </div>
              </div>
            </div>
          </div>
        </Client>
      </HydrationProvider>
    </>
  );
}
