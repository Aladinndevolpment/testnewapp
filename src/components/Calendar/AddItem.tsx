import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ComboBox from "../controls/ComboBox";
import moment from "moment";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { forwardRef, useState, MouseEventHandler } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomDropDown, { CustomDropDownData } from "../controls/CustomDropDown";
import { TfiAngleDown } from "react-icons/tfi";

interface IAddItemProps {
  visibility: boolean;
  onClose: MouseEventHandler;
  onSave: MouseEventHandler;
  eventArg: any;
}

export default function AddItem({
  visibility,
  onClose,
  eventArg,
  onSave,
}: IAddItemProps) {
  //patient modal & array
  const [isPatientComboBoxVisible, setIsPatientComboBoxVisible] =
    useState(false);
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const patients = [
    {
      name: "Patient A",
      id: 1,
    },
    {
      name: "Patient B",
      id: 1,
    },
    {
      name: "Patient C",
      id: 1,
    },
    {
      name: "Patient D",
      id: 1,
    },
    {
      name: "Patient E",
      id: 1,
    },
    {
      name: "Patient F",
      id: 1,
    },
    {
      name: "Patient G",
      id: 1,
    },
    {
      name: "Patient H",
      id: 1,
    },
  ];

  //doctor modal & array
  const [isProviderComboBoxVisible, setIsProviderComboBoxVisible] =
    useState(false);
  const [selectedProvider, setSelectedProvider] = useState<any>(null);
  const providers = [
    {
      name: "Provider A",
      id: 1,
    },
    {
      name: "Provider B",
      id: 1,
    },
    {
      name: "Provider C",
      id: 1,
    },
    {
      name: "Provider D",
      id: 1,
    },
    {
      name: "Provider E",
      id: 1,
    },
    {
      name: "Provider F",
      id: 1,
    },
    {
      name: "Provider G",
      id: 1,
    },
    {
      name: "Provider H",
      id: 1,
    },
  ];

  //doctor modal & array
  const [isDoctorComboBoxVisible, setIsDoctorComboBoxVisible] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const doctors = [
    {
      name: "Room A",
      id: 1,
    },
    {
      name: "Room B",
      id: 1,
    },
    {
      name: "Room C",
      id: 1,
    },
    {
      name: "Room D",
      id: 1,
    },
    {
      name: "Room E",
      id: 1,
    },
    {
      name: "Room F",
      id: 1,
    },
    {
      name: "Room G",
      id: 1,
    },
    {
      name: "Room H",
      id: 1,
    },
  ];

  //dateTime modal & array
  const [isDateTimeComboBoxVisible, setIsDateTimeComboBoxVisible] =
    useState(false);
  const [appointmentTypeComboBoxVisible, setAppointmentTypeComboBoxVisible] =
    useState(false);

  //time data
  const [selectedStatusIndex, setSelectedStatusIndex] = useState(0);

  const timings = [
    {
      label: "08:00 am - 08:30 am",
      value: "08:00 am - 08:30 am",
      color: "#fff",
    },
    {
      label: "08:30 am - 09:00 am",
      value: "08:30 am - 09:00 am",
      color: "#fff",
    },
    {
      label: "09:00 am - 09:30 am",
      value: "09:00 am - 09:30 am",
      color: "#fff",
    },
    {
      label: "09:30 am - 10:00 am",
      value: "09:30 am - 10:00 am",
      color: "#fff",
    },
    {
      label: "10:00 am - 10:30 am",
      value: "10:00 am - 10:30 am",
      color: "#fff",
    },
    {
      label: "10:30 am - 11:00 am",
      value: "10:30 am - 11:00 am",
      color: "#fff",
    },
    {
      label: "11:00 am - 11:30 am",
      value: "11:00 am - 11:30 am",
      color: "#fff",
    },
    {
      label: "11:30 am - 12:00 am",
      value: "11:30 am - 12:00 am",
      color: "#fff",
    },
    {
      label: "12:00 pm - 12:30 pm",
      value: "12:00 pm - 12:30 pm",
      color: "#fff",
    },
    {
      label: "12:30 pm - 01:00 pm",
      value: "12:30 pm - 01:00 pm",
      color: "#fff",
    },
    {
      label: "01:00 pm - 01:30 pm",
      value: "01:00 pm - 01:30 pm",
      color: "#fff",
    },
    {
      label: "01:30 pm - 01:00 pm",
      value: "01:30 pm - 01:00 pm",
      color: "#fff",
    },
    {
      label: "01:00 pm - 01:30 pm",
      value: "01:00 pm - 01:30 pm",
      color: "#fff",
    },
  ];
  const [showSelectBox, setShowSelectBox] = useState(false);
  const [selectAppointmentType, setSelectAppointmentType] = useState<any>(null);
  const [dateTime, setDateTime] = useState<any>({
    date: new Date(),
    time: timings[0].value,
  });

  return (
    <div
      className={`w-full min-h-screen  scrollbar-hide  fixed right-0 top-0  z-50 transition-all bg-black overflow-hidden ${
        visibility
          ? "translate-x-0 opacity-100 bg-opacity-30"
          : "translate-x-[100%] opacity-0 bg-opacity-0"
      }`}
    >
      <div className="bg-mainBg w-full md:w-[40%] absolute right-0  h-full z-50 ">
        <div className="pt-4  px-4 md:px-6 flex justify-between items-center">
          <h3 className="font-semibold pb-3">Add new appointment</h3>
          <button onClick={onClose} className=" h-8 w-8 pb-3 ">
            <XMarkIcon className="text-dark h-5 w-5" />
          </button>
          {/* <div className="mt-5 flex flex-wrap justify-between items-center">
            <div className="flex items-center flex-wrap">
              <div>
                <Image
                  src={require("../../../public/dummy/dummy-doc.png")}
                  alt=""
                  className="rounded-full"
                  width={60}
                  height={60}
                />
              </div>
              <div className="ml-2">
                <h4 className="font-bold">Drg. Adam H</h4>
                <p className="text-sm text-gray-500">dradamgagent@gmail.com</p>
              </div>
            </div>
            <div>
              <button className="bg-white px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all text-xs font-semibold">
                Add Note
              </button>
            </div>
          </div> */}
        </div>
        <div className="bg-white pt-5   px-4 md:px-8 mt-2 h-full pb-20 overflow-y-scroll scrollbar-hide">
          <ol className="relative text-gray-500 pt-6">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-400 rounded-full -left-4 ring-4 ring-green-500 text-white font-bold">
                1
              </span>
              <div className="bg-white shadow ring-1 ring-gray-200 rounded px-2 py-2 ml-2">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-sm text-black">
                    Appointment Type
                  </h3>
                  <button className="text-sm font-semibold text-newBlue">
                    EDIT
                  </button>
                </div>
                <div className="mt-3"></div>

                <div className="bg-white   relative">
                  <div
                    className="flex items-center mt-3 justify-center ring-2 ring-gray-100 p-2 cursor-pointer"
                    onClick={() =>
                      setAppointmentTypeComboBoxVisible(
                        !isDoctorComboBoxVisible
                      )
                    }
                  >
                    <PlusIcon className="h-5 w-5 mr-1 text-primary" />
                    <span className="text-sm text-black font-semibold">
                      {selectAppointmentType
                        ? selectAppointmentType.name
                        : "Select Appointment Type"}
                    </span>
                  </div>

                  <ComboBox
                    isVisible={appointmentTypeComboBoxVisible}
                    onClose={() => setAppointmentTypeComboBoxVisible(false)}
                    data={[
                      {
                        name: "Appointment Type A",
                        id: 1,
                      },
                    ]}
                    onItemSelect={(data: any) => setSelectAppointmentType(data)}
                  />
                </div>
              </div>
            </li>
            <li className="mb-10 ml-6">
              <span className="mt-2 absolute flex items-center justify-center w-8 h-8 bg-green-400 rounded-full -left-4 ring-4 ring-green-500 text-white font-bold">
                2
              </span>
              <div className="bg-white shadow ring-1 ring-gray-200 rounded px-2 py-2 ml-2">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-sm text-black">Provider</h3>
                  <button className="text-sm font-semibold text-newBlue">
                    EDIT
                  </button>
                </div>
                <div className="mt-3"></div>

                <div className="bg-white   relative">
                  <div
                    className="flex items-center mt-3 justify-center ring-2 ring-gray-100 p-2 cursor-pointer"
                    onClick={() =>
                      setIsProviderComboBoxVisible(!isProviderComboBoxVisible)
                    }
                  >
                    <PlusIcon className="h-5 w-5 mr-1 text-primary" />
                    <span className="text-sm text-black font-semibold">
                      {selectedProvider
                        ? selectedProvider.name
                        : "Select Provider"}
                    </span>
                  </div>

                  <ComboBox
                    isVisible={isProviderComboBoxVisible}
                    onClose={() => setIsProviderComboBoxVisible(false)}
                    data={providers}
                    onItemSelect={(data: any) => setSelectedProvider(data)}
                  />
                </div>
              </div>
            </li>
            <li className="mb-10 ml-6">
              <span className="mt-2 absolute flex items-center justify-center w-8 h-8 bg-green-400 rounded-full -left-4 ring-4 ring-green-500 text-white font-bold">
                3
              </span>
              <div className="bg-white shadow ring-1 ring-gray-200 rounded px-2 py-2 ml-2">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-sm text-black">Rooms</h3>
                  <button className="text-sm font-semibold text-newBlue">
                    EDIT
                  </button>
                </div>
                <div className="mt-3"></div>

                <div className="bg-white   relative">
                  <div
                    className="flex items-center mt-3 justify-center ring-2 ring-gray-100 p-2 cursor-pointer"
                    onClick={() =>
                      setIsDoctorComboBoxVisible(!isDoctorComboBoxVisible)
                    }
                  >
                    <PlusIcon className="h-5 w-5 mr-1 text-primary" />
                    <span className="text-sm text-black font-semibold">
                      {selectedDoctor ? selectedDoctor.name : "Select Room"}
                    </span>
                  </div>

                  <ComboBox
                    isVisible={isDoctorComboBoxVisible}
                    onClose={() => setIsDoctorComboBoxVisible(false)}
                    data={doctors}
                    onItemSelect={(data: any) => setSelectedDoctor(data)}
                  />
                </div>
              </div>
            </li>
            <li className="mt-2 mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-400 rounded-full -left-4 ring-4 ring-green-500 text-white font-bold">
                4
              </span>
              <div className="bg-white shadow ring-1 ring-gray-200 rounded px-2 py-2 ml-2">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-sm text-black">
                    Add Patient
                  </h3>
                </div>

                <div
                  className="flex items-center mt-5 justify-center ring-2 ring-gray-100 p-2 cursor-pointer"
                  onClick={() =>
                    setIsPatientComboBoxVisible(!isPatientComboBoxVisible)
                  }
                >
                  <PlusIcon className="h-5 w-5 mr-1 text-primary" />
                  <span className="text-sm text-black font-semibold">
                    {selectedPatient ? selectedPatient.name : "Select Patient"}
                  </span>
                </div>

                <ComboBox
                  isVisible={isPatientComboBoxVisible}
                  onClose={() => setIsPatientComboBoxVisible(false)}
                  data={patients}
                  onItemSelect={(data: any) => setSelectedPatient(data)}
                />
              </div>
            </li>

            <li className="mt-2 mb-5 ml-6">
              <span className="mt-2 absolute flex items-center justify-center w-8 h-8 bg-green-400 rounded-full -left-4 ring-4 ring-green-500 text-white font-bold">
                5
              </span>
              <div className="bg-white shadow ring-1 ring-gray-200 rounded px-2 py-2 ml-2 relative">
                <div className="flex justify-between px-1">
                  <h3 className="font-semibold text-sm text-black">
                    Time and Date
                  </h3>
                  <button
                    onClick={() =>
                      setIsDateTimeComboBoxVisible(!isDateTimeComboBoxVisible)
                    }
                    className="text-sm font-semibold text-newBlue"
                  >
                    EDIT
                  </button>
                </div>
                <div className="flex flex-wrap justify-between items-start mt-3  ">
                  <div className="pt-1 w-[50%] px-4">
                    <DatePicker
                      selected={dateTime.date}
                      onChange={(e: any) => {
                        setDateTime((prevValues: any) => ({
                          ...prevValues,
                          date: e,
                        }));
                      }}
                      placeholderText={dateTime.date}
                      minDate={new Date()}
                    />
                  </div>

                  <div className="relative flex justify-end items-end  w-full lg:w-[50%]  px-4">
                    <p
                      onClick={() => setShowSelectBox(!showSelectBox)}
                      className="text-xs select focus:outline-0 items-center bg-white border-[2px] border-[#C3D4F3] w-full max-w-xs "
                    >
                      <span>{dateTime.time}</span>
                    </p>
                    {showSelectBox && (
                      <div className="  absolute w-[85%] left-5 h-[10vh] top-12 overflow-y-scroll scrollbar-hide">
                        {timings.map((item: any, index: any) => (
                          <button
                            key={index}
                            onClick={(e) => {
                              console.log(item.value);
                              setShowSelectBox(false);
                              setDateTime((prevValues: any) => ({
                                ...prevValues,
                                time: item.value,
                              }));
                            }}
                            className="w-full bg-white rounded-md hover:bg-[#F3F3F5] text-[#4E5153] hover:text-[#3272F0] py-1 px-3"
                          >
                            {item.value}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-3 pb-3 px-2">
                  <div>
                    <p className="text-sm text-black font-medium">
                      {moment(dateTime.date).format("dddd, DD MMMM")},&nbsp;
                      {dateTime?.time}
                    </p>
                    <p className="text-xs">
                      Video call with to doctor to consult any issue.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ol>

          <div className="mt-10 flex justify-end">
            <button
              onClick={onClose}
              className="bg-white font-medium w-32 text-gray-400 px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all text-md mr-3"
            >
              Cancel
            </button>
            <button
              className="bg-primary w-32 text-white px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all text-md font-medium"
              onClick={() => {
                if (selectedPatient == null) {
                  alert("please select a patient");
                  return false;
                }
                if (selectedDoctor == null) {
                  alert("please select a doctor");
                  return false;
                }
                console.log(eventArg);
                onSave({
                  ...eventArg,
                  patient: selectedPatient,
                  // start: `${moment(dateTime.date).format("yyyy-mm-d")}T${
                  //   dateTime?.time
                  // }`,
                  // end: `${moment(dateTime.date).format("yyyy-mm-d")}T${
                  //   dateTime?.time
                  // }`,
                  start: moment(dateTime.date).format("yyyy-mm-DDThh:mm:ss"),
                  end: moment(dateTime.date).format("yyyy-mm-DDThh:mm:ss"),
                });
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
