import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GetAllTaskUnderProjectState, TaskData } from "../../models/project";
import style from "../../styles/task.module.scss";
import NoDataCopmonent from "../layout/NoDataCopmonent";
import Spinner from "../layout/SpinnerComponent";
import TaskList from "./TaskList";

const CompletedTask = () => {
  const { data, loading }: GetAllTaskUnderProjectState = useTypedSelector(
    (state) => state.getTaskUnderProjects
  );

  const router = useRouter();
  const { project } = router.query;
  console.log(project);

  const { getTaskUnderProject } = useActions();
  useEffect(() => {
    getTaskUnderProject("sd", project!, true);
  }, []);
  return (
    <div className={style.completedTaskMain}>
      {loading && <Spinner />}
      {!loading && !data?.data.length && (
        <NoDataCopmonent text="No Tasks Found" />
      )}
      {data?.data.map((el: TaskData) => {
        return <TaskList taskData={el} />;
      })}
    </div>
  );
};

export default CompletedTask;
