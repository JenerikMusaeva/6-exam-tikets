import React from "react";
import logo from "../images/Logo.svg";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt={"logo"} />
    </div>
  );
}

export default Header;
