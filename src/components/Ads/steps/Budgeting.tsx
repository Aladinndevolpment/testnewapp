import TextInput from "@/components/controls/TextInput";
import { AdsContext } from "@/pages/builder/ads";
import { useContext } from "react";
import DatePicker from "react-date-picker";

const fbAdAccount = ["FB AD 1", "FB AD 2", "FB AD 3"];

const fbPage = ["Page 1", "Page 2", "Page 3"];

const currency = ["USD", "INR", "GBP"];

export default function Budgeting({
  onSubmit,
  goBack,
}: {
  onSubmit: Function;
  goBack: Function;
}) {
  const { adsData, setAdsData } = useContext(AdsContext);

  const submit = () => {
    console.log(adsData);
  };

  return (
    <div className="pl-1">
      <div>
        <h1 className="font-main text-black text-2xl">Schedule & Budgeting</h1>
        <h3 className="text-xs text-gray-500">
          Set your ad schedule and total amount to spent on the ad
        </h3>
      </div>
      <div className="mt-5 md:max-w-[500px] flex flex-col gap-5">
        <div className="mt-3">
          <div className="flex flex-col gap-1">
            <label className="text-black text-sm">Facebook ad account</label>
            <div className="dropdown">
              <label
                tabIndex={0}
                className={`btn hover:bg-transparent hover:text-black rounded-md py-2 btn-sm bg-transparent border-gray-300 capitalize w-full text-left justify-start text-gray-500`}
              >
                {adsData.sAndB.fbAdAccount === ""
                  ? "Select ad account"
                  : adsData.sAndB.fbAdAccount}
              </label>
              <div
                tabIndex={0}
                className="dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-700 max-h-80 overflow-y-scroll scrollbar-hide"
              >
                <ul tabIndex={0} className="menu w-full bg-transparent">
                  {fbAdAccount.map((item, index) => (
                    <li
                      key={index}
                      onClick={() =>
                        setAdsData({
                          ...adsData,
                          sAndB: { ...adsData.sAndB, fbAdAccount: item },
                        })
                      }
                      className={`${
                        item === adsData.sAndB.fbAdAccount &&
                        "bg-primary text-primary-content rounded-md"
                      }`}
                    >
                      <a className={`capitalize  text-sm`}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex flex-col gap-1">
            <label className="text-black text-sm">Select Facebook Page</label>
            <div className="dropdown">
              <label
                tabIndex={0}
                className={`btn hover:bg-transparent hover:text-black rounded-md py-2 btn-sm bg-transparent border-gray-300 capitalize w-full text-left justify-start text-gray-500`}
              >
                {adsData.sAndB.fbPage === ""
                  ? "Select facebook page"
                  : adsData.sAndB.fbPage}
              </label>
              <div
                tabIndex={0}
                className="dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-700 max-h-80 overflow-y-scroll scrollbar-hide"
              >
                <ul tabIndex={0} className="menu w-full bg-transparent">
                  {fbPage.map((item, index) => (
                    <li
                      key={index}
                      onClick={() =>
                        setAdsData({
                          ...adsData,
                          sAndB: { ...adsData.sAndB, fbPage: item },
                        })
                      }
                      className={`${
                        item === adsData.sAndB.fbPage &&
                        "bg-primary text-primary-content rounded-md"
                      }`}
                    >
                      <a className={`capitalize  text-sm`}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex flex-col gap-1">
            <label className="text-black text-sm">Budget</label>

            <div className="flex flex-wrap items-center">
              <div className="w-2/12">
                <div className="dropdown w-full shadow px-2 py-[5.5px] border-gray-200 border-[1px]  rounded-md">
                  <div tabIndex={0} className={``}>
                    {adsData.sAndB.currency}
                  </div>
                  <div
                    tabIndex={0}
                    className="dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-700 max-h-80 overflow-y-scroll scrollbar-hide"
                  >
                    <ul tabIndex={0} className="menu w-full bg-transparent">
                      {currency.map((item, index) => (
                        <li
                          key={index}
                          onClick={() =>
                            setAdsData({
                              ...adsData,
                              sAndB: { ...adsData.sAndB, currency: item },
                            })
                          }
                          className={`${
                            item === adsData.sAndB.currency &&
                            "bg-primary text-primary-content rounded-md"
                          }`}
                        >
                          <a className={`capitalize  text-sm`}>{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-10/12">
                <TextInput
                  placeholder="Ex. Best ice cream in town"
                  onChange={({ target: { value } }) =>
                    setAdsData({
                      ...adsData,
                      sAndB: { ...adsData.sAndB, budget: value },
                    })
                  }
                  value={adsData.sAndB.budget}
                  type="number"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap">
          <div className="w-1/2 pr-1">
            <div className="flex flex-col gap-1">
              <label className="text-black text-sm">Campaign Start</label>
              <TextInput
                placeholder="Ex. Best ice cream in town"
                onChange={({ target: { value } }) =>
                  setAdsData({
                    ...adsData,
                    sAndB: { ...adsData.sAndB, startTime: value },
                  })
                }
                value={adsData.sAndB.startTime}
                type="date"
              />
            </div>
          </div>

          <div className="w-1/2 pl-1">
            <div className="flex flex-col gap-1">
              <label className="text-black text-sm">Campaign End</label>
              <TextInput
                placeholder="Ex. Best ice cream in town"
                onChange={({ target: { value } }) =>
                  setAdsData({
                    ...adsData,
                    sAndB: { ...adsData.sAndB, endTime: value },
                  })
                }
                value={adsData.sAndB.endTime}
                type="date"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 border-t border-gray-300 flex justify-end gap-3 pt-10 pb-10">
        <button
          onClick={() => goBack(2)}
          className="bg-white font-medium w-32 text-gray-400 px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all text-md mr-3"
        >
          Prev
        </button>
        <button
          className="bg-primary w-32 text-white px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all text-md font-medium"
          onClick={() => submit()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
