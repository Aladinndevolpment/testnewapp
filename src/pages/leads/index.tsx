import TabLeads from "@/components/Leads/TabLeads";
import { GlobalContext } from "@/layouts/GlobalLayout";
import Image from "next/image";
import { MouseEventHandler, useContext, useState } from "react";

interface IAppointmentDetailsProps {
  visibility: boolean;
  onClose: MouseEventHandler;
}

export default function AppointmentDetails({
  visibility,
  onClose,
}: IAppointmentDetailsProps) {
  const ctx = useContext(GlobalContext);
  ctx.setTitle("Leads");

  return (
    <div className="bg-white md:h-auto pb-24 overflow-hidden ">
      <TabLeads />
    </div>
  );
}
