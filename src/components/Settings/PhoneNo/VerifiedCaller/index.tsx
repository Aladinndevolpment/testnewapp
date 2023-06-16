import ModalDerived from "@/components/Modal";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TfiPencil } from "react-icons/tfi";

const VerifiedCaller = () => {
  const [verifiedCallerData, setVerifiedCallerData] = useState<any>([]);

  const [openVerifiCaller, setOpenVerifiCaller] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [formValues, setFormValues] = useState<any>({
    name: "",
    phoneNumber: "",
    forwardingNumber: "",
    timeOut: "",
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
    console.log(formValues);
    //validate errors
    const validationErrors: any = {};

    if (!formValues.name) {
      validationErrors.name = "Required";
    }

    if (!formValues.phoneNumber) {
      validationErrors.phoneNumber = "Required";
    }

    if (!formValues.forwardingNumber) {
      validationErrors.forwardingNumber = "Required";
    }

    if (!formValues.timeOut) {
      validationErrors.timeOut = " Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setVerifiedCallerData((prevValues: any) => [
      ...verifiedCallerData,

      {
        name: formValues?.name,
        phoneNumber: formValues?.phoneNumber,
        forwardingNumber: formValues?.forwardingNumber,
        timeOut: formValues?.timeOut,
      },
    ]);

    setFormValues({
      name: "",
      phoneNumber: "",
      forwardingNumber: "",
      timeOut: "",
    });

    setErrors({});

    setOpenVerifiCaller(false);
  };
  return (
    <div>
      <ModalDerived
        visibility={openVerifiCaller}
        onClose={() => setOpenVerifiCaller(false)}
      >
        <div className=" bg-white rounded-lg  h-[85vh] pb-[5%]  overflow-y-hidden w-full scrollbar-hide ">
          <form
            className=" h-[100vh]  pt-5 pb-3 w-screen md:w-[100vh]"
            onSubmit={handleSubmit}
          >
            <div className="h-[10vh] flex justify-between items-start border-b-[1px] pb-4 px-5">
              <div>
                <p className="text-gray-800 font-medium md:text-lg ">
                  Verified Caller IDs
                </p>
                <p className="text-gray-500 font-normal md:text-sm pt-1">
                  Add Verified Caller IDs
                </p>
              </div>
              <button onClick={() => setOpenVerifiCaller(false)}>
                <AiOutlineClose className="text-gray-800 h-6 w-6" />
              </button>
            </div>
            <div className="overflow-hidden ">
              <div className=" h-[60vh] ">
                {/*  Name */}
                <div className="mx-5 py-3">
                  <label
                    className="block text-[#47494b] text-sm pt-1 font-semibold"
                    htmlFor=""
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id=""
                    name="name"
                    onChange={handleChange}
                    value={formValues.name}
                    placeholder="Enter Name"
                    className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                  />
                  {errors.name && (
                    <div className=" text-red-500 text-xs">{errors.name}</div>
                  )}
                </div>

                <div className="flex items-start gap-2    mx-5">
                  {/* Number */}
                  <div className=" py-3 w-1/2">
                    <label
                      className="block text-[#47494b] text-sm pt-1 font-semibold"
                      htmlFor=""
                    >
                      Phone Number
                    </label>

                    <input
                      type="number"
                      id=""
                      name="phoneNumber"
                      onChange={handleChange}
                      value={formValues.phoneNumber}
                      placeholder="Enter Phone Number"
                      className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2    font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                    />
                    {errors.phoneNumber && (
                      <div className=" text-red-500 text-xs">
                        {errors.phoneNumber}
                      </div>
                    )}
                  </div>

                  {/* forwarding Number */}
                  <div className="w-1/2 py-3">
                    <label
                      className="block text-[#47494b] text-sm pt-1 font-semibold"
                      htmlFor=""
                    >
                      Forwarding Number
                    </label>

                    <input
                      type="number"
                      id=""
                      name="forwardingNumber"
                      value={formValues.forwardingNumber}
                      onChange={handleChange}
                      placeholder="Enter Forwarding Number"
                      className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2    font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                    />
                    {errors.forwardingNumber && (
                      <div className=" text-red-500 text-xs">
                        {errors.forwardingNumber}
                      </div>
                    )}
                  </div>
                </div>

                {/*Timeout*/}
                <div className="w-1/2 mx-5 py-3">
                  <label
                    className="block text-[#47494b] text-sm pt-1 font-semibold"
                    htmlFor=""
                  >
                    TimeOut
                  </label>

                  <input
                    type="time"
                    id=""
                    name="timeOut"
                    value={formValues.timeOut}
                    onChange={handleChange}
                    className=" w-[93%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                  />
                  {errors.timeOut && (
                    <div className="mb-3 text-red-500 text-xs">
                      {errors.timeOut}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="h-[10vh] flex justify-end items-center border-t-[1px] pt-3 pb-2 px-5">
              <div className=" flex justify-end items-center gap-3">
                <button
                  onClick={() => setOpenVerifiCaller(false)}
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
      <div className=" text-[#47494b] text-lg font-semibold  py-1 px-3 border-y">
        <p className="m-2">Verified Caller IDs</p>
      </div>

      {verifiedCallerData?.length > 0 ? (
        <div className="overflow-x-auto px-1">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-white">
                  {" "}
                  <span className="label-text text-[#47494b] text-sm font-semibold">
                    {" "}
                    Default Numbers
                  </span>
                </th>
                <th className="bg-white">
                  {" "}
                  <p className="block text-[#47494b] text-sm pt-1 font-semibold">
                    Name
                  </p>
                </th>
                <th className="bg-white">
                  {" "}
                  <p className="block text-[#47494b] text-sm pt-1 font-semibold">
                    Phone Number
                  </p>
                </th>
                <th className="bg-white">
                  {" "}
                  <p className="block text-[#47494b] text-sm pt-1 font-semibold">
                    Forwarding Number
                  </p>
                </th>
                <th className="bg-white">
                  {" "}
                  <p className="block text-[#47494b] text-sm pt-1 font-semibold">
                    TimeOut
                  </p>
                </th>
                <th className="bg-white"></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {verifiedCallerData?.map((item: any, index: number) => (
                <tr key={index}>
                  <th>
                    {" "}
                    {
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary scale-75"
                      />
                    }
                  </th>
                  <td>
                    <p className="  text-gray-500 text-[12px]  font-medium    ">
                      {item?.name}
                    </p>
                  </td>
                  <td>
                    <p className="  text-gray-500 text-[12px]   font-medium    ">
                      {" "}
                      {item?.phoneNumber}
                    </p>
                  </td>
                  <td>
                    {" "}
                    <p className="  text-gray-500 text-[12px]    font-medium    ">
                      {" "}
                      {item?.forwardingNumber}
                    </p>
                  </td>
                  <td>
                    {" "}
                    <p className="  text-gray-500 text-[12px]  font-medium  flex items-center  ">
                      {" "}
                      {item.timeOut}
                    </p>
                  </td>
                  <td>
                    {" "}
                    <div className="flex justify-center items-center gap-2 ">
                      <div className="">
                        <TfiPencil className="text-gray-400 scale-90 " />
                      </div>
                      <div className=" ">
                        <RiDeleteBin6Line className="text-gray-400 scale-90 " />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-gray-400 text-center text-sm pt-1 font-semibold my-2">
          You Don t have any Verified Caller IDs
        </div>
      )}
      <div className=" flex justify-end mx-4">
        <button
          onClick={() => setOpenVerifiCaller(true)}
          className="border bg-[#25992a] mb-4 mt-2   text-white rounded-md text-sm px-3 py-2"
        >
          + Add New Caller ID
        </button>
      </div>
    </div>
  );
};

export default VerifiedCaller;
