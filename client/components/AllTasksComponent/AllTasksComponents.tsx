import React, { useEffect, useState } from "react";
import SearchComp from "../SegemanticComponents/SearchComp";
import TaskNav from "../TaskComponents/TaskNav";
import TaskSearchComponent from "./TaskSearchComponent";
import style from "../../styles/allTaskMain.module.scss";
import AllTaskList from "./AllTaskList";
import { useActions } from "../../hooks/useAction";
import Paginate from "../SegemanticComponents/Paginate";
import { GetMyTasksState } from "../../models/project";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const AllTasksComponent = ({ user }: { user: string }) => {
  const { getMyTasks } = useActions();
  const [status, setStatus] = useState(false);
  const [pageNumber, setPage] = useState<number>(1);

  const { data, loading }: GetMyTasksState = useTypedSelector(
    (state) => state.getMyTasks
  );

  useEffect(() => {
    console.log(status);
    getMyTasks("", status, user, "", pageNumber);
  }, [status, pageNumber]);

  return (
    <div className={style.allTaskMain}>
      <TaskSearchComponent setStatus={setStatus} />
      <AllTaskList />
      <Paginate count={data?.pages!} giveBack={setPage} />
    </div>
  );
};

export default AllTasksComponent;
