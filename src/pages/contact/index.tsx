import TabLeads from "@/components/Contact/TabLeads";
import { GlobalContext } from "@/layouts/GlobalLayout";
import Image from "next/image";
import { MouseEventHandler, useContext, useState } from "react";
import { GetServerSidePropsContext } from "next";
import ContactsTable from "@/components/contacts/table/ContactsTable";
import {
  EContactType,
  IContact,
  IContactsData,
} from "@/components/contacts/Interfaces";
import axios from "axios";
import Head from "next/head";

interface IAppointmentDetailsProps {
  visibility: boolean;
  onClose: MouseEventHandler;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = {
    count: 0,
    contacts: [],
  };

  const token = process.env.NEXT_PUBLIC_API_TOKEN;

  await axios
    .get(`/api/contacts/location/${process.env.NEXT_PUBLIC_LOCATION_ID}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      res.count = response.data.contacts.length;
      res.contacts = response.data.contacts;
    })
    .catch((err) => {
      console.log("error bruh:", err);
    });

  return {
    props: {
      ...res,
    },
  };
}

export default function Contacts(contactsData: IContactsData) {
  const [DropDownRole, SetDropDownRole] = useState("");

  // const innerTabs = [
  //   {
  //     id: "tab1",
  //     label: "Leads",
  //     content: <ContactsTable contactsData={contactsData.contacts} />,
  //   },
  //   {
  //     id: "tab2",
  //     label: "Patients",
  //     content: <TabLeads />,
  //   },
  // ];

  const ctx = useContext(GlobalContext);
  ctx.setTitle("Contact");
  // const [activeTab, setActiveTab] = useState<any>(tabs[3].id);
  // const [activeInnerTab, setActiveInnerTab] = useState(innerTabs[0].id);

  return (
    <div>
      <div className="overflow-hidden ">
        {/* <ul className="lg:px-5 border-b-[1px] border-[#dfdfdf] pt-4 flex justify-start items-center overflow-auto scrollbar-hide gap-6 bg-white  ">
          {innerTabs.map((tab: any) => (
            <li key={tab.id}>
              <button
                className={`px-3 lg:px-2 transition-all duration-300 font-semibold text-xs md:text-base ${
                  activeInnerTab === tab.id
                    ? "border-b-[4px] border-secondary text-secondary pb-3 "
                    : "text-gray-500 pb-4"
                }`}
                onClick={() => setActiveInnerTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul> */}
        <div className="  bg-white w-full  overflow-hidden">
          <ContactsTable contactsData={contactsData.contacts} />
          {/* {innerTabs.map((tab: any) => (
            <div
              key={tab.id}
              className={`shadow-md transition-all duration-300 rounded-md  ${
                activeInnerTab === tab.id ? "block" : " text-black hidden"
              } `}
            >
              {tab.content}
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
