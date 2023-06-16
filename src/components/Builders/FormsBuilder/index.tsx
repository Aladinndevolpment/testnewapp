import React, { useState } from "react";
import Header from "./Header";
import Table from "./Table";

export default function FormsBuilder() {
  const [data, setData] = useState<any[]>([
    {
      name: "Form One",
      status: "Published",
      created_by: "Darlene Robertson",
      created_date: "12 June 2023",
      published_date: "12 June 2023",
      other: "",
    },
    {
      name: "Form One",
      status: "Scheduled",
      created_by: "Darlene Robertson",
      created_date: "12 June 2023",
      published_date: "12 June 2023",
      other: "",
    },
    {
      name: "Form One",
      status: "Archived",
      created_by: "Darlene Robertson",
      created_date: "12 June 2023",
      published_date: "12 June 2023",
      other: "",
    },
    {
      name: "Form One",
      status: "Scheduled",
      created_by: "Darlene Robertson",
      created_date: "12 June 2023",
      published_date: "12 June 2023",
      other: "",
    },
    {
      name: "Form One",
      status: "Archived",
      created_by: "Darlene Robertson",
      created_date: "12 June 2023",
      published_date: "12 June 2023",
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
