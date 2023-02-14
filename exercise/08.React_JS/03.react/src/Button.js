import React from "react";

const Button = ({ buttonText, reqType, setReqType }) => {
  return (
    <React.Fragment>
      <button
        className={buttonText === reqType ? "selected" : null}
        type="button"
        onClick={() => setReqType(buttonText)}
      >
        {buttonText}
      </button>
    </React.Fragment>
  );
};

export default Button;
