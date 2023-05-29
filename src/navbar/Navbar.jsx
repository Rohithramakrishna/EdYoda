import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Auth from "./Auth";

const Navbar = () => {
  return (
    <header className="navBar">
      <Logo />
      <Menu />
      <Auth />
    </header>
  );
};

export default Navbar;
