import DashboardManager from "@/components/Dashboard/PublishDashboard/DashboardManager";

import React, { useContext } from "react";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import store from "@/redux/Index";
import { GlobalContext } from "@/layouts/GlobalLayout";

const MainDashboard = dynamic(
  () => import("@/components/Dashboard/Header/Maindashboard"),
  { ssr: false }
);

export default function DashboardBuilder() {
  const ctx = useContext(GlobalContext);
  ctx.setTitle("Dashboard Builder");

  return (
    <Provider store={store}>
      <MainDashboard />
    </Provider>
  );
}
