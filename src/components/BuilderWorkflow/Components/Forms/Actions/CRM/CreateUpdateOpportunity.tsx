import { modalItemState } from "@/atoms/modalItem";
import { offCanvasOpenState } from "@/atoms/offCanvasOpen";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRecoilState } from "recoil";
import { MenuItem, Select } from "@mui/material";

export default function CreateUpdateOpportunity({ onDataStore, onClose }: any) {
  const [isFlyOutVisible, setIsFlyOutVisible] =
    useRecoilState(offCanvasOpenState);
  const [data, setData] = useRecoilState(modalItemState);

  const [formValues, setFormValues] = useState<any>({
    actionName: "",
    inPipeline: "",
    inPipelineStage: "",
    opportunityName: "",
    opprtunitySource: "",
    leadValue: "",
    status: "",
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
    if (!formValues.inPipeline.trim()) {
      validationErrors.inPipeline = "In Pipeline is required";
    }
    if (!formValues.inPipelineStage.trim()) {
      validationErrors.inPipelineStage = "In Pipeline Stage is required";
    }
    if (!formValues.opportunityName.trim()) {
      validationErrors.opportunityName = "Opportunity Name is required";
    }
    if (!formValues.opprtunitySource.trim()) {
      validationErrors.opprtunitySource = "Opportunity Source is required";
    }
    if (!formValues.leadValue.trim()) {
      validationErrors.leadValue = "Lead Value is required";
    }
    if (!formValues.status.trim()) {
      validationErrors.status = "Status is required";
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
      inPipeline: "",
      inPipelineStage: "",
      opportunityName: "",
      opportunitySource: "",
      leadValue: "",
      status: "",
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
              In Pipeline
            </label>

            <Select
              name="inPipeline"
              value={formValues.inPipeline}
              onChange={handleChange}
              className="px-3 rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
            >
              <MenuItem value="">Status Pipeline</MenuItem>{" "}
              <MenuItem value="Pipeline1">Pipeline 1</MenuItem>{" "}
              <MenuItem value="Pipeline2">Pipeline 2</MenuItem>{" "}
            </Select>
            {errors.inPipeline && (
              <span className="mb-5 error text-red-500 ">
                {errors.inPipeline}
              </span>
            )}
          </div>
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-base pl-1 text-dark font-semibold uppercase">
              In Pipeline Stage
            </label>

            <Select
              name="inPipelineStage"
              value={formValues.inPipelineStage}
              onChange={handleChange}
              className="px-3 rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
            >
              <MenuItem value="">Status Pipeline Stage</MenuItem>{" "}
              <MenuItem value="Pipeline Stage 1">Pipeline Stage 1</MenuItem>{" "}
              <MenuItem value="Pipeline Stage 2">Pipeline Stage 2</MenuItem>{" "}
            </Select>
            {errors.inPipelineStage && (
              <span className="mb-5 error text-red-500 ">
                {errors.inPipelineStage}
              </span>
            )}
          </div>
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-base pl-1 text-dark font-semibold uppercase">
              Opportunity Name
            </label>
            <input
              type="text"
              name="opportunityName"
              value={formValues.opportunityName}
              onChange={handleChange}
              className="px-3 rounded-md mt-2 mb-2 py-3 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none focus:border-gray-300 text-black"
            />
            {errors.opportunityName && (
              <span className="mb-5 error text-red-500 ">
                {errors.opportunityName}
              </span>
            )}
          </div>{" "}
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-base pl-1 text-dark font-semibold uppercase">
              Opportunity Source
            </label>
            <input
              type="text"
              name="opprtunitySource"
              value={formValues.opprtunitySource}
              onChange={handleChange}
              className="px-3 rounded-md mt-2 mb-2 py-3 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none focus:border-gray-300 text-black"
            />
            {errors.opprtunitySource && (
              <span className="mb-5 error text-red-500 ">
                {errors.opprtunitySource}
              </span>
            )}
          </div>
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-base pl-1 text-dark font-semibold uppercase">
              Lead Value
            </label>
            <input
              type="text"
              name="leadValue"
              value={formValues.leadValue}
              onChange={handleChange}
              className="px-3 rounded-md mt-2 mb-2 py-3 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none focus:border-gray-300 text-black"
            />
            {errors.leadValue && (
              <span className="mb-5 error text-red-500 ">
                {errors.leadValue}
              </span>
            )}
          </div>
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-base pl-1 text-dark font-semibold uppercase">
              Status
            </label>
            <Select
              name="status"
              value={formValues.status}
              onChange={handleChange}
              className="px-3 rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
            >
              {" "}
              <MenuItem value="">Status Status</MenuItem>{" "}
              <MenuItem value="">Status 1</MenuItem>
              <MenuItem value="None">Status 2</MenuItem>{" "}
            </Select>

            {errors.status && (
              <span className="mb-5 error text-red-500 ">{errors.status}</span>
            )}
          </div>
          <div className="w-full mt-4">
            <div className="flex justify-start items-center   mb-3   rounded-lg">
              <input
                type="checkbox"
                className="toggle toggle-md toggle-success"
                name="checkBox1"
                onChange={handleChange}
              />
              <p
                className={`  text-gray-600 text-sm font-semibold  tracking-wide ml-2 uppercase `}
              >
                Allow Opportunity to move to any previous stage in Pipeline
              </p>
            </div>
            <div className="flex justify-start items-center   mb-3   rounded-lg">
              <input
                type="checkbox"
                className="toggle toggle-md toggle-success"
                name="checkBox2"
                onChange={handleChange}
              />
              <p
                className={`  text-gray-600 text-sm font-semibold  tracking-wide ml-2 uppercase `}
              >
                Allow duplicate opportunities
              </p>
            </div>
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
