import React from "react";
import style from "../../styles/projectView.module.scss";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import Link from "next/link";
import AddTeamComponent from "./AddTeamComponent";
import { ProjectData } from "../../models/project";

const ProjectInfo = ({ projectData }: { projectData: ProjectData }) => {
  return (
    <div className={style.projectInfo}>
      <h3>Project Details</h3>

      <div className={style.infoDiv}>
        <div className={style.infoDivWhite}></div>
        <div className={style.infoDivBlack}>
          <strong>Start Date</strong>
          <p>{projectData?.startDate?.toString().slice(0,10)}</p>
        </div>
        <div className={style.infoDivWhite}></div>
        <div className={style.infoDivBlack}>
          <strong>Priority</strong>
          <p>
            {" "}
            <span
              style={{
                color:
                  projectData?.priority === "high"
                    ? "red"
                    : projectData?.priority === "low"
                    ? "green"
                    : "#ff9b44",
                transform: "scale(.7)",
              }}
            >
              <RadioButtonCheckedIcon />
            </span>
            {projectData?.priority}
          </p>
        </div>
        <div className={style.infoDivWhite}></div>
        <div className={style.infoDivBlack}>
          <strong>Rate</strong>
          <p>$ {projectData?.rate}.00</p>
        </div>

        <div className={style.infoDivWhite}></div>
        <div className={style.infoDivBlack}>
          <strong>CreatedBy</strong>
          <Link
            href={`/${projectData?.companyName}/profile/employee/${projectData?.createdBy?.phone}`}
          >
            {projectData?.createdBy?.name}
          </Link>
        </div>

        <div className={style.infoDivWhite}></div>
        <div className={style.infoDivBlack}>
          <strong>Status</strong>
          <p>
            {" "}
            <span
              style={{
                color:
                  projectData?.status === "high"
                    ? "red"
                    : projectData?.status === "low"
                    ? "green"
                    : "#ff9b44",
                transform: "scale(.7)",
              }}
            >
              <RadioButtonCheckedIcon />
            </span>
            {projectData?.status}
          </p>
        </div>
        <div className={style.infoDivWhite}></div>
      </div>
    </div>
  );
};

export default ProjectInfo;
