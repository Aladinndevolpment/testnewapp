import { modalItemState } from "@/atoms/modalItem";
import { offCanvasOpenState } from "@/atoms/offCanvasOpen";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRecoilState } from "recoil";
import { MenuItem, Select } from "@mui/material";

export default function GoalEvent({ onDataStore, onClose }: any) {
  const [isFlyOutVisible, setIsFlyOutVisible] =
    useRecoilState(offCanvasOpenState);
  const [data, setData] = useRecoilState(modalItemState);

  const [formValues, setFormValues] = useState<any>({
    actionName: "",
    goalType: "",
    step: "",
    event: "",
    goalConditions: "",
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
    if (!formValues.goalType.trim()) {
      validationErrors.goalType = "In Pipeline is required";
    }
    if (!formValues.step.trim()) {
      validationErrors.step = "In Pipeline Stage is required";
    }
    if (!formValues.event.trim()) {
      validationErrors.event = "Opportunity Name is required";
    }
    if (!formValues.goalConditions.trim()) {
      validationErrors.goalConditions = "Opportunity Source is required";
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
      goalType: "",
      step: "",
      event: "",
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
              placeholder="Goal"
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
              Select Type of Goal
            </label>

            <Select
              name="goalType"
              value={formValues.goalType}
              onChange={handleChange}
              className="px-3 rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
            >
              <MenuItem value="Received on Email Event">
                Received on Email Event
              </MenuItem>{" "}
            </Select>
            {errors.goalType && (
              <span className="mb-5 error text-red-500 ">
                {errors.goalType}
              </span>
            )}
          </div>
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-base pl-1 text-dark font-semibold uppercase">
              Pick email step to wait for
            </label>

            <Select
              name="step"
              value={formValues.step}
              onChange={handleChange}
              className="px-3 rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
            >
              <MenuItem value="">Select a step</MenuItem>{" "}
              <MenuItem value="step 1"> Step 1</MenuItem>{" "}
              <MenuItem value="step 2"> Step 2</MenuItem>{" "}
            </Select>
            {errors.step && (
              <span className="mb-5 error text-red-500 ">{errors.step}</span>
            )}
          </div>
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-base pl-1 text-dark font-semibold uppercase">
              Select Email Event
            </label>

            <Select
              name="event"
              value={formValues.event}
              onChange={handleChange}
              className="px-3 rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
            >
              <MenuItem value="">Select a step</MenuItem>{" "}
              <MenuItem value="step 1"> Step 1</MenuItem>{" "}
              <MenuItem value="step 2"> Step 2</MenuItem>{" "}
            </Select>
            {errors.step && (
              <span className="mb-5 error text-red-500 ">{errors.step}</span>
            )}
          </div>

          <div className="w-full mt-4">
            <label className="w-full mb-2 text-base pl-1 text-dark font-semibold uppercase">
              If contact reaches this goal action without meeting its conditions
            </label>

            <Select
              name="goalConditions"
              value={formValues.goalConditions}
              onChange={handleChange}
              className="px-3 rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
            >
              <MenuItem value="End this workflow"> End this workflow </MenuItem>{" "}
            </Select>
            {errors.step && (
              <span className="mb-5 error text-red-500 ">{errors.step}</span>
            )}
          </div>

          <p
            className={`  text-gray-500 text-xs font-medium  tracking-wide ml-2 pb-3   `}
          >
            The selected action will be performed if the contact reaches this
            step, and has not meet the goal condition yet.
          </p>
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
