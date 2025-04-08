import React, { useContext } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { SideNavigationContext } from "../../contexts/SideNavigationContext";

export const Header = () => {
  const { sideNavigationIsOpen, setSideNavigationIsOpen } = useContext(
    SideNavigationContext
  );

  return (
    <header className=" fixed top-0 w-full p-5">
      <div className=" bg-white w-full flex justify-end rounded-sm max-w-[1700px] mx-auto">
        <Hamburger
          size={27}
          toggle={setSideNavigationIsOpen}
          toggled={sideNavigationIsOpen}
        />
      </div>
    </header>
  );
};
