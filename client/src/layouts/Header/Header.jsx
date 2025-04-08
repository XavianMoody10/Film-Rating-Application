import React, { useContext } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { SideNavigationContext } from "../../contexts/SideNavigationContext";

export const Header = () => {
  const { sideNavigationIsOpen, setSideNavigationIsOpen } = useContext(
    SideNavigationContext
  );

  return (
    <header className=" fixed top-0 w-full py-5 z-50">
      <div className=" bg-white flex justify-end rounded-sm w-[90%] max-w-[1700px] mx-auto">
        <Hamburger
          size={27}
          toggle={setSideNavigationIsOpen}
          toggled={sideNavigationIsOpen}
        />
      </div>
    </header>
  );
};
