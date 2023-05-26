import React, { useState } from "react";
import { MdUpload } from "react-icons/md";




export default function VoiceMail({ onDataStore, onClose }: any) {


  const [formValues, setFormValues] = useState<any>({
    actionName: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [attachment,setAttachment] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };
 
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors: any = {};

    if (!formValues.actionName.trim()) {
      validationErrors.actionName = "Action name is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form submission logic goes here
    // You can access the form field values and attachment in the formValues state

    // Reset form after successful submission
    setFormValues({
      actionName: "",
    });
    setErrors({});
    // onDataStore(formValues.actionName);

    onDataStore(formValues.actionName);
  };

  return (
    <div>
      <div className="h-[83vh]  overflow-y-scroll scrollbar-hide">
        <form onSubmit={handleSubmit} className="flex flex-wrap px-2  ">
          <div className="w-full mt-4">
            <label className="w-full mb-2 text-base text-dark font-semibold uppercase">
              Action Name
            </label>
            <input
              type="text"
              name="actionName"
              value={formValues.actionName}
              onChange={handleChange}
              className="px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none   focus:border-gray-300 text-black "
            />
            {errors.actionName && (
              <span className="mb-5 error text-red-500 ">
                {errors.actionName}
              </span>
            )}
          </div>

          <h1 className="w-full mb-2 text-base text-dark font-semibold uppercase">Drop-Your-File</h1>
            {attachment == false ? <button onClick={()=>{setAttachment(true)}} className="flex items-center justify-center bg-[#ed754b] text-white px-6 py-1 w-2/4 rounded font-bold mt-3 hover:bg-[#ed825c]"> <MdUpload/>Upload File</button> : <input
              type="file"
              name="attachment"
              onChange={(e: any) =>
                setFormValues((prevValues: any) => ({
                  ...prevValues,
                  attachment: e.target.files[0],
                }))
              }
              className="px-2 rounded-lg mt-2 mb-2 py-2 text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark border-[1px] border-gray-400 text-space focus:outline-none   focus:border-gray-300 text-black "
            /> }
          
        </form>
      </div>
      <div className="flex justify-end items-end  py-2 px-4">
        <button
          onClick={onClose}
          className="border-2 mr-5 border-OrangeBuilder rounded-md flex justify-center items-center px-8 py-1.5 text-OrangeBuilder"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-OrangeBuilder rounded-md flex justify-center items-center px-8 py-2 text-white hover:bg-[#ed825c]"
        >
          Save Action
        </button>
      </div>
    </div>
  );
}
