import Center from "@/components/contacts/Center";
import RightSidebar from "@/components/contacts/RightSidebar";
import LeftSidebar from "@/components/contacts/LeftSidebar";
import { GetServerSidePropsContext } from "next";
import { EContactType, IContactData } from "@/components/contacts/Interfaces";
import axios from "axios";
import Head from "next/head";
import { useState } from "react";

interface IProps {
  data: IContactData;
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { id } = ctx.query;

  const token = process.env.NEXT_PUBLIC_API_TOKEN;
  // const token = ctx.req.cookies.jwt;
  // if (!token) {
  //   return {
  //     redirect: {
  //       destination: '/login',
  //       permanent: false,
  //     },
  //   };
  // }

  const res: IContactData = {
    contact: {
      id: "",
      owner: {
        id: "",
        fullName: "",
      },
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      status: "",
      addedOn: "",
      contactType: EContactType.LEAD,
      tags: [],
      leadSources: [],
    },
    contactProfile: {
      contactID: "",
      dateOfBirth: "",
      dateOfInjury: "",
      ssn: "",
    },
    contactAddress: {
      contactID: "",
      street: "",
      city: "",
      region: "",
      postalCode: "",
      country: "",
    },
  };

  await axios
    .get(`/api/contacts/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      console.log("response.data", response.data);
      res.contact = response.data.contact;
    })
    .catch((err) => {
      console.log(err);
    });

  if (res.contact.id === "") {
    return {
      notFound: true,
    };
  }

  await axios
    .get(`/api/contacts/${id}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      console.log("response.data", response.data);
      res.contactProfile = response.data;
    })
    .catch((err) => {
      console.log(err);
    });

  await axios
    .get(`/api/contacts/${id}/address`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      console.log("response.data", response.data);
      res.contactAddress = response.data;
    })
    .catch((err) => {
      console.log(err);
    });

  // await axios.get(`/api/contacts/${id}/address`, {
  //   headers: { Authorization: `Bearer ${token}` }
  // }).then((response) => {
  //   console.log("response.data", response.data)
  //   res.data.contactAddress = response.data
  // }).catch((err) => {
  //   res.data = err
  // })

  return {
    props: {
      data: res,
    },
  };
}

export default function ContactsID({ data }: IProps) {
  const [showConversation, setShowConversation] = useState(false);
  const [conversationModeIndex, setConversationModeIndex] = useState(0);

  return (
    <>
      <Head>
        <title>{data.contact.fullName} - Contacts | Emerge</title>
      </Head>
      <div className="h-full w-full bg-white text-black overflow-hidden flex relative font-main">
        <div className="w-full h-full flex flex-wrap overflow-x-hidden overflow-hidden z-10">
          <div className="w-full md:w-[22%] h-full bg-white">
            <LeftSidebar
              setShowConversation={setShowConversation}
              setConversationModeIndex={setConversationModeIndex}
              data={data}
            />
          </div>
          <div className="w-full md:w-[52%] h-full bg-mainBg md:border-l md:border-l-gray-200 md:border-r md:border-r-gray-200">
            <Center
              data={data}
              showConversation={showConversation}
              setShowConversation={setShowConversation}
              conversationModeIndex={conversationModeIndex}
              setConversationModeIndex={setConversationModeIndex}
            />
          </div>
          <div className="w-full md:w-[26%] h-full bg-white">
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
}
