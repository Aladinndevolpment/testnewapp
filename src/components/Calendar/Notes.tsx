import { nameTrigger } from "@/atoms/nameTrigger";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRecoilState } from "recoil";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default function Notes() {
  const [actionData, setActionData] = useRecoilState(nameTrigger);
  const handleQuillChange = (value: any) => {
    setFormValues((prevValues: any) => ({
      ...prevValues,
      message: value,
    }));
  };
  const [formValues, setFormValues] = useState<any>({
    actionName: actionData,
    formName: "",
    fromEmail: "",
    subject: "",
    template: "",
    message: "",
    attachment: null,
  });
  return (
    <>
      <div className="mx-24  mt-2   h-[40vh]">
        <QuillNoSSRWrapper
          modules={modules}
          formats={formats}
          theme="snow"
          value={formValues.message}
          onChange={handleQuillChange}
          //   onBlur={handleBlur("content")}
          placeholder="message"
          style={{
            height: 100,
            marginBottom: 100,
            // overflowY: "scroll",
            // resize: "vertical",
          }}
          className="scrollbar-hide pt-4"
        />
      </div>
    </>
  );
}
