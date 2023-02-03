import React from "react";

import Pagination from "@mui/material/Pagination";

const Paginate = ({ count, giveBack }: { count: number; giveBack: any }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
      }}
    >
      <Pagination
        count={count ? count : 1}
        color="primary"
        variant="outlined"
        onClick={(e: any) => {
          giveBack(e.target.textContent);
        }}
        shape="rounded"
        style={{
          backgroundColor: "#2e3439",
          borderRadius: "5px",
          padding: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      />
    </div>
  );
};

export default Paginate;
