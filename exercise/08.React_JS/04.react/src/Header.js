import React from "react";

const Header = ({ title }) => {
  return (
    <React.Fragment>
      <header className="Header">
        <h1>{title}</h1>
      </header>
    </React.Fragment>
  );
};

export default Header;
