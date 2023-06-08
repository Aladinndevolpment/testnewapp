import Image from "next/image";
import React, { useState, useCallback } from "react";
import { GoPlus } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import { useDropzone } from "react-dropzone";
import { BsQuestionCircleFill } from "react-icons/bs";

const PersonalData = () => {
  const [errors, setErrors] = useState<any>({});
  const [formValues, setFormValues] = useState<any>({
    image: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    extention: "",
    language: "",
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

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      extention: "",
      language: "",
    });

    setErrors({});
  };

  return (
    <div className=" border rounded-md  mb-5  bg-white  shadow-md">
      {/* first section */}
      <div className="text-[#47494b] text-lg font-semibold p-4 border-b flex items-center justify-between">
        <h1>Personal Data</h1>
      </div>

      {/* Add profile photo */}
      <div className="  gap-4 flex  px-8 pt-6 ">
        {formValues.image ? (
          <div className="bg-gray-200 w-40 h-40 flex items-center justify-center relative">
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
              />
            </div>
          </div>
        ) : (
          <div className="bg-gray-200 w-40 h-40  flex items-center justify-center">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <span>
                <GoPlus />
              </span>
            </div>
          </div>
        )}

        <div>
          <div className="p-5 text-xs text-gray-400 font-semibold">
            <h1 className="text-[#47494b] text-lg font-semibold">
              Personal Logo
            </h1>
            <p>The proposed size is 512px * 512px</p>
            <p>Supported formats .jpeg, .gif, .png </p>
            <p>Not bigger than 2.5MB</p>
          </div>
          <div className="px-5  gap-2 flex text-sm">
            <div
              {...getRootProps()}
              className="border-2 rounded-md px-4 pt-1 cursor-pointer border-blue-400 text-blue-400"
            >
              Change
            </div>
            <div
              onClick={handleImageDelete}
              className="border-2 rounded-md px-4 py-1 cursor-pointer"
            >
              Remove
            </div>
          </div>
        </div>
      </div>
      {errors.image && (
        <div className="px-8  error text-red-500 ">{errors.image}</div>
      )}

      <div className="px-8 ">
        <form action="" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="py-2 w-full flex gap-12 items-center">
            <div className="w-1/2">
              <label
                htmlFor=""
                className=" block text-[#47494b] text-sm py-1 font-semibold"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
                className="border-2 rounded-md w-full  p-2 placeholder:text-sm font-semibold"
              />
              {errors.firstName && (
                <div className=" error text-red-500 ">{errors.firstName}</div>
              )}
            </div>

            <div className="w-1/2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-1 font-semibold"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
                className="border-2 rounded-md w-full  p-2 placeholder:text-sm font-semibold"
              />
              {errors.lastName && (
                <div className="  error text-red-500 ">{errors.lastName}</div>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="py-2  ">
            <label
              htmlFor=""
              className="block text-[#47494b] text-sm py-1 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="border-2 rounded-md w-full p-2 placeholder:text-sm font-semibold"
            />
            {errors.email && (
              <div className=" error text-red-500 ">{errors.email}</div>
            )}
          </div>

          {/* Phone and Extention */}
          <div className="py-2 w-full flex gap-12 items-center">
            <div className="w-8/12">
              <label
                htmlFor=""
                className=" block text-[#47494b] text-sm py-1 font-semibold"
              >
                Phone
              </label>
              <input
                type="number"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className="border-2 rounded-md w-full  p-2 placeholder:text-sm font-semibold"
              />
              {errors.phone && (
                <div className=" error text-red-500 ">{errors.phone}</div>
              )}
            </div>

            <div>
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-1 font-semibold"
              >
                Extention
              </label>
              <input
                type="text"
                name="extention"
                value={formValues.extention}
                onChange={handleChange}
                placeholder="Enter Extention"
                className="border-2 rounded-md w-full  p-2 placeholder:text-sm font-semibold"
              />
              {errors.extention && (
                <div className=" error text-red-500 ">{errors.extention}</div>
              )}
            </div>
          </div>

          {/* Platform Language */}
          <div className="py-2  ">
            <label
              htmlFor=""
              className="flex text-[#47494b] text-sm py-1 font-semibold  gap-2 items-center"
            >
              Platform Language <BsQuestionCircleFill className="text-xs " />
            </label>
            <select
              name="language"
              value={formValues.language}
              onChange={handleChange}
              className="border-2 rounded-md w-full p-2 placeholder:text-sm font-semibold"
            >
              <option value="">Select</option>
              <option value="us">English (United States)</option>
              <option value="uk">English (United KingDom)</option>
            </select>
            {errors.language && (
              <div className=" error text-red-500 ">{errors.language}</div>
            )}
          </div>

          <button
            onSubmit={handleSubmit}
            className="border bg-[#25992a] my-4  text-white rounded-md text-sm px-3 py-2"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalData;
