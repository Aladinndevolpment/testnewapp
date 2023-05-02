import { titleState } from "@/atoms/title";
import HomeComponents from "@/components/Home";
import Image from "next/image";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function Home() {
  const [title, setTitle] = useRecoilState<any>(titleState);
  const headingData = [
    {
      heading: "Dashboard",
      icon: "/images/icons/calendar.svg",
    },
  ];
  useEffect(() => {
    setTitle(headingData);
  }, []);

  return (
    <>
      <p> Main Dashboard</p>
    </>
  );
}
