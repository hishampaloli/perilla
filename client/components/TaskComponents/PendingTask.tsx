import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GetAllTaskUnderProjectState, TaskData } from "../../models/project";
import style from "../../styles/task.module.scss";
import NoDataCopmonent from "../layout/NoDataCopmonent";
import Spinner from "../layout/SpinnerComponent";
import TaskList from "./TaskList";

const PendingTask = () => {
  const { data, loading }: GetAllTaskUnderProjectState = useTypedSelector(
    (state) => state.getTaskUnderProjects
  );

  const router = useRouter();
  const { project } = router.query;

  const { getTaskUnderProject } = useActions();
  useEffect(() => {
    if (router.isReady) getTaskUnderProject("sd", project!, false);
  }, [router.isReady]);
  return (
    <div className={style.pendingTaskMain}>
      {loading && <Spinner />}
      {!loading && !data?.data.length && <NoDataCopmonent text="No Tasks Found" />}
      {data?.data.map((el: TaskData) => {
        return <TaskList taskData={el} />;
      })}
    </div>
  );
};

export default PendingTask;
