import React, { useEffect, useState } from "react";
import AddInputComp from "../AddFormComponent/AddInputComp";
import style from "../../styles/addForm.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import SubmitButton from "../AddFormComponent/SubmitButton";
import { useActions } from "../../hooks/useAction";
import { toast } from "react-hot-toast";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { EditProjectState, GetSingleTaskState } from "../../models/project";
import FixedSpinner from "../layout/FixedSpinner";
import { useEditTask } from "../../hooks/useToast";

const EditTaskComponent = ({ setEdit }: { setEdit: any }) => {
  const [taskName, setTaskName] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [priority, setPriority] = useState<string>("medium");
  const [startDate, setStartDate] = useState<any>();
  const [deadline, setDeadline] = useState<any>();

  const { data, loading }: GetSingleTaskState = useTypedSelector(
    (state) => state.singleTask
  );
  const taskData = data?.data;

  const { editTask } = useActions();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    useEditTask(
      { taskName, taskDescription, priority, startDate, deadline },
      taskData?.id!,
      editTask,
      setEdit
    );
  };

  useEffect(() => {
    setTaskName(taskData?.taskName!);
    setTaskDescription(taskData?.taskDescription!);
    setPriority(taskData?.priority!);
    setDeadline(taskData?.deadline!);
    setStartDate(taskData?.startDate!);
  }, []);
  return (
    <div className={style.addFormMain}>
      {" "}
      <i onClick={() => setEdit(false)}>
        <CancelIcon />
      </i>
      <h1>Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <div className={style.InputGroup}>
          <AddInputComp
            value={taskName}
            text="Task Name"
            type="text"
            handler={setTaskName}
          />
          <AddInputComp
            value={startDate}
            text="Start Date"
            type="date"
            handler={setStartDate}
          />
        </div>

        <div className={style.InputGroup}>
          <div className={style.selectDiv}>
            <label htmlFor="">Priority</label>
            <select onChange={(e) => setPriority(e.target.value)}>
              <option value="high">High</option>
              <option selected value="medium">
                Medium
              </option>
              <option value="low">Low</option>
            </select>
          </div>

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

        <SubmitButton submit={""} />
      </form>
      {loading && <FixedSpinner />}
    </div>
  );
};

export default EditTaskComponent;
