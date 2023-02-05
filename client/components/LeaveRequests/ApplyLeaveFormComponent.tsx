import React, { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import SubmitButton from "../AddFormComponent/SubmitButton";
import style from "../../styles/addForm.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import { useActions } from "../../hooks/useAction";
import AddInputComp from "../AddFormComponent/AddInputComp";
import { GetSingleProjectState } from "../../models/project";
import { useApplyLeave } from "../../hooks/useToast";

const ApplyLeaveFormComponent = ({ setAdd }: { setAdd: any }) => {
  const { data }: GetSingleProjectState = useTypedSelector(
    (state) => state.singleProject
  );
  const { applyLeave } = useActions();
  const [reason, setReason] = useState<string>("");
  const [leaveDuration, setLeaveDuration] = useState<number>(1);
  const [startingDate, setStartingDate] = useState<Date>();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    useApplyLeave({ reason, leaveDuration, startingDate }, applyLeave, setAdd);
  };
  return (
    <div>
      <div className={style.addFormMain}>
        {" "}
        <i onClick={() => setAdd(false)}>
          <CancelIcon />
        </i>
        <h1>Apply Leave</h1>
        <form onSubmit={handleSubmit}>
          <div className={style.InputGroup}>
            <AddInputComp
              value={reason}
              text="Leave Reason"
              type="text"
              handler={setReason}
            />{" "}
            <AddInputComp
              value={startingDate}
              text="Starting Date"
              type="date"
              handler={setStartingDate}
            />
          </div>

          <div className={style.InputGroup}>
            <AddInputComp
              value={leaveDuration}
              text="Number of days"
              type="number"
              handler={setLeaveDuration}
            />
          </div>

          <SubmitButton submit={""} />
        </form>
      </div>
    </div>
  );
};

export default ApplyLeaveFormComponent;
