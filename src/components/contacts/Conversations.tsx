import { PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState, useRef, useContext } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BiClipboard } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import AudioPlayer from "react-h5-audio-player";
import { IoCall } from "react-icons/io5";
import { MdSms, MdEmail } from "react-icons/md";
import "react-h5-audio-player/lib/styles.css";
import { MdFileDownload } from "react-icons/md";
import parse from "html-react-parser";
import {
  MessageGroup,
  Message,
  MessageDataEmail,
  MessageDataSMS,
  IContact,
} from "./Interfaces";
import axios from "axios";
import { GlobalContext } from "@/layouts/GlobalLayout";

interface IMessageProps {
  message: Message;
  contact: IContact;
}

function Message({ message, contact }: IMessageProps) {
  return (
    <div
      className={
        message.isSent === false
          ? message.messageType !== "CALL"
            ? "bg-gray-200 p-4 rounded-r-lg tracking-wide rounded-bl-lg"
            : ""
          : message.messageType !== "CALL"
          ? "bg-[#1066cf] text-white p-4 tracking-wide rounded-l-lg rounded-br-lg"
          : ""
      }
    >
      {(message.messageType === "SMS" && (
        <p className="text-sm">
          {(message.messageData as MessageDataSMS).message}
        </p>
      )) ||
        (message.messageType === "CALL" && (
          <div className="w-96">
            <AudioPlayer
              className="rounded-lg"
              src="https://api.twilio.com/cowbell.mp3"
              customAdditionalControls={[
                <div
                  className="grid grid-cols-2 space-x-3 -mr-16"
                  key={"audio-speed"}
                >
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
        (message.messageType === "EMAIL" && (
          <>
            <div className="flex flex-col text-sm">
              <span className="font-semibold">
                {(message.messageData as MessageDataEmail).fromName +
                  " > " +
                  contact.fullName}
              </span>
              <span className="mt-2">
                <span className="uppercase font-bold text-xs">
                  {(message.messageData as MessageDataEmail).subject}
                </span>
              </span>
              <span className="">
                {parse((message.messageData as MessageDataEmail).body)}
              </span>
              {/* <div className="justify-self-end w-14 rounded-lg bg-gray-200 text-black font-semibold text-sm mr-2 h-5 px-2 text-center mt-2">
                View
              </div> */}
            </div>
          </>
        ))}
    </div>
  );
}

interface IConversationsProps {
  contact: IContact;
  setConversationModeIndex: (index: number) => void;
  conversationModeIndex: number;
}

function convertToUsersTime(utcTimeString: string): string {
  const date = new Date(utcTimeString);

  // Get the hours and minutes adjusted for the local timezone
  const localHours = date.getHours();
  const localMinutes = date.getMinutes();

  // Format it as "HH:MM AM/PM"
  const period = localHours >= 12 ? "PM" : "AM";
  const hours12 =
    localHours > 12 ? localHours - 12 : localHours === 0 ? 12 : localHours;
  const minutesPadded = localMinutes.toString().padStart(2, "0");

  const timeStringLocal = `${hours12}:${minutesPadded} ${period}`;
  return timeStringLocal;
}

export default function Conversations({
  contact,
  conversationModeIndex,
  setConversationModeIndex,
}: IConversationsProps) {
  const ctx: any = useContext(GlobalContext);
  const [isInitialLoading, setIsInitialLoading] = useState<boolean>(true);
  const [newMessageCount, setNewMessageCount] = useState<number>(0);
  const [messages, setMessages] = useState<MessageGroup[]>([]);
  const [lastMessageID, setLastMessageID] = useState<string | null>(null);
  const [fetchMessagesCount, setFetchMessagesCount] = useState<number>(0);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const topScrollRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState<string>("");
  const [messageError, setMessageError] = useState("");
  const [fromName, setFromName] = useState<string>("");
  const [fromNameError, setFromNameError] = useState("");
  const [fromEmail, setFromEmail] = useState<string>("hello@ehr.software");
  const [fromEmailError, setFromEmailError] = useState("");
  const [toEmail, setToEmail] = useState<string>(contact.emailAddress);
  const [toEmailError, setToEmailError] = useState("");
  const [subject, setSubject] = useState<string>("");
  const [subjectError, setSubjectError] = useState("");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    const scrollToBottom = () => {
      const element = topScrollRef.current;
      if (element) {
        element.scrollTop = element.scrollHeight;
      }
    };

    scrollToBottom();
  }, [isInitialLoading, newMessageCount]);

  useEffect(() => {
    const fetchMessages = async () => {
      console.log("executed");
      try {
        let currentScrollPosition = 0;
        if (typeof window !== "undefined") {
          currentScrollPosition = window.pageYOffset;
        }
        const token = process.env.NEXT_PUBLIC_API_TOKEN;
        const response = await axios.get(
          `/api/messages?contactID=${contact.id}${
            lastMessageID ? `&lastMessageID=${lastMessageID}` : ""
          }&limit=5`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const newMessages = response.data.messages;
        const prevMessages = messages;
        const mergedArray = prevMessages.map((prev) => {
          const matchingNewMsg = newMessages.find(
            (msg: MessageGroup) => msg.date === prev.date
          );
          if (matchingNewMsg) {
            return {
              ...prev,
              messages: [...matchingNewMsg.messages, ...prev.messages],
            };
          } else {
            return prev;
          }
        });

        const newDates = newMessages.filter(
          (msg: MessageGroup) =>
            !prevMessages.find((prev) => prev.date === msg.date)
        );

        setMessages([...newDates, ...mergedArray]);

        const lastMessage = newMessages[0].messages[0];
        setLastMessageID(lastMessage.id);

        console.log(lastMessage.id, response.data.isLastPage);
        setIsLastPage(response.data.isLastPage);
        if (typeof window !== "undefined") {
          setTimeout(() => {
            window.scrollTo(0, currentScrollPosition);
          }, 0);
        }
      } catch (error) {
        console.log(error);
      }

      setIsInitialLoading(false);
    };

    if (!isLastPage) {
      fetchMessages();
    }
  }, [fetchMessagesCount]);

  const addNewMessage = (sentMessage: Message) => {
    setMessages((prevMessages) => {
      const newMessages = [...prevMessages];
      const existingDateGroup = newMessages.find(
        (group) => group.date === sentMessage.addedOn.split("T")[0]
      );

      if (existingDateGroup) {
        existingDateGroup.messages.push(sentMessage);
      } else {
        newMessages.push({
          date: sentMessage.addedOn.split("T")[0],
          messages: [sentMessage],
        });
      }

      return newMessages;
    });
    setNewMessageCount((prevCount) => prevCount + 1);
  };

  const sendSMS = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = process.env.NEXT_PUBLIC_API_TOKEN;
      const response = await axios.post(
        `/api/messages/sms`,
        {
          locationID: process.env.NEXT_PUBLIC_LOCATION_ID,
          contactID: contact.id,
          userID: process.env.NEXT_PUBLIC_USER_ID,
          message: message,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const sentMessage = response.data.message;
      addNewMessage(sentMessage);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  const clearEmailFields = () => {
    setFromName("");
    setFromEmail("hello@ehr.software");
    setToEmail(contact.emailAddress);
    setSubject("");
    setEmail("");
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = process.env.NEXT_PUBLIC_API_TOKEN;
      const response = await axios.post(
        `/api/messages/email`,
        {
          locationID: process.env.NEXT_PUBLIC_LOCATION_ID,
          contactID: contact.id,
          userID: process.env.NEXT_PUBLIC_USER_ID,
          fromName: fromName,
          fromEmail: fromEmail,
          toEmail: toEmail,
          subject: subject,
          body: email,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const sentMessage = response.data.message;
      addNewMessage(sentMessage);
      clearEmailFields();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (topScrollRef.current) {
        if (topScrollRef.current.scrollTop === 0 && !isLastPage) {
          setFetchMessagesCount(
            (prevFetchMessagesCount) => prevFetchMessagesCount + 1
          );
        }
      }
    };

    if (topScrollRef.current) {
      topScrollRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (topScrollRef.current) {
        topScrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm font-main">
      <div className="border-b border-b-gray-100 py-2 px-4 flex flex-col justify-center md:justify-start">
        <div className="flex flex-wrap justify-between items-center">
          <div className="">
            <h1 className="text-xl font-semibold font-main">
              {contact.fullName}
            </h1>
            {/* <p className="text-[12px] text-gray-700 line-clamp-1 font-medium mt-1.5">
              Applied a week ago.
            </p> */}
          </div>
          <div className="flex gap-3">
            <button
              className="h-11 w-11 bg-[#f1f3f4] p-3 rounded-full cursor-pointer hover:bg-gray-200 hover:shadow-md transition-all hidden md:block"
              onClick={() => {
                ctx.setDialerNumber(contact.phoneNumber);
                ctx.setShowDialer(true);
              }}
            >
              <PhoneIcon className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-2" ref={topScrollRef}>
        {messages.map((message, index) => (
          <>
            <div className="flex flex-col" key={index}>
              <div className="flex justify-center m-4 sticky top-0 transition">
                <span className="text-sm text-gray-600 py-0.5 border px-2 rounded-full bg-white border-gray-100 shadow-sm">
                  {message.date}
                </span>
              </div>
              {message.messages.map((messageData, index) => (
                <>
                  {messageData.isSent === false ? (
                    <>
                      <div
                        className="flex w-full m-2 space-x-3 max-w-xs"
                        key={index}
                      >
                        <div className="w-12 h-12 mt-1 relative inline-flex items-center">
                          <Avatar src="/profile-img4.jpg" />
                          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-100 rounded-full -top-2 -left-2">
                            {messageData.messageType === "CALL" ? (
                              <IoCall className="w-3 h-3 text-[#1066cf]" />
                            ) : messageData.messageType == "SMS" ? (
                              <MdSms className="w-3 h-3 text-[#1066cf]" />
                            ) : messageData.messageType == "EMAIL" ? (
                              <MdEmail className="w-3 h-3 text-[#1066cf]" />
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center pt-4 mb-4">
                            <p className="text-darkBlack font-semibold leading-none ">
                              {contact.fullName}
                            </p>
                            <p className="text-sm text-FontGray leading-none">
                              {convertToUsersTime(messageData.addedOn)}
                            </p>
                          </div>
                          <Message message={messageData} contact={contact} />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex w-full m-2 space-x-3 max-w-xs ml-auto justify-end">
                        <div className="justify-end">
                          <div className="flex justify-between space-x-8 items-center pt-4 mb-4">
                            <p className="text-sm text-FontGray leading-none">
                              {convertToUsersTime(messageData.addedOn)}
                            </p>
                            <p className="text-darkBlack font-semibold leading-none ">
                              You
                            </p>
                          </div>
                          <Message message={messageData} contact={contact} />
                        </div>
                        <div className="w-12 h-12 mt-1 relative inline-flex items-center">
                          <Avatar src="/profile-img5.jpg" />
                          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-100 rounded-full -top-1 -right-1">
                            {messageData.messageType === "CALL" ? (
                              <IoCall className="w-3 h-3 text-[#1066cf]" />
                            ) : messageData.messageType == "SMS" ? (
                              <MdSms className="w-3 h-3 text-[#1066cf]" />
                            ) : messageData.messageType == "EMAIL" ? (
                              <MdEmail className="w-3 h-3 text-[#1066cf]" />
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </>
              ))}
            </div>
          </>
        ))}
        {/* <div ref={messagesEndRef} /> */}
      </div>
      <div
        className={`w-full bg-transparent ${
          conversationModeIndex === 0 ? "mb-8" : "mb-5"
        }`}
      >
        <div className="mx-4 border rounded-lg shadow-sm px-2 py-1 h-[95%]">
          <div className="flex flex-wrap w-full">
            {["SMS", "Email"].map((tab, tabIndex) => (
              <button
                key={tabIndex}
                onClick={() => setConversationModeIndex(tabIndex)}
                className={`relative h-8 font-main font-medium px-5 flex items-center ${
                  conversationModeIndex === tabIndex
                    ? "border-b-4 border-blue-500 font-semibold text-black"
                    : "text-gray-400"
                } transition-all duration-100`}
              >
                {tab}
              </button>
            ))}
          </div>
          {(conversationModeIndex === 0 && (
            <form onSubmit={sendSMS}>
              <textarea
                className="resize-none w-full outline-none m-2"
                rows={4}
                placeholder="Type your message"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="justify-between flex mb-4 mx-2">
                <div className="flex">
                  <div className="px-1">
                    <AiOutlinePaperClip className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="px-1 pt-0.5">
                    <BiClipboard className="w-5 h-5 text-gray-600" />
                  </div>
                </div>

                {/* <button className="px-2">
                  <MdAlternateEmail className="w-5 h-5 text-gray-600" />
                </button> */}
                <button
                  type="submit"
                  className="float-right text-white bg-[#1066cf] hover:bg-primary-hover focus:ring-1 focus:ring-primary font-medium rounded-lg font-main text-sm focus:outline-none text-white font-semibold px-4 py-2 shadow-sm"
                >
                  Send SMS
                </button>
              </div>
            </form>
          )) ||
            (conversationModeIndex === 1 && (
              <form className="p-2 pb-4" onSubmit={sendEmail}>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex font-main tracking-wide text-black px-2 border border-gray-200 rounded-lg shadow-sm h-10 items-center min-w-12">
                    <span className="border-r pr-2 text-xs whitespace-nowrap">
                      From Name
                    </span>
                    <input
                      type="text"
                      className="h-full flex-1 outline-none ml-2"
                      value={fromName}
                      required
                      onChange={(e) => setFromName(e.target.value)}
                    />
                  </div>
                  <div className="flex font-main tracking-wide text-black px-2 border border-gray-200 rounded-lg shadow-sm h-10 items-center min-w-12">
                    <span className="border-r pr-2 text-xs whitespace-nowrap">
                      From Email
                    </span>
                    <input
                      type="email"
                      className="h-full flex-1 outline-none ml-2"
                      value={fromEmail}
                      required
                      onChange={(e) => setFromEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="py-2">
                  <div className="flex font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm h-10 items-center">
                    <span className="border-r pr-2 text-xs">To</span>
                    <input
                      type="email"
                      className="h-full flex-1 outline-none ml-2"
                      value={toEmail}
                      required
                      onChange={(e) => setToEmail(e.target.value)}
                    />
                  </div>
                  {toEmailError && (
                    <div className="text-red-500">{toEmailError}</div>
                  )}
                </div>
                <div className="mb-3">
                  <div className="flex flex-col w-full font-main tracking-wide text-black border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex border-b px-3 py-2 items-center">
                      <span className="border-r pr-2 text-xs">Subject</span>
                      <input
                        type="text"
                        className="h-full flex-1 outline-none ml-2"
                        placeholder="Enter an email subject"
                        value={subject}
                        required
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                    {subjectError && (
                      <div className="text-red-500">{subjectError}</div>
                    )}
                    <div>
                      <textarea
                        className="resize-none w-full outline-none p-2"
                        rows={7}
                        placeholder="Tell us what you're thinking about..."
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {emailError && (
                      <div className="text-red-500">{emailError}</div>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 mb-3">
                  <div className="flex">
                    <div className="px-1">
                      <AiOutlinePaperClip className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="px-1 pt-0.5">
                      <BiClipboard className="w-5 h-5 text-gray-600" />
                    </div>
                    {/* <button className="px-2">
                      <MdAlternateEmail className="w-5 h-5 text-gray-600" />
                    </button> */}
                  </div>
                  <div className="space-x-2 flex justify-end">
                    <div
                      className="cursor-pointer float-right bg-white border hover:bg-primary-hover focus:ring-1 focus:ring-primary font-medium rounded-lg font-main text-sm focus:outline-none text-blue-700 font-semibold px-6 py-2 shadow-sm"
                      onClick={clearEmailFields}
                    >
                      Clear
                    </div>
                    <button
                      type="submit"
                      className="float-right text-white border border-blue-700 bg-[#1066cf] hover:bg-primary-hover focus:ring-1 focus:ring-primary font-medium rounded-lg font-main text-sm focus:outline-none text-white font-semibold px-4 py-2 shadow-sm"
                    >
                      Send Email
                    </button>
                  </div>
                </div>
              </form>
            ))}
        </div>
      </div>
    </div>
  );
}
