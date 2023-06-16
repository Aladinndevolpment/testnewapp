import React, { useState } from "react";
import TagsTablesData from "./Table";
import ModalDerived from "@/components/Modal";
import { AiOutlineClose } from "react-icons/ai";

interface RowData {
  [key: string]: any;
}

export default function TagsData() {
  const [tagData, setTagData] = useState<any>([]);
  const [data, setdata] = useState<RowData[]>([
    {
      id: "1",
      tag_Name: "Tag 1",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "2",
      tag_Name: "Tag 2",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "3",
      tag_Name: "Tag 3",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "4",
      tag_Name: "Tag 4",
      createdOn: "2023-06-14T09:00:00.000Z",
      upDatedOn: "2023-06-14T09:00:00.000Z",
    },
  ]);

  const [openAddTagModel, setAddTagModel] = useState<any>(false);
  const [errors, setErrors] = useState<any>({});
  const [formValues, setFormValues] = useState<any>({
    tagName: "",
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

    if (!formValues.tagName) {
      validationErrors.tagName = "Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setTagData((prevValues: any) => [
      ...tagData,

      {
        tagName: formValues?.tagName,
      },
    ]);

    setdata((prevValues: any) => [
      ...data,

      {
        id: tagData?.length + 1,
        tag_Name: formValues?.tagName,
        createdOn: new Date(),
        upDatedOn: new Date(),
      },
    ]);

    setFormValues({
      tagName: "",
    });

    setErrors({});

    setAddTagModel(false);
  };

  return (
    <div className="w-full">
      <div className="flex gap-4 items-center justify-between">
        <h1 className=" font-bold text-2xl text-[#47494b]">Tags</h1>
        <ModalDerived
          visibility={openAddTagModel}
          onClose={() => setAddTagModel(false)}
        >
          <div className=" bg-white rounded-lg  h-[85vh] pb-[5%]  overflow-y-hidden w-full scrollbar-hide ">
            <form
              className=" h-[100vh]  pt-5 pb-3 w-screen md:w-[100vh]"
              onSubmit={handleSubmit}
            >
              <div className="h-[10vh] flex justify-between items-start border-b-[1px] pb-4 px-5">
                <div>
                  <p className="text-gray-800 font-medium md:text-lg ">Tags</p>
                  <p className="text-gray-500 font-normal md:text-sm pt-1">
                    Add New Tags
                  </p>
                </div>
                <button onClick={() => setAddTagModel(false)}>
                  <AiOutlineClose className="text-gray-800 h-6 w-6" />
                </button>
              </div>
              <div className="overflow-hidden ">
                <div className="h-[60vh]">
                  {/*  Add Tags */}
                  <div className="mx-5 py-3">
                    <div className="flex items-center  justify-between ">
                      <label
                        className="block text-[#47494b] text-sm pt-1 font-semibold"
                        htmlFor=""
                      >
                        Add Tag Name
                      </label>
                    </div>
                    <input
                      type="text"
                      id=""
                      name="tagName"
                      value={formValues.tagName}
                      onChange={handleChange}
                      placeholder="Enter Tag Name"
                      className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                    />
                    {errors.tagName && (
                      <div className=" text-red-500 text-xs pt-1">
                        {errors.tagName}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="h-[10vh] flex justify-end items-center border-t-[1px] pt-3 pb-2 px-5">
                <div className=" flex justify-end items-center gap-3">
                  <button
                    onClick={() => setAddTagModel(false)}
                    className="text-base text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-5 rounded-md  "
                  >
                    Cancel
                  </button>
                  <button
                    onSubmit={handleSubmit}
                    type="submit"
                    className="text-base flex justify-start items-center bg-secondary py-2 px-5 text-white rounded-md  "
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </ModalDerived>
        <button
          onClick={() => setAddTagModel(true)}
          className="text-xs flex justify-center items-center   bg-newBlue hover:bg-secondary duration-300 m-1 py-2.5 px-5 2xl:px-6 text-white rounded-md "
        >
          Add Tags
        </button>
      </div>
      <div className="  pt-5 pb-10">
        <TagsTablesData data={data} />
      </div>
    </div>
  );
}
