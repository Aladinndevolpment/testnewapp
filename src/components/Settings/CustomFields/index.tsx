import React, { useState } from "react";

import ModalDerived from "@/components/Modal";
import { AiOutlineClose } from "react-icons/ai";
import { TbFolderPlus } from "react-icons/tb";
import FieldTableData from "./AllFields/field-table";
import FolderTableData from "./Folder/folder-table-data";
import DeletedFolderTabData from "./DeletedFolder/deleted-folderTabData";

interface RowData {
  [key: string]: any;
}

const FieldType = [
  { title: "All Field" },
  { title: "Folder" },
  { title: "Deleted Fields" },
];

export default function CustomFieldsData() {
  const [select, setSelect] = useState<any>(0);
  const [fieldData, setFieldData] = useState<any>([]);
  const [data, setdata] = useState<RowData[]>([
    {
      id: "1",
      field_name: "Field 1",
      folder: "Contact",
      unique_Key: "unique",
      created_On: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "2",
      field_name: "Field 2",
      folder: "Contact",
      unique_Key: "unique",
      created_On: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "3",
      field_name: "Field 3",
      folder: "Contact",
      unique_Key: "unique",
      created_On: "2023-06-14T09:00:00.000Z",
    },
    {
      id: "4",
      field_name: "Field 4",
      folder: "Contact",
      unique_Key: "unique",
      created_On: "2023-06-14T09:00:00.000Z",
    },
  ]);

  const [openFieldModel, setFieldModel] = useState<any>(false);
  const [errors, setErrors] = useState<any>({});
  const [formValues, setFormValues] = useState<any>({
    tagName: "",
  });

  console.log(select);
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

    if (!formValues.fieldName) {
      validationErrors.fieldName = "Required";
    }
    if (!formValues.folderName) {
      validationErrors.folderName = "Required";
    }
    if (!formValues.uniqueKey) {
      validationErrors.uniqueKey = "Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFieldData((prevValues: any) => [
      ...fieldData,

      {
        fieldName: formValues?.fieldName,
        folder: formValues?.folderName,
        uniqueKey: formValues?.uniqueKey,
      },
    ]);

    setdata((prevValues: any) => [
      ...data,

      {
        id: fieldData?.length + 1,
        field_name: formValues?.fieldName,
        folder: formValues?.folderName,
        created_On: new Date(),
        unique_Key: formValues?.uniqueKey,
      },
    ]);

    setFormValues({
      fieldName: "",
      folderName: "",
      uniqueKey: "",
    });

    setErrors({});

    setFieldModel(false);
  };

  return (
    <>
      <ModalDerived
        visibility={openFieldModel}
        onClose={() => setFieldModel(false)}
      >
        <div className=" bg-white rounded-lg  h-[85vh] pb-[5%]  overflow-y-hidden w-full scrollbar-hide ">
          <form
            className=" h-[100vh]  pt-5 pb-3 w-screen md:w-[100vh]"
            onSubmit={handleSubmit}
          >
            <div className="h-[10vh] flex justify-between items-start border-b-[1px] pb-4 px-5">
              <div>
                <p className="text-gray-800 font-medium md:text-lg ">
                  Custom Fields
                </p>
                <p className="text-gray-500 font-normal md:text-sm pt-1">
                  Add New Fields
                </p>
              </div>
              <button onClick={() => setFieldModel(false)}>
                <AiOutlineClose className="text-gray-800 h-6 w-6" />
              </button>
            </div>
            <div className="overflow-hidden ">
              <div className="h-[60vh]">
                {/*  Add Fields */}
                <div className="mx-5 py-3">
                  <label
                    className="block text-[#47494b] text-sm pt-1 font-semibold"
                    htmlFor=""
                  >
                    Field Name
                  </label>

                  <input
                    type="text"
                    id=""
                    name="fieldName"
                    value={formValues.fieldName}
                    onChange={handleChange}
                    placeholder="Enter Field Name"
                    className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                  />
                  {errors.fieldName && (
                    <div className=" text-red-500 text-xs pt-1">
                      {errors.fieldName}
                    </div>
                  )}
                </div>

                {/* Folder Name */}
                <div className="mx-5 ">
                  <label
                    className="block text-[#47494b] text-sm pt-1 font-semibold"
                    htmlFor=""
                  >
                    Folder Name
                  </label>

                  <input
                    type="text"
                    id=""
                    name="folderName"
                    value={formValues.folderName}
                    onChange={handleChange}
                    placeholder="Enter Folder Name"
                    className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                  />
                  {errors.folderName && (
                    <div className=" text-red-500 text-xs pt-1">
                      {errors.folderName}
                    </div>
                  )}
                </div>

                {/* Unique Key */}
                <div className="mx-5 ">
                  <label
                    className="block text-[#47494b] text-sm pt-1 font-semibold"
                    htmlFor=""
                  >
                    Unique Key
                  </label>

                  <input
                    type="text"
                    id=""
                    name="uniqueKey"
                    value={formValues.uniqueKey}
                    onChange={handleChange}
                    placeholder="Enter Unique Key"
                    className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                  />
                  {errors.uniqueKey && (
                    <div className=" text-red-500 text-xs pt-1">
                      {errors.uniqueKey}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="h-[10vh] flex justify-end items-center border-t-[1px] pt-3 pb-2 px-5">
              <div className=" flex justify-end items-center gap-3">
                <button
                  onClick={() => setFieldModel(false)}
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

      <div className="w-full px-2 py-2">
        <div className="flex  items-center justify-between">
          <p className="text-[#47494b] text-base font-semibold  m-1 pl-2">
            {select == 0 && "All Field"}
            {select == 1 && "Folder"}
            {select == 2 && "Deleted Fields"}
          </p>
          <div className="flex  items-center justify-end">
            <button
              onClick={() => setFieldModel(true)}
              className="text-xs flex justify-center gap-1 items-center border text-[#34373a]  m-1 py-2.5 px-5 2xl:px-6 font-semibold rounded-md "
            >
              <TbFolderPlus className="scale-110" />
              Add Folder
            </button>
            <button
              onClick={() => setFieldModel(true)}
              className="text-xs flex justify-center items-center    bg-[#25992a] hover:bg-secondary duration-300 m-1 py-2.5 px-5 2xl:px-6 text-white rounded-md "
            >
              + Add Field
            </button>
          </div>
        </div>

        <div className=" text-[#34373a] font-semibold bg-gray-100 text-xs border-t border-x rounded-t-md w-[16.5rem] flex "></div>
        <div className="text-[#34373a] font-semibold bg-gray-100 text-xs border-t border-x rounded-t-md w-[16.5rem] flex ">
          {FieldType.map((item: any, index: number) => (
            <button
              key={index}
              onClick={() => setSelect(index)}
              className={`px-4 py-2.5 ${
                select == index ? "bg-white rounded-t-md" : ""
              } `}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="  pb-10">
          {select == 0 && <FieldTableData data={data} />}
          {select == 1 && <FolderTableData data={data} />}
          {select == 2 && <DeletedFolderTabData data={data} />}
        </div>
      </div>
    </>
  );
}
