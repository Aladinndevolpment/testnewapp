import Image from "next/image";
import React, { useState, useCallback } from "react";
import { GoPlus } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import { useDropzone } from "react-dropzone";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MenuItem, Select } from "@mui/material";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

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

export default function PersonalData() {
  const [errors, setErrors] = useState<any>({});
  const [formValues, setFormValues] = useState<any>({
    image: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    extention: "",
    language: "",
    message: "",
    calendar: "",
  });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Do something with the files
      setFormValues({ ...formValues, image: acceptedFiles[0] });
    },
    [formValues, setFormValues]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const handleImageDelete = () => {
    setFormValues({ ...formValues, image: null });
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

    console.log(formValues);
    const validationErrors: any = {};

    if (!formValues.firstName.trim()) {
      validationErrors.firstName = "Required";
    }
    if (!formValues.lastName.trim()) {
      validationErrors.lastName = "Required";
    }
    if (!formValues.email.trim()) {
      validationErrors.email = "Required";
    }
    if (!formValues.phone.trim()) {
      validationErrors.phone = "Required";
    }
    if (!formValues.extention) {
      validationErrors.extention = "Required";
    }
    if (!formValues.image) {
      validationErrors.image = "Required";
    }

    if (!formValues.message) {
      validationErrors.message = "Required";
    }
    if (!formValues.calendar) {
      validationErrors.calendar = "Required";
    }
    if (!formValues.language) {
      validationErrors.language = "Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormValues({
      image: null,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      extention: "",
      language: "",
      message: "",
      calendar: "",
    });

    setErrors({});
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="  bg-white h-[60vh] overflow-y-scroll scrollbar-hide">
        {/* Add profile photo */}
        <div className=" flex rounded-md w-full mb-4 px-5 gap-2 pt-4">
          <div className="w-[25%]">
            {formValues.image ? (
              <div className="bg-gray-200 w-32 h-32 flex items-center justify-center relative">
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <Image
                    fill={true}
                    src={
                      formValues.image
                        ? URL.createObjectURL(formValues.image)
                        : require("@/../public/images/avatar/blackdog.jpg")
                    }
                    style={{ objectFit: "cover" }}
                    alt="image"
                    className="rounded-md"
                  />
                </div>
              </div>
            ) : (
              <div className="bg-gray-200 w-36 rounded-md h-36 flex items-center justify-center">
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <span>
                    <GoPlus />
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="w-[75%] bg-gray-100 rounded-lg pl-1">
            <div className="px-5 pb-3 pt-4 text-xs text-gray-400 font-semibold">
              <p className="text-[#47494b] text-[12px] font-semibold">
                Personal Logo
              </p>
              <p className="text-[#47494b] text-[11px] font-medium py-0.5">
                The proposed size is 350px * 180px.
              </p>
              <p className="text-[#47494b] text-[11px] font-medium ">
                Not bigger than 2.5MB
              </p>
            </div>
            <div className="px-5  gap-2 flex text-sm">
              <div
                {...getRootProps()}
                className="border-[1px] rounded-md px-4 pt-1 cursor-pointer border-gray-300 text-blue-400"
              >
                Upload
              </div>
              <div
                onClick={handleImageDelete}
                className="border-[1px]  border-gray-300 rounded-md px-4 py-1 cursor-pointer"
              >
                Remove
              </div>
            </div>
          </div>
        </div>
        {errors.image && (
          <div className="mb-3 text-red-500 text-xs px-8 ">{errors.image}</div>
        )}

        <div className="px-6">
          <div>
            {/* Name */}
            <div className="py-2 w-full flex gap-12 items-center">
              <div className="w-1/2">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm pt-1 font-semibold"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                />
                {errors.firstName && (
                  <div className="mb-3 text-red-500 text-xs  ">
                    {errors.firstName}
                  </div>
                )}
              </div>

              <div className="w-1/2">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm pt-1 font-semibold"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                />
                {errors.lastName && (
                  <div className=" mb-3 text-red-500 text-xs  ">
                    {errors.lastName}
                  </div>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="py-2  ">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm pt-1 font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
              />
              {errors.email && (
                <div className="mb-3 text-red-500 text-xs  ">
                  {errors.email}
                </div>
              )}
            </div>

            {/* Phone and Extention */}
            <div className="py-2 w-full flex gap-4 items-center">
              <div className="lg:w-8/12">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm pt-1 font-semibold"
                >
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                />
                {errors.phone && (
                  <div className="mb-3 text-red-500 text-xs  ">
                    {errors.phone}
                  </div>
                )}
              </div>

              <div className="lg:w-4/12">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm pt-1 font-semibold"
                >
                  Extention
                </label>
                <input
                  type="text"
                  name="extention"
                  value={formValues.extention}
                  onChange={handleChange}
                  placeholder="Enter Extention"
                  className="w-[100%] placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-0.5   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300"
                />
                {errors.extention && (
                  <div className="mb-3 text-red-500 text-xs  ">
                    {errors.extention}
                  </div>
                )}
              </div>
            </div>

            {/* Platform Language */}
            <div className="py-2  ">
              <label
                htmlFor=""
                className="  text-[#47494b] text-sm pt-1 font-semibold flex justify-start pb-0.5 items-center gap-2"
              >
                Platform Language <BsQuestionCircleFill className="text-xs " />
              </label>
              <Select
                name="language"
                value={formValues.language}
                onChange={handleChange}
                className="rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="us">English (United States)</MenuItem>
                <MenuItem value="uk">English (United KingDom)</MenuItem>
              </Select>
              {errors.language && (
                <div className="mb-3 text-red-500 text-xs  ">
                  {errors.language}
                </div>
              )}
            </div>

            {/* checkboxes */}
            <div className="pt-3 pb-4">
              <div className="flex justify-start items-center mb-3 rounded-lg">
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={handleChange}
                />

                <p
                  className={` fontStrawFord text-gray-600 text-xs font-semibold  tracking-wide ml-2   `}
                >
                  Enable Signature On All Outgoing Messages
                </p>
              </div>
              <div className="flex justify-start items-center mb-1 rounded-lg">
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={handleChange}
                />

                <p
                  className={` fontStrawFord text-gray-600 text-xs font-semibold  tracking-wide ml-2   `}
                >
                  Include This Signature Before Quoted Text In Replies
                </p>
              </div>
            </div>

            {/* //message */}
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
              <span className="mb-3 text-red-500 text-xs ">
                {errors.message}
              </span>
            )}

            {/*Calendar*/}
            <div className="py-2  ">
              <label
                htmlFor=""
                className="  text-[#47494b] text-sm pt-1 font-semibold flex justify-start pb-0.5 items-center gap-2"
              >
                Calendar <BsQuestionCircleFill className="text-xs " />
              </label>
              <Select
                name="calendar"
                value={formValues.calendar}
                onChange={handleChange}
                className="rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark  text-space focus:outline-none focus:border-gray-300 text-black"
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="Calendar 1">Calendar 1</MenuItem>
                <MenuItem value="Calendar 2">Calendar 2</MenuItem>
              </Select>
              {errors.calendar && (
                <div className="mb-3 text-red-500 text-xs  ">
                  {errors.calendar}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[10vh] flex justify-between items-center border-t-[1px] pb-4 mt-1.5 px-5">
        <button className="border-[1px] rounded-md px-5 py-2 border-gray-300 text-[12px] font-medium">
          Cancel
        </button>
        <button
          onSubmit={handleSubmit}
          className="text-white bg-newBlue rounded-md px-5 py-2  text-[12px] font-medium"
        >
          Save
        </button>
      </div>
    </form>
  );
}
