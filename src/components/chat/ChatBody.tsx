import EmailMessage from "./EmailMessage";
import SMSMessage from "./SMSMessage";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import DropDownData from "./DropDownData";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { MdFileDownload, MdSms, MdEmail } from "react-icons/md";

import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";
import moment from "moment";

import { FaPhoneAlt } from "react-icons/fa";

interface IChatBodyProps {
  chat: any;
  chatOpen: boolean;
  onClose: Function;
  onProfileToggle: Function;
  chatSelected: boolean;
}

export default function ChatBody({
  chat,
  chatOpen,
  onClose,
  onProfileToggle,
  chatSelected,
}: IChatBodyProps) {
  const [chatMailOpen, setChatMailOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      date: "May 11, 2023",
      messages: [
        {
          type: "sms",
          direction: 0,
          message: "Sample text from recieved from the contact",
          time: "05:02 PM",
        },
        {
          type: "call",
          direction: 0,
          recordingLink: "",
          time: "06:02 PM",
        },
        {
          type: "sms",
          direction: 1,
          message: `See You Soon at Location Name on Thursday, May 11, 2023 3:00 PM! 

          Our Medical, Regenerative, & Wellness Teams look forward to learning about you! We treat others how we want to be treated—like individuals..not a number or a condition. 
          
          Get ready for a Patient Experience that’s like no other.
          
          We are located at:
           Location's location, 1238988 USA
          
          See you soon! Location Name`,
          time: "06:12 PM",
          userID: "123",
        },
        {
          type: "email",
          direction: 1,
          toName: "Front Desk",
          fromName: "Front Desk",
          subject:
            "See You Soon at Location Name on Thursday, May 11, 2023 3:00 PM!",
          message: "Thanks for booking your appointment with Location Name",
          time: "06:02 PM",
          userID: "123",
        },
      ],
    },
    {
      date: "May 12, 2023",
      messages: [
        {
          type: "call",
          direction: 1,
          recordingLink: "",
          time: "06:02 PM",
          userID: "123",
        },
      ],
    },
  ]);
  const [chatData, setChatData] = useState([
    {
      type: "sms",
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
    //   {
    //     name: "Angelina Martin",
    //     image: "",
    //     time: "2m ago",
    //     messageCount: "3",
    //     designation: "Senior Product Designer",
    //     message: `<p>
    //     Hey there,
    // </p>
    // <p>
    //     <strong class="u-color-shark-2" style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:var(--color-shark-2);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;letter-spacing:normal;margin:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Note</strong>
    // </p>
    // <ul>
    //     <li style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(0, 18, 52);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--space-4xs) 0px 0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    //         Despite so many features showcased above, the demo still does not present 20+ (!) additional features that are available in CKEditor 5. Check the full <a style="box-sizing:border-box;color:var(--a-color,var(--color-tang-5));margin:0px;text-decoration:none;" href="https://ckeditor.com/ckeditor-5/features/" target="_blank" rel="noopener noreferrer">feature overview page</a> and <a style="box-sizing:border-box;color:var(--a-color,var(--color-tang-5));margin:0px;text-decoration:none;" href="https://ckeditor.com/docs/ckeditor5/latest/features/index.html" target="_blank" rel="noopener noreferrer">detailed feature documentation</a>.
    //     </li>
    //     <li style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(0, 18, 52);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--space-4xs) 0px 0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    //         CKEditor can be configured to support additional HTML elements, attributes and styles.
    //     </li>
    // </ul>
    // <p style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(0, 18, 52);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--space-4xs) 0px 0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    //     Regards,
    // </p>
    // <p style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(0, 18, 52);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--space-4xs) 0px 0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    //     Maxwell Max
    // </p>`,
    //     attachment: "pdf",
    //   },
    //   {
    //     name: "Angelina Martin",
    //     image: "",
    //     time: "2m ago",
    //     messageCount: "3",
    //     designation: "Senior Product Designer",
    //     message: `<p>
    //     Hey there,
    // </p>
    // <p>
    //     <strong class="u-color-shark-2" style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:var(--color-shark-2);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;letter-spacing:normal;margin:0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Note</strong>
    // </p>
    // <ul>
    //     <li style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(0, 18, 52);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--space-4xs) 0px 0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    //         Despite so many features showcased above, the demo still does not present 20+ (!) additional features that are available in CKEditor 5. Check the full <a style="box-sizing:border-box;color:var(--a-color,var(--color-tang-5));margin:0px;text-decoration:none;" href="https://ckeditor.com/ckeditor-5/features/" target="_blank" rel="noopener noreferrer">feature overview page</a> and <a style="box-sizing:border-box;color:var(--a-color,var(--color-tang-5));margin:0px;text-decoration:none;" href="https://ckeditor.com/docs/ckeditor5/latest/features/index.html" target="_blank" rel="noopener noreferrer">detailed feature documentation</a>.
    //     </li>
    //     <li style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(0, 18, 52);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--space-4xs) 0px 0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    //         CKEditor can be configured to support additional HTML elements, attributes and styles.
    //     </li>
    // </ul>
    // <p style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(0, 18, 52);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--space-4xs) 0px 0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    //     Regards,
    // </p>
    // <p style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(0, 18, 52);  font-family: 'Poppins', sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--space-4xs) 0px 0px;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    //     Maxwell Max
    // </p>`,
    //     attachment: "pdf",
    //   },
  ]);

  const messagesEndRef = useRef<any>(null);
  // useEffect(() => {
  //   if (chatOpen) {
  //     if (messagesEndRef != null) messagesEndRef?.current?.scrollIntoView({});
  //   }
  // }, [chatData, chat, chatOpen]);

  function handleSMSSend(message: string) {
    setChatMailOpen(false);
    setMessages([
      ...messages,
      {
        date: moment().format("dd nn yyyy hh:mm:ss a"),
        messages: [
          {
            type: "sms",
            direction: 1,
            message: message,
            time: moment().format("hh:mm:ss a"),
          },
        ],
      },
    ]);
  }

  function handleEmailSend(emailData: any) {
    setChatMailOpen(false);
    setMessages([
      ...messages,
      {
        date: moment().format("dd nn yyyy hh:mm:ss a"),
        messages: [
          {
            type: "email",
            direction: 0,
            fromName: emailData.from,
            toName: emailData.to,
            subject: emailData.subject,
            message: emailData.message,
            time: moment().format("hh:mm:ss a"),
            userID: "123",
          },
        ],
      },
    ]);
  }

  const [messageType, setMessageType] = useState("");

  function Message({ messageData }: any) {
    return (
      <div
        className={
          messageData.direction === 0
            ? messageData.type !== "call"
              ? "bg-gray-200 p-4 rounded-r-lg tracking-wide rounded-bl-lg"
              : ""
            : messageData.type !== "call"
            ? "bg-[#1066cf] text-white p-4 tracking-wide rounded-l-lg rounded-br-lg"
            : ""
        }
      >
        {(messageData.type === "sms" && (
          <div
            style={{ whiteSpace: "pre-line" }}
            className="smsData"
            dangerouslySetInnerHTML={{ __html: messageData.message }}
          ></div>
        )) ||
          (messageData.type === "call" && (
            <div className="border-[1px] border-gray-200 rounded-md">
              <AudioPlayer
                className="rounded-lg"
                src="https://api.twilio.com/cowbell.mp3"
                customAdditionalControls={[
                  // eslint-disable-next-line react/jsx-key
                  <div className="grid grid-cols-2 space-x-3 -mr-16 py-1.5">
                    <button className="text-white text-sm font-semibold rounded-lg bg-[#868686]">
                      x1
                    </button>
                    <button>
                      <MdFileDownload className="w-7 h-7 text-[#868686]" />
                    </button>
                  </div>,
                ]}
              />
            </div>
          )) ||
          (messageData.type === "email" && (
            <>
              <div className="flex flex-col ">
                <span
                  className={`${
                    messageData.direction == 0 ? "text-dark" : " text-white"
                  } font-bold   text-sm `}
                >
                  {messageData.fromName + " > " + messageData.toName}
                </span>
                <span
                  className={`${
                    messageData.direction == 0 ? "text-dark" : " text-white"
                  } font-medium mt-1 text-sm `}
                >
                  <span> {messageData.time} </span>
                </span>
                <span
                  className={`${
                    messageData.direction == 0 ? "text-dark" : " text-white"
                  } font-bold  mt-1  text-sm `}
                >
                  <span>{messageData.subject}</span>
                </span>
                <div
                  style={{ whiteSpace: "pre-line" }}
                  className={`${
                    messageData.direction == 0 ? "text-dark" : " text-white"
                  } font-medium mt-1 text-sm smsData pt-3 `}
                  dangerouslySetInnerHTML={{ __html: messageData.message }}
                ></div>
                {/* <button className="justify-self-end w-14 rounded-lg bg-gray-200 text-black font-semibold text-sm mr-2 h-5 px-2 text-center mt-2">
                  View
                </button> */}
              </div>
            </>
          ))}
      </div>
    );
  }

  return (
    <div className="relative h-full">
      <div
        className={`${
          chatSelected ? "h-[95vh]" : "h-full"
        }   relative flex flex-col justify-start transition-all md:block bg-white `}
      >
        <div className="bg-white flex flex-wrap justify-between items-center px-4 border-b border-b-gray-300 lg:h-[11%] 2xl:h-[9.1%] pb-2">
          <div className="mb-1">
            <h1 className="text-xl font-semibold">{chat.name}</h1>
          </div>
          <div className="flex gap-3 mb-1">
            {/* <MapPinIcon className="h-11 w-11 bg-[#f1f3f4] p-3 rounded-full cursor-pointer hover:bg-white hover:shadow-md transition-all hidden md:block" /> */}
            {/* <CalendarDaysIcon className="h-11 w-11 bg-[#f1f3f4] p-3 rounded-full cursor-pointer hover:bg-white hover:shadow-md transition-all hidden md:block" /> */}
            <FaPhoneAlt className="h-11 w-11 bg-[#f1f3f4] p-3 rounded-full cursor-pointer hover:bg-white hover:shadow-md transition-all hidden md:block" />
            <XMarkIcon
              onClick={() => onClose()}
              className="h-11 w-11 bg-[#f1f3f4] p-3 rounded-full cursor-pointer hover:bg-white hover:shadow-md transition-all md:hidden"
            />

            <div className="dropdown dropdown-end md:hidden">
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

        <div
          className={`  ${
            messageType == "sms"
              ? "h-[85%] md:h-[72%] lg:h-[50%]  "
              : messageType == "email"
              ? "h-[85%] md:h-[72%] lg:h-[30%]  "
              : "h-[85%] md:h-[72%] lg:h-[83%] 2xl:h-[74%]"
          }  bg-white  overflow-y-scroll  pb-[10%] w-full pt-1 scrollbar-hide `}
        >
          <div className="flex-1 overflow-y-auto p-2">
            {messages.map((message, index) => (
              <>
                <div className="flex flex-col">
                  <div className="flex justify-center m-4 sticky top-0 transition">
                    <span className="text-sm text-gray-600 py-0.5 border px-2 rounded-full bg-white border-gray-100 shadow-sm">
                      {message.date}
                    </span>
                  </div>
                  {message.messages.map((messageData, index) => (
                    <>
                      {messageData.direction === 0 ? (
                        <>
                          <div className="flex w-full gap-3 justify-start items-start">
                            {/* <Badge
                            anchorOrigin={{
                              vertical: "top",
                              horizontal: "left",
                            }}
                            variant="plain"
                            badgeContent={
                              <Avatar
                                className="bg-blue-100"
                                sx={{ "--Avatar-size": "20px" }}
                              >
                                {messageData.type === "call" ? (
                                  <IoCall className="w-3 h-3 text-[#1066cf]" />
                                ) : messageData.type == "sms" ? (
                                  <MdSms className="w-3 h-3 text-[#1066cf]" />
                                ) : (
                                  ""
                                )}
                              </Avatar>
                            }
                            badgeInset="4%"
                            sx={{ "--Badge-paddingX": "0px" }}
                          >
                            <Avatar src="/profile-img4.jpg" size="lg" />
                          </Badge> */}
                            <div className="avatar-group -space-x-6">
                              <div className="avatar">
                                <div className="w-12">
                                  <Image
                                    src={require("../../../public/images/avatar/yellowdog.jpg")}
                                    width={80}
                                    height={80}
                                    alt=""
                                    className="rounded-full"
                                  />{" "}
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between items-center pt-4">
                                <p className="text-lg text-darkBlack font-semibold leading-none ">
                                  You
                                </p>
                                <p className="text-sm text-FontGray leading-none">
                                  {messageData.time}
                                </p>
                                <div></div>
                              </div>
                              <div className="pt-3  w-[250px] lg:w-[380px] overflow-x-hidden">
                                <Message messageData={messageData} />
                              </div>
                            </div>
                            {/* <div>
                            <Message messageData={messageData} />
                            <span className="text-xs text-gray-500 leading-none">
                              {messageData.time}
                            </span>
                          </div> */}
                          </div>
                        </>
                      ) : (
                        <div className="w-full">
                          <div className="flex  gap-3 justify-end items-start">
                            <div>
                              <div className="flex justify-between items-center pt-4">
                                <div></div>
                                <p className="text-sm text-FontGray leading-none">
                                  {messageData.time}
                                </p>
                                <p className="text-lg text-darkBlack font-semibold leading-none ">
                                  You
                                </p>
                              </div>
                              <div className="pt-3  w-[250px] lg:w-[380px] overflow-x-hidden">
                                <Message messageData={messageData} />
                              </div>
                            </div>
                            <div>
                              <div className="avatar-group -space-x-6">
                                <div className="avatar">
                                  <div className="w-12">
                                    <Image
                                      src={require("../../../public/images/avatar/blackdog.jpg")}
                                      width={80}
                                      height={80}
                                      alt=""
                                      className="rounded-full"
                                    />{" "}
                                  </div>
                                </div>
                              </div>
                              {/* <Badge
                              anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                              }}
                              variant="plain"
                              badgeContent={
                                <Avatar
                                  className="bg-blue-100"
                                  sx={{ "--Avatar-size": "20px" }}
                                >
                                  {messageData.type === "call" ? (
                                    <IoCall className="w-3 h-3 text-[#1066cf]" />
                                  ) : messageData.type == "sms" ? (
                                    <MdSms className="w-3 h-3 text-[#1066cf]" />
                                  ) : (
                                    <MdEmail className="w-3 h-3 text-[#1066cf]" />
                                  )}
                                </Avatar>
                              }
                              badgeInset="3%"
                              sx={{ "--Badge-paddingX": "0px" }}
                            >
                              <Avatar
                                size="lg"
                                className="pt-1 font-semibold text-white bg-red-600"
                              >
                                LU
                              </Avatar>
                            </Badge> */}
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </>
            ))}
          </div>
          <div ref={messagesEndRef} />
        </div>

        <div className="h-[5%]  md:h-[8%] flex items-end scrollbar-hide bg-white">
          <div className="w-full pb-3  flex  justify-start items-center border-[1px] border-lightGray px-6 bg-white">
            {/* <div className="flex  justify-between items-center px-6 "> */}
            <div className="w-full pt-4  flex  justify-start items-center  ">
              <button
                onClick={() => {
                  setMessageType("sms");
                  setChatMailOpen(true);
                }}
                className={` ${
                  messageType == "sms"
                    ? "font-semibold text-md text-base text-[#3486E2]"
                    : "font-semibold text-md text-base text-dark"
                }  `}
              >
                SMS
              </button>
              <button
                onClick={() => {
                  setMessageType("email");
                  setChatMailOpen(true);
                }}
                className={`ml-5 ${
                  messageType == "email"
                    ? "font-semibold text-md text-base text-[#3486E2]"
                    : "font-semibold text-md text-base text-gray-700"
                }  `}
              >
                Email
              </button>
            </div>
            <button
              className="pt-4  "
              onClick={() => {
                setChatMailOpen(true);
                setMessageType("sms");
              }}
            >
              <TfiAngleUp className="h-4 w-4 text-dark" />
            </button>
          </div>
        </div>
      </div>

      {chatMailOpen && (
        <div
          className={`bg-white bottom-0 w-full  shadow-md rounded-md  pt-3 pb-2   overflow-y-scroll scrollbar-hide absolute z-40    ${
            chatMailOpen
              ? "translate-y-[0%] opacity-1"
              : "translate-y-[140%] opacity-0"
          }
            ${
              messageType == "sms"
                ? "2xl:h-[48%]"
                : messageType == "email"
                ? "2xl:h-[70%]"
                : "h-68 "
            }
            
            `}
        >
          <div className="  w-full bg-white">
            <div className="flex  justify-between items-center px-6  border-b-[1px] border-lightGray pb-1 mb-2 ">
              <div className="w-full pt-4  flex  justify-start items-center  ">
                <button
                  onClick={() => {
                    setMessageType("sms");
                    setChatMailOpen(true);
                  }}
                  className={` ${
                    messageType == "sms"
                      ? "font-semibold text-md text-base text-[#3486E2]"
                      : "font-semibold text-md text-base text-dark"
                  }  `}
                >
                  SMS
                </button>
                <button
                  onClick={() => {
                    setMessageType("email");
                    setChatMailOpen(true);
                  }}
                  className={`ml-5 ${
                    messageType == "email"
                      ? "font-semibold text-md text-base text-[#3486E2]"
                      : "font-semibold text-md text-base text-gray-700"
                  }  `}
                >
                  Email
                </button>
              </div>
              <button
                onClick={() => {
                  setChatMailOpen(false);
                  setMessageType("");
                }}
              >
                <TfiAngleDown className="h-4 w-4 text-dark" />
              </button>
            </div>

            {messageType == "sms" ? (
              <SMSMessage
                onClose={() => setChatMailOpen(false)}
                handleChange={(message: string) => handleSMSSend(message)}
              />
            ) : (
              <EmailMessage
                onClose={() => setChatMailOpen(false)}
                handleChange={(emailData: string) => handleEmailSend(emailData)}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
