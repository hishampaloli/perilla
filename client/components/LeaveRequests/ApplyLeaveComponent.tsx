import React, { useState } from "react";
import style from "../../styles/leaveRequests.module.scss";
import AddButton from "../SegemanticComponents/AddButton";
import ApplyLeaveFormComponent from "./ApplyLeaveFormComponent";

const ApplyLeaveComponent = () => {
  const [add, setAdd] = useState(false);

  return (
    <div className={style.applyLeaveMain}>
      <AddButton text="Apply Leave" setAdd={setAdd} />
      {add && <ApplyLeaveFormComponent setAdd={setAdd} />}
    </div>
  );
};

export default ApplyLeaveComponent;
