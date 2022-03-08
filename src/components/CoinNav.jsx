import React from "react";
import logo from "../img/coincap.png";

const CoinNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid justify-content-center">
        <div>
          <img src={logo} alt="logo de coincap" className="img-logo" />
        </div>
      </div>
    </nav>
  );
};

export default CoinNav;
