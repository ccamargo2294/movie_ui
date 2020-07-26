import React from "react";

import Logo from "./components/Logo";
import LogoImg from "../../assets/img/logo.png";
import Menu from "./components/Menu";
import MenuItem from "./components/Menu/MenuItem";
import Submenu from "./components/Menu/Submenu";
import './header.css'

const Header = () => {
  return (
    <div className="header w-100 pt3 pb3 pr5 pl5 flex flex-row">
      <Logo logo={LogoImg} width="auto" height="100%" />

      <Menu>
        <MenuItem href="#" text="Home" />
        <MenuItem href="#" text="News" />
        <Submenu text="Dropdown">
          <MenuItem href="#" text="Link 1" />
          <MenuItem href="#" text="Link 2" />
          <MenuItem href="#" text="Link 3" />
        </Submenu>
      </Menu>
    </div>
  );
};

export default Header;
