import React from "react";

const Header = ({ title }) => {
  //   const headerColor = {
  //     backgroundColor: "mediumblue",
  //     color: "#fff",
  //   };
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Default Title",
};

export default Header;
