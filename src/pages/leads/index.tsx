import TabLeads from "@/components/Leads/TabLeads";
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
    <div className="bg-white">
      <TabLeads />
    </div>
  );
}
