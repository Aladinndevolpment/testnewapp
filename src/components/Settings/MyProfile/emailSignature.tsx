import dynamic from "next/dynamic";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { MdOutlineClose, MdUpload } from "react-icons/md";

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

export default function EmailSignature() {
  const [formValues, setFormValues] = useState<any>({
    message: "",
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

    if (!formValues.message) {
      validationErrors.message = "Message is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Reset form after successful submission
    setFormValues({
      message: "",
    });
    setErrors({});
  };
  return (
    <div>
      <div className=" border rounded-md  mb-5  bg-white  shadow-md">
        {/* first section */}
        <div className="text-[#47494b] text-lg font-semibold p-4 border-b flex items-center justify-between">
          <h1>Email Signature</h1>
        </div>

        {/* checkboxes */}
        <div className="p-4 ">
          <div className="form-control">
            <label className=" flex items-center gap-1 cursor-pointer">
              <input type="checkbox" className="checkbox scale-75" />
              <span className="label-text text-[#47494b] text-sm font-semibold">
                Enable Signature On All Outgoing Messages
              </span>
            </label>

            <label className=" flex items-center gap-1 cursor-pointer">
              <input type="checkbox" className="checkbox scale-75" />
              <span className="label-text text-[#47494b] text-sm font-semibold">
                Include This Signature Before Quoted Text In Replies
              </span>
            </label>
          </div>
        </div>
        <form onSubmit={handleSubmit} className=" flex-wrap  p-4 ">
          <div className="w-full mb-20">
            <QuillNoSSRWrapper
              modules={modules}
              formats={formats}
              theme="snow"
              value={formValues.message}
              onChange={handleQuillChange}
              placeholder="message"
              style={{
                height: 150,
                marginBottom: 50,
              }}
              className="scrollbar-hide"
            />
          </div>
          {errors.message && (
            <span className="mb-5 error text-red-500 ">{errors.message}</span>
          )}
          <button
            onSubmit={handleSubmit}
            className="border bg-[#25992a]  text-white rounded-md text-sm px-8 py-2 mt-5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
