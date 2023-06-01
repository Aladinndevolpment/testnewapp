import { useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { useDropzone } from "react-dropzone";

import { DeleteForever } from "@mui/icons-material";
import Image from "next/image";
import { useCallback, useContext } from "react";

const calendatTyp = [
  { title: "Team & Event Setup", number: 1 },
  { title: "Availability", number: 2 },
  { title: "Confirmation", number: 3 },
];

const CalendarSetting = () => {
  const [select, setSelect] = useState(0);
  const [formValues, setFormValues] = useState<any>({
    name: "",
    description: "",
    calendarUrl: "",
    widgetTyp: "",
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

  return (
    <div className="px-4 py-4">
      <div className="  border rounded-md    bg-white  ">
        {/* first section */}
        <div className="text-[#47494b] text-lg font-semibold p-4 border-b flex items-center justify-between">
          <h1>Add New Calendar</h1>
          <MdOutlineClose className="text-gray-400" />
        </div>

        {/* Second Section */}
        <div className="flex gap-3 border-b p-3">
          {calendatTyp.map((item: any, index: number) => (
            <button
              key={index}
              className={`border rounded-3xl  pr-3 pl-1 gap-2 py-[5px] flex justify-around ${
                select == index
                  ? "bg-white font-semibold toggleShadow"
                  : "text-gray-400 "
              }`}
              onClick={() => setSelect(index)}
            >
              {" "}
              <span
                className={` px-2 rounded-full space-x-2 ${
                  select == index
                    ? "bg-blue-400 text-white"
                    : "bg-gray-200 text-gray-400"
                } `}
              >
                {item.number}
              </span>{" "}
              {item.title}
            </button>
          ))}
        </div>

        {/* Main Section */}
        <div className="mx-6 ">
          <div className="px-4 pt-5">
            <h1 className="text-[#47494b] text-md font-semibold">Calendar</h1>
            <p className="text-gray-400 text-sm">
              How would you describe your calendar?
            </p>
          </div>
          {/* form */}
          <div className="  px-4">
            <form action="">
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

              <div
                {...getRootProps()}
                className="border-2 flex gap-4 rounded-md w-10/12 p-2 "
              >
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
                    <button className="border-2 rounded-md px-4  border-blue-400 text-blue-400">
                      Add
                    </button>
                    <button className="border-2 rounded-md px-4 py-1">
                      Remove
                    </button>
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
                  <button className="rounded-full w-8 h-8 bg-red-500"></button>
                  <button className="rounded-full w-8 h-8 bg-pink-500"></button>
                  <button className="rounded-full w-8 h-8 bg-blue-500"></button>
                  <button className="rounded-full w-8 h-8 bg-green-500"></button>
                  <button className="rounded-full w-8 h-8 bg-yellow-800"></button>
                  <button className="rounded-full w-8 h-8 bg-violet-500"></button>
                  <button className="rounded-full w-8 h-8 bg-blue-300"></button>
                  <button className="rounded-full w-8 h-8 bg-gray-700"></button>
                  <button className="rounded-full w-8 h-8 bg-red-200"></button>
                  <button className="rounded-full w-8 h-8 bg-gray-300"></button>
                  <button className="rounded-full w-8 h-8 bg-orange-500"></button>
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
                    <option value="">Select</option>
                    <option value="neo">Neo</option>
                    <option value="type2">Type2</option>
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
            </form>
          </div>
        </div>

        {/* End buttons */}
        <div className="flex justify-end gap-3 p-4 mt-2 border-t ">
          <button className="border text-[#47494b] rounded-md px-3 py-2">
            Close
          </button>
          <button className="border bg-[#25992a] text-white rounded-md px-3 py-2">
            Save & continue
          </button>
        </div>
      </div>
      );
    </div>
  );
};

export default CalendarSetting;
