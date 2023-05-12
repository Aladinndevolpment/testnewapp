import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { MouseEventHandler, useState } from "react";
import ComboBox from "../controls/ComboBox";
import moment from "moment";
import DateTimePicker from "../controls/DateTimePicker";
import { PlusIcon } from "@heroicons/react/24/outline";
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
  const [isDoctorComboBoxVisible, setIsDoctorComboBoxVisible] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const doctors = [
    {
      name: "Doctor A",
      id: 1,
    },
    {
      name: "Doctor B",
      id: 1,
    },
    {
      name: "Doctor C",
      id: 1,
    },
    {
      name: "Doctor D",
      id: 1,
    },
    {
      name: "Doctor E",
      id: 1,
    },
    {
      name: "Doctor F",
      id: 1,
    },
    {
      name: "Doctor G",
      id: 1,
    },
    {
      name: "Doctor H",
      id: 1,
    },
  ];

  //dateTime modal & array
  const [isDateTimeComboBoxVisible, setIsDateTimeComboBoxVisible] =
    useState(false);
  const [appointmentTypeComboBoxVisible, setAppointmentTypeComboBoxVisible] =
    useState(false);
  const [selectAppointmentType, setSelectAppointmentType] = useState<any>(null);
  const [dateTime, setDateTime] = useState<any>(new Date());

  return (
    <div
      className={`w-full min-h-screen  scrollbar-hide  fixed right-0 top-0  z-50 transition-all bg-black overflow-hidden ${
        visibility
          ? "translate-x-0 opacity-100 bg-opacity-30"
          : "translate-x-[100%] opacity-0 bg-opacity-0"
      }`}
    >
      <div className="absolute h-full w-full z-40 " onClick={onClose}></div>
      <div className="bg-mainBg w-full md:w-[40%] absolute right-0 min-h-full h-full z-50 overflow-y-scroll scrollbar-hide">
        <div className="py-4 px-4 md:px-8">
          <h3 className="font-semibold border-b-gray-200 border-b pb-3">
            Add new appointment
          </h3>

          <div className="mt-5 flex flex-wrap justify-between items-center">
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
          </div>
        </div>
        <div className="bg-white py-4 px-4 md:px-8 mt-2 h-full pb-10">
          <ol className="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li className="mb-16 ml-6">
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

            <li className="mb-16 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-400 rounded-full -left-4 ring-4 ring-green-500 text-white font-bold">
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
                      setIsDoctorComboBoxVisible(!isDoctorComboBoxVisible)
                    }
                  >
                    <PlusIcon className="h-5 w-5 mr-1 text-primary" />
                    <span className="text-sm text-black font-semibold">
                      {selectedDoctor
                        ? selectedDoctor.name
                        : "Select Doctor/Room"}
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

            {/* Add Services */}
            <li className="mb-16 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-400 rounded-full -left-4 ring-4 ring-green-500 text-white font-bold">
                3
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

            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-400 rounded-full -left-4 ring-4 ring-green-500 text-white font-bold">
                4
              </span>
              <div className="bg-white shadow ring-1 ring-gray-200 rounded px-2 py-2 ml-2 relative">
                <div className="flex justify-between">
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
                <div className="flex flex-wrap justify-between mt-3">
                  <input
                    type="date"
                    className="w-full md:w-[48%] mb-2 ring-1 shadow rounded ring-gray-200 h-10 px-2"
                  />
                  <select className="w-full md:w-[48%] ring-1 shadow rounded ring-gray-200 h-10 px-2 mb-2">
                    <option>Select Time</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 AM">12:00 AM</option>
                    <option value="13:00 AM">13:00 AM</option>
                    <option value="14:00 AM">14:00 AM</option>
                  </select>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-black font-medium">
                      {moment(dateTime).format("dddd, DD MMMM hh:mm A")}
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
                onSave({ ...eventArg, patient: selectedPatient });
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
