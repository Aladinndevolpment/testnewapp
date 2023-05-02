/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { titleState } from "@/atoms/title";
import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";

export default function HeaderTitle() {
  const [title, setTitle] = useRecoilState<any>(titleState);
  return (
    <>
      {title?.length > 0 ? (
        <div className={`flex items-center pl-3  w-full justify-start`}>
          <p
            className={`  capitalize text-dark dark:text-white text-[20px] font-semibold tracking-wide  `}
          >
            {title[0]?.heading}
          </p>
          <div className=" pl-3 ">
            <img src={title[0]?.icon} className="h-5 w-5" />
          </div>
        </div>
      ) : null}
    </>
  );
}
