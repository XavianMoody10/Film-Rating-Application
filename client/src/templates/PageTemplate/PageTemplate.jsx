import React from "react";
import { Header } from "../../layouts/Header/Header";
import { SideNavigation } from "../../layouts/SideNavigation/SideNavigation";
import { Outlet } from "react-router-dom";

export const PageTemplate = () => {
  return (
    <>
      <Header />
      <SideNavigation />
      <Outlet />
    </>
  );
};
