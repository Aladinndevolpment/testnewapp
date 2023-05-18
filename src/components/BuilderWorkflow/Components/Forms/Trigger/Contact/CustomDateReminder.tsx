import {
  PlusCircleIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Checkbox,
  FormControlLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const workflowTrigger = [
  {
    title: "LC- Premium Trigger",
    subContent: {
      title: "Inbound Webhook",
      subTitle: "Runs when a request is sent to Hook URL Provided",
    },
  },
  {
    title: "Affiliated",
    subContent: {
      title: "Affiliated Created",
      subTitle: "Runs when new affiliated is created",
    },
  },
  {
    title: "Appointments",
    subContent: {
      title: "Appointment Status",
      subTitle: "Dummy data",
    },
  },
];

const appointmentFilter = [
  {
    title: "Custom Tag",
    subContent: [],
  },
  {
    title: "Hash Tag",
    subContent: [],
  },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function CustomDateReminder({ onClose, updateData }: any) {
  const [state, setState] = useState<any>({
    workflowTrigger: "",
    workflowName: "",
    filters: [],
  });

  const [errors, setErrors] = useState<any>({
    workflowTrigger: "",
    workflowName: "",
    filters: [],
  });

  const [triggerOpen, setTriggerOpen] = useState<boolean>(false);

  const handleInputChange = (e: any, index: any) => {
    const { name, value } = e.target;
    if (name.startsWith("filters")) {
      const newFilters = [...state.filters];
      newFilters[index] = { ...newFilters[index], [name]: value };
      setState((prevState: any) => ({ ...prevState, filters: newFilters }));
    } else {
      setState((prevState: any) => ({ ...prevState, [name]: value }));
    }
  };

  const handleAddField = () => {
    setState((prevState: any) => ({
      ...prevState,
      filters: [...prevState.filters, { filterstype: "", filterssubtype: "" }],
    }));
  };

  const handleRemoveField = (index: any) => {
    const newFilters: any = [...state.filters];
    newFilters.splice(index, 1);
    setState((prevState: any) => ({ ...prevState, filters: newFilters }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Validate form fields
    let formIsValid = true;
    const newErrors = {
      workflowTrigger: "",
      workflowName: "",
      filters: [{ filterstype: "", filterssubtype: "" }],
    };

    if (state.workflowTrigger === "") {
      formIsValid = false;
      newErrors.workflowTrigger = "Workflow Trigger is required";
    }

    if (state.workflowName === "") {
      formIsValid = false;
      newErrors.workflowName = "Workflow Name is required";
    }

    const filtersErrors: any = [];
    state.filters.forEach((filter: any, index: any) => {
      const filterErrors: any = {};
      if (filter.filterstype === "") {
        formIsValid = false;
        filterErrors.filterstype = "Filter Type is required";
      }
      // if (filter.filterssubtype === "") {
      //   formIsValid = false;
      //   filterErrors.filterssubtype = "Filter Subtype is required";
      // }
      filtersErrors[index] = filterErrors;
    });

    newErrors.filters = filtersErrors;
    setErrors(newErrors);

    if (formIsValid) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", state);
      updateData(state.workflowName);
    }
  };

  return (
    <>
      <div className="h-[83vh] overflow-y-scroll scrollbar-hide px-2">
        <form onSubmit={handleSubmit}>
          <div className="w-full mb-5 pt-4">
            {/* <label
              className="w-full mb-2 text-base text-dark font-semibold uppercase"
              htmlFor="workflowTrigger"
            >
              Choose a workflow trigger
            </label>
            <Select
              label="Contact Tag"
              name="workflowTrigger"
              value={state.workflowTrigger}
              onChange={(e) => handleInputChange(e, state.workflowTrigger)}
              input={<OutlinedInput />}
              MenuProps={MenuProps}
              className="w-full my-2"
            >
              <MenuItem disabled value="">
                <em>Contact Tag</em>
              </MenuItem>
              {workflowTrigger.map((option, index) => (
                <div key={index}>
                  <p className="bg-newBlue py-2 px-5 text-white">
                    {option.title}
                  </p>
                  <div className="py-1">
                    <MenuItem value={option.subContent.title}>
                      <p className="px-2 text-dark font-bold pb-1">
                        {option.subContent.title}
                      </p>
                    </MenuItem>
                    <p className="px-2 text-dark">
                      {option.subContent.subTitle}
                    </p>
                  </div>
                </div>
              ))}
            </Select>
            {errors.workflowTrigger && (
              <div className="error">{errors.workflowTrigger}</div>
            )} */}
            <div className="relative ">
              <label
                className="w-full mb-2 text-base text-dark font-semibold uppercase"
                htmlFor="workflowTrigger"
              >
                Choose a workflow trigger
              </label>

              <div
                className="flex items-center mt-2 justify-start border-[1px] rounded-[4px] border-[#C4C4C4] px-3 py-3 cursor-pointer"
                onClick={() => setTriggerOpen(!triggerOpen)}
              >
                <span className="text-base text-[#BABABA] font-semibold">
                  {state.workflowTrigger
                    ? state.workflowTrigger
                    : "Choose Date Reminder"}
                </span>
              </div>
              <div
                className={`absolute  transition-all top-[70%] rounded-md mt-5 w-full shadow-md  scrollbar-hide ${
                  triggerOpen
                    ? "translate-y-0 opacity-100 z-50"
                    : "-translate-y-[2%] opacity-0 -z-50"
                }`}
                onBlur={() => console.log("here")}
              >
                <ul className="mt-1.5 overflow-y-scroll scrollbar-hide max-h-52  bg-white  ">
                  {workflowTrigger.map((option, index) => (
                    <div key={index} className="pb-3">
                      <p className="bg-newBlue py-2 px-5 text-white">
                        {option.title}
                      </p>
                      <div
                        className="py-1"
                        onClick={() => {
                          setState((prevValues: any) => ({
                            ...prevValues,
                            workflowTrigger: option.subContent.title,
                          }));
                          setTriggerOpen(!triggerOpen);
                        }}
                      >
                        <div>
                          <p className="px-2 text-dark font-bold pb-1 pt-2">
                            {option.subContent.title}
                          </p>
                        </div>
                        <p className="px-2 text-dark">
                          {option.subContent.subTitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full mb-5">
            <p className="w-full mb-1 text-base text-dark font-semibold uppercase">
              Choose a workflow trigger
            </p>

            <TextField
              placeholder="Contact Tag"
              variant="outlined"
              type="text"
              id="workflowName"
              name="workflowName"
              value={state.workflowName}
              onChange={(e) => handleInputChange(e, 0)} // Assuming it's the first field, index is 0
              className="px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none focus:border-gray-300 text-black"
            />

            {errors.workflowName && (
              <div className="error">{errors.workflowName}</div>
            )}
          </div>

          {state.filters.map((filter: any, index: any) => (
            <div
              key={index}
              className=" flex flex-wrap justify-between mb-5 items-center "
            >
              <div className="w-full  md:w-[45%] pr-4">
                <label
                  htmlFor={`filterstype-${index}`}
                  className="w-full mb-2 text-base text-dark font-semibold uppercase"
                >
                  Filter Type:
                </label>
                <Select
                  id={`filterstype-${index}`}
                  name="filterstype"
                  value={filter.filterstype}
                  onChange={(e) => handleInputChange(e, index)}
                  className="px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none focus:border-gray-300 text-black"
                >
                  <MenuItem value="">Select</MenuItem>
                  {appointmentFilter.map((option, optionIndex) => (
                    <MenuItem key={optionIndex} value={option.title}>
                      {option.title}
                    </MenuItem>
                  ))}
                </Select>
                {errors.filters[index] && errors.filters[index].filterstype && (
                  <div className="error">
                    {errors.filters[index].filterstype}
                  </div>
                )}
              </div>

              {filter.filterstype && (
                <div className="w-full  md:w-[45%] pr-4">
                  <label
                    htmlFor={`filterssubtype-${index}`}
                    className="w-full mb-2 text-base text-dark font-semibold uppercase"
                  >
                    Filter Subtype:
                  </label>

                  <Select
                    id={`filterssubtype-${index}`}
                    name="filterssubtype"
                    value={filter.filterssubtype}
                    onChange={(e) => handleInputChange(e, index)}
                    className="px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none focus:border-gray-300 text-black"
                  >
                    <MenuItem value="">Select</MenuItem>
                    {filter.filterstype &&
                      appointmentFilter
                        .find((option) => option.title === filter.filterstype)
                        ?.subContent.map(
                          (subOption: any, subOptionIndex: any) => (
                            <MenuItem
                              key={subOptionIndex}
                              value={subOption?.title}
                            >
                              {subOption?.title}
                            </MenuItem>
                          )
                        )}
                  </Select>
                  {errors.filters[index] &&
                    errors.filters[index].filterssubtype && (
                      <div className="error">
                        {errors.filters[index].filterssubtype}
                      </div>
                    )}
                </div>
              )}

              <div className="w-full md:w-[10%] pr-4">
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveField(index)}
                    className="  px-3 py-2 rounded-md mt-5"
                  >
                    <AiFillDelete className="h-5 w-5 text-gray-600" />
                  </button>
                )}
              </div>
            </div>
          ))}
          <div className="flex justify-start items-center pl-2 text-base text-dark font-semibold ">
            <PlusCircleIcon className="h-5 w-5 mr-1" />
            <button type="button" onClick={handleAddField}>
              Add Filter
            </button>
          </div>

          <div className="w-full mb-5 mt-4 px-2">
            <div>
              <FormControlLabel
                value="checkbox"
                control={<Checkbox className="bg-blue-500" />}
                label="Match on the year along with the day and month"
                labelPlacement="end"
                className="w-full text-sm text-gray-600"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-end items-end py-2 px-4">
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
          Submit
        </button>
      </div>
    </>
  );
}
