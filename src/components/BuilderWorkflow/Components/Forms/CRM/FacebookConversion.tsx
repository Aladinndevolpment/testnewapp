import { modalItemState } from "@/atoms/modalItem";
import { offCanvasOpenState } from "@/atoms/offCanvasOpen";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRecoilState } from "recoil";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default function FacebookConversion({ onDataStore, onClose }: any) {
  const [isFlyOutVisible, setIsFlyOutVisible] =
    useRecoilState(offCanvasOpenState);
  const [data, setData] = useRecoilState(modalItemState);

  const [formValues, setFormValues] = useState<any>({
    actionName: "",
    accessToken: "",
    pixelId: "",
    facebookEvent: "",
    currency: "",
    leadValue: "",
    testCode: "",
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
    if (!formValues.accessToken.trim()) {
      validationErrors.accessToken = "AccessToken is required";
    }
    if (!formValues.pixelId.trim()) {
      validationErrors.pixelId = "Pixel Id is required";
    }
    if (!formValues.facebookEvent.trim()) {
      validationErrors.facebookEvent = "Facebook Event is required";
    }
    if (!formValues.currency.trim()) {
      validationErrors.currency = "Currency is required";
    }
    if (!formValues.leadValue.trim()) {
      validationErrors.leadValue = "Lead Value is required";
    }
    if (!formValues.testCode.trim()) {
      validationErrors.testCode = "Test Code is required";
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
      accessToken: "",
      pixelId: "",
      facebookEvent: "",
      currency: "",
      leadValue: "",
      testCode: "",
    });
    setErrors({});
    onDataStore(formValues.actionName);

    setIsFlyOutVisible(false);
  };

  return (
    <div>
      <div className="h-[83vh]  overflow-y-scroll scrollbar-hide">
        <form onSubmit={handleSubmit} className="flex flex-wrap px-2  ">
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-base text-dark font-semibold uppercase">
              Action Name:
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
            <label className="w-full mb-2 text-base text-dark font-semibold uppercase">
              Access Token :
            </label>
            <input
              type="text"
              name="accessToken"
              value={formValues.accessToken}
              onChange={handleChange}
              className="px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none   focus:border-gray-300 text-black "
            />
            {errors.accessToken && (
              <span className="mb-5 error text-red-500 ">
                {errors.accessToken}
              </span>
            )}
          </div>{" "}
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-base text-dark font-semibold uppercase">
              Pixel Id:
            </label>
            <input
              type="text"
              name="pixelId"
              value={formValues.pixelId}
              onChange={handleChange}
              className="px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none   focus:border-gray-300 text-black "
            />
            {errors.pixelId && (
              <span className="mb-5 error text-red-500 ">{errors.pixelId}</span>
            )}
          </div>
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-base text-dark font-semibold uppercase">
              Facebook Event Name
            </label>
            <select
              name="facebookEvent"
              value={formValues.facebookEvent}
              onChange={handleChange}
              className="px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none   focus:border-gray-300 text-black "
            >
              <option value="">Select a Facebook Event</option>
              <option value="template2">Facebook Event 1</option>
              <option value="template2">Facebook Event 2</option>
              <option value="template3">Facebook Event 3</option>
            </select>
            {errors.facebookEvent && (
              <span className="mb-5 error text-red-500 ">
                {errors.facebookEvent}
              </span>
            )}
          </div>
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-base text-dark font-semibold uppercase">
              Value:
            </label>
            <input
              type="text"
              name="leadValue"
              value={formValues.leadValue}
              onChange={handleChange}
              className="px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none   focus:border-gray-300 text-black "
            />
            {errors.leadValue && (
              <span className="mb-5 error text-red-500 ">
                {errors.leadValue}
              </span>
            )}
          </div>
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-base text-dark font-semibold uppercase">
              Currency
            </label>
            <select
              name="pixelId"
              value={formValues.currency}
              onChange={handleChange}
              className="px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none   focus:border-gray-300 text-black "
            >
              <option value="">Select a Currency </option>
              <option value="template2"> Currency 1</option>
              <option value="template2">Currency 2</option>
              <option value="template3">Currency 3</option>
            </select>
            {errors.currency && (
              <span className="mb-5 error text-red-500 ">
                {errors.currency}
              </span>
            )}
          </div>
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-base text-dark font-semibold uppercase">
              Test Code:
            </label>
            <input
              type="text"
              name="testCode"
              value={formValues.testCode}
              onChange={handleChange}
              className="px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none   focus:border-gray-300 text-black "
            />
            {errors.testCode && (
              <span className="mb-5 error text-red-500 ">
                {errors.testCode}
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
          Submit
        </button>
      </div>
    </div>
  );
}
