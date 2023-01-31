import React from "react";
import style from "../../styles/projectPage.module.scss";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { EmployeeData, ProjectData } from "../../models/project";
import Link from "next/link";

const ProjectBox = ({ projectData }: { projectData: ProjectData }) => {
  return (
    <div className={style.projectBox}>
      <h2>{projectData?.projectName}</h2>
      <p className={style.prP}>{projectData?.projectDescription}</p>

      <div>
        <strong>Priority :</strong>{" "}
        <p>
          <span
            style={{
              color:
                projectData.priority === "high"
                  ? "red"
                  : projectData.priority === "low"
                  ? "green"
                  : "#ff9b44",
            }}
          >
            <RadioButtonCheckedIcon />
          </span>
          {projectData?.priority}
        </p>{" "}
      </div>

      <div>
        <strong>Status :</strong>{" "}
        <p>
          <span
            style={{
              color:
                projectData.status === "pending"
                  ? "#ff9b44"
                  : projectData.status === "completed"
                  ? "green"
                  : "red",
            }}
          >
            <RadioButtonCheckedIcon />
          </span>{" "}
          {projectData?.status}
        </p>{" "}
      </div>

      <div>
        <strong>Starting date :</strong>{" "}
        <p>{projectData?.startDate?.toString()}</p>{" "}
      </div>

      <div>
        <strong>Teams: </strong>
        <div>
          {projectData.team.map((el: EmployeeData) => {
            console.log(el.companyName);

            return (
              <Link href={`/${el.companyName}/profile/employee/${el.phone}`}>
                <img src={el.image} alt="" />
              </Link>
            );
          })}{" "}
        </div>
      </div>

      <div style={{ marginTop: "-30px" }}>
        <strong>Created By :</strong>
        <div>
          <Link
            href={`/${projectData.companyName}/profile/employee/${projectData.createdBy.phone}`}
          >
            <img src={projectData.createdBy.image} alt="" />
          </Link>
        </div>
      </div>

      <div>
        <strong>Rate :</strong>
        <p>$ {projectData?.rate}.00</p>
      </div>
    </div>
  );
};

export default ProjectBox;
