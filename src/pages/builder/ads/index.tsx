import Main from "@/components/Ads/Main";
import Preview from "@/components/Ads/Preview";
import { createContext, useState } from "react";

interface formDataType {
  image: File | null;
  adName: string;
  headline: string;
  copywriting: string;
  cta: {
    name: string;
    urlType: "hubSpot" | "Custom";
    url: string;
  };
  audience: {
    category: string;
    audienceType: string;
    saveAudType: string;
  };
  sAndB: {
    fbAdAccount: string;
    fbPage: string;
    currency: string;
    budget: string;
    startTime: string;
    endTime: string;
  };
}

const baseData: formDataType = {
  image: null,
  adName: "",
  headline: "",
  copywriting: "",
  cta: { name: "Know More", urlType: "hubSpot", url: "" },
  audience: {
    category: "Credit",
    audienceType: "New Audience",
    saveAudType: "General Audience",
  },
  sAndB: {
    fbAdAccount: "",
    fbPage: "",
    currency: "USD",
    budget: "",
    startTime: "",
    endTime: "",
  },
};

export const AdsContext = createContext({
  adsData: baseData,
  setAdsData: (adsData: formDataType) => {},
});

export default function Ads() {
  const [adsData, setAdsData] = useState(baseData);
  const value = { adsData, setAdsData };
  return (
    <AdsContext.Provider value={value}>
      <div className="h-full overflow-hidden">
        <div className="flex flex-wrap h-full">
          <div className="w-full md:w-3/12 p-4 h-full">
            <Preview />
          </div>
          <div className="w-full md:w-9/12 bg-white p-4 h-[90%]">
            <Main />
          </div>
        </div>
      </div>
    </AdsContext.Provider>
  );
}
