import React from "react";
import { LeaveData } from "../../models/Leave";
import style from "../../styles/leaveView.module.scss";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import LeaveButtonsGroup from "./LeaveButtonsGroup";

const LeaveViewLeft = ({ leaveData }: { leaveData: any }) => {
  return (
    <div className={style.leaveLeftMain}>
      <div className={style.leaveViewLeft}>
        <h2>Leave Reason</h2>

        <div className={style.detDivs}>
          <div>
            <strong>Start Date :</strong> <p>34-34-24</p>
          </div>

          <div>
            <strong>Leave Days :</strong> <p>3</p>
          </div>

          <div>
            {" "}
            <strong>Priority : </strong>
            <p>
              {" "}
              <span
                style={{
                  color:
                    leaveData?.isAccepted === "rejected"
                      ? "red"
                      : leaveData?.isAccepted === "accepted"
                      ? "green"
                      : "#ff9b44",
                  transform: "scale(.7)",
                }}
              >
                <RadioButtonCheckedIcon />
              </span>
              {leaveData?.isAccepted}
            </p>
          </div>
        </div>
      </div>
      <LeaveButtonsGroup />
    </div>
  );
};

export default LeaveViewLeft;
