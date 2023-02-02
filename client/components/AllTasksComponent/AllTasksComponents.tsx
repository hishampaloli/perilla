import React, { useEffect, useState } from "react";
import SearchComp from "../SegemanticComponents/SearchComp";
import TaskNav from "../TaskComponents/TaskNav";
import TaskSearchComponent from "./TaskSearchComponent";
import style from "../../styles/allTaskMain.module.scss";
import AllTaskList from "./AllTaskList";
import { useActions } from "../../hooks/useAction";

const AllTasksComponent = ({ user }: { user: string }) => {
  const { getMyTasks } = useActions();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    console.log(status);
    getMyTasks("", status, user);
  }, [status]);
  return (
    <div className={style.allTaskMain}>
      <TaskSearchComponent setStatus={setStatus} />
      <AllTaskList />
    </div>
  );
};

export default AllTasksComponent;
