import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const CreatePipLine = ({ onClose, handleChange }: any) => {
  const [val, setVal] = useState("");

  return (
    <>
      <div className=" bg-white rounded-lg  h-[85vh] pb-[5%]  overflow-y-hidden w-full scrollbar-hide ">
        <form className=" h-[100vh]  pt-5 pb-3 w-screen md:w-[100vh]">
          <div className="h-[6vh] flex justify-between items-start border-b-[1px] pb-4 px-5">
            <div>
              <p className="text-gray-800 font-medium md:text-lg ">
                Add Pipeline
              </p>
            </div>
            <button onClick={onClose}>
              <AiOutlineClose className="text-gray-800 h-6 w-6" />
            </button>
          </div>
          <div className="overflow-hidden ">
            <div className="h-[65vh]">
              {/*  Add Domain */}
              <div className="mx-5 py-3">
                <div className="flex items-center  justify-between ">
                  <label
                    className="block text-[#47494b] text-sm pt-1 font-semibold"
                    htmlFor=""
                  >
                    Pipeline Name
                  </label>
                </div>
                <input
                  type="url"
                  id=""
                  name="Pipeline Name"
                  value={val}
                  onChange={(e) => {
                    //   console.log(e.target.value);
                    setVal(e.target.value);
                  }}
                  placeholder="Pipeline Name"
                  className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                />
              </div>
            </div>
          </div>
          <div className="h-[10vh] flex justify-end items-center border-t-[1px] pt-3 pb-2 px-5">
            <div className=" flex justify-end items-center gap-3">
              <button
                onClick={onClose}
                className="text-base text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-5 rounded-md  "
              >
                Cancel
              </button>
              <button
                onClick={() => handleChange(val)}
                type="submit"
                className="text-base flex justify-start items-center bg-newBlue py-2 px-5 text-white rounded-md  "
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePipLine;
