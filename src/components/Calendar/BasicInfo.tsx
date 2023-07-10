import { useContext, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import AddIcon from "@mui/icons-material/Add";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import CountrySelect from "../controls/CountrySelect";
import { IContactData } from "../contacts/Interfaces";
import axios from "axios";
import TagSelect from "../controls/TagSelect";
import LeadSourceSelect from "../controls/LeadSourceSelect";
import { useRouter } from "next/router";
import { BiMessageDetail } from "react-icons/bi";
import { GlobalContext } from "@/layouts/GlobalLayout";
import { baseUrl, locationID, token } from "@/config/APIConstants";

const BasicInfo = ({ data }: any) => {
  // console.log("hello", data)

  const ctx: any = useContext(GlobalContext);
  const router = useRouter();
  const [tabIndex, setTabIndex] = useState(0);
  const [fullName, setFullName] = useState("");
  const [owner, setOwner] = useState<any>(null);
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contactType, setContactType] = useState("");
  const [tags, setTags] = useState<any>(null);
  const [leadSources, setLeadSources] = useState<any>(null);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [ssn, setSsn] = useState("");
  const [dateOfInjury, setDateOfInjury] = useState("");
  const [status, setStatus] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const [prevFullName, setPrevFullName] = useState("");
  const [prevOwner, setPrevOwner] = useState<any>(null);
  const [prevEmailAddress, setPrevEmailAddress] = useState(emailAddress);
  const [prevPhoneNumber, setPrevPhoneNumber] = useState("");
  const [prevContactType, setPrevContactType] = useState("");
  const [prevTags, setPrevTags] = useState("");
  const [prevLeadSources, setPrevLeadSources] = useState("");
  const [prevDateOfBirth, setPrevDateOfBirth] = useState("");
  const [prevSsn, setPrevSsn] = useState("");
  const [prevDateOfInjury, setPrevDateOfInjury] = useState("");
  const [prevStatus, setPrevStatus] = useState("");
  const [prevStreet, setPrevStreet] = useState("");
  const [prevCity, setPrevCity] = useState("");
  const [prevRegion, setPrevRegion] = useState("");
  const [prevPostalCode, setPrevPostalCode] = useState("");
  const [prevCountry, setPrevCountry] = useState("");

  const addedOnDateFormat = () => {
    let date = new Date("2023-05-31");

    let day = date.getDate();
    let month = date.toLocaleString("default", { month: "long" });
    let year = date.getFullYear();

    let newDate = `${day} ${month} ${year}`;
    return newDate;
  };

  useEffect(() => {
    console.log(dateOfBirth);
  }, [dateOfBirth]);

  const updateFullName = () => {
    if (fullName === prevFullName) return;
    const update = async () => {
      const token = process.env.NEXT_PUBLIC_API_TOKEN;

      await axios
        .put(
          `${baseUrl}contacts/${data?.contact?.id}/full-name`,
          {
            fullName: fullName,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };

    update();
    setPrevFullName(fullName);
  };

  const updateEmailAddress = () => {
    if (emailAddress === prevEmailAddress) return;
    const update = async () => {
      const token = process.env.NEXT_PUBLIC_API_TOKEN;

      await axios
        .put(
          `${baseUrl}contacts/${data?.contact?.id}/email-address`,
          {
            emailAddress: emailAddress,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };

    update();
    setPrevEmailAddress(emailAddress);
  };

  const updatePhoneNumber = () => {
    if (phoneNumber === prevPhoneNumber) return;
    const update = async () => {
      const token = process.env.NEXT_PUBLIC_API_TOKEN;

      await axios
        .put(
          `${baseUrl}contacts/${data?.contact?.id}/phone-number`,
          {
            phoneNumber: phoneNumber,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };

    update();
    setPrevPhoneNumber(phoneNumber);
  };

  const updateOwner = () => {
    if (owner.id === prevOwner.id) return;
    const update = async () => {
      await axios
        .put(
          `${baseUrl}contacts/${data?.contact?.id}/owner-user-id`,
          {
            ownerUserID: owner.id,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };

    update();
    setOwner(prevOwner);
  };

  const addNewTag = (content: string): boolean => {
    const add = async () => {
      const token = process.env.NEXT_PUBLIC_API_TOKEN;

      const tagResult = await axios.post(
        `${baseUrl}tags`,
        {
          locationID: locationID,
          content: content,
          tagType: "CONTACT",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await axios.post(
        `${baseUrl}contacts/${data?.contact?.id}/tags`,
        {
          contactID: data?.contact?.id,
          tagID: tagResult.data?.tagID,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTags([
        ...tags,
        {
          tagID: tagResult.data?.tagID,
          contactID: data?.contact?.id,
          content: content,
        },
      ]);
    };

    add();

    return true;
  };

  const addExistingTag = (tagID: string) => {
    const add = async () => {
      console.log("adding existing tag", tagID);
      await axios.post(
        `${baseUrl}contacts/${data?.contact?.id}/tags`,
        {
          tagID: tagID,
          contactID: data?.contact?.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    };

    add();
  };

  const removeTag = (tagID: string) => {
    const remove = async () => {
      await axios.delete(
        `${baseUrl}contacts/${data?.contact?.id}/tags/${tagID}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    };

    remove();
  };

  const addNewLeadSource = (content: string): boolean => {
    const add = async () => {
      const leadSourceResult = await axios.post(
        `${baseUrl}lead-sources`,
        {
          locationID: locationID,
          content: content,
          color: "CONTACT",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await axios.post(
        `${baseUrl}contacts/${data?.contact?.id}/lead-sources`,
        {
          contactID: data?.contact?.id,
          leadSourceID: leadSourceResult.data?.leadSourceID,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLeadSources([
        ...leadSources,
        {
          leadSourceID: leadSourceResult.data?.leadSourceID,
          contactID: data?.contact?.id,
          content: content,
        },
      ]);
    };

    add();

    return true;
  };

  const addExistingLeadSource = (leadSourceID: string) => {
    const add = async () => {
      console.log("adding existing leadSource", leadSourceID);
      await axios.post(
        `${baseUrl}contacts/${data?.contact?.id}/lead-sources`,
        {
          leadSourceID: leadSourceID,
          contactID: data?.contact?.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    };

    add();
  };

  const removeLeadSource = (leadSourceID: string) => {
    const remove = async () => {
      await axios.delete(
        `${baseUrl}contacts/${data?.contact?.id}/lead-sources/${leadSourceID}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    };

    remove();
  };

  const updateStatus = () => {
    if (status === prevStatus) return;
    const update = async () => {
      await axios
        .put(
          `${baseUrl}contacts/${data?.contact?.id}/status`,
          {
            status: status,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };

    update();
    setPrevStatus(status);
  };

  const updateContactType = () => {
    if (contactType === prevContactType) return;
    const update = async () => {
      await axios
        .put(
          `${baseUrl}contacts/${data?.contact?.id}/contact-type`,
          {
            contactType: contactType,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };

    update();
    setPrevContactType(contactType);
  };

  const updateDateOfBirth = () => {
    const dateOfBirthVal = dateOfBirth === "" ? "0001-01-01" : dateOfBirth;
    if (dateOfBirth === prevDateOfBirth) return;
    const update = async () => {
      await axios
        .put(
          `${baseUrl}contacts/${data?.contact?.id}/profile/date-of-birth`,
          {
            dateOfBirth: dateOfBirthVal,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };

    update();
    setPrevDateOfBirth(dateOfBirth);
  };

  const updateSsn = () => {
    if (ssn === prevSsn) return;
    const update = async () => {
      await axios
        .put(
          `${baseUrl}contacts/${data?.contact?.id}/profile/ssn`,
          {
            ssn: ssn,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };

    update();
    setPrevSsn(ssn);
  };

  const updateDateOfInjury = () => {
    const dateOfInjuryVal = dateOfInjury === "" ? "0001-01-01" : dateOfInjury;
    if (dateOfInjury === prevDateOfInjury) return;
    const update = async () => {
      await axios
        .put(
          `${baseUrl}contacts/${data?.contact?.id}/profile/date-of-injury`,
          {
            dateOfInjury: dateOfInjuryVal,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };

    update();
    setPrevDateOfInjury(dateOfInjury);
  };

  const updateStreet = () => {
    if (street === prevStreet) return;
    const update = async () => {
      await axios
        .put(
          `${baseUrl}contacts/${data?.contact?.id}/address/street`,
          {
            street: street,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };

    update();
    setPrevStreet(street);
  };

  const updateCity = () => {
    if (city === prevCity) return;
    const update = async () => {
      await axios
        .put(
          `${baseUrl}contacts/${data?.contact?.id}/address/city`,
          {
            city: city,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };

    update();
    setPrevCity(city);
  };

  const updateRegion = () => {
    if (region === prevRegion) return;
    const update = async () => {
      await axios
        .put(
          `${baseUrl}contacts/${data?.contact?.id}/address/region`,
          {
            region: region,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };

    update();
    setPrevRegion(region);
  };

  const updatePostalCode = () => {
    if (postalCode === prevPostalCode) return;
    const update = async () => {
      await axios
        .put(
          `${baseUrl}contacts/${data?.contact?.id}/address/postal-code`,
          {
            postalCode: postalCode,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch((err) => {
          console.log(err);
        });
    };

    update();
    setPrevPostalCode(postalCode);
  };

  return (
    <div className="h-full">
      <div className="w-full  grid grid-cols-2 mt-2">
        {["Leads info", "Address info"].map((item, index) => (
          <button
            key={index}
            className={`text-center inline-block p-3 ${
              tabIndex === index
                ? "border-b-[3px] border-b-black font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setTabIndex(index)}
          >
            {item}
          </button>
        ))}
      </div>
      {(tabIndex === 0 && (
        <div className="mx-10 mt-10 pb-10 w-[80%] overflow-y-scroll scrollbar-hide">
          <div className="grid space-y-2">
            <span className="font-main tracking-wide font-light text-gray-700">
              Full Name
            </span>
            <input
              onBlur={() => {
                updateFullName();
              }}
              onChange={(e) => setFullName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  (e.target as HTMLInputElement).blur();
                }
              }}
              className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
              value={fullName}
            />
          </div>
          <div className="grid space-y-2 mt-4">
            <span className="font-main tracking-wide font-light text-gray-700">
              Email
            </span>
            <input
              onBlur={() => {
                updateEmailAddress();
              }}
              onChange={(e) => setEmailAddress(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  (e.target as HTMLInputElement).blur();
                }
              }}
              className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
              value={emailAddress}
            />
          </div>
          <div className="grid space-y-2 mt-4">
            <span className="font-main tracking-wide font-light text-gray-700">
              Phone
            </span>
            <input
              onBlur={() => {
                updatePhoneNumber();
              }}
              onChange={(e) => setPhoneNumber(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  (e.target as HTMLInputElement).blur();
                }
              }}
              className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
              value={phoneNumber}
            />
          </div>
          <div className="grid space-y-2 mt-4">
            <span className="font-main tracking-wide font-light text-gray-700">
              Date Of Birth
            </span>
            <input
              onBlur={() => {
                updateDateOfBirth();
              }}
              onChange={(e) => setDateOfBirth(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  (e.target as HTMLInputElement).blur();
                }
              }}
              type="date"
              className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
              value={dateOfBirth}
            />
          </div>
          <div className="grid space-y-2 mt-4">
            <span className="font-main tracking-wide font-light text-gray-700">
              Social Secruity Number
            </span>
            <input
              onBlur={() => {
                updateSsn();
              }}
              onChange={(e) => setSsn(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  (e.target as HTMLInputElement).blur();
                }
              }}
              className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
              value={ssn}
            />
          </div>
          <div className="grid space-y-2 mt-4">
            <span className="font-main tracking-wide font-light text-gray-700">
              Date Of Injury
            </span>
            <input
              onBlur={() => {
                updateDateOfInjury();
              }}
              onChange={(e) => setDateOfInjury(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  (e.target as HTMLInputElement).blur();
                }
              }}
              type="date"
              className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
              value={dateOfInjury}
            />
          </div>
          <div className="grid space-y-2 mt-4">
            <span className="font-main tracking-wide font-light text-gray-700">
              Tags
            </span>
            {/* <TagSelect
                  tags={tags}
                  setTags={setTags}
                  addNewTag={addNewTag}
                  addExistingTag={addExistingTag}
                  removeTag={removeTag}
                  className={
                    "py-2 p-1 flex font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full min-h-10"
                  }
                /> */}
          </div>
          <div className="grid space-y-2 mt-4">
            <span className="font-main tracking-wide font-light text-gray-700">
              Lead Source
            </span>
            {/* <LeadSourceSelect
                  leadSources={leadSources}
                  setLeadSources={setLeadSources}
                  addNewLeadSource={addNewLeadSource}
                  addExistingLeadSource={addExistingLeadSource}
                  removeLeadSource={removeLeadSource}
                  className={
                    "py-2 p-1 flex font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full min-h-10"
                  }
                /> */}
          </div>
        </div>
      )) ||
        (tabIndex === 1 && (
          <div className="mx-10 mt-10 pb-10 w-[80%]  overflow-y-scroll scrollbar-hide">
            <div className="grid space-y-2">
              <span className="font-main  tracking-wide font-light text-gray-700">
                Street Address
              </span>
              <input
                onBlur={() => {
                  updateStreet();
                }}
                onChange={(e) => setStreet(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    (e.target as HTMLInputElement).blur();
                  }
                }}
                className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
                value={street}
              />
            </div>
            <div className="grid space-y-2 mt-4">
              <span className="font-main tracking-wide font-light text-gray-700">
                City
              </span>
              <input
                onBlur={() => {
                  updateCity();
                }}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    (e.target as HTMLInputElement).blur();
                  }
                }}
                className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
                value={city}
              />
            </div>
            <div className="grid space-y-2 mt-4">
              <span className="font-main tracking-wide font-light text-gray-700">
                Country
              </span>
              <CountrySelect country={country} setCountry={setCountry} />
            </div>
            <div className="grid space-y-2 mt-4">
              <span className="font-main tracking-wide font-light text-gray-700">
                State
              </span>
              <input
                onBlur={() => {
                  updateRegion();
                }}
                onChange={(e) => setRegion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    (e.target as HTMLInputElement).blur();
                  }
                }}
                className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
                value={region}
              />
            </div>
            <div className="grid space-y-2 mt-4">
              <span className="font-main tracking-wide font-light text-gray-700">
                Postal Code
              </span>
              <input
                onBlur={() => {
                  updatePostalCode();
                }}
                onChange={(e) => setPostalCode(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    (e.target as HTMLInputElement).blur();
                  }
                }}
                className="font-main tracking-wide text-black px-3 border border-gray-200 rounded-lg shadow-sm w-full h-10"
                value={postalCode}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default BasicInfo;
