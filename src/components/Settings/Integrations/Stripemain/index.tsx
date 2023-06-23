import { XMarkIcon } from "@heroicons/react/24/solid";
import { MenuItem, Select } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function Stripemain() {
  const [selectedComponent, setSelectedComponent] = useState(true);
  const [selectedIntegration, setSelectedIntegration] = useState(true);
  const [showSelectedComponent, SetShowSelectedComponent] = useState(false);
  const [stripe, selectedStripe] = useState("");
  const [show, setshow] = useState(false);
  const handleChange = ({ target }: any) => {
    selectedStripe(target.value);
  };
  return (
    <>
      <div
        className={`transition-all fixed ${
          showSelectedComponent
            ? "bottom-0 opacity-100 z-50"
            : "-bottom-[20px] opacity-0 -z-10"
        }  left-0 bg-black backdrop-blur-[5px] bg-opacity-20   h-screen w-full overflow-x-hidden flex items-center justify-center scrollbar-hide `}
      >
        <div
          className={`relative z-50 bg-white shadow-md rounded-xl w-[600px] `}
        >
          <div className=" scrollbar-hide overflow-y-scroll h-96 md:h-auto md:max-h-[40rem] ">
            <div className="flex justify-between items-center px-5 py-2 border-b">
              <p className="text-gray-600  font-semibold fontStrawFord text-lg pb-2 pt-3 leading-5">
                Stripe
              </p>
              <button onClick={() => SetShowSelectedComponent(false)}>
                <XMarkIcon className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            {/* <div> {selectedComponent}</div> */}
            <div className="w-full p-4">
              <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                Which Business do you wnat to link to this location
              </label>
              <Select
                name="businessLocation"
                // value={formData.businessType}
                onChange={handleChange}
                className="px-2 rounded-lg mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
              >
                <MenuItem value="HealthSource Chiropractic of Arlington Matlock - Arlington, TX">
                  HealthSource Chiropractic of Arlington Matlock - Arlington, TX
                </MenuItem>
                <MenuItem value="HealthSource Chiropractic of Arlington Matlock - Arlington, TX">
                  HealthSource Chiropractic of Arlington Matlock - Arlington, TX
                </MenuItem>
                <MenuItem value="HealthSource Chiropractic of Arlington Matlock - Arlington, TX">
                  HealthSource Chiropractic of Arlington Matlock - Arlington, TX
                </MenuItem>
              </Select>

              {/* {errors.businessType && (
                <span className="mb-3 text-red-500 text-xs">
                  {errors.businessType}
                </span>
              )} */}
            </div>

            <div className="flex justify-end">
              <div
                className="bg-green-500 w-24 py-2 rounded-md  mb-3 mx-4 cursor-pointer"
                onClick={() => {
                  SetShowSelectedComponent(false);
                  setshow(true);
                }}
              >
                <p className="text-center text-white">Connect!</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full h-full opacity-30 absolute top-0 left-0 z-40 bg-popup bg-cover bg-bottom"
          onClick={() => SetShowSelectedComponent(false)}
        ></div>
      </div>

      <div>
        <div className="shadow shadow-gray-300 bg-white py-8 px-6 ">
          <div className="flex justify-center items-center">
            <div className="bg-gray-200 rounded-full">
              <Image
                src={require("../../../../../public/images/integrations/stripe.png")}
                alt="emerge"
                height={70}
                width={70}
              />
            </div>
          </div>

          <div className="flex justify-center items-center pt-3">
            <p className="text-[12px]">Stripe Account</p>
          </div>

          <div className="p-4">
            {show ? (
              <div>
                {/* <div className="flex justify-center">
                  <p className="text-sm text-center pt-2">{google}</p>
                </div> */}
                <div>
                  <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                    Which Business do you wnat to link to this location
                  </label>
                  <Select
                    name="businessLocation"
                    // value={formData.businessType}
                    onChange={handleChange}
                    className="px-2 rounded-lg mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
                  >
                    <MenuItem value="HealthSource Chiropractic of Arlington Matlock - Arlington, TX">
                      HealthSource Chiropractic of Arlington Matlock -
                      Arlington, TX
                    </MenuItem>
                    <MenuItem value="HealthSource Chiropractic of Arlington Matlock - Arlington, TX">
                      HealthSource Chiropractic of Arlington Matlock -
                      Arlington, TX
                    </MenuItem>
                    <MenuItem value="HealthSource Chiropractic of Arlington Matlock - Arlington, TX">
                      HealthSource Chiropractic of Arlington Matlock -
                      Arlington, TX
                    </MenuItem>
                  </Select>
                </div>
                <div>
                  <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                    Which Business do you wnat to link to this location
                  </label>
                  <Select
                    name="businessLocation"
                    // value={formData.businessType}
                    onChange={handleChange}
                    className="px-2 rounded-lg mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
                  >
                    <MenuItem value="HealthSource Chiropractic of Arlington Matlock - Arlington, TX">
                      HealthSource Chiropractic of Arlington Matlock -
                      Arlington, TX
                    </MenuItem>
                    <MenuItem value="HealthSource Chiropractic of Arlington Matlock - Arlington, TX">
                      HealthSource Chiropractic of Arlington Matlock -
                      Arlington, TX
                    </MenuItem>
                    <MenuItem value="HealthSource Chiropractic of Arlington Matlock - Arlington, TX">
                      HealthSource Chiropractic of Arlington Matlock -
                      Arlington, TX
                    </MenuItem>
                  </Select>
                </div>

                <div>
                  <label className="block text-[#47494b] text-sm pt-1 font-semibold">
                    Which Business do you wnat to link to this location
                  </label>
                  <Select
                    name="businessLocation"
                    // value={formData.businessType}
                    onChange={handleChange}
                    className="px-2 rounded-lg mt-2 mb-2  text-sm font-medium bg-transparent focus:bg-transparent w-full placeholder-dark   text-space focus:outline-none focus:border-gray-300 text-black"
                  >
                    <MenuItem value="HealthSource Chiropractic of Arlington Matlock - Arlington, TX">
                      HealthSource Chiropractic of Arlington Matlock -
                      Arlington, TX
                    </MenuItem>
                    <MenuItem value="HealthSource Chiropractic of Arlington Matlock - Arlington, TX">
                      HealthSource Chiropractic of Arlington Matlock -
                      Arlington, TX
                    </MenuItem>
                    <MenuItem value="HealthSource Chiropractic of Arlington Matlock - Arlington, TX">
                      HealthSource Chiropractic of Arlington Matlock -
                      Arlington, TX
                    </MenuItem>
                  </Select>
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center pt-7">
                <p className="text-[12px]">
                  Connect your location&#39;s Google account
                </p>
              </div>
            )}
          </div>

          <div
            onClick={() => {
              setSelectedComponent(false);
              SetShowSelectedComponent(true);
              setSelectedIntegration(false);
            }}
            className="bg-green-600 xl:mx-20 rounded-md mt-2 cursor-pointer"
          >
            <p className="text-white text-center py-2 text-sm">Connect</p>
          </div>
          <p className="text-[9px] pt-3">
            Manage Stripe Integration on payment Integration
            <span className="font-bold text-md"> &rarr; </span>
            Integrations
          </p>

          <div className="pt-3">
            <p className="text-[10px]">
              To use instagrams DM&#39;s you need to connect your instagram
              Account with a Facebook Page.
              <span className="text-blue-500"> Learn more</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
