import {
  MapPinIcon,
  EllipsisHorizontalIcon,
  CalendarDaysIcon,
  PhoneIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import DropDownData from "./DropDownData";

interface IChatBodyProps {
  chat: any;
  chatOpen: boolean;
  onClose: Function;
  onProfileToggle: Function;
}

export default function ChatBody({
  chat,
  chatOpen,
  onClose,
  onProfileToggle,
}: IChatBodyProps) {
  const [chatMailOpen, setChatMailOpen] = useState(false);
  const [chatData, setChatData] = useState([
    {
      name: "Angelina Martin",
      image: "",
      time: "2m ago",
      messageCount: "3",
      designation: "Senior Product Designer",
      message: `<p>
      Hey there,
  </p>
  <p>
      <strong class="u-color-shark-2" style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:var(--color-shark-2);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;letter-spacing:normal;margin:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Note</strong>
  </p>
  <ul>
      <li style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(0, 18, 52);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--space-4xs) 0px 0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
          Despite so many features showcased above, the demo still does not present 20+ (!) additional features that are available in CKEditor 5. Check the full <a style="box-sizing:border-box;color:var(--a-color,var(--color-tang-5));margin:0px;text-decoration:none;" href="https://ckeditor.com/ckeditor-5/features/" target="_blank" rel="noopener noreferrer">feature overview page</a> and <a style="box-sizing:border-box;color:var(--a-color,var(--color-tang-5));margin:0px;text-decoration:none;" href="https://ckeditor.com/docs/ckeditor5/latest/features/index.html" target="_blank" rel="noopener noreferrer">detailed feature documentation</a>.
      </li>
      <li style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(0, 18, 52);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--space-4xs) 0px 0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
          CKEditor can be configured to support additional HTML elements, attributes and styles.
      </li>
  </ul>
  <p style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(0, 18, 52);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--space-4xs) 0px 0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
      Regards,
  </p>
  <p style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(0, 18, 52);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--space-4xs) 0px 0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
      Maxwell Max
  </p>`,
      attachment: "pdf",
    },
    {
      name: "Angelina Martin",
      image: "",
      time: "2m ago",
      messageCount: "3",
      designation: "Senior Product Designer",
      message: `<p>
      Hey there,
  </p>
  <p>
      <strong class="u-color-shark-2" style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:var(--color-shark-2);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;letter-spacing:normal;margin:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Note</strong>
  </p>
  <ul>
      <li style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(0, 18, 52);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--space-4xs) 0px 0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
          Despite so many features showcased above, the demo still does not present 20+ (!) additional features that are available in CKEditor 5. Check the full <a style="box-sizing:border-box;color:var(--a-color,var(--color-tang-5));margin:0px;text-decoration:none;" href="https://ckeditor.com/ckeditor-5/features/" target="_blank" rel="noopener noreferrer">feature overview page</a> and <a style="box-sizing:border-box;color:var(--a-color,var(--color-tang-5));margin:0px;text-decoration:none;" href="https://ckeditor.com/docs/ckeditor5/latest/features/index.html" target="_blank" rel="noopener noreferrer">detailed feature documentation</a>.
      </li>
      <li style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(0, 18, 52);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--space-4xs) 0px 0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
          CKEditor can be configured to support additional HTML elements, attributes and styles.
      </li>
  </ul>
  <p style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(0, 18, 52);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--space-4xs) 0px 0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
      Regards,
  </p>
  <p style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(0, 18, 52);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--space-4xs) 0px 0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
      Maxwell Max
  </p>`,
      attachment: "pdf",
    },
    {
      name: "Angelina Martin",
      image: "",
      time: "2m ago",
      messageCount: "3",
      designation: "Senior Product Designer",
      message: `<p>
      Hey there,
  </p>
  <p>
      <strong class="u-color-shark-2" style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:var(--color-shark-2);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;letter-spacing:normal;margin:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Note</strong>
  </p>
  <ul>
      <li style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(0, 18, 52);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--space-4xs) 0px 0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
          Despite so many features showcased above, the demo still does not present 20+ (!) additional features that are available in CKEditor 5. Check the full <a style="box-sizing:border-box;color:var(--a-color,var(--color-tang-5));margin:0px;text-decoration:none;" href="https://ckeditor.com/ckeditor-5/features/" target="_blank" rel="noopener noreferrer">feature overview page</a> and <a style="box-sizing:border-box;color:var(--a-color,var(--color-tang-5));margin:0px;text-decoration:none;" href="https://ckeditor.com/docs/ckeditor5/latest/features/index.html" target="_blank" rel="noopener noreferrer">detailed feature documentation</a>.
      </li>
      <li style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(0, 18, 52);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--space-4xs) 0px 0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
          CKEditor can be configured to support additional HTML elements, attributes and styles.
      </li>
  </ul>
  <p style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(0, 18, 52);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--space-4xs) 0px 0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
      Regards,
  </p>
  <p style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(0, 18, 52);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--space-4xs) 0px 0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
      Maxwell Max
  </p>`,
      attachment: "pdf",
    },
  ]);

  const messagesEndRef = useRef<any>(null);
  useEffect(() => {
    if (chatOpen) {
      if (messagesEndRef != null) messagesEndRef?.current?.scrollIntoView({});
    }
  }, [chatData, chat, chatOpen]);

  function handleSend(message: string) {
    setChatMailOpen(false);

    setChatData([
      ...chatData,
      {
        name: "Angelina Martin",
        image: "",
        time: "2m ago",
        messageCount: "3",
        designation: "Senior Product Designer",
        message: message,
        attachment: "pdf",
      },
    ]);
  }

  return (
    <div
      className={`h-full transition-all ${
        chatOpen
          ? "translate-x-0 fixed z-50 top-0 left-0 w-full h-full md:relative bg-white md:bg-transparent opacity-100"
          : "translate-x-[100%] md:translate-x-0 opacity-0 md:opacity-100"
      } md:block`}
    >
      <div
        className={`border-b border-b-gray-300 h-[18%] md:h-[13%] px-4 flex flex-col justify-center md:justify-start`}
      >
        <div className="flex flex-wrap justify-between items-center">
          <div className="mb-1">
            <h1 className="text-xl font-semibold">{chat.name}</h1>
            <p className="text-[12px] text-gray-700 line-clamp-1 font-medium mt-1.5">
              Applied a week ago.
            </p>
          </div>
          <div className="flex gap-3">
            <MapPinIcon className="h-11 w-11 bg-[#f1f3f4] p-3 rounded-full cursor-pointer hover:bg-white hover:shadow-md transition-all hidden md:block" />
            <CalendarDaysIcon className="h-11 w-11 bg-[#f1f3f4] p-3 rounded-full cursor-pointer hover:bg-white hover:shadow-md transition-all hidden md:block" />
            <PhoneIcon className="h-11 w-11 bg-[#f1f3f4] p-3 rounded-full cursor-pointer hover:bg-white hover:shadow-md transition-all hidden md:block" />
            <XMarkIcon
              onClick={() => onClose()}
              className="h-11 w-11 bg-[#f1f3f4] p-3 rounded-full cursor-pointer hover:bg-white hover:shadow-md transition-all md:hidden"
            />

            <div className="dropdown dropdown-end">
              <label tabIndex={0}>
                <EllipsisHorizontalIcon
                  onClick={() => onProfileToggle()}
                  className="h-11 w-11 bg-[#f1f3f4] p-3 rounded-full cursor-pointer hover:bg-white hover:shadow-md transition-all"
                />
              </label>
              <div
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <DropDownData />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[74%] md:h-[80%] overflow-y-scroll pb-2 w-full pt-1 scrollbar-hide">
        {chatData.map((item, index) => (
          <div
            key={index}
            className={`py-4 flex items-start w-full border-b border-gray-300 hover:bg-white hover:shadow transition-all cursor-pointer px-4 rounded-sm `}
          >
            <div className="mr-3">
              <Image
                src={require("../../../public/dummy/dummy-doc.png")}
                width={50}
                height={50}
                alt={item.name}
                className="rounded-full"
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center w-full">
                <h5 className="font-semibold line-clamp-1">
                  {item.name}{" "}
                  <span className="text-[12px] text-dark font-medium ">
                    send via email
                  </span>
                </h5>
                <time className="text-xs text-gray-600 font-medium text-right">
                  {item.time}
                </time>
              </div>
              <div className="flex flex-col justify-between w-full mt-3">
                <div
                  className="text-sm editor"
                  dangerouslySetInnerHTML={{ __html: item.message }}
                ></div>
                {item.attachment === "pdf" ? (
                  <div className="my-5 ring-1 ring-red-400 rounded-lg pt-4 w-40 flex flex-col items-center justify-center">
                    <ClipboardDocumentCheckIcon className="w-10 h-10 text-red-400" />
                    <div className="bg-[#fff3f3] p-2 mt-4 w-full rounded-b-lg">
                      <p className="text-sm line-clamp-1">{item.name} File</p>
                      <span className="text-sm">
                        {item.attachment.toUpperCase()}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <h6 className="mt-1 text-xs line-clamp-1">{item.designation}</h6>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="h-[26%] md:h-[8%] scrollbar-hide">
        <button
          onClick={() => {
            setChatMailOpen(true);
          }}
          className="w-full py-3  flex  justify-start items-center border-[1px] border-lightGray px-6 "
        >
          <p className="font-medium text-md text-lg"> To :</p>
          <p className="font-normal text-sm  text-gray-400 ml-3"> Type Here </p>
        </button>

        {chatMailOpen && (
          <div
            className={`h-68  bottom-0 w-full  shadow-md rounded-md  px-2 pt-3 pb-2   overflow-y-scroll scrollbar-hide absolute    z-40  ease-in-out duration-300 ${
              chatMailOpen
                ? "translate-y-[0%] opacity-1"
                : "translate-y-[140%] opacity-0"
            }`}
          >
            <div className="  w-full ">
              <ChatMessage
                handleChange={(message: string) => handleSend(message)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
