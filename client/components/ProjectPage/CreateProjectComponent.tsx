import React, { useState } from "react";
import style from "../../styles/projectPage.module.scss";
import AddButton from "../SegemanticComponents/AddButton";
import ProjectForm from "./ProjectForm";

const CreateProjectComponent = () => {
  const [create, setCreate] = useState<boolean>(false);
  return (
    <div className={style.createProject}>
     <AddButton text="CREATE PROJECT" setAdd={setCreate} />
      {create && <ProjectForm setEdit={setCreate} />}
    </div>
  );
};

export default CreateProjectComponent;
