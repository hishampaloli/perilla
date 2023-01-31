import React, { useState } from "react";
import style from "../../styles/projectPage.module.scss";
import SearchComp from "../SegemanticComponents/SearchComp";
import CreateProjectComponent from "./CreateProjectComponent";
import ProjectListComponent from "./ProjectListComponent";

const ProjectPageComp = () => {
  const [search, setSearch] = useState<string>("");
  
  const onSumbit = () => {};

  return (
    <div className={style.projectMain}>
      <CreateProjectComponent />
      <SearchComp
        placeholder="Project name"
        setClick={onSumbit}
        setKeys={setSearch}
      />
      <ProjectListComponent />
    </div>
  );
};

export default ProjectPageComp;
