import React from "react";
import WebHook from "./webHook";
import DispositionManage from "./dispositionManage";

const Company = () => {
  return (
    <div className="mx-20 my-5 h-[100vh] overflow-y-scroll scrollbar-hide pb-[5%] ">
      <WebHook />
      <DispositionManage />
    </div>
  );
};

export default Company;
