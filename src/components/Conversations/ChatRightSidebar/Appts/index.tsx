import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import TextInput from "../../Components/TextInput";
import { MenuItem, Select } from "@mui/material";
import moment from "moment";

export default function Appts() {
  const assignTo = ["BHRT Calendar"];
  const timeSlots = [
    "11:00am - 12:00pm",
    "12:00pm - 1:00pm",
    "1:00pm - 2:00pm",
    "2:00pm - 3:00pm",
    "3:00pm - 4:00pm",
  ];

  const types = ["Ascending", "Descending"];
  const [formData, setFormData] = useState({
    assignTo: "",
    timeZone: "",
    date: "",
    slot: "",
    title: "",
  });

  const [appointments, setAppointments] = useState<any>([]);

  const [errors, setErrors] = useState<any>({});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newErrors: any = {};

    // Perform validation
    if (!formData.assignTo) {
      newErrors.assignTo = "Please select an assignee";
    }

    if (!formData.timeZone) {
      newErrors.timeZone = "Please select a timezone";
    }

    if (!formData.date) {
      newErrors.date = "Please select a date";
    }

    if (!formData.slot) {
      newErrors.slot = "Please select a time slot";
    }

    if (!formData.title.trim()) {
      newErrors.title = "Please enter an appointment title";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Submit the form or perform further actions
      setAppointments([
        ...appointments,
        {
          assignTo: formData.assignTo,
          timeZone: formData.timeZone,
          date: formData.date,
          slot: formData.slot,
          title: formData.title,
        },
      ]);
      setFormData({
        assignTo: "",
        timeZone: "",
        date: "",
        slot: "",
        title: "",
      });
    }
  };
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear the corresponding error message when the user starts typing
    setErrors((prevErrors: any) => ({
      ...prevErrors,
      [name]: "",
    }));
  };
  return (
    <div className=" h-[100vh] pb-[30%]  overflow-y-scroll w-full scrollbar-hide ">
      <form onSubmit={handleSubmit} className="p-4">
        <div className="flex flex-wrap gap-5 justify-between">
          <div className="w-full">
            <label htmlFor="title" className="text-sm mb-1">
              Assign To
            </label>
            <Select
              name="assignTo"
              value={formData.assignTo}
              onChange={handleInputChange}
              className="rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark text-space focus:outline-none focus:border-gray-300 text-black"
            >
              {assignTo?.map((item, index) => (
                <MenuItem value={item} key={index}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className="bg-[#f2f4f7] p-4 w-full flex gap-4 flex-col">
            <div className="w-full">
              <label htmlFor="status" className="text-sm mb-1">
                Showing slots in this timezone:{" "}
                <span className="font-medium">(Account Timezone)</span>
              </label>
              <Select
                name="timeZone"
                value={formData.timeZone}
                onChange={handleInputChange}
                className="rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark text-space focus:outline-none focus:border-gray-300 text-black"
              >
                {assignTo?.map((item, index) => (
                  <MenuItem value={item} key={index}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
              {errors.timeZone && (
                <p className="text-red-500 text-xs mt-1">{errors.timeZone}</p>
              )}
            </div>

            <div className="flex flex-wrap">
              <div className="w-1/2 pr-1">
                <label htmlFor="title">Date</label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  placeholder="Task Description"
                  className="px-3 rounded-md mt-2 mb-2 py-3 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300 text-black"
                />
                {errors.date && (
                  <p className="text-red-500 text-xs mt-1">{errors.date}</p>
                )}
              </div>
              <div className="w-1/2 pl-1">
                <label htmlFor="title">Slot</label>
                <Select
                  name="slot"
                  value={formData.slot}
                  onChange={handleInputChange}
                  className="rounded-md mt-2 mb-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark text-space focus:outline-none focus:border-gray-300 text-black"
                >
                  {timeSlots?.map((item, index) => (
                    <MenuItem value={item} key={index}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>{" "}
                {errors.slot && (
                  <p className="text-red-500 text-xs mt-1">{errors.slot}</p>
                )}
              </div>
            </div>
          </div>

          <div className="w-full">
            <label htmlFor="title">Appointment Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="(eg) Appointment with Bob"
              className="px-3 rounded-md mt-2 mb-2 py-3 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300 text-black"
            />{" "}
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title}</p>
            )}
          </div>
        </div>

        <div className="mt-5 flex justify-between">
          <button className="bg-white px-3 py-1.5 rounded-md w-28 flex justify-center border border-gray-300">
            <span className="text-black text-base">Cancel</span>
          </button>
          <button className="bg-green-600 px-3 py-1.5 rounded-md w-28 flex justify-center items-center">
            <AiOutlinePlus className="text-white mr-1" />
            <span className="text-white text-sm">Save</span>
          </button>
        </div>
      </form>
      <div className="px-2 py-6 flex flex-warp ">
        {appointments.length == 0 ? null : (
          <div className="w-full flex flex-wrap mb-4 justify-between items-center ">
            {appointments.map((item: any, index: number) => (
              <div
                className="w-full px-2 py-2 bg-[#f2f3f6] mb-2 rounded-lg"
                key={index}
              >
                <p className="font-semibold text-base pb-2">{item?.title}</p>
                <p className="font-medium text-sm pb-0.5">{item?.assignTo}</p>
                <p className="font-medium text-sm pb-1">{item?.timeZone}</p>
                <div className="flex justify-between items-center">
                  <p className="font-medium text-sm pb-0.5">{item?.slot}</p>
                  <p className="font-medium text-sm pb-0.5">
                    {moment(item?.date).format("DD-MM-YYYY")}{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
