import { useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { useDropzone } from "react-dropzone";

import Image from "next/image";
import { useCallback, useContext } from "react";

const calendatTyp = [
  { title: "Team & Event Setup", number: 1 },
  { title: "Availability", number: 2 },
  { title: "Confirmation", number: 3 },
];

const days = [
  { key: "1", div: "S", day: "Sunday" },
  { key: "2", div: "M", day: "Monday" },
  { key: "3", div: "T", day: "Tuesday" },
  { key: "4", div: "W", day: "Wednesday" },
  { key: "5", div: "T", day: "Thursday" },
  { key: "6", div: "F", day: "Friday" },
  { key: "7", div: "S", day: "Saturday" },
];

const CalendraSettings = () => {
  const [select, setSelect] = useState(0);
  const [selectedDays, setSelectedDays] = useState<any[]>([]);
  const [currentDay, setCurrentDay] = useState<number | null>(null);
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
    slotDuration: "",
    slotInterval: "",
    buffer: "",
    appointmentsPerSlot: "",
    appointmentsPerDay: "",
    minScheduleNotice: "",
    duration: "",
    dateRange: "",
    dateDuration: "",
    customForm: "",
    stickyContact: "",

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
    <div className="w-[65vw] border rounded-md  m-20 bg-white  ">
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
      {select == 0 && (
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
                <label
                  htmlFor=""
                  className="block text-[#47494b] text-sm py-1 font-semibold"
                >
                  Add Logo
                </label>
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
                      <button
                        onClick={handleImageDelete}
                        className="border-2 rounded-md px-4 py-1"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 px-5 py-4 text-xs text-gray-600 font-semibold">
                    <span>Widget Type:</span>
                    <div className="flex  gap-3">
                      <div className="flex items-center">
                        <input type="radio" name="Square" id="" />
                        <label htmlFor="">Square</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" name="circle" id="" />
                        <label htmlFor="">Circle</label>
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
                    It will be used while creating appointment table, you can
                    use template parameters.
                  </p>
                </div>

                {/* Meeting location */}
                <div className="py-2">
                  <label
                    htmlFor=""
                    className="block flex items-center gap-2 text-[#47494b] text-sm py-2 font-semibold"
                  >
                    Meeting Location{" "}
                    <BsQuestionCircleFill className="text-xs " />
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
              </form>
            </div>
          </div>

          <div className="flex justify-end gap-3 p-4 mt-2 border-t ">
            <button className="border text-[#47494b] rounded-md px-3 py-2">
              Close
            </button>
            <button className="border bg-[#25992a] text-white rounded-md px-3 py-2">
              Save & continue
            </button>
          </div>
        </div>
      )}
      {select == 1 && (
        <div className="mx-6 w-[95%]">
          <div className="px-4 pt-5">
            <h1 className="text-[#47494b] text-md font-semibold">
              Appointment Slot Setting
            </h1>
            <p className="text-gray-400 text-sm">
              Configure duration and intervals for the appoointment
            </p>
          </div>

          <div className="px-4">
            <form action="">
              <div className="py-2 grid grid-cols-3 gap-3 ">
                <div>
                  <label
                    htmlFor=""
                    className="block text-[#47494b] text-sm py-2 font-semibold"
                  >
                    Slot Duration
                  </label>
                  <select
                    onChange={handleChange}
                    name="slotDuration"
                    value={formValues.slotDuration}
                    className="border-2 rounded-md w-full  p-2 text-sm font-semibold "
                  >
                    <option value="">Select</option>
                    <option value="30min">30 Minutes</option>
                    <option value="20min">20 Minutes</option>
                    <option value="10min">10 Minutes</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor=""
                    className="block text-[#47494b] text-sm py-2  font-semibold"
                  >
                    Slot Interval
                  </label>
                  <select
                    onChange={handleChange}
                    name="slotInterval"
                    value={formValues.slotInterval}
                    className="border-2 rounded-md  p-2 w-full text-sm font-semibold"
                  >
                    <option value="">Select</option>
                    <option value="min1">30 Minutes</option>
                    <option value="min2">20 Minutes</option>
                    <option value="min3">10 Minutes</option>
                  </select>
                </div>

                <div className="w-full">
                  <label
                    htmlFor=""
                    className="block text-[#47494b] text-sm py-2 font-semibold "
                  >
                    Buffer Duration between appointment
                  </label>
                  <input
                    type="number"
                    onChange={handleChange}
                    name="buffer"
                    value={formValues.buffer}
                    className="border-2 rounded-md w-full p-2 text-sm font-semibold"
                    placeholder="Duration in Minutes"
                  ></input>
                </div>

                <div>
                  <label
                    htmlFor=""
                    className="block flex items-center gap-2 text-[#47494b] text-sm  py-2 font-semibold"
                  >
                    Appointments per slot
                    <BsQuestionCircleFill className="text-xs " />
                  </label>
                  <input
                    onChange={handleChange}
                    name="appointmentsPerSlot"
                    value={formValues.appointmentsPerSlot}
                    className="border-2 rounded-md w-full p-2  text-sm font-semibold"
                    placeholder="Appointments per slot"
                  ></input>
                </div>

                <div>
                  <label
                    htmlFor=""
                    className="block text-[#47494b] text-sm py-2 flex items-center gap-2 font-semibold"
                  >
                    Appointments Per Day
                    <BsQuestionCircleFill className="text-xs " />
                  </label>
                  <input
                    onChange={handleChange}
                    name="appointmentPerDay"
                    value={formValues.appointmentPerDay}
                    className="border-2 rounded-md w-full p-2 text-sm font-semibold"
                    placeholder="Appointments per day"
                  ></input>
                </div>
              </div>
            </form>
          </div>

          <div className="px-4 pt-5">
            <h1 className="text-[#47494b] text-md font-semibold">
              Scheduling Notice
            </h1>
            <p className="text-gray-400 text-sm">
              Control and avoid last minute appointments by setting up
              Scheduling notice before away hours
            </p>
          </div>

          <div className="flex px-4 pt-5 gap-10 ">
            <div className=" w-1/2 ">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-2 font-semibold"
              >
                Minimum Scheduling Notice
              </label>
              <div className=" flex gap-3 ">
                <input
                  type="text"
                  name="minScheduleNotice"
                  placeholder="Duration"
                  value={formValues.minScheduleNotice}
                  className="border-2 rounded-md  p-2 text-sm font-semibold"
                />
                <select
                  name="duration"
                  value={formValues.duration}
                  id=""
                  className="border-2 rounded-md w-1/2 p-2 text-sm font-semibold "
                >
                  <option value="days">Days</option>
                  <option value="months">Months</option>
                </select>
              </div>
            </div>

            <div className="  w-1/2 ">
              <label
                htmlFor=""
                className="block flex items-center gap-2 text-[#47494b] text-sm py-2 font-semibold"
              >
                Date Range
                <BsQuestionCircleFill className="text-xs " />
              </label>
              <div className=" flex gap-3">
                <input
                  type="text"
                  name="dateRange"
                  placeholder="Duration"
                  value={formValues.dateRange}
                  className="border-2 rounded-md  p-2 text-sm font-semibold"
                />
                <select
                  name="dateDuration"
                  id=""
                  value={formValues.dateDuration}
                  className="border-2 rounded-md w-1/2 p-2 text-sm font-semibold "
                >
                  <option value="days">Days</option>
                  <option value="months">Months</option>
                </select>
              </div>
            </div>
          </div>

          <div className="px-4 pt-5">
            <h1 className="text-[#47494b] text-md font-semibold">
              Office Hours
            </h1>
            <p className="text-gray-400 text-sm">
              Click the days below to choose office hours
            </p>
            <p className="text-gray-400 text-sm py-2">
              Choosing the Custom option here would cause Scheduling Notice to
              be ineffective.
            </p>
            <div className="flex gap-3 text-sm">
              <label htmlFor="" className="flex gap-2">
                <input type="radio" name="" id="" />
                Standard
              </label>

              <label htmlFor="" className="flex gap-2">
                <input type="radio" name="" id="" />
                Custom
              </label>
            </div>
            <div className="py-3 flex gap-3">
              {days.map((item: any, index: number) => (
                <div
                  key={index}
                  className={`w-10 h-10  flex items-center justify-center font-semibold rounded ${
                    selectedDays.includes(index) ? "bg-blue-400" : "bg-gray-300"
                  }`}
                  onClick={() => {
                    if (selectedDays.includes(index)) {
                      const newData = selectedDays.filter(
                        (item) => item != index
                      );
                      setSelectedDays(newData);
                      return;
                    } else {
                      setSelectedDays(
                        Array.from(new Set([...selectedDays, index]))
                      );
                      setCurrentDay(index);
                    }
                  }}
                >
                  {item.div}
                </div>
              ))}
            </div>
          </div>

          <div className=" px-4 pt-5 grid grid-cols-4">
            {currentDay ? (
              <div className="flex p-4 border  ">
                <div className="w-1/2">
                  <label
                    htmlFor=""
                    className="block text-[#47494b] text-xs py-2 font-semibold flex justify-between"
                  >
                    {days[currentDay].day}
                    <span className="text-blue-400">+ hours</span>
                  </label>
                  <input
                    type="time"
                    name="fromTime"
                    id=""
                    className="border-2  rounded w-full bg-gray-100 border"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor=""
                    className="block text-blue-400 text-xs py-2 font-semibold flex justify-end"
                  >
                    Apply All
                  </label>
                  <input
                    type="time"
                    name="fromTime"
                    id=""
                    className="border rounded w-full border-2  bg-gray-100"
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="px-4 pt-5 ">
            <label className="w-1/2 flex gap-2">
              <input type="checkbox" className="toggle toggle-accent " />
              <span className="text-[#47494b] flex items-center gap-2 text-sm py-1 font-semibold">
                Recurring Appointments{" "}
                <BsQuestionCircleFill className="text-xs " />
              </span>
            </label>
          </div>

          <div className="flex justify-end gap-3 p-4 mt-2 border-t ">
            <button className="border text-[#47494b] rounded-md px-3 py-2">
              Close
            </button>
            <button className="border text-[#47494b] rounded-md px-3 py-2">
              Back
            </button>
            <button className="border bg-[#25992a] text-white rounded-md px-3 py-2">
              Save & continue
            </button>
          </div>
        </div>
      )}
      {select == 2 && (
        <div className=" w-full">
          <div className="  w-[95%]">
            <div className="px-4 pt-5">
              <h1 className="text-[#47494b] text-md font-semibold">
                Form Setting
              </h1>
              <p className="text-gray-400 text-sm">
                Configure your form and other related options
              </p>
            </div>

            <div className="px-4 pt-5">
              <form action="">
                <div>
                  <label
                    htmlFor=""
                    className="text-[#47494b] text-sm flex items-center gap-2 font-semibold"
                  >
                    Custom Form <BsQuestionCircleFill className="text-sm" />
                  </label>
                  <select
                    name="customForm"
                    value={formValues.customForm}
                    className="border-2 rounded-md w-10/12 p-1 placeholder:text-sm font-semibold"
                  >
                    <option value="">Select</option>
                    <option value="cs1">CustomForm1</option>
                    <option value="cs2">CustomForm2</option>
                  </select>
                </div>

                <div className="flex items-center px-2 py-3 gap-2">
                  <input
                    type="checkbox"
                    name="stickyContact"
                    value={formValues.stickyContact}
                    className="checkbox "
                  />
                  <label
                    htmlFor=""
                    className="text-[#47494b] text-sm flex items-center gap-2 font-semibold"
                  >
                    Use Sticky Contact{" "}
                    <BsQuestionCircleFill className="text-sm" />
                  </label>
                </div>

                <div className="mt-3">
                  <h1 className="text-[#47494b] text-md font-semibold">
                    Notification & Additional Options
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Configure notiffication and other miscellaneous options
                  </p>
                </div>

                <div className="bg-gray-100 my-3 rounded-md p-3">
                  <div>
                    <label
                      htmlFor=""
                      className="text-gray-500 text-sm flex font-semibold"
                    >
                      Notification Type{" "}
                    </label>
                    <select
                      name="notificationType"
                      value={formValues.notificationType}
                      className="border-2 rounded-md w-1/3 p-1 placeholder:text-sm font-semibold"
                    >
                      <option value="">Select</option>
                      <option value="acknoEmail">Acknowledge email</option>
                      <option value="aknoSms">Acknowledge SMS</option>
                    </select>
                  </div>
                  <p className="text-gray-400 text-sm">
                    {" "}
                    Who should recieve this notification?
                  </p>

                  <div className=" py-3 gap-2">
                    <div className="flex items-center py-2 gap-2">
                      <input
                        type="checkbox"
                        name="stickyContact"
                        value={formValues.stickyContact}
                        className="checkbox "
                      />
                      <label
                        htmlFor=""
                        className="text-[#47494b] text-sm flex items-center gap-2 font-semibold"
                      >
                        Contact{" "}
                      </label>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="stickyContact"
                        value={formValues.stickyContact}
                        className="checkbox "
                      />
                      <label
                        htmlFor=""
                        className="text-[#47494b] text-sm flex items-center gap-2 font-semibold"
                      >
                        Emails <BsQuestionCircleFill className="text-sm" />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 my-3 rounded-md">
                  <label htmlFor="" className="flex gap-3 p-2">
                    <input type="checbox" className="checkbox  " />
                    <span className="text-gray-600 flex items-center gap-2 font-semibold text-sm">
                      Let the calendar auto confirm my appointment{" "}
                      <BsQuestionCircleFill className="text-sm" />
                    </span>
                  </label>
                </div>

                <div className=" my-3 rounded-md">
                  <label htmlFor="" className="flex gap-3 p-2">
                    <input type="checbox" className="checkbox  " />
                    <span className="text-gray-600 font-semibold text-sm">
                      Allow google calendar to send invitation or update emails
                      to attendees
                    </span>
                  </label>
                </div>

                <div className="bg-gray-100 my-3 rounded-md">
                  <label htmlFor="" className="flex gap-3 p-2">
                    <input type="checbox" className="checkbox  " />
                    <span className="text-gray-600  font-semibold text-sm">
                      Allow Reschedule{" "}
                    </span>
                  </label>
                </div>

                <div className="bg-gray-100 my-3 rounded-md">
                  <label htmlFor="" className="flex gap-3 p-2">
                    <input type="checbox" className="checkbox  " />
                    <span className="text-gray-600 font-semibold text-sm">
                      Allow Cancellation
                    </span>
                  </label>
                </div>

                <div className="py-2">
                  <label
                    htmlFor=""
                    className="block text-[#47494b] text-sm py-1 font-semibold"
                  >
                    Additional Notes
                  </label>
                  <textarea
                    onChange={handleChange}
                    name="additionalNotes"
                    value={formValues.additionalNotes}
                    className="border-2 rounded-md w-10/12 p-2  font-semibold"
                  />
                </div>

                <div className="py-2">
                  <label
                    htmlFor=""
                    className="block text-[#47494b] text-sm py-1 font-semibold"
                  >
                    Facebook pixel ID
                  </label>
                  <input
                    type="url"
                    name="facebookId"
                    value={formValues.facebookId}
                    onChange={handleChange}
                    placeholder="Facebook Pixel ID"
                    className="border-2 rounded-md w-10/12 p-2 placeholder:text-sm font-semibold"
                  />
                </div>

                <div className="py-2">
                  <label
                    htmlFor=""
                    className="block text-[#47494b] text-sm py-1 font-semibold"
                  >
                    Custom Code
                  </label>
                  <textarea
                    onChange={handleChange}
                    name="customCode"
                    value={formValues.customCode}
                    className="border-2 rounded-md w-10/12 p-2  font-semibold"
                    placeholder="Enter Custom Code"
                  />
                </div>

                <div className="mt-3">
                  <h1 className="text-[#47494b] text-md font-semibold">
                    Form Submissions
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Control how you want the confirmation page to be displayed
                    or redirected
                  </p>
                </div>

                <div className="flex gap-3 text-sm py-2">
                  <label htmlFor="" className="flex gap-2 text-gray-500">
                    <input type="radio" name="" id="" />
                    Form Submit Redirected URL
                  </label>

                  <label htmlFor="" className="flex gap-2 text-gray-500">
                    <input type="radio" name="" id="" />
                    Custom Thank You Message
                  </label>
                </div>
                <textarea
                  onChange={handleChange}
                  name="thankMessage"
                  value={formValues.thankMessage}
                  className="border-2 rounded-md w-10/12 p-2  font-semibold"
                  placeholder="Message"
                />
              </form>
            </div>
          </div>
          <div className="flex justify-end gap-3 p-4 mt-2 border-t ">
            <button className="border text-[#47494b] rounded-md px-3 py-2">
              Close
            </button>
            <button className="border text-[#47494b] rounded-md px-3 py-2">
              Back
            </button>
            <button className="border bg-[#25992a] text-white rounded-md px-3 py-2">
              Save & continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendraSettings;
