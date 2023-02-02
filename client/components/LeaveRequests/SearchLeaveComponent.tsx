import React, { useState } from "react";
import style from "../../styles/leaveRequests.module.scss";
import SearchComp from "../SegemanticComponents/SearchComp";

const SearchLeaveComponent = () => {
  const [status, setStatus] = useState<string>("");
  return (
    <div className={style.leaveSearch}>
      <SearchComp
        setClick={""}
        setKeys={""}
        placeholder="Search leave by employee"
      />

      <select
        onChange={(e) => {
          setStatus(e.target.value);
          console.log(e.target.value);
        }}
      >
        <option value="pending">Pending</option>
        <option value="accepted">Accepted</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  );
};

export default SearchLeaveComponent;
