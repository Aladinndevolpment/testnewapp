import React, { useState } from "react";
import ConversationModalDerived from "../../UI/ConversationModalDerived";
import { AiOutlinePlus } from "react-icons/ai";
import moment from "moment";

export default function Notes() {
  const [notes, setNotes] = useState<any>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<any>({
    notes: "",
    createdAt: "",
  });
  const [errors, setErrors] = useState<any>({});

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value, createdAt: new Date() });
  };

  const validateForm = () => {
    const errors: any = {};

    if (!formData.notes.trim()) {
      errors.notes = "Notes field is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (validateForm()) {
      // Perform any desired actions with the form data
      console.log("Notes:", formData.notes);
      setNotes([
        ...notes,
        {
          note: formData.notes,
          createdAt: formData.createdAt,
        },
      ]);

      setIsModalOpen(false);
    }
  };
  console.log(notes);

  return (
    <div>
      <div>
        {isModalOpen && (
          <ConversationModalDerived
            visibility={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            <div className="bg-white px-5 rounded-lg py-5 pb-[5%] w-screen md:w-[70vh]">
              <p className="text-gray-800 font-medium md:text-lg mb-3">
                Add Notes
              </p>

              <form onSubmit={handleSubmit} className="flex flex-wrap">
                <div className="w-full">
                  <label className="w-full text-sm text-gray-600 font-medium ">
                    Name:
                  </label>

                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 rounded-md mt-2 mb-2  py-3 font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300  "
                  />
                  {errors.notes && (
                    <span className="mb-8 text-xs text-red-500 ">
                      {errors.notes}
                    </span>
                  )}
                </div>

                <div className="w-full flex justify-end items-center gap-2 border-t mt-4 pt-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-sm text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-1.5 px-5 rounded-md  "
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="text-sm flex justify-start items-center bg-newBlue py-1.5 px-5 text-white rounded-md  "
                  >
                    Add
                  </button>
                </div>
                <br />
              </form>
            </div>
          </ConversationModalDerived>
        )}
      </div>

      <div className="flex justify-end items-center w-full pr-3 pt-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex justify-end items-center bg-newBlue py-2 px-3 rounded-md  "
        >
          <AiOutlinePlus className="h-4 w-4 text-white ml-2" />
          <span className="text-[12px]   text-white font-semibold">
            Add Notes
          </span>
        </button>
      </div>

      <div className="px-2 py-6 flex flex-warp ">
        {notes.length == 0 ? (
          <p className="text-xs font-medium text-gray-700">
            There are no notes for this contact.
          </p>
        ) : (
          <div className="w-full flex flex-wrap mb-4 justify-between items-center ">
            {notes.map((item: any, index: number) => (
              <div
                key={index}
                className="w-full bg-blue-200 rounded-md px-3 py-2"
              >
                <p className="text-gray-800 text-lg pt-1 font-semibold">
                  {" "}
                  {item?.note}{" "}
                </p>
                <p className="text-gray-800 text-sm pt-1 font-medium">
                  {" "}
                  {moment(item?.createdAt).format("DD-MM-YYYY,")}{" "}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
