import React, { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { EmployeeAuthState } from "../../models/employee";
import ProjectForm from "../ProjectPage/ProjectForm";
import AddButton from "../SegemanticComponents/AddButton";
import style from "../../styles/projectView.module.scss";
import EditProjectForm from "./EditForm";
import { EditProjectState } from "../../models/project";
import FixedSpinner from "../layout/FixedSpinner";

const EditProjectComponent = () => {
  const [create, setCreate] = useState<boolean>(false);

  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );

  const { loading }: EditProjectState = useTypedSelector(
    (state) => state.editProject
  );
  return (
    <div className={style.editProject}>
      {data?.role === "hr" && (
        <AddButton text="EDIT PROJECT" setAdd={setCreate} />
      )}
      {loading && <FixedSpinner />}
      {create && <EditProjectForm setEdit={setCreate} />}
    </div>
  );
};

export default EditProjectComponent;
