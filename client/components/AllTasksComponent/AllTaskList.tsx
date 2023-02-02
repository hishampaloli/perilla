import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GetMyTasksState, TaskData } from "../../models/project";
import style from "../../styles/allTaskMain.module.scss";
import Spinner from "../layout/SpinnerComponent";
import TaskBox from "./TaskBox";

const AllTaskList = () => {
  const { data, loading }: GetMyTasksState = useTypedSelector(
    (state) => state.getMyTasks
  );
  return (
    <div className={style.allTaskList}>
      {loading && <Spinner />}
      {data?.data.map((task: TaskData) => {
        return <TaskBox taskData={task} />;
      })}
    </div>
  );
};

export default AllTaskList;
