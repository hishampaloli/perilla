import React, { useState } from "react";
import style from "../../styles/taskView.module.scss";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import Link from "next/link";
import { EmployeeAuthState } from "../../models/employee";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AuthState } from "../../models/tenants";
import { TaskData } from "../../models/project";
import { useActions } from "../../hooks/useAction";
import { useApproveTask, useTaskApproval } from "../../hooks/useToast";

const TaskDetailsLeft = ({ taskData }: { taskData: TaskData }) => {
  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );

  const tenantData: AuthState = useTypedSelector((state) => state.user);

  const { approvedTask, requestTaskApproval } = useActions();

  return (
    <div className={style.taskDetailsLeftMain}>
      <div className={style.taskDetailsLeft}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
          }}
        >
          <h2>{taskData?.taskName}</h2>
          <Link href={`/${data?.companyName}/project/${taskData?.project}`}>
            view project
          </Link>
        </div>

        <p>{taskData?.taskDescription}</p>

        <div className={style.detDiv}>
          <div>
            {" "}
            <strong>Priority : </strong>
            <p>
              {" "}
              <span
                style={{
                  color:
                    taskData?.priority === "high"
                      ? "red"
                      : taskData?.priority === "low"
                      ? "green"
                      : "#ff9b44",
                  transform: "scale(.7)",
                }}
              >
                <RadioButtonCheckedIcon />
              </span>
              Meduim
            </p>
          </div>

          <div>
            <strong>Start Date :</strong>

            <p>{taskData?.startDate?.slice(0, 10)}</p>
          </div>

          <div>
            <strong>Dead line :</strong>
            <p>{taskData?.deadline?.slice(0, 10)}</p>
          </div>
        </div>
      </div>
      <div className={style.leftDivBtnGr}>
        {data?.role === "hr" && !tenantData.data?.data.adminName ? (
          <>
            {!taskData?.isApproved && (
              <button
                onClick={() => {
                  useApproveTask(taskData.id, true, approvedTask);
                }}
                style={{ backgroundColor: "#51d293" }}
              >
                Approve
              </button>
            )}

            <button
              onClick={() => {
                useApproveTask(taskData.id, false, approvedTask);
              }}
              style={{ backgroundColor: "#ec4134" }}
            >
              Reject
            </button>
          </>
        ) : (
          <>
            {!tenantData.data?.data.adminName &&
              !taskData?.isApproved &&
              !taskData?.isCompleted &&
              data?.id === taskData?.assignedTo?.id && (
                <button
                  onClick={() => {
                    useTaskApproval(taskData.id, requestTaskApproval);
                  }}
                >
                  Sent for Approval
                </button>
              )}
          </>
        )}
      </div>
    </div>
  );
};

export default TaskDetailsLeft;
