import Link from "next/link";
import React, { useEffect } from "react";
import style from "../../styles/profile.module.scss";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { EmployeeData } from "../../models/admin";
import { GetMyProjectsState } from "../../models/project";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import {
  GetClientProfileState,
  GetEmployeeProfileState,
} from "../../models/profile";
import { GetMyProfileState } from "../../models/employee";
import Spinner from "../layout/SpinnerComponent";
import NoDataCopmonent from "../layout/NoDataCopmonent";

const ProjectBox = ({ type }: { type: string }) => {
  const { data, loading }: GetMyProjectsState = useTypedSelector(
    (state) => state.getMyProjects
  );

  const getEml: GetEmployeeProfileState = useTypedSelector(
    (state) => state.employeeProfile
  );

  const employeeProfile: GetMyProfileState = useTypedSelector(
    (state) => state.myProfile
  );

  const clientData: GetClientProfileState = useTypedSelector(
    (state) => state.clientProfile
  );

  const employeeData = employeeProfile?.data?.data
    ? employeeProfile?.data?.data
    : getEml.data?.data;

  const { getMyProjects } = useActions();

  useEffect(() => {
    console.log(employeeData?._id);

    if (type === "employee") {
      getMyProjects("s", employeeData?._id!, "employee");
    }

    if (type === "client") {
      getMyProjects("s", clientData.data?.data?.id!, "client");
    }
  }, []);
  return (
    <div className={style.projectList}>
      {loading && <Spinner />}
      {!loading && !data?.data.length && <NoDataCopmonent text="No Project Found" />}
      {data?.data?.map((projectData: any) => {
        return (
          <div className={style.projectBox}>
            <Link
              href={`/${projectData?.companyName}/project/${projectData.id}`}
            >
              <h2>{projectData?.projectName}</h2>
            </Link>

            <p className={style.prP}>
              {projectData?.projectDescription?.slice(0, 100)}...
            </p>

            <div>
              <strong>Priority :</strong>{" "}
              <p style={{ marginTop: "5px" }}>
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
              </p>{" "}
            </div>

            <div>
              <strong>Status :</strong>{" "}
              <p style={{ marginTop: "5px" }}>
                <span
                  style={{
                    color:
                      projectData?.status === "pending"
                        ? "#ff9b44"
                        : projectData?.status === "completed"
                        ? "green"
                        : "red",
                    transform: "scale(.7)",
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
                {projectData?.team?.map((el: EmployeeData) => {
                  console.log(el?.companyName);

                  return (
                    <Link
                      href={`/${el?.companyName}/profile/employee/${el?.phone}`}
                    >
                      <img src={el?.image} alt="" />
                    </Link>
                  );
                })}{" "}
              </div>
            </div>

            <div style={{ marginTop: "-30px" }}>
              <strong>Created By :</strong>
              <div>
                <Link
                  href={`/${projectData?.companyName}/profile/employee/${projectData?.createdBy?.phone}`}
                >
                  <img src={projectData?.createdBy?.image} alt="" />
                </Link>
              </div>
            </div>

            <div>
              <strong>Rate :</strong>
              <p>$ {projectData?.rate}.00</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectBox;
