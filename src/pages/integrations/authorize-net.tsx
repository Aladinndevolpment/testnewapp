import Live from "@/components/Interations/authorize/Live";
import Sandbox from "@/components/Interations/authorize/Sandbox";
import Image from "next/image";
import React from "react";
import { GrFormNextLink } from "react-icons/Gr";
export default function index() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className=" pb-5  w-[50%] bg-white border-[1px] border-gray-200 rounded-xl ml-2 text-center shadow-md h-full mt-3 mb-5  ">
        <div className="pb-6 border-b border-gray-200">
          <div className="items-center space-y-4  ">
            <Image
              src={require("../../../public/images/integrations/net.png")}
              alt=""
              className="w-72 mt-7 m-auto"
            />
            <p className="font-bold">Authhrize.net</p>
          </div>
        </div>

        <div className="pl-4 pr-4">
          <div className=" flex justify-between text-2xl ">
            <p className="align-top text-[15px] font-bold pl-2">Live</p>
            <p className="text-blue-500 text-sm p-2 pr-4">
              How to find Authorize.net API keys?
            </p>
          </div>
          <Live />
        </div>
        <div className="w-full h-1 bg-slate-100 mt-6 "></div>

        <div className="pl-4 pr-4">
          <div className="pt-2 pb-4 flex justify-between">
            <p className="align-top text-[15px] font-bold pl-2">Sandbox</p>
          </div>
          <Sandbox />
        </div>
      </div>
    </div>
  );
}
