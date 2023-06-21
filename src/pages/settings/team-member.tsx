import SettingsSidebar from "@/components/SettingsSidebar/TeamsSidebar";
import Search from "@/layouts/GlobalLayout/components/Search";
import {
  ShieldCheckIcon,
  UserIcon,
  EllipsisVerticalIcon,
  EyeIcon,
  ChevronDownIcon,
  PlusSmallIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { RiDeleteBin2Line } from "react-icons/ri";
import { createContext } from "react";
import ModalDerived from "@/components/Modal";
import EditProfile from "@/components/Settings/TeamMember/EditProfile";
import { AiOutlineClose } from "react-icons/ai";
import { MenuItem, Select } from "@mui/material";

export const TeamMemberContext = createContext({
  editProfile: false,
  setEditProfile: (e: boolean) => {},
});

export default function TeamMember() {
  const [addProfile, setAddProfile] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [userData, setUserData] = useState<any>([
    {
      name: "Cy Ganderton",
      email: "cyganderton@gmail.com",
      date: "23 Dec 2022",
      role: "Admin",
      status: "complete",
    },
    {
      name: "Guy Hawkins",
      email: "guyhawk@gmail.com",
      date: "28 Dec 2022",
      role: "Read Only",
      status: "pending",
    },
    {
      name: "Jhon Doe",
      email: "jhondoe@gmail.com",
      date: "29 Dec 2022",
      role: "Basic",
      status: "pending",
    },
    {
      name: "Sarah Doe",
      email: "cyganderton@gmail.com",
      date: "23 Dec 2022",
      role: "Admin",
      status: "pending",
    },
  ]);

  const secondUserData = [
    {
      name: "Cy Ganderton",
      email: "cyganderton@gmail.com",
      date: "23 Dec 2022",
      role: "Admin",
      status: "pending",
    },
    {
      name: "Guy Hawkins",
      email: "guyhawk@gmail.com",
      date: "28 Dec 2022",
      role: "Read Only",
      status: "pending",
    },
  ];

  const [errors, setErrors] = useState<any>({});
  const [formValues, setFormValues] = useState<any>({
    name: "",
    email: "",
    date: "",
    role: "",
    status: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    //validate errors
    const validationErrors: any = {};
    if (!formValues.name) {
      validationErrors.name = "Required";
    }
    if (!formValues.email) {
      validationErrors.email = "Required";
    }
    if (!formValues.role) {
      validationErrors.role = "Required";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setUserData((prevValues: any) => [
      ...userData,
      {
        name: formValues?.name,
        email: formValues?.email,
        date: new Date(),
        role: formValues?.role,
        status: "pending",
      },
    ]);
    setFormValues({
      name: "",
      email: "",
      date: "",
      role: "",
      status: "",
    });
    setErrors({});

    setAddProfile(false);
  };

  const [filterValue, setFilterValue] = useState("");

  const handleFilter = (event: any) => {
    setFilterValue(event.target.value);
  };

  const filteredData = userData.filter((item: any) => {
    return (
      item.name.toLowerCase().includes(filterValue.toLowerCase()) ||
      item.email.toLowerCase().includes(filterValue.toLowerCase()) ||
      item.date.toLowerCase().includes(filterValue.toLowerCase()) ||
      item.role.toLowerCase().includes(filterValue.toLowerCase()) ||
      item.status.toLowerCase().includes(filterValue.toLowerCase())
    );
  });

  return (
    <>
      <TeamMemberContext.Provider value={{ editProfile, setEditProfile }}>
        <ModalDerived
          visibility={editProfile}
          onClose={() => setEditProfile(false)}
        >
          <EditProfile />
        </ModalDerived>

        <ModalDerived
          visibility={addProfile}
          onClose={() => setAddProfile(false)}
        >
          <div className=" bg-white rounded-lg  h-[85vh] pb-[5%]  overflow-y-hidden w-full scrollbar-hide ">
            <form
              className=" h-[100vh]  pt-5 pb-3 w-screen md:w-[100vh]"
              onSubmit={handleSubmit}
            >
              <div className="h-[10vh] flex justify-between items-start border-b-[1px] pb-4 px-5">
                <div>
                  <p className="text-gray-800 font-medium md:text-lg ">
                    Add Domain
                  </p>
                </div>
                <button onClick={() => setAddProfile(false)}>
                  <AiOutlineClose className="text-gray-800 h-6 w-6" />
                </button>
              </div>
              <div className="overflow-hidden ">
                <div className="h-[60vh]">
                  {/*  Add Domain */}
                  <div className="mx-5 py-2">
                    <div className="flex items-center  justify-between ">
                      <label
                        className="block text-[#47494b] text-sm pt-1 font-semibold"
                        htmlFor=""
                      >
                        Name
                      </label>
                    </div>
                    <input
                      type="text"
                      id=""
                      name="name"
                      value={formValues.name}
                      onChange={handleChange}
                      placeholder="Enter Name"
                      className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                    />
                    {errors.name && (
                      <div className=" text-red-500 text-xs pt-1">
                        {errors.name}
                      </div>
                    )}
                  </div>
                  <div className="mx-5 py-2">
                    <div className="flex items-center  justify-between ">
                      <label
                        className="block text-[#47494b] text-sm pt-1 font-semibold"
                        htmlFor=""
                      >
                        Email
                      </label>
                    </div>
                    <input
                      type="email"
                      id=""
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                    />
                    {errors.email && (
                      <div className=" text-red-500 text-xs pt-1">
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div className="mx-5 py-2">
                    <div className="flex items-center  justify-between ">
                      <label
                        className="block text-[#47494b] text-sm pt-1 font-semibold"
                        htmlFor=""
                      >
                        Role
                      </label>
                    </div>
                    <Select
                      name="role"
                      value={formValues.role}
                      onChange={handleChange}
                      className="px-2 rounded-lg mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
                    >
                      <MenuItem value="Admin">Admin</MenuItem>
                      <MenuItem value="Basic">Basic</MenuItem>
                      <MenuItem value="Read only">Read only</MenuItem>
                    </Select>

                    {errors.role && (
                      <div className=" text-red-500 text-xs pt-1">
                        {errors.role}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="h-[10vh] flex justify-end items-center border-t-[1px] pt-3 pb-2 px-5">
                <div className=" flex justify-end items-center gap-3">
                  <button
                    onClick={() => setAddProfile(false)}
                    className="text-base text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-5 rounded-md  "
                  >
                    Cancel
                  </button>
                  <button
                    onSubmit={handleSubmit}
                    type="submit"
                    className="text-base flex justify-start items-center bg-secondary py-2 px-5 text-white rounded-md  "
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </ModalDerived>

        <div className="flex flex-wrap justify-center ">
          <div className="w-full lg:w-[25%] border-r-[1px]   bg-white    ">
            <SettingsSidebar />
          </div>

          <div className="w-full lg:w-[75%]  bg-white h-[100vh] scrollbar-hide  ">
            <header className="block w-full mb-5 h-32 lg:h-16 items-center relative z-10 border-b-[1px] border-lightGray">
              <div className="flex flex-center flex-col h-full justify-center lg:mx-auto relative  text-white z-10">
                <div className="flex flex-wrap lg:flex-nowrap justify-center items-center  relative w-full sm:ml-0 sm:pr-2  ">
                  <div className="flex justify-between items-center  w-full md:w-[25%] pl-2 pr-5 py-1.5 rounded-md">
                    <div className={`flex items-center w-full justify-start`}>
                      <div className="flex lg:hidden justify-between items-center">
                        <button className=" font-space tracking-wider ml-6 block lg:hidden  ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="  h-12 w-12 text-black mt-[20%]  "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                          </svg>
                        </button>
                      </div>
                      <p
                        className={`ml-6 capitalize text-dark   text-[20px] font-semibold  tracking-wide  `}
                      >
                        Team Members
                      </p>
                    </div>
                  </div>

                  <div className=" flex items-center justify-start lg:justify-end pl-5 lg:p-1   w-full md:w-[75%]   ">
                    <div className="hidden md:block relative  p-1">
                      <input
                        type="text"
                        className="pl-10 bg-[#35383e] border-[1px] border-lightGray  rounded-full py-2.5  w-[190px] md:w-[260px]  text-sm focus:outline-none focus:border-none   focus:bg-white focus:rounded-full  text-black"
                        placeholder="Search lead, contact and more"
                        value={filterValue}
                        onChange={handleFilter}
                      />
                      <div className="   absolute top-2 left-2 font-bold h-[30px] w-[30px] p-1.5 rounded-full">
                        <MagnifyingGlassIcon className="  text-FontGray" />
                      </div>
                    </div>
                    <div className="relative ml-3">
                      <button
                        onClick={() => setAddProfile(true)}
                        className="h-8 mr-2  bg-newBlue font-medium py-2 text-sm flex justify-center items-center rounded-lg px-3"
                      >
                        <PlusSmallIcon className="h-6 w-6 text-white mr-1" />
                        <span>Add Member</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div className="overflow-x-auto p-4">
              <table className="table w-full shadow-md rounded-[20px] border">
                {/* head */}
                <thead>
                  <tr className="border-b border-b-gray-200 ">
                    <th className="bg-white">
                      <div className="flex items-center">
                        <div className="mr-2">Name</div>
                        <div>
                          <ChevronUpIcon className="text-newBlue h-2 w-2" />
                          <ChevronDownIcon className="text-newBlue h-2 w-2" />
                        </div>
                      </div>
                    </th>
                    <th className="bg-white">
                      <div className="flex items-center">
                        <div className="mr-2">Last Active</div>
                        <div>
                          <ChevronUpIcon className="text-newBlue h-2 w-2" />
                          <ChevronDownIcon className="text-newBlue h-2 w-2" />
                        </div>
                      </div>
                    </th>
                    <th className="bg-white">
                      <div className="flex items-center">
                        <div className="mr-2">Role</div>
                        <div>
                          <ChevronUpIcon className="text-newBlue h-2 w-2" />
                          <ChevronDownIcon className="text-newBlue h-2 w-2" />
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}

                  {filteredData.map((item: any, index: number) => (
                    <tr
                      key={index}
                      className="border-b border-b-gray-200 rounded-[20px]"
                    >
                      <td className=" w-[70%]">
                        <p className="text-black font-medium">{item.name}</p>
                        <span className="text-sm text-gray-500">
                          {item.email}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`${
                            item.status == "pending"
                              ? "bg-[#fef0c7] text-[#854925]"
                              : "bg-gray-100 text-gray-500"
                          }  px-2 py-1  rounded-lg shadow text-xs font-medium`}
                        >
                          {item.status == "pending"
                            ? "Pending Invite"
                            : item.date}
                        </span>
                      </td>
                      <td>
                        <div className="flex justify-between">
                          <div className="dropdown">
                            <label tabIndex={0} className=" ">
                              <div className="flex items-center">
                                {item.role == "Admin" && (
                                  <ShieldCheckIcon className="text-newBlue h-4 w-4 mr-1" />
                                )}

                                {item.role == "Read Only" && (
                                  <EyeIcon className="text-newBlue h-4 w-4 mr-1" />
                                )}

                                {item.role == "Basic" && (
                                  <UserIcon className="text-newBlue h-4 w-4 mr-1" />
                                )}

                                <span className="text-newBlue text-sm font-semibold mr-2">
                                  {item.role}
                                </span>
                                <ChevronDownIcon className="text-newBlue h-4 w-4" />
                              </div>
                            </label>
                            <div
                              tabIndex={0}
                              className="dropdown-content card card-compact w-44 py-2 px-4 shadow bg-white text-dark"
                            >
                              <div>
                                <div className="flex justify-start items-start py-2">
                                  <input
                                    type="checkbox"
                                    name="1"
                                    className="checkbox checkbox-sm rounded-sm bg-transparent"
                                  />
                                  <p className=" text-[13px] font-medium  ml-2 mt-[-0.5px]">
                                    Admin
                                  </p>
                                </div>
                                <div className="flex justify-start items-start py-2">
                                  <input
                                    type="checkbox"
                                    name="2"
                                    className="checkbox checkbox-sm rounded-sm bg-transparent"
                                  />
                                  <p className=" text-[13px] font-medium  ml-2 mt-[-0.5px]">
                                    User
                                  </p>
                                </div>
                                <div className="flex justify-start items-start py-2">
                                  <input
                                    type="checkbox"
                                    name="3"
                                    className="checkbox checkbox-sm rounded-sm bg-transparent"
                                  />
                                  <p className=" text-[13px] font-medium  ml-2 mt-[-0.5px]">
                                    View Only
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="dropdown dropdown-bottom dropdown-end">
                              <EllipsisVerticalIcon
                                tabIndex={0}
                                className="text-newBlue h-6 w-6 mr-1 m-1"
                              />
                              <ul
                                tabIndex={0}
                                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
                              >
                                <li>
                                  <div
                                    onClick={() => setEditProfile(true)}
                                    className="flex justify-start items-center text-greenShade"
                                  >
                                    <BsPencilSquare className="h-5 w-5  " />
                                    <p> Edit </p>
                                  </div>
                                </li>
                                <li>
                                  <div className="flex justify-start items-center text-secondary">
                                    <RiDeleteBin2Line className="h-5 w-5  " />
                                    <p> Delete </p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table className="table w-full shadow-md rounded-lg mt-5 border">
                {/* head */}
                <thead>
                  <tr className="border-b border-b-gray-200">
                    <th className="bg-white w-[77%]">
                      User imported from your salesforce consider inviting them.
                    </th>

                    <th className="bg-white text-right">Close This</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}

                  {secondUserData.map((item, index) => (
                    <tr key={index} className="border-b border-b-gray-200">
                      <td>
                        <p className="text-black font-medium">{item.name}</p>
                        <span className="text-sm text-gray-500">
                          {item.email}
                        </span>
                      </td>

                      <td>
                        <div className="flex justify-between">
                          <div className="flex items-center">
                            {item.role == "Admin" && (
                              <ShieldCheckIcon className="text-newBlue h-4 w-4 mr-1" />
                            )}

                            {item.role == "Read Only" && (
                              <EyeIcon className="text-newBlue h-4 w-4 mr-1" />
                            )}

                            {item.role == "Basic" && (
                              <UserIcon className="text-newBlue h-4 w-4 mr-1" />
                            )}

                            <span className="text-newBlue text-sm font-semibold mr-2">
                              {item.role}
                            </span>
                            <ChevronDownIcon className="text-newBlue h-4 w-4" />
                          </div>
                          <div>
                            <button className="bg-white border px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all text-xs font-semibold">
                              Send Invite
                            </button>
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
      </TeamMemberContext.Provider>
    </>
  );
}
