import React, { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AddTaskFormState } from "../../models/custom";
import SubmitButton from "../AddFormComponent/SubmitButton";
import style from "../../styles/addForm.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import { useActions } from "../../hooks/useAction";
import AddInputComp from "../AddFormComponent/AddInputComp";
import AssignEmployeeComponent from "./AssignEmployeeComponent";
import { useAddTask } from "../../hooks/useToast";
import { GetSingleProjectState } from "../../models/project";

const AddTaskComponent = () => {
  const { showForm }: AddTaskFormState = useTypedSelector(
    (state) => state.addTaskForm
  );

  const { data }: GetSingleProjectState = useTypedSelector(
    (state) => state.singleProject
  );
  const [taskName, setTaskName] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [priority, setPriority] = useState<string>("medium");
  const [startDate, setStartDate] = useState<Date>();
  const [deadline, setDeadline] = useState<Date>();

  const [teamData, setTeamData] = useState<any>();
  const { AddTaskForm, addTask } = useActions();

  console.log(data?.data.id);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await useAddTask(
      {
        taskName,
        taskDescription,
        priority,
        assignedTo: teamData?.id,
        startDate,
        deadline,
        project: data?.data?.id,
      },
      addTask
    );

    if (res) {
      AddTaskForm(false);
      setTaskDescription("");
      setTaskName("");
      setTeamData("");
    }
  };
  return (
    <div>
      {showForm && (
        <div className={style.addFormMain}>
          {" "}
          <i onClick={() => AddTaskForm(false)}>
            <CancelIcon />
          </i>
          <h1>Add Task</h1>
          <form onSubmit={handleSubmit}>
            <div className={style.InputGroup}>
              <AddInputComp
                value={taskName}
                text="Project Name"
                type="text"
                handler={setTaskName}
              />

              <div className={style.selectDiv}>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  style={{ marginTop: "25px" }}
                  name="cars"
                  id="cars"
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>

            <div className={style.InputGroup}>
              <AddInputComp
                value={startDate}
                text="Starting Date"
                type="date"
                handler={setStartDate}
              />

              <AddInputComp
                value={deadline}
                text="Deadline"
                type="date"
                handler={setDeadline}
              />
            </div>

            <div className={style.textArea}>
              <label htmlFor="">Task Description</label>
              <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                name=""
                id=""
              />
            </div>

            <AssignEmployeeComponent
              teamData={teamData}
              setTeamData={setTeamData}
            />

            <label htmlFor=""></label>
            <SubmitButton submit={""} />
          </form>
        </div>
      )}
    </div>
  );
};

export default AddTaskComponent;
