import React, { useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";

const Confirmation = () => {
  const [formValues, setFormValues] = useState<any>({
    customForm: "",
    stickyContact: "",
    contact: "",
    emails: "",
    autoConfirm: "",
    allowGoogleCalendar: "",
    allowReschdule: "",
    allowCancellation: "",
    additionalNotes: "",
    faceBookID: "",
    customCode: "",
    formSubmit: "",
    customMessage: "",
    thankMessage: "",

    image: null,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className=" w-full">
      <div className="  w-[95%]">
        <div className="px-4 pt-5">
          <h1 className="text-[#47494b] text-md font-semibold">Form Setting</h1>
          <p className="text-gray-400 text-sm">
            Configure your form and other related options
          </p>
        </div>

        <div className="px-4 pt-5">
          <form action="">
            <div>
              <label
                htmlFor=""
                className="text-[#47494b] text-sm flex items-center gap-2 font-semibold"
              >
                Custom Form <BsQuestionCircleFill className="text-sm" />
              </label>
              <select
                name="customForm"
                onChange={handleChange}
                value={formValues.customForm}
                className="border-2 rounded-md w-10/12 p-1 placeholder:text-sm font-semibold"
              >
                <option value="select">Select</option>
                <option value="cF1">CustomForm1</option>
                <option value="cF2">CustomForm2</option>
              </select>
            </div>

            <div className="flex items-center px-2 py-3 gap-2">
              <input
                type="checkbox"
                name="stickyContact"
                onChange={handleChange}
                value={formValues.stickyContact}
                className="checkbox scale-75 "
              />
              <label
                htmlFor=""
                className="text-[#47494b] text-sm flex items-center gap-2 font-semibold"
              >
                Use Sticky Contact <BsQuestionCircleFill className="text-sm" />
              </label>
            </div>

            <div className="mt-3">
              <h1 className="text-[#47494b] text-md font-semibold">
                Notification & Additional Options
              </h1>
              <p className="text-gray-400 text-sm">
                Configure notiffication and other miscellaneous options
              </p>
            </div>

            <div className="bg-gray-100 my-3 rounded-md p-3">
              <div>
                <label
                  htmlFor=""
                  className="text-gray-500 text-sm flex font-semibold"
                >
                  Notification Type{" "}
                </label>
                <select
                  name="notificationType"
                  onChange={handleChange}
                  value={formValues.notificationType}
                  className="border-2 rounded-md w-1/3 p-1 placeholder:text-sm font-semibold"
                >
                  <option value="">Select</option>
                  <option value="acknoEmail">Acknowledge email</option>
                  <option value="aknoSms">Acknowledge SMS</option>
                </select>
              </div>
              <p className="text-gray-400 text-sm">
                {" "}
                Who should recieve this notification?
              </p>

              <div className=" py-3 gap-2">
                <div className="flex items-center py-2 gap-2">
                  <input
                    type="checkbox"
                    name="contact"
                    onChange={handleChange}
                    value={formValues.contact}
                    className="checkbox scale-75 "
                  />
                  <label
                    htmlFor=""
                    className="text-[#47494b] text-sm flex items-center gap-2 font-semibold"
                  >
                    Contact{" "}
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="emails"
                    onChange={handleChange}
                    value={formValues.emails}
                    className="checkbox scale-75"
                  />
                  <label
                    htmlFor=""
                    className="text-[#47494b] text-sm flex items-center gap-2 font-semibold"
                  >
                    Emails <BsQuestionCircleFill className="text-sm" />
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 my-3 rounded-md">
              <label htmlFor="" className="flex gap-3 p-2">
                <input
                  type="checkbox"
                  onChange={handleChange}
                  className="checkbox scale-75"
                  name="autoConfirm"
                  value={formValues.autoConfirm}
                />
                <span className="text-gray-600 flex items-center gap-2 font-semibold text-sm">
                  Let the calendar auto confirm my appointment{" "}
                  <BsQuestionCircleFill className="text-sm" />
                </span>
              </label>
            </div>

            <div className=" my-3 rounded-md">
              <label htmlFor="" className="flex gap-3 p-2">
                <input
                  type="checkbox"
                  className="checkbox scale-75"
                  name="allowGoogleCalendar"
                  onChange={handleChange}
                  value={formValues.allowGoogleCalendar}
                />
                <span className="text-gray-600 font-semibold text-sm">
                  Allow google calendar to send invitation or update emails to
                  attendees
                </span>
              </label>
            </div>

            <div className="bg-gray-100 my-3 rounded-md">
              <label htmlFor="" className="flex gap-3 p-2">
                <input
                  type="checkbox"
                  className="checkbox scale-75"
                  onChange={handleChange}
                  name="allowReschdule"
                  value={formValues.allowReschdule}
                />
                <span className="text-gray-600  font-semibold text-sm">
                  Allow Reschedule{" "}
                </span>
              </label>
            </div>

            <div className="bg-gray-100 my-3 rounded-md">
              <label htmlFor="" className="flex gap-3 p-2">
                <input
                  type="checkbox"
                  className="checkbox scale-75"
                  onChange={handleChange}
                  name="allowCancellation"
                  value={formValues.allowCancellation}
                />
                <span className="text-gray-600 font-semibold text-sm">
                  Allow Cancellation
                </span>
              </label>
            </div>

            <div className="py-2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-1 font-semibold"
              >
                Additional Notes
              </label>
              <textarea
                onChange={handleChange}
                name="additionalNotes"
                value={formValues.additionalNotes}
                className="border-2 rounded-md w-10/12 p-2  font-semibold"
              />
            </div>

            <div className="py-2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-1 font-semibold"
              >
                Facebook pixel ID
              </label>
              <input
                type="url"
                name="faceBookID"
                value={formValues.faceBookID}
                onChange={handleChange}
                placeholder="Facebook Pixel ID"
                className="border-2 rounded-md w-10/12 p-2 placeholder:text-sm font-semibold"
              />
            </div>

            <div className="py-2">
              <label
                htmlFor=""
                className="block text-[#47494b] text-sm py-1 font-semibold"
              >
                Custom Code
              </label>
              <textarea
                onChange={handleChange}
                name="customCode"
                value={formValues.customCode}
                className="border-2 rounded-md w-10/12 p-2  font-semibold"
                placeholder="Enter Custom Code"
              />
            </div>

            <div className="mt-3">
              <h1 className="text-[#47494b] text-md font-semibold">
                Form Submissions
              </h1>
              <p className="text-gray-400 text-sm">
                Control how you want the confirmation page to be displayed or
                redirected
              </p>
            </div>

            <div className="flex gap-3 text-sm py-2">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="formSubmit"
                    value={formValues.formSubmit}
                    onChange={handleChange}
                    className="radio checked:bg-blue-500 scale-75"
                    checked
                  />
                  <span className="label-text text-xs font-semibold">
                    Form Submit Redirected URL
                  </span>
                </label>
              </div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="formSubmit"
                    value={formValues.formSubmit}
                    onChange={handleChange}
                    className="radio checked:bg-blue-500 scale-75"
                    checked
                  />
                  <span className="label-text text-xs font-semibold">
                    {" "}
                    Custom Thank You Message
                  </span>
                </label>
              </div>
            </div>

            <textarea
              onChange={handleChange}
              name="thankMessage"
              value={formValues.thankMessage}
              className="border-2 rounded-md w-10/12 p-2  font-semibold"
              placeholder="Message"
            />
          </form>
        </div>
      </div>
      <div className="flex justify-end gap-3 p-4 mt-2 border-t ">
        <button className="border text-[#47494b] rounded-md px-3 py-2">
          Close
        </button>
        <button className="border text-[#47494b] rounded-md px-3 py-2">
          Back
        </button>
        <button className="border bg-[#25992a] text-white rounded-md px-3 py-2">
          Save & continue
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
