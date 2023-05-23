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

export default function WaitForm({ onDataStore, onClose }: any) {
  const [isFlyOutVisible, setIsFlyOutVisible] =
    useRecoilState(offCanvasOpenState);
  const [data, setData] = useRecoilState(modalItemState);

  const [formValues, setFormValues] = useState<any>({
    actionName: "",
    waitFor: "",
    checkBox1: "",
    timeNumber: "",
    timeMinutes: "",
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
    if (!formValues.waitFor.trim()) {
      validationErrors.waitFor = "waitFor is required";
    }
    if (!formValues.timeNumber.trim()) {
      validationErrors.timeNumber = "time Number is required";
    }
    if (!formValues.timeMinutes.trim()) {
      validationErrors.timeMinutes = "time Minutes is required";
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
      waitFor: "",
      timeNumber: "",
      timeMinutes: "",
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
              Wait For :
            </label>
            <select
              name="waitFor"
              value={formValues.waitFor}
              onChange={handleChange}
              className="px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none   focus:border-gray-300 text-black "
            >
              <option value=""> Time Delay </option>
              <option value="waitFor2"> 1</option>
              <option value="waitFor2"> 2</option>
              <option value="waitFor3"> 3</option>
            </select>
            {errors.waitFor && (
              <span className="mb-5 error text-red-500 ">{errors.waitFor}</span>
            )}
          </div>

          <div className="w-full mt-4">
            <label className="w-full mb-2 text-base text-dark font-semibold uppercase">
              Custom Data:
            </label>

            <div className="flex flex-wrap">
              <div className="w-4/12">
                <input
                  type="number"
                  name="timeNumber"
                  value={formValues.timeNumber}
                  onChange={handleChange}
                  placeholder="timeNumber"
                  className="px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none   focus:border-gray-300 text-black "
                />
                {errors.timeNumber && (
                  <span className="mb-5 error text-red-500 ">
                    {errors.timeNumber}
                  </span>
                )}
              </div>
              <div className="w-8/12 pl-4">
                <select
                  name="timeMinutes"
                  value={formValues.timeMinutes}
                  onChange={handleChange}
                  className="px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none   focus:border-gray-300 text-black "
                >
                  <option value=""> Minutes </option>
                  <option value="timeMinutes1"> 1</option>
                  <option value="timeMinutes2"> 2</option>
                  <option value="timeMinutes3"> 3</option>
                </select>
                {errors.timeMinutes && (
                  <span className="mb-5 error text-red-500 ">
                    {errors.timeMinutes}
                  </span>
                )}
              </div>
            </div>
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
                className={` capitalize text-gray-600 text-sm font-semibold  tracking-wide ml-2 `}
              >
                ADVANCE WINDOW
              </p>
            </div>
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
