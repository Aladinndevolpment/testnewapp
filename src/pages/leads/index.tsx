import TabLeads from "@/components/Leads/TabLeads";
import Tabs from "@/components/UI/Tabs";
import Tabs2 from "@/components/UI/Tabs2";
import Image from "next/image";
import { MouseEventHandler, useState } from "react";

interface IAppointmentDetailsProps {
  visibility: boolean;
  onClose: MouseEventHandler;
}

export default function AppointmentDetails({
  visibility,
  onClose,
}: IAppointmentDetailsProps) {
  return (
    <div className="">
      <TabLeads />
    </div>
  );
}
