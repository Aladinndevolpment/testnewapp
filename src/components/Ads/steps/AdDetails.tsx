import TextInput from "@/components/controls/TextInput";
import { AdsContext } from "@/pages/builder/ads";
import { DeleteForever } from "@mui/icons-material";
import Image from "next/image";
import { useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import { BsImage } from "react-icons/bs";

const imageTypes = ["Know More", "Learn More", "Buy Now", "Contact", "Email"];

export default function AdDetails({ onSubmit }: { onSubmit: Function }) {
  const { adsData, setAdsData } = useContext(AdsContext);
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Do something with the files
      setAdsData({ ...adsData, image: acceptedFiles[0] });
    },
    [adsData, setAdsData]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const handleImageDelete = () => {
    setAdsData({ ...adsData, image: null });
  };

  const submit = () => {
    onSubmit();
  };

  return (
    <div className="pl-1">
      <div>
        <h1 className="font-main text-black text-2xl">Ads Details</h1>
        <h3 className="text-xs text-gray-500">
          Complete your ads details, to engage with your audience.
        </h3>
      </div>
      <div className="mt-5 md:max-w-[500px] flex flex-col gap-5">
        <div className="border-dashed border-2 border-newBlue rounded-md bg-[#f5f6fd]">
          {adsData.image ? (
            <div className="relative h-[140px]">
              <div className="absolute top-0 z-50  p-1 text-white w-full bg-gradient-to-b from-black/50 via-black/25 to-transparent  text-xs">
                <div className="flex gap-2 flex-wrap justify-between">
                  <div>
                    <p className="line-clamp-1 text-sm">
                      {adsData.image?.name}
                    </p>
                    <p className="text-gray-100 mt-1 text-xs">
                      {(adsData.image?.size / 1024).toFixed(2)} Kb
                    </p>
                  </div>
                  <div onClick={handleImageDelete}>
                    <DeleteForever />
                  </div>
                </div>
              </div>

              <div {...getRootProps()}>
                <input {...getInputProps()} />

                <Image
                  fill={true}
                  src={
                    adsData.image
                      ? URL.createObjectURL(adsData.image)
                      : require("@/../public/images/avatar/blackdog.jpg")
                  }
                  style={{ objectFit: "cover" }}
                  alt="image"
                />
              </div>
            </div>
          ) : (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <div className="flex gap-3 p-4">
                <div className="bg-newBlue justify-center rounded-full h-8 w-8 flex items-center">
                  <BsImage className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    <span className="text-black">Drag & drop</span> files or
                    <span className="text-black"> browse</span> your computer.
                  </p>

                  <p className="mt-2 text-xs text-gray-400">
                    Supports .jpg, .png, .gif max 10Mb
                  </p>

                  <button className="bg-white px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all text-xs font-semibold mt-8">
                    Add Image
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-3">
          <div className="flex flex-col gap-1">
            <label className="text-black text-sm">Ad Name</label>
            <TextInput
              placeholder="Ex. New Post Engagement"
              onChange={({ target: { value } }) =>
                setAdsData({ ...adsData, adName: value })
              }
              value={adsData.adName}
            />
          </div>
        </div>

        <div className="mt-3">
          <div className="flex flex-col gap-1">
            <label className="text-black text-sm">Headline</label>
            <TextInput
              placeholder="Ex. Best ice cream in town"
              onChange={({ target: { value } }) =>
                setAdsData({ ...adsData, headline: value })
              }
              value={adsData.headline}
            />
          </div>
        </div>

        <div className="mt-3">
          <div className="flex flex-col gap-1">
            <label className="text-black text-sm">Copywriting</label>
            <TextInput
              placeholder="Add your copywriting..."
              onChange={({ target: { value } }) =>
                setAdsData({ ...adsData, copywriting: value })
              }
              isTextArea={true}
              value={adsData.copywriting}
            />
          </div>
        </div>

        <div className="mt-3">
          <div className="mb-4 mt-2 flex flex-col gap-1">
            <label className="text-black text-sm">CTA Button</label>
            <div className="dropdown">
              <label
                tabIndex={0}
                className={`btn hover:bg-transparent hover:text-black rounded-md py-2 btn-sm bg-transparent border-gray-300 capitalize w-full text-left justify-start text-gray-500`}
              >
                {adsData.cta.name}
              </label>
              <div
                tabIndex={0}
                className="dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-700 max-h-80 overflow-y-scroll scrollbar-hide"
              >
                <ul tabIndex={0} className="menu w-full bg-transparent">
                  {imageTypes.map((item, index) => (
                    <li
                      key={index}
                      onClick={() =>
                        setAdsData({
                          ...adsData,
                          cta: { ...adsData.cta, name: item },
                        })
                      }
                      className={`${
                        item === adsData.cta.name &&
                        "bg-primary text-primary-content rounded-md"
                      }`}
                    >
                      <a className={`capitalize ${item} text-sm`}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex flex-col gap-1">
            <label className="text-black text-sm">Website URL</label>
            <div>
              <div className="flex gap-3 flex-wrap shadow px-2 border-gray-200 border-[1px]  rounded-md">
                <div className="form-control">
                  <label className="label cursor-pointer flex gap-2">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-blue-500"
                      value="hubSpot"
                      onChange={({ target: { value } }) =>
                        setAdsData({
                          ...adsData,
                          cta: { ...adsData.cta, urlType: "hubSpot" },
                        })
                      }
                      checked={adsData.cta.urlType === "hubSpot"}
                    />
                    <span className="label-text">Hubspot Pages</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer flex gap-2">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-blue-500"
                      value="Custom"
                      onChange={({ target: { value } }) =>
                        setAdsData({
                          ...adsData,
                          cta: { ...adsData.cta, urlType: "Custom" },
                        })
                      }
                      checked={adsData.cta.urlType === "Custom"}
                    />
                    <span className="label-text">Custom Page</span>
                  </label>
                </div>
              </div>
              <TextInput
                placeholder="Ex. Best ice cream in town"
                onChange={({ target: { value } }) =>
                  setAdsData({
                    ...adsData,
                    cta: { ...adsData.cta, url: value },
                  })
                }
                disabled={adsData.cta.urlType === "hubSpot"}
                value={adsData.cta.url}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 border-t border-gray-300 flex justify-end gap-3 pt-10 pb-10">
        {/* <button className="bg-white font-medium w-32 text-gray-400 px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all text-md mr-3">
          Prev
        </button> */}
        <button
          className="bg-primary w-32 text-white px-4 py-2 shadow-md rounded hover:shadow-xl hover:drop-shadow-sm transition-all text-md font-medium"
          onClick={() => onSubmit()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
