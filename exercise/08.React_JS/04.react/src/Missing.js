import React from "react";
import { Link } from "react-router-dom";

const Missing = ({ title }) => {
  return (
    <React.Fragment>
      <main className="Missing">
        <h2>{title}</h2>
        <p>Well, that's disappointing.</p>
        <p>
          <Link to="/">Visit Our Homepage</Link>
        </p>
      </main>
    </React.Fragment>
  );
};

export default Missing;
