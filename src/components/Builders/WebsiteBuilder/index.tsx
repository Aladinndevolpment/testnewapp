import React, { useState } from "react";
import Header from "./Header";
import Table from "./Table";

export default function WebsiteBuilder() {
  const [data, setData] = useState<any[]>([
    {
      site_name: {
        title: "Fikri Studio Landing Page",
        url: "fikristudio.com",
      },
      page_views: "29",
      options: "5",
      sales: "125",
      revenue:"24800",
      other: "",
    },
    {
      site_name: {
        title: "Fikri Studio Landing Page",
        url: "fikristudio.com",
      },
      page_views: "29",
      options: "5",
      sales: "125",
      revenue:"24800",
      other: "",
    },
    {
      site_name: {
        title: "Fikri Studio Landing Page",
        url: "fikristudio.com",
      },
      page_views: "29",
      options: "5",
      sales: "125",
      revenue:"24800",
      other: "",
    },
    {
      site_name: {
        title: "Fikri Studio Landing Page",
        url: "fikristudio.com",
      },
      page_views: "29",
      options: "5",
      sales: "125",
      revenue:"24800",
      other: "",
    },
    {
      site_name: {
        title: "Fikri Studio Landing Page",
        url: "fikristudio.com",
      },
      page_views: "29",
      options: "5",
      sales: "125",
      revenue:"24800",
      other: "",
    },

  ]);

  return (
    <div className="w-full ">
      <Header />
      <Table data={data} />
    </div>
  );
}
