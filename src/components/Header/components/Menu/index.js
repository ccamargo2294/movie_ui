import React from "react";

import "./menu.css";

const Menu = ({ children }) => {
  return (
    <div className="navbar pl5 flex flex-row items-center">{children}</div>
  );
};

export default Menu;
