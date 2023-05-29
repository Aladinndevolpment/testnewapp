import { itemState } from "@/atoms/item";
import { modalItemState } from "@/atoms/modalItem";
import { offCanvasOpenState } from "@/atoms/offCanvasOpen";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { MenuItem, Select } from "@mui/material";
import { TagIcon } from "@heroicons/react/24/solid";

export default function AddTask({ onDataStore, onClose }: any) {
  const recoilItem = useRecoilValue(itemState);

  const [data, setData] = useRecoilState(modalItemState);

  const [formValues, setFormValues] = useState<any>({
    actionName: "",
    title: "",
    description: "",
    assignTo: "",
    dueIn: "",
  });
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleQuillChange = (value: any) => {
    setFormValues((prevValues: any) => ({
      ...prevValues,
      message: value,
    }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors: any = {};

    if (!formValues.actionName.trim()) {
      validationErrors.actionName = "Action name is required";
    }

    if (!formValues.title.trim()) {
      validationErrors.title = "Title is required";
    }

    if (!formValues.assignTo.trim()) {
      validationErrors.assignTo = "Assign To is required";
    }

    if (!formValues.dueIn.trim()) {
      validationErrors.dueIn = "Due In is required";
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
      title: "",
      description: "",
      assignTo: "",
      dueIn: "",
    });
    setErrors({});
    // onDataStore(formValues.actionName);

    onDataStore(formValues.actionName, recoilItem);
  };

  return (
    <div>
      <div className="h-[75vh]  overflow-y-scroll scrollbar-hide">
        <form onSubmit={handleSubmit} className="flex flex-wrap px-2  ">
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-base pl-1 text-dark font-semibold uppercase">
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
            <label className="w-full mb-2 text-base pl-1 text-dark font-semibold uppercase">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formValues.title}
              onChange={handleChange}
              className="px-3 rounded-md mt-2 mb-2 py-3 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none focus:border-gray-300 text-black"
            />
            {errors.title && (
              <span className="mb-5 error text-red-500 ">{errors.title}</span>
            )}
          </div>
          <div className="w-full flex items-center">
            <div className="w-[90%]">
              <div className="w-full mt-4">
                <label className="w-full mb-2 text-base pl-1 text-dark font-semibold uppercase">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formValues.description}
                  onChange={handleChange}
                  className="px-3 rounded-md mt-2 mb-2 py-3 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none focus:border-gray-300 text-black"
                ></textarea>
              </div>
            </div>
            <div className="w-[10%] pt-6 pl-3">
              <TagIcon className="h-5 w-5 text-gray-500" />
            </div>
          </div>

          <div className="w-full mt-4">
            <label className="w-full mb-2 text-base pl-1 text-dark font-semibold uppercase">
              Assign To
            </label>
            <Select
              name="assignTo"
              value={formValues.assignTo}
              onChange={handleChange}
              className="px-3 rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
            >
              <MenuItem value="Select"> Select </MenuItem>
            </Select>

            {errors.assignTo && (
              <span className="mb-5 error text-red-500 ">
                {errors.assignTo}
              </span>
            )}
          </div>

          <div className="w-full mt-4">
            <label className="w-full mb-2 text-base pl-1 text-dark font-semibold uppercase">
              Due In
            </label>
            <Select
              name="dueIn"
              value={formValues.dueIn}
              onChange={handleChange}
              className="px-3 rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
            >
              <MenuItem value="Select"> Select </MenuItem>
            </Select>

            {errors.dueIn && (
              <span className="mb-5 error text-red-500 ">{errors.dueIn}</span>
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
