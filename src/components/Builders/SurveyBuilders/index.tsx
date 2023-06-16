import React, { useState } from "react";
import Header from "./Header";
import Table from "./Table";

export default function SurveyBuilders() {
  const [data, setData] = useState<any[]>([
    {
      name: "Survey ",
      status: "Published",
      created_by: "Darlene Robertson",
      created_date: "12 June 2023",
      published_date: "12 June 2023",
      other: "",
    },
    {
      name: "Survey 1",
      status: "Scheduled",
      created_by: "Darlene Robertson",
      created_date: "12 June 2023",
      published_date: "12 June 2023",
      other: "",
    },
    {
      name: "Survey 2",
      status: "Archived",
      created_by: "Darlene Robertson",
      created_date: "12 June 2023",
      published_date: "12 June 2023",
      other: "",
    },
    {
      name: "Survey 3",
      status: "Scheduled",
      created_by: "Darlene Robertson",
      created_date: "12 June 2023",
      published_date: "12 June 2023",
      other: "",
    },
    {
      name: "Survey 4",
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
