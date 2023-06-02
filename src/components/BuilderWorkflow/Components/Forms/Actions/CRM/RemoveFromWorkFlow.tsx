import { modalItemState } from "@/atoms/modalItem";
import { offCanvasOpenState } from "@/atoms/offCanvasOpen";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRecoilState } from "recoil";
import { MenuItem, Select } from "@mui/material";
import { nameTrigger } from "@/atoms/nameTrigger";

export default function RemoveFromWorkFlow({ onDataStore, onClose }: any) {
  const [isFlyOutVisible, setIsFlyOutVisible] =
    useRecoilState(offCanvasOpenState);
  const [data, setData] = useRecoilState(modalItemState);

  const [actionData, setActionData] = useRecoilState(nameTrigger);

  const [formValues, setFormValues] = useState<any>({
    actionName: actionData,
    template: "",
    workflowType: "",
  });
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name == "actionName") {
      setData(value);
    }
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
    if (!formValues.template.trim()) {
      validationErrors.template = "Template is required";
    }

    if (!formValues.workflowType.trim()) {
      validationErrors.workflowType = "workflowType is required";
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
      template: "",
      workflowType: "",
    });
    setErrors({});
    onDataStore(formValues.actionName);

    setIsFlyOutVisible(false);
  };

  return (
    <div>
      <div className="h-[75vh]  overflow-y-scroll scrollbar-hide">
        <form onSubmit={handleSubmit} className="flex flex-wrap px-2  ">
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-sm pl-2 text-gray-700 font-semibold">
              Action Name
            </label>
            <input
              type="text"
              name="actionName"
              value={formValues.actionName}
              onChange={handleChange}
              className="px-3 rounded-md mt-2 mb-2 py-3 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none focus:border-gray-300 text-black"
            />
            {errors.actionName && (
              <span className="mb-5 error text-red-500 ">
                {errors.actionName}
              </span>
            )}
          </div>

          <div className="w-full mt-4">
            <label className="w-full mb-2 text-sm pl-2 text-gray-700 font-semibold">
              Workflow
            </label>
            <div className="mt-3 flex justify-start items-center border-[1px] border-gray-200 mb-3 p-2 rounded-lg">
              <input
                type="radio"
                name="workflowType"
                className="radio checked:bg-blue-500"
                onChange={handleChange}
              />
              <p
                className={` capitalize text-gray-600 text-base font-semibold  tracking-wide ml-2 `}
              >
                Current Workflow
              </p>
            </div>
            <div className="flex justify-start items-center border-[1px] border-gray-200 mb-3 p-2 rounded-lg">
              <input
                type="radio"
                name="workflowType"
                className="radio checked:bg-blue-500"
                onChange={handleChange}
              />
              <p
                className={` capitalize text-gray-600 text-base font-semibold  tracking-wide ml-2 `}
              >
                Another Workflow
              </p>
            </div>
            {errors.workflowType && (
              <span className="mb-5 error text-red-500 ">
                {errors.workflowType}
              </span>
            )}
          </div>

          <div className="w-full mt-4">
            <label className="w-full mb-2 text-sm pl-2 text-gray-700 font-semibold">
              Template:
            </label>
            <Select
              name="template"
              value={formValues.template}
              onChange={handleChange}
              className="px-3 rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
            >
              <MenuItem value="">Status template</MenuItem>
              <MenuItem value="New Template"> New Template</MenuItem>{" "}
              <MenuItem value="None"> None </MenuItem>
            </Select>

            {errors.template && (
              <span className="mb-5 error text-red-500 ">
                {errors.template}
              </span>
            )}
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
          className="bg-OrangeBuilder rounded-md flex justify-center items-center px-8 py-2 text-white"
        >
          Save Action
        </button>
      </div>
    </div>
  );
}
