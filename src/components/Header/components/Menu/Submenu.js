import React from "react";

const Submenu = ({text, children}) => {
  return (
    <div className="dropdown pa3">
      <a href="#" className="dropbtn">
        {text}
      </a>
      <div className="dropdown-content">
        {children}
      </div>
    </div>
  );
};

export default Submenu;
