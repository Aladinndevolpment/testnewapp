import React, { useState } from "react";
import { FiTag } from "react-icons/fi";

const Tags = ({ user }: any) => {
  const [formData, setFormData] = useState<any>({
    tags: "free dental clining",
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, tags: value }));
  };

  const handleTagKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && formData.tags) {
      e.currentTarget.value = "";
    }
  };

  const handleTagRemove = (tag: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      tags: prevData.tags
        .split(",")
        .filter((item: string) => item.trim() !== tag)
        .join(","),
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="px-2">
      <div>
        <div className="relative">
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleTagChange}
            onKeyPress={handleTagKeyPress}
            placeholder="Enter the tag name"
            className="placeholder:font-medium placeholder:text-[#817f7f] px-2.5 rounded-lg mt-1 mb-2 py-2 text-xs font-medium bg-white focus:bg-white w-full  border-[1px] border-[#c4c0c4] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
          />
          <div className="absolute top-3 right-2">
            <FiTag />
          </div>
        </div>

        {errors.tags && (
          <span className="error text-xs text-red-500 w-full mb-2 pl-1">
            {errors.tags}
          </span>
        )}
        {formData.tags && (
          <div className="flex flex-wrap mt-1">
            {formData.tags.split(",").map((tag: string, index: number) => (
              <div
                key={index}
                className="bg-blue-100 px-4 py-1 rounded-full mr-2 mb-2 text-[12px] text-newBlue font-semibold"
              >
                {tag.trim()}
                <button
                  type="button"
                  onClick={() => handleTagRemove(tag.trim())}
                  className="ml-1 text-newBlue font-semibold focus:outline-none"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </form>
  );
};

export default Tags;
