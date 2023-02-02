import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GetSingleTaskState } from "../../models/project";
import style from "../../styles/taskView.module.scss";
import FixedSpinner from "../layout/FixedSpinner";
import NoDataCopmonent from "../layout/NoDataCopmonent";
import TaskDetailsLeft from "./TaskDetailsLeft";
import TaskDetailsRight from "./TaskDetailsRight";

const TaskViewComponent = () => {
  const { getSingleTask } = useActions();

  const { data, loading }: GetSingleTaskState = useTypedSelector(
    (state) => state.singleTask
  );
  const router = useRouter();

  const { task } = router.query;

  useEffect(() => {
    if (router.isReady) getSingleTask("sd", task!);
  }, [router.isReady]);

  return (
    <div className={style.taskViewMain}>
      {loading && <FixedSpinner />}
      {!loading && !data?.data.id ? (
        <NoDataCopmonent text="no such Tasks found" />
      ) : (
        <>
          <TaskDetailsLeft taskData={data?.data!} />
          <TaskDetailsRight />
        </>
      )}
    </div>
  );
};

export default TaskViewComponent;
