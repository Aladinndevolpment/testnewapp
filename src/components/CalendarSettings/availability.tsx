import React, { useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";

const days = [
  { key: "0", div: "S", day: "Sunday" },
  { key: "1", div: "M", day: "Monday" },
  { key: "2", div: "T", day: "Tuesday" },
  { key: "3", div: "W", day: "Wednesday" },
  { key: "4", div: "T", day: "Thursday" },
  { key: "5", div: "F", day: "Friday" },
  { key: "6", div: "S", day: "Saturday" },
];

const Availability = () => {
  const [select, setSelect] = useState(0);
  const [selectedDays, setSelectedDays] = useState<any[]>([]);
  const [currentDay, setCurrentDay] = useState<number | null>(null);
  const [formValues, setFormValues] = useState<any>({
    slotDuration: "",
    slotInterval: "",
    buffer: "",
    appointmentsPerSlot: "",
    appointmentsPerDay: "",
    minScheduleNotice: "",
    duration: "",
    dateRange: "",
    dateDuration: "",
    custom: "",
    standard: "",
    fromTime: "",
    toTime: "",
    recAppointment: "",
    image: null,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  return (
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
          Control and avoid last minute appointments by setting up Scheduling
          notice before away hours
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
              type="number"
              onChange={handleChange}
              name="minScheduleNotice"
              placeholder="Duration"
              value={formValues.minScheduleNotice}
              className="border-2 rounded-md  p-2 text-sm font-semibold"
            />
            <select
              name="duration"
              onChange={handleChange}
              value={formValues.duration}
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
              type="number"
              onChange={handleChange}
              name="dateRange"
              placeholder="Duration"
              value={formValues.dateRange}
              className="border-2 rounded-md  p-2 text-sm font-semibold"
            />
            <select
              name="dateDuration"
              onChange={handleChange}
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
        <h1 className="text-[#47494b] text-md font-semibold">Office Hours</h1>
        <p className="text-gray-400 text-sm">
          Click the days below to choose office hours
        </p>
        <p className="text-gray-400 text-sm py-2">
          Choosing the Custom option here would cause Scheduling Notice to be
          ineffective.
        </p>
        <div className="flex gap-3 text-sm">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="standard"
                value={formValues.standard}
                onChange={handleChange}
                className="radio checked:bg-blue-500 scale-75"
                checked
              />
              <span className="label-text text-xs font-semibold">Standard</span>
            </label>
          </div>

          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="standard"
                onChange={handleChange}
                value={formValues.standard}
                className="radio checked:bg-blue-500 scale-75"
                checked
              />
              <span className="label-text text-xs font-semibold">Custom</span>
            </label>
          </div>
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
                  const newData = selectedDays.filter((item) => item != index);
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
                onChange={handleChange}
                name="fromTime"
                value={formValues.fromTime}
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
                onChange={handleChange}
                name="toTime"
                value={formValues.toTime}
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
          <input
            type="checkbox"
            name="recAppointment"
            value={formValues.recAppointment}
            onChange={handleChange}
            className="toggle toggle-accent "
          />
          <span className="text-[#47494b] flex items-center gap-2 text-sm py-1 font-semibold">
            Recurring Appointments <BsQuestionCircleFill className="text-xs " />
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
  );
};

export default Availability;
