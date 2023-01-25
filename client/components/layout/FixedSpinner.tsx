import React from "react";
import Spinner from "./SpinnerComponent";

const FixedSpinner = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        top: "0",
        left: "0",
        right: "0",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.403)",
      }}
    >
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
    </div>
  );
};

export default FixedSpinner;
