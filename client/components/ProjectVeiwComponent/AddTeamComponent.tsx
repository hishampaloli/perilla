import Link from "next/link";
import React, { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { EmployeeAuthData, EmployeeAuthState } from "../../models/employee";
import {
  EmployeeData,
  GetSingleProjectState,
  ProjectData,
} from "../../models/project";
import style from "../../styles/projectView.module.scss";
import AddTeamForm from "./AddTeamForm";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDeleteTeamFromProject } from "../../hooks/useSwal";
import { useActions } from "../../hooks/useAction";
import { useRouter } from "next/router";

const AddTeamComponent = ({ teamData }: { teamData: any }) => {
  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );

  const projectData: GetSingleProjectState = useTypedSelector(
    (state) => state.singleProject
  );

  const router = useRouter();
  const { project } = router.query;
  const { removeTeamFromProject } = useActions();
  const [addTeam, setAddTeam] = useState<boolean>(false);

  return (
    <div className={style.addTeam}>
      <div className={style.addSt}>
        <h3>Add Team</h3>
        {data?.id === projectData.data?.data?.createdBy?.id && (
          <button onClick={() => setAddTeam(!addTeam)}>Add</button>
        )}
      </div>

      {addTeam && <AddTeamForm projectId={project} setEdit={setAddTeam} />}

      <div className={style.teamListDiv}>
        {teamData?.map((el: EmployeeData) => {
          return (
            <div className={style.teamListHl}>
              <Link
                href={`/${el?.companyName}/profile/employee/${el?.phone}`}
                className={style.teamList}
              >
                <img src={el?.image} alt="" />
                <div>
                  <h4>{el?.name}</h4>
                  <p>{el?.email}</p>
                </div>
              </Link>{" "}
              <span
                onClick={() => {
                  useDeleteTeamFromProject(
                    el?.id,
                    project!,
                    removeTeamFromProject
                  );
                }}
              >
                {data?.id === projectData.data?.data.createdBy.id && (
                  <DeleteOutlineIcon />
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddTeamComponent;
