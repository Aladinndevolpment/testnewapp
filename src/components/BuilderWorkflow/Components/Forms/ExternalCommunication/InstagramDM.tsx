/* eslint-disable react/jsx-key */
import { itemState } from "@/atoms/item";
import { modalItemState } from "@/atoms/modalItem";
import { offCanvasOpenState } from "@/atoms/offCanvasOpen";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { MdUpload } from "react-icons/md";
import { url } from "inspector";

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

export default function InstagramDM({ onDataStore, onClose }: any) {
  const recoilItem = useRecoilValue(itemState);

  const [data, setData] = useRecoilState(modalItemState);
  const [attachment, setAttachment] = useState(false);
  const [fileUrls, setFileUrls] = useState<any>([]);

  const [formValues, setFormValues] = useState<any>({
    actionName: "",
    template: "",
    message: "",
  });
  const [errors, setErrors] = useState<any>({});

  const handleAdd = () => {
    setFileUrls([...fileUrls, { url: "" }]);
  };

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

    if (!formValues.template.trim()) {
      validationErrors.template = "Template is required";
    }

    if (!formValues.template.trim()) {
      validationErrors.message = "Message is required";
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
      message: "",
    });
    setErrors({});
    // onDataStore(formValues.actionName);

    onDataStore(formValues.actionName, recoilItem);
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
            <label className="w-full mb-2 text-base text-dark font-semibold uppercase">
              Templates
            </label>
            <select
              name="template"
              value={formValues.template}
              onChange={handleChange}
              className="px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none   focus:border-gray-300 text-black "
            >
              <option value="">Select a template</option>
              <option value="template2">Template 1</option>
              <option value="template2">Template 2</option>
              <option value="template3">Template 3</option>
            </select>
            {errors.template && (
              <span className="mb-5 error text-red-500">{errors.template}</span>
            )}
          </div>

          <div className="w-full mt-4">
            <label className="w-full mb-2 text-base text-dark font-semibold uppercase">
              Message:
            </label>
            <QuillNoSSRWrapper
              modules={modules}
              formats={formats}
              theme="snow"
              value={formValues.message}
              onChange={handleQuillChange}
              //   onBlur={handleBlur("content")}
              placeholder="message"
              style={{
                height: 200,
                marginBottom: 20,
                overflowY: "scroll",
                resize: "vertical",
              }}
              className="scrollbar-hide"
            />

            {errors.message && (
              <span className="mb-5 error text-red-500 ">{errors.message}</span>
            )}
          </div>

          {attachment == false ? (
            <button
              onClick={() => {
                setAttachment(true);
              }}
              className="flex items-center justify-center bg-[#ed754b] text-white px-6 py-1 w-2/4 rounded font-bold mt-3 hover:bg-[#ed825c]"
            >
              {" "}
              <MdUpload /> Add attachment
            </button>
          ) : (
            <input
              type="file"
              name="attachment"
              onChange={(e: any) =>
                setFormValues((prevValues: any) => ({
                  ...prevValues,
                  attachment: e.target.files[0],
                }))
              }
              className="px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none   focus:border-gray-300 text-black "
            />
          )}

          {fileUrls.map(() => (
            <div className="flex space-x-8 w-full my-4 mt-7  ">
              <input
                className="p-2 border rounded-lg border-gray-400 w-7/12  bg-transparent focus:bg-transparent"
                type="url"
                name="addUrl"
                placeholder="Add files through URL "
              />
              <button
                className="bg-transparent text-blue-400 border border-2 border-blue-400 px-4  rounded w-32 hover:bg-blue-100 "
                onClick={handleAdd}
              >
                +Add
              </button>
            </div>
          ))}

          <div className="flex space-x-8 w-full my-4 mt-7  ">
            <input
              className="p-2 border rounded-lg border-gray-400 w-7/12  bg-transparent focus:bg-transparent"
              type="url"
              name="addUrl"
              placeholder="Add files through URL "
            />
            <button
              className="bg-transparent text-blue-400 border border-2 border-blue-400 px-4  rounded w-32 hover:bg-blue-100 "
              onClick={handleAdd}
            >
              +Add
            </button>
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
