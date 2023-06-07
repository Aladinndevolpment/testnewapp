import { AiOutlinePlus } from "react-icons/ai";

export default function Tasks() {
  const statuses = [
    "Pending",
    "Confirmed",
    "Next Day Confirmed",
    "Canceled",
    "Left VM",
    "No VM/Full VM",
    "Rescheduled",
    "Task Set",
    "Task Called",
    "Replied SMS",
    "Replied Email",
    "Hung Up",
    "Not Interested",
    "DND",
    "24 hour Call Confirmed",
    "24 hour SMS Confirmed",
    "24 hr Left VM",
    "24 hr Not Confirmed",
    "24hr Cancel",
    "Same Day Cancel",
    "24 hr Rescheduled",
    "24hr DND/NI",
  ];

  const types = ["Ascending", "Descending"];

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div className="w-1/2 pr-1">
          <select
            className={`flex gap-3 flex-wrap shadow px-2 py-2  rounded-md w-full focus-within:outline-2 focus-within:outline-blue-400 `}
          >
            {statuses?.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/2 pl-1">
          <select
            className={`flex gap-3 flex-wrap shadow px-2 py-2  rounded-md w-full focus-within:outline-2 focus-within:outline-blue-400 `}
          >
            {types?.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-3 flex justify-end">
        <button
          // onClick={() => setEndChatModelVisibility(true)}
          className="bg-newBlue px-3 py-1.5 rounded-md w-28 flex justify-center items-center"
        >
          <AiOutlinePlus className="text-white mr-1" />
          <span className="text-white text-sm">Add Task</span>
        </button>
      </div>
    </div>
  );
}
