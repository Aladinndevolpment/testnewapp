import { AdsContext } from "@/pages/builder/ads";
import { useContext } from "react";

const categories = ["Credit", "Employment", "Housing"];

const savedAudData = [
  "General Audience",
  "Design Audience",
  "Male Based Audience",
];

export default function AudienceDetails({
  onSubmit,
  goBack,
}: {
  onSubmit: Function;
  goBack: Function;
}) {
  const { adsData, setAdsData } = useContext(AdsContext);

  const submit = () => {
    onSubmit();
  };

  return (
    <div className="pl-1">
      <div>
        <h1 className="font-main text-black text-2xl">Targeting</h1>
        <h3 className="text-xs text-gray-500">
          Tailor your ad to the right audience
        </h3>
      </div>
      <div className="mt-5 md:max-w-[500px] flex flex-col gap-5">
        <div className="mt-3">
          <div className="mb-4 mt-2 flex flex-col gap-1">
            <label className="text-black text-sm">Category</label>
            <div className="dropdown">
              <label
                tabIndex={0}
                className={`btn hover:bg-transparent hover:text-black rounded-md py-2 btn-sm bg-transparent border-gray-300 capitalize w-full text-left justify-start text-gray-500`}
              >
                {adsData.audience.category}
              </label>
              <div
                tabIndex={0}
                className="dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-700 max-h-80 overflow-y-scroll scrollbar-hide"
              >
                <ul tabIndex={0} className="menu w-full bg-transparent">
                  {categories.map((item, index) => (
                    <li
                      key={index}
                      onClick={() =>
                        setAdsData({
                          ...adsData,
                          audience: { ...adsData.audience, category: item },
                        })
                      }
                      className={`${
                        item === adsData.audience.category &&
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
          <p className="text-sm text-gray-400">
            Declare if your ads are related to credit, employment or housing, or
            about social issue. Election or politics requirements are differ by
            countries.
          </p>
        </div>

        <div>
          <div className="flex flex-col gap-1">
            <label className="text-black text-sm">Audience</label>
            <div>
              <div className="flex gap-3 flex-wrap shadow px-2 border-gray-200 border-[1px]  rounded-md">
                <div className="form-control">
                  <label className="label cursor-pointer flex gap-2">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-blue-500"
                      value="New Audience"
                      onChange={({ target: { value } }) =>
                        setAdsData({
                          ...adsData,
                          audience: {
                            ...adsData.audience,
                            audienceType: value,
                            saveAudType: "",
                          },
                        })
                      }
                      checked={adsData.audience.audienceType === "New Audience"}
                    />
                    <span className="label-text">New Audience</span>
                  </label>
                </div>

                <div className="form-control">
                  <label className="label cursor-pointer flex gap-2">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-blue-500"
                      value="Saved Audience"
                      onChange={({ target: { value } }) =>
                        setAdsData({
                          ...adsData,
                          audience: {
                            ...adsData.audience,
                            audienceType: value,
                          },
                        })
                      }
                      checked={
                        adsData.audience.audienceType === "Saved Audience"
                      }
                    />
                    <span className="label-text">Saved Audience</span>
                  </label>
                </div>
              </div>

              {adsData.audience.audienceType === "Saved Audience" && (
                <div>
                  <div className="flex flex-col gap-1">
                    <div className="dropdown">
                      <label
                        tabIndex={0}
                        className={`btn hover:bg-transparent hover:text-black rounded-md py-2 btn-sm bg-transparent border-gray-300 capitalize w-full text-left justify-start text-gray-500`}
                      >
                        {adsData.audience.saveAudType}
                      </label>
                      <div
                        tabIndex={0}
                        className="dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-700 max-h-80 overflow-y-scroll scrollbar-hide"
                      >
                        <ul tabIndex={0} className="menu w-full bg-transparent">
                          {savedAudData.map((item, index) => (
                            <li
                              key={index}
                              onClick={() =>
                                setAdsData({
                                  ...adsData,
                                  audience: {
                                    ...adsData.audience,
                                    saveAudType: item,
                                  },
                                })
                              }
                              className={`${
                                item === adsData.audience.saveAudType &&
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
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 border-t border-gray-300 flex justify-end gap-3 pt-10 pb-10">
        <button
          onClick={() => goBack(1)}
          className="bg-white font-medium w-32 text-gray-400 px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all text-md mr-3"
        >
          Prev
        </button>
        <button
          className="bg-primary w-32 text-white px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all text-md font-medium"
          onClick={() => submit()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
