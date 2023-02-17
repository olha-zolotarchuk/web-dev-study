import React from "react";

const Footer = () => {
  const today = new Date();
  return (
    <React.Fragment>
      <footer className="Footer">
        <p>Copyright &copy; {today.getFullYear()}</p>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
