import React from "react";

const Submenu = ({text, children}) => {
  return (
    <div className="dropdown pa3">
      <a href="#" class="dropbtn">
        {text}
      </a>
      <div className="dropdown-content">
        {children}
      </div>
    </div>
  );
};

export default Submenu;
