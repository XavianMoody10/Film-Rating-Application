import React, { createContext, useState } from "react";

export const SideNavigationContext = createContext();

export const SideNavigationProvider = ({ children }) => {
  const [sideNavigationIsOpen, setSideNavigationIsOpen] = useState(false);

  return (
    <SideNavigationContext.Provider
      value={{ sideNavigationIsOpen, setSideNavigationIsOpen }}
    >
      {children}
    </SideNavigationContext.Provider>
  );
};
