import React from "react";
import Spinner from "./SpinnerComponent";

const FixedSpinner = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "200px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Spinner />
    </div>
  );
};

export default FixedSpinner;
