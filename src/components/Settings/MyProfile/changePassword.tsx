import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const ChangePassword = () => {
  const [errors, setErrors] = useState<any>({});
  const [formValues, setFormValues] = useState<any>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    //validate
    const validationErrors: any = {};

    if (!formValues.currentPassword) {
      validationErrors.currentPassword = "Required";
    }

    if (!formValues.newPassword) {
      validationErrors.newPassword = "Required";
    }
    if (!formValues.confirmPassword) {
      validationErrors.confirmPassword = "Required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (formValues.newPassword !== formValues.confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    // reset after submission
    setFormValues({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    setErrors({});
  };

  return (
    <div className=" border rounded-md  mb-5  bg-white  shadow-md">
      {/* first section */}
      <div className="text-[#47494b] text-lg font-semibold p-4 border-b flex items-center justify-between">
        <h1>Change Password</h1>
      </div>

      <form action="" onSubmit={handleSubmit} className="py-5">
        {/* Existing Password */}
        <div className="py-2 px-4 ">
          <label
            htmlFor=""
            className="block text-[#47494b] text-sm py-1 font-semibold"
          >
            Existing Password
          </label>
          <input
            type="text"
            name="currentPassword"
            value={formValues.currentPassword}
            onChange={handleChange}
            placeholder="Current Password"
            className="border-2 rounded-md w-full p-2 placeholder:text-sm font-semibold"
          />
          {errors.currentPassword && (
            <div className=" error text-red-500 ">{errors.currentPassword}</div>
          )}
        </div>

        {/* New Password */}
        <div className="py-2 px-4 ">
          <label
            htmlFor=""
            className="block text-[#47494b] text-sm py-1 font-semibold"
          >
            Password
          </label>
          <input
            type="password"
            name="newPassword"
            value={formValues.newPassword}
            onChange={handleChange}
            placeholder="New Password"
            className="border-2 rounded-md w-full p-2 placeholder:text-sm font-semibold"
          />
          {errors.newPassword && (
            <div className=" error text-red-500 ">{errors.newPassword}</div>
          )}
        </div>

        {/* Confirm Password */}
        <div className="py-2 px-4 ">
          <label
            htmlFor=""
            className="block text-[#47494b] text-sm py-1 font-semibold"
          >
            Confirm Password
          </label>
          <input
            type="text"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="border-2 rounded-md w-full p-2 placeholder:text-sm font-semibold"
          />
          {errors.confirmPassword && (
            <div className=" error text-red-500 ">{errors.confirmPassword}</div>
          )}
        </div>

        <button
          onSubmit={handleSubmit}
          className="border bg-[#25992a]  text-white rounded-md text-sm px-8 py-2 mt-5 mx-4"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
