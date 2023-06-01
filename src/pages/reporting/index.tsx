import { GlobalContext } from "@/layouts/GlobalLayout";
import React, { useContext } from "react";

export default function DashboardBuilder() {
  const ctx = useContext(GlobalContext);
  ctx.setTitle("Reporting");

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <p
        className={` text-[#4B5563] text-5xl font-semibold tracking-wide  ml-3`}
      >
        Reporting
      </p>
    </div>
  );
}
