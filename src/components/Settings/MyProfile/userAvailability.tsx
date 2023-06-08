import { useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";

const days = [
  { div: "S", day: "Sunday" },
  { div: "M", day: "Monday" },
  { div: "T", day: "Tuesday" },
  { div: "W", day: "Wednesday" },
  { div: "T", day: "Thursday" },
  { div: "F", day: "Friday" },
  { div: "S", day: "Saturday" },
];

const UserAvailability = () => {
  const [selectedDays, setSelectedDays] = useState<any[]>([]);
  const [currentDay, setCurrentDay] = useState<number | null>(null);
  const [errors, setErrors] = useState<any>({});
  const [formValues, setFormValues] = useState<any>({
    meetingLocation: "",
    location: "",
    timeZone: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    //validate errors
    const validationErrors: any = {};

    if (!formValues.meetingLocation) {
      validationErrors.meetingLocation = "Required";
    }

    if (!formValues.location) {
      validationErrors.location = "Meeting Location is Required";
    }

    if (!formValues.timeZone) {
      validationErrors.timeZone = " Required";
    }

    // set errors
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // reset after submission
    setFormValues({
      meetingLocation: "",
      location: "",
      timeZone: "",
    });
    setErrors({});
  };
  return (
    <div className=" border rounded-md  mb-5  bg-white  shadow-md">
      {/* first section */}
      <div className="text-[#47494b] text-lg font-semibold p-4 border-b flex items-center justify-between">
        <h1>User Availability</h1>
      </div>
      <form action="" className="py-5" onSubmit={handleSubmit}>
        {/* Meeting Location */}
        <div className="py-2 px-4 ">
          <label
            htmlFor=""
            className="block text-[#47494b] text-sm py-1 font-semibold"
          >
            Meeting Location
          </label>
          <select
            name="meetingLocation"
            value={formValues.meetingLocation}
            onChange={handleChange}
            className="border-2 rounded-md w-full p-2 placeholder:text-sm font-semibold"
          >
            <option value="">Select</option>
            <option value="L1">Location 1</option>
            <option value="L2">Location 2</option>
          </select>
          {errors.meetingLocation && (
            <div className=" error text-red-500 ">{errors.meetingLocation}</div>
          )}
        </div>

        {formValues.meetingLocation ? (
          <div className="py-2 px-4 ">
            <input
              type="text"
              name="location"
              value={formValues.location}
              onChange={handleChange}
              placeholder="Meeting Location"
              className="border-2 rounded-md w-full p-2 placeholder:text-sm font-semibold"
            />
            {errors.location && (
              <div className=" error text-red-500 ">{errors.location}</div>
            )}
          </div>
        ) : (
          ""
        )}

        {/*Time Zone */}
        <div className="py-2 px-4 ">
          <label
            htmlFor=""
            className="block text-[#47494b] text-sm py-1 font-semibold"
          >
            Time Zone
          </label>
          <select
            name="timeZone"
            value={formValues.timeZone}
            onChange={handleChange}
            className="border-2 rounded-md w-full p-2 placeholder:text-sm font-semibold"
          >
            <option value="">Select</option>
            <option value="TZ">TZ 1</option>
            <option value="TZ">TZ 2</option>
          </select>
          {errors.timeZone && (
            <div className=" error text-red-500 ">{errors.timeZone}</div>
          )}
        </div>

        {/* Available days */}
        <h1 className=" py-2 px-4 block text-[#47494b] text-sm  font-semibold">
          Available Hours
        </h1>
        <div className=" px-4 flex gap-3">
          {days.map((item: any, index: number) => (
            <div
              key={index}
              className={`w-10 h-10 hover: cursor-pointer flex items-center justify-center font-semibold rounded ${
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

        <div className="flex flex-wrap ">
          {days?.map((item: any, index: any) => (
            <div
              key={index}
              className={` ${
                selectedDays.includes(index) ? "block" : "hidden"
              } px-4 pt-5 `}
            >
              <div className="flex p-3 w-72 gap-2 border items-center ">
                <div className="w-1/2">
                  <label
                    htmlFor=""
                    className=" text-[#47494b] text-xs  font-semibold flex justify-between items-center"
                  >
                    {item?.day}
                    <span className="text-blue-400">+ hours</span>
                  </label>
                  <input
                    type="time"
                    onChange={handleChange}
                    name="fromTime"
                    value={formValues.fromTime}
                    className="border-2  rounded w-full bg-gray-100 "
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor=""
                    className=" flex text-blue-400 text-xs  font-semibold  justify-end"
                  >
                    Apply All
                  </label>
                  <input
                    type="time"
                    onChange={handleChange}
                    name="toTime"
                    value={formValues.toTime}
                    className=" rounded w-full border-2  bg-gray-100"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onSubmit={handleSubmit}
          className="border bg-[#25992a]  text-white rounded-md text-sm px-8 py-2 mt-5 mx-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserAvailability;
