import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
export default function Assigned({ updateData, onClose, actionData }: any) {
  const radioData = [
    { title: "To", value: "to" },
    { title: "Not To", value: "notTo" },
    { title: "None", value: "none" },
  ];

  const [formValues, setFormValues] = useState<any>({
    waitFor: "",
    toAssigned: "",
    toNotAssigned: "",
  });
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setFormValues({
      waitFor: "",
      toAssigned: "",
      toNotAssigned: "",
    });
    setErrors({});
    updateData(formValues);
    onClose();
  };

  return (
    <div>
      <div className="h-[75vh] 2xl:h-[75vh] overflow-y-scroll scrollbar-hide">
        <form onSubmit={handleSubmit} className="flex flex-wrap px-2  ">
          <div className="w-full mt-4">
            <p className="w-full mb-2 text-sm text-gray-600 font-semibold fontStrawFord">
              Filter Assigned
            </p>

            <ul className="pt-2 ">
              {radioData?.map((mainData: any, mainIndex: any) => (
                <li className="mb-1" key={mainIndex}>
                  <div className="flex justify-start items-center py-2">
                    <input
                      type="radio"
                      name="waitFor"
                      className="radio checked:bg-blue-500"
                      onChange={() =>
                        setFormValues((prevValues: any) => ({
                          ...prevValues,
                          waitFor: mainData?.value,
                        }))
                      }
                    />
                    <p
                      className={`w-full  text-sm text-gray-600 font-semibold fontStrawFord ml-2 mt-1 `}
                    >
                      {mainData?.title}
                    </p>
                  </div>
                  {formValues.waitFor === "to" ? (
                    <>
                      {mainData?.title == "To" && (
                        <Select
                          name="toAssigned"
                          className="px-2 rounded-lg mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
                        >
                          <MenuItem value="">Select Assigned</MenuItem>
                          <MenuItem value="assigned1">Shreen Hameed</MenuItem>
                        </Select>
                      )}
                    </>
                  ) : formValues.waitFor === "notTo" ? (
                    <>
                      {mainData?.title == "Not To" && (
                        <Select
                          name="toNotAssigned"
                          className="px-2 rounded-lg mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
                        >
                          <MenuItem value="">Select Assigned</MenuItem>
                          <MenuItem value="notAssigned1">
                            Shreen Hameed
                          </MenuItem>
                        </Select>
                      )}
                    </>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
      <div className="flex justify-end items-end  py-2 px-4">
        <button
          onClick={onClose}
          className="border-2 mr-5 fontStrawFord border-OrangeBuilder rounded-md flex justify-center items-center px-8 py-1.5 text-OrangeBuilder"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-OrangeBuilder fontStrawFord rounded-md flex justify-center items-center px-8 py-2 text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
