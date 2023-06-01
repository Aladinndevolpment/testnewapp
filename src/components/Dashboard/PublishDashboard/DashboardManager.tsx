import React from "react";
import Header from "./header";
import Sidebar from "./Sidebar";
import Link from "next/link";

export default function DashboardManager() {
  return (
    <div>
      {/* <Header /> */}
      <div className="flex items-start h-full w-full">
        <div>
          <Sidebar />
        </div>
        <div className="w-full">
          <div className="border-b border-grey/40 px-9 py-5">
            <div className="flex items-center gap-3 mb-2">
              <button
                type="button"
                className="h-4 w-4 rounded-full bg-white shadow-md flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-chevron-left w-3 h-3"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <p className="text-xs">Back to Dashboard</p>
            </div>
            <h2 className="text-lg font-medium">Dashboard Manager</h2>
          </div>
          <div className="px-9 py-5 h-[calc(100vh-165px)] overflow-auto">
            <h1 className="text-[32px] font-medium mb-8">2 Dashboard</h1>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex flex-wrap gap-4 items-center">
                <div className="relative text-grey">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-3 left-2"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path>
                  </svg>
                  <select className="form-select pl-8 pr-8 py-[9px] rounded-md focus:ring-0 focus:border-gray-300  text-sm border border-gray-300">
                    <option>Date created</option>
                  </select>
                </div>
                <div className="w-px bg-grey/20 h-10 hidden sm:block"></div>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    className="text-base border border-[#FF7043] text-[#FF7043] py-[7px] px-4 rounded-md"
                  >
                    All
                  </button>
                  <button
                    type="button"
                    className="text-base border flex items-center border-grey/40 text-grey py-[7px] px-4 rounded-md hover:border-[#FF7043] hover:text-[#FF7043] transition-all duration-300"
                  >
                    <div className="h-1 w-1 bg-green-600 rounded-full mr-2"></div>
                    Active
                  </button>
                  <button
                    type="button"
                    className="text-base border flex items-center border-grey/40 text-grey py-[7px] px-4 rounded-md hover:border-[#FF7043] hover:text-[#FF7043] transition-all duration-300"
                  >
                    <div className="h-1 w-1 bg-grey rounded-full mr-2"></div>
                    Inactive
                  </button>
                </div>
              </div>
              <Link
                href="/builder/dashboard/create"
                className="btn-gray bg-[#FF7043] border border-[#FF7043] hover:bg-transparent hover:text-[#FF7043] px-2.5 py-[9px] flex items-center gap-3 text-sm text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                </svg>
                New Dashboard
              </Link>
            </div>
            <div className="border border-b-0 rounded-b-none border-grey/40 rounded-md">
              <div className="p-5 flex flex-wrap items-center justify-between gap-3">
                <div className="w-full sm:w-80 relative text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute text-grey top-2.5 left-3"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                  <input
                    type="search"
                    className="form-input text-sm rounded-md border border-grey/40 focus:border-grey/40 focus:ring-0 pl-10 bg-white/10 w-full"
                    placeholder="Search blog"
                  ></input>
                </div>
                <p>
                  Showing{" "}
                  <select className="form-select py-1 rounded-md focus:ring-0 focus:border-gray-300  text-sm border border-gray-300">
                    <option>1</option>
                    <option>2</option>
                  </select>{" "}
                  of 5 results
                </p>
              </div>
            </div>
            <div className="grid grid-flow-col border border-grey/40 rounded-md rounded-t-none">
              <div className="overflow-auto">
                <table className="text-left text-sm font-normal w-full min-w-[1024px]">
                  <thead>
                    <tr>
                      <th className="p-4 bg-grey/5 border-r border-b w-[52px] font-medium border-grey/40">
                        <input
                          type="checkbox"
                          className="form-checkbox h-5 w-5 focus:ring-0 border-grey/40 rounded-md focus:outline-offset-0 focus:shadow-none focus:ring-offset-0"
                        />
                      </th>
                      <th className="p-4 bg-grey/5 border-r border-b font-medium border-grey/40">
                        Dashboard Name
                      </th>
                      <th className="p-4 bg-grey/5 border-r border-b font-medium border-grey/40">
                        Status
                      </th>
                      <th className="p-4 bg-grey/5 border-r border-b font-medium border-grey/40">
                        Owner
                      </th>
                      <th className="p-4 bg-grey/5 border-r border-b font-medium border-grey/40">
                        Assigned
                      </th>
                      <th className="p-4 bg-grey/5 border-r border-b font-medium border-grey/40">
                        Create Date
                      </th>
                      <th className="p-4 bg-grey/5 border-r border-b font-medium border-grey/40">
                        Last update
                      </th>
                      <th className="p-4 bg-grey/5 border-b font-medium border-grey/40"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border-r border-b w-[52px] font-medium border-grey/40">
                        <input
                          type="checkbox"
                          className="form-checkbox h-5 w-5 focus:ring-0 border-grey/40 rounded-md focus:outline-offset-0 focus:shadow-none focus:ring-offset-0"
                        />
                      </td>
                      <td className="p-4 border-r border-b border-grey/40">
                        Sales
                      </td>
                      <td className="p-4 border-r border-b border-grey/40">
                        <div className="bg-green-100 border border-green-600 text-green-600 py-1 px-3 rounded-full items-center inline-flex">
                          <div className="h-1 w-1 bg-green-600 rounded-full mr-2"></div>
                          Published
                        </div>
                      </td>
                      <td className="p-4 border-r border-b border-grey/40">
                        Darlene Robertson
                      </td>
                      <td className="p-4 border-r border-b border-grey/40">
                        Everyone
                      </td>
                      <td className="p-4 border-r border-b border-grey/40">
                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path>
                          </svg>
                          Jan 9, 2022
                        </div>
                      </td>
                      <td className="p-4 border-r border-b border-grey/40">
                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path>
                          </svg>
                          Jan 9, 2022
                        </div>
                      </td>
                      <td className="p-4 border-b font-medium border-grey/40">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-auto"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 border-r w-[52px] font-medium border-grey/40">
                        <input
                          type="checkbox"
                          className="form-checkbox h-5 w-5 focus:ring-0 border-grey/40 rounded-md focus:outline-offset-0 focus:shadow-none focus:ring-offset-0"
                        />
                      </td>
                      <td className="p-4 border-r border-grey/40">Sales</td>
                      <td className="p-4 border-r border-grey/40">
                        <div className="bg-green-100 border border-green-600 text-green-600 py-1 px-3 rounded-full items-center inline-flex">
                          <div className="h-1 w-1 bg-green-600 rounded-full mr-2"></div>
                          Published
                        </div>
                      </td>
                      <td className="p-4 border-r border-grey/40">
                        Darlene Robertson
                      </td>
                      <td className="p-4 border-r border-grey/40">Everyone</td>
                      <td className="p-4 border-r border-grey/40">
                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path>
                          </svg>
                          Jan 9, 2022
                        </div>
                      </td>
                      <td className="p-4 border-r border-grey/40">
                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path>
                          </svg>
                          Jan 9, 2022
                        </div>
                      </td>
                      <td className="p-4 font-medium border-grey/40">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-auto"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
