import React, { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { EmployeeAuthState } from "../../models/employee";
import style from "../../styles/projectPage.module.scss";
import AddButton from "../SegemanticComponents/AddButton";
import ProjectForm from "./ProjectForm";

const CreateProjectComponent = () => {
  const [create, setCreate] = useState<boolean>(false);

  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );
  return (
    <div className={style.createProject}>
      {data?.role === "hr" && (
        <AddButton text="CREATE PROJECT" setAdd={setCreate} />
      )}

      {create && <ProjectForm setEdit={setCreate} />}
    </div>
  );
};

export default CreateProjectComponent;
