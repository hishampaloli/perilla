import React, { useEffect } from "react";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GetAllProjectsState, ProjectData } from "../../models/project";
import style from "../../styles/projectPage.module.scss";
import ProjectBox from "./ProjectBox";

const ProjectListComponent = () => {
  const { getAllProjects } = useActions();
  const { data }: GetAllProjectsState = useTypedSelector(
    (state) => state.allProjects
  );

  useEffect(() => {
    getAllProjects("", "pending");
  }, []);

  return (
    <div className={style.projectList}>
      {data?.data.map((el: ProjectData) => {
        return <ProjectBox key={el.id} projectData={el} />;
      })}
    </div>
  );
};

export default ProjectListComponent;
