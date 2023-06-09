// import { APIConst } from "@/config/APIConstants";
// import axios from "@/utils/axios";
// import React, { useState } from "react";
// import { FiTag } from "react-icons/fi";

// const Tags = ({ user }: any) => {
//   const [tags, setTags] = useState<any>(["free dental clining"]);

//   const [formData, setFormData] = useState<any>();
//   const [errors, setErrors] = useState<any>({});

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData: any) => ({ ...prevData, [name]: value }));
//   };

//   const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { value } = e.target;
//     setFormData((prevData: any) => ({ ...prevData, tags: value }));
//   };

//   const handleTagKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" && formData.tags) {
//       e.currentTarget.value = "";
//     }
//   };

//   const handleTagRemove = (tag: string) => {
//     setFormData((prevData: any) => ({
//       ...prevData,
//       tags: prevData.tags
//         .split(",")
//         .filter((item: string) => item.trim() !== tag)
//         .join(","),
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//   };

//   const [isReady, setIsReady] = useState(true);
//   const [isError, setIsError] = useState<any>(null);
//   console.log();
//   const makeApiCall = async () => {
//     const requestBody = {
//       tags: ["minim", "velit magna"],
//     };
//     setIsReady(false);
//     // console.log(tagsAdd);
//     try {
//       const response = await axios.post(`${APIConst.tagsAdd}`, requestBody);
//       console.log(response.data);
//       setIsError(null);
//       setIsReady(true);
//     } catch (error: any) {
//       console.error(error);
//       if (error.response.status == 422) {
//         setIsError("Unprocessable Entity");
//       }
//       if (error.response.status == 401) {
//         setIsError("Unauthorized");
//       }
//       if (error.response.status == 400) {
//         setIsError("Bad Request");
//       }
//       setIsReady(true);
//     }
//   };

//   return (
//     <form className="px-2">
//       <div>
//         <div className="relative">
//           <input
//             type="text"
//             id="tags"
//             name="tags"
//             value={formData.tags}
//             onChange={handleTagChange}
//             onKeyDown={handleTagKeyPress}
//             placeholder="Enter the tag name"
//             className="placeholder:font-medium placeholder:text-[#817f7f] px-2.5 rounded-lg mt-1 mb-2 py-2 text-xs font-medium bg-white focus:bg-white w-full  border-[1px] border-[#c4c0c4] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
//           />
//           <div className="absolute top-3 right-2">
//             <FiTag />
//           </div>
//         </div>

//         {errors.tags && (
//           <span className="error text-xs text-red-500 w-full mb-2 pl-1">
//             {errors.tags}
//           </span>
//         )}
//         {tags(
//           <div className="flex flex-wrap mt-1">
//             {tags.split(",").map((tag: string, index: number) => (
//               <div
//                 key={index}
//                 className="bg-blue-100 px-4 py-1 rounded-full mr-2 mb-2 text-[12px] text-newBlue font-semibold"
//               >
//                 {tag.trim()}
//                 <button
//                   type="button"
//                   onClick={() => handleTagRemove(tag.trim())}
//                   className="ml-1 text-newBlue font-semibold focus:outline-none"
//                 >
//                   &times;
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//         {isReady ? (
//           <div
//             onClick={makeApiCall}
//             className="text-sm flex justify-start items-center bg-newBlue py-1.5 px-5 text-white rounded-md  "
//           >
//             Update
//           </div>
//         ) : (
//           <div className="text-sm flex justify-start items-center bg-newBlue py-1.5 px-5 text-white rounded-md  ">
//             Loading
//           </div>
//         )}
//       </div>
//     </form>
//   );
// };

// export default Tags;

import { APIConst } from "@/config/APIConstants";
import axios from "@/utils/axios";
import React, { useState } from "react";
import { FiTag } from "react-icons/fi";

export default function TagForm() {
  const [tags, setTags] = useState<any>([]);
  const [newTag, setNewTag] = useState<any>("");

  const handleTagChange = (e: any) => {
    setNewTag(e.target.value);
  };

  const handleTagSubmit = (e: any) => {
    e.preventDefault();
    if (newTag.trim() !== "") {
      const newTags: any = newTag.split(",").map((tag: any) => tag.trim());
      setTags((prevTags: any) => [...prevTags, ...newTags]);
      setNewTag("");
    }
  };

  const handleTagDelete = (tag: any) => {
    setTags((prevTags: any) => prevTags.filter((t: any) => t !== tag));
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleTagSubmit(e);
    }
  };

  const [isReady, setIsReady] = useState(true);
  const [isError, setIsError] = useState<any>(null);
  const makeApiCall = async () => {
    const requestBody = {
      tags: tags,
    };
    setIsReady(false);
    // console.log(tagsAdd);
    try {
      const response = await axios.post(`${APIConst.tagsAdd}`, requestBody);
      console.log(response.data);
      setIsError(null);
      setIsReady(true);
    } catch (error: any) {
      console.error(error);
      if (error.response.status == 422) {
        setIsError("Unprocessable Entity");
      }
      if (error.response.status == 401) {
        setIsError("Unauthorized");
      }
      if (error.response.status == 400) {
        setIsError("Bad Request");
      }
      setIsReady(true);
    }
  };

  return (
    <div>
      <div className="px-2">
        <div>
          <form className="relative" onSubmit={handleTagSubmit}>
            <input
              type="text"
              id="tags"
              name="tags"
              value={newTag}
              onChange={handleTagChange}
              onKeyPress={handleKeyPress}
              placeholder="Enter tags separated by commas"
              className="placeholder:font-medium placeholder:text-[#817f7f] px-2.5 rounded-lg mt-1 mb-2 py-2 text-xs font-medium bg-white focus:bg-white w-full  border-[1px] border-[#c4c0c4] text-space focus:outline-none   focus:border-[#dbd9d9] text-black "
            />
            <button type="submit" className="absolute top-3 right-2">
              <FiTag />
            </button>
          </form>

          <div className="flex flex-wrap mt-1">
            {tags.map((tag: any, index: any) => (
              <div
                key={index}
                className="bg-blue-100 px-4 py-1 rounded-full mr-2 mb-2 text-[12px] text-newBlue font-semibold"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => handleTagDelete(tag)}
                  className="ml-1 text-newBlue font-semibold focus:outline-none"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-end items-end">
            {isReady ? (
              <div
                onClick={makeApiCall}
                className="text-sm flex justify-start items-center bg-newBlue py-1.5 px-5 text-white rounded-md  "
              >
                Save
              </div>
            ) : (
              <div className="text-sm flex justify-start items-center bg-newBlue py-1.5 px-5 text-white rounded-md  ">
                Loading
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
