import React, { useEffect, useState } from "react";
import SearchComp from "../SegemanticComponents/SearchComp";
import style from "../../styles/projectPage.module.scss";
import { EmployeeAuthState } from "../../models/employee";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GetAllProjectsState } from "../../models/project";
import { useActions } from "../../hooks/useAction";

const ProjectSearchComponent = () => {
  const [search, setSearch] = useState<string>("");
  const { getAllProjects, getMyProjects } = useActions();
  const { data, error, loading }: GetAllProjectsState = useTypedSelector(
    (state) => state.allProjects
  );

  const [status, setStatus] = useState<string>("pending");

  const employeeData: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );

  const onSumbit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    
    if (employeeData.data?.role === "employees") {
      getAllProjects("", { status, type: "employee", name: search });
    } else {
      getAllProjects("", { status, type: "hr", name: search });
    }
  };

  useEffect(() => {
    if (employeeData.data?.role === "employees") {
      getAllProjects("", { status, type: "employee", name: search });
    } else {
      getAllProjects("", { status, type: "hr", name: search });
    }
  }, [status]);

  return (
    <div className={style.projectSearch}>
      <SearchComp
        placeholder="Project name"
        setClick={onSumbit}
        setKeys={setSearch}
      />
      <select onChange={(e) => setStatus(e.target.value)} name="cars" id="cars">
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
        <option value="dropped">Dropped</option>
      </select>
    </div>
  );
};

export default ProjectSearchComponent;
