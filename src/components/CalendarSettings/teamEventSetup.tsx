import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsQuestionCircleFill } from "react-icons/bs";
import { GoPlus } from "react-icons/go";

const colorPallete = [
  { color: "bg-red-500", title: "Red" },
  { color: "bg-blue-500", title: "Blue" },
  { color: "bg-green-500", title: "Green" },
  { color: "bg-yellow-800", title: "Yellow" },
  { color: "bg-violet-500", title: "Violet" },
  { color: "bg-cyan-300", title: "Cyan" },
  { color: "bg-gray-700", title: "Gray" },
  { color: " bg-orange-500", title: "Orange" },
  { color: "bg-pink-500", title: "Pink" },
];

const TeamEventSetup = () => {
  const [errors, setErrors] = useState<any>({});
  const [formValues, setFormValues] = useState<any>({
    name: "",
    description: "",
    calendarUrl: "",
    widgetTyp: "",
    square: "",
    circle: "",
    appointmentTitle: "",
    meetingLocation: "",
    linkToCalendar: "",
    googleCalendar: "",
    syncOption: "",

    image: null,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const [adsData, setAdsData] = useState<any>();
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

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors: any = {};

    if (!formValues.name.trim()) {
      validationErrors.name = "Action name is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form submission logic goes here
    // You can access the form field values and attachment in the formValues state

    // Reset form after successful submission
    setFormValues({
      name: "",
    });

    setErrors({});
  };

  return (
    <div>
      <div className="mx-6 ">
        <div className="px-4 pt-5">
          <h1 className="text-[#47494b] text-md font-semibold">Calendar</h1>
          <p className="text-gray-400 text-sm">
            How would you describe your calendar?
          </p>
        </div>
        {/* form */}
        <div className="  px-4">
          <form action="" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="py-2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-1 font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Add Calendar Name"
                className="border-2 rounded-md w-10/12 p-2 placeholder:text-sm font-semibold"
              />
              {errors.name && (
                <div className="mb-5 error text-red-500 ">{errors.name}</div>
              )}
            </div>

            {/* Description */}
            <div className="py-2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-1 font-semibold"
              >
                Description
              </label>
              <textarea
                onChange={handleChange}
                name="description"
                value={formValues.description}
                placeholder="Add Calendar Description"
                className="border-2 rounded-md w-10/12 p-2 placeholder:text-sm font-semibold"
              />
            </div>

            {/* Calendar URL */}
            <div className="py-2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-1 font-semibold"
              >
                Calendar URL
              </label>
              <input
                type="url"
                name="calendarUrl"
                value={formValues.calendarUrl}
                onChange={handleChange}
                placeholder="Enter Calendar Slug"
                className="border-2 rounded-md w-10/12 p-2 placeholder:text-sm font-semibold"
              />
            </div>

            {/* Add LOGO */}
            <label
              htmlFor=""
              className="block text-[#47494b] text-sm py-1 font-semibold"
            >
              Add Logo
            </label>
            <div className="border-2 flex gap-4 rounded-md w-10/12 p-2 ">
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
                    />
                  </div>
                </div>
              ) : (
                <div className="bg-gray-200 w-32 h-32 flex items-center justify-center">
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <span>
                      <GoPlus />
                    </span>
                  </div>
                </div>
              )}

              <div>
                <div className="px-5 py-4 text-xs text-gray-400 font-semibold">
                  <p>The proposed size is 180*180px</p>
                  <p>Supported formats .jpeg, .gif, .png </p>
                  <p>Not bigger than 2.5MB</p>
                </div>
                <div className="px-5  gap-2 flex text-sm">
                  <div
                    {...getRootProps()}
                    className="border-2 rounded-md px-4 pt-1 cursor-pointer border-blue-400 text-blue-400"
                  >
                    Add
                  </div>
                  <div
                    onClick={handleImageDelete}
                    className="border-2 rounded-md px-4 py-1 cursor-pointer"
                  >
                    Remove
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 px-5 py-4 text-xs text-gray-600 font-semibold">
                <span>Widget Type:</span>
                <div className="flex  gap-3">
                  <div className="form-control">
                    <label className="label cursor-pointer flex gap-2">
                      <input
                        value={formValues.square}
                        type="radio"
                        name="square"
                        className="radio checked:bg-blue-500 scale-75"
                        onChange={handleChange}
                      />
                      <span className="label-text text-xs"> Square </span>
                    </label>
                  </div>
                  <div className="form-control ">
                    <label className="label cursor-pointer flex gap-2">
                      <input
                        value={formValues.square}
                        type="radio"
                        name="square"
                        className="radio checked:bg-blue-500 scale-75"
                        onChange={handleChange}
                      />
                      <span className="label-text text-xs"> Circle </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Widget type */}
            <div className="py-2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-2 font-semibold"
              >
                Widget Type
              </label>
              <select
                onChange={handleChange}
                name="widgetTyp"
                value={formValues.widgetTyp}
                className="border-2 rounded-md w-10/12 p-2 text-sm font-semibold"
              >
                <option value="">Select</option>
                <option value="neo">Neo</option>
                <option value="type2">Type2</option>
              </select>
            </div>

            {/* Appointment Title */}
            <div className="py-2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-2 font-semibold"
              >
                Appointment Title
              </label>
              <input
                type="text"
                onChange={handleChange}
                name="appointmentTitle"
                value={formValues.appointmentTitle}
                placeholder="{{contact.name}}"
                className="border-2 rounded-md w-10/12 p-2 placeholder:text-sm font-semibold"
              />
              <p className="text-gray-400 text-sm">
                It will be used while creating appointment table, you can use
                template parameters.
              </p>
            </div>

            {/* Meeting location */}
            <div className="py-2">
              <label
                htmlFor=""
                className="block flex items-center gap-2 text-[#47494b] text-sm py-2 font-semibold"
              >
                Meeting Location <BsQuestionCircleFill className="text-xs " />
              </label>
              <input
                type="text"
                onChange={handleChange}
                name="meetingLocation"
                value={formValues.meetingLocation}
                placeholder="Enter Location"
                className="border-2 rounded-md w-10/12 p-2 placeholder:text-sm font-semibold"
              />
            </div>

            {/* Event Color */}
            <div className="py-2">
              <label
                htmlFor=""
                className="block flex items-center gap-2 text-[#47494b] text-sm py-2 font-semibold"
              >
                Event Color <BsQuestionCircleFill className="text-xs " />
              </label>
              <div className="flex gap-1">
                {colorPallete.map((item: any, index: number) => (
                  <div key={index} className="tooltip" data-tip={item.title}>
                    <button className={`rounded-full w-8 h-8 ${item.color}  `}>
                      {" "}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Link to Calendar */}
            <div className="py-2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-2 font-semibold"
              >
                Link to Calendar
              </label>
              <div className="flex items-center gap-2">
                <select
                  onChange={handleChange}
                  name="linkToCalendar"
                  value={formValues.linkToCalendar}
                  className="border-2 rounded-md w-1/3 p-2 text-sm font-semibold"
                >
                  <option value="">Select linked calendar</option>
                  <option value="none">None</option>
                  <option value="google">Google</option>
                </select>
                <BsQuestionCircleFill className="text-xs " />
              </div>
            </div>

            {formValues.linkToCalendar == "google" ? (
              <div className="py-2">
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm py-2 font-semibold"
                >
                  Google Calendar
                </label>
                <select
                  onChange={handleChange}
                  name="googleCalendar"
                  value={formValues.googleCalendar}
                  className="border-2 rounded-md w-10/12 p-2 text-sm font-semibold"
                >
                  <option value="">Select Calendar</option>
                  <option value="neo">Holidays in US</option>
                  <option value="birthay">Birthdays</option>
                  <option value="family">Family</option>
                </select>
              </div>
            ) : (
              ""
            )}

            {/* Sync Option */}
            <div className="py-2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-2 font-semibold"
              >
                Sync Option
              </label>
              <select
                onChange={handleChange}
                name="syncOption"
                value={formValues.syncOption}
                className="border-2 rounded-md w-1/3 p-2 text-sm font-semibold"
              >
                <option value="">Select</option>
                <option value="oneWay">One way</option>
                <option value="twoWay">Two way</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 p-4 mt-2 border-t ">
              <button className="border text-[#47494b] rounded-md px-3 py-2">
                Close
              </button>
              <button
                onSubmit={handleSubmit}
                className="border bg-[#25992a] text-white rounded-md px-3 py-2"
              >
                Save & continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeamEventSetup;
