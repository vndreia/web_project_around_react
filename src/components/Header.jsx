import React from "react";
import LogoHeader from "../images/logo.svg.svg";

const Header = () => {
  return (
    <>
      <header className="header">
        <img
          src={LogoHeader}
          className="header__logo"
          alt="Around the world logo"
        />
      </header>
    </>
  );
};

export default Header;
