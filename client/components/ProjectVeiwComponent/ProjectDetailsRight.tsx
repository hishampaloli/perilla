import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GetSingleProjectState } from "../../models/project";
import style from "../../styles/projectView.module.scss";
import AddTeamComponent from "./AddTeamComponent";
import ProjectInfo from "./ProjectInfo";

const ProjectDetailsRight = () => {
  const { data }: GetSingleProjectState = useTypedSelector(
    (state) => state.singleProject
  );

  return (
    <div className={style.projectDetailsRight}>
      <ProjectInfo projectData={data?.data!} />
      <AddTeamComponent teamData={data?.data?.team} />
    </div>
  );
};

export default ProjectDetailsRight;
