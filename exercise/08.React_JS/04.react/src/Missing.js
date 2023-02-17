import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <React.Fragment>
      <main className="Missing">
        <h2>Page Not Found</h2>
        <p>Well, that's disappointing.</p>
        <p>
          <Link to="/">Visit Our Homepage</Link>
        </p>
      </main>
    </React.Fragment>
  );
};

export default Missing;
