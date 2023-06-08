import React, { useState } from "react";
import { BsEnvelope } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import ConversationModalDerived from "../../UI/ConversationModalDerived";

export default function PersonalInformation() {
  const [user, setUser] = useState({
    name: "Chase Buckner",
    phone: "+1234567890",
    email: "chase@gohighlevel.com",
    source: "chat widget",
    type: "lead",
  });

  const [formData, setFormData] = useState({
    name: "Chase Buckner",
    phone: "+1234567890",
    email: "chase@gohighlevel.com",
    source: "chat widget",
    type: "lead",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleChange = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Perform any necessary operations with the updated user data
    console.log(user);
    setIsModalOpen(false);
  };
  return (
    <div>
      <div>
        {isModalOpen && (
          <ConversationModalDerived
            visibility={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            <div className="bg-white px-5 rounded-lg py-5 pb-[5%] w-screen md:w-[70vh]">
              <div className="flex justify-start items-center  mb-3">
                <p className="text-gray-800 font-medium md:text-base  flex justify-start items-center">
                  {user?.name}
                </p>
                <MdOutlineEdit className="h-3 w-3 ml-1" />
              </div>
              <form onSubmit={handleSubmit} className="flex flex-wrap">
                <div className="w-full">
                  <label className="w-full text-sm text-gray-600 font-medium ">
                    Name:
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    className="w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2 py-2  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                  />
                </div>
                <div className="lg:w-1/2 pr-2">
                  <label className="w-full text-sm text-gray-600 font-medium ">
                    Phone:
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    className="w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2 py-2  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                  />
                </div>
                <div className="lg:w-1/2 pl-2">
                  <label className="w-full text-sm text-gray-600 font-medium ">
                    Email:
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2 py-2  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                  />
                </div>
                <div className="lg:w-1/2 pr-2">
                  <label className="w-full text-sm text-gray-600 font-medium ">
                    Source:
                  </label>
                  <input
                    type="text"
                    name="source"
                    value={user.source}
                    onChange={handleChange}
                    className="w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2 py-2  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                  />
                </div>
                <div className="lg:w-1/2 pl-2">
                  <label className="w-full text-sm text-gray-600 font-medium ">
                    Type:
                  </label>
                  <input
                    type="text"
                    name="type"
                    value={user.type}
                    onChange={handleChange}
                    className="w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2 py-2  font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                  />
                </div>
                <div className="w-full flex justify-end items-center gap-2 border-t mt-4 pt-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-sm text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-1.5 px-5 rounded-md  "
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="text-sm flex justify-start items-center bg-newBlue py-1.5 px-5 text-white rounded-md  "
                  >
                    Update
                  </button>
                </div>
                <br />
              </form>
            </div>
          </ConversationModalDerived>
        )}
      </div>

      <div className="bg-gray-100 my-4 rounded-md py-3 px-2 ">
        <div className="flex justify-between items-center mb-4 px-2">
          <div className="flex justify-start items-center w-[90%]">
            <div className="w-[8%]">
              <FaRegUserCircle />
            </div>
            <p className="text-gray-700 font-medium md:text-[12px]">
              {user?.name}
            </p>
          </div>
          <button onClick={() => setIsModalOpen(true)}>
            <MdOutlineEdit className="h-3 w-3" />
          </button>
        </div>
        <div className="flex justify-start items-center mb-1.5 px-2">
          <div className="w-[8%]">
            <IoCallOutline />
          </div>
          <p className="text-gray-700 font-medium md:text-[12px]">
            {user?.phone}
          </p>
        </div>
        <div className="flex justify-start items-center mb-3 px-2">
          <div className="w-[8%]">
            <BsEnvelope />
          </div>
          <p className="text-gray-700 font-medium md:text-[12px]">
            {user?.email}
          </p>
        </div>
        <div className="bg-gray-200  rounded-md py-3 px-2">
          <div className="flex justify-start items-center mb-1.5">
            <div className="w-[12%]">
              <p className="text-gray-700 font-medium md:text-[12px]">
                Source:
              </p>
            </div>
            <p className="text-gray-700 font-medium md:text-[12px] ml-1">
              {user?.source}
            </p>
          </div>
          <div className="flex justify-start items-center">
            <p className="text-gray-700 font-medium md:text-[12px]">Type:</p>
            <p className="text-gray-700 font-medium md:text-[12px] ml-1">
              {user?.type}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
