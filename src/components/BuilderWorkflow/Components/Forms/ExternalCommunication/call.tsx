import React, { useState } from "react";
import { IoInformationCircle } from "react-icons/io5";
import { TbTag } from "react-icons/tb";

export default function Call({ onDataStore, onClose }: any) {
  const [formValues, setFormValues] = useState<any>({
    actionName: "",
    callWhisper: "",
    callTimeout: "",
  });
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors: any = {};

    if (!formValues.actionName.trim()) {
      validationErrors.actionName = "Action name is required";
    }

    if (!formValues.callTimeout.trim()) {
      validationErrors.callTimeout = "Call Time out is required";
    }

    if (!formValues.callWhisper.trim()) {
      validationErrors.callWhisper = "Call Whisper is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form submission logic goes here
    // You can access the form field values and attachment in the formValues state

    // Reset form after successful submission
    setFormValues({
      actionName: "",
      callTimeout: "",
      callWhisper: "",
    });
    setErrors({});
    // onDataStore(formValues.actionName);

    onDataStore(formValues.actionName);
    onDataStore(formValues.callTimeout);
    onDataStore(formValues.callWhisper);
  };

  return (
    <div>
      <div className="h-[83vh]  overflow-y-scroll scrollbar-hide">
        <form onSubmit={handleSubmit} className="flex flex-wrap px-2  ">
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-base text-dark font-semibold uppercase">
              Action Name
            </label>
            <input
              type="text"
              name="actionName"
              value={formValues.actionName}
              onChange={handleChange}
              className="px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none   focus:border-gray-300 text-black "
            />
            {errors.actionName && (
              <span className="mb-5 error text-red-500 ">
                {errors.actionName}
              </span>
            )}
          </div>

          <div className="w-full mt-4">
            <label className="w-full flex items-center mb-2 text-base text-dark font-semibold uppercase">
              Call Whisper
              <IoInformationCircle />
            </label>
            <div className="flex items-center text-slate-400 ">
              <textarea
                name="callWhisper"
                value={formValues.callWhisper}
                onChange={handleChange}
                cols={50}
                rows={3}
                className="px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-4/5 placeholder-dark border-[2px] border-gray-400 text-space focus:outline-none   focus:border-gray-300 text-black "
              ></textarea>
              <TbTag className="text-2xl ml-2" />
            </div>
            {errors.callWhisper && (
              <span className="mb-5 error text-red-500 ">
                {errors.callWhisper}
              </span>
            )}
          </div>

          <div className="w-full mt-4">
            <label className="w-full mb-2 text-base text-dark font-semibold uppercase">
              Call Timeout (s)
            </label>
            <input
              type="number"
              name="callTimeout"
              value={formValues.callTimeout}
              onChange={handleChange}
              className="px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none   focus:border-gray-300 text-black "
            />
            {errors.callTimeout && (
              <span className="mb-5 error text-red-500 ">
                {errors.callTimeout}
              </span>
            )}
          </div>

          <div className="w-full mt-4 ">
            <label className="flex items-center w-full mb-2 text-base text-dark font-semibold uppercase">
              Disable VoiceMail Detect(s)
              <IoInformationCircle />
            </label>
            <input type="checkbox" className="toggle" />
          </div>
        </form>
      </div>
      <div className="flex justify-end items-end  py-2 px-4">
        <button
          onClick={onClose}
          className="border-2 mr-5 border-OrangeBuilder rounded-md flex justify-center items-center px-8 py-1.5 text-OrangeBuilder"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-OrangeBuilder rounded-md flex justify-center items-center px-8 py-2 text-white hover:bg-[#ed825c]"
        >
          Save Action
        </button>
      </div>
    </div>
  );
}