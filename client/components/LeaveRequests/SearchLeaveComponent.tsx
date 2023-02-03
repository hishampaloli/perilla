import React, { useEffect, useState } from "react";
import { useActions } from "../../hooks/useAction";
import style from "../../styles/leaveRequests.module.scss";
import SearchComp from "../SegemanticComponents/SearchComp";

const SearchLeaveComponent = ({ type }: { type: string }) => {
  const [status, setStatus] = useState<string>("pending");
  const { getLeaveRequests,getMyLeaves } = useActions();
  useEffect(() => {
    if (type === "admin") {
      getLeaveRequests("", status);
    }else {
      getMyLeaves("", status);
    }
  }, [status]);

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
