import React, { useState } from "react";
import Header from "./Header";
import Table from "./Table";

export default function WebsiteBuilder() {
  const [data, setData] = useState<any[]>([
    {
      pages_url: {
        title: "Fikri Studio Landing Page",
        url: "fikristudio.com",
      },
      status: "Published",
      created_by: "Darlene Robertson",
      created_date: "12 June 2023",
      published_date: "12 June 2023",
      other: "",
    },
    {
      pages_url: {
        title: "Fikri Studio Landing Page",
        url: "fikristudio.com",
      },
      status: "Scheduled",
      created_by: "Darlene Robertson",
      created_date: "12 June 2023",
      published_date: "12 June 2023",
      other: "",
    },
    {
      pages_url: {
        title: "Fikri Studio Landing Page",
        url: "fikristudio.com",
      },
      status: "Archived",
      created_by: "Darlene Robertson",
      created_date: "12 June 2023",
      published_date: "12 June 2023",
      other: "",
    },
    {
      pages_url: {
        title: "Fikri Studio Landing Page",
        url: "fikristudio.com",
      },
      status: "Scheduled",
      created_by: "Darlene Robertson",
      created_date: "12 June 2023",
      published_date: "12 June 2023",
      other: "",
    },
    {
      pages_url: {
        title: "Fikri Studio Landing Page",
        url: "fikristudio.com",
      },
      status: "Archived",
      created_by: "Darlene Robertson",
      created_date: "12 June 2023",
      published_date: "12 June 2023",
      other: "",
    },
  ]);

  return (
    <div>
      <Header />
      <Table data={data} />
    </div>
  );
}
