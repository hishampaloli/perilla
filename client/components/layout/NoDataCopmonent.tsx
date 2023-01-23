import React from "react";

const NoDataCopmonent = ({ text }: { text: string }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <h1>{text}</h1>
      <img
        style={{ width: "400px" }}
        src="https://res.cloudinary.com/dpiah7oyh/image/upload/v1674465625/no-data-empty-data-concept-vector-41830412-removebg-preview_1_jbzco0.png"
        alt=""
      />
    </div>
  );
};

export default NoDataCopmonent;
