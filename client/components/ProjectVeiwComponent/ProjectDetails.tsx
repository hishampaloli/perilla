import React, { useEffect, useState } from "react";
import { useActions } from "../../hooks/useAction";
import { useCompleteProject } from "../../hooks/useToast";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { EmployeeAuthState } from "../../models/employee";
import { GetSingleProjectState } from "../../models/project";
import style from "../../styles/projectView.module.scss";
import AddButton from "../SegemanticComponents/AddButton";
import AddTaskComponent from "../TaskComponents/AddTaskComponent";
import TaskNav from "../TaskComponents/TaskNav";

const ProjectDetails = () => {
  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );

  const projectDt: GetSingleProjectState = useTypedSelector(
    (state) => state.singleProject
  );

  const { completeProject, AddTaskForm } = useActions();
  let projectData = projectDt.data?.data;
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    setStatus(projectData?.status!);
  }, []);
  return (
    <div className={style.projectLeftMain}>
      <div className={style.projectDetailsLeft}>
        <h2>{projectData?.projectName}</h2>

        <p>{projectData?.projectDescription}</p>

        {data?.id === projectData?.createdBy?.id && (
          <div>
            <select
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
                useCompleteProject(
                  e.target.value,
                  projectData?.id!,
                  completeProject
                );
              }}
              name="cars"
              id="cars"
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="dropped">Dropped</option>
            </select>
          </div>
        )}
      </div>
      <div>
        <h2 style={{ color: "#bbc4cc", marginTop: "30px" }}>Tasks</h2>{" "}
        <TaskNav type="project" />
        {data?.id === projectData?.createdBy.id && (
          <button
            onClick={() => {
              AddTaskForm(true);
            }}
            style={{
              padding: "10px",
              border: "none",
              backgroundColor: "#ff9b44",
              color: "white",
              marginLeft: "auto",
              cursor: "pointer",
            }}
          >
            Add Task
          </button>
        )}
        <AddTaskComponent />
      </div>
    </div>
  );
};

export default ProjectDetails;
