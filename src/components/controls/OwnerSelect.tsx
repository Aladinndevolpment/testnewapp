import { IOwner } from "../contacts/Interfaces";
import { useState, createRef, useEffect } from "react";
import axios from "axios";
import { baseUrl, locationID, token } from "@/config/APIConstants";

interface IOwnerSelectProps {
  owner: IOwner;
  setOwner: (owner: IOwner) => void;
  className: string;
}

function getOwners(): IOwner[] {
  const ownerList: IOwner[] = [];
  const getOwnerList = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}users/location/${locationID}`
      );
      response.data.forEach((owner: IOwner) => {
        ownerList.push(owner);
      });
    } catch (error) {
      console.error(error);
    }
  };

  getOwnerList();
  console.log(ownerList);
  return ownerList;
}

export default function OwnerSelect({
  owner,
  setOwner,
  className,
}: IOwnerSelectProps) {
  const [isTextBoxActive, setIsTextBoxActive] = useState(false);
  const [isListBoxActive, setIsListBoxActive] = useState(false);
  const inputRef = createRef<HTMLInputElement>();

  const [ownerList, setOwnerList] = useState<IOwner[]>([]);
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    const getOwnerList = async () => {
      const ownerList: IOwner[] = [];

      try {
        const response = await axios.get(
          `${baseUrl}users/location/${locationID}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        response.data.users.map((owner: IOwner) => {
          ownerList.push(owner);
        });
        setOwnerList(ownerList);
        if (ownerList.length > 0 && owner.fullName === "") {
          setOwner(ownerList[0]);
          setTextValue(ownerList[0].fullName);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getOwnerList();
  }, []);

  const addOwner = (owner: IOwner) => {
    setOwner(owner);
    setTextValue(owner.fullName);
    setIsListBoxActive(false);
  };

  return (
    <div>
      <div
        className={`flex flex-wrap ${className}`}
        onClick={() => {
          if (inputRef.current) inputRef.current.focus();
        }}
      >
        <input
          ref={inputRef}
          onFocus={() => {
            setIsTextBoxActive(true);
          }}
          onBlur={() => {
            setIsTextBoxActive(false);
            if (
              !ownerList.some((option, index) => {
                if (option.fullName.toLowerCase() === textValue.toLowerCase()) {
                  return true;
                }
              })
            )
              setOwner({
                id: "",
                fullName: "",
              });
          }}
          className="outline-none flex-1"
          onChange={(e) => {
            setTextValue(e.target.value);
            if (e.target.value !== "")
              ownerList.map((option, index) => {
                if (
                  option.fullName.toLowerCase() === e.target.value.toLowerCase()
                ) {
                  addOwner(option);
                }
              });
          }}
          value={textValue}
        />
      </div>
      {ownerList.length > 0 && (isTextBoxActive || isListBoxActive) ? (
        <div
          className="cursor-default border border-gray-200 shadow-sm overflow-scroll max-h-24"
          onMouseEnter={() => setIsListBoxActive(true)}
          onMouseLeave={() => setIsListBoxActive(false)}
        >
          {ownerList.map(
            (option, index) =>
              option.fullName
                .toLowerCase()
                .includes(textValue.toLowerCase()) && (
                <div
                  key={index}
                  className="cursor-default w-full hover:bg-gray-200 px-2 p-1"
                  onClick={() => addOwner(option)}
                >
                  <span className="cursor-default">{option.fullName}</span>
                </div>
              )
          )}
        </div>
      ) : null}
    </div>
  );
}
