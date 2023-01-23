import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BallTriangle
        height={100}
        width={200}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>
  );
};

export default Spinner;
