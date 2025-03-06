import React from "react";
import NavSearch from "./NavSearch";
import DropDownMenu from "./DropDownMenu";
import Cart from "./Cart";
import DarkMode from "./DarkMode";
import NavbarLogo from "./NavbarLogo";

function Navbar() {
  return (
    <div className="flex gap-1 p-4 border-b">
      <NavbarLogo />
      <div className="mx-auto">
        <NavSearch />
      </div>
      <div className="flex gap-1 items-center">
        <DarkMode />
        <DropDownMenu />
        <Cart />
      </div>
    </div>
  );
}

export default Navbar;
