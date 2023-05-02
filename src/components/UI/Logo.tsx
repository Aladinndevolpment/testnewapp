import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className=" py-3">
      <Image
        src={require("../../../public/images/logo/logo.png")}
        alt=""
        className="w-72"
      />
    </div>
  );
}
