import { GlobalContext } from "@/layouts/GlobalLayout";
import React, { forwardRef, useContext, useState } from "react";

export default function Contact() {
  const ctx = useContext(GlobalContext);
  ctx.setTitle("Contact");
  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <p
          className={` text-[#4B5563] text-5xl font-semibold tracking-wide  ml-3`}
        >
          Contact Page
        </p>
      </div>
    </>
  );
}
