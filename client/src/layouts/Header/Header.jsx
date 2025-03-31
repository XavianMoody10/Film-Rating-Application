import React, { useContext } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { SideNavigationContext } from "../../context/SideNavigationProvider";

export const Header = () => {
  const { sideNavigationIsOpen, setSideNavigationIsOpen } = useContext(
    SideNavigationContext
  );

  return (
    <header className=" fixed top-0 w-full py-5">
      <div className=" bg-[#F2F2F2] w-[90%] max-w-[1500px] mx-auto flex items-center justify-end rounded-sm px-2">
        <Hamburger
          size={25}
          toggle={setSideNavigationIsOpen}
          toggled={sideNavigationIsOpen}
        />
      </div>
    </header>
  );
};
